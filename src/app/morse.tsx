import { useKeepAwake } from 'expo-keep-awake';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Torch, useMorseSignal, useTorch } from '@/components/torch';
import { Button, Card, Row, SectionLabel, Tap, Txt } from '@/components/ui';
import { fromMorse, MORSE, toMorse } from '@/lib/morse';
import { fonts, radius, space, usePalette } from '@/theme';

export default function Morse() {
  useKeepAwake();
  const p = usePalette();
  const torch = useTorch();
  const [mode, setMode] = useState<'tekst' | 'morse'>('tekst');
  const [input, setInput] = useState('SOS');
  const [sending, setSending] = useState(false);
  const text = mode === 'tekst' ? input : fromMorse(input);
  const code = mode === 'tekst' ? toMorse(input) : input;
  const on = useMorseSignal(text, sending, 260);

  return (
    <Screen back eyebrow="Internasjonal morsekode" title="Morse">
      <Torch on={on && torch.granted} />
      <View style={[styles.segments, { backgroundColor: p.surfaceAlt }]}>
        {(['tekst', 'morse'] as const).map((m) => (
          <Tap
            key={m}
            haptics={false}
            onPress={() => {
              setMode(m);
              setInput(m === 'tekst' ? text : code);
            }}
            style={[styles.segment, mode === m && { backgroundColor: p.surface }]}>
            <Txt style={{ fontFamily: fonts.medium, fontSize: 14, color: mode === m ? p.ink : p.muted }}>{m === 'tekst' ? 'Tekst → morse' : 'Morse → tekst'}</Txt>
          </Tap>
        ))}
      </View>

      <TextInput
        value={input}
        onChangeText={setInput}
        autoCapitalize={mode === 'tekst' ? 'characters' : 'none'}
        placeholder={mode === 'tekst' ? 'Skriv tekst' : '... --- ...'}
        placeholderTextColor={p.muted}
        multiline
        style={[styles.input, { color: p.ink, backgroundColor: p.surface, borderColor: p.line, fontFamily: mode === 'morse' ? fonts.mono : fonts.medium }]}
      />

      <Card style={{ marginTop: space.md, gap: 6 }}>
        <Txt variant="label" tone="muted">
          {mode === 'tekst' ? 'Morse' : 'Tekst'}
        </Txt>
        <Txt style={{ fontFamily: mode === 'tekst' ? fonts.monoBold : fonts.semibold, fontSize: 22, letterSpacing: mode === 'tekst' ? 2 : 0, color: p.ink }} selectable>
          {mode === 'tekst' ? code || '—' : text || '—'}
        </Txt>
      </Card>

      <View style={[styles.signal, { backgroundColor: on ? p.signal : p.surfaceAlt }]} />

      <Row gap={8}>
        <Button
          label={sending ? 'Stopp' : 'Blink meldingen'}
          icon={sending ? 'stop' : 'flash'}
          style={{ flex: 1 }}
          onPress={async () => {
            if (!sending && torch.supported && !torch.granted) await torch.request();
            setSending((s) => !s);
          }}
        />
      </Row>
      <Txt variant="small" tone="muted" style={{ marginTop: 8 }}>
        Blinker med kamerablitsen og feltet over. Prikk = kort, strek = tre ganger så lang.
      </Txt>

      <View style={{ marginTop: space.xxl }}>
        <SectionLabel>Tabell</SectionLabel>
        <View style={styles.table}>
          {Object.entries(MORSE)
            .filter(([k]) => /[A-ZÆØÅ0-9]/.test(k))
            .map(([k, v]) => (
              <View key={k} style={[styles.cell, { borderColor: p.line, backgroundColor: p.surface }]}>
                <Txt style={{ fontFamily: fonts.bold, fontSize: 16, color: p.ink }}>{k}</Txt>
                <Txt variant="mono" tone="signal">
                  {v}
                </Txt>
              </View>
            ))}
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  segments: { flexDirection: 'row', borderRadius: radius.pill, padding: 4, marginBottom: space.lg },
  segment: { flex: 1, alignItems: 'center', paddingVertical: 9, borderRadius: radius.pill },
  input: { borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.md, padding: 14, minHeight: 80, fontSize: 20, textAlignVertical: 'top' },
  signal: { height: 56, borderRadius: radius.md, marginVertical: space.lg },
  table: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  cell: { width: '23%', flexGrow: 1, borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.sm, padding: 8, gap: 2 },
});
