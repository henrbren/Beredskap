import { File } from 'expo-file-system';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import { useState } from 'react';
import { Alert, Modal, Platform, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Screen } from '@/components/screen';
import { Button, Card, Icon, IconButton, Row, Tap, Txt } from '@/components/ui';
import { appDir, hasFileSystem, safeDelete } from '@/lib/files';
import { haptic } from '@/lib/haptics';
import { uid } from '@/store/app';
import { useOffline, type ArchiveDoc } from '@/store/offline';
import { fonts, radius, space, usePalette } from '@/theme';

type Tab = 'dokumenter' | 'logg';

export default function Arkiv() {
  const p = usePalette();
  const [tab, setTab] = useState<Tab>('dokumenter');
  return (
    <Screen back eyebrow="Kun på denne telefonen" title="Arkiv">
      <View style={[styles.segments, { backgroundColor: p.surfaceAlt }]}>
        {(
          [
            ['dokumenter', 'Dokumenter'],
            ['logg', 'Krisedagbok'],
          ] as [Tab, string][]
        ).map(([id, label]) => (
          <Tap key={id} haptics={false} onPress={() => setTab(id)} style={[styles.segment, tab === id && { backgroundColor: p.surface }]}>
            <Txt style={{ fontFamily: fonts.medium, fontSize: 14, color: tab === id ? p.ink : p.muted }}>{label}</Txt>
          </Tap>
        ))}
      </View>
      {tab === 'dokumenter' ? <Dokumenter /> : <Logg />}
    </Screen>
  );
}

function Dokumenter() {
  const p = usePalette();
  const docs = useOffline((s) => s.docs);
  const addDoc = useOffline((s) => s.addDoc);
  const removeDoc = useOffline((s) => s.removeDoc);
  const [open, setOpen] = useState<ArchiveDoc | null>(null);
  const [title, setTitle] = useState('');

  const add = async (source: 'camera' | 'library') => {
    const opts: ImagePicker.ImagePickerOptions = { mediaTypes: ['images'], quality: 0.8 };
    if (source === 'camera') {
      const perm = await ImagePicker.requestCameraPermissionsAsync();
      if (!perm.granted) return;
    }
    const res = source === 'camera' ? await ImagePicker.launchCameraAsync(opts) : await ImagePicker.launchImageLibraryAsync(opts);
    if (res.canceled || !res.assets?.[0]) return;
    const asset = res.assets[0];
    let uri = asset.uri;
    // Copy into the app's own folder so the document survives even if the photo is deleted.
    const dir = appDir('arkiv');
    if (dir) {
      const dest = new File(dir, `${uid()}.jpg`);
      await new File(asset.uri).copy(dest);
      uri = dest.uri;
    }
    addDoc({ title: title.trim() || 'Dokument', uri, width: asset.width, height: asset.height });
    setTitle('');
    haptic.success();
  };

  const remove = (d: ArchiveDoc) => {
    const doIt = () => {
      safeDelete(d.uri);
      removeDoc(d.id);
      setOpen(null);
    };
    if (Platform.OS === 'web') return doIt();
    Alert.alert('Slette dokumentet?', d.title, [
      { text: 'Avbryt', style: 'cancel' },
      { text: 'Slett', style: 'destructive', onPress: doIt },
    ]);
  };

  return (
    <View style={{ gap: space.lg }}>
      <Card style={{ gap: space.md }}>
        <Txt variant="small" tone="muted">
          Ta bilde av pass, førerkort, forsikringspapirer, resepter og viktige avtaler. Bildene lagres bare i appen.
        </Txt>
        <TextInput
          value={title}
          onChangeText={setTitle}
          placeholder="Navn, f.eks. «Pass – Kari»"
          placeholderTextColor={p.muted}
          style={[styles.field, { color: p.ink, borderColor: p.line, backgroundColor: p.bg }]}
        />
        <Row gap={8}>
          <Button label="Ta bilde" icon="camera-outline" small style={{ flex: 1 }} onPress={() => add('camera')} disabled={!hasFileSystem} />
          <Button label="Fra bilder" icon="image-outline" variant="outline" small style={{ flex: 1 }} onPress={() => add('library')} />
        </Row>
      </Card>

      <View style={styles.grid}>
        {docs.map((d) => (
          <Tap key={d.id} onPress={() => setOpen(d)} style={[styles.doc, { borderColor: p.line, backgroundColor: p.surface }]}>
            <Image source={{ uri: d.uri }} style={styles.thumb} contentFit="cover" />
            <Txt variant="small" numberOfLines={1} style={{ padding: 8, fontFamily: fonts.medium }}>
              {d.title}
            </Txt>
          </Tap>
        ))}
      </View>
      {docs.length === 0 && (
        <Card style={{ alignItems: 'center', gap: 8, paddingVertical: space.xl }}>
          <Icon name="folder-lock-outline" size={30} tone="muted" />
          <Txt tone="muted">Ingen dokumenter ennå.</Txt>
        </Card>
      )}

      <Viewer doc={open} onClose={() => setOpen(null)} onDelete={remove} />
    </View>
  );
}

