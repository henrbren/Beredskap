import * as Clipboard from 'expo-clipboard';
import { Linking, Platform, Share, StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Button, Card, Icon, Row, SectionLabel, Tap, Txt } from '@/components/ui';
import { formatDM, latLonToUtm } from '@/lib/geo';
import { haptic } from '@/lib/haptics';
import { useLocation } from '@/lib/use-location';
import { fonts, radius, space, usePalette } from '@/theme';

/** Spaces every 3 digits so it is easy to read aloud: 6 643 512 */
const group = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

export default function Posisjon() {
  const p = usePalette();
  const { perm, fix, request } = useLocation({ precise: true });

  const utm = fix ? latLonToUtm(fix.lat, fix.lon) : null;
  const utm33 = fix ? latLonToUtm(fix.lat, fix.lon, 33) : null;
  const lat = fix ? formatDM(fix.lat, 'N', 'S') : '';
  const lon = fix ? formatDM(fix.lon, 'Ø', 'V') : '';
  const message = fix
    ? `Min posisjon: ${lat}, ${lon} (${fix.lat.toFixed(5)}, ${fix.lon.toFixed(5)}). UTM ${utm!.zone}${utm!.band} ${utm!.easting} Ø ${utm!.northing} N. Nøyaktighet ca. ${Math.round(fix.accuracy ?? 0)} m.`
    : '';

  return (
    <Screen back eyebrow="GPS · virker uten mobilnett" title="Min posisjon">
      {perm !== 'granted' ? (
        <Card style={{ gap: space.md }}>
          <Txt>For å vise koordinatene dine trenger appen tilgang til posisjon. Den deles ikke med noen.</Txt>
          <Button label="Bruk posisjon" icon="crosshairs-gps" onPress={request} />
        </Card>
      ) : !fix ? (
        <Card style={{ alignItems: 'center', gap: 10, paddingVertical: space.xxl }}>
          <Icon name="crosshairs-question" size={34} tone="muted" />
          <Txt tone="muted">Venter på GPS … gå gjerne ut eller nær et vindu.</Txt>
        </Card>
      ) : (
        <>
          <View style={[styles.hero, { backgroundColor: p.inverse }]}>
            <Txt variant="label" style={{ color: p.signal }}>
              Les opp for nødetaten
            </Txt>
            <View style={{ gap: 4 }}>
              <Txt style={[styles.coord, { color: p.onInverse }]}>{lat}</Txt>
              <Txt style={[styles.coord, { color: p.onInverse }]}>{lon}</Txt>
            </View>
            <Row gap={space.lg}>
              <Txt variant="label" style={{ color: p.onInverse, opacity: 0.65 }}>
                ± {Math.round(fix.accuracy ?? 0)} m
              </Txt>
              {fix.altitude != null && (
                <Txt variant="label" style={{ color: p.onInverse, opacity: 0.65 }}>
                  {Math.round(fix.altitude)} moh.
                </Txt>
              )}
              <Txt variant="label" style={{ color: p.onInverse, opacity: 0.65 }}>
                kl. {new Date(fix.at).toLocaleTimeString('nb-NO')}
              </Txt>
            </Row>
          </View>

          <Row gap={8} style={{ marginTop: space.md }}>
            <Button label="Ring 113" icon="phone" style={{ flex: 1 }} onPress={() => Linking.openURL('tel:113')} />
            <Button
              label="Send SMS"
              icon="message-text-outline"
              variant="outline"
              style={{ flex: 1 }}
              onPress={() => Linking.openURL(`sms:${Platform.OS === 'ios' ? '&' : '?'}body=${encodeURIComponent(message)}`).catch(() => {})}
            />
          </Row>

          <View style={{ marginTop: space.xxl }}>
            <SectionLabel index="01">Formater</SectionLabel>
            <Card style={{ paddingVertical: 4 }}>
              <CoordRow label="Desimalgrader" value={`${fix.lat.toFixed(5)}, ${fix.lon.toFixed(5)}`} />
              <CoordRow label={`UTM sone ${utm!.zone}${utm!.band}`} value={`${group(utm!.easting)} Ø\n${group(utm!.northing)} N`} border />
              {utm!.zone !== 33 && <CoordRow label="UTM sone 33 (Norgeskart)" value={`${group(utm33!.easting)} Ø\n${group(utm33!.northing)} N`} border />}
            </Card>
          </View>

          <Row gap={8} style={{ marginTop: space.md }}>
            <Button
              label="Kopier"
              icon="content-copy"
              variant="outline"
              small
              style={{ flex: 1 }}
              onPress={async () => {
                await Clipboard.setStringAsync(message);
                haptic.success();
              }}
            />
            <Button label="Del" icon="share-variant-outline" variant="outline" small style={{ flex: 1 }} onPress={() => Share.share({ message }).catch(() => {})} />
          </Row>

          <Card tone="surfaceAlt" flat style={{ marginTop: space.xl, gap: 6 }}>
            <Txt variant="bodyStrong">Slik gir du posisjonen</Txt>
            <Txt variant="small">
              Si først hva som har skjedd. Les så grader og minutter for nord (N) og øst (Ø), siffer for siffer. Si hvor
              nøyaktig posisjonen er, og beskriv stedet: sti, vann, bygninger, terreng.
            </Txt>
          </Card>
        </>
      )}
    </Screen>
  );
}

function CoordRow({ label, value, border }: { label: string; value: string; border?: boolean }) {
  const p = usePalette();
  return (
    <Tap
      onPress={async () => {
        await Clipboard.setStringAsync(value.replace('\n', ' '));
        haptic.success();
      }}
      style={[styles.row, border && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
      <Txt variant="small" tone="muted" style={{ flex: 1 }}>
        {label}
      </Txt>
      <Txt variant="mono" style={{ fontSize: 15, textAlign: 'right' }}>
        {value}
      </Txt>
    </Tap>
  );
}

const styles = StyleSheet.create({
  hero: { borderRadius: radius.xl, padding: space.xl, gap: space.lg },
  coord: { fontFamily: fonts.monoBold, fontSize: 28, letterSpacing: -0.5 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 14 },
});
