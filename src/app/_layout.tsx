import { JetBrainsMono_500Medium, JetBrainsMono_700Bold } from '@expo-google-fonts/jetbrains-mono';
import {
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
  useFonts,
} from '@expo-google-fonts/space-grotesk';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { syncReminders } from '@/lib/notifications';
import { useShelters } from '@/lib/shelters';
import { useApp, useHydrated } from '@/store/app';
import { palettes, useScheme } from '@/theme';

SplashScreen.preventAutoHideAsync().catch(() => {});

/** Keeps local rotation reminders in sync with the inventory (debounced). */
function useReminderSync() {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const run = () => {
      const s = useApp.getState();
      syncReminders(s.inventory, s.settings, s.lastReview);
    };
    const unsub = useApp.subscribe((s, prev) => {
      if (s.inventory === prev.inventory && s.settings === prev.settings && s.lastReview === prev.lastReview) return;
      clearTimeout(timer);
      timer = setTimeout(run, 1500);
    });
    run();
    return () => {
      unsub();
      clearTimeout(timer);
    };
  }, []);
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SpaceGrotesk_400Regular,
    SpaceGrotesk_500Medium,
    SpaceGrotesk_600SemiBold,
    SpaceGrotesk_700Bold,
    JetBrainsMono_500Medium,
    JetBrainsMono_700Bold,
    ...MaterialCommunityIcons.font,
  });
  const hydrated = useHydrated();
  const scheme = useScheme();
  const p = palettes[scheme];
  const ready = fontsLoaded && hydrated;

  useEffect(() => {
    useShelters.getState().load();
  }, []);

  useEffect(() => {
    if (ready) SplashScreen.hideAsync().catch(() => {});
  }, [ready]);

  useReminderSync();

  if (!ready) return <View style={{ flex: 1, backgroundColor: p.bg }} />;

  const base = scheme === 'dark' ? DarkTheme : DefaultTheme;
  const navTheme = {
    ...base,
    colors: { ...base.colors, background: p.bg, card: p.bg, text: p.ink, border: p.line, primary: p.signal },
  };

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: p.bg }}>
      <ThemeProvider value={navTheme}>
        <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: p.bg } }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="onboarding" options={{ gestureEnabled: false, animation: 'fade' }} />
          <Stack.Screen name="scenario/[id]" />
          <Stack.Screen name="bok/[id]" />
          <Stack.Screen name="kapittel/[book]/[chapter]" />
          <Stack.Screen name="krisekort" />
          <Stack.Screen name="krisekort-rediger" options={{ presentation: 'modal' }} />
          <Stack.Screen name="vare" options={{ presentation: 'modal' }} />
          <Stack.Screen name="pluss" options={{ presentation: 'modal' }} />
          <Stack.Screen name="innstillinger" />
          <Stack.Screen name="nodnumre" />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