function Viewer({ doc, onClose, onDelete }: { doc: ArchiveDoc | null; onClose: () => void; onDelete: (d: ArchiveDoc) => void }) {
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={!!doc} animationType="fade" onRequestClose={onClose} transparent>
      <View style={{ flex: 1, backgroundColor: '#000' }}>
        <Row style={{ justifyContent: 'space-between', paddingTop: insets.top + 10, paddingHorizontal: 16 }}>
          <IconButton icon="close" label="Lukk" onPress={onClose} />
          <Txt style={{ color: '#fff', fontFamily: fonts.semibold, flex: 1, textAlign: 'center' }} numberOfLines={1}>
            {doc?.title}
          </Txt>
          <IconButton icon="trash-can-outline" label="Slett" onPress={() => doc && onDelete(doc)} />
        </Row>
        <Pressable style={{ flex: 1 }} onPress={onClose}>
          {doc && <Image source={{ uri: doc.uri }} style={{ flex: 1 }} contentFit="contain" />}
        </Pressable>
      </View>
    </Modal>
  );
}

function Logg() {
  const p = usePalette();
  const log = useOffline((s) => s.log);
  const addLog = useOffline((s) => s.addLog);
  const removeLog = useOffline((s) => s.removeLog);
  const [text, setText] = useState('');

  const save = async () => {
    if (!text.trim()) return;
    let pos: { lat: number; lon: number } | undefined;
    try {
      const perm = await Location.getForegroundPermissionsAsync();
      if (perm.granted) {
        const l = await Location.getLastKnownPositionAsync();
        if (l) pos = { lat: l.coords.latitude, lon: l.coords.longitude };
      }
    } catch {
      // position is optional
    }
    addLog({ text: text.trim(), ...pos });
    setText('');
    haptic.success();
  };

  return (
    <View style={{ gap: space.lg }}>
      <Card style={{ gap: space.md }}>
        <Txt variant="small" tone="muted">
          Noter hva som skjer, når — beskjeder fra myndighetene, hvem du har snakket med, skader, forbruk. Nyttig for
          deg selv, forsikringen og nødetatene.
        </Txt>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Hva skjer nå?"
          placeholderTextColor={p.muted}
          multiline
          style={[styles.field, { minHeight: 80, paddingTop: 12, textAlignVertical: 'top', color: p.ink, borderColor: p.line, backgroundColor: p.bg }]}
        />
        <Button label="Lagre notat" icon="note-plus-outline" small onPress={save} disabled={!text.trim()} />
      </Card>

      <View style={[styles.timeline, { borderLeftColor: p.line }]}>
        {log.map((e) => (
          <View key={e.id} style={{ gap: 4 }}>
            <View style={[styles.tlDot, { backgroundColor: p.signal }]} />
            <Row style={{ justifyContent: 'space-between' }}>
              <Txt variant="label" tone="muted">
                {new Date(e.at).toLocaleString('nb-NO', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}
                {e.lat != null ? ` · ${e.lat.toFixed(4)}, ${e.lon!.toFixed(4)}` : ''}
              </Txt>
              <Tap onPress={() => removeLog(e.id)} hitSlop={10}>
                <Icon name="close" size={14} tone="muted" />
              </Tap>
            </Row>
            <Txt>{e.text}</Txt>
          </View>
        ))}
        {log.length === 0 && (
          <Txt tone="muted" variant="small">
            Ingen notater ennå.
          </Txt>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  segments: { flexDirection: 'row', borderRadius: radius.pill, padding: 4, marginBottom: space.xl },
  segment: { flex: 1, alignItems: 'center', paddingVertical: 9, borderRadius: radius.pill },
  field: { borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.md, paddingHorizontal: 14, height: 48, fontFamily: fonts.regular, fontSize: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  doc: { width: '48%', flexGrow: 1, borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.md, overflow: 'hidden' },
  thumb: { width: '100%', aspectRatio: 1.3 },
  timeline: { borderLeftWidth: 1, marginLeft: 6, paddingLeft: 18, gap: space.lg },
  tlDot: { position: 'absolute', left: -24, top: 3, width: 11, height: 11, borderRadius: 3, transform: [{ rotate: '45deg' }] },
});
