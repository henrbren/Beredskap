import Constants from 'expo-constants';
import { File } from 'expo-file-system';

import type { Bounds } from '@/store/offline';

import { appDir, hasFileSystem } from './files';

export const TILE_SIZE = 256;
export const MIN_ZOOM = 4;
export const MAX_ZOOM = 17;

/**
 * Kartverkets åpne topografiske kart (CC BY 4.0) i Web Mercator.
 * Kan overstyres i app.json → expo.extra.mapTileUrl ({z}/{x}/{y}).
 */
const DEFAULT_TILE_URL = 'https://cache.kartverket.no/v1/wmts/1.0.0/topo/default/webmercator/{z}/{y}/{x}.png';
export const MAP_ATTRIBUTION = '© Kartverket';

export function tileUrl(z: number, x: number, y: number): string {
  const extra = Constants.expoConfig?.extra as { mapTileUrl?: string } | undefined;
  const tpl = extra?.mapTileUrl || DEFAULT_TILE_URL;
  return tpl.replace('{z}', String(z)).replace('{x}', String(x)).replace('{y}', String(y));
}

// ─── Web Mercator math ─────────────────────────────────────────────────────

/** World pixel coordinates at a zoom level. */
export function project(lat: number, lon: number, z: number) {
  const scale = TILE_SIZE * 2 ** z;
  const sin = Math.sin((Math.max(-85, Math.min(85, lat)) * Math.PI) / 180);
  return {
    x: ((lon + 180) / 360) * scale,
    y: (0.5 - Math.log((1 + sin) / (1 - sin)) / (4 * Math.PI)) * scale,
  };
}

export function unproject(x: number, y: number, z: number) {
  const scale = TILE_SIZE * 2 ** z;
  const lon = (x / scale) * 360 - 180;
  const n = Math.PI - (2 * Math.PI * y) / scale;
  const lat = (180 / Math.PI) * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
  return { lat, lon };
}

export function tileRange(b: Bounds, z: number) {
  const nw = project(b.north, b.west, z);
  const se = project(b.south, b.east, z);
  return {
    x0: Math.floor(nw.x / TILE_SIZE),
    x1: Math.floor(se.x / TILE_SIZE),
    y0: Math.floor(nw.y / TILE_SIZE),
    y1: Math.floor(se.y / TILE_SIZE),
  };
}

export function countTiles(b: Bounds, minZ: number, maxZ: number): number {
  let n = 0;
  for (let z = minZ; z <= maxZ; z++) {
    const r = tileRange(b, z);
    n += (r.x1 - r.x0 + 1) * (r.y1 - r.y0 + 1);
  }
  return n;
}

/** Rough average size of a topo PNG tile. */
export const AVG_TILE_BYTES = 18_000;

// ─── Local tile cache ──────────────────────────────────────────────────────

function tileFile(z: number, x: number, y: number): File | null {
  const dir = appDir('kart');
  return dir ? new File(dir, `${z}-${x}-${y}.png`) : null;
}

const known = new Map<string, boolean>();

/** Local file uri if the tile is downloaded, otherwise the network url. */
export function tileSource(z: number, x: number, y: number): string {
  if (hasFileSystem) {
    const key = `${z}-${x}-${y}`;
    let has = known.get(key);
    if (has === undefined) {
      const f = tileFile(z, x, y);
      has = !!f?.exists;
      known.set(key, has);
    }
    if (has) return tileFile(z, x, y)!.uri;
  }
  return tileUrl(z, x, y);
}

export interface DownloadProgress {
  done: number;
  total: number;
  bytes: number;
  failed: number;
}

/**
 * Downloads every tile in the bounds for the zoom range. Skips tiles that
 * already exist, runs a few requests in parallel and can be aborted.
 */
export async function downloadTiles(
  b: Bounds,
  minZ: number,
  maxZ: number,
  onProgress: (p: DownloadProgress) => void,
  signal?: { aborted: boolean },
): Promise<DownloadProgress> {
  const jobs: [number, number, number][] = [];
  for (let z = minZ; z <= maxZ; z++) {
    const r = tileRange(b, z);
    for (let x = r.x0; x <= r.x1; x++) for (let y = r.y0; y <= r.y1; y++) jobs.push([z, x, y]);
  }
  const p: DownloadProgress = { done: 0, total: jobs.length, bytes: 0, failed: 0 };
  if (!hasFileSystem) return p;

  let i = 0;
  const worker = async () => {
    while (i < jobs.length && !signal?.aborted) {
      const [z, x, y] = jobs[i++];
      const f = tileFile(z, x, y)!;
      try {
        if (!f.exists) {
          const out = await File.downloadFileAsync(tileUrl(z, x, y), f, { idempotent: true });
          p.bytes += out.size ?? 0;
        } else {
          p.bytes += f.size ?? 0;
        }
        known.set(`${z}-${x}-${y}`, true);
      } catch {
        p.failed++;
      }
      p.done++;
      if (p.done % 8 === 0 || p.done === p.total) onProgress({ ...p });
    }
  };
  await Promise.all([worker(), worker(), worker(), worker()]);
  onProgress({ ...p });
  return p;
}

/** Deletes tiles of an area that no other area needs. */
export function deleteTiles(area: { bounds: Bounds; minZoom: number; maxZoom: number }, keep: { bounds: Bounds; minZoom: number; maxZoom: number }[]) {
  if (!hasFileSystem) return;
  const needed = (z: number, x: number, y: number) =>
    keep.some((k) => {
      if (z < k.minZoom || z > k.maxZoom) return false;
      const r = tileRange(k.bounds, z);
      return x >= r.x0 && x <= r.x1 && y >= r.y0 && y <= r.y1;
    });
  for (let z = area.minZoom; z <= area.maxZoom; z++) {
    const r = tileRange(area.bounds, z);
    for (let x = r.x0; x <= r.x1; x++)
      for (let y = r.y0; y <= r.y1; y++) {
        if (needed(z, x, y)) continue;
        try {
          const f = tileFile(z, x, y);
          if (f?.exists) f.delete();
        } catch {
          // ignore
        }
        known.delete(`${z}-${x}-${y}`);
      }
  }
}
