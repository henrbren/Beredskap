import { useSyncExternalStore } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import {
  supplyTemplates,
  targetFor,
  templateApplies,
  templateById,
  type HouseholdShape,
} from '@/data/checklist';
import type { SupplyCategory } from '@/data/types';
import { addMonths, toISODate } from '@/lib/dates';

export interface Household extends HouseholdShape {
  municipality: string;
}

export interface InventoryItem {
  id: string;
  /** Set for items created from the DSB-based template. */
  templateId?: string;
  name: string;
  category: SupplyCategory;
  unit: string;
  target: number;
  have: number;
  /** ISO date (yyyy-mm-dd) — best før / bytt innen. */
  expiry?: string;
  note?: string;
  /** User manually changed the target; don't overwrite when household changes. */
  customTarget?: boolean;
}

export interface Contact {
  id: string;
  name: string;
  relation: string;
  phone: string;
}

export interface Member {
  id: string;
  name: string;
  /** Allergier, medisiner, diagnoser, blodtype — whatever responders need. */
  medical: string;
}

export interface CrisisCard {
  address: string;
  meetingPoint: string;
  meetingPointAlt: string;
  outOfTownContact: string;
  waterMain: string;
  fuseBox: string;
  notes: string;
  members: Member[];
  contacts: Contact[];
}

export interface Settings {
  theme: 'system' | 'light' | 'dark';
  notifications: boolean;
  /** Varsle så mange dager før «bytt innen»-datoen. */
  reminderDaysBefore: number;
  /** Kvartalsvis påminnelse om å gå gjennom lageret. */
  quarterlyCheck: boolean;
  haptics: boolean;
}

interface AppState {
  onboarded: boolean;
  household: Household;
  inventory: InventoryItem[];
  card: CrisisCard;
  settings: Settings;
  premium: boolean;
  /** `${bookId}/${chapterId}` → read timestamp */
  read: Record<string, number>;
  /** Scenario ids the user has pinned to the home screen. */
  pinned: string[];
  lastReview?: string;

  completeOnboarding: (h: Household) => void;
  setHousehold: (h: Partial<Household>) => void;
  setHave: (id: string, have: number) => void;
  updateItem: (id: string, patch: Partial<InventoryItem>) => void;
  addItem: (item: Omit<InventoryItem, 'id'>) => void;
  removeItem: (id: string) => void;
  restockItem: (id: string) => void;
  markReviewed: () => void;
  setCard: (patch: Partial<CrisisCard>) => void;
  upsertContact: (c: Contact) => void;
  removeContact: (id: string) => void;
  upsertMember: (m: Member) => void;
  removeMember: (id: string) => void;
  setSettings: (patch: Partial<Settings>) => void;
  setPremium: (v: boolean) => void;
  markRead: (bookId: string, chapterId: string) => void;
  togglePin: (scenarioId: string) => void;
  reset: () => void;
}

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);

const defaultHousehold: Household = { adults: 2, children: 0, pets: 0, days: 7, municipality: '' };

const defaultCard: CrisisCard = {
  address: '',
  meetingPoint: '',
  meetingPointAlt: '',
  outOfTownContact: '',
  waterMain: '',
  fuseBox: '',
  notes: '',
  members: [],
  contacts: [],
};

const defaultSettings: Settings = {
  theme: 'system',
  notifications: true,
  reminderDaysBefore: 30,
  quarterlyCheck: true,
  haptics: true,
};

/** Build the inventory for a household, keeping progress for items that already exist. */
export function buildInventory(h: HouseholdShape, existing: InventoryItem[] = []): InventoryItem[] {
  const byTemplate = new Map(existing.filter((i) => i.templateId).map((i) => [i.templateId!, i]));
  const fromTemplates: InventoryItem[] = supplyTemplates
    .filter((t) => templateApplies(t, h))
    .map((t) => {
      const prev = byTemplate.get(t.id);
      const target = targetFor(t, h);
      if (prev) return prev.customTarget ? prev : { ...prev, target };
      return {
        id: t.id,
        templateId: t.id,
        name: t.name,
        category: t.category,
        unit: t.unit,
        target,
        have: 0,
      };
    });
  const custom = existing.filter((i) => !i.templateId);
  return [...fromTemplates, ...custom];
}

