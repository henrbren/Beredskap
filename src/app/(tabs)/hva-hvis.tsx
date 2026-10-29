import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Screen } from '@/components/screen';
import { SignalPattern } from '@/components/signal-pattern';
import { Card, Icon, SectionLabel, Tag, Tap, Txt } from '@/components/ui';
import { scenarioCategories, scenarios, severityMeta } from '@/data';
import { sirenSignals } from '@/data/numbers';
import type { Scenario, ScenarioCategory } from '@/data/types';
import { fonts, radius, space, usePalette } from '@/theme';

const norm = (s: string) => s.toLowerCase().normalize('NFKD');

export default function HvaHvis() {
  const p = usePalette();
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<ScenarioCategory | null>(null);

  const results = useMemo(() => {
    const nq = norm(q.trim());
    return scenarios.filter((s) => {
      if (cat && s.category !== cat) return false;
      if (!nq) return true;
      const hay = norm([s.title, s.question, s.summary, ...s.dont, ...s.phases.flatMap((ph) => ph.steps.map((st) => st.title))].join(' '));
      return nq.split(/\s+/).every((w) => hay.includes(w));
    });
  }, [q, cat]);

  const acute = results.filter((s) => s.severity === 'akutt');
  const rest = results.filter((s) => s.severity !== 'akutt');

  return (
    <Screen inTabs eyebrow="Handlingskort" title="Hva gjør jeg hvis …">
      <View style={[styles.search, { backgroundColor: p.surface, borderColor: p.line }]}>
        <Icon name="magnify" tone="muted" />
        <TextInput
          value={q}
          onChangeText={setQ}
          placeholder="Strøm, vann, flom, brann …"
          placeholderTextColor={p.muted}
          style={{ flex: 1, fontFamily: fonts.regular, fontSize: 16, color: p.ink, height: 48 }}
          returnKeyType="search"
          clearButtonMode="while-editing"
        />
      </View>

      <View style={styles.chips}>
        {(Object.keys(scenarioCategories) as ScenarioCategory[]).map((c) => {
          const on = cat === c;
          return (
            <Tap
              key={c}
              onPress={() => setCat(on ? null : c)}
              style={[styles.chip, { backgroundColor: on ? p.inverse : 'transparent', borderColor: on ? p.inverse : p.line }]}>
              <Txt style={{ fontFamily: fonts.medium, fontSize: 13.5, color: on ? p.onInverse : p.ink }}>
                {scenarioCategories[c].label}
              </Txt>
            </Tap>
          );
        })}
      </View>

      {!q && !cat && (
        <View style={{ marginBottom: space.xxl }}>
          <SectionLabel index="!">Hører du tyfonen?</SectionLabel>
          <Card style={{ paddingVertical: 4 }}>
            {sirenSignals.map((sig, i) => (
              <Tap
                key={sig.id}
                onPress={() =>
                  sig.id === 'faren-over'
                    ? router.push({ pathname: '/scenario/[id]', params: { id: 'flyalarm' } })
                    : router.push({ pathname: '/scenario/[id]', params: { id: sig.id } })
                }
                style={[styles.signalRow, i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
                <View style={{ flex: 1, gap: 8 }}>
                  <Txt variant="bodyStrong">{sig.title}</Txt>
                  <SignalPattern id={sig.id} />
                </View>
                <Icon name="chevron-right" tone="muted" />
              </Tap>
            ))}
          </Card>
        </View>
      )}

      {acute.length > 0 && (
        <View style={{ marginBottom: space.xxl }}>
          <SectionLabel index="01">Akutt — handle nå</SectionLabel>
          <View style={{ gap: 10 }}>
            {acute.map((s) => (
              <ScenarioRow key={s.id} s={s} strong />
            ))}
          </View>
        </View>
      )}

      {rest.length > 0 && (
        <View>
          <SectionLabel index={acute.length ? '02' : '01'}>Alvorlig og langvarig</SectionLabel>
          <View style={{ gap: 10 }}>
            {rest.map((s) => (
              <ScenarioRow key={s.id} s={s} />
            ))}
          </View>
        </View>
      )}

      {results.length === 0 && (
        <Card style={{ alignItems: 'center', gap: 8, paddingVertical: space.xxl }}>
          <Icon name="text-search" size={32} tone="muted" />
          <Txt variant="bodyStrong">Ingen treff på «{q}»</Txt>
          <Txt variant="small" tone="muted" style={{ textAlign: 'center' }}>
            Prøv et annet ord. Ved fare for liv: ring 113, 112 eller 110.
          </Txt>
        </Card>
      )}
    </Screen>
  );
}

function ScenarioRow({ s, strong }: { s: Scenario; strong?: boolean }) {
  const p = usePalette();
  const sev = severityMeta[s.severity];
  return (
    <Tap onPress={() => router.push({ pathname: '/scenario/[id]', params: { id: s.id } })}>
      <View style={[styles.row, { backgroundColor: p.surface, borderColor: p.line }]}>
        <View style={[styles.iconBox, { backgroundColor: strong ? p.signal : p.surfaceAlt }]}>
          <Icon name={s.icon} size={24} color={strong ? p.onSignal : p.ink} />
        </View>
        <View style={{ flex: 1, gap: 3 }}>
          <Txt variant="bodyStrong" numberOfLines={2}>
            {s.title}
          </Txt>
          <Txt variant="small" tone="muted" numberOfLines={2}>
            {s.question}
          </Txt>
        </View>
        <View style={{ alignItems: 'flex-end', gap: 8 }}>
          <Tag label={sev.label} accent={sev.accent} />
          <Icon name="arrow-right" size={18} tone="muted" />
        </View>
      </View>
    </Tap>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    marginBottom: space.md,
  },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: space.xl },
  chip: { borderWidth: 1, borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 7 },
  signalRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 14 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.lg,
    padding: 14,
  },
  iconBox: { width: 50, height: 50, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
});
