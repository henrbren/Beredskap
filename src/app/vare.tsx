import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Alert, Platform, StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Button, Card, Divider, Field, Icon, Row, SectionLabel, Stepper, Tap, Txt } from '@/components/ui';
import { categoryMeta, categoryOrder, templateById } from '@/data/checklist';
import type { SupplyCategory } from '@/data/types';
import { addMonths, daysUntil, formatDate, fromISODate, relativeDays, toISODate } from '@/lib/dates';
import { haptic } from '@/lib/haptics';
import { useApp } from '@/store/app';
import { fonts, radius, space, usePalette } from '@/theme';

export default function Vare() {
  const p = usePalette();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const existing = useApp((s) => s.inventory.find((i) => i.id === id));
  const updateItem = useApp((s) => s.updateItem);
  const addItem = useApp((s) => s.addItem);
  const removeItem = useApp((s) => s.removeItem);
  const restock = useApp((s) => s.restockItem);
  const t = existing?.templateId ? templateById[existing.templateId] : undefined;

  const [name, setName] = useState(existing?.name ?? '');
  const [category, setCategory] = useState<SupplyCategory>(existing?.category ?? 'mat');
  const [unit, setUnit] = useState(existing?.unit ?? 'stk');
  const [target, setTarget] = useState(existing?.target ?? 1);
  const [have, setHave] = useState(existing?.have ?? 0);
  const [expiry, setExpiry] = useState<string | undefined>(existing?.expiry);
  const [note, setNote] = useState(existing?.note ?? '');

  const isNew = !existing;
  const step = unit === 'kr' ? 100 : 1;

  const save = () => {
    if (!name.trim()) return;
    const patch = { name: name.trim(), category, unit: unit.trim() || 'stk', target, have, expiry, note: note.trim() || undefined };
    if (isNew) addItem(patch);
    else updateItem(existing.id, { ...patch, customTarget: existing.customTarget || target !== existing.target });
    haptic.success();
    router.back();
  };

  const remove = () => {
    const doIt = () => {
      removeItem(existing!.id);
      router.back();
    };
    if (Platform.OS === 'web') return doIt();
    Alert.alert('Fjerne varen?', `${existing!.name} fjernes fra lageret.`, [
      { text: 'Avbryt', style: 'cancel' },
      { text: 'Fjern', style: 'destructive', onPress: doIt },
    ]);
  };

  const shiftExpiry = (months: number) => {
    const base = expiry ? fromISODate(expiry) : new Date();
    setExpiry(toISODate(addMonths(base, months)));
    haptic.select();
  };

  const days = expiry ? daysUntil(expiry) : undefined;

  return (
    <Screen
      back
      eyebrow={isNew ? 'Ny vare' : categoryMeta[existing.category].label}
      title={isNew ? 'Legg til vare' : existing.name}
      subtitle={t?.hint}>
      {isNew && (
        <View style={{ gap: space.lg, marginBottom: space.xl }}>
          <Field label="Navn" value={name} onChangeText={setName} placeholder="F.eks. Tørkede epler" autoFocus />
          <View style={{ gap: 6 }}>
            <Txt variant="label" tone="muted">
              Kategori
            </Txt>
            <View style={styles.wrap}>
              {categoryOrder.map((c) => {
                const on = c === category;
                return (
                  <Tap
                    key={c}
                    onPress={() => setCategory(c)}
                    style={[styles.chip, { backgroundColor: on ? p.inverse : p.surface, borderColor: on ? p.inverse : p.line }]}>
                    <Icon name={categoryMeta[c].icon} size={15} color={on ? p.onInverse : p.ink} />
                    <Txt style={{ fontFamily: fonts.medium, fontSize: 14, color: on ? p.onInverse : p.ink }}>
                      {categoryMeta[c].label}
                    </Txt>
                  </Tap>
                );
              })}
            </View>
          </View>
          <Field label="Enhet" value={unit} onChangeText={setUnit} placeholder="stk, liter, pk …" />
        </View>
      )}

      <SectionLabel index="01">Mengde</SectionLabel>
      <Card style={{ gap: space.lg, marginBottom: space.xl }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <View>
            <Txt variant="bodyStrong">Har</Txt>
            <Txt variant="small" tone="muted">
              {unit}
            </Txt>
          </View>
          <Stepper value={have} step={step} onChange={setHave} />
        </Row>
        <Divider />
        <Row style={{ justifyContent: 'space-between' }}>
          <View>
            <Txt variant="bodyStrong">Mål</Txt>
            <Txt variant="small" tone="muted">
              {t ? 'Beregnet for husstanden' : 'Hvor mye du vil ha'}
            </Txt>
          </View>
          <Stepper value={target} step={step} min={0} onChange={setTarget} />
        </Row>
        {have < target && (
          <Tap onPress={() => setHave(target)} style={{ alignSelf: 'flex-start' }}>
            <Txt variant="label" tone="signal">
              Fyll opp til målet →
            </Txt>
          </Tap>
        )}
      </Card>

      <SectionLabel index="02">Bytt innen</SectionLabel>
      <Card style={{ gap: space.lg, marginBottom: space.xl }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Txt style={{ fontFamily: fonts.bold, fontSize: 24, letterSpacing: -0.6, color: p.ink }}>
              {expiry ? formatDate(expiry) : 'Ingen dato'}
            </Txt>
            {days !== undefined && (
              <Txt variant="small" tone={days < 0 ? 'danger' : days <= 30 ? 'warn' : 'muted'}>
                {days < 0 ? `Utløpt ${relativeDays(days)}` : relativeDays(days)}
              </Txt>
            )}
          </View>
          <Row gap={6}>
            <Tap onPress={() => shiftExpiry(-1)} accessibilityLabel="En måned tidligere" style={[styles.round, { borderColor: p.line }]}>
              <Icon name="chevron-left" />
            </Tap>
            <Tap onPress={() => shiftExpiry(1)} accessibilityLabel="En måned senere" style={[styles.round, { borderColor: p.line }]}>
              <Icon name="chevron-right" />
            </Tap>
          </Row>
        </Row>
        <View style={styles.wrap}>
          {[3, 6, 12, 24].map((m) => (
            <Tap
              key={m}
              onPress={() => {
                setExpiry(toISODate(addMonths(new Date(), m)));
                haptic.select();
              }}
              style={[styles.chip, { borderColor: p.line, backgroundColor: p.surface }]}>
              <Txt variant="mono">+{m} mnd</Txt>
            </Tap>
          ))}
          {expiry && (
            <Tap onPress={() => setExpiry(undefined)} style={[styles.chip, { borderColor: p.line }]}>
              <Txt variant="mono" tone="muted">
                Fjern
              </Txt>
            </Tap>
          )}
        </View>
        <Txt variant="small" tone="muted">
          Vi varsler deg før datoen. Tips: bruk det gamle i hverdagen og kjøp nytt — da roterer lageret seg selv.
        </Txt>
      </Card>

      <Field label="Notat" value={note} onChangeText={setNote} placeholder="Hvor står det? Merke? …" multiline />

      <View style={{ gap: space.sm, marginTop: space.xl }}>
        <Button label={isNew ? 'Legg til' : 'Lagre'} icon="check" onPress={save} disabled={!name.trim()} />
        {!isNew && (
          <Button
            label="Byttet ut nå"
            icon="autorenew"
            variant="outline"
            onPress={() => {
              restock(existing.id);
              haptic.success();
              router.back();
            }}
          />
        )}
        {!isNew && (
          <Button label={t ? 'Fjern fra listen' : 'Slett vare'} icon="trash-can-outline" variant="ghost" onPress={remove} />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  round: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
