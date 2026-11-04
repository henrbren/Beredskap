import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Screen } from '@/components/screen';
import { Card, Icon, Tap, Txt } from '@/components/ui';
import { articleCategories, articles } from '@/data/articles';
import type { ArticleCategory } from '@/data/types';
import { space, usePalette } from '@/theme';

export default function LeksikonKategori() {
  const p = usePalette();
  const { kategori } = useLocalSearchParams<{ kategori: ArticleCategory }>();
  const meta = articleCategories[kategori];
  const list = articles.filter((a) => a.category === kategori).sort((a, b) => a.title.localeCompare(b.title, 'nb'));

  return (
    <Screen back eyebrow={`Leksikon · ${list.length} artikler`} title={meta?.label ?? 'Leksikon'}>
      <Card style={{ paddingVertical: 4 }}>
        {list.map((a, i) => (
          <Tap
            key={a.id}
            onPress={() => router.push({ pathname: '/artikkel/[id]', params: { id: a.id } })}
            style={[styles.row, i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
            <Txt variant="bodyStrong">{a.title}</Txt>
            <Txt variant="small" tone="muted" numberOfLines={2}>
              {a.summary}
            </Txt>
          </Tap>
        ))}
      </Card>
      {list.length === 0 && (
        <Card style={{ alignItems: 'center', gap: 8, paddingVertical: space.xxl }}>
          <Icon name="book-off-outline" tone="muted" size={30} />
          <Txt tone="muted">Ingen artikler her ennå.</Txt>
        </Card>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { paddingVertical: 14, gap: 3 },
});
