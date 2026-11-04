import { File } from 'expo-file-system';
import { create } from 'zustand';

import { useOffline } from '@/store/offline';

import { appDir, hasFileSystem, safeDelete } from './files';
import { retrieve, type Hit } from './search';

/**
 * Lokal AI-assistent (som Ollama + RAG i Project N.O.M.A.D.), men på telefonen:
 * en liten språkmodell i GGUF-format kjøres med llama.cpp (llama.rn).
 * Svarene bygger på appens eget offline-innhold, som hentes med BM25-søk.
 *
 * Uten nedlastet modell (eller i Expo Go / web) svarer assistenten med de
 * mest relevante utdragene fra biblioteket i stedet.
 */

export interface ModelInfo {
  id: string;
  name: string;
  description: string;
  bytes: number;
  url: string;
  file: string;
  ctx: number;
}

export const MODELS: ModelInfo[] = [
  {
    id: 'gemma3-1b',
    name: 'Kompakt',
    description: 'Gemma 3 1B · rask, passer de fleste telefoner',
    bytes: 806_000_000,
    url: 'https://huggingface.co/unsloth/gemma-3-1b-it-GGUF/resolve/main/gemma-3-1b-it-Q4_K_M.gguf',
    file: 'gemma-3-1b-it-Q4_K_M.gguf',
    ctx: 4096,
  },
  {
    id: 'llama32-3b',
    name: 'Kraftig',
    description: 'Llama 3.2 3B · bedre svar, krever nyere telefon',
    bytes: 2_020_000_000,
    url: 'https://huggingface.co/bartowski/Llama-3.2-3B-Instruct-GGUF/resolve/main/Llama-3.2-3B-Instruct-Q4_K_M.gguf',
    file: 'Llama-3.2-3B-Instruct-Q4_K_M.gguf',
    ctx: 4096,
  },
];

const SYSTEM = `Du er en rolig og presis beredskapsrådgiver i en norsk offline-app.
Svar på norsk bokmål, kort og konkret, gjerne som nummererte steg.
Bygg svaret KUN på kildene du får. Står det ikke i kildene, si at du ikke vet, og foreslå hva brukeren kan slå opp.
Ved fare for liv og helse: si alltid først at de skal ringe 113 (ambulanse), 112 (politi) eller 110 (brann).
Følg alltid beskjeder fra myndighetene foran dine råd. Ikke gi medisindoser.`;

type Status = 'none' | 'downloading' | 'ready' | 'loading' | 'loaded' | 'unsupported' | 'error';

interface AiState {
  status: Status;
  progress: number;
  error?: string;
  download: (m: ModelInfo) => Promise<void>;
  cancel: () => void;
  remove: () => Promise<void>;
}

let task: { cancel: () => void } | null = null;
// llama.rn context, typed loosely so the app also runs where the native module is missing.
let ctx: { completion: (p: object, cb?: (d: { token: string }) => void) => Promise<{ text: string }>; stopCompletion: () => Promise<void>; release: () => Promise<void> } | null =
  null;
let ctxModel: string | null = null;

function modelFile(m: ModelInfo): File | null {
  const dir = appDir('modeller');
  return dir ? new File(dir, m.file) : null;
}

export function installedModel(): ModelInfo | undefined {
  const id = useOffline.getState().modelId;
  const m = MODELS.find((x) => x.id === id);
  if (!m) return undefined;
  const f = modelFile(m);
  return f?.exists ? m : undefined;
}

export const useAi = create<AiState>((set) => ({
  status: installedModelSafe() ? 'ready' : hasFileSystem ? 'none' : 'unsupported',
  progress: 0,

  download: async (m) => {
    if (!hasFileSystem) return;
    const f = modelFile(m)!;
    set({ status: 'downloading', progress: 0, error: undefined });
    try {
      const t = File.createDownloadTask(m.url, f, {
        onProgress: ({ bytesWritten, totalBytes }) => set({ progress: totalBytes ? bytesWritten / totalBytes : 0 }),
      });
      task = { cancel: () => t.cancel() };
      const out = await t.downloadAsync();
      task = null;
      if (!out) throw new Error('Nedlastingen ble avbrutt');
      useOffline.getState().setModel(m.id, out.size ?? m.bytes);
      set({ status: 'ready', progress: 1 });
    } catch (e) {
      task = null;
      safeDelete(f.uri);
      set({ status: 'none', error: e instanceof Error ? e.message : String(e) });
    }
  },

  cancel: () => {
    task?.cancel();
  },

  remove: async () => {
    await ctx?.release().catch(() => {});
    ctx = null;
    ctxModel = null;
    for (const m of MODELS) {
      const f = modelFile(m);
      if (f) safeDelete(f.uri);
    }
    useOffline.getState().setModel(undefined, undefined);
    set({ status: 'none', progress: 0 });
  },
}));

function installedModelSafe() {
  try {
    return installedModel();
  } catch {
    return undefined;
  }
}

async function ensureContext(m: ModelInfo): Promise<typeof ctx> {
  if (ctx && ctxModel === m.id) return ctx;
  let llama: { initLlama: (p: object) => Promise<NonNullable<typeof ctx>> };
  try {
    // Native module — only present in a development/production build.
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    llama = require('llama.rn');
  } catch {
    useAi.setState({ status: 'unsupported' });
    return null;
  }
  useAi.setState({ status: 'loading' });
  try {
    await ctx?.release().catch(() => {});
    ctx = await llama.initLlama({ model: modelFile(m)!.uri, n_ctx: m.ctx, n_gpu_layers: 99, use_mlock: false });
    ctxModel = m.id;
    useAi.setState({ status: 'loaded' });
    return ctx;
  } catch (e) {
    useAi.setState({ status: 'error', error: e instanceof Error ? e.message : String(e) });
    return null;
  }
}

export interface Answer {
  text: string;
  sources: Hit[];
  /** true when the answer was generated by the on-device model */
  generated: boolean;
}

export interface ChatTurn {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Answers a question from the offline library. Streams tokens through
 * onToken when a model is available.
 */
export async function ask(
  question: string,
  history: ChatTurn[],
  opts: { premium: boolean; onToken?: (text: string) => void },
): Promise<Answer> {
  const sources = retrieve(question, { premium: opts.premium, k: 4 });
  const m = installedModelSafe();
  const c = m ? await ensureContext(m) : null;

  if (!c) {
    const text = sources.length
      ? sources
          .slice(0, 3)
          .map((s) => `**${s.doc.title}**\n${s.snippet.slice(0, 360).trim()}${s.snippet.length > 360 ? ' …' : ''}`)
          .join('\n\n')
      : 'Jeg fant ingenting om dette i biblioteket. Prøv andre ord, eller se «Hva gjør jeg hvis».';
    return { text, sources, generated: false };
  }

  const context = sources.map((s, i) => `[${i + 1}] ${s.doc.title} (${s.doc.context})\n${s.snippet}`).join('\n\n');
  const messages = [
    { role: 'system', content: SYSTEM },
    ...history.slice(-4),
    { role: 'user', content: `Kilder:\n${context || '(ingen treff)'}\n\nSpørsmål: ${question}` },
  ];
  let acc = '';
  const res = await c.completion(
    { messages, n_predict: 450, temperature: 0.3, top_p: 0.9, stop: ['<|eot_id|>', '<end_of_turn>', '</s>'] },
    (d) => {
      acc += d.token;
      opts.onToken?.(acc);
    },
  );
  return { text: (res.text || acc).trim(), sources, generated: true };
}

export async function stopAnswer() {
  await ctx?.stopCompletion().catch(() => {});
}
