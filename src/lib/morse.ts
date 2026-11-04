export const MORSE: Record<string, string> = {
  A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---',
  K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-',
  U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..', Æ: '.-.-', Ø: '---.', Å: '.--.-',
  '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....',
  '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..', '/': '-..-.',
  '-': '-....-', '@': '.--.-.',
};

const REVERSE = Object.fromEntries(Object.entries(MORSE).map(([k, v]) => [v, k]));

export function toMorse(text: string): string {
  return text
    .toUpperCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => [...w].map((c) => MORSE[c] ?? '').filter(Boolean).join(' '))
    .join(' / ');
}

export function fromMorse(code: string): string {
  return code
    .trim()
    .split(/\s*\/\s*|\s{3,}/)
    .map((w) => w.split(/\s+/).map((c) => REVERSE[c] ?? '?').join(''))
    .join(' ');
}

/**
 * On/off timeline in «units» (dot = 1, dash = 3, gap in letter = 1,
 * between letters = 3, between words = 7). Positive = on, negative = off.
 */
export function morseTimeline(text: string): number[] {
  const out: number[] = [];
  const words = text.toUpperCase().split(/\s+/).filter(Boolean);
  words.forEach((w, wi) => {
    [...w].forEach((ch, ci) => {
      const code = MORSE[ch];
      if (!code) return;
      [...code].forEach((sym, si) => {
        out.push(sym === '.' ? 1 : 3);
        if (si < code.length - 1) out.push(-1);
      });
      if (ci < w.length - 1) out.push(-3);
    });
    if (wi < words.length - 1) out.push(-7);
  });
  return out;
}
