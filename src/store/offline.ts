import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { IconName } from '@/data/types';

import { uid } from './app';

export interface Bounds {
  north: number;
  south: number;
  east: number;
  west: number;
}

export interface MapArea {
  id: string;
  name: string;
  bounds: Bounds;
  minZoom: number;
  maxZoom: number;
  tiles: number;
  bytes: number;
  createdAt: number;
  /** false while downloading or if a download was interrupted */
  complete: boolean;
}

export type WaypointKind = 'motested' | 'infopunkt' | 'vann' | 'ly' | 'bil' | 'forsyning' | 'fare' | 'annet';

export const waypointKinds: Record<WaypointKind, { label: string; icon: IconName }> = {
  motested: { label: 'Møtested', icon: 'account-group' },
  infopunkt: { label: 'Infopunkt', icon: 'information' },
  vann: { label: 'Vannkilde', icon: 'water' },
  ly: { label: 'Ly / hytte', icon: 'home-roof' },
  bil: { label: 'Bil', icon: 'car' },
  forsyning: { label: 'Forsyninger', icon: 'package-variant' },
  fare: { label: 'Fare', icon: 'alert' },
  annet: { label: 'Annet', icon: 'map-marker' },
};

export interface Waypoint {
  id: string;
  name: string;
  kind: WaypointKind;
  lat: number;
  lon: number;
  note?: string;
  createdAt: number;
}

export interface ArchiveDoc {
  id: string;
  title: string;
  /** file:// uri inside the app's document directory */
  uri: string;
  width?: number;
  height?: number;
  createdAt: number;
}

export interface LogEntry {
  id: string;
  text: string;
  at: number;
  lat?: number;
  lon?: number;
}

export interface QuizResult {
  best: number;
  total: number;
  attempts: number;
  lastAt: number;
}

interface OfflineState {
  areas: MapArea[];
  waypoints: Waypoint[];
  docs: ArchiveDoc[];
  log: LogEntry[];
  quiz: Record<string, QuizResult>;
  /** id of the downloaded on-device AI model, if any */
  modelId?: string;
  modelBytes?: number;
  lastMapView?: { lat: number; lon: number; zoom: number };

  upsertArea: (a: MapArea) => void;
  removeArea: (id: string) => void;
  addWaypoint: (w: Omit<Waypoint, 'id' | 'createdAt'>) => void;
  updateWaypoint: (id: string, patch: Partial<Waypoint>) => void;
  removeWaypoint: (id: string) => void;
  addDoc: (d: Omit<ArchiveDoc, 'id' | 'createdAt'>) => void;
  renameDoc: (id: string, title: string) => void;
  removeDoc: (id: string) => void;
  addLog: (e: Omit<LogEntry, 'id' | 'at'>) => void;
  removeLog: (id: string) => void;
  recordQuiz: (id: string, score: number, total: number) => void;
  setModel: (id?: string, bytes?: number) => void;
  setLastMapView: (v: { lat: number; lon: number; zoom: number }) => void;
}

export const useOffline = create<OfflineState>()(
  persist(
    (set) => ({
      areas: [],
      waypoints: [],
      docs: [],
      log: [],
      quiz: {},

      upsertArea: (a) =>
        set((s) => ({ areas: s.areas.some((x) => x.id === a.id) ? s.areas.map((x) => (x.id === a.id ? a : x)) : [...s.areas, a] })),
      removeArea: (id) => set((s) => ({ areas: s.areas.filter((a) => a.id !== id) })),

      addWaypoint: (w) => set((s) => ({ waypoints: [...s.waypoints, { ...w, id: uid(), createdAt: Date.now() }] })),
      updateWaypoint: (id, patch) => set((s) => ({ waypoints: s.waypoints.map((w) => (w.id === id ? { ...w, ...patch } : w)) })),
      removeWaypoint: (id) => set((s) => ({ waypoints: s.waypoints.filter((w) => w.id !== id) })),

      addDoc: (d) => set((s) => ({ docs: [{ ...d, id: uid(), createdAt: Date.now() }, ...s.docs] })),
      renameDoc: (id, title) => set((s) => ({ docs: s.docs.map((d) => (d.id === id ? { ...d, title } : d)) })),
      removeDoc: (id) => set((s) => ({ docs: s.docs.filter((d) => d.id !== id) })),

      addLog: (e) => set((s) => ({ log: [{ ...e, id: uid(), at: Date.now() }, ...s.log] })),
      removeLog: (id) => set((s) => ({ log: s.log.filter((e) => e.id !== id) })),

      recordQuiz: (id, score, total) =>
        set((s) => {
          const prev = s.quiz[id];
          return {
            quiz: {
              ...s.quiz,
              [id]: { best: Math.max(prev?.best ?? 0, score), total, attempts: (prev?.attempts ?? 0) + 1, lastAt: Date.now() },
            },
          };
        }),

      setModel: (modelId, modelBytes) => set({ modelId, modelBytes }),
      setLastMapView: (lastMapView) => set({ lastMapView }),
    }),
    {
      name: 'beredskap/offline',
      version: 1,
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
