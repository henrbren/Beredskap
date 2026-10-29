import Constants from 'expo-constants';
import { router } from 'expo-router';
import { Alert, Platform, StyleSheet, Switch, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Card, Divider, Icon, Row, SectionLabel, Stepper, Tap, Txt } from '@/components/ui';
import { ensurePermission } from '@/lib/notifications';
import { useApp, type Settings } from '@/store/app';
import { fonts, radius, space, usePalette } from '@/theme';

export default function Innstillinger() {
  const p = usePalette();
  const household = useApp((s) => s.household);
  const setHousehold = useApp((s) => s.setHousehold);
  const settings = useApp((s) => s.settings);
  const setSettings = useApp((s) => s.setSettings);
  const premium = useApp((s) => s.premium);
  const setPremium = useApp((s) => s.setPremium);
  const reset = useApp((s) => s.reset);

  const toggle = (key: keyof Settings, label: string, sub?: string, onEnable?: () => Promise<boolean>) => (
    <Row style={{ justifyContent: 'space-between' }}>
      <View style={{ flex: 1 }}>
        <Txt variant="bodyStrong">{label}</Txt>
        {sub && (
          <Txt variant="small" tone="muted">
            {sub}
          </Txt>
        )}
      </View>
      <Switch
        value={!!settings[key]}
        trackColor={{ true: p.signal, false: p.line }}
        thumbColor="#fff"
        onValueChange={async (v) => {
          if (v && onEnable && !(await onEnable())) return;
          setSettings({ [key]: v } as Partial<Settings>);
        }}
      />
    </Row>
  );

  const confirmReset = () => {
    const doIt = () => {
      reset();
      router.replace('/onboarding');
    };
    if (Platform.OS === 'web') return doIt();
    Alert.alert('Slette alle data?', 'Lager, krisekort og innstillinger fjernes fra telefonen.', [
      { text: 'Avbryt', style: 'cancel' },
      { text: 'Slett', style: 'destructive', onPress: doIt },
    ]);
  };

  return (
    <Screen back eyebrow="Beredskap" title="Innstillinger">
      <SectionLabel index="01">Husstanden</SectionLabel>
      <Card style={{ gap: space.lg, marginBottom: space.xxl }}>
        {(
          [
            ['adults', 'Voksne', 1],
            ['children', 'Barn under 13', 0],
            ['pets', 'Kjæledyr', 0],
          ] as const
        ).map(([key, label, min]) => (
          <Row key={key} style={{ justifyContent: 'space-between' }}>
            <Txt variant="bodyStrong">{label}</Txt>
            <Stepper value={household[key]} min={min} max={20} onChange={(v) => setHousehold({ [key]: v })} />
          </Row>
        ))}
        <Divider />
        <Row style={{ justifyContent: 'space-between' }}>
          <View>
            <Txt variant="bodyStrong">Klare seg i</Txt>
            <Txt variant="small" tone="muted">
              DSB anbefaler 7 døgn
            </Txt>
          </View>
          <Row gap={6}>
            {[3, 7, 14].map((d) => {
              const on = household.days === d;
              return (
                <Tap
                  key={d}
                  onPress={() => setHousehold({ days: d })}
                  style={[styles.seg, { backgroundColor: on ? p.inverse : 'transparent', borderColor: on ? p.inverse : p.line }]}>
                  <Txt style={{ fontFamily: fonts.mono, fontSize: 13, color: on ? p.onInverse : p.ink }}>{d}d</Txt>
                </Tap>
              );
            })}
          </Row>
        </Row>
      </Card>

      <SectionLabel index="02">Påminnelser</SectionLabel>
      <Card style={{ gap: space.lg, marginBottom: space.xxl }}>
        {toggle('notifications', 'Rotasjonsvarsler', 'Før vann, mat og batterier går ut på dato', () => ensurePermission(true))}
        <Row style={{ justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Txt variant="bodyStrong">Varsle dager før</Txt>
          </View>
          <Stepper
            value={settings.reminderDaysBefore}
            min={1}
            max={90}
            step={7}
            onChange={(v) => setSettings({ reminderDaysBefore: v })}
          />
        </Row>
        <Divider />
        {toggle('quarterlyCheck', 'Kvartalssjekk', 'Kort gjennomgang fire ganger i året')}
      </Card>

      <SectionLabel index="03">Utseende</SectionLabel>
      <Card style={{ gap: space.lg, marginBottom: space.xxl }}>
        <Row gap={6}>
          {(
            [
              ['system', 'Auto'],
              ['light', 'Lys'],
              ['dark', 'Mørk'],
            ] as const
          ).map(([v, label]) => {
            const on = settings.theme === v;
            return (
              <Tap
                key={v}
                onPress={() => setSettings({ theme: v })}
                style={[styles.seg, { flex: 1, backgroundColor: on ? p.inverse : 'transparent', borderColor: on ? p.inverse : p.line }]}>
                <Txt style={{ fontFamily: fonts.medium, fontSize: 14, color: on ? p.onInverse : p.ink }}>{label}</Txt>
              </Tap>
            );
          })}
        </Row>
        {toggle('haptics', 'Haptisk tilbakemelding')}
      </Card>

      <SectionLabel index="04">Abonnement</SectionLabel>
      <Card style={{ gap: space.md, marginBottom: space.xxl }}>
        <Tap onPress={() => router.push('/pluss')} style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Icon name="star-four-points" tone="signal" />
          <Txt variant="bodyStrong" style={{ flex: 1 }}>
            {premium ? 'Beredskap Pluss er aktiv' : 'Oppgrader til Pluss'}
          </Txt>
          <Icon name="chevron-right" tone="muted" />
        </Tap>
        {__DEV__ && premium && (
          <Tap onPress={() => setPremium(false)}>
            <Txt variant="label" tone="muted">
              (Utvikler) Slå av Pluss
            </Txt>
          </Tap>
        )}
      </Card>

      <SectionLabel index="05">Om</SectionLabel>
      <Card style={{ gap: space.md, marginBottom: space.xl }}>
        <Txt variant="small" tone="muted">
          Rådene bygger på offentlige anbefalinger fra blant andre DSB (egenberedskap.no), Helsedirektoratet, DSA,
          Mattilsynet og Sivilforsvaret. Appen erstatter ikke beskjeder fra myndighetene i en konkret krise — følg alltid
          dem først.
        </Txt>
        <Txt variant="small" tone="muted">
          Alle data lagres kun på denne enheten. Ingen konto, ingen sporing.
        </Txt>
        <Txt variant="label" tone="muted">
          Versjon {Constants.expoConfig?.version ?? '1.0.0'}
        </Txt>
      </Card>

      <Tap onPress={confirmReset} style={{ alignSelf: 'center', padding: space.md }}>
        <Txt variant="label" tone="danger">
          Slett alle data
        </Txt>
      </Tap>
    </Screen>
  );
}

const styles = StyleSheet.create({
  seg: {
    borderWidth: 1,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
  },
});
