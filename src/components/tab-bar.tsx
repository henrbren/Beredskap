import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { BottomTabBarProps } from 'expo-router/js-tabs';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { IconName } from '@/data/types';
import { haptic } from '@/lib/haptics';
import { fonts, radius, usePalette } from '@/theme';

const meta: Record<string, { label: string; icon: IconName; iconActive: IconName }> = {
  index: { label: 'I dag', icon: 'view-dashboard-outline', iconActive: 'view-dashboard' },
  'hva-hvis': { label: 'Hva hvis', icon: 'lightning-bolt-outline', iconActive: 'lightning-bolt' },
  kart: { label: 'Kart', icon: 'map-outline', iconActive: 'map' },
  bibliotek: { label: 'Bibliotek', icon: 'book-open-outline', iconActive: 'book-open-variant' },
  verktoy: { label: 'Verktøy', icon: 'toolbox-outline', iconActive: 'toolbox' },
};

/** Floating, ink-coloured tab bar with a signal-orange active pill. */
export function TabBar({ state, navigateToTab, insets }: BottomTabBarProps) {
  const p = usePalette();
  return (
    <View pointerEvents="box-none" style={[styles.wrap, { paddingBottom: Math.max(insets.bottom, 12) }]}>
      <View style={[styles.bar, { backgroundColor: p.inverse }]}>
        {state.routes.map((route, index) => {
          const m = meta[route.name];
          if (!m) return null;
          const focused = state.index === index;
          return (
            <Pressable
              key={route.key}
              accessibilityRole="tab"
              accessibilityState={{ selected: focused }}
              accessibilityLabel={m.label}
              onPress={() => {
                if (!focused) {
                  haptic.select();
                  navigateToTab(route.key);
                }
              }}
              style={styles.item}>
              <View style={[styles.pill, focused && { backgroundColor: p.signal }]}>
                <MaterialCommunityIcons
                  name={focused ? m.iconActive : m.icon}
                  size={21}
                  color={focused ? p.onSignal : p.onInverse}
                  style={{ opacity: focused ? 1 : 0.7 }}
                />
              </View>
              <Text
                numberOfLines={1}
                style={[styles.label, { color: p.onInverse, opacity: focused ? 1 : 0.55 }]}>
                {m.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingHorizontal: 14 },
  bar: {
    flexDirection: 'row',
    borderRadius: radius.xl,
    paddingVertical: 8,
    paddingHorizontal: 6,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 12,
    maxWidth: 560,
    width: '100%',
    alignSelf: 'center',
  },
  item: { flex: 1, alignItems: 'center', gap: 3 },
  pill: { width: 48, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  label: { fontFamily: fonts.mono, fontSize: 9.5, letterSpacing: 0.6, textTransform: 'uppercase' },
});
