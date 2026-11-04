import { router, type Href } from 'expo-router';

import type { IconName } from '@/data/types';
import { useApp } from '@/store/app';
import { useOffline } from '@/store/offline';

import { installedModel } from './ai';
import { useShelters } from './shelters';

export interface ReadyItem {
  id: string;
  label: string;
  hint: string;
  icon: IconName;
  done: boolean;
  optional?: boolean;
  href: Href;
}

/** «Klar for offline»-sjekklisten — det N.O.M.A.D. kaller å fylle serveren. */
export function useOfflineReadiness(): { items: ReadyItem[]; done: number; total: number } {
  const areas = useOffline((s) => s.areas);
  const modelId = useOffline((s) => s.modelId);
  const shelters = useShelters((s) => s.shelters.length);
  const card = useApp((s) => s.card);
  const inventory = useApp((s) => s.inventory);
  const stocked = inventory.filter((i) => i.have > 0).length / Math.max(1, inventory.length);

  const items: ReadyItem[] = [
    {
      id: 'kart',
      label: 'Kart over nærområdet',
      hint: areas.some((a) => a.complete) ? `${areas.filter((a) => a.complete).length} område(r) lastet ned` : 'Last ned kart for hjem og hytte',
      icon: 'map-check-outline',
      done: areas.some((a) => a.complete),
      href: '/kart-omrader',
    },
    {
      id: 'tilflukt',
      label: 'Tilfluktsrom',
      hint: shelters ? `${shelters} rom lagret` : 'Hent DSBs oversikt',
      icon: 'shield-home-outline',
      done: shelters > 0,
      href: '/radar',
    },
    {
      id: 'krisekort',
      label: 'Krisekort',
      hint: card.meetingPoint ? 'Møtested og kontakter lagt inn' : 'Legg inn møtested og kontakter',
      icon: 'card-account-details-outline',
      done: !!card.meetingPoint && card.contacts.length > 0,
      href: '/krisekort',
    },
    {
      id: 'infopunkt',
      label: 'Kommunens infopunkt',
      hint: card.infoPoint ? card.infoPoint : 'Hvor får du hjelp når strøm og nett er borte?',
      icon: 'information-outline',
      done: !!card.infoPoint,
      href: '/krisekort-rediger',
    },
    {
      id: 'lager',
      label: 'Beredskapslager',
      hint: `${Math.round(stocked * 100)} % av varene registrert`,
      icon: 'package-variant-closed',
      done: stocked >= 0.5,
      href: '/lager',
    },
    {
      id: 'ai',
      label: 'Lokal AI-modell',
      hint: modelId && installedModelSafe() ? 'Lastet ned' : 'Valgfritt · 0,8–2 GB',
      icon: 'creation',
      done: !!modelId && !!installedModelSafe(),
      optional: true,
      href: '/lagring',
    },
  ];
  const required = items.filter((i) => !i.optional);
  return { items, done: required.filter((i) => i.done).length, total: required.length };
}

function installedModelSafe() {
  try {
    return installedModel();
  } catch {
    return undefined;
  }
}

export function openReadyItem(i: ReadyItem) {
  router.push(i.href);
}
