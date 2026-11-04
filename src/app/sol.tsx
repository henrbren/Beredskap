import { StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Button, Card, Icon, Row, SectionLabel, Txt } from '@/components/ui';
import type { IconName } from '@/data/types';
import { moon, sunTimes } from '@/lib/sun';
import { useLocation } from '@/lib/use-location';
import { fonts, radius, space, usePalette } from '@/theme';

const OSLO = { lat: 59.9139, lon: 10.7522 };

const hm = (d: Date | null) => (d ? d.toLocaleTimeString('nb-NO', { hour: '2-digit', minute: '2-digit' }) : '—');
const dur = (min: number) => `${Math.floor(min / 60)} t ${Math.round(min % 60)} min`;

export default function Sol() {
  const p = usePalette();
  const { perm, fix, request } = useLocation();
  const pos = fix ?? OSLO;
  const now = new Date();
  const today = sunTimes(now, pos.lat, pos.lon);
  const tomorrow = sunTimes(new Date(now.getTime() + 86400000), pos.lat, pos.lon);
  const m = moon(now);

  let next: { label: string; at: Date } | null = null;
  const events: [string, Date | null][] = [
    ['Soloppgang', today.sunrise],
    ['Solnedgang', today.sunset],
    ['Mørkt', today.dusk],
    ['Soloppgang', tomorrow.sunrise],
  ];
  for (const [label, at] of events) {
    if (at && at.getTime() > now.getTime()) {
      next = { label, at };
      break;
    }
  }
  const minsLeft = next ? Math.round((next.at.getTime() - now.getTime()) / 60000) : 0;

  return (
    <Screen back eyebrow={fix ? 'Din posisjon' : 'Oslo — slå på posisjon for nøyaktig tid'} title="Sol og lys">
      <View style={[styles.hero, { backgroundColor: p.inverse }]}>
        {today.kind !== 'normal' ? (
          <>
            <Txt variant="label" style={{ color: p.signal }}>
              {today.kind === 'midnattssol' ? 'Midnattssol' : 'Mørketid'}
            </Txt>
            <Txt style={[styles.big, { color: p.onInverse }]}>{today.kind === 'midnattssol' ? 'Solen går ikke ned i dag' : 'Solen står ikke opp i dag'}</Txt>
          </>
        ) : next ? (
          <>
            <Txt variant="label" style={{ color: p.signal }}>
              {next.label} om
            </Txt>
            <Txt style={[styles.big, { color: p.onInverse }]}>{dur(minsLeft)}</Txt>
            <Txt variant="label" style={{ color: p.onInverse, opacity: 0.65 }}>
              kl. {hm(next.at)}
            </Txt>
          </>
        ) : null}
      </View>

      {perm !== 'granted' && (
        <Button label="Bruk min posisjon" icon="crosshairs-gps" variant="outline" small style={{ marginTop: space.md }} onPress={request} />
      )}

      <View style={{ marginTop: space.xxl }}>
        <SectionLabel index="01">I dag</SectionLabel>
        <View style={styles.grid}>
          <Tile icon="weather-sunset-up" label="Soloppgang" value={hm(today.sunrise)} />
          <Tile icon="weather-sunset-down" label="Solnedgang" value={hm(today.sunset)} />
          <Tile icon="weather-night" label="Lyst nok til å gå (fra–til)" value={`${hm(today.dawn)}–${hm(today.dusk)}`} />
          <Tile icon="timer-sand" label="Dagslys" value={dur(today.daylightMinutes)} />
        </View>
      </View>

      <View style={{ marginTop: space.xl }}>
        <SectionLabel index="02">Månen</SectionLabel>
        <Card style={{ flexDirection: 'row', alignItems: 'center', gap: space.lg }}>
          <View style={[styles.moon, { backgroundColor: p.surfaceAlt, borderColor: p.line }]}>
            <View style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${Math.round(m.illum * 100)}%`, backgroundColor: p.ink, opacity: 0.85 }} />
          </View>
          <View style={{ flex: 1 }}>
            <Txt variant="bodyStrong">{m.name}</Txt>
            <Txt variant="small" tone="muted">
              {Math.round(m.illum * 100)} % opplyst — {m.illum > 0.6 ? 'gode lysforhold om natten' : 'mørke netter, bruk hodelykt'}
            </Txt>
          </View>
        </Card>
      </View>

      <Card tone="surfaceAlt" flat style={{ marginTop: space.xl }}>
        <Row style={{ alignItems: 'flex-start' }}>
          <Icon name="lightbulb-on-outline" tone="signal" />
          <Txt variant="small" style={{ flex: 1 }}>
            Planlegg å være fremme før det blir mørkt. Tommelfingerregel: én fingerbredde mellom solen og horisonten med
            strak arm er omtrent et kvarter igjen av solen.
          </Txt>
        </Row>
      </Card>
    </Screen>
  );
}

function Tile({ icon, label, value }: { icon: IconName; label: string; value: string }) {
  const p = usePalette();
  return (
    <View style={[styles.tile, { backgroundColor: p.surface, borderColor: p.line }]}>
      <Icon name={icon} tone="signal" />
      <Txt style={{ fontFamily: fonts.bold, fontSize: 22, letterSpacing: -0.5, color: p.ink }}>{value}</Txt>
      <Txt variant="small" tone="muted">
        {label}
      </Txt>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { borderRadius: radius.xl, padding: space.xl, gap: 6 },
  big: { fontFamily: fonts.bold, fontSize: 40, lineHeight: 44, letterSpacing: -1.5 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  tile: { flexBasis: '47%', flexGrow: 1, borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.lg, padding: 14, gap: 6 },
  moon: { width: 54, height: 54, borderRadius: 27, borderWidth: 1, overflow: 'hidden' },
});
