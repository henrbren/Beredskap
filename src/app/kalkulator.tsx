import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { Screen } from '@/components/screen';
import { Card, Divider, Row, SectionLabel, Stepper, Tap, Txt } from '@/components/ui';
import { useApp } from '@/store/app';
import { fonts, radius, space, usePalette } from '@/theme';

type Tab = 'vann' | 'strom' | 'omregn';

export default function Kalkulator() {
  const p = usePalette();
  const [tab, setTab] = useState<Tab>('vann');
  return (
    <Screen back eyebrow="Regn ut uten nett" title="Kalkulatorer">
      <View style={[styles.segments, { backgroundColor: p.surfaceAlt }]}>
        {(
          [
            ['vann', 'Vann & mat'],
            ['strom', 'Strøm'],
            ['omregn', 'Omregning'],
          ] as [Tab, string][]
        ).map(([id, label]) => (
          <Tap key={id} haptics={false} onPress={() => setTab(id)} style={[styles.segment, tab === id && { backgroundColor: p.surface }]}>
            <Txt style={{ fontFamily: fonts.medium, fontSize: 14, color: tab === id ? p.ink : p.muted }}>{label}</Txt>
          </Tap>
        ))}
      </View>
      {tab === 'vann' && <VannMat />}
      {tab === 'strom' && <Strom />}
      {tab === 'omregn' && <Omregn />}
    </Screen>
  );
}

function Result({ value, label, sub }: { value: string; label: string; sub?: string }) {
  const p = usePalette();
  return (
    <View style={[styles.result, { backgroundColor: p.surface, borderColor: p.line }]}>
      <Txt style={{ fontFamily: fonts.bold, fontSize: 26, letterSpacing: -0.8, color: p.ink }}>{value}</Txt>
      <Txt variant="small" tone="muted">
        {label}
      </Txt>
      {sub && (
        <Txt variant="label" tone="signal">
          {sub}
        </Txt>
      )}
    </View>
  );
}

function VannMat() {
  const h = useApp((s) => s.household);
  const [persons, setPersons] = useState(Math.max(1, h.adults + h.children));
  const [days, setDays] = useState(h.days);
  const [active, setActive] = useState(false);
  const litersPerDay = active ? 4 : 3;
  const water = persons * days * litersPerDay;
  const kcal = persons * days * (active ? 2500 : 2000);
  return (
    <View style={{ gap: space.lg }}>
      <Card style={{ gap: space.lg }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <Txt variant="bodyStrong">Personer</Txt>
          <Stepper value={persons} min={1} max={30} onChange={setPersons} />
        </Row>
        <Row style={{ justifyContent: 'space-between' }}>
          <Txt variant="bodyStrong">Døgn</Txt>
          <Stepper value={days} min={1} max={60} onChange={setDays} />
        </Row>
        <Divider />
        <Tap onPress={() => setActive((a) => !a)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flex: 1 }}>
            <Txt variant="bodyStrong">Varmt vær eller hardt arbeid</Txt>
            <Txt variant="small" tone="muted">
              Øker vann- og energibehovet
            </Txt>
          </View>
          <Txt variant="mono" tone={active ? 'signal' : 'muted'}>
            {active ? 'JA' : 'NEI'}
          </Txt>
        </Tap>
      </Card>
      <View style={styles.grid}>
        <Result value={`${water} L`} label="Drikkevann totalt" sub={`${litersPerDay} L per person per døgn`} />
        <Result value={`${Math.ceil(water / 10)}`} label="Kanner à 10 liter" />
        <Result value={`${kcal.toLocaleString("nb-NO")} kcal`} label="Energi totalt" sub="Grovt anslag" />
        <Result value={`${persons * days}`} label="Middager (bokser/poser)" />
      </View>
      <Txt variant="small" tone="muted">
        Basert på DSBs råd om ca. 3 liter vann per person per døgn til drikke og enkel matlaging. Barn, syke og ammende
        kan trenge mer.
      </Txt>
    </View>
  );
}

