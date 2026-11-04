import * as Location from 'expo-location';
import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Linking, Platform, StyleSheet, useWindowDimensions, View } from 'react-native';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';

import { Screen } from '@/components/screen';
import { Button, Card, Icon, Row, SectionLabel, Tap, Txt } from '@/components/ui';
import { bearing, compassLabel, distance, formatDistance, walkMinutes, type LatLon } from '@/lib/geo';
import { useShelters, type Shelter } from '@/lib/shelters';
import { fonts, radius, space, usePalette } from '@/theme';

const RANGES = [500, 1000, 2000, 5000, 20000];

function openDirections(s: Shelter) {
  const label = encodeURIComponent(s.address);
  const url = Platform.select({
    ios: `maps://?daddr=${s.lat},${s.lon}&dirflg=w`,
    android: `geo:0,0?q=${s.lat},${s.lon}(${label})`,
    default: `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lon}&travelmode=walking`,
  });
  Linking.openURL(url).catch(() =>
    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lon}&travelmode=walking`),
  );
}

export default function Tilfluktsrom() {
  const p = usePalette();
  const { shelters, status, error, refresh, updatedAt, source } = useShelters();
  const [perm, setPerm] = useState<'unknown' | 'granted' | 'denied'>('unknown');
  const [pos, setPos] = useState<LatLon | null>(null);
  const [heading, setHeading] = useState<number | null>(null);
  const [headingUp, setHeadingUp] = useState(true);

  useEffect(() => {
    Location.getForegroundPermissionsAsync()
      .then((r) => setPerm(r.granted ? 'granted' : r.canAskAgain ? 'unknown' : 'denied'))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (perm !== 'granted') return;
    let posSub: Location.LocationSubscription | undefined;
    let headSub: Location.LocationSubscription | undefined;
    let alive = true;
    (async () => {
      const last = await Location.getLastKnownPositionAsync().catch(() => null);
      if (last && alive) setPos({ lat: last.coords.latitude, lon: last.coords.longitude });
      posSub = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.Balanced, distanceInterval: 15 },
        (l) => setPos({ lat: l.coords.latitude, lon: l.coords.longitude }),
      ).catch(() => undefined);
      if (Platform.OS !== 'web') {
        headSub = await Location.watchHeadingAsync((h) => {
          const v = h.trueHeading >= 0 ? h.trueHeading : h.magHeading;
          setHeading((prev) => (prev === null || Math.abs(prev - v) > 2 ? v : prev));
        }).catch(() => undefined);
      }
    })();
    return () => {
      alive = false;
      posSub?.remove();
      headSub?.remove();
    };
  }, [perm]);

  const ask = async () => {
    const r = await Location.requestForegroundPermissionsAsync();
    setPerm(r.granted ? 'granted' : 'denied');
  };

  const nearest = useMemo(() => {
    if (!pos) return [];
    return shelters
      .map((s) => ({ s, d: distance(pos, s), b: bearing(pos, s) }))
      .sort((a, b) => a.d - b.d)
      .slice(0, 12);
  }, [pos, shelters]);

  const hasData = shelters.length > 0;

  return (
    <Screen back eyebrow="Offentlige tilfluktsrom · DSB" title="Tilfluktsrom">
      {!hasData && (
        <Card style={{ gap: space.md, marginBottom: space.xl }}>
          <Row>
            <Icon name="cloud-download-outline" tone="signal" size={26} />
            <Txt variant="heading" style={{ flex: 1 }}>
              Last ned tilfluktsrom
            </Txt>
          </Row>
          <Txt tone="muted">
            Hent DSBs oversikt over offentlige tilfluktsrom én gang mens du har nett. Etterpå fungerer radaren helt uten
            dekning.
          </Txt>
          {status === 'error' && (
            <Txt variant="small" tone="danger">
              Klarte ikke å laste ned ({error}). Prøv igjen når du har nett.
            </Txt>
          )}
          <Button
            label={status === 'loading' ? 'Laster ned …' : 'Last ned nå'}
            icon="download"
            onPress={refresh}
            disabled={status === 'loading'}
          />
        </Card>
      )}

      {hasData && perm !== 'granted' && (
        <Card style={{ gap: space.md, marginBottom: space.xl }}>
          <Row>
            <Icon name="crosshairs-gps" tone="signal" size={26} />
            <Txt variant="heading" style={{ flex: 1 }}>
              Finn nærmeste
            </Txt>
          </Row>
          <Txt tone="muted">
            Posisjonen din brukes bare på telefonen for å regne ut avstand og retning. GPS virker også uten mobilnett.
          </Txt>
          {perm === 'denied' ? (
            <Button label="Åpne innstillinger" variant="outline" icon="cog-outline" onPress={() => Linking.openSettings()} />
          ) : (
            <Button label="Bruk posisjon" icon="crosshairs-gps" onPress={ask} />
          )}
        </Card>
      )}

      {hasData && perm === 'granted' && !pos && (
        <Card style={{ alignItems: 'center', gap: 10, paddingVertical: space.xxl, marginBottom: space.xl }}>
          <ActivityIndicator color={p.signal} />
          <Txt tone="muted">Finner posisjonen din …</Txt>
        </Card>
      )}

      {pos && nearest.length > 0 && (
        <>
          <Radar
            items={nearest}
            heading={headingUp ? heading : null}
            onToggle={heading !== null ? () => setHeadingUp((v) => !v) : undefined}
          />
          <NearestCard item={nearest[0]} heading={heading} />

          <View style={{ marginTop: space.xxl }}>
            <SectionLabel index="01">I nærheten</SectionLabel>
            <Card style={{ paddingVertical: 4 }}>
              {nearest.slice(1, 10).map(({ s, d, b }, i) => (
                <Tap
                  key={s.id}
                  onPress={() => openDirections(s)}
                  style={[styles.listRow, i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
                  <View style={{ transform: [{ rotate: `${b - (heading ?? 0)}deg` }] }}>
                    <Icon name="navigation-variant" size={18} tone="signal" />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Txt variant="bodyStrong" numberOfLines={1}>
                      {s.address}
                    </Txt>
                    <Txt variant="small" tone="muted">
                      {s.capacity ? `${s.capacity} plasser · ` : ''}
                      {compassLabel(b)}
                    </Txt>
                  </View>
                  <Txt variant="mono">{formatDistance(d)}</Txt>
                </Tap>
              ))}
            </Card>
          </View>
        </>
      )}

      {/* Guidance — always available, also without data */}
      <View style={{ marginTop: space.xxl }}>
        <SectionLabel index="!">Rekker du ikke frem?</SectionLabel>
        <Card style={{ gap: 12 }}>
          {[
            'Gå inn i nærmeste solide bygning — kjeller eller underetasje er best.',
            'Velg et rom midt i bygget, uten vinduer, med flest mulig vegger mellom deg og utsiden.',
            'Hold deg unna vinduer og glassflater.',
            'Ute i det fri: legg deg ned i en grøft eller forsenkning og beskytt hodet.',
            'Lytt på NRK P1 og følg rådene til myndighetene.',
          ].map((t, i) => (
            <Row key={t} style={{ alignItems: 'flex-start' }}>
              <Txt variant="mono" tone="signal" style={{ width: 20 }}>
                {i + 1}
              </Txt>
              <Txt style={{ flex: 1 }}>{t}</Txt>
            </Row>
          ))}
        </Card>
        <Txt variant="small" tone="muted" style={{ marginTop: space.md }}>
          Offentlige tilfluktsrom er stengt i fredstid og klargjøres når myndighetene beslutter det. Ikke alle rom er
          registrert med koordinater — sjekk også kommunens informasjon.
        </Txt>
      </View>

      {hasData && (
        <Row style={{ justifyContent: 'space-between', marginTop: space.xl }}>
          <Txt variant="label" tone="muted">
            {shelters.length} rom ·{' '}
            {source === 'bundled' ? 'innebygd' : updatedAt ? `oppdatert ${new Date(updatedAt).toLocaleDateString('nb-NO')}` : 'lagret'}
          </Txt>
          <Tap onPress={refresh} disabled={status === 'loading'}>
            <Txt variant="label" tone="signal">
              {status === 'loading' ? 'Oppdaterer …' : 'Oppdater ↻'}
            </Txt>
          </Tap>
        </Row>
      )}
    </Screen>
  );
}

function NearestCard({ item, heading }: { item: { s: Shelter; d: number; b: number }; heading: number | null }) {
  const p = usePalette();
  const { s, d, b } = item;
  const rel = b - (heading ?? 0);
  return (
    <View style={[styles.nearest, { backgroundColor: p.inverse }]}>
      <Row style={{ alignItems: 'flex-start' }}>
        <View style={{ flex: 1, gap: 4 }}>
          <Txt variant="label" style={{ color: p.signal }}>
            Nærmeste tilfluktsrom
          </Txt>
          <Txt style={{ fontFamily: fonts.bold, fontSize: 22, lineHeight: 26, letterSpacing: -0.6, color: p.onInverse }}>
            {s.address}
          </Txt>
          {s.capacity ? (
            <Txt variant="small" style={{ color: p.onInverse, opacity: 0.6 }}>
              {s.capacity} plasser{s.label ? ` · rom ${s.label}` : ''}
            </Txt>
          ) : null}
        </View>
        <View style={[styles.arrow, { borderColor: '#ffffff26' }]}>
          <View style={{ transform: [{ rotate: `${rel}deg` }] }}>
            <Icon name="navigation" size={34} color={p.signal} />
          </View>
        </View>
      </Row>
      <Row gap={space.xl}>
        <View>
          <Txt style={{ fontFamily: fonts.bold, fontSize: 30, letterSpacing: -1, color: p.onInverse }}>{formatDistance(d)}</Txt>
          <Txt variant="label" style={{ color: p.onInverse, opacity: 0.6 }}>
            {compassLabel(b)} · {Math.round(b)}°
          </Txt>
        </View>
        <View>
          <Txt style={{ fontFamily: fonts.bold, fontSize: 30, letterSpacing: -1, color: p.onInverse }}>
            {walkMinutes(d)} min
          </Txt>
          <Txt variant="label" style={{ color: p.onInverse, opacity: 0.6 }}>
            Gange
          </Txt>
        </View>
      </Row>
      <Button label="Vis vei" icon="walk" onPress={() => openDirections(s)} />
    </View>
  );
}

function Radar({
  items,
  heading,
  onToggle,
}: {
  items: { s: Shelter; d: number; b: number }[];
  heading: number | null;
  onToggle?: () => void;
}) {
  const p = usePalette();
  const { width } = useWindowDimensions();
  const size = Math.min(width - 40, 420);
  const c = size / 2;
  const r = c - 18;
  const farthest = items[Math.min(4, items.length - 1)]?.d ?? 500;
  const range = RANGES.find((x) => x >= farthest * 1.1) ?? RANGES[RANGES.length - 1];
  const rot = heading ?? 0;

  return (
    <View style={{ alignItems: 'center', marginBottom: space.lg }}>
      <Svg width={size} height={size}>
        {[1, 2, 3].map((k) => (
          <Circle
            key={k}
            cx={c}
            cy={c}
            r={(r * k) / 3}
            stroke={p.line}
            strokeWidth={k === 3 ? 1.5 : 1}
            strokeDasharray={k === 3 ? undefined : '3 5'}
            fill="none"
          />
        ))}
        <G rotation={-rot} origin={`${c}, ${c}`}>
          <Line x1={c} y1={c - r} x2={c} y2={c + r} stroke={p.line} strokeWidth={1} />
          <Line x1={c - r} y1={c} x2={c + r} y2={c} stroke={p.line} strokeWidth={1} />
          {['N', 'Ø', 'S', 'V'].map((l, i) => {
            const a = (i * Math.PI) / 2 - Math.PI / 2;
            return (
              <SvgText
                key={l}
                x={c + Math.cos(a) * (r + 10)}
                y={c + Math.sin(a) * (r + 10) + 4}
                fill={l === 'N' ? p.signal : p.muted}
                fontSize={11}
                fontWeight="700"
                textAnchor="middle">
                {l}
              </SvgText>
            );
          })}
          {items.map(({ s, d, b }, i) => {
            if (d > range) return null;
            const a = (b * Math.PI) / 180 - Math.PI / 2;
            const rr = (d / range) * r;
            const x = c + Math.cos(a) * rr;
            const y = c + Math.sin(a) * rr;
            return i === 0 ? (
              <G key={s.id}>
                <Circle cx={x} cy={y} r={14} fill={p.signal} opacity={0.18} />
                <Circle cx={x} cy={y} r={7} fill={p.signal} />
              </G>
            ) : (
              <Circle key={s.id} cx={x} cy={y} r={4.5} fill={p.ink} opacity={0.75} />
            );
          })}
        </G>
        {/* You */}
        <Path d={`M ${c} ${c - 11} L ${c + 7} ${c + 7} L ${c} ${c + 3} L ${c - 7} ${c + 7} Z`} fill={p.ink} />
      </Svg>
      <Row style={{ justifyContent: 'space-between', width: size, marginTop: 4 }}>
        <Txt variant="label" tone="muted">
          Ytre ring {formatDistance(range)}
        </Txt>
        {onToggle && (
          <Tap onPress={onToggle} hitSlop={8}>
            <Txt variant="label" tone="signal">
              {heading !== null ? 'Kompass ●' : 'Nord opp ●'}
            </Txt>
          </Tap>
        )}
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  nearest: { borderRadius: radius.xl, padding: space.xl, gap: space.lg },
  arrow: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listRow: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 12 },
});
