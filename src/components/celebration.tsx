import { useEffect, useMemo, useState } from 'react';
import { Animated, Easing, Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { haptic } from '@/lib/haptics';
import { useGame, type Celebration } from '@/store/game';
import { fonts, radius, space, usePalette } from '@/theme';

import { Icon, Txt } from './ui';

/**
 * Global reward layer: small XP toasts for everyday actions, a full-screen
 * moment with confetti for badges and new ranks.
 */
export function CelebrationLayer() {
  const queue = useGame((s) => s.queue);
  const shift = useGame((s) => s.shift);
  const current = queue[0];
  if (!current) return null;
  return current.kind === 'xp' ? (
    <XpToast key={current.id} c={current} onDone={shift} />
  ) : (
    <BigMoment key={current.id} c={current} onDone={shift} />
  );
}

function XpToast({ c, onDone }: { c: Celebration; onDone: () => void }) {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const y = useState(() => new Animated.Value(-80))[0];
  useEffect(() => {
    haptic.success();
    Animated.sequence([
      Animated.spring(y, { toValue: 0, useNativeDriver: true, friction: 7 }),
      Animated.delay(1300),
      Animated.timing(y, { toValue: -100, duration: 220, useNativeDriver: true }),
    ]).start(() => onDone());
  }, [y, onDone]);
  return (
    <Animated.View pointerEvents="box-none" style={[styles.toastWrap, { top: insets.top + 8, transform: [{ translateY: y }] }]}>
      <Pressable onPress={onDone} style={[styles.toast, { backgroundColor: p.inverse }]}>
        <View style={[styles.toastIcon, { backgroundColor: p.signal }]}>
          <Icon name={c.icon} size={18} color={p.onSignal} />
        </View>
        <Txt numberOfLines={1} style={{ flex: 1, color: p.onInverse, fontFamily: fonts.semibold, fontSize: 15 }}>
          {c.title}
        </Txt>
        <Txt style={{ color: p.signal, fontFamily: fonts.monoBold, fontSize: 15 }}>+{c.xp} XP</Txt>
      </Pressable>
    </Animated.View>
  );
}

/** Deterministic pseudo-random in [0,1) — keeps render pure. */
const rnd = (i: number, k: number) => {
  const x = Math.sin(i * 12.9898 + k * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

const CONFETTI_COLORS = ['#F2481B', '#F0B429', '#5FAE76', '#5AA7DC', '#A08CF0', '#FFFFFF'];

function Confetti() {
  const { width, height } = useWindowDimensions();
  const pieces = useMemo(
    () =>
      Array.from({ length: 46 }, (_, i) => ({
        x: rnd(i, 1) * width,
        delay: rnd(i, 2) * 400,
        rot: rnd(i, 3) * 720 - 360,
        drift: rnd(i, 4) * 120 - 60,
        size: 6 + rnd(i, 5) * 8,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        v: new Animated.Value(0),
      })),
    [width],
  );
  useEffect(() => {
    Animated.parallel(
      pieces.map((pc) =>
        Animated.timing(pc.v, { toValue: 1, duration: 1800 + rnd(pieces.indexOf(pc), 6) * 900, delay: pc.delay, easing: Easing.out(Easing.quad), useNativeDriver: true }),
      ),
    ).start();
  }, [pieces]);
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {pieces.map((pc, i) => (
        <Animated.View
          key={i}
          style={{
            position: 'absolute',
            left: pc.x,
            top: -20,
            width: pc.size,
            height: pc.size * 0.45,
            borderRadius: 1,
            backgroundColor: pc.color,
            transform: [
              { translateY: pc.v.interpolate({ inputRange: [0, 1], outputRange: [0, height + 40] }) },
              { translateX: pc.v.interpolate({ inputRange: [0, 1], outputRange: [0, pc.drift] }) },
              { rotate: pc.v.interpolate({ inputRange: [0, 1], outputRange: ['0deg', `${pc.rot}deg`] }) },
            ],
          }}
        />
      ))}
    </View>
  );
}

function BigMoment({ c, onDone }: { c: Celebration; onDone: () => void }) {
  const p = usePalette();
  const scale = useState(() => new Animated.Value(0.6))[0];
  const fade = useState(() => new Animated.Value(0))[0];
  useEffect(() => {
    haptic.success();
    Animated.parallel([
      Animated.spring(scale, { toValue: 1, friction: 5, useNativeDriver: true }),
      Animated.timing(fade, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start();
  }, [scale, fade]);
  const isRank = c.kind === 'rank';
  return (
    <Animated.View style={[StyleSheet.absoluteFill, styles.backdrop, { opacity: fade }]}>
      <Pressable style={StyleSheet.absoluteFill} onPress={onDone} accessibilityLabel="Lukk" />
      <Confetti />
      <Animated.View style={[styles.card, { backgroundColor: p.surface, transform: [{ scale }] }]}>
        <Txt variant="label" tone="signal">
          {isRank ? 'Ny rang' : 'Nytt merke'}
        </Txt>
        <View style={[styles.medal, { backgroundColor: isRank ? p.inverse : p.signal, borderColor: isRank ? p.signal : p.inverse }]}>
          <Icon name={c.icon} size={52} color={isRank ? p.signal : p.onSignal} />
        </View>
        <Txt variant="title" style={{ textAlign: 'center' }}>
          {c.title}
        </Txt>
        {c.subtitle && (
          <Txt tone="muted" style={{ textAlign: 'center' }}>
            {c.subtitle}
          </Txt>
        )}
        {c.xp > 0 && <Txt style={{ fontFamily: fonts.monoBold, fontSize: 20, color: p.signal }}>+{c.xp} XP</Txt>}
        <Pressable onPress={onDone} style={[styles.ok, { backgroundColor: p.inverse }]}>
          <Txt style={{ color: p.onInverse, fontFamily: fonts.semibold }}>Fortsett</Txt>
        </Pressable>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  toastWrap: { position: 'absolute', left: 0, right: 0, alignItems: 'center', paddingHorizontal: 16, zIndex: 1000 },
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: radius.pill,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    width: '100%',
    maxWidth: 440,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    elevation: 10,
  },
  toastIcon: { width: 32, height: 32, borderRadius: 16, alignItems: 'center', justifyContent: 'center' },
  backdrop: { backgroundColor: '#000000AA', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: 24 },
  card: { width: '100%', maxWidth: 360, borderRadius: radius.xl, padding: space.xl, alignItems: 'center', gap: 12 },
  medal: { width: 112, height: 112, borderRadius: 56, borderWidth: 4, alignItems: 'center', justifyContent: 'center', marginVertical: 8 },
  ok: { marginTop: 8, borderRadius: radius.pill, paddingHorizontal: 28, paddingVertical: 12 },
});
