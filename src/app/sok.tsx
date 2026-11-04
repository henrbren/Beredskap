import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Card, Icon, Row, Tap, Txt } from '@/components/ui';
import type { IconName } from '@/data/types';
import { search, type DocKind } from '@/lib/search';
import { useApp } from '@/store/app';
import { fonts, radius, space, usePalette } from '@/theme';

const kindMeta: Record<DocKind, { label: string; icon: IconName }> = {
  scenario: { label: 'Handlingskort', icon: 'lightning-bolt' },
  artikkel: { label: 'Leksikon', icon: 'book-alphabet' },
  kapittel: { label: 'Bok', icon: 'book-open-page-variant' },
};

const SUGGESTIONS = ['strømbrudd', 'rense vann', 'hjertestans', 'tenne bål', 'jodtabletter', 'kompass', 'flått', 'nødtoalett'];

export default function Sok() {
  const p = usePalette();
  const premium = useApp((s) => s.premium);
  const [q, setQ] = useState('');
  const hits = useMemo(() => (q.trim().length >= 2 ? search(q, 30) : []), [q]);

  return (
    <Screen back eyebrow="Søk i hele biblioteket" title="Søk">
      <View style={[styles.search, { backgroundColor: p.surface, borderColor: p.signal }]}>
        <Icon name="magnify" tone="muted" />
        <TextInput
          autoFocus
          value={q}
          onChangeText={setQ}
          placeholder="Hva lurer du på?"
          placeholderTextColor={p.muted}
          returnKeyType="search"
          style={{ flex: 1, fontFamily: fonts.regular, fontSize: 17, color: p.ink, height: 52 }}
        />
        {!!q && (
          <Tap onPress={() => setQ('')} hitSlop={10}>
            <Icon name="close-circle" tone="muted" size={18} />
          </Tap>
        )}
      </View>

      {!q && (
        <View style={styles.suggest}>
          {SUGGESTIONS.map((s) => (
            <Tap key={s} onPress={() => setQ(s)} style={[styles.chip, { borderColor: p.line }]}>
              <Txt style={{ fontFamily: fonts.medium, fontSize: 14, color: p.ink }}>{s}</Txt>
            </Tap>
          ))}
        </View>
      )}

      {q.trim().length >= 2 && (
        <Tap onPress={() => router.push({ pathname: '/assistent', params: { q } })} style={{ marginBottom: space.lg }}>
          <Row style={[styles.askRow, { backgroundColor: p.inverse }]}>
            <Icon name="creation" color={p.signal} />
            <Txt style={{ flex: 1, color: p.onInverse, fontFamily: fonts.medium }} numberOfLines={1}>
              Spør assistenten: «{q}»
            </Txt>
            <Icon name="arrow-right" color={p.onInverse} />
          </Row>
        </Tap>
      )}

      <View style={{ gap: 10 }}>
        {hits.map((h) => {
          const locked = h.doc.premium && !premium;
          return (
            <Tap key={h.doc.id} onPress={() => (locked ? router.push('/pluss') : router.push(h.doc.href as never))}>
              <Card style={{ gap: 6 }}>
                <Row gap={6}>
                  <Icon name={kindMeta[h.doc.kind].icon} size={14} tone="signal" />
                  <Txt variant="label" tone="muted" numberOfLines={1} style={{ flex: 1 }}>
                    {kindMeta[h.doc.kind].label} · {h.doc.context}
                  </Txt>
                  {locked && <Icon name="lock-outline" size={14} tone="muted" />}
                </Row>
                <Txt variant="bodyStrong">{h.doc.title}</Txt>
                <Txt variant="small" tone="muted" numberOfLines={3}>
                  {h.snippet}
                </Txt>
              </Card>
            </Tap>
          );
        })}
      </View>

      {q.trim().length >= 2 && hits.length === 0 && (
        <Card style={{ alignItems: 'center', gap: 8, paddingVertical: space.xxl }}>
          <Icon name="text-search" size={30} tone="muted" />
          <Txt variant="bodyStrong">Ingen treff</Txt>
          <Txt variant="small" tone="muted" style={{ textAlign: 'center' }}>
            Prøv et annet ord. Ved fare for liv: ring 113, 112 eller 110.
          </Txt>
        </Card>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1.5,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    marginBottom: space.lg,
  },
  suggest: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { borderWidth: 1, borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 7 },
  askRow: { borderRadius: radius.md, padding: 14 },
});
