import { router, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Bar, Button, Card, Icon, IconButton, Row, SectionLabel, Stepper, Tap, Txt } from '@/components/ui';
import { categoryMeta, categoryOrder, templateById } from '@/data/checklist';
import { daysUntil, formatShortDate, relativeDays } from '@/lib/dates';
import { haptic } from '@/lib/haptics';
import { categoryFill, itemStatus, readinessScore, type ItemStatus } from '@/lib/readiness';
import { useApp, type InventoryItem } from '@/store/app';
import { fonts, radius, space, usePalette, type Palette } from '@/theme';

type Filter = 'alle' | 'mangler' | 'snart';

const QUARTERLY = [
  'Lad opp strømbanker',
  'Test lommelykter, hodelykter og radio',
  'Test røykvarsleren',
  'Se over datoer på vann, mat og medisiner',
  'Sjekk at krisekortet er oppdatert',
];

function statusColor(s: ItemStatus, p: Palette) {
  return { ok: p.ok, low: p.warn, missing: p.line, expiring: p.warn, expired: p.danger }[s];
}

export default function Lager() {
  const p = usePalette();
  const { sjekk } = useLocalSearchParams<{ sjekk?: string }>();
  const inventory = useApp((s) => s.inventory);
  const household = useApp((s) => s.household);
  const warnDays = useApp((s) => s.settings.reminderDaysBefore);
  const setHave = useApp((s) => s.setHave);
  const markReviewed = useApp((s) => s.markReviewed);
  const [filter, setFilter] = useState<Filter>('alle');
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [showCheck, setShowCheck] = useState(sjekk === '1');

  const score = useMemo(() => readinessScore(inventory), [inventory]);
  const statuses = useMemo(
    () => Object.fromEntries(inventory.map((i) => [i.id, itemStatus(i, warnDays)])) as Record<string, ItemStatus>,
    [inventory, warnDays],
  );
  const complete = inventory.filter((i) => statuses[i.id] === 'ok').length;
  const attention = inventory.filter((i) => ['expiring', 'expired'].includes(statuses[i.id])).length;

  const visible = inventory.filter((i) => {
    if (filter === 'mangler') return ['missing', 'low'].includes(statuses[i.id]);
    if (filter === 'snart') return ['expiring', 'expired'].includes(statuses[i.id]);
    return true;
  });

  const persons = household.adults + household.children;

  return (
    <Screen
      inTabs
      eyebrow={`DSB-basert · ${persons} pers · ${household.days} døgn`}
      title="Lager"
      right={
        <>
          <IconButton icon="clipboard-check-outline" label="Kvartalssjekk" onPress={() => setShowCheck((v) => !v)} />
          <IconButton icon="plus" label="Legg til vare" onPress={() => router.push('/vare')} />
        </>
      }>
      {/* Summary */}
      <Row gap={8} style={{ marginBottom: space.lg }}>
        <Stat value={`${score}%`} label="Dekket" tone="signal" />
        <Stat value={`${complete}/${inventory.length}`} label="Komplett" />
        <Stat value={String(attention)} label="Bytt snart" tone={attention ? 'warn' : undefined} />
      </Row>

      {showCheck && (
        <Card style={{ marginBottom: space.lg, gap: space.md, borderColor: p.signal, borderWidth: 1.5 }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Txt variant="heading">Kvartalssjekk</Txt>
            <Txt variant="label" tone="muted">
              ~5 min
            </Txt>
          </Row>
          {QUARTERLY.map((q, i) => (
            <Tap
              key={q}
              onPress={() => setChecked((c) => ({ ...c, [i]: !c[i] }))}
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <View
                style={[
                  styles.check,
                  { borderColor: checked[i] ? p.signal : p.line, backgroundColor: checked[i] ? p.signal : 'transparent' },
                ]}>
                {checked[i] && <Icon name="check" size={14} color={p.onSignal} />}
              </View>
              <Txt style={{ flex: 1, textDecorationLine: checked[i] ? 'line-through' : 'none' }} tone={checked[i] ? 'muted' : 'ink'}>
                {q}
              </Txt>
            </Tap>
          ))}
          <Button
            label="Sjekk fullført"
            icon="check-all"
            small
            disabled={Object.values(checked).filter(Boolean).length < QUARTERLY.length}
            onPress={() => {
              markReviewed();
              haptic.success();
              setShowCheck(false);
              setChecked({});
            }}
          />
        </Card>
      )}

      {/* Filters */}
      <Row gap={8} style={{ marginBottom: space.xl }}>
        {(
          [
            ['alle', 'Alle'],
            ['mangler', 'Mangler'],
            ['snart', 'Bytt snart'],
          ] as [Filter, string][]
        ).map(([f, label]) => {
          const on = filter === f;
          return (
            <Tap
              key={f}
              onPress={() => setFilter(f)}
              style={[styles.chip, { backgroundColor: on ? p.inverse : 'transparent', borderColor: on ? p.inverse : p.line }]}>
              <Txt style={{ fontFamily: fonts.medium, fontSize: 14, color: on ? p.onInverse : p.ink }}>{label}</Txt>
            </Tap>
          );
        })}
      </Row>

      {visible.length === 0 && (
        <Card style={{ alignItems: 'center', gap: 8, paddingVertical: space.xxl }}>
          <Icon name="check-decagram" size={34} tone="ok" />
          <Txt variant="bodyStrong">Alt i orden her</Txt>
          <Txt variant="small" tone="muted">
            Ingen varer i dette filteret.
          </Txt>
        </Card>
      )}

      {categoryOrder.map((cat, ci) => {
        const items = visible.filter((i) => i.category === cat);
        if (!items.length) return null;
        const fill = categoryFill(inventory, cat);
        return (
          <View key={cat} style={{ marginBottom: space.xl }}>
            <SectionLabel
              index={String(ci + 1).padStart(2, '0')}
              right={
                <Txt variant="label" tone={fill >= 1 ? 'ok' : 'muted'}>
                  {Math.round(fill * 100)}%
                </Txt>
              }>
              {categoryMeta[cat].label}
            </SectionLabel>
            <Card style={{ paddingVertical: 0, paddingHorizontal: 0, overflow: 'hidden' }}>
              {items.map((item, i) => (
                <ItemRow key={item.id} item={item} status={statuses[item.id]} first={i === 0} onHave={(v) => setHave(item.id, v)} />
              ))}
            </Card>
          </View>
        );
      })}

      <Txt variant="small" tone="muted" style={{ textAlign: 'center', marginTop: space.md }}>
        Mengdene er et utgangspunkt basert på DSBs råd om egenberedskap.{'\n'}Trykk på en vare for å justere mål og dato.
      </Txt>
    </Screen>
  );
}

function Stat({ value, label, tone }: { value: string; label: string; tone?: 'signal' | 'warn' }) {
  const p = usePalette();
  return (
    <View style={[styles.stat, { backgroundColor: p.surface, borderColor: p.line }]}>
      <Txt style={{ fontFamily: fonts.bold, fontSize: 24, letterSpacing: -0.8, color: tone ? p[tone] : p.ink }}>{value}</Txt>
      <Txt variant="label" tone="muted">
        {label}
      </Txt>
    </View>
  );
}

function ItemRow({
  item,
  status,
  first,
  onHave,
}: {
  item: InventoryItem;
  status: ItemStatus;
  first: boolean;
  onHave: (v: number) => void;
}) {
  const p = usePalette();
  const t = item.templateId ? templateById[item.templateId] : undefined;
  const days = item.expiry ? daysUntil(item.expiry) : undefined;
  const step = item.unit === 'kr' ? 100 : 1;
  let sub: string;
  let subTone: keyof Palette = 'muted';
  if (status === 'expired') {
    sub = `Utløpt ${formatShortDate(item.expiry!)} — bytt ut`;
    subTone = 'danger';
  } else if (status === 'expiring') {
    sub = `Bytt ${relativeDays(days!)}`;
    subTone = 'warn';
  } else if (item.expiry && item.have > 0) {
    sub = `Bytt innen ${formatShortDate(item.expiry)}`;
  } else {
    sub = t?.hint ?? item.note ?? '';
  }

  return (
    <Tap
      onPress={() => router.push({ pathname: '/vare', params: { id: item.id } })}
      haptics={false}
      style={[styles.row, !first && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
      <View style={[styles.statusBar, { backgroundColor: statusColor(status, p) }]} />
      <View style={{ flex: 1, gap: 6, paddingVertical: 14 }}>
        <Txt variant="bodyStrong" numberOfLines={1}>
          {item.name}
        </Txt>
        {!!sub && (
          <Txt variant="small" tone={subTone} numberOfLines={2}>
            {sub}
          </Txt>
        )}
        <Row gap={8}>
          <View style={{ flex: 1 }}>
            <Bar value={item.target ? item.have / item.target : 1} color={statusColor(status, p) === p.line ? p.muted : statusColor(status, p)} height={3} />
          </View>
          <Txt variant="label" tone="muted">
            {item.have}/{item.target} {item.unit}
          </Txt>
        </Row>
      </View>
      <Stepper value={item.have} step={step} onChange={onHave} />
    </Tap>
  );
}

const styles = StyleSheet.create({
  stat: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    padding: 12,
    gap: 2,
  },
  chip: { borderWidth: 1, borderRadius: radius.pill, paddingHorizontal: 14, paddingVertical: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingRight: 14 },
  statusBar: { width: 3, alignSelf: 'stretch' },
  check: { width: 22, height: 22, borderRadius: 6, borderWidth: 1.5, alignItems: 'center', justifyContent: 'center' },
});
