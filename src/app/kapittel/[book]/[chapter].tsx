import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Button, Icon, Row, Tap, Txt } from '@/components/ui';
import { bookById } from '@/data/books';
import type { BookBlock } from '@/data/types';
import { haptic } from '@/lib/haptics';
import { useApp } from '@/store/app';
import { fonts, radius, space, usePalette } from '@/theme';

export default function ChapterScreen() {
  const p = usePalette();
  const { book: bookId, chapter: chapterId } = useLocalSearchParams<{ book: string; chapter: string }>();
  const book = bookById[bookId];
  const premium = useApp((s) => s.premium);
  const markRead = useApp((s) => s.markRead);

  const index = book?.chapters.findIndex((c) => c.id === chapterId) ?? -1;
  if (!book || index < 0) return <Redirect href="/kunnskap" />;
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

      <View style={{ gap: space.lg }}>
        {chapter.blocks.map((b, i) => (
          <Block key={i} block={b} accent={accent} />
        ))}
      </View>

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

function Block({ block, accent }: { block: BookBlock; accent: string }) {
  const p = usePalette();
  switch (block.type) {
    case 'p':
      return <Txt variant="reading">{block.text}</Txt>;
    case 'h':
      return (
        <Txt variant="heading" style={{ fontSize: 22, lineHeight: 27, marginTop: space.md }}>
          {block.text}
        </Txt>
      );
    case 'list':
      return (
        <View style={{ gap: 10 }}>
          {block.items.map((it, i) => (
            <Row key={i} style={{ alignItems: 'flex-start' }} gap={12}>
              <Txt style={{ fontFamily: fonts.monoBold, color: accent, width: 22, fontSize: 14, lineHeight: 28 }}>
                {block.ordered ? `${i + 1}.` : '—'}
              </Txt>
              <Txt variant="reading" style={{ flex: 1 }}>
                {it}
              </Txt>
            </Row>
          ))}
        </View>
      );
    case 'tip':
    case 'warning': {
      const warn = block.type === 'warning';
      const c = warn ? p.danger : accent;
      return (
        <View style={[styles.callout, { borderColor: c, backgroundColor: p.surface }]}>
          <Row gap={8}>
            <Icon name={warn ? 'alert-octagon' : 'lightbulb-on-outline'} size={18} color={c} />
            <Txt variant="label" style={{ color: c }}>
              {block.title ?? (warn ? 'Advarsel' : 'Tips')}
            </Txt>
          </Row>
          <Txt style={{ fontSize: 16, lineHeight: 24 }}>{block.text}</Txt>
        </View>
      );
    }
    case 'facts':
      return (
        <View style={styles.facts}>
          {block.items.map((f) => (
            <View key={f.label} style={[styles.fact, { backgroundColor: p.surface, borderColor: p.line }]}>
              <Txt style={{ fontFamily: fonts.bold, fontSize: 20, letterSpacing: -0.5, color: accent }}>{f.value}</Txt>
              <Txt variant="small" tone="muted">
                {f.label}
              </Txt>
            </View>
          ))}
        </View>
      );
  }
}

const styles = StyleSheet.create({
  callout: { borderLeftWidth: 3, borderRadius: radius.sm, padding: space.lg, gap: 8 },
  facts: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  fact: {
    flexGrow: 1,
    flexBasis: '45%',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    padding: 14,
    gap: 4,
  },
  end: { marginTop: space.xxxl, paddingTop: space.xl, borderTopWidth: 1 },
});
