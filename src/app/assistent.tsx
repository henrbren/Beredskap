import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View, type ScrollViewInstance } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { IconButton, Icon, Row, Tap, Txt } from '@/components/ui';
import { ask, installedModel, stopAnswer, useAi, type ChatTurn } from '@/lib/ai';
import type { Hit } from '@/lib/search';
import { useApp } from '@/store/app';
import { fonts, gutter, radius, space, usePalette } from '@/theme';

interface Msg {
  role: 'user' | 'assistant';
  text: string;
  sources?: Hit[];
  generated?: boolean;
  pending?: boolean;
}

const STARTERS = ['Hva gjør jeg hvis strømmen går om vinteren?', 'Hvordan renser jeg vann uten strøm?', 'Hvordan gir jeg posisjonen min til 113?', 'Hva bør være i evakueringssekken?'];

/** Renders **bold** segments. */
function Rich({ text, color }: { text: string; color: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <Txt style={{ color, fontSize: 16, lineHeight: 24 }}>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <Txt key={i} style={{ color, fontFamily: fonts.semibold, fontSize: 16, lineHeight: 24 }}>
            {part.slice(2, -2)}
          </Txt>
        ) : (
          part
        ),
      )}
    </Txt>
  );
}

export default function Assistent() {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams<{ q?: string }>();
  const premium = useApp((s) => s.premium);
  const aiStatus = useAi((s) => s.status);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const scroll = useRef<ScrollViewInstance>(null);
  const model = installedModel();
  const asked = useRef(false);

  const send = async (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    setInput('');
    setBusy(true);
    const history: ChatTurn[] = msgs.filter((m) => !m.pending).map((m) => ({ role: m.role, content: m.text }));
    setMsgs((m) => [...m, { role: 'user', text: q }, { role: 'assistant', text: '', pending: true }]);
    try {
      const res = await ask(q, history, {
        premium,
        onToken: (t) => setMsgs((m) => [...m.slice(0, -1), { role: 'assistant', text: t, pending: true }]),
      });
      setMsgs((m) => [...m.slice(0, -1), { role: 'assistant', text: res.text, sources: res.sources, generated: res.generated }]);
    } catch (e) {
      setMsgs((m) => [...m.slice(0, -1), { role: 'assistant', text: `Noe gikk galt: ${e instanceof Error ? e.message : String(e)}` }]);
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    if (params.q && !asked.current) {
      asked.current = true;
      send(params.q);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.q]);

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: p.bg }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={[styles.header, { paddingTop: insets.top + space.md, borderBottomColor: p.line }]}>
        <IconButton icon="arrow-left" label="Tilbake" onPress={() => router.back()} />
        <View style={{ flex: 1 }}>
          <Txt variant="heading">Assistent</Txt>
          <Row gap={6}>
            <View style={[styles.statusDot, { backgroundColor: model ? p.ok : p.warn }]} />
            <Txt variant="label" tone="muted">
              {aiStatus === 'loading' ? 'Starter modellen …' : model ? `Lokal AI · ${model.name}` : 'Bibliotekssøk · ingen AI-modell'}
            </Txt>
          </Row>
        </View>
        {busy && model ? <IconButton icon="stop" label="Stopp" onPress={() => stopAnswer()} /> : null}
      </View>

      <ScrollView
        ref={scroll}
        onContentSizeChange={() => scroll.current?.scrollToEnd({ animated: true })}
        contentContainerStyle={{ padding: gutter, gap: space.lg, paddingBottom: space.xl }}
        keyboardShouldPersistTaps="handled">
        {msgs.length === 0 && (
          <View style={{ gap: space.lg }}>
            <Txt variant="title">Spør om hva som helst — uten nett.</Txt>
            <Txt tone="muted">
              Svarene bygger kun på bibliotekets innhold: handlingskort, leksikon og bøker. Ved fare for liv: ring 113, 112
              eller 110 først.
            </Txt>
            {!model && (
              <Tap onPress={() => router.push('/lagring')}>
                <View style={[styles.notice, { borderColor: p.line, backgroundColor: p.surface }]}>
                  <Icon name="download-circle-outline" tone="signal" />
                  <Txt variant="small" style={{ flex: 1 }}>
                    Uten AI-modell svarer assistenten med de mest relevante utdragene. Last ned en lokal modell (ca. 0,8–2 GB)
                    for fullstendige svar.
                  </Txt>
                  <Icon name="chevron-right" tone="muted" />
                </View>
              </Tap>
            )}
            <View style={{ gap: 8 }}>
              {STARTERS.map((s) => (
                <Tap key={s} onPress={() => send(s)} style={[styles.starter, { borderColor: p.line }]}>
                  <Txt style={{ flex: 1 }}>{s}</Txt>
                  <Icon name="arrow-top-right" size={16} tone="muted" />
                </Tap>
              ))}
            </View>
          </View>
        )}

        {msgs.map((m, i) =>
          m.role === 'user' ? (
            <View key={i} style={[styles.user, { backgroundColor: p.inverse }]}>
              <Txt style={{ color: p.onInverse }}>{m.text}</Txt>
            </View>
          ) : (
            <View key={i} style={{ gap: 10 }}>
              {m.pending && !m.text ? (
                <Txt variant="label" tone="muted">
                  Leter i biblioteket …
                </Txt>
              ) : (
                <Rich text={m.text} color={p.ink} />
              )}
              {!!m.sources?.length && (
                <View style={{ gap: 6 }}>
                  <Txt variant="label" tone="muted">
                    {m.generated ? 'Kilder' : 'Les mer'}
                  </Txt>
                  {m.sources.map((s) => (
                    <Tap
                      key={s.doc.id}
                      onPress={() => (s.doc.premium && !premium ? router.push('/pluss') : router.push(s.doc.href as never))}
                      style={[styles.source, { borderColor: p.line, backgroundColor: p.surface }]}>
                      <Icon name={s.doc.kind === 'scenario' ? 'lightning-bolt' : s.doc.kind === 'artikkel' ? 'book-alphabet' : 'book-open-page-variant'} size={15} tone="signal" />
                      <Txt variant="small" style={{ flex: 1 }} numberOfLines={1}>
                        {s.doc.title}
                        <Txt variant="small" tone="muted">
                          {' '}
                          · {s.doc.context}
                        </Txt>
                      </Txt>
                      <Icon name="chevron-right" size={16} tone="muted" />
                    </Tap>
                  ))}
                </View>
              )}
            </View>
          ),
        )}
      </ScrollView>

      <View style={[styles.inputBar, { paddingBottom: insets.bottom + 10, borderTopColor: p.line, backgroundColor: p.bg }]}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Skriv et spørsmål …"
          placeholderTextColor={p.muted}
          multiline
          onSubmitEditing={() => send(input)}
          style={[styles.input, { color: p.ink, backgroundColor: p.surface, borderColor: p.line }]}
        />
        <Tap
          onPress={() => send(input)}
          disabled={!input.trim() || busy}
          accessibilityLabel="Send"
          style={[styles.send, { backgroundColor: input.trim() && !busy ? p.signal : p.surfaceAlt }]}>
          <Icon name="arrow-up" color={input.trim() && !busy ? p.onSignal : p.muted} />
        </Tap>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: gutter,
    paddingBottom: space.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  statusDot: { width: 7, height: 7, borderRadius: 4 },
  notice: { flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.md, padding: 12 },
  starter: { flexDirection: 'row', alignItems: 'center', gap: 10, borderWidth: 1, borderRadius: radius.md, padding: 12 },
  user: { alignSelf: 'flex-end', maxWidth: '85%', borderRadius: radius.lg, borderBottomRightRadius: 4, paddingHorizontal: 14, paddingVertical: 10 },
  source: { flexDirection: 'row', alignItems: 'center', gap: 8, borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.sm, padding: 10 },
  inputBar: { flexDirection: 'row', alignItems: 'flex-end', gap: 8, paddingHorizontal: 12, paddingTop: 10, borderTopWidth: StyleSheet.hairlineWidth },
  input: {
    flex: 1,
    minHeight: 46,
    maxHeight: 120,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 23,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  send: { width: 46, height: 46, borderRadius: 23, alignItems: 'center', justifyContent: 'center' },
});
