import type { Accent, ScenarioCategory, Severity } from './types';
import { scenarios } from './scenarios';

export { scenarios };
export const scenarioById = Object.fromEntries(scenarios.map((s) => [s.id, s]));

export const scenarioCategories: Record<ScenarioCategory, { label: string }> = {
  infrastruktur: { label: 'Strøm, vann & nett' },
  natur: { label: 'Vær & natur' },
  helse: { label: 'Helse & førstehjelp' },
  sikkerhet: { label: 'Varsling & sikkerhet' },
  hjem: { label: 'Hjemme & på tur' },
};

export const severityMeta: Record<Severity, { label: string; accent: Accent | 'danger' }> = {
  akutt: { label: 'Akutt', accent: 'danger' },
  alvorlig: { label: 'Alvorlig', accent: 'amber' },
  moderat: { label: 'Planlegg', accent: 'moss' },
};
