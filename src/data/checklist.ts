import type { IconName, SupplyCategory } from './types';

/**
 * How the target quantity of an item is computed for a household.
 * - perPersonPerDay: × persons × days (water, canned dinners …)
 * - perPerson:      × persons (sleeping bags …)
 * - perChildPerDay: × children × days
 * - perPetPerDay:   × pets × days
 * - fixed:          a fixed quantity for the whole household
 */
export type Scaling = 'perPersonPerDay' | 'perPerson' | 'perChildPerDay' | 'perPetPerDay' | 'fixed';

export interface SupplyTemplate {
  id: string;
  name: string;
  category: SupplyCategory;
  unit: string;
  amount: number;
  scaling: Scaling;
  /** Short, practical hint shown under the item. */
  hint: string;
  /** Suggested rotation interval in months for perishable items (sets a default expiry). */
  rotateMonths?: number;
  /** Only relevant for households with children / pets. */
  requires?: 'children' | 'pets';
}

export const categoryMeta: Record<SupplyCategory, { label: string; icon: IconName }> = {
  vann: { label: 'Vann', icon: 'water' },
  mat: { label: 'Mat', icon: 'food-variant' },
  varme: { label: 'Varme', icon: 'fire' },
  lys: { label: 'Lys', icon: 'flashlight' },
  kommunikasjon: { label: 'Kommunikasjon', icon: 'radio' },
  helse: { label: 'Helse', icon: 'medical-bag' },
  hygiene: { label: 'Hygiene', icon: 'hand-wash' },
  annet: { label: 'Annet', icon: 'toolbox' },
};

export const categoryOrder: SupplyCategory[] = [
  'vann',
  'mat',
  'varme',
  'lys',
  'kommunikasjon',
  'helse',
  'hygiene',
  'annet',
];

/**
 * Basert på DSBs råd om egenberedskap (egenberedskap.no): husstanden bør klare seg
 * selv i om lag én uke. Mengdene er utgangspunkt — brukeren kan justere alt.
 */
