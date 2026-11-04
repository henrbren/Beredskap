const MONTHS = ['jan', 'feb', 'mar', 'apr', 'mai', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'des'];
const DAY = 24 * 60 * 60 * 1000;

export function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function fromISODate(s: string): Date {
  const [y, m, d] = s.split('-').map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export function addMonths(d: Date, months: number): Date {
  const r = new Date(d);
  r.setMonth(r.getMonth() + months);
  return r;
}

export function addDays(d: Date, days: number): Date {
  return new Date(d.getTime() + days * DAY);
}

/** Whole days from today to the given ISO date (negative = past). */
export function daysUntil(iso: string, now = new Date()): number {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((fromISODate(iso).getTime() - today.getTime()) / DAY);
}

export function formatDate(iso: string): string {
  const d = fromISODate(iso);
  return `${d.getDate()}. ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

/** «4. nov» this year, «4. nov 2027» otherwise. */
export function formatShortDate(iso: string): string {
  const d = fromISODate(iso);
  const sameYear = d.getFullYear() === new Date().getFullYear();
  return `${d.getDate()}. ${MONTHS[d.getMonth()]}${sameYear ? '' : ` ${d.getFullYear()}`}`;
}

/** «om 3 dager», «i dag», «for 2 uker siden» … */
export function relativeDays(days: number): string {
  if (days === 0) return 'i dag';
  if (days === 1) return 'i morgen';
  if (days === -1) return 'i går';
  const abs = Math.abs(days);
  let unit: string;
  if (abs < 14) unit = `${abs} dager`;
  else if (abs < 60) unit = `${Math.round(abs / 7)} uker`;
  else if (abs < 730) unit = `${Math.round(abs / 30)} mnd`;
  else unit = `${Math.round(abs / 365)} år`;
  return days > 0 ? `om ${unit}` : `${unit} siden`;
}

export function greeting(now = new Date()): string {
  const h = now.getHours();
  if (h < 5) return 'God natt';
  if (h < 10) return 'God morgen';
  if (h < 17) return 'God dag';
  return 'God kveld';
}
