import { CameraView, useCameraPermissions } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { morseTimeline } from '@/lib/morse';

/** Torch support: the camera flash via an invisible camera view. */
export function useTorch() {
  const [perm, request] = useCameraPermissions();
  const supported = Platform.OS !== 'web';
  return { supported, granted: !!perm?.granted, request };
}

export function Torch({ on }: { on: boolean }) {
  if (Platform.OS === 'web') return null;
  return <CameraView style={styles.hidden} facing="back" enableTorch={on} animateShutter={false} />;
}

/**
 * Drives an on/off signal from a morse timeline, looping with a word gap.
 * unit = length of a dot in ms.
 */
export function useMorseSignal(text: string, active: boolean, unit = 220) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (!active) return;
    const tl = [...morseTimeline(text), -7];
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const step = () => {
      const v = tl[i % tl.length];
      setOn(v > 0);
      timer = setTimeout(step, Math.abs(v) * unit);
      i++;
    };
    timer = setTimeout(step, 0);
    return () => {
      clearTimeout(timer);
      setOn(false);
    };
  }, [text, active, unit]);
  return active && on;
}

const styles = StyleSheet.create({
  hidden: { position: 'absolute', width: 1, height: 1, opacity: 0, left: -10, top: -10 },
});
