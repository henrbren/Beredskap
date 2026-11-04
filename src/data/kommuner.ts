/**
 * Kommunale informasjonspunkter ved langvarig strøm- og ekombrudd.
 *
 * Kommunene bestemmer selv hvor informasjonspunktene er, og listene endres.
 * Legg bare inn kommuner med opplysninger fra kommunen selv. Sett `verified`
 * til true først når kilden er sjekket mot kommunens egne sider.
 */
export interface MunicipalInfo {
  name: string;
  /** Kort beskrivelse av hvor kommunen samler informasjon. */
  infoPoints: string;
  verified: boolean;
  source: string;
}

export const municipalities: Record<string, MunicipalInfo> = {
  'aurskog-høland': {
    name: 'Aurskog-Høland',
    infoPoints: 'Ved strømbrudd er informasjonspunktene på kommunens idrettsanlegg.',
    verified: false,
    source: 'Opplyst av innbygger — sjekk med Aurskog-Høland kommune',
  },
};

export const genericInfoPoint =
  'Ved langvarige brudd i strøm, mobilnett og internett oppretter mange kommuner informasjonspunkter, for eksempel på rådhus, skoler, idrettshaller eller brannstasjoner. Der kan du få informasjon, varme deg, lade telefonen og melde fra om behov for hjelp.';

export function municipalityInfo(name: string | undefined): MunicipalInfo | undefined {
  if (!name) return undefined;
  const key = name.trim().toLowerCase().replace(/\s+kommune$/, '').replace(/\s*-\s*/g, '-');
  return municipalities[key];
}
