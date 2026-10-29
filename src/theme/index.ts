import { useColorScheme } from 'react-native';

import { useApp } from '@/store/app';

import { palettes, type Palette } from './tokens';

export * from './tokens';

export function useScheme(): 'light' | 'dark' {
  const system = useColorScheme();
  const pref = useApp((s) => s.settings.theme);
  if (pref === 'light' || pref === 'dark') return pref;
  return system === 'dark' ? 'dark' : 'light';
}

export function usePalette(): Palette {
  return palettes[useScheme()];
}
