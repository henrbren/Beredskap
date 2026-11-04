import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Blocks } from '@/components/blocks';
import { Screen } from '@/components/screen';
import { Button, Icon, Row, Tap, Txt } from '@/components/ui';
import { bookById } from '@/data/books';
import { haptic } from '@/lib/haptics';
import { useApp } from '@/store/app';
import { space, usePalette } from '@/theme';

export default function ChapterScreen() {
  const p = usePalette();
  const { book: bookId, chapter: chapterId } = useLocalSearchParams<{ book: string; chapter: string }>();
  const book = bookById[bookId];
  const premium = useApp((s) => s.premium);
  const markRead = useApp((s) => s.markRead);

  const index = book?.chapters.findIndex((c) => c.id === chapterId) ?? -1;
  if (!book || index < 0) return <Redirect href="/bibliotek" />;
  if (book.premium && !premium) return <Redirect href="/pluss" />;

  const chapter = book.chapters[index];
  const next = book.chapters[index + 1];
  const accent = p[book.accent];

  const finish = () => {
    markRead(book.id, chapter.id);
    haptic.success();
    if (next) router.replace({ pathname: '/kapittel/[book]/[chapter]', params: { book: book.id, chapter: next.id } });
    else router.back();
  };

  return (
    <Screen back>
      <View style={{ gap: 8, marginBottom: space.xxl }}>
        <Txt variant="label" style={{ color: accent }}>
          {book.title} · Kapittel {index + 1}/{book.chapters.length}
        </Txt>
        <Txt variant="display" accessibilityRole="header" style={{ fontSize: 36, lineHeight: 39 }}>
          {chapter.title}
        </Txt>
        <Txt variant="label" tone="muted">
          {chapter.minutes} min lesing
        </Txt>
      </View>

      <Blocks blocks={chapter.blocks} accent={accent} />

      <View style={[styles.end, { borderTopColor: p.line }]}>
        {next ? (
          <Tap onPress={finish}>
            <Txt variant="label" tone="muted">
              Neste kapittel
            </Txt>
            <Row style={{ justifyContent: 'space-between', marginTop: 6 }}>
              <Txt variant="heading" style={{ flex: 1 }}>
                {next.title}
              </Txt>
              <Icon name="arrow-right" color={accent} />
            </Row>
          </Tap>
        ) : (
          <Button label="Ferdig med boken" icon="check" onPress={finish} />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  end: { marginTop: space.xxxl, paddingTop: space.xl, borderTopWidth: 1 },
});
