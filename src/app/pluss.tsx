import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Button, Icon, Row, Tap, Txt } from '@/components/ui';
import { books } from '@/data/books';
import type { IconName } from '@/data/types';
import { haptic } from '@/lib/haptics';
import { useApp } from '@/store/app';
import { fonts, palettes, radius, space } from '@/theme';

/** The paywall is always dark, regardless of theme. */
const D = { ...palettes.dark, inverse: palettes.dark.bg, onInverse: palettes.dark.ink, onSignal: palettes.dark.onSignal };

type Plan = 'year' | 'month';

/**
 * Betalingsmur for Beredskap Pluss.
 *
 * NB: Kjøpet er foreløpig en lokal demo-opplåsing. Koble på RevenueCat
 * (react-native-purchases) eller expo-iap i `purchase()` før lansering.
 */
export default function Pluss() {
  const p = D;
  const premium = useApp((s) => s.premium);
  const setPremium = useApp((s) => s.setPremium);
  const [plan, setPlan] = useState<Plan>('year');
  const paid = books.filter((b) => b.premium);
  const chapters = paid.reduce((a, b) => a + b.chapters.length, 0);

  const purchase = () => {
    // TODO: erstatt med ekte kjøp via App Store / Google Play.
    setPremium(true);
    haptic.success();
    router.back();
  };

  const features: { icon: IconName; title: string; text: string }[] = [
    { icon: 'bookshelf', title: `${paid.length} fagbøker, ${chapters} kapitler`, text: 'Skrevet for norske forhold, basert på råd fra myndighetene.' },
    { icon: 'wifi-off', title: 'Alt fungerer offline', text: 'Biblioteket ligger på telefonen — også når nettet er nede.' },
    { icon: 'account-group', title: 'For hele husstanden', text: 'Ett abonnement, alle i familien.' },
    { icon: 'book-plus-multiple', title: 'Nye bøker fortløpende', text: 'Atomberedskap, hytte og båt, beredskap for bedrifter …' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: p.inverse }}>
      <StatusBar style="light" />
      <Screen back bg={p.inverse}>
        <View style={{ gap: 10, marginBottom: space.xxl }}>
          <Row gap={8}>
            <Icon name="star-four-points" color={p.signal} size={18} />
            <Txt variant="label" style={{ color: p.signal }}>
              Beredskap Pluss
            </Txt>
          </Row>
          <Txt style={[styles.hero, { color: p.onInverse }]}>Kunnskapen du ikke rekker å google når det smeller.</Txt>
        </View>

        <View style={{ gap: space.lg, marginBottom: space.xxl }}>
          {features.map((f) => (
            <Row key={f.title} style={{ alignItems: 'flex-start' }}>
              <View style={[styles.featIcon, { borderColor: '#ffffff26' }]}>
                <Icon name={f.icon} size={20} color={p.signal} />
              </View>
              <View style={{ flex: 1, gap: 2 }}>
                <Txt variant="bodyStrong" style={{ color: p.onInverse }}>
                  {f.title}
                </Txt>
                <Txt variant="small" style={{ color: p.onInverse, opacity: 0.65 }}>
                  {f.text}
                </Txt>
              </View>
            </Row>
          ))}
        </View>

        {premium ? (
          <View style={[styles.plan, { borderColor: p.ok }]}>
            <Txt variant="bodyStrong" style={{ color: p.onInverse }}>
              Du har Pluss. Takk for at du støtter appen!
            </Txt>
          </View>
        ) : (
          <>
            <View style={{ gap: 10, marginBottom: space.xl }}>
              <PlanCard
                selected={plan === 'year'}
                onPress={() => setPlan('year')}
                title="Årlig"
                price="399 kr / år"
                sub="33 kr i måneden · 7 dager gratis"
                badge="Spar 44 %"
              />
              <PlanCard selected={plan === 'month'} onPress={() => setPlan('month')} title="Månedlig" price="59 kr / mnd" sub="Avslutt når du vil" />
            </View>
            <Button label={plan === 'year' ? 'Start 7 dager gratis' : 'Abonner'} onPress={purchase} />
            <Tap onPress={purchase} style={{ alignSelf: 'center', marginTop: space.lg }}>
              <Txt variant="label" style={{ color: p.onInverse, opacity: 0.6 }}>
                Gjenopprett kjøp
              </Txt>
            </Tap>
            <Txt variant="small" style={{ color: p.onInverse, opacity: 0.45, textAlign: 'center', marginTop: space.lg }}>
              Lager, krisekort, «Hva hvis»-kortene, tilfluktsrom og grunnkurset er gratis — for alltid.
            </Txt>
          </>
        )}
      </Screen>
    </View>
  );
}

function PlanCard({
  selected,
  onPress,
  title,
  price,
  sub,
  badge,
}: {
  selected: boolean;
  onPress: () => void;
  title: string;
  price: string;
  sub: string;
  badge?: string;
}) {
  const p = D;
  return (
    <Tap onPress={onPress} style={[styles.plan, { borderColor: selected ? p.signal : '#ffffff26' }]}>
      <View style={[styles.radio, { borderColor: selected ? p.signal : '#ffffff55' }]}>
        {selected && <View style={[styles.radioDot, { backgroundColor: p.signal }]} />}
      </View>
      <View style={{ flex: 1 }}>
        <Row gap={8}>
          <Txt variant="bodyStrong" style={{ color: p.onInverse }}>
            {title}
          </Txt>
          {badge && (
            <View style={[styles.badge, { backgroundColor: p.signal }]}>
              <Txt variant="label" style={{ color: p.onSignal, fontSize: 9.5 }}>
                {badge}
              </Txt>
            </View>
          )}
        </Row>
        <Txt variant="small" style={{ color: p.onInverse, opacity: 0.6 }}>
          {sub}
        </Txt>
      </View>
      <Txt style={{ fontFamily: fonts.bold, color: p.onInverse, fontSize: 16 }}>{price}</Txt>
    </Tap>
  );
}

const styles = StyleSheet.create({
  hero: { fontFamily: fonts.bold, fontSize: 36, lineHeight: 39, letterSpacing: -1.4 },
  featIcon: { width: 40, height: 40, borderRadius: 20, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  plan: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1.5, borderRadius: radius.lg, padding: space.lg },
  radio: { width: 22, height: 22, borderRadius: 11, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  radioDot: { width: 10, height: 10, borderRadius: 5 },
  badge: { borderRadius: 4, paddingHorizontal: 6, paddingVertical: 2 },
});
