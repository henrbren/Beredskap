import type { Accent } from '@/data/types';

/**
 * «Feltmanual»-designspråket: varmt papir/blekk, ett skarpt signaloransje,
 * monospace-etiketter og tynne linjer — som en moderne beredskapshåndbok.
 */
const accents = {
  light: {
    signal: '#F2481B',
    moss: '#3C7A4E',
    amber: '#C98A00',
    ice: '#2A74A8',
    clay: '#B04E36',
    violet: '#6A55A8',
  },
  dark: {
    signal: '#FF5A26',
    moss: '#5FAE76',
    amber: '#F0B429',
    ice: '#5AA7DC',
    clay: '#E07A5F',
    violet: '#A08CF0',
  },
} satisfies Record<'light' | 'dark', Record<Accent, string>>;

export const palettes = {
  light: {
    bg: '#F2EFE7',
    surface: '#FBFAF6',
    surfaceAlt: '#E9E5DA',
    ink: '#13140F',
    inkSoft: '#3A3B35',
    muted: '#76746B',
    line: '#DCD7CA',
    onSignal: '#FFFFFF',
    inverse: '#13140F',
    onInverse: '#F2EFE7',
    ok: accents.light.moss,
    warn: accents.light.amber,
    danger: '#D42A1E',
    ...accents.light,
  },
  dark: {
    bg: '#0C0D0B',
    surface: '#161714',
    surfaceAlt: '#1F201C',
    ink: '#EEEBE2',
    inkSoft: '#C9C6BC',
    muted: '#8C8A81',
    line: '#2A2B26',
    onSignal: '#0C0D0B',
    inverse: '#EEEBE2',
    onInverse: '#0C0D0B',
    ok: accents.dark.moss,
    warn: accents.dark.amber,
    danger: '#FF4D3D',
    ...accents.dark,
  },
};

export type Palette = typeof palettes.light;

export const fonts = {
  regular: 'SpaceGrotesk_400Regular',
  medium: 'SpaceGrotesk_500Medium',
  semibold: 'SpaceGrotesk_600SemiBold',
  bold: 'SpaceGrotesk_700Bold',
  mono: 'JetBrainsMono_500Medium',
  monoBold: 'JetBrainsMono_700Bold',
};

export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32, xxxl: 48 };

export const radius = { sm: 6, md: 12, lg: 18, xl: 26, pill: 999 };

export const gutter = 20;
