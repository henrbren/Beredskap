import { useLocalSearchParams } from 'expo-router';
import { useRef, useState } from 'react';
import { Alert, Platform, StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Bar, Button, Card, Field, Icon, Row, SectionLabel, Tap, Txt } from '@/components/ui';
import { formatBytes, freeBytes, hasFileSystem } from '@/lib/files';
import { haptic } from '@/lib/haptics';
import { AVG_TILE_BYTES, countTiles, deleteTiles, downloadTiles, MAX_ZOOM, type DownloadProgress } from '@/lib/tiles';
import { uid } from '@/store/app';
import { useOffline, type Bounds, type MapArea } from '@/store/offline';
import { fonts, radius, space, usePalette } from '@/theme';

const LEVELS = [
  { id: 'oversikt', label: 'Oversikt', detail: 'Byer og hovedveier', max: 12 },
  { id: 'tur', label: 'Tur', detail: 'Stier, bekker, høydekurver', max: 15 },
  { id: 'detalj', label: 'Detaljert', detail: 'Hus og gangveier', max: 17 },
] as const;

const MAX_TILES = 25_000;

function newArea(name: string, bounds: Bounds, minZoom: number, maxZoom: number, tiles: number): MapArea {
  return { id: uid(), name, bounds, minZoom, maxZoom, tiles, bytes: 0, createdAt: Date.now(), complete: false };
}

