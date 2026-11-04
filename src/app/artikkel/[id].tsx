import { router, useLocalSearchParams } from 'expo-router';
import { Share, StyleSheet, View } from 'react-native';

import { Blocks } from '@/components/blocks';
import { Screen } from '@/components/screen';
import { Card, Icon, IconButton, SectionLabel, Tap, Txt } from '@/components/ui';
import { articleById, articleCategories } from '@/data/articles';
import type { BookBlock } from '@/data/types';
import { space, usePalette } from '@/theme';

function blocksToText(blocks: BookBlock[]) {
  return blocks
    .map((b) => {
      switch (b.type) {
        case 'p':
          return b.text;
        case 'h':
          return `\n${b.text.toUpperCase()}`;
        case 'list':
          return b.items.map((it, i) => (b.ordered ? `${i + 1}. ${it}` : `• ${it}`)).join('\n');
        case 'tip':
        case 'warning':
          return `${b.title ?? (b.type === 'warning' ? 'Advarsel' : 'Tips')}: ${b.text}`;
        case 'facts':
          return b.items.map((f) => `${f.label}: ${f.value}`).join('\n');
      }
    })
    .join('\n\n');
}

export default function ArtikkelScreen() {
  const p = usePalette();
  const { id } = useLocalSearchParams<{ id: string }>();
  const a = articleById[id];

  if (!a) {
    return (
      <Screen back title="Fant ikke artikkelen">
        <Txt tone="muted">Den kan ha blitt flyttet.</Txt>
      </Screen>
    );
  }
  const cat = articleCategories[a.category];
  const related = (a.related ?? []).map((r) => articleById[r]).filter(Boolean);

  return (
    <Screen
      back
      right={
        <IconButton
          icon="share-variant-outline"
          label="Del"
          onPress={() => Share.share({ title: a.title, message: `${a.title}\n\n${a.summary}\n\n${blocksToText(a.blocks)}\n\nKilde: ${a.source}` }).catch(() => {})}
        />
      }>
      <View style={{ gap: 8, marginBottom: space.xl }}>
        <Tap onPress={() => router.push({ pathname: '/leksikon/[kategori]', params: { kategori: a.category } })} style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
          <Icon name={cat.icon} size={14} tone="signal" />
          <Txt variant="label" tone="signal">
            Leksikon · {cat.label}
          </Txt>
        </Tap>
        <Txt variant="display" accessibilityRole="header" style={{ fontSize: 34, lineHeight: 37 }}>
          {a.title}
        </Txt>
        <Txt style={{ fontSize: 17, lineHeight: 25 }} tone="inkSoft">
          {a.summary}
        </Txt>
      </View>

      <Blocks blocks={a.blocks} accent={p.signal} />

      {related.length > 0 && (
        <View style={{ marginTop: space.xxl }}>
          <SectionLabel>Se også</SectionLabel>
          <Card style={{ paddingVertical: 4 }}>
            {related.map((r, i) => (
              <Tap
                key={r.id}
                onPress={() => router.push({ pathname: '/artikkel/[id]', params: { id: r.id } })}
                style={[styles.row, i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
                <View style={{ flex: 1 }}>
                  <Txt variant="bodyStrong">{r.title}</Txt>
                  <Txt variant="small" tone="muted" numberOfLines={1}>
                    {r.summary}
                  </Txt>
                </View>
                <Icon name="chevron-right" tone="muted" />
              </Tap>
            ))}
          </Card>
        </View>
      )}

      <Txt variant="label" tone="muted" style={{ marginTop: space.xl, textAlign: 'center' }}>
        Kilde: {a.source}
      </Txt>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 12 },
});
