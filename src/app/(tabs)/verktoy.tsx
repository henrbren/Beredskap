import { router, type Href } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Icon, SectionLabel, Tap, Txt } from '@/components/ui';
import type { IconName } from '@/data/types';
import { usePalette, radius, space } from '@/theme';

interface Tool {
  href: Href;
  icon: IconName;
  label: string;
  hint: string;
  urgent?: boolean;
}

const NOW: Tool[] = [
  { href: '/sos', icon: 'alarm-light', label: 'SOS-signal', hint: 'Lys, lyd og fløyte', urgent: true },
  { href: '/lys', icon: 'flashlight', label: 'Lommelykt', hint: 'Lykt og skjermlys' },
  { href: '/posisjon', icon: 'crosshairs-gps', label: 'Min posisjon', hint: 'Les opp for 113' },
  { href: '/kompass', icon: 'compass-outline', label: 'Kompass', hint: 'Retning og kurs' },
];

const PLAN: Tool[] = [
  { href: '/lager', icon: 'package-variant-closed', label: 'Lager', hint: 'Sjekkliste og rotasjon' },
  { href: '/krisekort', icon: 'card-account-details-outline', label: 'Krisekort', hint: 'Møtested og kontakter' },
  { href: '/radar', icon: 'shield-home-outline', label: 'Tilfluktsrom', hint: 'Radar til nærmeste' },
  { href: '/nodnumre', icon: 'phone-alert-outline', label: 'Nødnumre', hint: 'Og varselsignaler' },
];

const FIELD: Tool[] = [
  { href: '/sol', icon: 'weather-sunset', label: 'Sol og lys', hint: 'Når blir det mørkt?' },
  { href: '/morse', icon: 'dots-horizontal-circle-outline', label: 'Morse', hint: 'Oversett og blink' },
  { href: '/kalkulator', icon: 'calculator-variant-outline', label: 'Kalkulatorer', hint: 'Vann, strøm, omregning' },
  { href: '/arkiv', icon: 'folder-lock-outline', label: 'Arkiv og logg', hint: 'Dokumenter offline' },
];

export default function Verktoy() {
  return (
    <Screen inTabs eyebrow="Fungerer uten nett" title="Verktøy">
      <Group index="01" title="Akkurat nå" tools={NOW} />
      <Group index="02" title="Planlegging" tools={PLAN} />
      <Group index="03" title="I felt" tools={FIELD} />
      <Tap onPress={() => router.push('/lagring')} style={{ marginTop: space.md }}>
        <OfflineCenterCard />
      </Tap>
    </Screen>
  );
}

function Group({ index, title, tools }: { index: string; title: string; tools: Tool[] }) {
  const p = usePalette();
  return (
    <View style={{ marginBottom: space.xl }}>
      <SectionLabel index={index}>{title}</SectionLabel>
      <View style={styles.grid}>
        {tools.map((t) => (
          <Tap
            key={t.label}
            onPress={() => router.push(t.href)}
            style={[styles.tile, { backgroundColor: t.urgent ? p.signal : p.surface, borderColor: t.urgent ? p.signal : p.line }]}>
            <Icon name={t.icon} size={28} color={t.urgent ? p.onSignal : p.ink} />
            <View>
              <Txt variant="bodyStrong" style={t.urgent ? { color: p.onSignal } : undefined}>
                {t.label}
              </Txt>
              <Txt variant="small" style={{ color: t.urgent ? p.onSignal : p.muted, opacity: t.urgent ? 0.85 : 1 }} numberOfLines={1}>
                {t.hint}
              </Txt>
            </View>
          </Tap>
        ))}
      </View>
    </View>
  );
}

function OfflineCenterCard() {
  const p = usePalette();
  return (
    <View style={[styles.center, { backgroundColor: p.inverse }]}>
      <Icon name="database-check-outline" size={26} color={p.signal} />
      <View style={{ flex: 1 }}>
        <Txt variant="bodyStrong" style={{ color: p.onInverse }}>
          Offline-senter
        </Txt>
        <Txt variant="small" style={{ color: p.onInverse, opacity: 0.65 }}>
          Kart, AI-modell, tilfluktsrom og lagring
        </Txt>
      </View>
      <Icon name="arrow-right" color={p.onInverse} />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  tile: {
    flexBasis: '47%',
    flexGrow: 1,
    minHeight: 118,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.lg,
    padding: 14,
    justifyContent: 'space-between',
  },
  center: { flexDirection: 'row', alignItems: 'center', gap: 12, borderRadius: radius.lg, padding: space.lg },
});