function Strom() {
  const [bank, setBank] = useState(10000);
  const [phone, setPhone] = useState(4000);
  const [watt, setWatt] = useState(10);
  const [wh, setWh] = useState(100);
  // Strømbanker oppgis i mAh ved 3,7 V; ca. 60–70 % når fram til telefonen.
  const charges = (bank * 0.65) / phone;
  const hours = (wh * 0.85) / Math.max(1, watt);
  return (
    <View style={{ gap: space.xl }}>
      <View style={{ gap: space.md }}>
        <SectionLabel>Hvor mange ladinger?</SectionLabel>
        <Card style={{ gap: space.lg }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Txt variant="bodyStrong">Strømbank (mAh)</Txt>
            <Stepper value={bank} min={1000} max={50000} step={1000} onChange={setBank} />
          </Row>
          <Row style={{ justifyContent: 'space-between' }}>
            <Txt variant="bodyStrong">Telefonbatteri (mAh)</Txt>
            <Stepper value={phone} min={1000} max={7000} step={250} onChange={setPhone} />
          </Row>
        </Card>
        <Result value={`${charges.toFixed(1).replace('.', ',')} ladinger`} label="Fulle telefonladinger" sub="Ca. 65 % effektivitet" />
      </View>
      <View style={{ gap: space.md }}>
        <SectionLabel>Hvor lenge varer batteriet?</SectionLabel>
        <Card style={{ gap: space.lg }}>
          <Row style={{ justifyContent: 'space-between' }}>
            <Txt variant="bodyStrong">Batteri (Wh)</Txt>
            <Stepper value={wh} min={10} max={5000} step={10} onChange={setWh} />
          </Row>
          <Row style={{ justifyContent: 'space-between' }}>
            <Txt variant="bodyStrong">Apparat (watt)</Txt>
            <Stepper value={watt} min={1} max={2000} step={5} onChange={setWatt} />
          </Row>
        </Card>
        <Result value={`${hours < 10 ? hours.toFixed(1).replace('.', ',') : Math.round(hours)} timer`} label="Driftstid" sub="Ca. 85 % effektivitet" />
        <Txt variant="small" tone="muted">
          Typisk forbruk: LED-lampe 5–10 W, ruter 10 W, laptop 45–65 W, kjøleskap 100–150 W (snitt), panelovn 1000 W.
        </Txt>
      </View>
    </View>
  );
}

const UNITS = {
  temperatur: [
    { id: 'c', label: '°C', to: (v: number) => v, from: (v: number) => v },
    { id: 'f', label: '°F', to: (v: number) => ((v - 32) * 5) / 9, from: (v: number) => (v * 9) / 5 + 32 },
  ],
  vind: [
    { id: 'ms', label: 'm/s', to: (v: number) => v, from: (v: number) => v },
    { id: 'kmh', label: 'km/t', to: (v: number) => v / 3.6, from: (v: number) => v * 3.6 },
    { id: 'kn', label: 'knop', to: (v: number) => v * 0.514444, from: (v: number) => v / 0.514444 },
  ],
  lengde: [
    { id: 'm', label: 'meter', to: (v: number) => v, from: (v: number) => v },
    { id: 'ft', label: 'fot', to: (v: number) => v * 0.3048, from: (v: number) => v / 0.3048 },
    { id: 'nm', label: 'nautisk mil', to: (v: number) => v * 1852, from: (v: number) => v / 1852 },
    { id: 'mil', label: 'mil (10 km)', to: (v: number) => v * 10000, from: (v: number) => v / 10000 },
  ],
  volum: [
    { id: 'l', label: 'liter', to: (v: number) => v, from: (v: number) => v },
    { id: 'gal', label: 'US gallon', to: (v: number) => v * 3.78541, from: (v: number) => v / 3.78541 },
    { id: 'dl', label: 'dl', to: (v: number) => v / 10, from: (v: number) => v * 10 },
  ],
};

function Omregn() {
  const p = usePalette();
  const [kind, setKind] = useState<keyof typeof UNITS>('temperatur');
  const [value, setValue] = useState('20');
  const units = UNITS[kind];
  const v = Number(value.replace(',', '.'));
  const base = Number.isFinite(v) ? units[0].to(v) : NaN;
  return (
    <View style={{ gap: space.lg }}>
      <View style={styles.wrap}>
        {(Object.keys(UNITS) as (keyof typeof UNITS)[]).map((k) => (
          <Tap key={k} onPress={() => setKind(k)} style={[styles.chip, { borderColor: kind === k ? p.inverse : p.line, backgroundColor: kind === k ? p.inverse : 'transparent' }]}>
            <Txt style={{ fontFamily: fonts.medium, fontSize: 14, color: kind === k ? p.onInverse : p.ink, textTransform: 'capitalize' }}>{k}</Txt>
          </Tap>
        ))}
      </View>
      <Card style={{ gap: 6 }}>
        <Txt variant="label" tone="muted">
          {units[0].label}
        </Txt>
        <TextInput
          value={value}
          onChangeText={setValue}
          keyboardType="numeric"
          style={{ fontFamily: fonts.bold, fontSize: 32, color: p.ink, padding: 0 }}
        />
      </Card>
      <Card style={{ paddingVertical: 4 }}>
        {units.slice(1).map((u, i) => (
          <Row key={u.id} style={[{ justifyContent: 'space-between', paddingVertical: 12 }, i > 0 && { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: p.line }]}>
            <Txt tone="muted">{u.label}</Txt>
            <Txt variant="mono" style={{ fontSize: 17 }}>
              {Number.isFinite(base) ? String(Math.round(u.from(base) * 100) / 100).replace('.', ',') : '—'}
            </Txt>
          </Row>
        ))}
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  segments: { flexDirection: 'row', borderRadius: radius.pill, padding: 4, marginBottom: space.xl },
  segment: { flex: 1, alignItems: 'center', paddingVertical: 9, borderRadius: radius.pill },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  result: { flexBasis: '47%', flexGrow: 1, borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.lg, padding: 14, gap: 4 },
  wrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  chip: { borderWidth: 1, borderRadius: radius.pill, paddingHorizontal: 12, paddingVertical: 7 },
});