const initial = {
  onboarded: false,
  household: defaultHousehold,
  inventory: buildInventory(defaultHousehold),
  card: defaultCard,
  settings: defaultSettings,
  premium: false,
  read: {},
  pinned: ['stromstans', 'flyalarm'],
  lastReview: undefined,
};

export const useApp = create<AppState>()(
  persist(
    (set, get) => ({
      ...initial,

      completeOnboarding: (h) =>
        set((s) => ({ onboarded: true, household: h, inventory: buildInventory(h, s.inventory) })),

      setHousehold: (patch) =>
        set((s) => {
          const household = { ...s.household, ...patch };
          return { household, inventory: buildInventory(household, s.inventory) };
        }),

      setHave: (id, have) =>
        set((s) => ({
          inventory: s.inventory.map((i) => {
            if (i.id !== id) return i;
            const next = { ...i, have: Math.max(0, have) };
            // First time something perishable is stocked → suggest a rotation date.
            const t = i.templateId ? templateById[i.templateId] : undefined;
            if (i.have === 0 && have > 0 && !i.expiry && t?.rotateMonths) {
              next.expiry = toISODate(addMonths(new Date(), t.rotateMonths));
            }
            return next;
          }),
        })),

      updateItem: (id, patch) =>
        set((s) => ({ inventory: s.inventory.map((i) => (i.id === id ? { ...i, ...patch } : i)) })),

      addItem: (item) => set((s) => ({ inventory: [...s.inventory, { ...item, id: uid() }] })),

      removeItem: (id) => set((s) => ({ inventory: s.inventory.filter((i) => i.id !== id) })),

      /** «Byttet ut» — fills the item and sets a new rotation date. */
      restockItem: (id) =>
        set((s) => ({
          inventory: s.inventory.map((i) => {
            if (i.id !== id) return i;
            const t = i.templateId ? templateById[i.templateId] : undefined;
            const months = t?.rotateMonths ?? 12;
            return {
              ...i,
              have: Math.max(i.have, i.target),
              expiry: toISODate(addMonths(new Date(), months)),
            };
          }),
        })),

      markReviewed: () => set({ lastReview: toISODate(new Date()) }),

      setCard: (patch) => set((s) => ({ card: { ...s.card, ...patch } })),

      upsertContact: (c) =>
        set((s) => {
          const exists = s.card.contacts.some((x) => x.id === c.id);
          const contacts = exists
            ? s.card.contacts.map((x) => (x.id === c.id ? c : x))
            : [...s.card.contacts, c];
          return { card: { ...s.card, contacts } };
        }),

      removeContact: (id) =>
        set((s) => ({ card: { ...s.card, contacts: s.card.contacts.filter((c) => c.id !== id) } })),

      upsertMember: (m) =>
        set((s) => {
          const exists = s.card.members.some((x) => x.id === m.id);
          const members = exists ? s.card.members.map((x) => (x.id === m.id ? m : x)) : [...s.card.members, m];
          return { card: { ...s.card, members } };
        }),

      removeMember: (id) =>
        set((s) => ({ card: { ...s.card, members: s.card.members.filter((m) => m.id !== id) } })),

      setSettings: (patch) => set((s) => ({ settings: { ...s.settings, ...patch } })),

      setPremium: (premium) => set({ premium }),

      markRead: (bookId, chapterId) => set((s) => ({ read: { ...s.read, [`${bookId}/${chapterId}`]: Date.now() } })),

      togglePin: (id) =>
        set((s) => ({ pinned: s.pinned.includes(id) ? s.pinned.filter((p) => p !== id) : [...s.pinned, id] })),

      reset: () => set({ ...initial, inventory: buildInventory(defaultHousehold) }),
    }),
    {
      name: 'beredskap/app',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({
        onboarded: s.onboarded,
        household: s.household,
        inventory: s.inventory,
        card: s.card,
        settings: s.settings,
        premium: s.premium,
        read: s.read,
        pinned: s.pinned,
        lastReview: s.lastReview,
      }),
    },
  ),
);

/** True once the persisted state has been loaded from disk. */
export function useHydrated() {
  return useSyncExternalStore(
    (cb) => useApp.persist.onFinishHydration(cb),
    () => useApp.persist.hasHydrated(),
    () => false,
  );
}
