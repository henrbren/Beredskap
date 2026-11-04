import { useWindowDimensions } from 'react-native';

/** Breakpoints for the responsive (web/tablet) layout. */
export const WIDE = 960;
export const CONTENT_MAX = 760;
export const CONTENT_MAX_WIDE = 1120;

export function useLayout() {
  const { width } = useWindowDimensions();
  const wide = width >= WIDE;
  return { width, wide, sidebar: wide ? 248 : 0 };
}
