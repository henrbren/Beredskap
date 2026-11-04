import { articles } from '@/data/articles';
import { books } from '@/data/books';
import { scenarios } from '@/data/scenarios';
import type { BookBlock } from '@/data/types';

/**
 * Offline full-text search (BM25) over everything the app knows:
 * handlingskort, leksikon and books. Also the retrieval step for the
 * on-device assistant (RAG).
 */

export type DocKind = 'scenario' | 'artikkel' | 'kapittel';

export interface SearchDoc {
  id: string;
  kind: DocKind;
  title: string;
  /** Where it lives, for display («Leksikon · Vann»). */
  context: string;
  text: string;
  /** Route params */
  href: { pathname: string; params: Record<string, string> };
  premium?: boolean;
}

export interface Hit {
  doc: SearchDoc;
  score: number;
  snippet: string;
}

const STOP = new Set(
  'og i jeg det at en et den til er som på de med han av ikke der så var meg seg men ett har om vi min mitt ha hadde hun nå over da ved fra du ut sin dem oss opp man kan hans hvor eller hva skal selv sjøl her alle vil bli ble blitt kunne inn når være kom noen noe ville dere deres kun ja etter ned skulle denne for deg si sine sitt mot å meget hvorfor dette disse uten hvordan ingen din ditt blir samme hvilken hvilke sånn inni mellom vår hver hvem vors hvis både bare enn fordi før mange også slik vært båe begge siden henne hennes'.split(
    ' ',
  ),
);

const SUFFIXES = ['ene', 'ane', 'ende', 'ert', 'het', 'ens', 'ers', 'er', 'en', 'et', 'ar', 'a', 'e', 's'];

export function stem(w: string): string {
  if (w.length <= 4) return w;
  for (const s of SUFFIXES) {
    if (w.endsWith(s) && w.length - s.length >= 3) return w.slice(0, -s.length);
  }
  return w;
}

export function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9æøåäöü\s-]/g, ' ')
    .split(/[\s-]+/)
    .filter((t) => t.length > 1 && !STOP.has(t))
    .map(stem);
}

function blocksText(blocks: BookBlock[]): string {
  return blocks
    .map((b) => {
      switch (b.type) {
        case 'p':
        case 'h':
          return b.text;
        case 'list':
          return b.items.join('. ');
        case 'tip':
        case 'warning':
          return `${b.title ?? ''} ${b.text}`;
        case 'facts':
          return b.items.map((f) => `${f.label}: ${f.value}`).join('. ');
      }
    })
    .join('\n');
}

function buildDocs(): SearchDoc[] {
  const docs: SearchDoc[] = [];
  for (const s of scenarios) {
    docs.push({
      id: `scenario:${s.id}`,
      kind: 'scenario',
      title: s.title,
      context: 'Hva gjør jeg hvis',
      text: [
        s.question,
        s.summary,
        'Ikke gjør: ' + s.dont.join('. '),
        ...s.phases.map((ph) => `${ph.label}: ${ph.steps.map((st) => `${st.title}. ${st.detail ?? ''}`).join(' ')}`),
        ...(s.facts ?? []).map((f) => `${f.label}: ${f.value}`),
      ].join('\n'),
      href: { pathname: '/scenario/[id]', params: { id: s.id } },
    });
  }
  for (const a of articles) {
    docs.push({
      id: `artikkel:${a.id}`,
      kind: 'artikkel',
      title: a.title,
      context: 'Leksikon',
      text: `${a.summary}\n${a.tags.join(' ')}\n${blocksText(a.blocks)}`,
      href: { pathname: '/artikkel/[id]', params: { id: a.id } },
    });
  }
  for (const b of books) {
    for (const c of b.chapters) {
      docs.push({
        id: `kapittel:${b.id}/${c.id}`,
        kind: 'kapittel',
        title: c.title,
        context: b.title,
        text: blocksText(c.blocks),
        href: { pathname: '/kapittel/[book]/[chapter]', params: { book: b.id, chapter: c.id } },
        premium: b.premium,
      });
    }
  }
  return docs;
}

