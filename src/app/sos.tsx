import * as Brightness from 'expo-brightness';
import { setAudioModeAsync, useAudioPlayer } from 'expo-audio';
import { router } from 'expo-router';
import { useKeepAwake } from 'expo-keep-awake';
import { useEffect, useState } from 'react';
import { Linking, Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Torch, useMorseSignal, useTorch } from '@/components/torch';
import { Icon, IconButton, Row, Tap, Txt } from '@/components/ui';
import type { IconName } from '@/data/types';
import { haptic } from '@/lib/haptics';
import { fonts, radius, space, usePalette } from '@/theme';

type Sound = 'av' | 'sos' | 'floyte' | 'alarm';

const SOUNDS: { id: Sound; label: string; icon: IconName }[] = [
  { id: 'av', label: 'Stille', icon: 'volume-off' },
  { id: 'sos', label: 'SOS-tone', icon: 'dots-horizontal' },
  { id: 'floyte', label: 'Fløyte ×3', icon: 'whistle' },
  { id: 'alarm', label: 'Alarm', icon: 'alarm-light' },
];

export default function Sos() {
  useKeepAwake();
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const torch = useTorch();
  const [active, setActive] = useState(false);
  const [useTorchLight, setUseTorchLight] = useState(true);
  const [sound, setSound] = useState<Sound>('av');
  const on = useMorseSignal('SOS', active);

  const sos = useAudioPlayer(require('../../assets/sounds/sos.wav'));
  const floyte = useAudioPlayer(require('../../assets/sounds/floyte.wav'));
  const alarm = useAudioPlayer(require('../../assets/sounds/alarm.wav'));

  useEffect(() => {
    setAudioModeAsync({ playsInSilentMode: true }).catch(() => {});
  }, []);

  useEffect(() => {
    const players = { sos, floyte, alarm } as const;
    for (const [k, pl] of Object.entries(players)) {
      pl.loop = true;
      if (active && sound === k) {
        pl.seekTo(0).catch(() => {});
        pl.play();
      } else pl.pause();
    }
  }, [active, sound, sos, floyte, alarm]);

  useEffect(() => {
    if (Platform.OS === 'web') return;
    if (active) Brightness.setBrightnessAsync(1).catch(() => {});
    else Brightness.restoreSystemBrightnessAsync().catch(() => {});
    return () => {
      Brightness.restoreSystemBrightnessAsync().catch(() => {});
    };
  }, [active]);

  const toggle = async () => {
    if (!active && useTorchLight && torch.supported && !torch.granted) await torch.request();
    haptic.warn();
    setActive((a) => !a);
  };

  const flash = active && on;
  const fg = flash ? '#000' : '#fff';

  return (
    <View style={{ flex: 1, backgroundColor: flash ? '#FFFFFF' : active ? '#000' : p.inverse }}>
      <Torch on={flash && useTorchLight && torch.granted} />
      <View style={[styles.top, { paddingTop: insets.top + space.md }]}>
        <IconButton icon="arrow-left" label="Tilbake" onPress={() => router.back()} />
        <Txt variant="label" style={{ color: fg, opacity: 0.7 }}>
          Nødsignal
        </Txt>
        <View style={{ width: 42 }} />
      </View>

      <View style={styles.center}>
        <Tap onPress={toggle} haptics={false} accessibilityLabel={active ? 'Stopp nødsignal' : 'Start nødsignal'}>
          <View style={[styles.button, { backgroundColor: active ? 'transparent' : p.signal, borderColor: active ? fg : p.signal }]}>
            <Txt style={{ fontFamily: fonts.bold, fontSize: 56, letterSpacing: 4, color: active ? fg : p.onSignal }}>SOS</Txt>
            <Txt variant="label" style={{ color: active ? fg : p.onSignal }}>
              {active ? 'Trykk for å stoppe' : 'Trykk for å starte'}
            </Txt>
          </View>
        </Tap>
        <Txt style={{ fontFamily: fonts.mono, fontSize: 22, letterSpacing: 6, color: fg, marginTop: space.xl, opacity: 0.8 }}>
          ··· ——— ···
        </Txt>
      </View>

      <View style={{ paddingHorizontal: 16, paddingBottom: insets.bottom + 16, gap: 10 }}>
        <Row gap={8}>
          {SOUNDS.map((s) => {
            const sel = s.id === sound;
            return (
              <Tap
                key={s.id}
                onPress={() => setSound(s.id)}
                style={[styles.opt, { borderColor: sel ? p.signal : '#ffffff33', backgroundColor: sel ? p.signal : '#00000066' }]}>
                <Icon name={s.icon} size={18} color="#fff" />
                <Txt style={{ fontFamily: fonts.medium, fontSize: 12, color: '#fff' }} numberOfLines={1}>
                  {s.label}
                </Txt>
              </Tap>
            );
          })}
        </Row>
        <Row gap={8}>
          <Tap
            onPress={() => setUseTorchLight((v) => !v)}
            style={[styles.opt, { flexDirection: 'row', borderColor: useTorchLight ? p.signal : '#ffffff33', backgroundColor: '#00000066' }]}>
            <Icon name={useTorchLight ? 'flashlight' : 'flashlight-off'} size={18} color="#fff" />
            <Txt style={{ fontFamily: fonts.medium, fontSize: 13, color: '#fff' }}>Blits {useTorchLight ? 'på' : 'av'}</Txt>
          </Tap>
          <Tap onPress={() => Linking.openURL('tel:113')} style={[styles.opt, { flexDirection: 'row', borderColor: p.danger, backgroundColor: p.danger }]}>
            <Icon name="phone" size={18} color="#fff" />
            <Txt style={{ fontFamily: fonts.semibold, fontSize: 13, color: '#fff' }}>Ring 113</Txt>
          </Tap>
        </Row>
        <Txt variant="small" style={{ color: '#fff', opacity: 0.6, textAlign: 'center' }}>
          Tre signaler — lys, lyd eller fløyte — er det internasjonale nødsignalet.
        </Txt>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  button: { width: 230, height: 230, borderRadius: 115, borderWidth: 3, alignItems: 'center', justifyContent: 'center', gap: 4 },
  opt: { flex: 1, borderWidth: 1, borderRadius: radius.md, paddingVertical: 10, alignItems: 'center', justifyContent: 'center', gap: 4 },
});