export default function KartOmrader() {
  const p = usePalette();
  const params = useLocalSearchParams<{ b?: string; z?: string }>();
  const areas = useOffline((s) => s.areas);
  const upsertArea = useOffline((s) => s.upsertArea);
  const removeArea = useOffline((s) => s.removeArea);
  const bounds: Bounds | null = params.b ? JSON.parse(params.b) : null;
  const viewZoom = Number(params.z ?? 10);
  const [level, setLevel] = useState<(typeof LEVELS)[number]['id']>('tur');
  const [name, setName] = useState('');
  const [progress, setProgress] = useState<DownloadProgress | null>(null);
  const abort = useRef({ aborted: false });

  const lv = LEVELS.find((l) => l.id === level)!;
  const minZ = Math.max(5, Math.min(viewZoom, lv.max) - 3);
  const maxZ = Math.min(MAX_ZOOM, lv.max);
  const tiles = bounds ? countTiles(bounds, minZ, maxZ) : 0;
  const estimate = tiles * AVG_TILE_BYTES;
  const free = freeBytes();
  const tooBig = tiles > MAX_TILES;

  const start = async () => {
    if (!bounds) return;
    abort.current = { aborted: false };
    const area = newArea(name.trim() || `Område ${areas.length + 1}`, bounds, minZ, maxZ, tiles);
    upsertArea(area);
    setProgress({ done: 0, total: tiles, bytes: 0, failed: 0 });
    const res = await downloadTiles(bounds, minZ, maxZ, setProgress, abort.current);
    upsertArea({ ...area, bytes: res.bytes, complete: !abort.current.aborted && res.failed === 0 });
    setProgress(null);
    if (!abort.current.aborted) haptic.success();
  };

  const remove = (id: string) => {
    const area = areas.find((a) => a.id === id);
    if (!area) return;
    const doIt = () => {
      deleteTiles(area, areas.filter((a) => a.id !== id));
      removeArea(id);
    };
    if (Platform.OS === 'web') return doIt();
    Alert.alert('Slette kartområdet?', `${area.name} fjernes fra telefonen.`, [
      { text: 'Avbryt', style: 'cancel' },
      { text: 'Slett', style: 'destructive', onPress: doIt },
    ]);
  };

  return (
    <Screen back eyebrow="Kartverket · topografisk" title="Offline-kart">
      {!hasFileSystem && (
        <Card tone="surfaceAlt" flat style={{ marginBottom: space.xl }}>
          <Txt variant="small">Nedlasting av kart krever app-versjonen på telefon. I nettleseren vises kartet bare med nett.</Txt>
        </Card>
      )}

      <SectionLabel index="01">Last ned området du ser</SectionLabel>
      {bounds ? (
        <Card style={{ gap: space.lg, marginBottom: space.xxl }}>
          <View style={{ gap: 8 }}>
            {LEVELS.map((l) => {
              const on = l.id === level;
              return (
                <Tap
                  key={l.id}
                  onPress={() => setLevel(l.id)}
                  style={[styles.level, { borderColor: on ? p.signal : p.line, backgroundColor: on ? p.signal + '14' : 'transparent' }]}>
                  <View style={[styles.radio, { borderColor: on ? p.signal : p.line }]}>{on && <View style={[styles.dot, { backgroundColor: p.signal }]} />}</View>
                  <View style={{ flex: 1 }}>
                    <Txt variant="bodyStrong">{l.label}</Txt>
                    <Txt variant="small" tone="muted">
                      {l.detail}
                    </Txt>
                  </View>
                  <Txt variant="mono" tone="muted">
                    Z{Math.max(5, Math.min(viewZoom, l.max) - 3)}–{l.max}
                  </Txt>
                </Tap>
              );
            })}
          </View>
          <Field label="Navn" value={name} onChangeText={setName} placeholder="F.eks. Hjemme, Hytta, Jobben" />
          <Row style={{ justifyContent: 'space-between' }}>
            <View>
              <Txt style={{ fontFamily: fonts.bold, fontSize: 22, color: tooBig ? p.danger : p.ink }}>~{formatBytes(estimate)}</Txt>
              <Txt variant="label" tone="muted">
                {tiles.toLocaleString('nb-NO')} kartfliser
              </Txt>
            </View>
            {free !== null && (
              <Txt variant="label" tone="muted">
                {formatBytes(free)} ledig
              </Txt>
            )}
          </Row>
          {tooBig && (
            <Txt variant="small" tone="danger">
              Området er for stort for dette detaljnivået. Zoom inn på kartet eller velg et lavere nivå.
            </Txt>
          )}
          {progress ? (
            <View style={{ gap: 8 }}>
              <Bar value={progress.done / Math.max(1, progress.total)} height={6} />
              <Row style={{ justifyContent: 'space-between' }}>
                <Txt variant="label" tone="muted">
                  {progress.done.toLocaleString('nb-NO')} / {progress.total.toLocaleString('nb-NO')} · {formatBytes(progress.bytes)}
                </Txt>
                <Tap onPress={() => (abort.current.aborted = true)}>
                  <Txt variant="label" tone="danger">
                    Avbryt
                  </Txt>
                </Tap>
              </Row>
            </View>
          ) : (
            <Button label="Last ned" icon="download" onPress={start} disabled={tooBig || !hasFileSystem || tiles === 0} />
          )}
        </Card>
      ) : (
        <Card style={{ marginBottom: space.xxl }}>
          <Txt tone="muted">Åpne kartet, flytt til området du vil ha offline, og trykk på nedlastingsknappen.</Txt>
        </Card>
      )}

      <SectionLabel index="02">På telefonen</SectionLabel>
      {areas.length === 0 ? (
        <Card>
          <Row>
            <Icon name="map-search-outline" tone="muted" />
            <Txt variant="small" tone="muted" style={{ flex: 1 }}>
              Ingen kart lastet ned ennå. Tips: last ned «Tur»-nivå for hjemmet og hytta, og «Oversikt» for hele fylket.
            </Txt>
          </Row>
        </Card>
      ) : (
        <Card style={{ paddingVertical: 4 }}>
          {areas.map((a, i) => (
            <Row key={a.id} style={[styles.row, i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
              <Icon name={a.complete ? 'map-check-outline' : 'map-clock-outline'} tone={a.complete ? 'ok' : 'warn'} />
              <View style={{ flex: 1 }}>
                <Txt variant="bodyStrong">{a.name}</Txt>
                <Txt variant="label" tone="muted">
                  Z{a.minZoom}–{a.maxZoom} · {formatBytes(a.bytes)}
                  {a.complete ? '' : ' · ufullstendig'}
                </Txt>
              </View>
              <Tap onPress={() => remove(a.id)} hitSlop={10}>
                <Icon name="trash-can-outline" tone="muted" size={20} />
              </Tap>
            </Row>
          ))}
        </Card>
      )}
      <Txt variant="small" tone="muted" style={{ marginTop: space.lg }}>
        Kartdata © Kartverket (CC BY 4.0). Last ned over wifi — kartene brukes deretter helt uten nett.
      </Txt>
    </Screen>
  );
}

const styles = StyleSheet.create({
  level: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1, borderRadius: radius.md, padding: 12 },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  dot: { width: 9, height: 9, borderRadius: 5 },
  row: { paddingVertical: 12 },
});