export const supplyTemplates: SupplyTemplate[] = [
  // Vann
  {
    id: 'vann',
    name: 'Drikkevann',
    category: 'vann',
    unit: 'liter',
    amount: 3,
    scaling: 'perPersonPerDay',
    hint: 'Ca. 3 liter per person per døgn til drikke og enkel matlaging. Tapp på rene flasker og bytt jevnlig.',
    rotateMonths: 12,
  },
  {
    id: 'vannkanner',
    name: 'Vannkanner med kran',
    category: 'vann',
    unit: 'stk',
    amount: 2,
    scaling: 'fixed',
    hint: 'Tomme kanner til å hente vann fra vannpost eller tankbil.',
  },
  {
    id: 'vannrens',
    name: 'Vannrensetabletter / filter',
    category: 'vann',
    unit: 'pk',
    amount: 1,
    scaling: 'fixed',
    hint: 'Reserve hvis du ikke kan koke vannet.',
    rotateMonths: 36,
  },

  // Mat
  {
    id: 'mat-hermetikk',
    name: 'Hermetisk middag',
    category: 'mat',
    unit: 'bokser',
    amount: 1,
    scaling: 'perPersonPerDay',
    hint: 'Lapskaus, suppe, bønner, fiskeboller — mat som kan spises kald.',
    rotateMonths: 24,
  },
  {
    id: 'mat-knekkebrod',
    name: 'Knekkebrød / kjeks',
    category: 'mat',
    unit: 'pk',
    amount: 2,
    scaling: 'perPerson',
    hint: 'Holder seg lenge og krever ingen tilberedning.',
    rotateMonths: 12,
  },
  {
    id: 'mat-havregryn',
    name: 'Havregryn / müsli',
    category: 'mat',
    unit: 'pk',
    amount: 1,
    scaling: 'perPerson',
    hint: 'Kan spises med vann eller holdbar melk.',
    rotateMonths: 12,
  },
  {
    id: 'mat-palegg',
    name: 'Holdbart pålegg',
    category: 'mat',
    unit: 'bokser',
    amount: 3,
    scaling: 'perPerson',
    hint: 'Makrell i tomat, leverpostei på boks, peanøttsmør, honning.',
    rotateMonths: 18,
  },
  {
    id: 'mat-torrmat',
    name: 'Tørrmat / turmat',
    category: 'mat',
    unit: 'poser',
    amount: 3,
    scaling: 'perPerson',
    hint: 'Pasta, ris, posesupper og frysetørket turmat.',
    rotateMonths: 24,
  },
  {
    id: 'mat-snacks',
    name: 'Energirik snacks',
    category: 'mat',
    unit: 'pk',
    amount: 2,
    scaling: 'perPerson',
    hint: 'Nøtter, tørket frukt, sjokolade — godt for humøret også.',
    rotateMonths: 12,
  },
  {
    id: 'mat-barnemat',
    name: 'Barnemat / morsmelkerstatning',
    category: 'mat',
    unit: 'porsjoner',
    amount: 4,
    scaling: 'perChildPerDay',
    hint: 'Ferdigblandet erstatning trenger ikke rent vann.',
    rotateMonths: 6,
    requires: 'children',
  },
  {
    id: 'mat-dyr',
    name: 'Dyrefôr',
    category: 'mat',
    unit: 'dager',
    amount: 1,
    scaling: 'perPetPerDay',
    hint: 'Én ukes fôr til hvert dyr, pluss vann til dem.',
    rotateMonths: 12,
    requires: 'pets',
  },

  // Varme
  {
    id: 'varme-ved',
    name: 'Ved eller annen varmekilde',
    category: 'varme',
    unit: 'sekker',
    amount: 5,
    scaling: 'fixed',
    hint: 'Hvis du har vedovn. Alternativ varmekilde må være godkjent for innendørs bruk.',
  },
  {
    id: 'varme-sovepose',
    name: 'Sovepose / ullteppe',
    category: 'varme',
    unit: 'stk',
    amount: 1,
    scaling: 'perPerson',
    hint: 'Ett per person — det varmeste du har.',
  },
  {
    id: 'varme-ull',
    name: 'Ullundertøy',
    category: 'varme',
    unit: 'sett',
    amount: 1,
    scaling: 'perPerson',
    hint: 'Ull varmer selv om den blir fuktig.',
  },
  {
    id: 'varme-kokeapparat',
    name: 'Primus / gassbrenner + brensel',
    category: 'varme',
    unit: 'stk',
    amount: 1,
    scaling: 'fixed',
    hint: 'Til matlaging og koking av vann. Brukes med god lufting.',
  },
  {
    id: 'varme-fyrstikker',
    name: 'Fyrstikker / lighter',
    category: 'varme',
    unit: 'pk',
    amount: 2,
    scaling: 'fixed',
    hint: 'Oppbevar tørt, gjerne i en zip-pose.',
  },

  // Lys
  {
    id: 'lys-lommelykt',
    name: 'Lommelykt / hodelykt',
    category: 'lys',
    unit: 'stk',
    amount: 1,
    scaling: 'perPerson',
    hint: 'Hodelykt gir frie hender.',
  },
  {
    id: 'lys-batterier',
    name: 'Batterier',
    category: 'lys',
    unit: 'pk',
    amount: 3,
    scaling: 'fixed',
    hint: 'Riktig størrelse til lykter og radio. Sjekk datoen.',
    rotateMonths: 24,
  },
  {
    id: 'lys-stearin',
    name: 'Stearinlys / telys',
    category: 'lys',
    unit: 'stk',
    amount: 20,
    scaling: 'fixed',
    hint: 'Aldri gå fra levende lys. Ha brannslukker klar.',
  },

  // Kommunikasjon
  {
    id: 'kom-dabradio',
    name: 'DAB-radio på batteri',
    category: 'kommunikasjon',
    unit: 'stk',
    amount: 1,
    scaling: 'fixed',
    hint: 'NRK P1 er beredskapskanalen. Sveiv eller sol er en bonus.',
  },
  {
    id: 'kom-powerbank',
    name: 'Strømbank (oppladet)',
    category: 'kommunikasjon',
    unit: 'stk',
    amount: 1,
    scaling: 'perPerson',
    hint: 'Lad opp hver tredje måned.',
    rotateMonths: 3,
  },
  {
    id: 'kom-kontanter',
    name: 'Kontanter',
    category: 'kommunikasjon',
    unit: 'kr',
    amount: 1000,
    scaling: 'perPerson',
    hint: 'I mindre sedler og mynt — betalingssystemer kan falle ut.',
  },
  {
    id: 'kom-kontaktliste',
    name: 'Krisekort på papir',
    category: 'kommunikasjon',
    unit: 'stk',
    amount: 1,
    scaling: 'perPerson',
    hint: 'Skriv ut krisekortet fra appen — telefonen kan gå tom.',
  },

  // Helse
  {
    id: 'helse-forstehjelp',
    name: 'Førstehjelpsskrin',
    category: 'helse',
    unit: 'stk',
    amount: 1,
    scaling: 'fixed',
    hint: 'Kompresser, bandasjer, plaster, saks, pinsett, engangshansker.',
    rotateMonths: 24,
  },
  {
    id: 'helse-medisiner',
    name: 'Faste medisiner (ekstra)',
    category: 'helse',
    unit: 'dager',
    amount: 1,
    scaling: 'perPersonPerDay',
    hint: 'Ha alltid litt ekstra av medisiner du er avhengig av.',
    rotateMonths: 12,
  },
  {
    id: 'helse-jod',
    name: 'Jodtabletter',
    category: 'helse',
    unit: 'pk',
    amount: 1,
    scaling: 'fixed',
    hint: 'Anbefalt for barn og unge, personer under 40, gravide og ammende. Tas KUN når myndighetene ber om det.',
    rotateMonths: 60,
  },
  {
    id: 'helse-reseptfritt',
    name: 'Smertestillende & plaster',
    category: 'helse',
    unit: 'pk',
    amount: 1,
    scaling: 'fixed',
    hint: 'Paracetamol/ibuprofen, febertermometer, plaster.',
    rotateMonths: 24,
  },

  // Hygiene
  {
    id: 'hyg-vatserv',
    name: 'Våtservietter & håndsprit',
    category: 'hygiene',
    unit: 'pk',
    amount: 2,
    scaling: 'fixed',
    hint: 'Viktig for å unngå smitte når vannet er borte.',
  },
  {
    id: 'hyg-dopapir',
    name: 'Toalettpapir',
    category: 'hygiene',
    unit: 'ruller',
    amount: 4,
    scaling: 'perPerson',
    hint: 'Én pakke ekstra i boden er nok for de fleste.',
  },
  {
    id: 'hyg-soppelsekker',
    name: 'Kraftige søppelsekker',
    category: 'hygiene',
    unit: 'stk',
    amount: 20,
    scaling: 'fixed',
    hint: 'Til nødtoalett i doskålen når vannet er borte.',
  },
  {
    id: 'hyg-bleier',
    name: 'Bleier / sanitærartikler',
    category: 'hygiene',
    unit: 'pk',
    amount: 1,
    scaling: 'fixed',
    hint: 'Det husstanden trenger for en uke.',
  },

  // Annet
  {
    id: 'annet-kopier',
    name: 'Kopier av viktige dokumenter',
    category: 'annet',
    unit: 'mappe',
    amount: 1,
    scaling: 'fixed',
    hint: 'Pass, forsikring, resepter — i en vanntett mappe.',
  },
  {
    id: 'annet-multiverktoy',
    name: 'Multiverktøy & gaffateip',
    category: 'annet',
    unit: 'sett',
    amount: 1,
    scaling: 'fixed',
    hint: 'Kniv, tang, skrutrekker. Gaffateip fikser det meste.',
  },
  {
    id: 'annet-brannslukker',
    name: 'Brannslukker & røykvarsler',
    category: 'annet',
    unit: 'stk',
    amount: 1,
    scaling: 'fixed',
    hint: 'Test røykvarsleren hver måned, bytt batteri hvert år.',
  },
];

export const templateById = Object.fromEntries(supplyTemplates.map((t) => [t.id, t])) as Record<
  string,
  SupplyTemplate
>;

export interface HouseholdShape {
  adults: number;
  children: number;
  pets: number;
  days: number;
}

export function targetFor(t: SupplyTemplate, h: HouseholdShape): number {
  const persons = Math.max(1, h.adults + h.children);
  switch (t.scaling) {
    case 'perPersonPerDay':
      return Math.ceil(t.amount * persons * h.days);
    case 'perPerson':
      return Math.ceil(t.amount * persons);
    case 'perChildPerDay':
      return Math.ceil(t.amount * h.children * h.days);
    case 'perPetPerDay':
      return Math.ceil(t.amount * h.pets * h.days);
    case 'fixed':
      return t.amount;
  }
}

export function templateApplies(t: SupplyTemplate, h: HouseholdShape): boolean {
  if (t.requires === 'children') return h.children > 0;
  if (t.requires === 'pets') return h.pets > 0;
  return true;
}
