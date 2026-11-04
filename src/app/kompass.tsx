import { useKeepAwake } from 'expo-keep-awake';
import { useState } from 'react';
import { Platform, useWindowDimensions, View } from 'react-native';
import Svg, { Circle, G, Line, Path, Text as SvgText } from 'react-native-svg';

import { Screen } from '@/components/screen';
import { Button, Card, Row, Txt } from '@/components/ui';
import { compassLabel } from '@/lib/geo';
import { haptic } from '@/lib/haptics';
import { useLocation } from '@/lib/use-location';
import { fonts, space, usePalette } from '@/theme';

export default function Kompass() {
  useKeepAwake();
  const p = usePalette();
  const { width } = useWindowDimensions();
  const { perm, heading, request } = useLocation({ heading: true });
  const [lock, setLock] = useState<number | null>(null);
  const size = Math.min(width - 40, 360);
  const c = size / 2;
  const r = c - 8;
  const h = heading ?? 0;
  const off = lock !== null ? (((h - lock + 540) % 360) - 180) : 0;

  return (
    <Screen back eyebrow="Sann nord · magnetometer" title="Kompass">
      {Platform.OS === 'web' ? (
        <Card>
          <Txt tone="muted">Kompasset bruker telefonens magnetometer og virker i appen på telefon.</Txt>
        </Card>
      ) : perm !== 'granted' ? (
        <Card style={{ gap: space.md }}>
          <Txt>Kompasset trenger posisjonstilgang for å regne ut sann nord.</Txt>
          <Button label="Gi tilgang" icon="compass-outline" onPress={request} />
        </Card>
      ) : (
        <>
          <View style={{ alignItems: 'center', gap: space.lg }}>
            <Txt style={{ fontFamily: fonts.bold, fontSize: 64, letterSpacing: -2, color: p.ink }}>
              {heading === null ? '—' : `${Math.round(h)}°`}
            </Txt>
            <Txt variant="label" tone="signal" style={{ marginTop: -12 }}>
              {heading === null ? 'Kalibrerer …' : compassLabel(h)}
            </Txt>
            <Svg width={size} height={size}>
              <G rotation={-h} origin={`${c}, ${c}`}>
                <Circle cx={c} cy={c} r={r} stroke={p.line} strokeWidth={1.5} fill={p.surface} />
                {Array.from({ length: 72 }, (_, i) => {
                  const a = (i * 5 * Math.PI) / 180 - Math.PI / 2;
                  const long = i % 6 === 0;
                  return (
                    <Line
                      key={i}
                      x1={c + Math.cos(a) * r}
                      y1={c + Math.sin(a) * r}
                      x2={c + Math.cos(a) * (r - (long ? 16 : 8))}
                      y2={c + Math.sin(a) * (r - (long ? 16 : 8))}
                      stroke={i === 0 ? p.signal : p.muted}
                      strokeWidth={long ? 2 : 1}
                    />
                  );
                })}
                {['N', 'Ø', 'S', 'V'].map((l, i) => {
                  const a = (i * Math.PI) / 2 - Math.PI / 2;
                  return (
                    <SvgText key={l} x={c + Math.cos(a) * (r - 34)} y={c + Math.sin(a) * (r - 34) + 7} fill={l === 'N' ? p.signal : p.ink} fontSize={20} fontWeight="700" textAnchor="middle">
                      {l}
                    </SvgText>
                  );
                })}
                {lock !== null && (
                  <Line
                    x1={c}
                    y1={c}
                    x2={c + Math.cos(((lock - 90) * Math.PI) / 180) * (r - 4)}
                    y2={c + Math.sin(((lock - 90) * Math.PI) / 180) * (r - 4)}
                    stroke={p.ok}
                    strokeWidth={3}
                    strokeDasharray="6 5"
                  />
                )}
              </G>
              {/* Fixed lubber line */}
              <Path d={`M ${c} 2 L ${c + 10} 22 L ${c - 10} 22 Z`} fill={p.signal} />
              <Line x1={c} y1={c - 40} x2={c} y2={c + 40} stroke={p.ink} strokeWidth={1} opacity={0.2} />
              <Line x1={c - 40} y1={c} x2={c + 40} y2={c} stroke={p.ink} strokeWidth={1} opacity={0.2} />
            </Svg>
          </View>

          <Card style={{ marginTop: space.xl, gap: space.md }}>
            {lock === null ? (
              <>
                <Txt variant="small" tone="muted">
                  Pek telefonen dit du skal og lås kursen. Da ser du hvor mye du avviker mens du går.
                </Txt>
                <Button
                  label="Lås kurs her"
                  icon="target"
                  onPress={() => {
                    haptic.success();
                    setLock(Math.round(h));
                  }}
                />
              </>
            ) : (
              <>
                <Row style={{ justifyContent: 'space-between' }}>
                  <View>
                    <Txt variant="label" tone="muted">
                      Kurs
                    </Txt>
                    <Txt style={{ fontFamily: fonts.bold, fontSize: 26, color: p.ok }}>
                      {lock}° {compassLabel(lock)}
                    </Txt>
                  </View>
                  <View style={{ alignItems: 'flex-end' }}>
                    <Txt variant="label" tone="muted">
                      Avvik
                    </Txt>
                    <Txt style={{ fontFamily: fonts.bold, fontSize: 26, color: Math.abs(off) < 10 ? p.ok : p.warn }}>
                      {Math.abs(Math.round(off))}° {off > 2 ? '← venstre' : off < -2 ? 'høyre →' : ''}
                    </Txt>
                  </View>
                </Row>
                <Button label="Slipp kurs" variant="outline" small onPress={() => setLock(null)} />
              </>
            )}
          </Card>
          <Txt variant="small" tone="muted" style={{ marginTop: space.md, textAlign: 'center' }}>
            Hold telefonen flatt og unna metall og magneter. Viser kompasset feil: beveg telefonen i et åttetall.
          </Txt>
        </>
      )}
    </Screen>
  );
}
