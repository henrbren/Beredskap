import { router } from 'expo-router';
import type { ReactNode } from 'react';
import { Linking, StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Button, Icon, IconButton, Row, Tap, Txt } from '@/components/ui';
import { emergencyNumbers } from '@/data/numbers';
import { printCard, shareCard } from '@/lib/crisis-card';
import { useApp } from '@/store/app';
import { fonts, radius, space, usePalette } from '@/theme';

export default function Krisekort() {
  const p = usePalette();
  const card = useApp((s) => s.card);
  const empty =
    !card.address && !card.meetingPoint && !card.contacts.length && !card.members.length && !card.outOfTownContact;

  return (
    <Screen
      back
      right={
        <>
          <IconButton icon="share-variant-outline" label="Del som tekst" onPress={() => shareCard(card)} />
          <IconButton icon="printer-outline" label="Skriv ut / PDF" onPress={() => printCard(card).catch(() => {})} />
        </>
      }>
      <View style={[styles.card, { backgroundColor: p.surface, borderColor: p.ink }]}>
        {/* Card header */}
        <View style={[styles.head, { backgroundColor: p.signal }]}>
          <Txt style={{ fontFamily: fonts.monoBold, color: p.onSignal, letterSpacing: 3, fontSize: 13 }}>KRISEKORT</Txt>
          <Icon name="card-account-details" color={p.onSignal} size={20} />
        </View>

        <View style={{ padding: space.lg, gap: space.lg }}>
          {empty && (
            <View style={{ gap: 10, paddingVertical: space.md }}>
              <Txt variant="heading">Kortet er tomt</Txt>
              <Txt tone="muted">
                Fyll inn møtested, kontakter og helseinformasjon. Når nettet og strømmen er borte, er det dette dere trenger.
              </Txt>
            </View>
          )}

          {(card.address || card.meetingPoint || card.meetingPointAlt || card.outOfTownContact) && (
            <Section title="Hjem og møtested">
              <KV k="Adresse" v={card.address} />
              <KV k="Møtested" v={card.meetingPoint} strong />
              <KV k="Reserve" v={card.meetingPointAlt} />
              <KV k="Kontakt utenbys" v={card.outOfTownContact} />
            </Section>
          )}

          {card.members.length > 0 && (
            <Section title="Husstanden">
              {card.members.map((m) => (
                <KV key={m.id} k={m.name} v={m.medical || '—'} />
              ))}
            </Section>
          )}

          {card.contacts.length > 0 && (
            <Section title="Kontakter">
              {card.contacts.map((c) => (
                <Tap
                  key={c.id}
                  onPress={() => Linking.openURL(`tel:${c.phone.replace(/\s/g, '')}`)}
                  style={styles.contact}>
                  <View style={{ flex: 1 }}>
                    <Txt variant="bodyStrong">{c.name}</Txt>
                    {!!c.relation && (
                      <Txt variant="small" tone="muted">
                        {c.relation}
                      </Txt>
                    )}
                  </View>
                  <Txt variant="mono" style={{ fontSize: 15 }}>
                    {c.phone}
                  </Txt>
                  <Icon name="phone" size={18} tone="signal" />
                </Tap>
              ))}
            </Section>
          )}

          {(card.waterMain || card.fuseBox) && (
            <Section title="Hjemmet">
              <KV k="Hovedkran vann" v={card.waterMain} />
              <KV k="Sikringsskap" v={card.fuseBox} />
            </Section>
          )}

          {!!card.notes && (
            <Section title="Notater">
              <Txt>{card.notes}</Txt>
            </Section>
          )}

          <Section title="Nødnumre">
            <View style={styles.nums}>
              {emergencyNumbers.slice(0, 4).map((n) => (
                <Tap
                  key={n.number}
                  onPress={() => Linking.openURL(`tel:${n.number.replace(/\s/g, '')}`)}
                  style={[styles.num, { borderColor: p.line }]}>
                  <Txt style={{ fontFamily: fonts.bold, fontSize: 20, color: n.urgent ? p.danger : p.ink }}>{n.number}</Txt>
                  <Txt variant="label" tone="muted">
                    {n.label}
                  </Txt>
                </Tap>
              ))}
            </View>
          </Section>
        </View>
      </View>

      <View style={{ gap: space.sm, marginTop: space.xl }}>
        <Button label={empty ? 'Fyll ut krisekortet' : 'Rediger'} icon="pencil-outline" onPress={() => router.push('/krisekort-rediger')} />
        <Button label="Skriv ut / lagre som PDF" icon="printer-outline" variant="outline" onPress={() => printCard(card).catch(() => {})} />
      </View>
      <Txt variant="small" tone="muted" style={{ textAlign: 'center', marginTop: space.lg }}>
        Skriv ut ett kort per person. Telefonen kan gå tom — papiret gjør det ikke.
      </Txt>
    </Screen>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  const p = usePalette();
  return (
    <View style={{ gap: 8 }}>
      <View style={{ borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: p.line, paddingBottom: 4 }}>
        <Txt variant="label" tone="muted">
          {title}
        </Txt>
      </View>
      {children}
    </View>
  );
}

function KV({ k, v, strong }: { k: string; v?: string; strong?: boolean }) {
  if (!v) return null;
  return (
    <Row style={{ alignItems: 'flex-start' }}>
      <Txt variant="small" tone="muted" style={{ width: 120 }}>
        {k}
      </Txt>
      <Txt variant={strong ? 'bodyStrong' : 'body'} style={{ flex: 1 }}>
        {v}
      </Txt>
    </Row>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 2, borderRadius: radius.lg, overflow: 'hidden' },
  head: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: space.lg, paddingVertical: 12 },
  contact: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 4 },
  nums: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  num: { flexGrow: 1, flexBasis: '45%', borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.md, padding: 10 },
});
