import { router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { BookCover } from '@/components/book-cover';
import { Screen } from '@/components/screen';
import { Bar, Button, Card, Icon, Row, SectionLabel, Tap, Txt } from '@/components/ui';
import { bookById, books } from '@/data/books';
import { bookProgress } from '@/lib/books';
import { useApp } from '@/store/app';
import { space, usePalette } from '@/theme';

export default function BookScreen() {
  const p = usePalette();
  const { id } = useLocalSearchParams<{ id: string }>();
  const book = bookById[id];
  const premium = useApp((s) => s.premium);
  const read = useApp((s) => s.read);

  if (!book) {
    return (
      <Screen back title="Fant ikke boken">
        <Txt tone="muted">Den kan ha blitt flyttet.</Txt>
      </Screen>
    );
  }

  const locked = book.premium && !premium;
  const chapterIds = book.chapters.map((c) => c.id);
  const prog = bookProgress(read, book.id, chapterIds);
  const nextChapter = book.chapters.find((c) => !read[`${book.id}/${c.id}`]) ?? book.chapters[0];
  const minutes = book.chapters.reduce((a, c) => a + c.minutes, 0);

  const open = (chapterId: string) => {
    if (locked) router.push('/pluss');
    else router.push({ pathname: '/kapittel/[book]/[chapter]', params: { book: book.id, chapter: chapterId } });
  };

  return (
    <Screen back>
      <View style={{ alignItems: 'center', marginBottom: space.xl }}>
        <BookCover book={book} index={books.indexOf(book)} locked={locked} width={210} height={290} />
      </View>
      <View style={{ gap: 8, marginBottom: space.xl }}>
        <Txt variant="label" tone={book.accent}>
          {book.premium ? 'Beredskap Pluss' : 'Gratis'} · {book.chapters.length} kapitler · {minutes} min
        </Txt>
        <Txt variant="title">{book.title}</Txt>
        <Txt variant="bodyStrong" tone="inkSoft">
          {book.subtitle}
        </Txt>
        <Txt tone="muted">{book.description}</Txt>
      </View>

      {!locked && prog > 0 && (
        <View style={{ gap: 8, marginBottom: space.lg }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Txt variant="label" tone="muted">
              Lest
            </Txt>
            <Txt variant="label" tone="ink">
              {Math.round(prog * 100)}%
            </Txt>
          </Row>
          <Bar value={prog} color={p[book.accent]} />
        </View>
      )}

      <Button
        label={locked ? 'Lås opp med Pluss' : prog > 0 && prog < 1 ? 'Fortsett å lese' : 'Begynn å lese'}
        icon={locked ? 'lock-open-variant-outline' : 'book-open-page-variant-outline'}
        onPress={() => open(nextChapter.id)}
        style={{ marginBottom: space.xxl }}
      />

      <SectionLabel index="§">Innhold</SectionLabel>
      <Card style={{ paddingVertical: 4 }}>
        {book.chapters.map((c, i) => {
          const isRead = !!read[`${book.id}/${c.id}`];
          return (
            <Tap
              key={c.id}
              onPress={() => open(c.id)}
              style={[styles.row, i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
              <Txt variant="mono" tone={isRead ? 'ok' : 'muted'} style={{ width: 26 }}>
                {String(i + 1).padStart(2, '0')}
              </Txt>
              <View style={{ flex: 1 }}>
                <Txt variant="bodyStrong" tone={locked ? 'muted' : 'ink'}>
                  {c.title}
                </Txt>
                <Txt variant="label" tone="muted">
                  {c.minutes} min
                </Txt>
              </View>
              <Icon
                name={locked ? 'lock-outline' : isRead ? 'check-circle' : 'chevron-right'}
                size={18}
                tone={isRead ? 'ok' : 'muted'}
              />
            </Tap>
          );
        })}
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 14 },
});
