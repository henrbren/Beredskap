import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import type { InventoryItem, Settings } from '@/store/app';

import { addDays, addMonths, fromISODate } from './dates';

const CHANNEL = 'rotasjon';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export async function ensurePermission(ask = true): Promise<boolean> {
  if (Platform.OS === 'web') return false;
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync(CHANNEL, {
      name: 'Påminnelser om rotasjon',
      // eslint-disable-next-line import/namespace -- re-exported enum, ESLint can't see it
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }
  const current = await Notifications.getPermissionsAsync();
  if (current.granted) return true;
  if (!ask || !current.canAskAgain) return false;
  const res = await Notifications.requestPermissionsAsync();
  return res.granted;
}

function at10(d: Date) {
  const r = new Date(d);
  r.setHours(10, 0, 0, 0);
  return r;
}

/**
 * Rebuilds every local reminder from the current inventory. Cheap enough to
 * run on every change: we cancel everything and schedule what's relevant.
 */
export async function syncReminders(items: InventoryItem[], settings: Settings, lastReview?: string) {
  if (Platform.OS === 'web') return;
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    if (!settings.notifications) return;
    if (!(await ensurePermission(false))) return;

    const now = Date.now();
    const jobs: { date: Date; title: string; body: string }[] = [];

    for (const i of items) {
      if (!i.expiry || i.have <= 0) continue;
      const expiry = at10(fromISODate(i.expiry));
      const early = addDays(expiry, -settings.reminderDaysBefore);
      if (early.getTime() > now) {
        jobs.push({
          date: early,
          title: `Snart tid for å rotere: ${i.name}`,
          body: `Bytt ut innen ${settings.reminderDaysBefore} dager. Bruk det gamle i hverdagen og fyll på nytt.`,
        });
      }
      if (expiry.getTime() > now) {
        jobs.push({
          date: expiry,
          title: `I dag: bytt ${i.name.toLowerCase()}`,
          body: 'Datoen er nådd. Marker som byttet i appen når du har fylt på.',
        });
      }
    }

    if (settings.quarterlyCheck) {
      const base = lastReview ? fromISODate(lastReview) : new Date();
      let next = at10(addMonths(base, 3));
      if (next.getTime() <= now) next = at10(addDays(new Date(), 7));
      jobs.push({
        date: next,
        title: 'Kvartalssjekk av beredskapen',
        body: 'Fem minutter: lad strømbanken, test lykter og radio, se over datoene.',
      });
    }

    // iOS keeps at most 64 pending local notifications.
    jobs.sort((a, b) => a.date.getTime() - b.date.getTime());
    for (const j of jobs.slice(0, 60)) {
      await Notifications.scheduleNotificationAsync({
        content: { title: j.title, body: j.body },
        trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: j.date, channelId: CHANNEL },
      });
    }
  } catch (e) {
    console.warn('Kunne ikke planlegge påminnelser', e);
  }
}
