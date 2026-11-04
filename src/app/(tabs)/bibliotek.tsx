import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';

import { BookCover } from '@/components/book-cover';
import { Screen } from '@/components/screen';
import { Bar, Button, Card, Icon, Row, SectionLabel, Tap, Txt } from '@/components/ui';
import { articleCategories, articleCategoryOrder, articles } from '@/data/articles';
import { books } from '@/data/books';
import { quizzes } from '@/data/quizzes';
import { bookProgress } from '@/lib/books';
import { useApp } from '@/store/app';
import { useOffline } from '@/store/offline';
import { fonts, radius, space, usePalette } from '@/theme';

type Section = 'leksikon' | 'boker' | 'kurs';

export default function Bibliotek() {
  const p = usePalette();
  const [section, setSection] = useState<Section>('leksikon');
  const chapters = books.reduce((a, b) => a + b.chapters.length, 0);

  return (
    <Screen inTabs eyebrow={`Offline · ${articles.length} artikler · ${chapters} kapitler`} title="Bibliotek">
      {/* Search + assistant */}
      <Tap onPress={() => router.push('/sok')}>
        <View style={[styles.search, { backgroundColor: p.surface, borderColor: p.line }]}>
          <Icon name="magnify" tone="muted" />
          <Txt tone="muted" style={{ flex: 1 }}>
            Søk i alt — f.eks. «rense vann»
          </Txt>
        </View>
      </Tap>
      <Tap onPress={() => router.push('/assistent')} style={{ marginTop: space.md, marginBottom: space.xl }}>
        <View style={[styles.ai, { backgroundColor: p.inverse }]}>
          <View style={[styles.aiIcon, { backgroundColor: p.signal }]}>
            <Icon name="creation" color={p.onSignal} />
          </View>
          <View style={{ flex: 1 }}>
            <Txt variant="bodyStrong" style={{ color: p.onInverse }}>
              Spør assistenten
            </Txt>
            <Txt variant="small" style={{ color: p.onInverse, opacity: 0.65 }}>
              Svarer ut fra biblioteket — uten nett
            </Txt>
          </View>
          <Icon name="arrow-right" color={p.onInverse} />
        </View>
      </Tap>

      {/* Segments */}
      <View style={[styles.segments, { backgroundColor: p.surfaceAlt }]}>
        {(
          [
            ['leksikon', 'Leksikon'],
            ['boker', 'Bøker'],
            ['kurs', 'Kurs'],
          ] as [Section, string][]
        ).map(([id, label]) => {
          const on = section === id;
          return (
            <Tap key={id} haptics={false} onPress={() => setSection(id)} style={[styles.segment, on && { backgroundColor: p.surface }]}>
              <Txt style={{ fontFamily: on ? fonts.semibold : fonts.medium, fontSize: 14, color: on ? p.ink : p.muted }}>{label}</Txt>
            </Tap>
          );
        })}
      </View>

      {section === 'leksikon' && <Leksikon />}
      {section === 'boker' && <Boker />}
      {section === 'kurs' && <Kurs />}
    </Screen>
  );
}

function Leksikon() {
  const p = usePalette();
  return (
    <View style={styles.catGrid}>
      {articleCategoryOrder.map((c) => {
        const count = articles.filter((a) => a.category === c).length;
        if (!count) return null;
        return (
          <Tap
            key={c}
            onPress={() => router.push({ pathname: '/leksikon/[kategori]', params: { kategori: c } })}
            style={[styles.cat, { backgroundColor: p.surface, borderColor: p.line }]}>
            <Icon name={articleCategories[c].icon} size={24} tone="signal" />
            <View>
              <Txt variant="bodyStrong" numberOfLines={1}>
                {articleCategories[c].label}
              </Txt>
              <Txt variant="label" tone="muted">
                {count} artikler
              </Txt>
            </View>
          </Tap>
        );
      })}
    </View>
  );
}

