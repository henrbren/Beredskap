import { router } from 'expo-router';
import type { ReactNode } from 'react';
import { ScrollView, StyleSheet, View, type ScrollViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { gutter, space, usePalette } from '@/theme';

import { IconButton, Txt } from './ui';

export const TAB_BAR_SPACE = 110;

/**
 * Standard scrolling screen with the app's large editorial header:
 * a mono eyebrow, a big tight title and optional actions on the right.
 */
export function Screen({
  eyebrow,
  title,
  subtitle,
  right,
  back,
  children,
  inTabs,
  contentStyle,
  bg,
  ...rest
}: ScrollViewProps & {
  bg?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  right?: ReactNode;
  back?: boolean;
  inTabs?: boolean;
  children: ReactNode;
  contentStyle?: ScrollViewProps['contentContainerStyle'];
}) {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: bg ?? p.bg }}>
      <ScrollView
        {...rest}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          {
            paddingTop: insets.top + space.md,
            paddingBottom: (inTabs ? TAB_BAR_SPACE : space.xxxl) + insets.bottom,
            paddingHorizontal: gutter,
          },
          contentStyle,
        ]}>
        {(back || right) && (
          <View style={styles.topRow}>
            {back ? <IconButton icon="arrow-left" label="Tilbake" onPress={() => router.back()} /> : <View />}
            <View style={styles.right}>{right}</View>
          </View>
        )}
        {(eyebrow || title) && (
          <View style={styles.header}>
            {eyebrow && (
              <Txt variant="label" tone="signal">
                {eyebrow}
              </Txt>
            )}
            {title && (
              <Txt variant="display" accessibilityRole="header">
                {title}
              </Txt>
            )}
            {subtitle && (
              <Txt tone="muted" style={{ marginTop: 2 }}>
                {subtitle}
              </Txt>
            )}
          </View>
        )}
        {children}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: space.lg },
  right: { flexDirection: 'row', gap: space.sm },
  header: { gap: 6, marginBottom: space.xl },
});
