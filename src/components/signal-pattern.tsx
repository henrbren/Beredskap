import { View } from 'react-native';

import { usePalette } from '@/theme';

/**
 * A tiny «oscillogram» of each siren signal so people recognise the sound
 * pattern at a glance.
 */
const patterns: Record<string, number[][]> = {
  // 3 serier à 3 støt, ett minutts pause mellom seriene.
  'viktig-melding': [
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10],
  ],
  // Korte støt i ca. ett minutt.
  flyalarm: [Array.from({ length: 16 }, () => 4)],
  // Ett sammenhengende støt i ca. 30 sek.
  'faren-over': [[120]],
};

export function SignalPattern({ id }: { id: string }) {
  const p = usePalette();
  const groups = patterns[id] ?? [];
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14 }} accessibilityElementsHidden>
      {groups.map((g, gi) => (
        <View key={gi} style={{ flexDirection: 'row', gap: 3 }}>
          {g.map((w, i) => (
            <View key={i} style={{ width: w, height: 12, borderRadius: 3, backgroundColor: p.signal }} />
          ))}
        </View>
      ))}
    </View>
  );
}
