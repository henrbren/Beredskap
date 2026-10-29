import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Logo } from '@/components/logo';
import { Button, Card, Icon, Row, Stepper, Tap, Txt } from '@/components/ui';
import type { IconName } from '@/data/types';
import { haptic } from '@/lib/haptics';
import { ensurePermission } from '@/lib/notifications';
import { useApp, type Household } from '@/store/app';
import { fonts, gutter, radius, space, usePalette } from '@/theme';

const STEPS = 3;

export default function Onboarding() {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const complete = useApp((s) => s.completeOnboarding);
  const setSettings = useApp((s) => s.setSettings);
  const [step, setStep] = useState(0);
  const [h, setH] = useState<Household>({ adults: 2, children: 0, pets: 0, days: 7, municipality: '' });

  const next = () => {
    haptic.tap();
    setStep((s) => Math.min(STEPS - 1, s + 1));
  };

  const finish = async (withNotifications: boolean) => {
    if (withNotifications) {
      const ok = await ensurePermission(true);
      setSettings({ notifications: ok });
    } else {
      setSettings({ notifications: false });
    }
    haptic.success();
    complete(h);
    router.replace('/');
  };

  return (
    <View style={{ flex: 1, backgroundColor: step === 0 ? p.inverse : p.bg }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: insets.top + space.lg,
          paddingBottom: insets.bottom + space.lg,
          paddingHorizontal: gutter,
        }}>
        <Row style={{ justifyContent: 'space-between', marginBottom: space.xxl }}>
          <Logo size={36} />
          <Row gap={6}>
            {Array.from({ length: STEPS }, (_, i) => (
              <View
                key={i}
                style={{
                  width: i === step ? 22 : 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: i <= step ? p.signal : step === 0 ? '#ffffff33' : p.line,
                }}
              />
            ))}
          </Row>
        </Row>

        {step === 0 && <Intro onNext={next} />}
        {step === 1 && <HouseholdStep h={h} setH={setH} onNext={next} />}
        {step === 2 && <NotifyStep onFinish={finish} />}
      </ScrollView>
    </View>
  );
}

function Intro({ onNext }: { onNext: () => void }) {
  const p = usePalette();
  const points: { icon: IconName; text: string }[] = [
    { icon: 'package-variant-closed', text: 'Beredskapslager med påminnelser om rotasjon' },
    { icon: 'lightning-bolt', text: '«Hva gjør jeg hvis …?» — steg for steg' },
    { icon: 'shield-outline', text: 'Nærmeste tilfluktsrom, også uten nett' },
    { icon: 'card-account-details-outline', text: 'Krisekort for hele husstanden' },
  ];
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', gap: space.xxl }}>
      <View style={{ gap: space.lg }}>
        <Txt variant="label" tone="signal">
          Egenberedskap · 7 døgn
        </Txt>
        <Txt style={[styles.hero, { color: p.onInverse }]}>Når det gjelder, vet du hva du gjør.</Txt>
        <Txt style={{ color: p.onInverse, opacity: 0.7, fontSize: 17, lineHeight: 25 }}>
          Myndighetene anbefaler at alle husstander klarer seg selv i en uke. Vi hjelper deg dit — rolig, konkret og
          helt uten nett.
        </Txt>
      </View>
      <View style={{ gap: 14 }}>
        {points.map((pt) => (
          <Row key={pt.text}>
            <View style={[styles.pointIcon, { borderColor: '#ffffff26' }]}>
              <Icon name={pt.icon} size={18} tone="signal" />
            </View>
            <Txt style={{ color: p.onInverse, flex: 1 }}>{pt.text}</Txt>
          </Row>
        ))}
      </View>
      <Button label="Kom i gang" icon="arrow-right" onPress={onNext} />
    </View>
  );
}

