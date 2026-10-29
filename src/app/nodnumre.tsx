import { Linking, StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { SignalPattern } from '@/components/signal-pattern';
import { Card, Icon, Row, SectionLabel, Tap, Txt } from '@/components/ui';
import { emergencyNumbers, sirenSignals } from '@/data/numbers';
import { fonts, radius, space, usePalette } from '@/theme';

export default function Nodnumre() {
  const p = usePalette();
  return (
    <Screen back eyebrow="Ring ved fare for liv og helse" title="Nødnumre">
      <View style={{ gap: 10, marginBottom: space.xxl }}>
        {emergencyNumbers.map((n) => (
          <Tap
            key={n.number}
            onPress={() => Linking.openURL(`tel:${n.number.replace(/\s/g, '')}`)}
            accessibilityLabel={`Ring ${n.label}, ${n.number}`}>
            <View style={[styles.row, { backgroundColor: n.urgent ? p.inverse : p.surface, borderColor: p.line }]}>
              <Icon name={n.icon} size={24} color={n.urgent ? p.signal : p.ink} />
              <View style={{ flex: 1 }}>
                <Txt variant="bodyStrong" style={{ color: n.urgent ? p.onInverse : p.ink }}>
                  {n.label}
                </Txt>
                <Txt variant="small" style={{ color: n.urgent ? p.onInverse : p.muted, opacity: n.urgent ? 0.65 : 1 }}>
                  {n.detail}
                </Txt>
              </View>
              <Txt style={{ fontFamily: fonts.bold, fontSize: 22, letterSpacing: -0.5, color: n.urgent ? p.signal : p.ink }}>
                {n.number}
              </Txt>
            </View>
          </Tap>
        ))}
      </View>

      <SectionLabel index="!">Sivilforsvarets varselsignaler</SectionLabel>
      <Card style={{ gap: space.lg }}>
        {sirenSignals.map((s) => (
          <View key={s.id} style={{ gap: 8 }}>
            <Txt variant="bodyStrong">{s.title}</Txt>
            <SignalPattern id={s.id} />
            <Txt variant="small" tone="muted">
              {s.description}
            </Txt>
          </View>
        ))}
      </Card>

      <Card tone="surfaceAlt" flat style={{ marginTop: space.lg }}>
        <Row style={{ alignItems: 'flex-start' }}>
          <Icon name="cellphone-message" tone="signal" />
          <Txt variant="small" style={{ flex: 1 }}>
            Myndighetene kan også sende Nødvarsel direkte til mobiler i et område. Signalene testes kl. 12 andre onsdag i
            januar og juni.
          </Txt>
        </Row>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.lg,
    padding: space.lg,
  },
});