function Boker() {
  const p = usePalette();
  const premium = useApp((s) => s.premium);
  const read = useApp((s) => s.read);
  const { width } = useWindowDimensions();
  const colW = (Math.min(width, 560) - 40 - 12) / 2;
  const free = books.filter((b) => !b.premium);
  const paid = books.filter((b) => b.premium);

  return (
    <View>
      {free.map((b) => {
        const prog = bookProgress(read, b.id, b.chapters.map((c) => c.id));
        return (
          <Tap key={b.id} onPress={() => router.push({ pathname: '/bok/[id]', params: { id: b.id } })} style={{ marginBottom: space.xxl }}>
            <View style={[styles.featured, { backgroundColor: p.surface, borderColor: p.line }]}>
              <BookCover book={b} index={books.indexOf(b)} width={124} height={170} progress={prog} />
              <View style={{ flex: 1, gap: 8, justifyContent: 'center' }}>
                <Txt variant="label" tone="signal">
                  Start her · gratis
                </Txt>
                <Txt variant="heading">{b.title}</Txt>
                <Txt variant="small" tone="muted" numberOfLines={3}>
                  {b.subtitle}
                </Txt>
                <Txt variant="label">{prog > 0 ? `${Math.round(prog * 100)}% lest →` : 'Begynn å lese →'}</Txt>
              </View>
            </View>
          </Tap>
        );
      })}

      {!premium && (
        <View style={[styles.banner, { backgroundColor: p.inverse }]}>
          <Row gap={8}>
            <Icon name="star-four-points" color={p.signal} size={18} />
            <Txt variant="label" style={{ color: p.signal }}>
              Beredskap Pluss
            </Txt>
          </Row>
          <Txt style={{ fontFamily: fonts.bold, fontSize: 24, lineHeight: 27, letterSpacing: -0.8, color: p.onInverse }}>
            {paid.length} fagbøker. Offline. For hele familien.
          </Txt>
          <Button label="Se Pluss" icon="arrow-right" onPress={() => router.push('/pluss')} />
        </View>
      )}

      <SectionLabel index="01">{premium ? 'Biblioteket ditt' : 'I Pluss'}</SectionLabel>
      <View style={styles.grid}>
        {paid.map((b) => (
          <Tap key={b.id} onPress={() => router.push({ pathname: '/bok/[id]', params: { id: b.id } })} style={{ gap: 8 }}>
            <BookCover
              book={b}
              index={books.indexOf(b)}
              locked={!premium}
              progress={bookProgress(read, b.id, b.chapters.map((c) => c.id))}
              width={colW}
              height={colW * 1.35}
            />
            <Txt variant="small" tone="muted" numberOfLines={2} style={{ width: colW }}>
              {b.subtitle}
            </Txt>
          </Tap>
        ))}
      </View>
    </View>
  );
}

function Kurs() {
  const p = usePalette();
  const results = useOffline((s) => s.quiz);
  const done = quizzes.filter((q) => (results[q.id]?.best ?? 0) / q.questions.length >= 0.8).length;
  return (
    <View>
      <Card style={{ gap: 10, marginBottom: space.xl }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <Txt variant="heading">Beredskapssertifikat</Txt>
          <Txt variant="mono" tone="signal">
            {done}/{quizzes.length}
          </Txt>
        </Row>
        <Bar value={done / Math.max(1, quizzes.length)} height={6} />
        <Txt variant="small" tone="muted">
          Bestå alle kursene med minst 80 % riktig. Kursene bygger på bøkene og handlingskortene.
        </Txt>
      </Card>
      <View style={{ gap: 10 }}>
        {quizzes.map((q) => {
          const r = results[q.id];
          const pct = r ? r.best / q.questions.length : 0;
          const passed = pct >= 0.8;
          return (
            <Tap key={q.id} onPress={() => router.push({ pathname: '/kurs/[id]', params: { id: q.id } })}>
              <View style={[styles.quiz, { backgroundColor: p.surface, borderColor: p.line }]}>
                <View style={[styles.quizIcon, { backgroundColor: p[q.accent] }]}>
                  <Icon name={q.icon} color="#fff" />
                </View>
                <View style={{ flex: 1, gap: 6 }}>
                  <Txt variant="bodyStrong">{q.title}</Txt>
                  <Bar value={pct} color={passed ? p.ok : p[q.accent]} height={3} />
                </View>
                <Txt variant="label" tone={passed ? 'ok' : 'muted'}>
                  {r ? `${r.best}/${q.questions.length}` : `${q.questions.length} spm`}
                </Txt>
              </View>
            </Tap>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    height: 50,
  },
  ai: { flexDirection: 'row', alignItems: 'center', gap: 12, borderRadius: radius.lg, padding: 14 },
  aiIcon: { width: 40, height: 40, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  segments: { flexDirection: 'row', borderRadius: radius.pill, padding: 4, marginBottom: space.xl },
  segment: { flex: 1, alignItems: 'center', paddingVertical: 9, borderRadius: radius.pill },
  catGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  cat: {
    flexBasis: '47%',
    flexGrow: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.lg,
    padding: 14,
    gap: 14,
  },
  featured: { flexDirection: 'row', gap: space.lg, padding: 12, borderRadius: radius.xl, borderWidth: StyleSheet.hairlineWidth },
  banner: { borderRadius: radius.xl, padding: space.xl, gap: space.md, marginBottom: space.xxl },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, rowGap: space.xl },
  quiz: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.lg, padding: 12 },
  quizIcon: { width: 42, height: 42, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
});
