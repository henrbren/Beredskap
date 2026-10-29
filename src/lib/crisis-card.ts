import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Platform, Share } from 'react-native';

import { emergencyNumbers, sirenSignals } from '@/data/numbers';
import type { CrisisCard } from '@/store/app';

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function cardAsText(card: CrisisCard): string {
  const lines = ['KRISEKORT', ''];
  if (card.address) lines.push(`Adresse: ${card.address}`);
  if (card.meetingPoint) lines.push(`Møtested: ${card.meetingPoint}`);
  if (card.meetingPointAlt) lines.push(`Reserve-møtested: ${card.meetingPointAlt}`);
  if (card.outOfTownContact) lines.push(`Kontakt utenbys: ${card.outOfTownContact}`);
  if (card.members.length) {
    lines.push('', 'HUSSTANDEN');
    card.members.forEach((m) => lines.push(`• ${m.name}${m.medical ? ` — ${m.medical}` : ''}`));
  }
  if (card.contacts.length) {
    lines.push('', 'KONTAKTER');
    card.contacts.forEach((c) => lines.push(`• ${c.name}${c.relation ? ` (${c.relation})` : ''}: ${c.phone}`));
  }
  if (card.waterMain || card.fuseBox) {
    lines.push('', 'HJEMMET');
    if (card.waterMain) lines.push(`Hovedkran vann: ${card.waterMain}`);
    if (card.fuseBox) lines.push(`Sikringsskap: ${card.fuseBox}`);
  }
  if (card.notes) lines.push('', card.notes);
  lines.push('', 'NØDNUMRE');
  emergencyNumbers.slice(0, 5).forEach((n) => lines.push(`${n.number} ${n.label}`));
  return lines.join('\n');
}

function cardAsHtml(card: CrisisCard): string {
  const row = (k: string, v: string) => (v ? `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>` : '');
  return `<!doctype html><html><head><meta charset="utf-8"><style>
    @page { margin: 14mm; }
    body { font-family: -apple-system, Helvetica, Arial, sans-serif; color: #13140F; }
    .card { border: 2px solid #13140F; border-radius: 10px; padding: 18px 20px; max-width: 520px; }
    .bar { background: #F2481B; color: #fff; font-weight: 800; letter-spacing: 2px; padding: 6px 10px; border-radius: 6px; display: inline-block; font-size: 13px; }
    h2 { font-size: 11px; letter-spacing: 1.5px; text-transform: uppercase; color: #76746B; margin: 16px 0 6px; border-bottom: 1px solid #DCD7CA; padding-bottom: 4px; }
    table { border-collapse: collapse; width: 100%; font-size: 13px; }
    th { text-align: left; font-weight: 600; width: 38%; padding: 3px 0; vertical-align: top; }
    td { padding: 3px 0; }
    .nums td { font-weight: 800; font-size: 15px; }
    .fold { margin-top: 18px; font-size: 10px; color: #76746B; }
  </style></head><body><div class="card">
    <span class="bar">KRISEKORT</span>
    <h2>Hjem og møtested</h2><table>
      ${row('Adresse', card.address)}${row('Møtested', card.meetingPoint)}${row('Reserve-møtested', card.meetingPointAlt)}${row('Kontakt utenbys', card.outOfTownContact)}
    </table>
    ${card.members.length ? `<h2>Husstanden</h2><table>${card.members.map((m) => row(m.name, m.medical || '—')).join('')}</table>` : ''}
    ${card.contacts.length ? `<h2>Kontakter</h2><table>${card.contacts.map((c) => row(`${c.name}${c.relation ? ` (${c.relation})` : ''}`, c.phone)).join('')}</table>` : ''}
    ${card.waterMain || card.fuseBox ? `<h2>Hjemmet</h2><table>${row('Hovedkran vann', card.waterMain)}${row('Sikringsskap', card.fuseBox)}</table>` : ''}
    ${card.notes ? `<h2>Notater</h2><p style="font-size:13px">${esc(card.notes)}</p>` : ''}
    <h2>Nødnumre</h2><table class="nums">${emergencyNumbers.slice(0, 5).map((n) => `<tr><td style="width:38%">${n.number}</td><td>${esc(n.label)}</td></tr>`).join('')}</table>
    <h2>Varselsignaler</h2><table>${sirenSignals.map((s) => row(s.title, s.description.split('.')[0] + '.')).join('')}</table>
    <div class="fold">Skriv ut, brett og legg i lommeboken eller på kjøleskapet. Oppdater når noe endres.</div>
  </div></body></html>`;
}

export async function printCard(card: CrisisCard) {
  const html = cardAsHtml(card);
  if (Platform.OS === 'web') {
    await Print.printAsync({ html });
    return;
  }
  const { uri } = await Print.printToFileAsync({ html });
  if (await Sharing.isAvailableAsync()) {
    await Sharing.shareAsync(uri, { mimeType: 'application/pdf', dialogTitle: 'Krisekort', UTI: 'com.adobe.pdf' });
  } else {
    await Print.printAsync({ uri });
  }
}

export function shareCard(card: CrisisCard) {
  return Share.share({ message: cardAsText(card), title: 'Krisekort' }).catch(() => {});
}
