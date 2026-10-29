import type { MaterialCommunityIcons } from '@expo/vector-icons';

/** Any valid MaterialCommunityIcons glyph name. */
export type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

/** Accent colours available for books and categories (see src/theme/tokens.ts). */
export type Accent = 'signal' | 'moss' | 'amber' | 'ice' | 'clay' | 'violet';

// ─── Scenarier («Hva gjør jeg hvis …?») ─────────────────────────────────────

export type ScenarioCategory = 'infrastruktur' | 'natur' | 'helse' | 'sikkerhet' | 'hjem';

/** akutt = handle nå, alvorlig = handle innen timer, moderat = planlegg/følg med. */
export type Severity = 'akutt' | 'alvorlig' | 'moderat';

export interface ScenarioStep {
  /** Short imperative, max ~60 chars. «Hold fryseren lukket». */
  title: string;
  /** Optional 1–2 sentence explanation of why/how. */
  detail?: string;
}

export interface ScenarioPhase {
  /** e.g. «Med en gang», «De første timene», «Første døgn», «Etterpå». */
  label: string;
  steps: ScenarioStep[];
}

export interface Scenario {
  id: string;
  /** Short title: «Strømbrudd». */
  title: string;
  /** The question form: «Hva gjør jeg hvis strømmen går?». */
  question: string;
  category: ScenarioCategory;
  icon: IconName;
  severity: Severity;
  /** One–two sentences shown at the top. */
  summary: string;
  /** The most important «ikke gjør»-points. Short. */
  dont: string[];
  phases: ScenarioPhase[];
  /** Key numbers/facts: { label: 'Fryser holder seg', value: '24–48 t' }. */
  facts?: { label: string; value: string }[];
  /** Ids of lager-items (see src/data/checklist.ts) that matter here. */
  supplies?: string[];
  /** Optional id of a related book in the library. */
  relatedBook?: string;
  /** Where the advice is based on, e.g. «DSB / egenberedskap.no». */
  source: string;
}

// ─── Bibliotek («bøker») ────────────────────────────────────────────────────

export type BookBlock =
  | { type: 'p'; text: string }
  | { type: 'h'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'tip'; title?: string; text: string }
  | { type: 'warning'; title?: string; text: string }
  | { type: 'facts'; items: { label: string; value: string }[] };

export interface Chapter {
  id: string;
  title: string;
  /** Estimated reading time in minutes. */
  minutes: number;
  blocks: BookBlock[];
}

export interface Book {
  id: string;
  title: string;
  subtitle: string;
  /** 2–3 sentences for the book detail screen. */
  description: string;
  icon: IconName;
  accent: Accent;
  /** false = free for everyone, true = part of Beredskap Pluss. */
  premium: boolean;
  chapters: Chapter[];
}

// ─── Lager ──────────────────────────────────────────────────────────────────

export type SupplyCategory =
  | 'vann'
  | 'mat'
  | 'varme'
  | 'lys'
  | 'kommunikasjon'
  | 'helse'
  | 'hygiene'
  | 'annet';