interface Index {
  docs: SearchDoc[];
  tf: Map<string, number>[];
  titleTf: Map<string, number>[];
  len: number[];
  df: Map<string, number>;
  avgLen: number;
}

let index: Index | null = null;

function getIndex(): Index {
  if (index) return index;
  const docs = buildDocs();
  const df = new Map<string, number>();
  const tf: Map<string, number>[] = [];
  const titleTf: Map<string, number>[] = [];
  const len: number[] = [];
  for (const d of docs) {
    const toks = tokenize(d.text);
    const m = new Map<string, number>();
    for (const t of toks) m.set(t, (m.get(t) ?? 0) + 1);
    const tm = new Map<string, number>();
    for (const t of tokenize(d.title)) tm.set(t, (tm.get(t) ?? 0) + 1);
    for (const t of new Set([...m.keys(), ...tm.keys()])) df.set(t, (df.get(t) ?? 0) + 1);
    tf.push(m);
    titleTf.push(tm);
    len.push(toks.length);
  }
  index = { docs, tf, titleTf, len, df, avgLen: len.reduce((a, b) => a + b, 0) / Math.max(1, len.length) };
  return index;
}

/** Number of searchable documents (for the «offline-klar» summary). */
export function corpusSize() {
  return getIndex().docs.length;
}

function snippetFor(text: string, terms: Set<string>): string {
  const sentences = text.split(/(?<=[.!?\n])\s+/).filter((s) => s.trim().length > 20);
  let best = sentences[0] ?? text.slice(0, 160);
  let bestScore = -1;
  for (const s of sentences) {
    const score = tokenize(s).filter((t) => terms.has(t)).length;
    if (score > bestScore) {
      bestScore = score;
      best = s;
    }
  }
  best = best.trim();
  return best.length > 220 ? best.slice(0, 217) + '…' : best;
}

export function search(query: string, limit = 20, kinds?: DocKind[]): Hit[] {
  const q = tokenize(query);
  if (!q.length) return [];
  const idx = getIndex();
  const N = idx.docs.length;
  const k1 = 1.4;
  const b = 0.75;
  const terms = new Set(q);
  const hits: Hit[] = [];
  idx.docs.forEach((doc, i) => {
    if (kinds && !kinds.includes(doc.kind)) return;
    let score = 0;
    for (const t of terms) {
      const n = idx.df.get(t);
      if (!n) continue;
      const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
      const f = idx.tf[i].get(t) ?? 0;
      score += (idf * (f * (k1 + 1))) / (f + k1 * (1 - b + (b * idx.len[i]) / idx.avgLen));
      if (idx.titleTf[i].has(t)) score += idf * 2.2;
    }
    // Prefix matches for partial words while typing.
    if (score === 0) {
      for (const t of terms) if (t.length >= 3 && [...idx.titleTf[i].keys()].some((k) => k.startsWith(t))) score += 1;
    }
    if (score > 0) hits.push({ doc, score, snippet: '' });
  });
  hits.sort((a, b2) => b2.score - a.score);
  return hits.slice(0, limit).map((h) => ({ ...h, snippet: snippetFor(h.doc.text, terms) }));
}

/** Passages for the assistant: best docs, trimmed to the most relevant sentences. */
export function retrieve(query: string, opts: { premium: boolean; k?: number; maxChars?: number }): Hit[] {
  const k = opts.k ?? 4;
  const maxChars = opts.maxChars ?? 900;
  const terms = new Set(tokenize(query));
  return search(query, 12)
    .filter((h) => opts.premium || !h.doc.premium)
    .slice(0, k)
    .map((h) => {
      const sentences = h.doc.text.split(/(?<=[.!?\n])\s+/);
      const scored = sentences.map((s, i) => ({ s, i, n: tokenize(s).filter((t) => terms.has(t)).length }));
      const keep = new Set(
        scored
          .filter((x) => x.n > 0)
          .sort((a, b) => b.n - a.n)
          .slice(0, 8)
          .flatMap((x) => [x.i, x.i + 1]),
      );
      let text = sentences.filter((_, i) => keep.has(i)).join(' ');
      if (!text) text = h.doc.text;
      return { ...h, snippet: text.slice(0, maxChars) };
    });
}
