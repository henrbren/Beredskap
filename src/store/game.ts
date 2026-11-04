import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { badgeById, missionsForWeek, rankFor, weekKey, XP, type MissionDef } from '@/data/game';
import type { IconName } from '@/data/types';

export type GameEvent = MissionDef['event'];

export interface Celebration {
  id: number;
  kind: 'xp' | 'badge' | 'rank';
  title: string;
  subtitle?: string;
  xp: number;
  icon: IconName;
}

interface GameState {
  xp: number;
  /** Keys of one-off rewards already given (dedupes XP). */
  awarded: Record<string, true>;
  badges: Record<string, number>;
  /** week → event → count */
  week: { key: string; counts: Partial<Record<GameEvent, number>>; done: string[] };
  /** Weeks with at least one action, newest last. */
  activeWeeks: string[];
  /** Transient queue for the celebration overlay (not persisted). */
  queue: Celebration[];

  award: (key: string, xp: number, title: string, icon: IconName, event?: GameEvent) => boolean;
  unlockBadge: (id: string) => void;
  shift: () => void;
}

let seq = 1;

export const useGame = create<GameState>()(
  persist(
    (set, get) => ({
      xp: 0,
      awarded: {},
      badges: {},
      week: { key: weekKey(), counts: {}, done: [] },
      activeWeeks: [],
      queue: [],

      award: (key, xp, title, icon, event) => {
        const s = get();
        if (s.awarded[key]) return false;
        const before = rankFor(s.xp);
        let total = xp;
        const queue: Celebration[] = [{ id: seq++, kind: 'xp', title, xp, icon }];

        // Weekly bookkeeping + missions.
        const wk = weekKey();
        const week = s.week.key === wk ? { ...s.week, counts: { ...s.week.counts } } : { key: wk, counts: {}, done: [] as string[] };
        if (event) week.counts[event] = (week.counts[event] ?? 0) + 1;
        week.counts.any = (week.counts.any ?? 0) + 1;
        for (const m of missionsForWeek(wk)) {
          if (week.done.includes(m.id)) continue;
          if ((week.counts[m.event] ?? 0) >= m.goal) {
            week.done = [...week.done, m.id];
            total += XP.mission;
            queue.push({ id: seq++, kind: 'xp', title: `Oppdrag fullført: ${m.title}`, xp: XP.mission, icon: m.icon });
          }
        }
        const activeWeeks = s.activeWeeks.includes(wk) ? s.activeWeeks : [...s.activeWeeks, wk].slice(-60);

        const after = rankFor(s.xp + total);
        if (after.level > before.level) {
          queue.push({ id: seq++, kind: 'rank', title: after.title, subtitle: `Nivå ${after.level}`, xp: 0, icon: after.icon });
        }
        set({
          xp: s.xp + total,
          awarded: { ...s.awarded, [key]: true },
          week,
          activeWeeks,
          queue: [...s.queue, ...queue].slice(-8),
        });
        return true;
      },

      unlockBadge: (id) => {
        const s = get();
        const b = badgeById[id];
        if (!b || s.badges[id]) return;
        const before = rankFor(s.xp);
        const after = rankFor(s.xp + b.xp);
        const queue: Celebration[] = [{ id: seq++, kind: 'badge', title: b.title, subtitle: b.hint, xp: b.xp, icon: b.icon }];
        if (after.level > before.level) queue.push({ id: seq++, kind: 'rank', title: after.title, subtitle: `Nivå ${after.level}`, xp: 0, icon: after.icon });
        set({ xp: s.xp + b.xp, badges: { ...s.badges, [id]: Date.now() }, queue: [...s.queue, ...queue].slice(-8) });
      },

      shift: () => set((s) => ({ queue: s.queue.slice(1) })),
    }),
    {
      name: 'beredskap/game',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({ xp: s.xp, awarded: s.awarded, badges: s.badges, week: s.week, activeWeeks: s.activeWeeks }),
    },
  ),
);

/** Consecutive active weeks up to this (or last) week. */
export function streak(activeWeeks: string[]): number {
  if (!activeWeeks.length) return 0;
  const set = new Set(activeWeeks);
  let n = 0;
  const d = new Date();
  // Allow the current week to be still empty.
  if (!set.has(weekKey(d))) d.setDate(d.getDate() - 7);
  while (set.has(weekKey(d))) {
    n++;
    d.setDate(d.getDate() - 7);
  }
  return n;
}
