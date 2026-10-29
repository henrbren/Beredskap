import { categoryOrder } from '@/data/checklist';
import type { SupplyCategory } from '@/data/types';
import type { Household, InventoryItem } from '@/store/app';

import { daysUntil } from './dates';

export type ItemStatus = 'ok' | 'low' | 'missing' | 'expiring' | 'expired';

export function itemStatus(i: InventoryItem, warnDays = 30): ItemStatus {
  if (i.expiry && i.have > 0) {
    const d = daysUntil(i.expiry);
    if (d < 0) return 'expired';
    if (d <= warnDays) return 'expiring';
  }
  if (i.have <= 0) return 'missing';
  if (i.have < i.target) return 'low';
  return 'ok';
}

/** 0..1 fill for one item. Expired stock counts as nothing. */
export function itemFill(i: InventoryItem): number {
  if (i.target <= 0) return 1;
  if (i.expiry && daysUntil(i.expiry) < 0) return 0;
  return Math.min(1, i.have / i.target);
}

export function categoryFill(items: InventoryItem[], cat: SupplyCategory): number {
  const list = items.filter((i) => i.category === cat);
  if (!list.length) return 1;
  return list.reduce((a, i) => a + itemFill(i), 0) / list.length;
}

/**
 * Overall readiness 0–100. Water and food weigh the most — that's what
 * decides whether you can actually stay home for a week.
 */
const weights: Record<SupplyCategory, number> = {
  vann: 3,
  mat: 3,
  varme: 2,
  lys: 1.5,
  kommunikasjon: 1.5,
  helse: 1.5,
  hygiene: 1,
  annet: 0.5,
};

export function readinessScore(items: InventoryItem[]): number {
  let sum = 0;
  let w = 0;
  for (const cat of categoryOrder) {
    if (!items.some((i) => i.category === cat)) continue;
    sum += categoryFill(items, cat) * weights[cat];
    w += weights[cat];
  }
  return w ? Math.round((sum / w) * 100) : 0;
}

function have(items: InventoryItem[], id: string): number {
  const i = items.find((x) => x.templateId === id);
  if (!i) return 0;
  if (i.expiry && daysUntil(i.expiry) < 0) return 0;
  return i.have;
}

/** Rough estimate of how many days water and food last for the household. */
export function selfSufficiency(items: InventoryItem[], h: Household) {
  const persons = Math.max(1, h.adults + h.children);
  const waterDays = have(items, 'vann') / (3 * persons);
  // One «middag» per canned dinner or dry-food bag, breakfast/lunch from the rest.
  const dinners = have(items, 'mat-hermetikk') + have(items, 'mat-torrmat') * 2;
  const foodDays = dinners / persons;
  return {
    waterDays: Math.floor(waterDays * 10) / 10,
    foodDays: Math.floor(foodDays * 10) / 10,
    days: Math.floor(Math.min(waterDays, foodDays)),
  };
}

export function scoreLabel(score: number): { label: string; tone: 'danger' | 'warn' | 'ok' } {
  if (score >= 85) return { label: 'Godt forberedt', tone: 'ok' };
  if (score >= 60) return { label: 'På god vei', tone: 'ok' };
  if (score >= 30) return { label: 'Halvveis', tone: 'warn' };
  return { label: 'Sårbar', tone: 'danger' };
}

export function upcomingRotations(items: InventoryItem[], withinDays = 60) {
  return items
    .filter((i) => i.expiry && i.have > 0)
    .map((i) => ({ item: i, days: daysUntil(i.expiry!) }))
    .filter((x) => x.days <= withinDays)
    .sort((a, b) => a.days - b.days);
}
