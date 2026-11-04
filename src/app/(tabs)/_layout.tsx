import { Redirect } from 'expo-router';
import { Tabs } from 'expo-router/js-tabs';

import { TabBar } from '@/components/tab-bar';
import { useApp } from '@/store/app';

export default function TabsLayout() {
  const onboarded = useApp((s) => s.onboarded);
  if (!onboarded) return <Redirect href="/onboarding" />;

  return (
    <Tabs tabBar={(props) => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="hva-hvis" />
      <Tabs.Screen name="kart" />
      <Tabs.Screen name="bibliotek" />
      <Tabs.Screen name="verktoy" />
    </Tabs>
  );
}
