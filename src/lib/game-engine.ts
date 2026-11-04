import { categoryMeta, categoryOrder } from '@/data/checklist';
import { badges, weekKey, XP } from '@/data/game';
import { quizzes } from '@/data/quizzes';
import { useApp, type InventoryItem } from '@/store/app';
import { streak, useGame } from '@/store/game';
import { useOffline } from '@/store/offline';

import { categoryFill, readinessScore, selfSufficiency } from './readiness';
import { useShelters } from './shelters';

/**
 * Watches the app's stores and turns real preparedness work into XP,
 * badges and missions. Rewards are deduplicated by key, so nothing can be
 * farmed by toggling a value back and forth.
 */

function diffInventory(prev: InventoryItem[], next: InventoryItem[]) {
  const award = useGame.getState().award;
  const before = new Map(prev.map((i) => [i.id, i]));
  for (const i of next) {
    const p = before.get(i.id);
    const icon = categoryMeta[i.category].icon;
    if ((!p || p.have === 0) && i.have > 0) award(`stock:${i.id}`, XP.stockFirst, `${i.name} registrert`, icon, 'stock');
    if (i.target > 0 && (!p || p.have < i.target) && i.have >= i.target)
      award(`complete:${i.id}`, XP.itemComplete, `${i.name} komplett!`, 'check-decagram', 'complete');
    if (p?.expiry && i.expiry && i.expiry > p.expiry && i.have >= i.target)
      award(`rotate:${i.id}:${i.expiry}`, XP.rotation, `${i.name} rotert`, 'autorenew', 'rotation');
  }
}

function evaluate() {
  const app = useApp.getState();
  const off = useOffline.getState();
  const game = useGame.getState();
  const award = game.award;
  const card = app.card;

  if (app.lastReview) award(`review:${app.lastReview}`, XP.review, 'Kvartalssjekk fullført', 'clipboard-check', 'review');
  if (card.meetingPoint && card.contacts.length) award('card', XP.card, 'Krisekortet er klart', 'card-account-details', 'card');
  if (card.infoPoint) award('infopunkt', XP.infoPoint, 'Infopunktet er lagt inn', 'information', 'card');
  for (const k of Object.keys(app.read)) award(`read:${k}`, XP.chapter, 'Kapittel lest', 'book-open-variant', 'chapter');
  for (const a of off.areas) if (a.complete) award(`map:${a.id}`, XP.mapArea, `Kart lastet ned: ${a.name}`, 'map-check', 'any');
  for (const w of off.waypoints) award(`wp:${w.id}`, XP.waypoint, `Punkt lagret: ${w.name}`, 'map-marker-plus', 'waypoint');
  for (const d of off.docs) award(`doc:${d.id}`, XP.doc, 'Dokument arkivert', 'folder-lock', 'any');
  for (const e of off.log) award(`log:${e.id}`, XP.log, 'Notat i krisedagboken', 'notebook-edit-outline', 'log');
  for (const [id, r] of Object.entries(off.quiz)) {
    if (r.best / r.total >= 0.8) award(`quiz:${id}`, XP.quizPass, 'Kurs bestått', 'school', 'quiz');
  }
  if (useShelters.getState().shelters.length) award('shelters', XP.shelters, 'Tilfluktsrom lagret', 'shield-home', 'any');

  // Badges
  const inv = app.inventory;
  const passed = quizzes.filter((q) => (off.quiz[q.id]?.best ?? 0) / q.questions.length >= 0.8).length;
  const suff = selfSufficiency(inv, app.household);
  const rotations = Object.keys(useGame.getState().awarded).filter((k) => k.startsWith('rotate:')).length;
  const checks: Record<string, boolean> = {
    'forste-vare': inv.some((i) => i.have > 0),
    allsidig: categoryOrder.every((c) => !inv.some((i) => i.category === c) || inv.some((i) => i.category === c && i.have > 0)),
    'syv-dogn': suff.waterDays >= app.household.days && suff.foodDays >= app.household.days,
    'fullt-lager': readinessScore(inv) >= 100,
    rotasjon: rotations >= 5,
    kvartal: !!app.lastReview,
    krisekort: !!card.meetingPoint && card.contacts.length > 0,
    infopunkt: !!card.infoPoint,
    kartleser: off.areas.some((a) => a.complete),
    stifinner: off.waypoints.length >= 3,
    leser: Object.keys(app.read).length >= 5,
    student: passed >= 1,
    sertifisert: quizzes.length > 0 && passed === quizzes.length,
    'streak-4': streak(useGame.getState().activeWeeks) >= 4,
  };
  for (const c of ['vann', 'mat', 'varme', 'lys', 'kommunikasjon', 'helse', 'hygiene'] as const) {
    checks[c] = inv.some((i) => i.category === c) && categoryFill(inv, c) >= 1;
  }
  for (const b of badges) if (checks[b.id]) useGame.getState().unlockBadge(b.id);
}

function hydrated(store: { persist: { hasHydrated: () => boolean; onFinishHydration: (cb: () => void) => () => void } }) {
  return new Promise<void>((resolve) => {
    if (store.persist.hasHydrated()) return resolve();
    const unsub = store.persist.onFinishHydration(() => {
      unsub();
      resolve();
    });
  });
}

let started = false;

export async function startGameEngine() {
  if (started) return;
  started = true;
  await Promise.all([hydrated(useApp), hydrated(useOffline), hydrated(useGame)]);

  // First pass is silent: catch up on existing progress without a fireworks show.
  evaluate();
  useGame.setState({ queue: [] });

  useApp.subscribe((s, prev) => {
    if (s.inventory !== prev.inventory) diffInventory(prev.inventory, s.inventory);
    if (s.card !== prev.card && s.card.meetingPoint) {
      useGame.getState().award(`cardupd:${weekKey()}`, 5, 'Krisekortet oppdatert', 'card-account-details-outline', 'card');
    }
    evaluate();
  });
  useOffline.subscribe(() => evaluate());
  useShelters.subscribe((s, prev) => {
    if (s.shelters !== prev.shelters) evaluate();
  });
}
