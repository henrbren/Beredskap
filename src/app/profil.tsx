import { StyleSheet, View } from 'react-native';

import { Missions } from '@/components/game-cards';
import { ProgressRing } from '@/components/progress-ring';
import { Screen } from '@/components/screen';
import { Icon, Row, SectionLabel, Txt } from '@/components/ui';
import { badges, rankFor, ranks } from '@/data/game';
import { useLayout } from '@/lib/layout';
import { streak, useGame } from '@/store/game';
import { fonts, radius, space, usePalette } from '@/theme';

export default function Profil() {
  const p = usePalette();
  const { wide } = useLayout();
  const xp = useGame((s) => s.xp);
  const owned = useGame((s) => s.badges);
  const weeks = useGame((s) => s.activeWeeks);
  const rank = rankFor(xp);
  const st = streak(weeks);

  return (
    <Screen back eyebrow="Din beredskapsreise" title="Merker og rang" maxWidth={900}>
      <View style={[styles.hero, { backgroundColor: p.inverse }]}>
        <ProgressRing value={rank.progress} size={128} trackColor="#ffffff2e">
          <Icon name={rank.icon} size={40} color={p.signal} />
        </ProgressRing>
        <View style={{ flex: 1, gap: 6 }}>
          <Txt variant="label" style={{ color: p.signal }}>
            Nivå {rank.level}
          </Txt>
          <Txt style={{ fontFamily: fonts.bold, fontSize: 34, letterSpacing: -1.2, color: p.onInverse }}>{rank.title}</Txt>
          <Txt variant="small" style={{ color: p.onInverse, opacity: 0.7 }}>
            {xp} XP{rank.next ? ` · ${rank.toNext} til ${rank.next.title}` : ''}
          </Txt>
          <Row gap={6}>
            <Icon name="fire" size={16} color={p.signal} />
            <Txt variant="label" style={{ color: p.onInverse, opacity: 0.8 }}>
              {st} {st === 1 ? 'uke' : 'uker'} på rad
            </Txt>
          </Row>
        </View>
      </View>

      <View style={{ marginTop: space.xxl }}>
        <Missions />
      </View>

      <View style={{ marginTop: space.xxl }}>
        <SectionLabel index="01" right={<Txt variant="label" tone="muted">{Object.keys(owned).length}/{badges.length}</Txt>}>
          Merker
        </SectionLabel>
        <View style={styles.grid}>
          {badges.map((b) => {
            const has = !!owned[b.id];
            return (
              <View
                key={b.id}
                style={[styles.badge, { flexBasis: wide ? '23%' : '31%', backgroundColor: p.surface, borderColor: has ? p[b.accent] : p.line, opacity: has ? 1 : 0.6 }]}>
                <View style={[styles.medal, { backgroundColor: has ? p[b.accent] : p.surfaceAlt }]}>
                  <Icon name={has ? b.icon : 'lock-outline'} size={26} color={has ? '#fff' : p.muted} />
                </View>
                <Txt variant="bodyStrong" style={{ textAlign: 'center', fontSize: 14 }} numberOfLines={1}>
                  {b.title}
                </Txt>
                <Txt variant="small" tone="muted" style={{ textAlign: 'center', fontSize: 12, lineHeight: 15 }} numberOfLines={2}>
                  {has ? new Date(owned[b.id]).toLocaleDateString('nb-NO') : b.hint}
                </Txt>
                <Txt variant="label" tone={has ? 'signal' : 'muted'}>
                  +{b.xp} XP
                </Txt>
              </View>
            );
          })}
        </View>
      </View>

      <View style={{ marginTop: space.xxl }}>
        <SectionLabel index="02">Rangstigen</SectionLabel>
        <View style={{ gap: 8 }}>
          {ranks.map((r, i) => {
            const reached = xp >= r.min;
            const current = rank.level === i + 1;
            return (
              <Row key={r.title} style={[styles.rankRow, { backgroundColor: current ? p.signal + '14' : p.surface, borderColor: current ? p.signal : p.line }]}>
                <Icon name={r.icon} tone={reached ? 'signal' : 'muted'} />
                <Txt variant="bodyStrong" tone={reached ? 'ink' : 'muted'} style={{ flex: 1 }}>
                  {i + 1}. {r.title}
                </Txt>
                <Txt variant="mono" tone="muted">
                  {r.min} XP
                </Txt>
              </Row>
            );
          })}
        </View>
      </View>

      <Txt variant="small" tone="muted" style={{ marginTop: space.xl, textAlign: 'center' }}>
        XP får du for ekte beredskap: registrere og rotere lageret, fylle ut krisekortet, laste ned kart, lese og ta kurs.
      </Txt>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { flexDirection: 'row', alignItems: 'center', gap: space.xl, borderRadius: radius.xl, padding: space.xl },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  badge: { flexGrow: 1, borderWidth: 1.5, borderRadius: radius.lg, padding: 12, alignItems: 'center', gap: 6 },
  medal: { width: 54, height: 54, borderRadius: 27, alignItems: 'center', justifyContent: 'center', marginBottom: 2 },
  rankRow: { borderWidth: 1, borderRadius: radius.md, padding: 12 },
});
