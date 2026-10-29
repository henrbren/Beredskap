import type { IconName } from './types';

export interface EmergencyNumber {
  number: string;
  label: string;
  detail: string;
  icon: IconName;
  urgent?: boolean;
}

export const emergencyNumbers: EmergencyNumber[] = [
  { number: '113', label: 'Ambulanse', detail: 'Akutt sykdom og skade', icon: 'ambulance', urgent: true },
  { number: '112', label: 'Politi', detail: 'Når liv og helse er truet', icon: 'police-badge', urgent: true },
  { number: '110', label: 'Brann', detail: 'Brann, røyk, ulykker', icon: 'fire-truck', urgent: true },
  { number: '116 117', label: 'Legevakt', detail: 'Når det haster, men ikke er livstruende', icon: 'hospital-box' },
  { number: '22 59 13 00', label: 'Giftinformasjonen', detail: 'Døgnåpen rådgivning ved forgiftning', icon: 'bottle-tonic-skull' },
  { number: '02800', label: 'Politiets sentralbord', detail: 'Når det ikke haster', icon: 'phone' },
  { number: '116 123', label: 'Mental Helse', detail: 'Hjelpetelefonen — døgnåpen', icon: 'head-heart' },
];

/** Sivilforsvarets varslingssignaler (tyfoner). */
export const sirenSignals = [
  {
    id: 'viktig-melding',
    title: 'Viktig melding – søk informasjon',
    pattern: [0.5, 0.5, 0.5] as const,
    description: 'Tre serier à tre støt, med ett minutts opphold mellom seriene. Søk informasjon: NRK P1 (DAB/FM), TV, myndighetenes nettsider og kanaler. Het tidligere «lytt på radio».',
  },
  {
    id: 'flyalarm',
    title: 'Flyalarm',
    pattern: [0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25, 0.25] as const,
    description: 'Korte støt i ca. ett minutt. Søk dekning umiddelbart — tilfluktsrom, kjeller eller et rom uten vinduer.',
  },
  {
    id: 'faren-over',
    title: 'Faren over',
    pattern: [3] as const,
    description: 'Ett sammenhengende støt i ca. 30 sekunder. Faren er over — følg fortsatt med på radio.',
  },
];
