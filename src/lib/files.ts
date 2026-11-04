import { Directory, File, Paths } from 'expo-file-system';
import { Platform } from 'react-native';

/** The file system is native-only; on web everything degrades gracefully. */
export const hasFileSystem = Platform.OS !== 'web';

export function appDir(name: 'kart' | 'modeller' | 'arkiv'): Directory | null {
  if (!hasFileSystem) return null;
  const dir = new Directory(Paths.document, name);
  if (!dir.exists) dir.create({ intermediates: true, idempotent: true });
  return dir;
}

export function dirBytes(name: 'kart' | 'modeller' | 'arkiv'): number {
  try {
    const d = appDir(name);
    return d?.size ?? 0;
  } catch {
    return 0;
  }
}

export function freeBytes(): number | null {
  if (!hasFileSystem) return null;
  try {
    return Paths.availableDiskSpace;
  } catch {
    return null;
  }
}

export function safeDelete(uri: string) {
  if (!hasFileSystem) return;
  try {
    const f = new File(uri);
    if (f.exists) f.delete();
  } catch {
    // already gone
  }
}

export function formatBytes(b: number): string {
  if (b < 1024) return `${b} B`;
  if (b < 1024 ** 2) return `${Math.round(b / 1024)} KB`;
  if (b < 1024 ** 3) return `${(b / 1024 ** 2).toFixed(b < 10 * 1024 ** 2 ? 1 : 0).replace('.', ',')} MB`;
  return `${(b / 1024 ** 3).toFixed(1).replace('.', ',')} GB`;
}
