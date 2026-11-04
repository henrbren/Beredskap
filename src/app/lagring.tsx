import { router } from 'expo-router';
import { Alert, Platform, StyleSheet, View } from 'react-native';

import { ProgressRing } from '@/components/progress-ring';
import { Screen } from '@/components/screen';
import { Bar, Button, Card, Icon, Row, SectionLabel, Tap, Txt } from '@/components/ui';
import { articles } from '@/data/articles';
import { books } from '@/data/books';
import { quizzes } from '@/data/quizzes';
import { scenarios } from '@/data/scenarios';
import { installedModel, MODELS, useAi } from '@/lib/ai';
import { dirBytes, formatBytes, freeBytes, hasFileSystem } from '@/lib/files';
import { openReadyItem, useOfflineReadiness } from '@/lib/offline-readiness';
import { useShelters } from '@/lib/shelters';
import { useOffline } from '@/store/offline';
import { fonts, radius, space, usePalette } from '@/theme';

export default function Lagring() {
  const p = usePalette();
  const { items, done, total } = useOfflineReadiness();
  const areas = useOffline((s) => s.areas);
  const docs = useOffline((s) => s.docs);
  const shelters = useShelters();
  const ai = useAi();
  const model = installedModel();
  const free = freeBytes();
  const chapters = books.reduce((a, b) => a + b.chapters.length, 0);

  const confirmRemoveModel = () => {
    if (Platform.OS === 'web') return ai.remove();
    Alert.alert('Slette AI-modellen?', 'Assistenten svarer da med utdrag fra biblioteket.', [
      { text: 'Avbryt', style: 'cancel' },
      { text: 'Slett', style: 'destructive', onPress: () => ai.remove() },
    ]);
  };

  return (
    <Screen back eyebrow="Alt du trenger, uten nett" title="Offline-senter">
      {/* Readiness */}
      <View style={[styles.hero, { backgroundColor: p.inverse }]}>
        <ProgressRing value={done / total} size={110} color={done === total ? p.ok : p.signal} trackColor="#ffffff2e">
          <Txt style={{ fontFamily: fonts.bold, fontSize: 30, color: p.onInverse }}>
            {done}/{total}
          </Txt>
        </ProgressRing>
        <View style={{ flex: 1, gap: 4 }}>
          <Txt variant="label" style={{ color: p.signal }}>
            Klar for offline
          </Txt>
          <Txt style={{ fontFamily: fonts.bold, fontSize: 22, lineHeight: 26, color: p.onInverse }}>
            {done === total ? 'Telefonen er klar.' : 'Fyll telefonen mens du har nett.'}
          </Txt>
        </View>
      </View>

      <Card style={{ paddingVertical: 4, marginTop: space.md, marginBottom: space.xxl }}>
        {items.map((i, k) => (
          <Tap key={i.id} onPress={() => openReadyItem(i)} style={[styles.row, k > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
            <Icon name={i.done ? 'check-circle' : i.optional ? 'circle-outline' : 'alert-circle-outline'} tone={i.done ? 'ok' : i.optional ? 'muted' : 'warn'} />
            <View style={{ flex: 1 }}>
              <Txt variant="bodyStrong">{i.label}</Txt>
              <Txt variant="small" tone="muted">
                {i.hint}
              </Txt>
            </View>
            <Icon name="chevron-right" tone="muted" />
          </Tap>
        ))}
      </Card>

      {/* AI model */}
      <SectionLabel index="01">Lokal AI</SectionLabel>
      <Card style={{ gap: space.md, marginBottom: space.xxl }}>
        <Txt variant="small" tone="muted">
          En liten språkmodell som kjører helt på telefonen og svarer ut fra biblioteket. Krever app-versjonen (ikke Expo
          Go) og helst en telefon fra de siste årene. Last ned over wifi.
        </Txt>
        {model ? (
          <Row style={{ justifyContent: 'space-between' }}>
            <View>
              <Txt variant="bodyStrong">
                {model.name} · {model.description.split(' · ')[0]}
              </Txt>
              <Txt variant="label" tone="ok">
                Installert · {formatBytes(useOffline.getState().modelBytes ?? model.bytes)}
              </Txt>
            </View>
            <Tap onPress={confirmRemoveModel} hitSlop={10}>
              <Icon name="trash-can-outline" tone="muted" />
            </Tap>
          </Row>
        ) : ai.status === 'downloading' ? (
          <View style={{ gap: 8 }}>
            <Bar value={ai.progress} height={6} />
            <Row style={{ justifyContent: 'space-between' }}>
              <Txt variant="label" tone="muted">
                Laster ned … {Math.round(ai.progress * 100)} %
              </Txt>
              <Tap onPress={ai.cancel}>
                <Txt variant="label" tone="danger">
                  Avbryt
                </Txt>
              </Tap>
            </Row>
          </View>
        ) : (
          <View style={{ gap: 8 }}>
            {MODELS.map((m) => (
              <Tap
                key={m.id}
                disabled={!hasFileSystem}
                onPress={() => ai.download(m)}
                style={[styles.model, { borderColor: p.line, opacity: hasFileSystem ? 1 : 0.5 }]}>
                <Icon name="creation" tone="signal" />
                <View style={{ flex: 1 }}>
                  <Txt variant="bodyStrong">{m.name}</Txt>
                  <Txt variant="small" tone="muted">
                    {m.description}
                  </Txt>
                </View>
                <Txt variant="mono" tone="muted">
                  {formatBytes(m.bytes)}
                </Txt>
                <Icon name="download" tone="ink" size={20} />
              </Tap>
            ))}
            {ai.error && (
              <Txt variant="small" tone="danger">
                {ai.error}
              </Txt>
            )}
          </View>
        )}
      </Card>

      {/* Storage */}
      <SectionLabel index="02">Lagret på telefonen</SectionLabel>
      <Card style={{ paddingVertical: 4, marginBottom: space.md }}>
        <StoreRow icon="map-outline" label="Kart" value={`${areas.length} områder · ${formatBytes(dirBytes('kart'))}`} onPress={() => router.push('/kart-omrader')} />
        <StoreRow icon="creation" label="AI-modell" value={model ? formatBytes(dirBytes('modeller')) : '—'} border />
        <StoreRow
          icon="shield-home-outline"
          label="Tilfluktsrom"
          value={shelters.shelters.length ? `${shelters.shelters.length} rom` : 'Ikke lastet ned'}
          onPress={() => router.push('/radar')}
          border
        />
        <StoreRow icon="folder-lock-outline" label="Arkiv" value={`${docs.length} dokumenter · ${formatBytes(dirBytes('arkiv'))}`} onPress={() => router.push('/arkiv')} border />
        <StoreRow
          icon="bookshelf"
          label="Bibliotek (innebygd)"
          value={`${articles.length} artikler · ${chapters} kapitler · ${scenarios.length} kort · ${quizzes.length} kurs`}
          border
        />
      </Card>
      {free !== null && (
        <Txt variant="label" tone="muted" style={{ textAlign: 'right' }}>
          {formatBytes(free)} ledig på telefonen
        </Txt>
      )}

      {!hasFileSystem && (
        <Card tone="surfaceAlt" flat style={{ marginTop: space.lg }}>
          <Txt variant="small">I nettleseren kan du ikke laste ned kart eller AI-modell. Installer appen på telefonen.</Txt>
        </Card>
      )}

      <Button label="Åpne kartet" icon="map" variant="outline" style={{ marginTop: space.xl }} onPress={() => router.push('/kart')} />
    </Screen>
  );
}

function StoreRow({ icon, label, value, onPress, border }: { icon: 'map-outline' | 'creation' | 'shield-home-outline' | 'folder-lock-outline' | 'bookshelf'; label: string; value: string; onPress?: () => void; border?: boolean }) {
  const p = usePalette();
  return (
    <Tap onPress={onPress} disabled={!onPress} style={[styles.row, border && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
      <Icon name={icon} tone="muted" />
      <Txt variant="bodyStrong" style={{ width: 110 }}>
        {label}
      </Txt>
      <Txt variant="small" tone="muted" style={{ flex: 1, textAlign: 'right' }}>
        {value}
      </Txt>
    </Tap>
  );
}

const styles = StyleSheet.create({
  hero: { flexDirection: 'row', alignItems: 'center', gap: space.lg, borderRadius: radius.xl, padding: space.lg },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 13 },
  model: { flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: 1, borderRadius: radius.md, padding: 12 },
});
