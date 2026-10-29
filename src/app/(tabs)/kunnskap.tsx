import { router } from 'expo-router';
import { StyleSheet, useWindowDimensions, View } from 'react-native';

import { BookCover } from '@/components/book-cover';
import { Screen } from '@/components/screen';
import { Button, Icon, Row, SectionLabel, Tap, Txt } from '@/components/ui';
import { books } from '@/data/books';
import { bookProgress } from '@/lib/books';
import { useApp } from '@/store/app';
import { fonts, radius, space, usePalette } from '@/theme';

export default function Kunnskap() {
  const p = usePalette();
  const premium = useApp((s) => s.premium);
  const read = useApp((s) => s.read);
  const { width } = useWindowDimensions();
  const colW = (Math.min(width, 560) - 40 - 12) / 2;

  const free = books.filter((b) => !b.premium);
  const paid = books.filter((b) => b.premium);
  const totalChapters = books.reduce((a, b) => a + b.chapters.length, 0);

  return (
    <Screen inTabs eyebrow={`Bibliotek · ${books.length} bøker · ${totalChapters} kapitler`} title="Kunnskap">
      {/* Featured free book */}
      {free.map((b) => {
        const i = books.indexOf(b);
        const prog = bookProgress(read, b.id, b.chapters.map((c) => c.id));
        return (
          <Tap key={b.id} onPress={() => router.push({ pathname: '/bok/[id]', params: { id: b.id } })} style={{ marginBottom: space.xxl }}>
            <View style={[styles.featured, { backgroundColor: p.surface, borderColor: p.line }]}>
              <BookCover book={b} index={i} width={124} height={170} progress={prog} />
              <View style={{ flex: 1, gap: 8, justifyContent: 'center' }}>
                <Txt variant="label" tone="signal">
                  Start her · gratis
                </Txt>
                <Txt variant="heading">{b.title}</Txt>
                <Txt variant="small" tone="muted" numberOfLines={3}>
                  {b.subtitle}
                </Txt>
                <Txt variant="label" tone="ink">
                  {prog > 0 ? `${Math.round(prog * 100)}% lest →` : 'Begynn å lese →'}
                </Txt>
              </View>
            </View>
          </Tap>
        );
      })}

      {/* Pluss banner */}
      {!premium && (
        <View style={[styles.banner, { backgroundColor: p.inverse }]}>
          <Row gap={8}>
            <Icon name="star-four-points" color={p.signal} size={18} />
            <Txt variant="label" style={{ color: p.signal }}>
              Beredskap Pluss
            </Txt>
          </Row>
          <Txt style={{ fontFamily: fonts.bold, fontSize: 26, lineHeight: 29, letterSpacing: -0.8, color: p.onInverse }}>
            Hele biblioteket. Offline. For hele familien.
          </Txt>
          <Txt style={{ color: p.onInverse, opacity: 0.7 }}>
            {paid.length} fagbøker om vann, førstehjelp, mat, varme, kommunikasjon, overlevelse og mental beredskap — og
            nye bøker fortløpende.
          </Txt>
          <Button label="Se Pluss" icon="arrow-right" onPress={() => router.push('/pluss')} />
        </View>
      )}

      <SectionLabel index="01">{premium ? 'Biblioteket ditt' : 'I Pluss'}</SectionLabel>
      <View style={styles.grid}>
        {paid.map((b) => {
          const i = books.indexOf(b);
          const prog = bookProgress(read, b.id, b.chapters.map((c) => c.id));
          return (
            <Tap key={b.id} onPress={() => router.push({ pathname: '/bok/[id]', params: { id: b.id } })} style={{ gap: 8 }}>
              <BookCover book={b} index={i} locked={!premium} progress={prog} width={colW} height={colW * 1.35} />
              <Txt variant="small" tone="muted" numberOfLines={2} style={{ width: colW }}>
                {b.subtitle}
              </Txt>
            </Tap>
          );
        })}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  featured: {
    flexDirection: 'row',
    gap: space.lg,
    padding: 12,
    borderRadius: radius.xl,
    borderWidth: StyleSheet.hairlineWidth,
  },
  banner: { borderRadius: radius.xl, padding: space.xl, gap: space.md, marginBottom: space.xxl },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, rowGap: space.xl },
});
