import type { Accent, IconName } from './types';

/** Ranks — the user climbs these with XP. */
export const ranks = [
  { min: 0, title: 'Rekrutt', icon: 'account-outline' },
  { min: 150, title: 'Speider', icon: 'binoculars' },
  { min: 400, title: 'Forsyner', icon: 'package-variant' },
  { min: 800, title: 'Vokter', icon: 'shield-half-full' },
  { min: 1400, title: 'Selvberget', icon: 'shield-check' },
  { min: 2200, title: 'Veteran', icon: 'medal' },
  { min: 3500, title: 'Legende', icon: 'crown' },
] as const satisfies readonly { min: number; title: string; icon: IconName }[];

export function rankFor(xp: number) {
  let i = 0;
  while (i + 1 < ranks.length && xp >= ranks[i + 1].min) i++;
  const r = ranks[i];
  const next = ranks[i + 1];
  return {
    level: i + 1,
    ...r,
    next,
    progress: next ? (xp - r.min) / (next.min - r.min) : 1,
    toNext: next ? next.min - xp : 0,
  };
}

/** XP per action. Keep the numbers small and predictable. */
export const XP = {
  stockFirst: 5,
  itemComplete: 20,
  rotation: 15,
  review: 50,
  card: 50,
  infoPoint: 30,
  mapArea: 40,
  shelters: 25,
  quizPass: 60,
  chapter: 10,
  waypoint: 5,
  doc: 5,
  log: 2,
  mission: 40,
} as const;

export interface BadgeDef {
  id: string;
  title: string;
  /** What it takes, shown while locked. */
  hint: string;
  icon: IconName;
  accent: Accent;
  xp: number;
}

export const badges: BadgeDef[] = [
  { id: 'forste-vare', title: 'Første steg', hint: 'Registrer din første vare', icon: 'shoe-print', accent: 'signal', xp: 10 },
  { id: 'vann', title: 'Vannbærer', hint: 'Fyll hele vann-kategorien', icon: 'water', accent: 'ice', xp: 75 },
  { id: 'mat', title: 'Spiskammer', hint: 'Fyll hele mat-kategorien', icon: 'food-variant', accent: 'amber', xp: 75 },
  { id: 'varme', title: 'Varmekilde', hint: 'Fyll hele varme-kategorien', icon: 'fire', accent: 'clay', xp: 50 },
  { id: 'lys', title: 'Lyskaster', hint: 'Fyll hele lys-kategorien', icon: 'flashlight', accent: 'amber', xp: 40 },
  { id: 'kommunikasjon', title: 'Signalist', hint: 'Fyll hele kommunikasjon-kategorien', icon: 'radio', accent: 'violet', xp: 50 },
  { id: 'helse', title: 'Feltsanitet', hint: 'Fyll hele helse-kategorien', icon: 'medical-bag', accent: 'clay', xp: 50 },
  { id: 'hygiene', title: 'Renholder', hint: 'Fyll hele hygiene-kategorien', icon: 'hand-wash', accent: 'ice', xp: 30 },
  { id: 'allsidig', title: 'Allsidig', hint: 'Ha noe i alle kategoriene', icon: 'view-grid', accent: 'moss', xp: 50 },
  { id: 'syv-dogn', title: 'Syv døgn', hint: 'Vann og mat for hele målet', icon: 'calendar-check', accent: 'moss', xp: 150 },
  { id: 'fullt-lager', title: 'Fullt lager', hint: '100 % beredskapsnivå', icon: 'trophy', accent: 'signal', xp: 250 },
  { id: 'rotasjon', title: 'Rotasjonsmester', hint: 'Bytt ut 5 varer i tide', icon: 'autorenew', accent: 'moss', xp: 75 },
  { id: 'kvartal', title: 'Kvartalsvakt', hint: 'Fullfør en kvartalssjekk', icon: 'clipboard-check', accent: 'violet', xp: 30 },
  { id: 'krisekort', title: 'Kortet klart', hint: 'Fyll ut møtested og kontakter', icon: 'card-account-details', accent: 'signal', xp: 30 },
  { id: 'infopunkt', title: 'Vet hvor', hint: 'Legg inn kommunens infopunkt', icon: 'information', accent: 'ice', xp: 20 },
  { id: 'kartleser', title: 'Kartleser', hint: 'Last ned et kartområde', icon: 'map-check', accent: 'moss', xp: 40 },
  { id: 'stifinner', title: 'Stifinner', hint: 'Lagre 3 egne kartpunkter', icon: 'map-marker-star', accent: 'moss', xp: 30 },
  { id: 'leser', title: 'Bokorm', hint: 'Les 5 kapitler', icon: 'book-open-variant', accent: 'violet', xp: 40 },
  { id: 'student', title: 'Student', hint: 'Bestå ditt første kurs', icon: 'school', accent: 'amber', xp: 30 },
  { id: 'sertifisert', title: 'Sertifisert', hint: 'Bestå alle kursene', icon: 'certificate', accent: 'signal', xp: 300 },
  { id: 'streak-4', title: 'Fire på rad', hint: 'Vær aktiv fire uker på rad', icon: 'fire-circle', accent: 'signal', xp: 80 },
];

export const badgeById = Object.fromEntries(badges.map((b) => [b.id, b])) as Record<string, BadgeDef>;

/** Weekly missions. Three are picked per week, deterministically. */
export interface MissionDef {
  id: string;
  title: string;
  icon: IconName;
  /** Number of actions needed during the week. */
  goal: number;
  /** Which tracked event counts towards it. */
  event: 'stock' | 'complete' | 'chapter' | 'quiz' | 'rotation' | 'waypoint' | 'log' | 'review' | 'card' | 'any';
}

export const missions: MissionDef[] = [
  { id: 'registrer-5', title: 'Registrer 5 varer i lageret', icon: 'package-variant', goal: 5, event: 'stock' },
  { id: 'komplett-2', title: 'Gjør 2 varer komplette', icon: 'check-decagram', goal: 2, event: 'complete' },
  { id: 'les-2', title: 'Les 2 kapitler', icon: 'book-open-page-variant', goal: 2, event: 'chapter' },
  { id: 'kurs-1', title: 'Bestå et kurs', icon: 'school', goal: 1, event: 'quiz' },
  { id: 'roter-1', title: 'Bytt ut en vare som går ut', icon: 'autorenew', goal: 1, event: 'rotation' },
  { id: 'punkt-1', title: 'Lagre et punkt i kartet', icon: 'map-marker-plus', goal: 1, event: 'waypoint' },
  { id: 'logg-1', title: 'Skriv i krisedagboken', icon: 'notebook-edit-outline', goal: 1, event: 'log' },
  { id: 'kort-1', title: 'Oppdater krisekortet', icon: 'card-account-details-outline', goal: 1, event: 'card' },
  { id: 'aktiv-8', title: 'Gjør 8 beredskapsgjøremål', icon: 'lightning-bolt', goal: 8, event: 'any' },
];

/** ISO-like week key, e.g. 2026-W45. */
export function weekKey(d = new Date()): string {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const y = t.getUTCFullYear();
  const w = Math.ceil(((t.getTime() - Date.UTC(y, 0, 1)) / 86400000 + 1) / 7);
  return `${y}-W${String(w).padStart(2, '0')}`;
}

export function missionsForWeek(week: string): MissionDef[] {
  let h = 0;
  for (const c of week) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  const pool = [...missions];
  const out: MissionDef[] = [];
  while (out.length < 3 && pool.length) {
    h = (h * 1103515245 + 12345) >>> 0;
    out.push(pool.splice(h % pool.length, 1)[0]);
  }
  return out;
}
