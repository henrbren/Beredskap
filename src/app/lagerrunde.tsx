import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { ProgressRing } from '@/components/progress-ring';
import { Screen } from '@/components/screen';
import { Bar, Button, Icon, Row, Stepper, Tap, Txt } from '@/components/ui';
import { categoryMeta, templateById } from '@/data/checklist';
import { haptic } from '@/lib/haptics';
import { readinessScore } from '@/lib/readiness';
import { useApp } from '@/store/app';
import { useGame } from '@/store/game';
import { fonts, radius, space, usePalette } from '@/theme';

/**
 * «Lagerrunde»: go through the storage one card at a time. Fast, physical
 * and rewarding — every answer moves the score and earns XP.
 */
export default function Lagerrunde() {
  const p = usePalette();
  const inventory = useApp((s) => s.inventory);
  const setHave = useApp((s) => s.setHave);
  const xp = useGame((s) => s.xp);
  const [startXp] = useState(xp);
  const [startScore] = useState(() => readinessScore(useApp.getState().inventory));
  // Freeze the list of items for this round so cards don't jump around.
  const [ids] = useState(() => {
    const inv = useApp.getState().inventory;
    return [...inv.filter((i) => i.have < i.target), ...inv.filter((i) => i.have >= i.target)].map((i) => i.id);
  });
  const [index, setIndex] = useState(0);
  const [partial, setPartial] = useState(false);
  const slide = useState(() => new Animated.Value(0))[0];

  const item = useMemo(() => inventory.find((i) => i.id === ids[index]), [inventory, ids, index]);
  const done = index >= ids.length;

  useEffect(() => {
    slide.setValue(40);
    Animated.spring(slide, { toValue: 0, useNativeDriver: true, friction: 8 }).start();
  }, [index, slide]);

  const next = () => {
    setPartial(false);
    setIndex((i) => i + 1);
  };

  if (done || !item) {
    const score = readinessScore(inventory);
    return (
      <Screen back>
        <View style={{ alignItems: 'center', gap: space.lg, marginTop: space.xl }}>
          <Txt variant="label" tone="signal">
            Lagerrunde fullført
          </Txt>
          <ProgressRing value={score / 100} size={180}>
            <Txt style={{ fontFamily: fonts.bold, fontSize: 48, letterSpacing: -1.5, color: p.ink }}>{score}%</Txt>
          </ProgressRing>
          <Txt variant="title" style={{ textAlign: 'center' }}>
            {score > startScore ? `+${score - startScore} prosentpoeng!` : 'Lageret er oppdatert'}
          </Txt>
          <Row gap={space.xl}>
            <View style={{ alignItems: 'center' }}>
              <Txt style={{ fontFamily: fonts.bold, fontSize: 26, color: p.signal }}>+{xp - startXp}</Txt>
              <Txt variant="label" tone="muted">
                XP
              </Txt>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Txt style={{ fontFamily: fonts.bold, fontSize: 26, color: p.ink }}>{ids.length}</Txt>
              <Txt variant="label" tone="muted">
                Varer sjekket
              </Txt>
            </View>
          </Row>
        </View>
        <View style={{ gap: space.sm, marginTop: space.xxl }}>
          <Button label="Til lageret" icon="package-variant-closed" onPress={() => router.replace('/lager')} />
          <Button label="Ferdig" variant="ghost" onPress={() => router.back()} />
        </View>
      </Screen>
    );
  }

  const t = item.templateId ? templateById[item.templateId] : undefined;
  const cat = categoryMeta[item.category];
  const step = item.unit === 'kr' ? 100 : 1;

  return (
    <Screen back eyebrow={`Lagerrunde · ${index + 1} av ${ids.length}`} title="Har du dette?">
      <Row style={{ marginBottom: space.lg }} gap={10}>
        <View style={{ flex: 1 }}>
          <Bar value={index / ids.length} height={6} />
        </View>
        <Txt variant="mono" tone="signal">
          +{xp - startXp} XP
        </Txt>
      </Row>

      <Animated.View style={[styles.card, { backgroundColor: p.surface, borderColor: p.line, transform: [{ translateX: slide }] }]}>
        <Row gap={8}>
          <View style={[styles.catIcon, { backgroundColor: p.signal }]}>
            <Icon name={cat.icon} size={18} color={p.onSignal} />
          </View>
          <Txt variant="label" tone="muted">
            {cat.label}
          </Txt>
        </Row>
        <Txt style={{ fontFamily: fonts.bold, fontSize: 32, lineHeight: 36, letterSpacing: -1, color: p.ink }}>{item.name}</Txt>
        {t && <Txt tone="muted">{t.hint}</Txt>}
        <View style={[styles.target, { backgroundColor: p.surfaceAlt }]}>
          <Txt variant="label" tone="muted">
            Mål for husstanden
          </Txt>
          <Txt style={{ fontFamily: fonts.bold, fontSize: 24, color: p.ink }}>
            {item.target} {item.unit}
          </Txt>
        </View>
        {partial && (
          <Row style={{ justifyContent: 'space-between' }}>
            <Txt variant="bodyStrong">Hvor mye har du?</Txt>
            <Stepper value={item.have} step={step} onChange={(v) => setHave(item.id, v)} />
          </Row>
        )}
      </Animated.View>

      <View style={{ gap: 10, marginTop: space.xl }}>
        {partial ? (
          <Button label="Neste" icon="arrow-right" onPress={next} />
        ) : (
          <>
            <Tap
              onPress={() => {
                setHave(item.id, Math.max(item.have, item.target));
                haptic.success();
                next();
              }}
              style={[styles.answer, { backgroundColor: p.ok, borderColor: p.ok }]}>
              <Icon name="check-all" color="#fff" />
              <Txt style={[styles.answerText, { color: '#fff' }]}>Ja, har alt</Txt>
            </Tap>
            <Tap onPress={() => setPartial(true)} style={[styles.answer, { backgroundColor: p.surface, borderColor: p.warn }]}>
              <Icon name="circle-half-full" tone="warn" />
              <Txt style={[styles.answerText, { color: p.ink }]}>Har litt</Txt>
            </Tap>
            <Tap onPress={next} style={[styles.answer, { backgroundColor: p.surface, borderColor: p.line }]}>
              <Icon name="cart-outline" tone="muted" />
              <Txt style={[styles.answerText, { color: p.ink }]}>Mangler — på handlelisten</Txt>
            </Tap>
          </>
        )}
        <Tap onPress={() => router.back()} style={{ alignSelf: 'center', padding: 8 }}>
          <Txt variant="label" tone="muted">
            Avslutt runden
          </Txt>
        </Tap>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.xl, padding: space.xl, gap: space.md },
  catIcon: { width: 30, height: 30, borderRadius: 9, alignItems: 'center', justifyContent: 'center' },
  target: { borderRadius: radius.md, padding: 14, gap: 2 },
  answer: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1.5, borderRadius: radius.lg, paddingHorizontal: 18, height: 60 },
  answerText: { fontFamily: fonts.semibold, fontSize: 17 },
});
