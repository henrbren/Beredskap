import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

import { useApp } from '@/store/app';

function enabled() {
  return Platform.OS !== 'web' && useApp.getState().settings.haptics;
}

export const haptic = {
  tap: () => enabled() && Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {}),
  select: () => enabled() && Haptics.selectionAsync().catch(() => {}),
  success: () => enabled() && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success).catch(() => {}),
  warn: () => enabled() && Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning).catch(() => {}),
};
