import Svg, { Path, Rect } from 'react-native-svg';

import { usePalette } from '@/theme';

/**
 * Merket: et signaloransje felt med tre «hyller» som smalner av —
 * lageret, trappen og varselet i ett.
 */
export function Logo({ size = 40 }: { size?: number }) {
  const p = usePalette();
  return (
    <Svg width={size} height={size} viewBox="0 0 40 40">
      <Rect x={0} y={0} width={40} height={40} rx={11} fill={p.signal} />
      <Path d="M9 27h22" stroke={p.onSignal} strokeWidth={3.4} strokeLinecap="round" />
      <Path d="M13 20h14" stroke={p.onSignal} strokeWidth={3.4} strokeLinecap="round" />
      <Path d="M17 13h6" stroke={p.onSignal} strokeWidth={3.4} strokeLinecap="round" />
    </Svg>
  );
}
