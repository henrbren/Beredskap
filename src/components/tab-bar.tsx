import { MaterialCommunityIcons } from '@expo/vector-icons';
import { router, usePathname, type Href } from 'expo-router';
import type { BottomTabBarProps } from 'expo-router/js-tabs';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { rankFor } from '@/data/game';
import type { IconName } from '@/data/types';
import { haptic } from '@/lib/haptics';
import { useLayout } from '@/lib/layout';
import { useGame } from '@/store/game';
import { fonts, radius, usePalette } from '@/theme';

import { Logo } from './logo';

const meta: Record<string, { label: string; icon: IconName; iconActive: IconName }> = {
  index: { label: 'I dag', icon: 'view-dashboard-outline', iconActive: 'view-dashboard' },
  'hva-hvis': { label: 'Hva hvis', icon: 'lightning-bolt-outline', iconActive: 'lightning-bolt' },
  kart: { label: 'Kart', icon: 'map-outline', iconActive: 'map' },
  bibliotek: { label: 'Bibliotek', icon: 'book-open-outline', iconActive: 'book-open-variant' },
  verktoy: { label: 'Verktøy', icon: 'toolbox-outline', iconActive: 'toolbox' },
};

const SECONDARY: { label: string; icon: IconName; href: Href }[] = [
  { label: 'Lager', icon: 'package-variant-closed', href: '/lager' },
  { label: 'Krisekort', icon: 'card-account-details-outline', href: '/krisekort' },
  { label: 'Merker og rang', icon: 'medal-outline', href: '/profil' },
  { label: 'Offline-senter', icon: 'database-check-outline', href: '/lagring' },
  { label: 'Innstillinger', icon: 'cog-outline', href: '/innstillinger' },
];

/** Floating bottom bar on phones, a sidebar on wide screens (web/tablet). */
export function TabBar(props: BottomTabBarProps) {
  const { wide } = useLayout();
  // On wide screens the persistent <Sidebar> in the root layout takes over.
  return wide ? null : <BottomBar {...props} />;
}

const TAB_HREF: Record<string, Href> = {
  index: '/',
  'hva-hvis': '/hva-hvis',
  kart: '/kart',
  bibliotek: '/bibliotek',
  verktoy: '/verktoy',
};

function BottomBar({ state, navigateToTab, insets }: BottomTabBarProps) {
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
              <Text numberOfLines={1} style={[styles.label, { color: p.onInverse, opacity: focused ? 1 : 0.55 }]}>
                {m.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

/** Persistent navigation for wide screens (web/tablet), shown on every page. */
export function Sidebar() {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const pathname = usePathname();
  const xp = useGame((s) => s.xp);
  const rank = rankFor(xp);
  return (
    <View style={[styles.side, { backgroundColor: p.inverse, paddingTop: insets.top + 24, paddingBottom: insets.bottom + 20 }]}>
      <View style={styles.brand}>
        <Logo size={34} />
        <View>
          <Text style={{ fontFamily: fonts.bold, fontSize: 19, letterSpacing: -0.5, color: p.onInverse }}>Beredskap</Text>
          <Text style={{ fontFamily: fonts.mono, fontSize: 9.5, letterSpacing: 1.2, color: p.onInverse, opacity: 0.5 }}>OFFLINE · 7 DØGN</Text>
        </View>
      </View>

      <View style={{ gap: 2 }}>
        {Object.entries(meta).map(([name, m]) => {
          const href = TAB_HREF[name] as string;
          const focused = href === '/' ? pathname === '/' : pathname.startsWith(href);
          return (
            <Pressable
              key={name}
              accessibilityRole="tab"
              accessibilityState={{ selected: focused }}
              onPress={() => !focused && router.navigate(TAB_HREF[name])}
              style={(st) => [
                styles.sideItem,
                focused ? { backgroundColor: p.signal } : (st as { hovered?: boolean }).hovered ? { backgroundColor: '#ffffff12' } : null,
              ]}>
              <MaterialCommunityIcons name={focused ? m.iconActive : m.icon} size={20} color={focused ? p.onSignal : p.onInverse} />
              <Text style={[styles.sideLabel, { color: focused ? p.onSignal : p.onInverse }]}>{m.label}</Text>
            </Pressable>
          );
        })}
      </View>

      <View style={[styles.divider, { backgroundColor: '#ffffff1a' }]} />
      <View style={{ gap: 2 }}>
        {SECONDARY.map((s) => (
          <Pressable
            key={s.label}
            onPress={() => router.push(s.href)}
            style={(st) => [
              styles.sideItem,
              (st as { hovered?: boolean }).hovered && { backgroundColor: '#ffffff12' },
              pathname === s.href && { backgroundColor: '#ffffff1a' },
            ]}>
            <MaterialCommunityIcons name={s.icon} size={18} color={p.onInverse} style={{ opacity: 0.7 }} />
            <Text style={[styles.sideLabel, { color: p.onInverse, opacity: 0.8, fontSize: 14 }]}>{s.label}</Text>
          </Pressable>
        ))}
      </View>

      <View style={{ flex: 1 }} />

      <Pressable onPress={() => router.push('/profil')} style={[styles.rank, { borderColor: '#ffffff1f' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <MaterialCommunityIcons name={rank.icon} size={18} color={p.signal} />
          <Text style={{ fontFamily: fonts.semibold, color: p.onInverse, fontSize: 14, flex: 1 }}>{rank.title}</Text>
          <Text style={{ fontFamily: fonts.mono, color: p.onInverse, opacity: 0.6, fontSize: 11 }}>{xp} XP</Text>
        </View>
        <View style={{ height: 4, borderRadius: 2, backgroundColor: '#ffffff1f', overflow: 'hidden' }}>
          <View style={{ height: 4, width: `${Math.round(rank.progress * 100)}%`, backgroundColor: p.signal }} />
        </View>
      </Pressable>
      <Pressable onPress={() => router.push('/sos')} style={[styles.sos, { backgroundColor: p.signal }]}>
        <MaterialCommunityIcons name="alarm-light" size={18} color={p.onSignal} />
        <Text style={{ fontFamily: fonts.bold, color: p.onSignal, letterSpacing: 1 }}>SOS</Text>
      </Pressable>
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
  side: { width: 248, paddingHorizontal: 14, gap: 14 },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 8, marginBottom: 10 },
  sideItem: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingHorizontal: 12, paddingVertical: 10, borderRadius: radius.md },
  sideLabel: { fontFamily: fonts.medium, fontSize: 15 },
  divider: { height: 1, marginHorizontal: 8 },
  rank: { borderWidth: 1, borderRadius: radius.md, padding: 12, gap: 10 },
  sos: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: radius.pill, paddingVertical: 12 },
});