function HouseholdStep({ h, setH, onNext }: { h: Household; setH: (h: Household) => void; onNext: () => void }) {
  const p = usePalette();
  const rows: { key: 'adults' | 'children' | 'pets'; label: string; hint: string; icon: IconName; min: number }[] = [
    { key: 'adults', label: 'Voksne', hint: '13 år og eldre', icon: 'account', min: 1 },
    { key: 'children', label: 'Barn', hint: 'Under 13 år', icon: 'human-child', min: 0 },
    { key: 'pets', label: 'Kjæledyr', hint: 'Trenger mat og vann', icon: 'paw', min: 0 },
  ];
  return (
    <View style={{ flex: 1, gap: space.xl }}>
      <View style={{ gap: 8 }}>
        <Txt variant="label" tone="signal">
          01 — Husstanden
        </Txt>
        <Txt variant="title">Hvem skal du ta vare på?</Txt>
        <Txt tone="muted">Vi regner ut hvor mye vann, mat og utstyr dere trenger. Du kan endre alt senere.</Txt>
      </View>
      <Card style={{ gap: space.lg }}>
        {rows.map((r) => (
          <Row key={r.key} style={{ justifyContent: 'space-between' }}>
            <Row>
              <Icon name={r.icon} size={22} tone="muted" />
              <View>
                <Txt variant="bodyStrong">{r.label}</Txt>
                <Txt variant="small" tone="muted">
                  {r.hint}
                </Txt>
              </View>
            </Row>
            <Stepper value={h[r.key]} min={r.min} max={20} onChange={(v) => setH({ ...h, [r.key]: v })} />
          </Row>
        ))}
      </Card>
      <View style={{ gap: space.md }}>
        <Txt variant="label" tone="muted">
          Hvor lenge skal dere klare dere?
        </Txt>
        <Row gap={8}>
          {[3, 7, 14].map((d) => {
            const on = h.days === d;
            return (
              <Tap
                key={d}
                onPress={() => setH({ ...h, days: d })}
                style={[
                  styles.dayChip,
                  { borderColor: on ? p.signal : p.line, backgroundColor: on ? p.signal : p.surface },
                ]}>
                <Txt style={{ fontFamily: fonts.bold, fontSize: 22, color: on ? p.onSignal : p.ink }}>{d}</Txt>
                <Txt variant="label" style={{ color: on ? p.onSignal : p.muted }}>
                  døgn{d === 7 ? ' · anbefalt' : ''}
                </Txt>
              </Tap>
            );
          })}
        </Row>
      </View>
      <View style={{ flex: 1 }} />
      <Button label="Neste" icon="arrow-right" onPress={onNext} />
    </View>
  );
}

function NotifyStep({ onFinish }: { onFinish: (notify: boolean) => void }) {
  return (
    <View style={{ flex: 1, gap: space.xl }}>
      <View style={{ gap: 8 }}>
        <Txt variant="label" tone="signal">
          02 — Påminnelser
        </Txt>
        <Txt variant="title">Vi sier fra før noe går ut på dato.</Txt>
        <Txt tone="muted">
          Vann, mat, batterier og medisiner må roteres. Du får et varsel i god tid, og en kort kvartalssjekk — aldri
          reklame.
        </Txt>
      </View>
      <Card style={{ gap: 14 }}>
        {[
          ['water', 'Drikkevann', 'Bytt om 30 dager'],
          ['battery-charging-medium', 'Strømbank', 'Lad opp nå'],
          ['clipboard-check-outline', 'Kvartalssjekk', 'Fem minutter, fire ganger i året'],
        ].map(([icon, title, sub]) => (
          <Row key={title}>
            <Icon name={icon as IconName} tone="signal" />
            <View style={{ flex: 1 }}>
              <Txt variant="bodyStrong">{title}</Txt>
              <Txt variant="small" tone="muted">
                {sub}
              </Txt>
            </View>
          </Row>
        ))}
      </Card>
      <View style={{ flex: 1 }} />
      <View style={{ gap: space.sm }}>
        <Button label="Slå på påminnelser" icon="bell-ring-outline" onPress={() => onFinish(true)} />
        <Button label="Ikke nå" variant="ghost" onPress={() => onFinish(false)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { fontFamily: fonts.bold, fontSize: 48, lineHeight: 50, letterSpacing: -2 },
  pointIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayChip: {
    flex: 1,
    borderWidth: 1,
    borderRadius: radius.md,
    paddingVertical: 14,
    paddingHorizontal: 12,
    gap: 2,
  },
});
