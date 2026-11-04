import { router, type Href } from 'expo-router';
import { useMemo } from 'react';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';

import { Missions, RankCard } from '@/components/game-cards';
import { Logo } from '@/components/logo';
import { ProgressRing } from '@/components/progress-ring';
import { Screen } from '@/components/screen';
import { Bar, Card, Icon, IconButton, Row, SectionLabel, Tap, Txt } from '@/components/ui';
import { scenarioById, severityMeta } from '@/data';
import { municipalityInfo } from '@/data/kommuner';
import { emergencyNumbers } from '@/data/numbers';
import { rankFor } from '@/data/game';
import { tipOfTheDay } from '@/data/tips';
import type { IconName } from '@/data/types';
import { daysUntil, greeting, relativeDays } from '@/lib/dates';
import { CONTENT_MAX_WIDE, useLayout } from '@/lib/layout';
import { useOfflineReadiness } from '@/lib/offline-readiness';
import { readinessScore, scoreLabel, selfSufficiency, upcomingRotations } from '@/lib/readiness';
import { useApp } from '@/store/app';
import { useGame } from '@/store/game';
import { fonts, radius, space, usePalette } from '@/theme';

const QUICK: { label: string; icon: IconName; href: Href; urgent?: boolean }[] = [
  { label: 'SOS', icon: 'alarm-light', href: '/sos', urgent: true },
  { label: 'Lykt', icon: 'flashlight', href: '/lys' },
  { label: 'Posisjon', icon: 'crosshairs-gps', href: '/posisjon' },
  { label: 'Kart', icon: 'map-outline', href: '/kart' },
];

const WEEKDAYS = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];
const MONTHS = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];

