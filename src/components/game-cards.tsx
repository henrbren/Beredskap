import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { badges, missionsForWeek, rankFor, weekKey } from '@/data/game';
import { streak, useGame } from '@/store/game';
import { fonts, radius, space, usePalette } from '@/theme';

import { Bar, Card, Icon, Row, SectionLabel, Tap, Txt } from './ui';

/** Rank, XP progress, streak and latest badges. */
export function RankCard() {
  const p = usePalette();
  const xp = useGame((s) => s.xp);
  const owned = useGame((s) => s.badges);
  const weeks = useGame((s) => s.activeWeeks);
  const rank = rankFor(xp);
  const st = streak(weeks);
  const latest = Object.entries(owned)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([id]) => badges.find((b) => b.id === id))
    .filter(Boolean);

  return (
    <Tap onPress={() => router.push('/profil')}>
      <Card style={{ gap: space.md }}>
        <Row>
          <View style={[styles.rankIcon, { backgroundColor: p.inverse }]}>
            <Icon name={rank.icon} size={24} color={p.signal} />
          </View>
          <View style={{ flex: 1, gap: 2 }}>
            <Txt variant="label" tone="muted">
              Nivå {rank.level} · {xp} XP
            </Txt>
            <Txt variant="heading">{rank.title}</Txt>
          </View>
          <View style={[styles.streak, { backgroundColor: st ? p.signal + '1A' : p.surfaceAlt }]}>
            <Icon name="fire" size={16} tone={st ? 'signal' : 'muted'} />
            <Txt style={{ fontFamily: fonts.monoBold, fontSize: 13, color: st ? p.signal : p.muted }}>{st}</Txt>
          </View>
        </Row>
        <Bar value={rank.progress} height={6} />
        <Row style={{ justifyContent: 'space-between' }}>
          <Txt variant="small" tone="muted">
            {rank.next ? `${rank.toNext} XP til ${rank.next.title}` : 'Høyeste rang — imponerende!'}
          </Txt>
          <Row gap={4}>
            {latest.map((b) => (
              <View key={b!.id} style={[styles.mini, { backgroundColor: p[b!.accent] }]}>
                <Icon name={b!.icon} size={12} color="#fff" />
              </View>
            ))}
            <Txt variant="label" tone="muted">
              {' '}
              {Object.keys(owned).length}/{badges.length}
            </Txt>
          </Row>
        </Row>
      </Card>
    </Tap>
  );
}

/** This week's three missions with progress. */
export function Missions() {
  const p = usePalette();
  const week = useGame((s) => s.week);
  const wk = weekKey();
  const counts = week.key === wk ? week.counts : {};
  const done = week.key === wk ? week.done : [];
  const list = missionsForWeek(wk);
  return (
    <View>
      <SectionLabel index="★" right={<Txt variant="label" tone="muted">{done.length}/3 · +40 XP hver</Txt>}>
        Ukens oppdrag
      </SectionLabel>
      <Card style={{ paddingVertical: 4 }}>
        {list.map((m, i) => {
          const n = Math.min(m.goal, counts[m.event] ?? 0);
          const ok = done.includes(m.id);
          return (
            <Row key={m.id} style={[styles.mission, i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
              <View style={[styles.missionIcon, { backgroundColor: ok ? p.ok : p.surfaceAlt }]}>
                <Icon name={ok ? 'check' : m.icon} size={18} color={ok ? '#fff' : p.ink} />
              </View>
              <View style={{ flex: 1, gap: 6 }}>
                <Txt variant="bodyStrong" tone={ok ? 'muted' : 'ink'} style={ok ? { textDecorationLine: 'line-through' } : undefined}>
                  {m.title}
                </Txt>
                {m.goal > 1 && !ok && <Bar value={n / m.goal} height={3} />}
              </View>
              <Txt variant="mono" tone={ok ? 'ok' : 'muted'}>
                {ok ? '✓' : `${n}/${m.goal}`}
              </Txt>
            </Row>
          );
        })}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rankIcon: { width: 46, height: 46, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  streak: { flexDirection: 'row', alignItems: 'center', gap: 4, borderRadius: radius.pill, paddingHorizontal: 10, paddingVertical: 6 },
  mini: { width: 20, height: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  mission: { gap: 12, paddingVertical: 12 },
  missionIcon: { width: 34, height: 34, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
});
