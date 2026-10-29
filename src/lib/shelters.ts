import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from 'expo-constants';
import { create } from 'zustand';

import { utmToLatLon, type LatLon } from './geo';

export interface Shelter extends LatLon {
  id: string;
  address: string;
  /** Antall plasser. */
  capacity?: number;
  /** Romnummer / navn fra DSB. */
  label?: string;
}

interface ShelterState {
  shelters: Shelter[];
  updatedAt?: number;
  source: 'none' | 'bundled' | 'cache' | 'network';
  status: 'idle' | 'loading' | 'error';
  error?: string;
  load: () => Promise<void>;
  refresh: () => Promise<void>;
}

const CACHE_KEY = 'beredskap/shelters/v1';

/**
 * Offentlige tilfluktsrom fra DSB (åpne data, oppført på data.norge.no/Geonorge).
 * Den første URL-en kan overstyres i app.json → expo.extra.sheltersUrl.
 * Formatet er GeoJSON; vi prøver kildene i rekkefølge.
 */
const SOURCES = [
  'https://raw.githubusercontent.com/dsb-norge/static-share/master/shelters.json',
  'https://ogc.dsb.no/wfs.ashx?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&TYPENAMES=layer_340&OUTPUTFORMAT=application/json&SRSNAME=EPSG:4326',
];

function sheltersUrls(): string[] {
  const extra = Constants.expoConfig?.extra as { sheltersUrl?: string } | undefined;
  return extra?.sheltersUrl ? [extra.sheltersUrl, ...SOURCES] : SOURCES;
}

async function fetchShelters(): Promise<Shelter[]> {
  let lastError: unknown;
  for (const url of sheltersUrls()) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const shelters = parseShelters(await res.json());
      if (shelters.length) return shelters;
      throw new Error('Fant ingen tilfluktsrom i datasettet');
    } catch (e) {
      lastError = e;
    }
  }
  throw lastError ?? new Error('Ingen datakilde svarte');
}

function pick(props: Record<string, unknown>, keys: string[]): unknown {
  const lower = Object.fromEntries(Object.entries(props).map(([k, v]) => [k.toLowerCase(), v]));
  for (const k of keys) if (lower[k] != null && lower[k] !== '') return lower[k];
  return undefined;
}

function zoneFromCrs(json: any): number | undefined {
  const name: string = json?.crs?.properties?.name ?? '';
  const m = name.match(/258(3[2-5])/);
  return m ? Number(m[1]) : undefined;
}

/** Parses a GeoJSON FeatureCollection of shelters, tolerant to DSB's field naming. */
export function parseShelters(json: any): Shelter[] {
  const features: any[] = Array.isArray(json) ? json : (json?.features ?? []);
  const zone = zoneFromCrs(json);
  const out: Shelter[] = [];
  features.forEach((f, idx) => {
    const g = f?.geometry;
    let coords: number[] | undefined;
    if (g?.type === 'Point') coords = g.coordinates;
    else if (g?.type === 'MultiPoint') coords = g.coordinates?.[0];
    if (!coords || coords.length < 2) return;
    let [x, y] = coords;
    let pos: LatLon;
    if (Math.abs(x) <= 180 && Math.abs(y) <= 90) pos = { lat: y, lon: x };
    else pos = utmToLatLon(x, y, zone ?? 33);
    if (!Number.isFinite(pos.lat) || !Number.isFinite(pos.lon)) return;

    const p = (f.properties ?? {}) as Record<string, unknown>;
    const address = String(pick(p, ['adresse', 'address', 'gateadresse', 'navn', 'name']) ?? 'Tilfluktsrom');
    const capRaw = pick(p, ['plasser', 'antallplasser', 'kapasitet', 'capacity']);
    const capacity = capRaw != null ? Number(capRaw) : undefined;
    const label = pick(p, ['romnr', 'romnummer', 'id', 'objid']);
    out.push({
      id: String(f.id ?? label ?? idx),
      ...pos,
      address,
      capacity: Number.isFinite(capacity) ? capacity : undefined,
      label: label != null ? String(label) : undefined,
    });
  });
  return out;
}

// Bundled snapshot, refreshed with `npm run fetch:shelters` before a release.
const bundled = parseShelters(require('../../assets/data/tilfluktsrom.json'));

export const useShelters = create<ShelterState>((set, get) => ({
  shelters: bundled,
  source: bundled.length ? 'bundled' : 'none',
  status: 'idle',

  load: async () => {
    try {
      const raw = await AsyncStorage.getItem(CACHE_KEY);
      if (raw) {
        const cached = JSON.parse(raw) as { updatedAt: number; shelters: Shelter[] };
        if (cached.shelters?.length) {
          set({ shelters: cached.shelters, updatedAt: cached.updatedAt, source: 'cache' });
        }
      }
    } catch {
      // Ignore a corrupt cache; the bundled data is still there.
    }
  },

  refresh: async () => {
    if (get().status === 'loading') return;
    set({ status: 'loading', error: undefined });
    try {
      const shelters = await fetchShelters();
      const updatedAt = Date.now();
      set({ shelters, updatedAt, source: 'network', status: 'idle' });
      await AsyncStorage.setItem(CACHE_KEY, JSON.stringify({ updatedAt, shelters }));
    } catch (e) {
      set({ status: 'error', error: e instanceof Error ? e.message : String(e) });
    }
  },
}));
