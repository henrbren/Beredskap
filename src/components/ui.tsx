import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  type PressableProps,
  type StyleProp,
  type TextInputProps,
  type TextProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import type { Accent, IconName } from '@/data/types';
import { haptic } from '@/lib/haptics';
import { fonts, radius, space, usePalette, type Palette } from '@/theme';

// ─── Typography ────────────────────────────────────────────────────────────

type Variant = 'display' | 'title' | 'heading' | 'body' | 'bodyStrong' | 'small' | 'label' | 'mono' | 'reading';

const variantStyle: Record<Variant, TextStyle> = {
  display: { fontFamily: fonts.bold, fontSize: 40, lineHeight: 42, letterSpacing: -1.6 },
  title: { fontFamily: fonts.bold, fontSize: 28, lineHeight: 32, letterSpacing: -0.9 },
  heading: { fontFamily: fonts.semibold, fontSize: 19, lineHeight: 24, letterSpacing: -0.3 },
  body: { fontFamily: fonts.regular, fontSize: 16, lineHeight: 23 },
  bodyStrong: { fontFamily: fonts.semibold, fontSize: 16, lineHeight: 22 },
  small: { fontFamily: fonts.regular, fontSize: 14, lineHeight: 19 },
  label: { fontFamily: fonts.mono, fontSize: 11, lineHeight: 14, letterSpacing: 1.3, textTransform: 'uppercase' },
  mono: { fontFamily: fonts.mono, fontSize: 13, lineHeight: 17 },
  reading: { fontFamily: fonts.regular, fontSize: 17.5, lineHeight: 28 },
};

type Tone = keyof Palette;

export function Txt({
  variant = 'body',
  tone = 'ink',
  style,
  ...rest
}: TextProps & { variant?: Variant; tone?: Tone }) {
  const p = usePalette();
  return <Text {...rest} style={[variantStyle[variant], { color: p[tone] }, style]} />;
}

// ─── Icons ─────────────────────────────────────────────────────────────────

export function Icon({ name, size = 22, color, tone = 'ink' }: { name: IconName; size?: number; color?: string; tone?: Tone }) {
  const p = usePalette();
  return <MaterialCommunityIcons name={name} size={size} color={color ?? p[tone]} />;
}

// ─── Surfaces ──────────────────────────────────────────────────────────────

export function Card({
  children,
  style,
  tone = 'surface',
  flat,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  tone?: Tone;
  flat?: boolean;
}) {
  const p = usePalette();
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: p[tone], borderColor: flat ? 'transparent' : p.line },
        style,
      ]}>
      {children}
    </View>
  );
}

/** Pressable with a subtle press-in scale and light haptic. */
export function Tap({
  children,
  style,
  onPress,
  haptics = true,
  ...rest
}: Omit<PressableProps, 'style' | 'children'> & {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  haptics?: boolean;
}) {
  return (
    <Pressable
      {...rest}
      onPress={(e) => {
        if (haptics) haptic.tap();
        onPress?.(e);
      }}
      style={(state) => {
        const { pressed, hovered } = state as { pressed: boolean; hovered?: boolean };
        return [style, hovered && !pressed && { opacity: 0.9 }, pressed && { opacity: 0.85, transform: [{ scale: 0.985 }] }];
      }}>
      {children}
    </Pressable>
  );
}

// ─── Buttons ───────────────────────────────────────────────────────────────

export function Button({
  label,
  onPress,
  icon,
  variant = 'primary',
  style,
  disabled,
  small,
}: {
  label: string;
  onPress?: () => void;
  icon?: IconName;
  variant?: 'primary' | 'ink' | 'outline' | 'ghost';
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  small?: boolean;
}) {
  const p = usePalette();
  const bg = { primary: p.signal, ink: p.inverse, outline: 'transparent', ghost: 'transparent' }[variant];
  const fg = { primary: p.onSignal, ink: p.onInverse, outline: p.ink, ghost: p.ink }[variant];
  return (
    <Tap
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[
        styles.button,
        small && styles.buttonSmall,
        { backgroundColor: bg, borderColor: variant === 'outline' ? p.line : 'transparent', opacity: disabled ? 0.4 : 1 },
        style,
      ]}>
      {icon && <MaterialCommunityIcons name={icon} size={small ? 16 : 19} color={fg} />}
      <Text style={[styles.buttonText, small && { fontSize: 14 }, { color: fg }]}>{label}</Text>
    </Tap>
  );
}

