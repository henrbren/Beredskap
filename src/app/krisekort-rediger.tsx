import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Button, Card, Field, Icon, Row, SectionLabel, Tap, Txt } from '@/components/ui';
import { genericInfoPoint, municipalityInfo } from '@/data/kommuner';
import { haptic } from '@/lib/haptics';
import { uid, useApp, type Contact, type CrisisCard, type Member } from '@/store/app';
import { radius, space, usePalette } from '@/theme';

export default function KrisekortRediger() {
  const p = usePalette();
  const stored = useApp((s) => s.card);
  const setCard = useApp((s) => s.setCard);
  const [card, setLocal] = useState<CrisisCard>({ ...stored, infoPoint: stored.infoPoint ?? '' });
  const storedMunicipality = useApp((s) => s.household.municipality);
  const setHousehold = useApp((s) => s.setHousehold);
  const [municipality, setMunicipality] = useState(storedMunicipality ?? '');
  const known = municipalityInfo(municipality);

  const set = <K extends keyof CrisisCard>(k: K, v: CrisisCard[K]) => setLocal((c) => ({ ...c, [k]: v }));

  const updateMember = (id: string, patch: Partial<Member>) =>
    set('members', card.members.map((m) => (m.id === id ? { ...m, ...patch } : m)));
  const updateContact = (id: string, patch: Partial<Contact>) =>
    set('contacts', card.contacts.map((c) => (c.id === id ? { ...c, ...patch } : c)));

  const save = () => {
    setHousehold({ municipality: municipality.trim() });
    setCard({
      ...card,
      members: card.members.filter((m) => m.name.trim()),
      contacts: card.contacts.filter((c) => c.name.trim() || c.phone.trim()),
    });
    haptic.success();
    router.back();
  };

  return (
    <Screen back eyebrow="Krisekort" title="Rediger">
      <SectionLabel index="01">Hjem og møtested</SectionLabel>
      <View style={styles.group}>
        <Field label="Adresse" value={card.address} onChangeText={(v) => set('address', v)} placeholder="Gate 1, 0000 Sted" />
        <Field
          label="Møtested"
          value={card.meetingPoint}
          onChangeText={(v) => set('meetingPoint', v)}
          placeholder="Der dere møtes hvis dere ikke kan dra hjem"
        />
        <Field
          label="Reserve-møtested"
          value={card.meetingPointAlt}
          onChangeText={(v) => set('meetingPointAlt', v)}
          placeholder="Utenfor nabolaget, f.eks. besteforeldre"
        />
        <Field
          label="Kontaktperson utenbys"
          value={card.outOfTownContact}
          onChangeText={(v) => set('outOfTownContact', v)}
          placeholder="Navn og nummer alle ringer til"
        />
      </View>

      <SectionLabel index="!">Kommunens informasjonspunkt</SectionLabel>
      <View style={styles.group}>
        <Field label="Kommune" value={municipality} onChangeText={setMunicipality} placeholder="F.eks. Aurskog-Høland" />
        <Card tone="surfaceAlt" flat style={{ gap: 4 }}>
          <Txt variant="small">{known ? known.infoPoints : genericInfoPoint}</Txt>
          {known && !known.verified && (
            <Txt variant="label" tone="warn">
              {known.source}
            </Txt>
          )}
        </Card>
        <Field
          label="Nærmeste informasjonspunkt"
          value={card.infoPoint ?? ''}
          onChangeText={(v) => set('infoPoint', v)}
          placeholder={known ? 'F.eks. idrettshallen — navn og adresse' : 'Sjekk kommunens nettside: navn og adresse'}
        />
      </View>

      <SectionLabel index="02">Husstanden</SectionLabel>
      <View style={styles.group}>
        {card.members.map((m) => (
          <Card key={m.id} style={{ gap: space.md }}>
            <Row style={{ justifyContent: 'space-between' }}>
              <Txt variant="label" tone="muted">
                Person
              </Txt>
              <Tap onPress={() => set('members', card.members.filter((x) => x.id !== m.id))} hitSlop={10}>
                <Icon name="close" size={18} tone="muted" />
              </Tap>
            </Row>
            <Field label="Navn" value={m.name} onChangeText={(v) => updateMember(m.id, { name: v })} placeholder="Fornavn Etternavn" />
            <Field
              label="Helse"
              value={m.medical}
              onChangeText={(v) => updateMember(m.id, { medical: v })}
              placeholder="Allergier, medisiner, diagnoser, blodtype"
            />
          </Card>
        ))}
        <AddButton label="Legg til person" onPress={() => set('members', [...card.members, { id: uid(), name: '', medical: '' }])} />
      </View>

      <SectionLabel index="03">Kontakter</SectionLabel>
      <View style={styles.group}>
        {card.contacts.map((c) => (
          <Card key={c.id} style={{ gap: space.md }}>
            <Row style={{ justifyContent: 'space-between' }}>
              <Txt variant="label" tone="muted">
                Kontakt
              </Txt>
              <Tap onPress={() => set('contacts', card.contacts.filter((x) => x.id !== c.id))} hitSlop={10}>
                <Icon name="close" size={18} tone="muted" />
              </Tap>
            </Row>
            <Field label="Navn" value={c.name} onChangeText={(v) => updateContact(c.id, { name: v })} />
            <Row gap={10}>
              <View style={{ flex: 1 }}>
                <Field label="Relasjon" value={c.relation} onChangeText={(v) => updateContact(c.id, { relation: v })} placeholder="Nabo, mor …" />
              </View>
              <View style={{ flex: 1 }}>
                <Field label="Telefon" value={c.phone} onChangeText={(v) => updateContact(c.id, { phone: v })} keyboardType="phone-pad" />
              </View>
            </Row>
          </Card>
        ))}
        <AddButton
          label="Legg til kontakt"
          onPress={() => set('contacts', [...card.contacts, { id: uid(), name: '', relation: '', phone: '' }])}
        />
      </View>

      <SectionLabel index="04">Hjemmet</SectionLabel>
      <View style={styles.group}>
        <Field label="Hovedkran for vann" value={card.waterMain} onChangeText={(v) => set('waterMain', v)} placeholder="F.eks. under vasken på badet" />
        <Field label="Sikringsskap" value={card.fuseBox} onChangeText={(v) => set('fuseBox', v)} placeholder="F.eks. i gangen ved inngangen" />
        <Field label="Notater" value={card.notes} onChangeText={(v) => set('notes', v)} multiline placeholder="Annet som er viktig å vite" />
      </View>

      <View style={{ height: space.md }} />
      <Button label="Lagre krisekort" icon="check" onPress={save} />
      <Txt variant="small" tone="muted" style={{ textAlign: 'center', marginTop: space.md }}>
        Alt lagres kun på denne telefonen.
      </Txt>
      <View style={{ height: 1, backgroundColor: p.bg }} />
    </Screen>
  );
}

function AddButton({ label, onPress }: { label: string; onPress: () => void }) {
  const p = usePalette();
  return (
    <Tap onPress={onPress} style={[styles.add, { borderColor: p.line }]}>
      <Icon name="plus" size={18} tone="signal" />
      <Txt variant="bodyStrong">{label}</Txt>
    </Tap>
  );
}

const styles = StyleSheet.create({
  group: { gap: space.md, marginBottom: space.xxl },
  add: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: radius.md,
    paddingVertical: 14,
  },
});
