import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Share, StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Card, Icon, IconButton, Row, SectionLabel, Tag, Tap, Txt } from '@/components/ui';
import { scenarioById, scenarioCategories, severityMeta } from '@/data';
import { bookById } from '@/data/books';
import { templateById } from '@/data/checklist';
import { haptic } from '@/lib/haptics';
import { itemStatus } from '@/lib/readiness';
import { useApp } from '@/store/app';
import { fonts, radius, space, usePalette } from '@/theme';

export default function ScenarioScreen() {
  const p = usePalette();
  const { id } = useLocalSearchParams<{ id: string }>();
  const s = scenarioById[id];
  const pinned = useApp((st) => st.pinned.includes(id));
  const togglePin = useApp((st) => st.togglePin);
  const inventory = useApp((st) => st.inventory);
  const premium = useApp((st) => st.premium);
  const [done, setDone] = useState<Record<string, boolean>>({});

  if (!s) {
    return (
      <Screen back title="Fant ikke scenarioet">
        <Txt tone="muted">Det kan ha blitt flyttet.</Txt>
      </Screen>
    );
  }

  const sev = severityMeta[s.severity];
  const total = s.phases.reduce((a, ph) => a + ph.steps.length, 0);
  const doneCount = Object.values(done).filter(Boolean).length;
  const book = s.relatedBook ? bookById[s.relatedBook] : undefined;

  const share = () => {
    const text = [
      s.question,
      '',
      s.summary,
      '',
      'IKKE:',
      ...s.dont.map((d) => `✕ ${d}`),
      '',
      ...s.phases.flatMap((ph) => [ph.label.toUpperCase(), ...ph.steps.map((st, i) => `${i + 1}. ${st.title}`), '']),
      `Kilde: ${s.source}`,
    ].join('\n');
    Share.share({ message: text, title: s.title }).catch(() => {});
  };

  const offsets = s.phases.map((_, i) => s.phases.slice(0, i).reduce((a, ph) => a + ph.steps.length, 0));

  return (
    <Screen
      back
      right={
        <>
          <IconButton icon="share-variant-outline" label="Del" onPress={share} />
          <IconButton
            icon={pinned ? 'pin' : 'pin-outline'}
            label={pinned ? 'Fjern fra forsiden' : 'Fest til forsiden'}
            onPress={() => {
              haptic.select();
              togglePin(s.id);
            }}
          />
        </>
      }>
      <View style={{ gap: 10, marginBottom: space.xl }}>
        <Row gap={8}>
          <Tag label={sev.label} accent={sev.accent} />
          <Txt variant="label" tone="muted">
            {scenarioCategories[s.category].label}
          </Txt>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Txt variant="display" style={{ flex: 1, fontSize: 34, lineHeight: 37, letterSpacing: -1.3 }} accessibilityRole="header">
            {s.question}
          </Txt>
        </Row>
        <Txt style={{ fontSize: 17, lineHeight: 25 }} tone="inkSoft">
          {s.summary}
        </Txt>
      </View>

      {/* Ikke gjør */}
      <View style={[styles.dont, { backgroundColor: p.inverse }]}>
        <Row gap={8} style={{ marginBottom: 4 }}>
          <Icon name="close-octagon" size={18} color={p.signal} />
          <Txt variant="label" style={{ color: p.signal }}>
            Ikke gjør dette
          </Txt>
        </Row>
        {s.dont.map((d) => (
          <Row key={d} style={{ alignItems: 'flex-start' }} gap={10}>
            <Txt style={{ fontFamily: fonts.monoBold, color: p.signal, fontSize: 15, lineHeight: 23 }}>✕</Txt>
            <Txt style={{ color: p.onInverse, flex: 1, fontFamily: fonts.medium, fontSize: 16, lineHeight: 23 }}>{d}</Txt>
          </Row>
        ))}
      </View>

      {/* Progress */}
      <Row style={{ justifyContent: 'space-between', marginTop: space.xxl, marginBottom: space.md }}>
        <Txt variant="label" tone="muted">
          Kryss av mens du gjør det
        </Txt>
        <Txt variant="label" tone={doneCount === total ? 'ok' : 'signal'}>
          {doneCount}/{total}
        </Txt>
      </Row>

      {/* Phases timeline */}
      {s.phases.map((ph, pi) => (
        <View key={ph.label} style={{ marginBottom: space.lg }}>
          <Row gap={10} style={{ marginBottom: space.sm }}>
            <View style={[styles.phaseDot, { backgroundColor: p.signal }]} />
            <Txt variant="label" tone="ink" style={{ fontFamily: fonts.monoBold }}>
              {String(pi + 1).padStart(2, '0')} · {ph.label}
            </Txt>
          </Row>
          <View style={[styles.timeline, { borderLeftColor: p.line }]}>
            {ph.steps.map((st, si) => {
              const key = `${pi}-${st.title}`;
              const on = !!done[key];
              const num = offsets[pi] + si + 1;
              return (
                <Tap
                  key={key}
                  haptics={false}
                  onPress={() => {
                    haptic.select();
                    setDone((d) => ({ ...d, [key]: !d[key] }));
                  }}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked: on }}
                  style={[styles.step, { backgroundColor: p.surface, borderColor: on ? p.ok : p.line }]}>
                  <View
                    style={[
                      styles.stepNum,
                      { backgroundColor: on ? p.ok : 'transparent', borderColor: on ? p.ok : p.line },
                    ]}>
                    {on ? (
                      <Icon name="check" size={15} color={p.onSignal} />
                    ) : (
                      <Txt variant="mono" style={{ fontSize: 12 }}>
                        {num}
                      </Txt>
                    )}
                  </View>
                  <View style={{ flex: 1, gap: 3 }}>
                    <Txt
                      variant="bodyStrong"
                      tone={on ? 'muted' : 'ink'}
                      style={{ textDecorationLine: on ? 'line-through' : 'none' }}>
                      {st.title}
                    </Txt>
                    {st.detail && !on && (
                      <Txt variant="small" tone="muted">
                        {st.detail}
                      </Txt>
                    )}
                  </View>
                </Tap>
              );
            })}
          </View>
        </View>
      ))}

      {/* Facts */}
      {s.facts && s.facts.length > 0 && (
        <View style={{ marginTop: space.lg }}>
          <SectionLabel>Godt å vite</SectionLabel>
          <View style={styles.facts}>
            {s.facts.map((f) => (
              <View key={f.label} style={[styles.fact, { backgroundColor: p.surface, borderColor: p.line }]}>
                <Txt style={{ fontFamily: fonts.bold, fontSize: 20, letterSpacing: -0.5, color: p.ink }}>{f.value}</Txt>
                <Txt variant="small" tone="muted">
                  {f.label}
                </Txt>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Supplies */}
      {s.supplies && s.supplies.length > 0 && (
        <View style={{ marginTop: space.xxl }}>
          <SectionLabel>Fra lageret ditt</SectionLabel>
          <Card style={{ paddingVertical: 6 }}>
            {s.supplies.map((sid, i) => {
              const item = inventory.find((x) => x.templateId === sid);
              const t = templateById[sid];
              if (!t) return null;
              const st = item ? itemStatus(item) : 'missing';
              const ok = st === 'ok' || st === 'expiring';
              return (
                <Tap
                  key={sid}
                  onPress={() => item && router.push({ pathname: '/vare', params: { id: item.id } })}
                  style={[styles.supply, i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
                  <Icon name={ok ? 'check-circle' : st === 'low' ? 'circle-half-full' : 'circle-outline'} size={20} tone={ok ? 'ok' : st === 'low' ? 'warn' : 'muted'} />
                  <Txt style={{ flex: 1 }}>{t.name}</Txt>
                  {item && (
                    <Txt variant="label" tone="muted">
                      {item.have}/{item.target} {item.unit}
                    </Txt>
                  )}
                </Tap>
              );
            })}
          </Card>
        </View>
      )}

      {/* Related book */}
      {book && (
        <Tap
          onPress={() => router.push({ pathname: '/bok/[id]', params: { id: book.id } })}
          style={{ marginTop: space.xxl }}>
          <Card style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
            <View style={[styles.bookIcon, { backgroundColor: p[book.accent] }]}>
              <Icon name={book.icon} color="#fff" />
            </View>
            <View style={{ flex: 1 }}>
              <Txt variant="label" tone="muted">
                Les mer
              </Txt>
              <Txt variant="bodyStrong">{book.title}</Txt>
            </View>
            <Icon name={book.premium && !premium ? 'lock-outline' : 'chevron-right'} tone="muted" />
          </Card>
        </Tap>
      )}

      <Txt variant="label" tone="muted" style={{ marginTop: space.xl, textAlign: 'center' }}>
        Kilde: {s.source}
      </Txt>
    </Screen>
  );
}

const styles = StyleSheet.create({
  dont: { borderRadius: radius.lg, padding: space.lg, gap: 10 },
  phaseDot: { width: 10, height: 10, borderRadius: 2, transform: [{ rotate: '45deg' }] },
  timeline: { borderLeftWidth: 1, marginLeft: 4, paddingLeft: 14, gap: 8 },
  step: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    padding: 14,
  },
  stepNum: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facts: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  fact: {
    flexGrow: 1,
    flexBasis: '45%',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    padding: 14,
    gap: 4,
  },
  supply: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12 },
  bookIcon: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
});
