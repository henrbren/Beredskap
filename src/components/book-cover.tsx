import { StyleSheet, View } from 'react-native';
import Svg, { Line } from 'react-native-svg';

import type { Book } from '@/data/types';
import { fonts, radius, usePalette } from '@/theme';

import { Icon, Txt } from './ui';

/** Typographic «cover» for a book: accent field, diagonal hatching, big icon, mono number. */
export function BookCover({
  book,
  index,
  locked,
  progress,
  width = 160,
  height = 220,
}: {
  book: Book;
  index: number;
  locked?: boolean;
  progress?: number;
  width?: number;
  height?: number;
}) {
  const p = usePalette();
  const bg = p[book.accent];
  return (
    <View style={[styles.cover, { width, height, backgroundColor: bg }]}>
      <Svg width={width} height={height} style={StyleSheet.absoluteFill}>
        {Array.from({ length: 14 }, (_, i) => (
          <Line
            key={i}
            x1={width - 70 + i * 9}
            y1={0}
            x2={width - 70 + i * 9 - 60}
            y2={60}
            stroke="#fff"
            strokeOpacity={0.18}
            strokeWidth={1}
          />
        ))}
      </Svg>
      <View style={styles.top}>
        <Txt style={styles.num}>{String(index + 1).padStart(2, '0')}</Txt>
        {locked ? <Icon name="lock" size={16} color="#fff" /> : book.premium ? null : <Txt style={styles.free}>GRATIS</Txt>}
      </View>
      <Icon name={book.icon} size={Math.round(width * 0.28)} color="#fff" />
      <View style={{ gap: 4 }}>
        <Txt style={[styles.title, width > 200 ? { fontSize: 26, lineHeight: 28 } : width < 140 ? { fontSize: 15, lineHeight: 17 } : { fontSize: 18, lineHeight: 20 }]} numberOfLines={3}>
          {book.title}
        </Txt>
        <Txt style={styles.meta}>{book.chapters.length} kapitler</Txt>
      </View>
      {progress !== undefined && progress > 0 && (
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: `${Math.round(progress * 100)}%` }]} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  cover: { borderRadius: radius.lg, padding: 14, justifyContent: 'space-between', overflow: 'hidden' },
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  num: { fontFamily: fonts.monoBold, fontSize: 12, color: '#fff', opacity: 0.85, letterSpacing: 1 },
  free: { fontFamily: fonts.monoBold, fontSize: 10, color: '#fff', letterSpacing: 1.2 },
  title: { fontFamily: fonts.bold, color: '#fff', letterSpacing: -0.6 },
  meta: { fontFamily: fonts.mono, fontSize: 10.5, color: '#fff', opacity: 0.8, letterSpacing: 0.8, textTransform: 'uppercase' },
  progressTrack: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 4, backgroundColor: '#00000033' },
  progressFill: { height: 4, backgroundColor: '#fff' },
});
