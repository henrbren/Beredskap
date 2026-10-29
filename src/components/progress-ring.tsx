import type { ReactNode } from 'react';
import { View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';

import { usePalette } from '@/theme';

/** Segmented gauge with 60 tick marks — reads like an instrument, not a pie chart. */
export function ProgressRing({
  value,
  size = 168,
  color,
  trackColor,
  children,
}: {
  value: number;
  size?: number;
  color?: string;
  trackColor?: string;
  children?: ReactNode;
}) {
  const p = usePalette();
  const ticks = 60;
  const filled = Math.round(Math.max(0, Math.min(1, value)) * ticks);
  const c = size / 2;
  const rOuter = c - 2;
  const rInner = c - 16;
  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={size} height={size} style={{ position: 'absolute' }}>
        {Array.from({ length: ticks }, (_, i) => {
          const a = (i / ticks) * Math.PI * 2 - Math.PI / 2;
          const on = i < filled;
          const long = i % 5 === 0;
          const r2 = long ? rInner - 4 : rInner;
          return (
            <Line
              key={i}
              x1={c + Math.cos(a) * rOuter}
              y1={c + Math.sin(a) * rOuter}
              x2={c + Math.cos(a) * r2}
              y2={c + Math.sin(a) * r2}
              stroke={on ? (color ?? p.signal) : (trackColor ?? p.line)}
              strokeWidth={long ? 3 : 2.2}
              strokeLinecap="round"
            />
          );
        })}
        <Circle cx={c} cy={c} r={rInner - 14} stroke={trackColor ?? p.line} strokeWidth={1} strokeDasharray="2 4" fill="none" />
      </Svg>
      {children}
    </View>
  );
}
