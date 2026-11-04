import * as Brightness from 'expo-brightness';
import { router } from 'expo-router';
import { useKeepAwake } from 'expo-keep-awake';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Torch, useTorch } from '@/components/torch';
import { Icon, IconButton, Row, Tap, Txt } from '@/components/ui';
import { haptic } from '@/lib/haptics';
import { fonts, radius, space, usePalette } from '@/theme';

type Mode = 'lykt' | 'skjerm' | 'rodt' | 'strobe';

const MODES: { id: Mode; label: string; hint: string }[] = [
  { id: 'lykt', label: 'Lykt', hint: 'Kamerablitsen' },
  { id: 'skjerm', label: 'Hvitt', hint: 'Skjermen som lampe' },
  { id: 'rodt', label: 'Rødt', hint: 'Bevarer nattsynet' },
  { id: 'strobe', label: 'Blink', hint: 'Bli sett i mørket' },
];

export default function Lys() {
  useKeepAwake();
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const torch = useTorch();
  const [mode, setMode] = useState<Mode>('lykt');
  const [on, setOn] = useState(false);
  const [blink, setBlink] = useState(false);

  // Max screen brightness while the screen itself is the light.
  useEffect(() => {
    const screenLight = on && mode !== 'lykt';
    if (Platform.OS === 'web') return;
    if (screenLight) Brightness.setBrightnessAsync(1).catch(() => {});
    else Brightness.restoreSystemBrightnessAsync().catch(() => {});
    return () => {
      Brightness.restoreSystemBrightnessAsync().catch(() => {});
    };
  }, [on, mode]);

  useEffect(() => {
    if (!on || mode !== 'strobe') return;
    const t = setInterval(() => setBlink((b) => !b), 120);
    return () => clearInterval(t);
  }, [on, mode]);

  const toggle = async () => {
    if (!on && (mode === 'lykt' || mode === 'strobe') && torch.supported && !torch.granted) {
      const r = await torch.request();
      if (!r.granted && mode === 'lykt') return;
    }
    haptic.tap();
    setOn((v) => !v);
  };

  const screenColor = !on
    ? p.inverse
    : mode === 'skjerm'
      ? '#FFFFFF'
      : mode === 'rodt'
        ? '#B00000'
        : mode === 'strobe'
          ? blink
            ? '#FFFFFF'
            : '#000000'
          : p.inverse;
  const torchOn = on && torch.granted && (mode === 'lykt' || (mode === 'strobe' && blink));
  const light = on && mode !== 'lykt';
  const fg = light && mode !== 'rodt' ? '#000' : '#fff';

  return (
    <View style={{ flex: 1, backgroundColor: screenColor }}>
      <Torch on={torchOn} />
      <View style={[styles.top, { paddingTop: insets.top + space.md }]}>
        <IconButton icon="arrow-left" label="Tilbake" onPress={() => router.back()} />
        <Txt variant="label" style={{ color: fg, opacity: 0.7 }}>
          Lommelykt
        </Txt>
        <View style={{ width: 42 }} />
      </View>

      <Tap onPress={toggle} haptics={false} style={styles.center} accessibilityLabel={on ? 'Slå av lyset' : 'Slå på lyset'}>
        <View style={[styles.button, { borderColor: on ? (light ? fg : p.signal) : '#ffffff33', backgroundColor: on && mode === 'lykt' ? p.signal : 'transparent' }]}>
          <Icon name={on ? 'flashlight' : 'flashlight-off'} size={64} color={on && mode === 'lykt' ? p.onSignal : fg} />
        </View>
        <Txt style={{ fontFamily: fonts.bold, fontSize: 22, color: fg, marginTop: space.lg }}>{on ? 'PÅ' : 'AV'}</Txt>
        {mode === 'lykt' && torch.supported === false && (
          <Txt variant="small" style={{ color: fg, opacity: 0.7, marginTop: 8 }}>
            Kamerablits er ikke tilgjengelig her — bruk skjermlys.
          </Txt>
        )}
      </Tap>

      <Row gap={8} style={{ paddingHorizontal: 16, paddingBottom: insets.bottom + 20 }}>
        {MODES.map((m) => {
          const sel = m.id === mode;
          return (
            <Tap
              key={m.id}
              onPress={() => setMode(m.id)}
              style={[styles.mode, { borderColor: sel ? p.signal : '#ffffff33', backgroundColor: sel ? p.signal : '#00000055' }]}>
              <Txt style={{ fontFamily: fonts.semibold, color: '#fff', fontSize: 14 }}>{m.label}</Txt>
              <Txt style={{ fontFamily: fonts.regular, color: '#fff', opacity: 0.75, fontSize: 11 }} numberOfLines={1}>
                {m.hint}
              </Txt>
            </Tap>
          );
        })}
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  button: { width: 190, height: 190, borderRadius: 95, borderWidth: 3, alignItems: 'center', justifyContent: 'center' },
  mode: { flex: 1, borderWidth: 1, borderRadius: radius.md, paddingVertical: 10, paddingHorizontal: 8, gap: 2 },
});