export default function Today() {
  const p = usePalette();
  const inventory = useApp((s) => s.inventory);
  const household = useApp((s) => s.household);
  const pinned = useApp((s) => s.pinned);
  const card = useApp((s) => s.card);
  const lastReview = useApp((s) => s.lastReview);
  const reminderDays = useApp((s) => s.settings.reminderDaysBefore);

  const offline = useOfflineReadiness();
  const { wide } = useLayout();
  const xp = useGame((s) => s.xp);
  const rank = rankFor(xp);
  const score = useMemo(() => readinessScore(inventory), [inventory]);
  const suff = useMemo(() => selfSufficiency(inventory, household), [inventory, household]);
  const rotations = useMemo(() => upcomingRotations(inventory, Math.max(60, reminderDays)), [inventory, reminderDays]);
  const label = scoreLabel(score);
  const now = new Date();
  const reviewDue = !lastReview || daysUntil(lastReview) < -90;
  const cardFilled = [card.meetingPoint, card.address].filter(Boolean).length + card.contacts.length + card.members.length;
  const persons = household.adults + household.children;

  return (
    <Screen inTabs maxWidth={wide ? CONTENT_MAX_WIDE : undefined}>
      {/* Header */}
      <Row style={{ justifyContent: 'space-between', marginBottom: space.xl }}>
        <Row gap={10}>
          <Logo size={34} />
          <View>
            <Txt variant="label" tone="muted">
              {WEEKDAYS[now.getDay()]} {now.getDate()}. {MONTHS[now.getMonth()]}
            </Txt>
            <Txt variant="heading">{greeting(now)}</Txt>
          </View>
        </Row>
        <Row gap={8}>
          {!wide && (
            <Tap onPress={() => router.push('/profil')} style={[styles.xpChip, { backgroundColor: p.inverse }]}>
              <Icon name={rank.icon} size={16} color={p.signal} />
              <Txt variant="label" style={{ color: p.onInverse }}>
                {rank.title} · {xp} XP
              </Txt>
            </Tap>
          )}
          <IconButton icon="cog-outline" label="Innstillinger" onPress={() => router.push('/innstillinger')} />
        </Row>
      </Row>

      <View style={wide ? styles.columns : undefined}>
      <View style={wide ? styles.colLeft : undefined}>
      {/* Ask / search */}
      <Tap onPress={() => router.push('/assistent')} style={{ marginBottom: space.md }}>
        <View style={[styles.ask, { backgroundColor: p.surface, borderColor: p.line }]}>
          <Icon name="creation" tone="signal" />
          <Txt tone="muted" style={{ flex: 1 }}>
            Spør om hva som helst
          </Txt>
          <Icon name="arrow-right" tone="muted" size={18} />
        </View>
      </Tap>

      {/* Quick tools */}
      <Row gap={8} style={{ marginBottom: space.lg }}>
        {QUICK.map((q) => (
          <Tap
            key={q.label}
            onPress={() => router.push(q.href)}
            style={[styles.quick, { backgroundColor: q.urgent ? p.signal : p.surface, borderColor: q.urgent ? p.signal : p.line }]}>
            <Icon name={q.icon} size={22} color={q.urgent ? p.onSignal : p.ink} />
            <Txt variant="label" style={{ color: q.urgent ? p.onSignal : p.muted }} numberOfLines={1}>
              {q.label}
            </Txt>
          </Tap>
        ))}
      </Row>

      {/* Readiness hero */}
      <Tap onPress={() => router.push('/lager')} accessibilityLabel={`Beredskapsnivå ${score} prosent`}>
        <View style={[styles.hero, { backgroundColor: p.inverse }]}>
          <Row style={{ justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <View style={{ flex: 1, gap: 6, paddingRight: space.md }}>
              <Txt variant="label" style={{ color: p.onInverse, opacity: 0.6 }}>
                Beredskapsnivå
              </Txt>
              <Txt style={[styles.heroTitle, { color: p.onInverse }]}>{label.label}</Txt>
              <Txt variant="small" style={{ color: p.onInverse, opacity: 0.7 }}>
                {persons} {persons === 1 ? 'person' : 'personer'}
                {household.pets ? ` · ${household.pets} dyr` : ''} · mål {household.days} døgn
              </Txt>
            </View>
            <ProgressRing value={score / 100} size={124} color={p[label.tone]} trackColor="#ffffff2e">
              <Txt style={[styles.score, { color: p.onInverse }]}>{score}</Txt>
              <Txt variant="label" style={{ color: p.onInverse, opacity: 0.6 }}>
                prosent
              </Txt>
            </ProgressRing>
          </Row>

          <View style={[styles.heroSplit, { borderTopColor: '#ffffff1f' }]}>
            {[
              { icon: 'water' as const, label: 'Vann', days: suff.waterDays },
              { icon: 'food-variant' as const, label: 'Mat', days: suff.foodDays },
            ].map((x) => (
              <View key={x.label} style={{ flex: 1, gap: 8 }}>
                <Row gap={6}>
                  <Icon name={x.icon} size={15} color={p.onInverse} />
                  <Txt variant="label" style={{ color: p.onInverse, opacity: 0.7 }}>
                    {x.label}
                  </Txt>
                </Row>
                <Txt style={{ fontFamily: fonts.bold, fontSize: 24, color: p.onInverse }}>
                  {formatDays(x.days)}
                  <Txt style={{ fontFamily: fonts.regular, fontSize: 14, color: p.onInverse, opacity: 0.6 }}>
                    {' '}
                    / {household.days} døgn
                  </Txt>
                </Txt>
                <Bar value={x.days / household.days} color={x.days >= household.days ? p.ok : p.signal} />
              </View>
            ))}
          </View>
        </View>
      </Tap>

      {/* Emergency numbers */}
      <Row gap={8} style={{ marginTop: space.md }}>
        {emergencyNumbers
          .filter((n) => n.urgent)
          .map((n) => (
            <Tap
              key={n.number}
              onPress={() => Linking.openURL(`tel:${n.number.replace(/\s/g, '')}`)}
              accessibilityLabel={`Ring ${n.label}, ${n.number}`}
              style={[styles.sos, { backgroundColor: p.surface, borderColor: p.line }]}>
              <Txt style={{ fontFamily: fonts.bold, fontSize: 22, color: p.danger, letterSpacing: -0.5 }}>{n.number}</Txt>
              <Txt variant="label" tone="muted">
                {n.label}
              </Txt>
            </Tap>
          ))}
        <Tap
          onPress={() => router.push('/nodnumre')}
          accessibilityLabel="Flere nødnumre"
          style={[styles.sos, { flex: 0.6, backgroundColor: p.surface, borderColor: p.line }]}>
          <Icon name="dots-horizontal" tone="muted" />
          <Txt variant="label" tone="muted">
            Flere
          </Txt>
        </Tap>
      </Row>

      {/* Krisekort */}
      <Tap onPress={() => router.push('/krisekort')} style={{ marginTop: space.xl }}>
        <Card style={[styles.crisis, { borderColor: p.signal }]}>
          <View style={[styles.crisisIcon, { backgroundColor: p.signal }]}>
            <Icon name="card-account-details" color={p.onSignal} size={24} />
          </View>
          <View style={{ flex: 1, gap: 2 }}>
            <Txt variant="bodyStrong">Krisekort</Txt>
            <Txt variant="small" tone="muted">
              {cardFilled
                ? `Møtested${card.meetingPoint ? `: ${card.meetingPoint}` : ' mangler'} · ${card.contacts.length} ${card.contacts.length === 1 ? 'kontakt' : 'kontakter'}`
                : 'Møtested, kontakter og helseinfo — fyll ut på 3 minutter'}
            </Txt>
          </View>
          <Icon name="chevron-right" tone="muted" />
        </Card>
      </Tap>

      {/* Kommunens infopunkt */}
      <Tap onPress={() => router.push('/krisekort-rediger')} style={{ marginTop: space.md }}>
        <Card style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
          <View style={[styles.crisisIcon, { backgroundColor: p.surfaceAlt }]}>
            <Icon name="information-outline" size={24} tone="signal" />
          </View>
          <View style={{ flex: 1, gap: 2 }}>
            <Txt variant="label" tone="muted">
              Infopunkt ved strømbrudd{household.municipality ? ` · ${household.municipality}` : ''}
            </Txt>
            <Txt variant="bodyStrong" numberOfLines={2}>
              {card.infoPoint || municipalityInfo(household.municipality)?.infoPoints || 'Legg inn kommunens informasjonspunkt'}
            </Txt>
          </View>
          <Icon name="chevron-right" tone="muted" />
        </Card>
      </Tap>

      </View>
      <View style={wide ? styles.colRight : undefined}>
      {/* Progress & missions */}
      <View style={{ marginTop: wide ? 0 : space.xxl, gap: space.xl }}>
        <RankCard />
        <Missions />
      </View>

      {/* Offline readiness */}
      {offline.done < offline.total && (
        <Tap onPress={() => router.push('/lagring')} style={{ marginTop: space.md }}>
          <Card style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
            <View style={[styles.crisisIcon, { backgroundColor: p.inverse }]}>
              <Icon name="database-arrow-down-outline" color={p.onInverse} size={22} />
            </View>
            <View style={{ flex: 1, gap: 6 }}>
              <Row style={{ justifyContent: 'space-between' }}>
                <Txt variant="bodyStrong">Klar for offline</Txt>
                <Txt variant="label" tone="signal">
                  {offline.done}/{offline.total}
                </Txt>
              </Row>
              <Bar value={offline.done / offline.total} height={3} />
              <Txt variant="small" tone="muted" numberOfLines={1}>
                Neste: {offline.items.find((i) => !i.done && !i.optional)?.label}
              </Txt>
            </View>
          </Card>
        </Tap>
      )}

      {/* Rotations */}
      <View style={{ marginTop: space.xxl }}>
        <SectionLabel index="01" right={<LinkText label="Lager" onPress={() => router.push('/lager')} />}>
          Neste rotasjon
        </SectionLabel>
        {rotations.length === 0 ? (
          <Card>
            <Row>
              <Icon name="calendar-check" tone="ok" />
              <Txt variant="small" tone="muted" style={{ flex: 1 }}>
                Ingenting skal byttes de neste {Math.max(60, reminderDays)} dagene. Legg inn datoer i lageret, så minner vi
                deg på det.
              </Txt>
            </Row>
          </Card>
        ) : (
          <Card style={{ paddingVertical: 4 }}>
            {rotations.slice(0, 4).map(({ item, days }, i) => {
              const tone = days < 0 ? 'danger' : days <= reminderDays ? 'warn' : 'muted';
              return (
                <Tap
                  key={item.id}
                  onPress={() => router.push({ pathname: '/vare', params: { id: item.id } })}
                  style={[styles.rotRow, i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
                  <View style={[styles.dot, { backgroundColor: p[tone] }]} />
                  <Txt variant="bodyStrong" style={{ flex: 1 }} numberOfLines={1}>
                    {item.name}
                  </Txt>
                  <Txt variant="mono" tone={tone === 'muted' ? 'muted' : tone}>
                    {days < 0 ? `utløpt ${relativeDays(days)}` : relativeDays(days)}
                  </Txt>
                </Tap>
              );
            })}
          </Card>
        )}
      </View>

      {/* Quarterly check */}
      {reviewDue && (
        <Tap onPress={() => router.push({ pathname: '/lager', params: { sjekk: '1' } })} style={{ marginTop: space.md }}>
          <Card tone="surfaceAlt" flat style={{ flexDirection: 'row', alignItems: 'center', gap: space.md }}>
            <Icon name="clipboard-check-outline" tone="signal" />
            <View style={{ flex: 1 }}>
              <Txt variant="bodyStrong">Tid for kvartalssjekk</Txt>
              <Txt variant="small" tone="muted">
                Lad strømbanken, test lykter og radio, se over datoene.
              </Txt>
            </View>
            <Icon name="arrow-right" tone="muted" />
          </Card>
        </Tap>
      )}

      {/* Hva hvis */}
      <View style={{ marginTop: space.xxl }}>
        <SectionLabel index="02" right={<LinkText label="Alle" onPress={() => router.push('/hva-hvis')} />}>
          Hva gjør jeg hvis …
        </SectionLabel>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginHorizontal: wide ? 0 : -20 }}
          contentContainerStyle={{ paddingHorizontal: wide ? 0 : 20, gap: 10 }}>
          {pinned
            .map((id) => scenarioById[id])
            .filter(Boolean)
            .map((s) => (
              <Tap
                key={s.id}
                onPress={() => router.push({ pathname: '/scenario/[id]', params: { id: s.id } })}
                style={[styles.scenarioTile, { backgroundColor: p.surface, borderColor: p.line }]}>
                <Row style={{ justifyContent: 'space-between' }}>
                  <Icon name={s.icon} size={26} tone="signal" />
                  <View style={[styles.dot, { backgroundColor: p[severityMeta[s.severity].accent] }]} />
                </Row>
                <Txt variant="heading" numberOfLines={2}>
                  {s.title}
                </Txt>
                <Txt variant="small" tone="muted" numberOfLines={2}>
                  {s.question}
                </Txt>
              </Tap>
            ))}
          <Tap
            onPress={() => router.push('/hva-hvis')}
            style={[styles.scenarioTile, { backgroundColor: p.surfaceAlt, borderColor: 'transparent', justifyContent: 'center', alignItems: 'center' }]}>
            <Icon name="plus" size={26} tone="muted" />
            <Txt variant="small" tone="muted" style={{ textAlign: 'center' }}>
              Fest flere scenarier
            </Txt>
          </Tap>
        </ScrollView>
      </View>

      {/* Tip */}
      <View style={{ marginTop: space.xxl }}>
        <SectionLabel index="03">Dagens råd</SectionLabel>
        <View style={[styles.tip, { borderLeftColor: p.signal }]}>
          <Txt style={{ fontFamily: fonts.medium, fontSize: 19, lineHeight: 27, letterSpacing: -0.3, color: p.ink }}>
            {tipOfTheDay(now)}
          </Txt>
        </View>
      </View>
      </View>
      </View>
    </Screen>
  );
}

function formatDays(d: number) {
  if (d >= 10) return String(Math.floor(d));
  return d.toFixed(1).replace('.', ',').replace(',0', '');
}

function LinkText({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <Tap onPress={onPress} hitSlop={10}>
      <Txt variant="label" tone="ink">
        {label} →
      </Txt>
    </Tap>
  );
}

const styles = StyleSheet.create({
  xpChip: { flexDirection: 'row', alignItems: 'center', gap: 6, borderRadius: radius.pill, paddingHorizontal: 12, height: 36 },
  columns: { flexDirection: 'row', gap: space.xxl, alignItems: 'flex-start' },
  colLeft: { flex: 1.15, minWidth: 0 },
  colRight: { flex: 1, minWidth: 0 },
  ask: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.pill,
    paddingHorizontal: 16,
    height: 50,
  },
  quick: {
    flex: 1,
    alignItems: 'center',
    gap: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    paddingVertical: 12,
  },
  hero: { borderRadius: radius.xl, padding: space.xl, gap: space.xl },
  heroTitle: { fontFamily: fonts.bold, fontSize: 30, lineHeight: 32, letterSpacing: -1 },
  score: { fontFamily: fonts.bold, fontSize: 38, lineHeight: 40, letterSpacing: -1.5 },
  heroSplit: { flexDirection: 'row', gap: space.xl, borderTopWidth: 1, paddingTop: space.lg },
  sos: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    paddingVertical: 12,
    alignItems: 'center',
    gap: 2,
  },
  crisis: { flexDirection: 'row', alignItems: 'center', gap: space.md, borderWidth: 1.5 },
  crisisIcon: { width: 46, height: 46, borderRadius: 14, alignItems: 'center', justifyContent: 'center' },
  rotRow: { flexDirection: 'row', alignItems: 'center', gap: space.md, paddingVertical: 14 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  scenarioTile: {
    width: 168,
    minHeight: 160,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    padding: space.lg,
    gap: 8,
    justifyContent: 'space-between',
  },
  tip: { borderLeftWidth: 3, paddingLeft: space.lg, paddingVertical: 4 },
});