export function IconButton({
  icon,
  onPress,
  label,
  tone = 'surface',
}: {
  icon: IconName;
  onPress?: () => void;
  label: string;
  tone?: Tone;
}) {
  const p = usePalette();
  return (
    <Tap
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      hitSlop={8}
      style={[styles.iconButton, { backgroundColor: p[tone], borderColor: p.line }]}>
      <MaterialCommunityIcons name={icon} size={20} color={p.ink} />
    </Tap>
  );
}

// ─── Small parts ───────────────────────────────────────────────────────────

/** Mono eyebrow with an index number and a hairline: «01 — VANN ────». */
export function SectionLabel({ index, children, right }: { index?: string; children: string; right?: ReactNode }) {
  const p = usePalette();
  return (
    <View style={styles.sectionLabel}>
      {index && (
        <Txt variant="label" tone="signal">
          {index}
        </Txt>
      )}
      <Txt variant="label" tone="muted">
        {children}
      </Txt>
      <View style={[styles.hairline, { backgroundColor: p.line }]} />
      {right}
    </View>
  );
}

export function Tag({ label, accent, icon }: { label: string; accent?: Accent | 'ok' | 'warn' | 'danger' | 'muted'; icon?: IconName }) {
  const p = usePalette();
  const c = accent ? p[accent] : p.muted;
  return (
    <View style={[styles.tag, { borderColor: c }]}>
      {icon && <MaterialCommunityIcons name={icon} size={11} color={c} />}
      <Text style={[styles.tagText, { color: c }]}>{label}</Text>
    </View>
  );
}

export function Bar({ value, color, height = 4 }: { value: number; color?: string; height?: number }) {
  const p = usePalette();
  return (
    <View style={{ height, borderRadius: height, backgroundColor: p.surfaceAlt, overflow: 'hidden' }}>
      <View
        style={{
          width: `${Math.round(Math.max(0, Math.min(1, value)) * 100)}%`,
          height,
          borderRadius: height,
          backgroundColor: color ?? p.signal,
        }}
      />
    </View>
  );
}

export function Stepper({
  value,
  onChange,
  min = 0,
  max = 9999,
  step = 1,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  const p = usePalette();
  const btn = (icon: IconName, delta: number, label: string) => (
    <Tap
      onPress={() => {
        haptic.select();
        onChange(Math.min(max, Math.max(min, value + delta)));
      }}
      haptics={false}
      hitSlop={6}
      accessibilityLabel={label}
      style={[styles.stepBtn, { borderColor: p.line, backgroundColor: p.surface }]}>
      <MaterialCommunityIcons name={icon} size={18} color={p.ink} />
    </Tap>
  );
  return (
    <View style={styles.stepper}>
      {btn('minus', -step, 'Mindre')}
      <Txt variant="mono" style={{ minWidth: 34, textAlign: 'center', fontSize: 16 }}>
        {value}
      </Txt>
      {btn('plus', step, 'Mer')}
    </View>
  );
}

export function Field({ label, style, ...rest }: TextInputProps & { label: string }) {
  const p = usePalette();
  return (
    <View style={{ gap: 6 }}>
      <Txt variant="label" tone="muted">
        {label}
      </Txt>
      <TextInput
        placeholderTextColor={p.muted}
        {...rest}
        style={[
          styles.field,
          { color: p.ink, backgroundColor: p.surface, borderColor: p.line },
          rest.multiline && { minHeight: 90, textAlignVertical: 'top', paddingTop: 12 },
          style,
        ]}
      />
    </View>
  );
}

export function Divider() {
  const p = usePalette();
  return <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: p.line }} />;
}

export function Row({ children, style, gap = space.md }: { children: ReactNode; style?: StyleProp<ViewStyle>; gap?: number }) {
  return <View style={[{ flexDirection: 'row', alignItems: 'center', gap }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    padding: space.lg,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 54,
    paddingHorizontal: 22,
    borderRadius: radius.pill,
    borderWidth: 1,
  },
  buttonSmall: { height: 40, paddingHorizontal: 16 },
  buttonText: { fontFamily: fonts.semibold, fontSize: 16, letterSpacing: -0.2 },
  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
  sectionLabel: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: space.md },
  hairline: { flex: 1, height: StyleSheet.hairlineWidth },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderRadius: radius.pill,
    paddingHorizontal: 8,
    paddingVertical: 3,
    alignSelf: 'flex-start',
  },
  tagText: { fontFamily: fonts.mono, fontSize: 10, letterSpacing: 0.8, textTransform: 'uppercase' },
  stepper: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  stepBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
  field: {
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    paddingHorizontal: 14,
    height: 50,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
});
