import type { Article } from '../types';

/**
 * Leksikon – kommunikasjon, teknikk, hjemmet og samfunn.
 * Basert på råd fra DSB/egenberedskap.no, Sivilforsvaret, Nkom, NRK, DSA,
 * Helsedirektoratet/helsenorge.no, FHI, Mattilsynet, Politiet og Norsk Folkehjelp/DNT.
 */
export const articles: Article[] = [
  // ─── KOMMUNIKASJON ───────────────────────────────────────────────────────
  {
    id: 'nodvarsel',
    title: 'Nødvarsel på mobil',
    category: 'kommunikasjon',
    summary:
      'Myndighetene kan sende varsel direkte til alle mobiler i et område – uten app og uten at du må registrere deg.',
    tags: ['nødvarsel', 'mobilvarsel', 'cell broadcast', 'varsling', 'emergency alert', 'farevarsel', 'melding på mobil', 'befolkningsvarsling'],
    blocks: [
      {
        type: 'p',
        text: 'Nødvarsel er et system der myndighetene sender en melding til alle mobiltelefoner som er koblet til mobilnettet i et bestemt område. Meldingen kommer opp på skjermen med en egen, kraftig lyd. Den brukes når det er fare for liv og helse, for eksempel ved store branner, farlige utslipp, flom eller skred. DSB har ansvaret for systemet, og politiet er den viktigste avsenderen.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Krever app?', value: 'Nei' },
          { label: 'Krever registrering?', value: 'Nei – alle i området får det' },
          { label: 'Utenlandske telefoner', value: 'Får varselet hvis de er i et norsk nett' },
          { label: 'Testes', value: 'Kl. 12 andre onsdag i januar og juni, sammen med tyfonene' },
        ],
      },
      { type: 'h', text: 'Når du får et nødvarsel' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Les hele meldingen rolig. Den sier hva som skjer, hvor, og hva du skal gjøre.',
          'Følg rådene med en gang – for eksempel «gå inn, lukk vinduer» eller «forlat området».',
          'Varsle folk rundt deg som ikke har mobil, særlig eldre, barn og naboer.',
          'Søk mer informasjon på NRK (radio, TV, nett) og hos politiet og kommunen.',
          'Ikke ring 112 for å spørre om varselet. Ring bare hvis du selv trenger hjelp.',
        ],
      },
      {
        type: 'tip',
        title: 'Sjekk innstillingene',
        text: 'Under innstillinger for varsler / nødvarsler på telefonen kan noen nivåer slås av. La alle nødvarsler stå på. Varsler på det høyeste nivået kan ikke slås av.',
      },
      {
        type: 'warning',
        text: 'Nødvarsel krever at mobilnettet virker der du er. Er mobilen avslått, tom for strøm eller i flymodus, får du ikke varselet. Ha derfor også en batteridrevet radio.',
      },
      {
        type: 'p',
        text: 'Nødvarsel kommer i tillegg til tyfonene (sirenene), ikke i stedet for dem. Hører du sirenene, skal du alltid søke informasjon.',
      },
    ],
    related: ['tyfonsignaler', 'dab-og-fm', 'tette-boligen', 'evakuering-og-mottak'],
    source: 'DSB, Politiet',
  },
  {
    id: 'tyfonsignaler',
    title: 'Tyfonsignaler (sirenene)',
    category: 'kommunikasjon',
    summary:
      'Norge har tre sirenesignaler: «Viktig melding – søk informasjon», «Flyalarm» og «Faren over».',
    tags: ['tyfon', 'sirene', 'flyalarm', 'faren over', 'viktig melding', 'lytt på radio', 'air raid siren', 'alarm'],
    blocks: [
      {
        type: 'p',
        text: 'Sivilforsvaret har ansvar for tyfonene (sirenene) som varsler befolkningen. Lær deg de tre signalene – du har ikke tid til å slå dem opp når de går.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Viktig melding – søk informasjon', value: '3 serier à 3 støt, ett minutts opphold mellom seriene' },
          { label: 'Flyalarm', value: 'Korte støt i ca. ett minutt' },
          { label: 'Faren over', value: 'Ett sammenhengende støt i ca. 30 sekunder' },
          { label: 'Test', value: 'Kl. 12 andre onsdag i januar og juni' },
        ],
      },
      { type: 'h', text: '«Viktig melding – søk informasjon»' },
      {
        type: 'p',
        text: 'Signalet het tidligere «Viktig melding – lytt på radio». Det betyr at noe alvorlig har skjedd, for eksempel et gassutslipp eller en stor brann.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Gå innendørs hvis du er ute, og ta med barn og andre i nærheten.',
          'Lukk dører og vinduer, og slå av ventilasjonen hvis du ikke vet hva det gjelder.',
          'Søk informasjon: NRK radio (P1), NRK TV, nrk.no, politiets og kommunens kanaler, Nødvarsel på mobil.',
          'Følg rådene som blir gitt. Ikke ring 112 for å spørre.',
        ],
      },
      { type: 'h', text: '«Flyalarm»' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Søk dekning straks – i nærmeste tilfluktsrom, kjeller eller et rom midt i bygget uten vinduer.',
          'Hold deg unna vinduer og glassflater.',
          'Bli der til du hører «Faren over» eller får beskjed fra myndighetene.',
        ],
      },
      { type: 'h', text: '«Faren over»' },
      {
        type: 'p',
        text: 'Den akutte faren er over. Følg likevel med på informasjon fra myndighetene – det kan fortsatt gjelde råd, for eksempel om drikkevann eller områder du skal holde deg unna.',
      },
      {
        type: 'tip',
        title: 'Testen',
        text: 'Ved testen kl. 12 andre onsdag i januar og juni sendes «Viktig melding – søk informasjon». Da trenger du ikke gjøre noe. Hører du sirener på andre tidspunkter, er det alvor.',
      },
    ],
    related: ['nodvarsel', 'tilfluktsrom', 'tette-boligen', 'sivilforsvaret'],
    source: 'Sivilforsvaret / DSB',
  },
  {
    id: 'dab-og-fm',
    title: 'Radio i krise: DAB og FM',
    category: 'kommunikasjon',
    summary:
      'En batteri- eller sveivdrevet radio er den sikreste måten å få informasjon på når strøm, mobil og internett svikter.',
    tags: ['radio', 'DAB', 'FM', 'NRK P1', 'batteriradio', 'sveiveradio', 'nyheter', 'emergency radio', 'bilradio'],
    blocks: [
      {
        type: 'p',
        text: 'NRK har et særlig ansvar for å formidle beredskapsmeldinger fra myndighetene. Radioen trenger lite strøm, når frem selv når mobilnettet er overbelastet, og fungerer uten internett. DSB anbefaler derfor at alle husstander har en radio som går på batteri.',
      },
      { type: 'h', text: 'Velg riktig radio' },
      {
        type: 'list',
        items: [
          'DAB+ er hovedplattformen for riksdekkende radio i Norge. Sørg for at radioen kan ta inn DAB+, ikke bare gammel DAB.',
          'FM brukes fortsatt av mange lokalradioer. En radio med både DAB+ og FM gir flest muligheter.',
          'Velg en modell som går på vanlige batterier (AA/AAA), gjerne også med sveiv eller solcelle.',
          'Bilradioen er en god reserve – men pass på bilbatteriet, og kjør aldri motoren i lukket rom.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Beredskapskanal', value: 'NRK P1 (DAB+, nett, TV)' },
          { label: 'Strømforbruk', value: 'Lavt – batterier varer ofte mange timer' },
          { label: 'Lagre ved siden av', value: 'Ekstra batterier i riktig størrelse' },
        ],
      },
      {
        type: 'tip',
        title: 'Test nå, ikke i krisen',
        text: 'Finn frem radioen, sett inn batterier og søk opp kanalene der du bor. Lagre NRK P1 og en lokal kanal som favoritter. Skriv ned frekvensene på en lapp i radioen.',
      },
      {
        type: 'p',
        text: 'Dekningen kan være dårlig innendørs og i kjellere. Flytt deg nær et vindu, trekk ut antennen helt, og prøv ulike retninger.',
      },
      {
        type: 'warning',
        text: 'Ta ut batteriene hvis radioen skal lagres lenge. Batterier som lekker kan ødelegge radioen.',
      },
    ],
    related: ['batterier', 'tyfonsignaler', 'nodvarsel', 'desinformasjon'],
    source: 'DSB / egenberedskap.no, NRK',
  },
  {
    id: 'nodnett',
    title: 'Nødnett',
    category: 'kommunikasjon',
    summary:
      'Nødnett er nød- og beredskapsetatenes eget radiosamband – det er ikke tilgjengelig for publikum, men gjør at hjelpen kan samarbeide når mobilnettet faller ut.',
    tags: ['nødnett', 'TETRA', 'samband', 'nødetater', 'politi', 'brannvesen', 'ambulanse', 'emergency network'],
    blocks: [
      {
        type: 'p',
        text: 'Nødnett er et eget, digitalt radiosamband for politi, brann- og redningsvesen, helsetjenesten og andre beredskapsaktører. DSB har ansvaret for driften. Nettet er bygget for å tåle mer enn det vanlige mobilnettet og er kryptert.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Brukere', value: 'Politi, brann, helse, Sivilforsvaret, frivillige redningsorganisasjoner m.fl.' },
          { label: 'Teknologi', value: 'TETRA (digital, kryptert)' },
          { label: 'Publikum', value: 'Kan ikke bruke Nødnett' },
        ],
      },
      { type: 'h', text: 'Hva betyr det for deg?' },
      {
        type: 'list',
        items: [
          'Du når nødetatene via 110, 112 og 113 over vanlig telefon – ikke via Nødnett.',
          'Hvis mobilnettet faller ut, kan nødetatene fortsatt snakke sammen. Du må likevel få varslet dem.',
          'Uten telefon: gå til nærmeste brannstasjon, politi, legevakt eller et sted der kommunen har satt opp informasjonspunkt.',
          'Ser du utrykningskjøretøy eller mannskaper fra Sivilforsvaret eller frivillige, kan de melde fra videre.',
        ],
      },
      {
        type: 'warning',
        text: 'Nødnett har også grenser – ved langvarig strømbrudd kan deler av nettet falle ut når reservestrømmen tar slutt. Ikke regn med at hjelpen er raskt fremme i en stor krise.',
      },
      {
        type: 'tip',
        text: 'Lag en plan for hvordan du varsler om noe skjer uten mobil: Hvem i nærheten har fasttelefon, satellittutstyr eller bil? Hvor er nærmeste bemannede brannstasjon?',
      },
    ],
    related: ['sms-og-overbelastning', 'kommunens-beredskap', 'familieplan'],
    source: 'DSB',
  },
  {
    id: 'sms-og-overbelastning',
    title: 'Når mobilnettet er overbelastet',
    category: 'kommunikasjon',
    summary:
      'Send SMS i stedet for å ringe, hold samtalene korte og spar batteriet – da øker sjansen for at både du og nødsamtalene kommer gjennom.',
    tags: ['SMS', 'tekstmelding', 'mobilnett', 'overbelastning', 'ingen dekning', 'basestasjon', 'network congestion', 'batterisparing'],
    blocks: [
      {
        type: 'p',
        text: 'Ved store hendelser prøver alle å ringe samtidig, og nettet går fullt. Ved strømbrudd har mange basestasjoner bare reservestrøm i begrenset tid. SMS bruker svært lite kapasitet og blir liggende i kø til den kommer frem.',
      },
      { type: 'h', text: 'Slik kommuniserer du smart' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Send én kort SMS til de viktigste: «Er OK. Hjemme. Mer kl. 18.»',
          'Ring bare når det er nødvendig, og hold samtalen under ett minutt.',
          'Ikke ring 112/113/110 for å få informasjon – det blokkerer linjer for folk i nød.',
          'Avtal faste tidspunkter for å slå på telefonen og sjekke meldinger.',
          'Fungerer mobildata, men ikke tale: prøv meldingsapper.',
          'Fungerer ingenting: følg familieplanen og møt opp på avtalt sted.',
        ],
      },
      { type: 'h', text: 'Spar batteriet' },
      {
        type: 'list',
        items: [
          'Slå på strømsparingsmodus og senk lysstyrken.',
          'Slå av Bluetooth, wifi og posisjon når du ikke trenger dem.',
          'Har du ikke dekning, leter telefonen etter nett og tømmes raskt. Bruk flymodus og slå den på med jevne mellomrom.',
          'Hold telefonen varm (innerlomme). Kulde tømmer batteriet.',
        ],
      },
      {
        type: 'tip',
        title: 'Nødsamtaler',
        text: 'Nødnumrene 110, 112 og 113 kan ofte kobles via et annet operatørnett hvis ditt eget er nede. Prøv alltid å ringe nødnummer selv om telefonen viser at du ikke har dekning hos din operatør.',
      },
      {
        type: 'warning',
        text: 'Ha viktige telefonnumre skrevet ned på papir. En tom telefon gir deg ikke tilgang til kontaktlisten.',
      },
    ],
    related: ['strombank', 'familieplan', 'nodvarsel', 'dab-og-fm'],
    source: 'Nkom, DSB / egenberedskap.no',
  },
  {
    id: 'morsekode',
    title: 'Morsekode',
    category: 'kommunikasjon',
    summary:
      'Morse kan sendes med lys, lyd eller banking – og SOS (· · · – – – · · ·) forstås over hele verden.',
    tags: ['morse', 'SOS', 'morsealfabet', 'signal', 'lommelykt', 'banking', 'morse code', 'kode'],
    blocks: [
      {
        type: 'p',
        text: 'Morsekode består av korte (·) og lange (–) signaler. Det er tregt, men virker med svært enkle midler: lommelykt, speil, fløyte, bilhorn eller banking på et rør eller en vegg.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Kort signal (·)', value: '1 tidsenhet' },
          { label: 'Langt signal (–)', value: '3 tidsenheter' },
          { label: 'Pause inne i en bokstav', value: '1 enhet' },
          { label: 'Pause mellom bokstaver', value: '3 enheter' },
          { label: 'Pause mellom ord', value: '7 enheter' },
          { label: 'SOS', value: '· · · – – – · · · (sendes uten pause mellom bokstavene)' },
        ],
      },
      { type: 'h', text: 'Alfabetet' },
      {
        type: 'facts',
        items: [
          { label: 'A', value: '· –' },
          { label: 'B', value: '– · · ·' },
          { label: 'C', value: '– · – ·' },
          { label: 'D', value: '– · ·' },
          { label: 'E', value: '·' },
          { label: 'F', value: '· · – ·' },
          { label: 'G', value: '– – ·' },
          { label: 'H', value: '· · · ·' },
          { label: 'I', value: '· ·' },
          { label: 'J', value: '· – – –' },
          { label: 'K', value: '– · –' },
          { label: 'L', value: '· – · ·' },
          { label: 'M', value: '– –' },
          { label: 'N', value: '– ·' },
          { label: 'O', value: '– – –' },
          { label: 'P', value: '· – – ·' },
          { label: 'Q', value: '– – · –' },
          { label: 'R', value: '· – ·' },
          { label: 'S', value: '· · ·' },
          { label: 'T', value: '–' },
          { label: 'U', value: '· · –' },
          { label: 'V', value: '· · · –' },
          { label: 'W', value: '· – –' },
          { label: 'X', value: '– · · –' },
          { label: 'Y', value: '– · – –' },
          { label: 'Z', value: '– – · ·' },
        ],
      },
      {
        type: 'facts',
        items: [
          { label: '1', value: '· – – – –' },
          { label: '2', value: '· · – – –' },
          { label: '3', value: '· · · – –' },
          { label: '4', value: '· · · · –' },
          { label: '5', value: '· · · · ·' },
          { label: '6', value: '– · · · ·' },
          { label: '7', value: '– – · · ·' },
          { label: '8', value: '– – – · ·' },
          { label: '9', value: '– – – – ·' },
          { label: '0', value: '– – – – –' },
        ],
      },
      {
        type: 'tip',
        title: 'Husk SOS',
        text: 'Du trenger ikke kunne hele alfabetet. Lær deg SOS: tre korte, tre lange, tre korte – pause – gjenta. Med lommelykt: ca. ett sekund for lange blink, kort blink for prikker.',
      },
      {
        type: 'p',
        text: 'Er du innestengt, for eksempel under rasmasser, kan du banke SOS på rør eller vegger. Lyden går langt i metall og betong. Bank med jevne pauser, og spar kreftene.',
      },
    ],
    related: ['nodsignaler', 'satellitt-nodmelding', 'amatorradio'],
    source: 'Den internasjonale telekommunikasjonsunionen (ITU) – internasjonal morsekode',
  },
  {
    id: 'nodsignaler',
    title: 'Nødsignaler uten telefon',
    category: 'kommunikasjon',
    summary:
      'Tre av noe, seks signaler i minuttet, SOS og kroppssignaler forteller redningsmannskaper at du trenger hjelp.',
    tags: ['nødsignal', 'SOS', 'fjellnødsignal', 'signalspeil', 'fløyte', 'helikopter', 'distress signal', 'bli funnet', 'nødbluss'],
    blocks: [
      {
        type: 'p',
        text: 'Når du ikke kan ringe, må du gjøre deg synlig og hørbar. Gjentakelse og kontrast er nøkkelen – noe som skiller seg tydelig fra naturen rundt deg.',
      },
      { type: 'h', text: 'Lyd og lys' },
      {
        type: 'list',
        items: [
          'Det internasjonale fjellnødsignalet: 6 signaler i løpet av ett minutt (fløyte, lys, rop), så ett minutts pause, gjenta. Svaret er 3 signaler i minuttet.',
          'Tre av noe – tre bål, tre fløytestøt, tre blink – er et allment kjent nødsignal.',
          'SOS i morse: · · · – – – · · ·',
          'En fløyte høres mye lenger enn stemmen og koster lite krefter. Ha alltid en på jakken eller sekken.',
          'Signalspeil eller blank flate kan sees på mange kilometers avstand i sol. Sikt mot fly, båt eller helikopter.',
        ],
      },
      { type: 'h', text: 'Signaler til helikopter' },
      {
        type: 'list',
        items: [
          'Begge armer opp i en Y: «Ja / vi trenger hjelp – land her».',
          'Én arm opp og én ned (diagonalt): «Nei / vi trenger ikke hjelp».',
          'Legg ut store symboler på bakken med kontrastfarge (granbar på snø, steiner på gress): V = trenger hjelp, X = trenger medisinsk hjelp.',
          'Ikke vift med armene til et helikopter som bare flyr forbi hvis du ikke trenger hjelp – det kan misforstås.',
        ],
      },
      {
        type: 'tip',
        title: 'Bli der du er',
        text: 'Har du gått deg vill eller er skadet, er det oftest best å bli på stedet, gjøre deg synlig og holde deg varm. Det er lettere å finne noen som står i ro.',
      },
      {
        type: 'warning',
        text: 'Signalbål og nødbluss kan starte brann. Følg med på skogbrannfaren, og ha kontroll på bålet. På sjøen er røde nødbluss et offisielt nødsignal – bruk dem bare i reell nød.',
      },
      {
        type: 'p',
        text: 'Kan du ringe, er 112 alltid førstevalget. Gi posisjon, hva som har skjedd og hvor mange dere er.',
      },
    ],
    related: ['morsekode', 'gi-posisjon', 'satellitt-nodmelding', 'fjellvettreglene'],
    source: 'DNT / Fjellvettreglene, Hovedredningssentralen',
  },
  {
    id: 'pmr446',
    title: 'Walkie-talkie (PMR446)',
    category: 'kommunikasjon',
    summary:
      'Lisensfrie PMR446-radioer lar familien og nabolaget snakke sammen over korte avstander uten mobilnett.',
    tags: ['walkie-talkie', 'PMR', 'PMR446', 'jaktradio', 'komradio', 'lisensfri radio', 'two-way radio', 'samband'],
    blocks: [
      {
        type: 'p',
        text: 'PMR446 er lisensfrie radioer som er tillatt i hele Europa. De er rimelige, enkle å bruke og trenger ikke mobilnett. De passer godt til å holde kontakt i nabolaget, på hytta eller mellom biler i samme følge.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Frekvens', value: '446 MHz' },
          { label: 'Lisens', value: 'Ikke nødvendig' },
          { label: 'Maks sendeeffekt', value: '0,5 W (fast antenne)' },
          { label: 'Rekkevidde i praksis', value: 'Noen hundre meter i by – opptil flere km i åpent terreng' },
        ],
      },
      { type: 'h', text: 'Slik bruker du den' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Avtal kanal og eventuelt underkanal (kode) på forhånd, og skriv det ned.',
          'Trykk inn sendeknappen, vent et halvt sekund, og snakk rolig.',
          'Si hvem du roper på og hvem du er: «Kari, dette er Ola».',
          'Avslutt med «over» når du venter svar. Bare én kan snakke om gangen.',
          'Avtal faste tider for kontakt for å spare batteri.',
        ],
      },
      {
        type: 'warning',
        title: 'Ikke en nødkanal',
        text: 'Ingen redningstjeneste lytter fast på PMR446. Bruk telefon (112) for å tilkalle hjelp. Kanalene er åpne – alle kan høre det du sier, også med «kode».',
      },
      {
        type: 'tip',
        title: 'Få lengre rekkevidde',
        text: 'Gå høyt, gjerne til et vindu eller ut på en høyde. Hold antennen loddrett. Metall, betong og terreng mellom radioene stjeler rekkevidde.',
      },
      {
        type: 'p',
        text: 'På sjøen er maritim VHF kanal 16 nød- og anropskanalen. Den lyttes på av kystradioen. Bruk av maritim VHF krever sertifikat, men i nød kan du bruke den for å tilkalle hjelp.',
      },
    ],
    related: ['amatorradio', 'familieplan', 'batterier'],
    source: 'Nkom',
  },
  {
    id: 'amatorradio',
    title: 'Amatørradio',
    category: 'kommunikasjon',
    summary:
      'Radioamatører kan kommunisere over store avstander uten mobilnett og internett – men du må ha lisens for å sende.',
    tags: ['amatørradio', 'radioamatør', 'ham radio', 'kortbølge', 'HF', 'VHF', 'lisens', 'NRRL'],
    blocks: [
      {
        type: 'p',
        text: 'Amatørradio er en hobby med lang tradisjon for å hjelpe til i kriser. Med kortbølge (HF) kan du nå andre landsdeler og land uten noen infrastruktur mellom, bare radio, antenne og strøm.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Lisens', value: 'Kreves for å sende – prøve og lisens via Nkom' },
          { label: 'Lytte', value: 'Alle kan lytte' },
          { label: 'Organisasjon', value: 'Norsk Radio Relæ Liga (NRRL)' },
          { label: 'Strøm', value: '12 V – kan drives fra bilbatteri eller solcelle' },
        ],
      },
      { type: 'h', text: 'Kom i gang' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Ta kontakt med en lokal radioamatørklubb. Mange holder kurs.',
          'Ta lisensprøven. Da får du eget kallesignal.',
          'Start med en enkel håndholdt VHF/UHF-radio og lær prosedyrene.',
          'Bygg ut med HF-utstyr og antenne når du vil nå lenger.',
          'Øv på å drive stasjonen på batteri, slik at du er klar ved strømbrudd.',
        ],
      },
      {
        type: 'tip',
        title: 'Lytt allerede nå',
        text: 'En rimelig mottaker med kortbølge lar deg lytte på både amatører og internasjonale kringkastere. Det krever ingen lisens og kan gi nyheter når annet faller ut.',
      },
      {
        type: 'warning',
        text: 'Ikke send på amatørfrekvenser uten lisens. Feil bruk kan forstyrre nødtrafikk. I en akutt nødsituasjon gjelder egne regler, men 112 og andre nødkanaler skal alltid prøves først.',
      },
    ],
    related: ['pmr446', 'morsekode', 'bilbatteri', 'solcellelader'],
    source: 'Nkom, Norsk Radio Relæ Liga',
  },
  {
    id: 'satellitt-nodmelding',
    title: 'Nødmelding via satellitt',
    category: 'kommunikasjon',
    summary:
      'Nødpeilesender (PLB), satellittmeldere og nyere mobiler kan varsle redningstjenesten der det ikke finnes mobildekning.',
    tags: ['satellitt', 'PLB', 'nødpeilesender', 'inReach', 'SOS via satellitt', 'Cospas-Sarsat', 'satellite messenger', 'fjellet'],
    blocks: [
      {
        type: 'p',
        text: 'I store deler av fjellet, på havet og etter store hendelser finnes det ikke mobildekning. Da kan utstyr som sender via satellitt være det eneste som får hjelpen frem.',
      },
      { type: 'h', text: 'Typer utstyr' },
      {
        type: 'list',
        items: [
          'Nødpeilesender (PLB): Sender nødsignal og posisjon via det internasjonale Cospas-Sarsat-systemet til redningstjenesten. Ingen abonnement. Kan bare sende «nød», ikke meldinger.',
          'Satellittmelder (f.eks. inReach og lignende): Kan sende SOS og ofte toveis tekstmeldinger. Krever abonnement.',
          'Mobil med satellitt-SOS: Noen nyere telefoner kan sende nødmelding via satellitt. Hvilke land tjenesten virker i, varierer – sjekk før du stoler på den.',
        ],
      },
      { type: 'h', text: 'Slik bruker du en PLB' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Gå ut i åpent lende med fri sikt mot himmelen.',
          'Trekk ut antennen helt og hold den loddrett.',
          'Aktiver etter bruksanvisningen. La den stå på – ikke slå av for å «sjekke».',
          'Gjør deg synlig og forbered deg på at det kan ta tid før hjelpen er fremme.',
        ],
      },
      {
        type: 'warning',
        title: 'Registrer utstyret',
        text: 'En PLB skal registreres slik at redningstjenesten vet hvem den tilhører og hvem de kan kontakte. Følg anvisningen fra forhandleren. Bruk den bare i reell nød – falske alarmer setter i gang dyre søk.',
      },
      {
        type: 'tip',
        text: 'Test satellittmelderen og telefonens satellittfunksjon hjemme før turen (mange har en testmodus). Hold batteriet fulladet og varmt.',
      },
    ],
    related: ['nodsignaler', 'gi-posisjon', 'gps-og-batteri', 'fjellvettreglene'],
    source: 'Hovedredningssentralen, Nkom, DNT',
  },

  // ─── TEKNIKK ─────────────────────────────────────────────────────────────
  {
    id: 'knuter',
    title: 'Fem knuter du bør kunne',
    category: 'teknikk',
    summary:
      'Pålestikk, dobbelt halvstikk, teltstrammer, flaggstikk og råbåndsknop dekker nesten alt du trenger ute og hjemme.',
    tags: ['knute', 'knop', 'stikk', 'pålestikk', 'tau', 'surring', 'knots', 'presenning'],
    blocks: [
      {
        type: 'p',
        text: 'En god knute er lett å knyte, holder under belastning og er lett å løse etterpå. Øv til du kan dem med kalde fingre og i mørket.',
      },
      { type: 'h', text: 'Pålestikk – fast løkke som ikke glir' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Lag en liten løkke («hullet») på den faste delen av tauet, med enden over.',
          'Før enden opp gjennom hullet nedenfra («ut av brønnen»).',
          'Før enden rundt bak den faste delen («rundt treet»).',
          'Før enden ned igjen gjennom hullet («tilbake i brønnen»).',
          'Hold enden og løkken, og trekk den faste delen stramt.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Pålestikk', value: 'Fast løkke – redning, fortøyning, feste rundt tre' },
          { label: 'Dobbelt halvstikk', value: 'Feste tau til stolpe, ring eller gren' },
          { label: 'Teltstrammer (taut-line hitch)', value: 'Justerbar bardun på telt og presenning' },
          { label: 'Flaggstikk', value: 'Skjøte to tau, også ulik tykkelse' },
          { label: 'Råbåndsknop', value: 'Knyte bandasje, binde sammen ender av samme tau' },
        ],
      },
      { type: 'h', text: 'Dobbelt halvstikk' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Før enden rundt stolpen.',
          'Før enden rundt den faste delen og inn under seg selv (første halvstikk).',
          'Gjør det samme én gang til i samme retning (andre halvstikk).',
          'Skyv stikkene inntil hverandre og stram.',
        ],
      },
      { type: 'h', text: 'Teltstrammer' },
      {
        type: 'p',
        text: 'Før tauet rundt pluggen og tilbake langs seg selv. Legg to tørn rundt den faste delen innover mot løkken, så ett tørn utenfor. Stram. Knuten kan skyves for å stramme eller slakke barduen, men holder når den er belastet.',
      },
      {
        type: 'warning',
        text: 'Råbåndsknop er ikke sikker for å skjøte tau under belastning – den kan gli opp. Bruk flaggstikk (gjerne dobbelt) til skjøting. Bruk aldri hjemmelagde knuter til klatring eller sikring av personer uten opplæring.',
      },
      {
        type: 'tip',
        text: 'Ha 15–20 meter med 3–5 mm parasnor eller annet tynt, sterkt tau i beredskapslageret og i tursekken. Det brukes til ly, tørkesnor, surring og reparasjoner.',
      },
    ],
    related: ['nodly-presenning', 'multiverktoy', 'gaffateip'],
    source: 'DNT / Norsk Friluftsliv, Speiderforbundet',
  },
  {
    id: 'multiverktoy',
    title: 'Kniv og multiverktøy',
    category: 'teknikk',
    summary:
      'En god kniv og et multiverktøy løser hundrevis av oppgaver – men du må vite hvor og når du har lov til å bære dem.',
    tags: ['kniv', 'tollekniv', 'multiverktøy', 'multitool', 'leatherman', 'verktøy', 'knife', 'sag'],
    blocks: [
      {
        type: 'p',
        text: 'I en krise må du ofte reparere, kutte, skru og lage ting selv. Et lite, solid verktøysett hjemme og en kniv på tur gjør deg langt mer selvhjulpen.',
      },
      { type: 'h', text: 'Grunnsett hjemme' },
      {
        type: 'list',
        items: [
          'Multiverktøy med tang, kniv, skrutrekkere og boksåpner.',
          'Fast kniv (tollekniv/friluftskniv) til ved og matlaging.',
          'Sag (foldesag eller baufil) og øks for ved.',
          'Skrutrekkersett, hammer, skiftenøkkel/rørtang til vannkraner.',
          'Gaffateip, strips, ståltråd og tau.',
          'Hodelykt med ekstra batterier.',
        ],
      },
      {
        type: 'warning',
        title: 'Loven om kniv',
        text: 'Det er forbudt å bære kniv eller andre skarpe redskaper på offentlig sted uten aktverdig grunn. Friluftsliv, jakt, fiske og arbeid er aktverdige grunner. Har du det med til slikt, oppbevar det i sekken eller bilen, ikke synlig i beltet i byen.',
      },
      { type: 'h', text: 'Sikker knivbruk' },
      {
        type: 'list',
        items: [
          'Skjær alltid bort fra deg selv og andre. Ha en «sikker sone» rundt deg på en armlengde pluss knivlengde.',
          'En skarp kniv er tryggere enn en sløv – den sklir mindre.',
          'Lukk eller slir kniven når du ikke bruker den.',
          'Ved kutt: trykk direkte på såret og hold høyt. Ring 113 ved kraftig blødning.',
        ],
      },
      {
        type: 'tip',
        text: 'Velg verktøy du kjenner. Et dyrt multiverktøy som ligger ubrukt i skuffen hjelper lite. Bruk det i hverdagen, så vet du hva det kan.',
      },
    ],
    related: ['knuter', 'gaffateip', 'vedfyring', 'kraftig-blodning'],
    source: 'Politiet, DNT',
  },
  {
    id: 'gaffateip',
    title: 'Gaffateip og strips',
    category: 'teknikk',
    summary:
      'Gaffateip, strips og ståltråd er de billigste reparasjonsverktøyene du kan ha – fra å tette et vindu til å lappe en presenning.',
    tags: ['gaffateip', 'duct tape', 'teip', 'strips', 'buntebånd', 'ståltråd', 'reparasjon', 'lapping'],
    blocks: [
      {
        type: 'p',
        text: 'Mye av det som går i stykker i en krise, kan holdes sammen midlertidig til du får fikset det ordentlig. Gaffateip er sterk, vanntett på overflaten og kan rives for hånd.',
      },
      { type: 'h', text: 'Nyttige bruksområder' },
      {
        type: 'list',
        items: [
          'Tette et knust vindu med plast eller presenning og teip.',
          'Tette ventiler og sprekker ved «gå inn, lukk vinduer»-varsel (sammen med plast).',
          'Lappe telt, presenning, regntøy og sekk.',
          'Midlertidig reparasjon av slange eller rør med lite trykk.',
          'Merke vannkanner, mat og medisiner med dato.',
          'Forebygge gnagsår: teip på huden der det begynner å gnage (på hel hud).',
        ],
      },
      {
        type: 'tip',
        title: 'Spar plass',
        text: 'Vikle et par meter gaffateip rundt en vannflaske, en lighter eller en blyant. Da har du alltid litt med i sekken uten en hel rull.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Gaffateip', value: 'Sterk, rives for hånd, tåler fukt' },
          { label: 'Strips (buntebånd)', value: 'Feste, samle, reparere – ha ulike lengder' },
          { label: 'Ståltråd', value: 'Tåler varme – brukes der teip smelter' },
          { label: 'Plastfolie / byggplast', value: 'Tette vinduer og lage ly sammen med teip' },
        ],
      },
      {
        type: 'warning',
        text: 'Ikke bruk teip til å tette gasslekkasjer eller elektriske skader. Teip på åpne sår kan gi infeksjon – bruk sterile kompresser og plaster.',
      },
    ],
    related: ['tette-boligen', 'multiverktoy', 'knuter', 'vannlekkasje'],
    source: 'DSB / egenberedskap.no, DNT',
  },
  {
    id: 'batterier',
    title: 'Batterier: typer og lagring',
    category: 'teknikk',
    summary:
      'Velg riktige batterier til radio og lykter, lagre dem kjølig og tørt, og ta dem ut av utstyret som skal stå lenge.',
    tags: ['batteri', 'AA', 'AAA', 'litium', 'alkalisk', 'oppladbare', 'NiMH', 'batteries', 'lagring'],
    blocks: [
      {
        type: 'p',
        text: 'Radio, lommelykt og hodelykt er verdiløse uten strøm. DSB anbefaler å ha batterier i beredskapslageret. Sørg for at du har riktig størrelse til alt utstyret.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Alkaliske', value: 'Billige, lang lagringstid – kan lekke, svake i kulde' },
          { label: 'Litium (engangs)', value: 'Svært lang lagringstid, gode i kulde, dyrere' },
          { label: 'Oppladbare NiMH (lav selvutlading)', value: 'Kan lades fra sol/strømbank, holder ladning godt' },
          { label: 'Holdbarhet', value: 'Se datoen på pakken' },
        ],
      },
      { type: 'h', text: 'Slik lagrer du batterier' },
      {
        type: 'list',
        items: [
          'Kjølig, tørt og i romtemperatur eller lavere – ikke i varme boder eller i solen.',
          'I originalemballasje eller boks, slik at polene ikke kommer i kontakt med metall.',
          'Ta batteriene ut av utstyr som skal lagres lenge. Legg dem i en pose ved siden av.',
          'Bytt ut og bruk de eldste først (først inn – først ut).',
        ],
      },
      {
        type: 'warning',
        text: 'Ikke bland nye og gamle batterier eller ulike typer i samme apparat. Ikke prøv å lade engangsbatterier. Batterier som har lekket, skal håndteres med hansker og leveres som farlig avfall.',
      },
      {
        type: 'tip',
        title: 'Standardiser',
        text: 'Velg lykter og radio som bruker samme batteristørrelse, helst AA. Da trenger du bare ett lager.',
      },
      {
        type: 'p',
        text: 'I kulde gir batteriene mindre strøm. Hold ekstra batterier i en innerlomme og bytt når lyset blir svakt – de kalde kan ofte brukes igjen når de er varmet opp.',
      },
    ],
    related: ['strombank', 'solcellelader', 'dab-og-fm', 'avfall'],
    source: 'DSB / egenberedskap.no',
  },
  {
    id: 'solcellelader',
    title: 'Solcellelader',
    category: 'teknikk',
    summary:
      'Et sammenleggbart solcellepanel kan lade telefon, radio og strømbank – men i norsk vinter gir det lite strøm.',
    tags: ['solcelle', 'solcellepanel', 'solar', 'lading', 'solar charger', 'USB', 'strøm', 'fornybar'],
    blocks: [
      {
        type: 'p',
        text: 'En solcellelader gjør deg uavhengig av strømnettet så lenge det er dagslys. Effekten avhenger sterkt av årstid, vær, vinkel og skygge.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Sommer, sol', value: 'Panelet gir nær oppgitt effekt' },
          { label: 'Overskyet', value: 'Ofte bare en liten del av effekten' },
          { label: 'Vinter i Nord-Norge', value: 'Lite eller ingenting i mørketiden' },
          { label: 'Fornuftig størrelse', value: 'Ca. 20 W eller mer for telefon og strømbank' },
        ],
      },
      { type: 'h', text: 'Få mest mulig ut av panelet' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Rett panelet direkte mot solen, og juster vinkelen et par ganger om dagen.',
          'Unngå all skygge – selv en liten skygge kan kutte effekten kraftig.',
          'Lad en strømbank, ikke telefonen direkte. Da jevnes strømmen ut når skyer kommer og går.',
          'Hold strømbanken og telefonen i skyggen mens den lader. Varme er skadelig for batterier.',
          'Hold panelet rent for støv, snø og is.',
        ],
      },
      {
        type: 'tip',
        title: 'Bak glass',
        text: 'Panelet virker bak et vindu, men gir mindre. Ute er bedre. Fest det godt, så det ikke blåser bort.',
      },
      {
        type: 'warning',
        text: 'Ikke regn med solcellelader som eneste strømkilde i vinterhalvåret. Kombiner med strømbanker, batterier og en radio med sveiv.',
      },
    ],
    related: ['strombank', 'batterier', 'bilbatteri', 'aggregat'],
    source: 'DSB / egenberedskap.no',
  },
  {
    id: 'strombank',
    title: 'Strømbank (powerbank)',
    category: 'teknikk',
    summary:
      'En fulladet strømbank holder telefonen i live i flere døgn – lær deg å regne kapasitet og ta vare på den.',
    tags: ['strømbank', 'powerbank', 'batteripakke', 'lading', 'mAh', 'mobil', 'portable charger', 'lader'],
    blocks: [
      {
        type: 'p',
        text: 'Mobilen er lommelykt, radio, kart og kontakt med familien. En strømbank er den enkleste måten å holde den i gang ved strømbrudd.',
      },
      {
        type: 'facts',
        items: [
          { label: '10 000 mAh', value: 'Ca. 2 fulle lader av en vanlig mobil' },
          { label: '20 000 mAh', value: 'Ca. 4 lader' },
          { label: 'Reelt tap ved lading', value: 'Regn med at en del av kapasiteten går tapt' },
          { label: 'Lagringsladning', value: 'Ikke helt tom og ikke stående på 100 % i lang tid' },
        ],
      },
      { type: 'h', text: 'Ta vare på strømbanken' },
      {
        type: 'list',
        items: [
          'Lad den opp hver 3.–6. måned selv om den ikke er brukt.',
          'Oppbevar den i romtemperatur. Kulde gir lavere kapasitet, varme ødelegger batteriet.',
          'Fullad alle strømbanker straks du får farevarsel om uvær.',
          'Ha riktige kabler til alle enheter (USB-C, Lightning, micro-USB) festet til strømbanken.',
        ],
      },
      {
        type: 'warning',
        title: 'Brannfare',
        text: 'Litiumbatterier som er skadet, oppsvulmet eller blir svært varme kan ta fyr. Ikke lad dem uten tilsyn, ikke under puter eller i sengen, og kast oppsvulmede batterier som farlig avfall.',
      },
      {
        type: 'tip',
        text: 'Lad strømbanken fra bilen (USB i bilen), solcellepanel eller hos naboen med aggregat. Mens strømmen er borte: lad bare når telefonen er nede på 20–30 %.',
      },
    ],
    related: ['solcellelader', 'sms-og-overbelastning', 'batterier', 'gps-og-batteri'],
    source: 'DSB / egenberedskap.no',
  },
  {
    id: 'bilbatteri',
    title: 'Bilen som strømkilde',
    category: 'teknikk',
    summary:
      'Bilen kan lade telefoner og drive små apparater ved strømbrudd – men aldri med motoren i gang i garasje eller lukket rom.',
    tags: ['bil', 'bilbatteri', '12 V', 'inverter', 'omformer', 'elbil', 'car battery', 'lading'],
    blocks: [
      {
        type: 'p',
        text: 'Et vanlig bilbatteri inneholder nok energi til å lade mange telefoner og drive radio og lys i lang tid. Mange elbiler kan også gi strøm ut via 12 V-uttak, USB eller egne adaptere.',
      },
      { type: 'h', text: 'Slik bruker du bilen' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Parker bilen ute i fri luft – aldri i garasje, låve eller tett inntil husvegg med vinduer.',
          'Lad telefoner og strømbanker via USB eller 12 V-uttaket.',
          'Til litt større apparater: bruk en omformer (inverter) 12 V → 230 V. Små omformere kan stå i 12 V-uttaket, større må kobles direkte til batteriet.',
          'Start motoren en stund med jevne mellomrom, slik at batteriet lades opp igjen og bilen fortsatt starter.',
          'Følg med på drivstoff. Tom tank betyr at du ikke kommer deg bort ved evakuering.',
        ],
      },
      {
        type: 'warning',
        title: 'Kullos dreper',
        text: 'Eksos inneholder karbonmonoksid (CO) – en luktfri gass som kan drepe. Kjør aldri motoren i garasje, selv med åpen port. Hodepine, svimmelhet og kvalme kan være tegn på kullosforgiftning: kom deg ut i frisk luft og ring 113.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Telefonlading', value: 'Bruker svært lite av batteriet' },
          { label: '12 V-uttak', value: 'Tåler som regel bare små laster – se bilens manual' },
          { label: 'Varmeovner, kokeplater', value: 'Bruker for mye strøm for et bilbatteri' },
        ],
      },
      {
        type: 'tip',
        text: 'Ikke tapp bilbatteriet helt tomt – da starter ikke bilen, og batteriet kan bli skadet. Ha startkabler eller en starthjelp (booster) i bilen.',
      },
    ],
    related: ['kullos', 'strombank', 'aggregat', 'evakuering-og-mottak'],
    source: 'DSB / egenberedskap.no, Helsedirektoratet',
  },
  {
    id: 'vannlekkasje',
    title: 'Vannlekkasje og frosne rør',
    category: 'teknikk',
    summary:
      'Vit hvor hovedstoppekranen er og hvordan du stenger den – og tapp ned rørene hvis huset blir kaldt over tid.',
    tags: ['vannlekkasje', 'stoppekran', 'hovedkran', 'rørbrudd', 'frosne rør', 'vannskade', 'water leak', 'tappe ned'],
    blocks: [
      {
        type: 'p',
        text: 'Et rørbrudd kan gi store skader på kort tid. Ved strømbrudd om vinteren kan rørene fryse og sprekke. Å stenge vannet raskt er det viktigste du kan gjøre.',
      },
      { type: 'h', text: 'Ved lekkasje' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Steng hovedstoppekranen (se under).',
          'Er det vann nær elektriske kontakter, apparater eller sikringsskap: slå av strømmen på hovedbryteren hvis du kan gjøre det tørt og trygt.',
          'Fjern vann og flytt verdisaker. Åpne kraner for å tømme trykket i rørene.',
          'Ta bilder til forsikringen, og kontakt rørlegger og forsikringsselskap.',
          'I borettslag og sameie: varsle styret eller vaktmester, og naboer under deg.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Hovedstoppekran ofte i', value: 'Kjeller, vaskerom, teknisk rom, bad eller under kjøkkenbenken' },
          { label: 'Steng', value: 'Med klokka (høyre)' },
          { label: 'Leilighet', value: 'Har ofte egen kran for leiligheten i tillegg til byggets' },
        ],
      },
      { type: 'h', text: 'Når huset blir kaldt' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Hold varmen i minst ett rom, og la dører til rom med vannrør stå åpne.',
          'Ved langvarig kulde uten varme: steng hovedkranen og tapp ned anlegget – åpne kranene på laveste punkt.',
          'Tøm toalettsisterne, og hell litt frostvæske eller salt i vannlåser hvis du skal forlate huset.',
          'Slå av varmtvannsberederen før den tømmes.',
        ],
      },
      {
        type: 'tip',
        title: 'Finn kranen i dag',
        text: 'Finn hovedstoppekranen og test at den lar seg stenge. Merk den godt, og vis alle i husstanden hvor den er.',
      },
      {
        type: 'warning',
        text: 'Bruk aldri åpen flamme for å tine frosne rør. Bruk hårføner eller varme kluter, og start nærmest kranen.',
      },
    ],
    related: ['vann-i-boligen', 'sikringsskap', 'dokumenter-og-forsikring', 'varme-innendors'],
    source: 'DSB / egenberedskap.no',
  },
  {
    id: 'stenge-gass',
    title: 'Gasslukt og gasslekkasje',
    category: 'teknikk',
    summary:
      'Lukter det gass: ingen flammer, ingen brytere – steng gassen hvis det er trygt, luft ut, kom deg ut og ring 110.',
    tags: ['gass', 'propan', 'gasslekkasje', 'gasslukt', 'gassflaske', 'gasskomfyr', 'gas leak', 'eksplosjon'],
    blocks: [
      {
        type: 'p',
        text: 'Gass brukes til komfyr, peis, terrassevarmer og grill. Propan er tyngre enn luft og samler seg ved gulvet, i kjellere og i groper. En liten gnist kan få en gass-luft-blanding til å eksplodere.',
      },
      { type: 'h', text: 'Hvis det lukter gass' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Ikke tenn noe: ingen lighter, fyrstikker eller stearinlys.',
          'Ikke bruk lysbrytere, ringeklokker, stikkontakter eller elektriske apparater.',
          'Steng gassen på flasken eller hovedventilen hvis du kan gjøre det raskt og trygt.',
          'Åpne vinduer og dører for å lufte ut.',
          'Få alle ut av huset, og varsle naboer ved å banke på – ikke ringe på.',
          'Ring 110 når du er ute og i trygg avstand.',
        ],
      },
      {
        type: 'warning',
        text: 'Ikke gå inn igjen før brannvesenet sier at det er trygt. Ikke ring fra inne i rommet med gass.',
      },
      { type: 'h', text: 'Forebygg' },
      {
        type: 'list',
        items: [
          'Sjekk slanger og koblinger jevnlig. Bytt slanger som er sprø eller sprukne.',
          'Test for lekkasjer med såpevann på koblingene – bobler betyr lekkasje.',
          'Oppbevar gassflasker stående, i godt ventilert rom, ikke i kjeller.',
          'Steng flaskeventilen når utstyret ikke er i bruk.',
          'Bruk aldri utendørs gassutstyr (grill, terrassevarmer) innendørs – det gir fare for kullos og brann.',
        ],
      },
      {
        type: 'tip',
        text: 'Gass blir tilsatt et luktstoff for at du skal merke lekkasjer. Lukter det «råttent egg» eller kål rundt gassutstyret, ta det på alvor.',
      },
    ],
    related: ['parafin-og-gass', 'kullos', 'slokke-brann', 'brannsikring'],
    source: 'DSB',
  },
  {
    id: 'sikringsskap',
    title: 'Sikringsskapet',
    category: 'teknikk',
    summary:
      'Lær deg hovedbryter, kurssikringer og jordfeilbryter – og hvordan du slår strømmen trygt på igjen etter et strømbrudd.',
    tags: ['sikring', 'sikringsskap', 'jordfeilbryter', 'automatsikring', 'hovedbryter', 'strøm', 'fuse box', 'elektrisk'],
    blocks: [
      {
        type: 'p',
        text: 'Sikringsskapet beskytter det elektriske anlegget mot overbelastning og jordfeil. Vit hvor det er, hvilke kurser som går hvor, og hvordan du slår av alt.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Hovedbryter', value: 'Slår av strømmen i hele boligen' },
          { label: 'Kurssikring', value: 'Slår ut ved overbelastning eller kortslutning på én kurs' },
          { label: 'Jordfeilbryter', value: 'Slår ut ved feil som kan gi støt – beskytter mot brann og støt' },
          { label: 'Hvem kan gjøre hva', value: 'Du kan slå på sikringer og bytte skrusikringer. Alt annet: autorisert elektriker' },
        ],
      },
      { type: 'h', text: 'Når en sikring går' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Slå av eller trekk ut apparater på kursen som gikk.',
          'Slå sikringen på igjen.',
          'Koble til apparatene ett og ett. Går sikringen igjen når et bestemt apparat kobles til, er det trolig feil på apparatet.',
          'Går sikringen eller jordfeilbryteren igjen uten at noe er tilkoblet: kontakt elektriker.',
        ],
      },
      { type: 'h', text: 'Etter strømbrudd' },
      {
        type: 'list',
        items: [
          'Slå av varmeovner, komfyr og apparater som sto på da strømmen gikk – de kan starte når strømmen kommer.',
          'La gjerne én lampe stå på, så du ser når strømmen er tilbake.',
          'Slå på store forbrukere litt etter litt.',
        ],
      },
      {
        type: 'warning',
        title: 'Aggregat',
        text: 'Koble aldri et aggregat til husets anlegg via en stikkontakt. Strøm kan da gå ut i nettet og drepe montører som jobber med feilen. Fast tilkobling krever omkoblingsbryter installert av elektriker.',
      },
      {
        type: 'tip',
        text: 'Merk hver sikring med hvilke rom og apparater den dekker, og ha en lommelykt hengende ved skapet. Varme, svimerker eller lukt fra sikringsskapet er brannfare – kontakt elektriker.',
      },
    ],
    related: ['aggregat', 'brannsikring', 'vannlekkasje', 'stromskade'],
    source: 'DSB / Det lokale eltilsyn (DLE)',
  },

  // ─── HJEMMET ─────────────────────────────────────────────────────────────
  {
    id: 'nodtoalett',
    title: 'Nødtoalett',
    category: 'hjem',
    summary:
      'Når vann eller avløp svikter: ikke skyll ned, men bruk poser i toalettet eller en bøtte – og hold hendene rene.',
    tags: ['toalett', 'do', 'utedo', 'nødtoalett', 'avløp', 'toalettpose', 'emergency toilet', 'kloakk', 'sanitær'],
    blocks: [
      {
        type: 'p',
        text: 'Uten vann kan du ikke skylle ned, og ved feil på avløpet kan kloakk komme opp i kjellere og sluk. Dårlig toaletthygiene er en av de raskeste veiene til diaré og smitte i en krise.',
      },
      { type: 'h', text: 'Lag et nødtoalett' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Bruk toalettet du har: tøm skålen for vann, og legg to kraftige søppelsekker oppi. Alternativt: en bøtte med lokk.',
          'Strø et lag med kattesand, sagflis, torvstrø, tørr jord eller avrevet papir i bunnen.',
          'Strø et nytt lag etter hvert besøk. Det binder fuktighet og lukt.',
          'Knyt igjen posen når den er ca. halvfull, og legg den i en ny pose.',
          'Oppbevar posene i en tett beholder, kjølig og utendørs, unna barn og dyr, til kommunen gir beskjed om innsamling.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Lagerbehov', value: 'Kraftige poser, strø, toalettpapir, håndsprit, hansker' },
          { label: 'Urin', value: 'Hold gjerne atskilt – det reduserer lukt og volum' },
          { label: 'Plassering', value: 'Eget rom eller skjermet sted, godt ventilert' },
        ],
      },
      {
        type: 'warning',
        text: 'Ikke skyll ned når kommunen har bedt deg om å la være, eller når vannet er borte – avløpet kan gå tett eller kloakk kan presses opp andre steder. Tøm aldri avføring i bekker, brønner eller nær drikkevannskilder.',
      },
      {
        type: 'tip',
        title: 'Håndhygiene',
        text: 'Ha håndsprit og et vaskevannfat rett ved toalettet. Vask eller sprit hendene hver gang, og alltid før du lager mat.',
      },
    ],
    related: ['hygiene-uten-vann', 'avfall', 'smittevern-hjemme', 'diare-og-oppkast'],
    source: 'DSB / egenberedskap.no, FHI',
  },
  {
    id: 'avfall',
    title: 'Avfall når renovasjonen stopper',
    category: 'hjem',
    summary:
      'Sorter, pakk tett og oppbevar avfallet kjølig og skadedyrsikkert – matavfall og bleier først.',
    tags: ['søppel', 'avfall', 'renovasjon', 'matavfall', 'rotter', 'skadedyr', 'waste', 'bleier'],
    blocks: [
      {
        type: 'p',
        text: 'Ved langvarige kriser kan søppeltømmingen stoppe. Matavfall og avføring tiltrekker rotter, måker og fluer og kan spre sykdom.',
      },
      { type: 'h', text: 'Slik håndterer du avfall' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Reduser mengden: unngå engangsemballasje, og spis opp mat før den blir dårlig.',
          'Pakk matavfall, bleier og toalettposer dobbelt og knyt godt igjen.',
          'Oppbevar avfallet i tette beholdere med lokk, ute og i skyggen.',
          'Hold avfallet unna drikkevann, matlager og der barn leker.',
          'Skyll og tørk emballasje (bokser, kartonger) – da lukter den ikke og kan lagres lenge.',
          'Følg med på beskjed fra kommunen om hvor og når avfall kan leveres.',
        ],
      },
      {
        type: 'warning',
        title: 'Ikke brenn søppel',
        text: 'Brenning av plast, malt treverk og annet avfall gir giftig røyk og er forbudt. Brenn heller ikke avfall i ovnen – det kan skade pipa og gi pipebrann.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Farlig avfall', value: 'Batterier, medisiner, kjemikalier, sprayboks – hold atskilt' },
          { label: 'Sprøyter og spisse ting', value: 'I hard, lukket beholder' },
          { label: 'Medisinrester', value: 'Leveres på apotek når det er mulig' },
        ],
      },
      {
        type: 'tip',
        text: 'Ha ekstra kraftige søppelsekker og et par tette bøtter med lokk i beredskapslageret.',
      },
    ],
    related: ['nodtoalett', 'smittevern-hjemme', 'hygiene-uten-vann'],
    source: 'DSB / egenberedskap.no, FHI',
  },
  {
    id: 'hygiene-uten-vann',
    title: 'Hygiene uten rennende vann',
    category: 'hjem',
    summary:
      'Med håndsprit, våtservietter og en liter vann kan du holde deg ren og forebygge smitte i mange dager.',
    tags: ['hygiene', 'håndvask', 'håndsprit', 'antibac', 'våtservietter', 'vaske seg', 'hygiene without water', 'tannpuss'],
    blocks: [
      {
        type: 'p',
        text: 'God hygiene forebygger diaré, infeksjoner og hudproblemer. Prioriter hendene – det er der smitten går fra toalett til mat.',
      },
      { type: 'h', text: 'Prioriter i denne rekkefølgen' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Hender: etter toalettbesøk, før matlaging og måltider, etter bleieskift og avfall.',
          'Matlagingsutstyr og flater der mat tilberedes.',
          'Kroppen: ansikt, armhuler, underliv og føtter.',
          'Tenner og munn.',
          'Klær og sengetøy.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Håndsprit', value: 'Virker på rene hender – ikke på synlig skitt' },
          { label: 'Synlig skitne hender', value: 'Vask med såpe og litt vann først' },
          { label: 'Kroppsvask', value: 'Klut og en balje med 1–2 l vann' },
          { label: 'Tannpuss', value: 'Et lite glass vann holder' },
        ],
      },
      { type: 'h', text: 'Vask med lite vann' },
      {
        type: 'list',
        items: [
          'Lag en «vaskestasjon»: dunk med kran, såpe og bøtte under, eller hell fra en flaske mens en annen holder.',
          'Bruk vaskeklut og balje: vask fra rent til skittent – ansikt først, underliv og føtter sist.',
          'Bruk våtservietter, tørrshampo og fuktighetskrem.',
          'Gjenbruk vaskevann til å skylle ned eller rengjøre gulv.',
        ],
      },
      {
        type: 'warning',
        text: 'Håndsprit virker dårlig mot noen smittestoffer som gir oppkast og diaré (som norovirus). Ved mage-tarm-sykdom i huset: vask hendene med såpe og vann så langt det er mulig, og hold den syke borte fra matlaging.',
      },
      {
        type: 'tip',
        text: 'Ha klær i lag på lag og bytt undertøy og sokker oftere enn ytterklærne. Tørre, rene føtter forebygger gnagsår og sopp.',
      },
    ],
    related: ['nodtoalett', 'smittevern-hjemme', 'lagre-vann', 'diare-og-oppkast'],
    source: 'FHI, Helsedirektoratet / helsenorge.no, DSB',
  },
  {
    id: 'brannsikring',
    title: 'Brannsikring av boligen',
    category: 'hjem',
    summary:
      'Røykvarsler, slokkeutstyr og en rømningsplan redder liv – og brannfaren øker når strømmen er borte og stearinlysene tennes.',
    tags: ['brann', 'brannsikring', 'brannvern', 'rømningsvei', 'stearinlys', 'fire safety', 'brannslukker', 'boligbrann'],
    blocks: [
      {
        type: 'p',
        text: 'Det er lovpålagt å ha røykvarsler og slokkeutstyr i alle boliger. Ved strømbrudd og kriser øker brannfaren fordi folk bruker levende lys, gassbrennere, parafinovner og fyrer mer i ovnen.',
      },
      { type: 'h', text: 'Sjekkliste' },
      {
        type: 'list',
        items: [
          'Røykvarsler i hver etasje og utenfor soverom – test den jevnlig.',
          'Brannslokkeapparat eller brannslange som når alle rom.',
          'Brannteppe på kjøkkenet.',
          'Minst to rømningsveier fra soverom, for eksempel dør og vindu. Ha rømningsstige i høye etasjer.',
          'Avtal et møtested ute, og øv på å komme ut i mørket.',
          'Feiing og tilsyn av ildsted og pipe etter kommunens ordning.',
        ],
      },
      { type: 'h', text: 'Ekstra forsiktig ved strømbrudd' },
      {
        type: 'list',
        items: [
          'Bruk heller batterilykter enn levende lys.',
          'Sett stearinlys på et ubrennbart underlag, langt fra gardiner, og aldri ubevoktet.',
          'Ikke fyr hardere enn ovnen er laget for, og la aldri ovnen være uten tilsyn med åpen dør.',
          'Ha slokkeutstyr nær ildsted, gassapparater og parafinovner.',
          'Når strømmen kommer tilbake: sjekk at komfyr og varmeovner ikke står på uten tilsyn.',
        ],
      },
      {
        type: 'warning',
        text: 'Kom deg ut og ring 110 hvis det brenner og du ikke klarer å slokke raskt. Røyk dreper fortere enn flammer – noen få innpust kan gjøre deg bevisstløs.',
      },
      {
        type: 'tip',
        title: 'Røykvarslerens dag',
        text: '1. desember er en fin dag å teste røykvarslerne og bytte batteri – rett før høytiden med mye levende lys.',
      },
    ],
    related: ['roykvarsler', 'slokke-brann', 'vedfyring', 'parafin-og-gass'],
    source: 'DSB / Brannvernforeningen',
  },
  {
    id: 'roykvarsler',
    title: 'Røykvarsler',
    category: 'hjem',
    summary:
      'Riktig plassert, seriekoblet og jevnlig testet røykvarsler gir deg de minuttene du trenger for å komme ut.',
    tags: ['røykvarsler', 'brannalarm', 'røykdetektor', 'smoke detector', 'batteri', 'seriekoblet', 'pip'],
    blocks: [
      {
        type: 'p',
        text: 'De fleste som omkommer i boligbranner, dør av røyk – ofte mens de sover. En fungerende røykvarsler vekker deg tidlig nok til å komme ut.',
      },
      { type: 'h', text: 'Plassering' },
      {
        type: 'list',
        items: [
          'I taket, i hver etasje, og i eller utenfor alle soverom.',
          'Midt i taket, minst 50 cm fra vegg.',
          'Ikke rett over komfyr, i bad eller nær luftekanaler – da får du falske alarmer.',
          'På loft og i kjeller hvis det oppholder seg folk der eller står elektriske apparater.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Test', value: 'Minst én gang i året – gjerne hver måned' },
          { label: 'Batteri', value: 'Bytt når den piper svakt, eller én gang i året' },
          { label: 'Bytt hele varsleren', value: 'Etter ca. 10 år, eller som produsenten anbefaler' },
          { label: 'Type', value: 'Optisk røykvarsler anbefales' },
        ],
      },
      {
        type: 'tip',
        title: 'Seriekoble',
        text: 'Seriekoblede (trådløst sammenkoblede) varslere piper alle samtidig. Da hører du brann i kjelleren selv om du sover i andre etasje.',
      },
      {
        type: 'p',
        text: 'Hører du dårlig, finnes det varslere med blinklys og vibrasjonsputer til sengen. Kontakt NAV hjelpemiddelsentral eller kommunen for råd.',
      },
      {
        type: 'warning',
        text: 'Ta aldri ut batteriet for å slippe falske alarmer. Flytt heller varsleren eller velg en type som passer bedre for rommet.',
      },
    ],
    related: ['brannsikring', 'slokke-brann', 'kullos'],
    source: 'DSB / Brannvernforeningen',
  },
  {
    id: 'slokke-brann',
    title: 'Slokke en brann',
    category: 'hjem',
    summary:
      'Varsle, redd, slokk – men bare hvis brannen er liten og du har en trygg vei ut. Aldri vann på brennende fett.',
    tags: ['slokke', 'brannslukker', 'brannteppe', 'pulverapparat', 'fettbrann', 'komfyrbrann', 'extinguisher', 'brann'],
    blocks: [
      {
        type: 'p',
        text: 'En brann kan doble seg på kort tid. De første sekundene er avgjørende – men ditt eget liv går først.',
      },
      { type: 'h', text: 'Varsle – redde – slokke' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Varsle: rop «Brann!» og få alle ut. Ring 110.',
          'Redde: hjelp barn, eldre og andre som trenger det ut.',
          'Slokke: bare hvis brannen er liten og du har rømningsveien bak deg.',
          'Lukk døren til rommet som brenner når du går ut. Det bremser røyk og flammer.',
        ],
      },
      { type: 'h', text: 'Bruke brannslokkeapparat' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Trekk ut splinten.',
          'Stå med rømningsveien bak deg, et par meter fra brannen.',
          'Sikt mot roten av flammene, ikke mot røyken.',
          'Klem på hendelen og fei frem og tilbake over glørne.',
          'Følg med etter at det ser slokket ut – brannen kan blusse opp igjen.',
        ],
      },
      {
        type: 'warning',
        title: 'Fettbrann',
        text: 'Hell aldri vann på brennende olje eller fett – det eksploderer i en ildkule. Slå av platen, kvel brannen med et brannteppe eller lokk, og la det ligge til det er helt avkjølt.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Brannteppe', value: 'Fettbrann i kjele, brann i klær' },
          { label: 'Pulverapparat', value: 'De fleste branner, også el – gir mye søl' },
          { label: 'Skumapparat', value: 'Tre, tekstiler og væsker' },
          { label: 'Vann / brannslange', value: 'Tre, papir, tekstiler – ikke fett' },
        ],
      },
      {
        type: 'tip',
        title: 'Brann i klær',
        text: 'Stopp, legg deg ned og rull. Kvel flammene med et teppe. Kjøl brannskader med lunkent vann i minst 20 minutter, og ring 113 ved store brannskader.',
      },
      {
        type: 'warning',
        text: 'Er rommet fullt av røyk: krabb lavt der lufta er renest. Gå aldri inn igjen i et brennende hus for å hente ting.',
      },
    ],
    related: ['brannsikring', 'roykvarsler', 'brannskader', 'stenge-gass'],
    source: 'DSB / Brannvernforeningen, Norsk førstehjelpsråd',
  },
  {
    id: 'evakueringssekk',
    title: 'Evakueringssekk',
    category: 'hjem',
    summary:
      'En ferdigpakket sekk per person lar deg forlate hjemmet på få minutter med det viktigste for de første døgnene.',
    tags: ['evakueringssekk', 'go bag', 'bug-out bag', 'beredskapssekk', 'nødsekk', 'pakkliste', 'evakuering', 'flukt'],
    blocks: [
      {
        type: 'p',
        text: 'Ved flom, skred, brann eller farlige utslipp kan politiet be deg forlate hjemmet på kort varsel. Da har du ikke tid til å lete etter ting. Ha en sekk klar nær utgangen.',
      },
      { type: 'h', text: 'Pakkliste' },
      {
        type: 'list',
        items: [
          'Legitimasjon, bankkort, kontanter og kopier av viktige dokumenter.',
          'Faste medisiner for minst en uke, med resepter eller medisinliste.',
          'Mobil, lader og fulladet strømbank.',
          'Vann (1–2 liter) og lett mat som ikke må tilberedes.',
          'Varme klær, regntøy, lue, votter og ekstra sokker.',
          'Hodelykt eller lommelykt med ekstra batterier.',
          'Liten batteriradio.',
          'Førstehjelpsskrin, håndsprit, toalettsaker og eventuelle hygieneartikler.',
          'Liste med viktige telefonnumre på papir.',
          'Briller, høreapparat og batterier, ladere til hjelpemidler.',
          'For barn: bleier, mat, kosedyr og noe å gjøre.',
          'For dyr: bur/bånd, mat og medisiner.',
        ],
      },
      {
        type: 'tip',
        title: 'Hold den oppdatert',
        text: 'Sjekk sekken to ganger i året, for eksempel når tyfonene testes i januar og juni. Bytt mat og vann, og tilpass klærne til årstiden.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Antall', value: 'Én per person – barn kan bære en liten' },
          { label: 'Vekt', value: 'Så lett at du kan bære den et stykke' },
          { label: 'Plassering', value: 'Nær utgangen, eller i bilen' },
        ],
      },
      {
        type: 'warning',
        text: 'Når politiet ber deg evakuere, skal du dra – også uten sekk. Ikke bruk tid på å hente ting hvis faren er nær.',
      },
    ],
    related: ['evakuering-og-mottak', 'dokumenter-og-forsikring', 'kjaeledyr', 'familieplan'],
    source: 'DSB / egenberedskap.no, Røde Kors',
  },
  {
    id: 'kjaeledyr',
    title: 'Kjæledyr i krise',
    category: 'hjem',
    summary:
      'Du har ansvar for dyrene dine også i en krise – ha mat, vann, medisiner og transportløsning klar for minst en uke.',
    tags: ['kjæledyr', 'hund', 'katt', 'dyr', 'dyrevelferd', 'pets', 'evakuering med dyr', 'dyremat'],
    blocks: [
      {
        type: 'p',
        text: 'Dyreeier har ansvar for dyrenes velferd, også ved strømbrudd, uvær og evakuering. Planlegg for dyrene på samme måte som for resten av familien.',
      },
      { type: 'h', text: 'Beredskapslager for dyr' },
      {
        type: 'list',
        items: [
          'Fôr for minst en uke, i tett emballasje.',
          'Ekstra drikkevann – dyrene trenger også vann hver dag.',
          'Faste medisiner og en kopi av vaksinasjonskort/journal.',
          'Bur eller transportkasse, bånd, sele og munnkurv ved behov.',
          'Kattesand, poser og rengjøringsutstyr.',
          'Et oppdatert bilde av dyret og ID-merking (chip) med riktig kontaktinfo.',
        ],
      },
      { type: 'h', text: 'Ved evakuering' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Ta med dyrene hvis du kan gjøre det trygt.',
          'Hold hunder i bånd og katter i bur – dyr blir lett redde og stikker av.',
          'Spør kommunen eller evakueringssenteret om ordninger for dyr. Ha en avtale med familie eller venner utenfor området.',
          'Må dyr bli igjen: gi rikelig vann og mat, og meld fra til politiet eller kommunen hvor dyrene er.',
        ],
      },
      {
        type: 'warning',
        text: 'La aldri dyr være igjen i en bil i varme. Ved kulde og strømbrudd: dyr i bur, akvarier og terrarier kan trenge ekstra varme.',
      },
      {
        type: 'tip',
        text: 'Har du husdyr eller produksjonsdyr, lag en egen plan for vann, fôr, melking og ventilasjon ved strømbrudd. Mattilsynet har råd til dyreeiere.',
      },
    ],
    related: ['evakueringssekk', 'evakuering-og-mottak', 'familieplan'],
    source: 'Mattilsynet, DSB / egenberedskap.no',
  },
  {
    id: 'barn-i-krise',
    title: 'Barn i krise',
    category: 'hjem',
    summary:
      'Barn trenger ærlige svar tilpasset alderen, trygge voksne og faste rutiner – også når voksne selv er redde.',
    tags: ['barn', 'snakke med barn', 'krise', 'frykt', 'redsel', 'children', 'trygghet', 'nyheter'],
    blocks: [
      {
        type: 'p',
        text: 'Barn merker når voksne er urolige, også om ingen sier noe. Det tryggeste er at en voksen forklarer hva som skjer og hva familien gjør med det.',
      },
      { type: 'h', text: 'Slik snakker du med barn' },
      {
        type: 'list',
        items: [
          'Spør hva barnet har hørt og lurer på, før du forklarer.',
          'Svar ærlig og enkelt, tilpasset alderen. Det er lov å si «Det vet jeg ikke, men vi finner ut av det».',
          'Fortell hva dere gjør for å være trygge: «Vi har vann, mat og en plan».',
          'Gi barnet en oppgave – å hjelpe gir følelse av kontroll.',
          'Skjerm små barn fra bilder og nyheter. Se eller hør nyheter sammen med større barn og snakk om det.',
          'Godta reaksjoner: gråt, sinne, klenging og vansker med å sove er vanlig.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Alarmtelefonen for barn og unge', value: '116 111' },
          { label: 'Mental Helse hjelpetelefon', value: '116 123' },
          { label: 'Akutt fare', value: '112 / 113' },
        ],
      },
      { type: 'h', text: 'Praktisk beredskap for barn' },
      {
        type: 'list',
        items: [
          'Barnemat, morsmelkerstatning (og vann til den), bleier og medisiner for en uke.',
          'Varme klær og sovepose – barn blir fortere kalde enn voksne.',
          'Bøker, spill, tegnesaker og kosedyr som ikke trenger strøm.',
          'Avtal hvem som henter barna, og sørg for at skole og barnehage vet det.',
          'Lær større barn 110, 112 og 113, adressen sin og familiens møtested.',
        ],
      },
      {
        type: 'tip',
        title: 'Rutiner gir trygghet',
        text: 'Hold på faste tider for måltider, leggetid og lek så godt det går. Det forteller barnet at livet går videre.',
      },
      {
        type: 'warning',
        text: 'Spedbarn tåler lite væsketap og kulde. Kontakt lege eller legevakt (116 117) tidlig ved feber, oppkast og diaré, eller slapphet. Ring 113 ved pustevansker eller hvis barnet er vanskelig å vekke.',
      },
    ],
    related: ['psykisk-forstehjelp', 'familieplan', 'stress-og-sovn', 'dehydrering'],
    source: 'Helsedirektoratet / helsenorge.no, Redd Barna, DSB',
  },
  {
    id: 'eldre-naboer',
    title: 'Eldre og sårbare naboer',
    category: 'hjem',
    summary:
      'Ved strømbrudd og uvær er det ofte naboen som først kan oppdage at noen trenger hjelp – sjekk inn, og avtal på forhånd.',
    tags: ['eldre', 'naboer', 'nabohjelp', 'sårbare', 'hjemmetjeneste', 'trygghetsalarm', 'elderly', 'omsorg'],
    blocks: [
      {
        type: 'p',
        text: 'Eldre, kronisk syke og personer med funksjonsnedsettelser er særlig sårbare når strøm, varme og telefon svikter. Trygghetsalarmer, medisinsk utstyr og hjemmetjenester kan bli rammet.',
      },
      { type: 'h', text: 'Før krisen' },
      {
        type: 'list',
        items: [
          'Bli kjent med naboene, og bytt telefonnumre.',
          'Spør om noen er avhengige av strøm: oksygen, pustemaskin, elektrisk seng, heis.',
          'Hjelp med å lage et lite beredskapslager og en liste over medisiner.',
          'Avtal hvem som sjekker på hvem hvis strømmen går.',
        ],
      },
      { type: 'h', text: 'Under krisen' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Bank på eller ring – minst én gang om dagen, oftere i kulde.',
          'Sjekk at de har varme, vann, mat og medisiner, og at de forstår hva som skjer.',
          'Hjelp med å fyre, hente vann eller lade telefonen.',
          'Hvis noen er kalde, forvirrede eller svake: gi varme og noe å drikke, og ring legevakt 116 117. Ring 113 ved akutt sykdom.',
          'Meld fra til kommunen om personer som trenger hjelp eller må flyttes til et varmt sted.',
        ],
      },
      {
        type: 'warning',
        text: 'Eldre kan bli farlig nedkjølt innendørs uten å merke det selv. Er strømbruddet langvarig og huset kaldt, bør de flyttes til et varmt sted.',
      },
      {
        type: 'tip',
        text: 'Mange kommuner har oversikt over hjemmeboende som får hjemmetjenester, men ikke over alle som er sårbare. Din innsats som nabo kan være avgjørende.',
      },
    ],
    related: ['nedkjoling', 'medisiner-i-krise', 'kommunens-beredskap', 'varme-innendors'],
    source: 'DSB / egenberedskap.no, Røde Kors, Helsedirektoratet',
  },
  {
    id: 'dokumenter-og-forsikring',
    title: 'Viktige dokumenter og forsikring',
    category: 'hjem',
    summary:
      'Samle ID, forsikringspapirer, resepter og kontaktlister på ett sted – både på papir og som sikker kopi utenfor huset.',
    tags: ['dokumenter', 'pass', 'ID', 'forsikring', 'kopier', 'papirer', 'documents', 'innbo'],
    blocks: [
      {
        type: 'p',
        text: 'Etter brann, flom eller evakuering trenger du å bevise hvem du er, hva du eide og hvilke medisiner du bruker. Det går mye raskere hvis papirene er samlet og sikret.',
      },
      { type: 'h', text: 'Dette bør du samle' },
      {
        type: 'list',
        items: [
          'Pass, førerkort og bankkort (kopier av alle).',
          'Forsikringsbevis og polisenummer, med telefonnummer til selskapet.',
          'Medisinliste, resepter, vaksinekort og viktige helseopplysninger.',
          'Skjøte, leiekontrakt, bilpapirer.',
          'Telefonliste til familie, lege, jobb, skole og naboer.',
          'Passord til viktige tjenester (oppbevart trygt).',
        ],
      },
      { type: 'h', text: 'Slik sikrer du dem' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Legg originaler i en vanntett mappe eller et brannsikkert skap.',
          'Ha kopier i evakueringssekken.',
          'Ta bilder eller skann, og lagre kryptert – både på telefonen (tilgjengelig offline) og utenfor huset.',
          'Gi en kopi av det viktigste til noen du stoler på i en annen by.',
        ],
      },
      {
        type: 'tip',
        title: 'Filme innboet',
        text: 'Gå gjennom huset med mobilkameraet og film alle rom, skap og verdisaker. Det gjør et forsikringsoppgjør mye enklere. Lagre filmen utenfor huset.',
      },
      {
        type: 'warning',
        text: 'Sjekk at innboforsikringen dekker det du eier, og at du vet hva den dekker ved flom og naturskade. Ved skade: ta bilder før du rydder, og kontakt forsikringsselskapet raskt.',
      },
    ],
    related: ['evakueringssekk', 'kontanter', 'medisiner-i-krise', 'familieplan'],
    source: 'DSB / egenberedskap.no',
  },
  {
    id: 'tette-boligen',
    title: 'Gå inn, lukk og tett',
    category: 'hjem',
    summary:
      'Ved farlige utslipp, røyk eller radioaktivt nedfall: gå inn, lukk dører og vinduer, slå av ventilasjonen og søk informasjon.',
    tags: ['gå inn', 'lukk vinduer', 'ventilasjon', 'gassutslipp', 'røyk', 'radioaktivitet', 'shelter in place', 'tette'],
    blocks: [
      {
        type: 'p',
        text: 'Ved utslipp av farlige gasser, røyk fra store branner eller radioaktivt nedfall er det ofte tryggest å holde seg innendørs. Et vanlig hus gir god beskyttelse hvis du stenger det godt.',
      },
      { type: 'h', text: 'Slik gjør du' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Gå inn – i nærmeste bygning hvis du er ute. Ta med barn og dyr.',
          'Lukk alle dører og vinduer.',
          'Slå av ventilasjonsanlegg, avtrekksvifter og kjøkkenvifte. Steng ventiler.',
          'Ikke fyr i ovnen – trekken suger inn luft utenfra.',
          'Tett sprekker og ventiler med teip, plast eller våte håndklær om det er et alvorlig utslipp.',
          'Gå til et rom midt i huset eller i kjelleren, med få vinduer.',
          'Søk informasjon på NRK og hos myndighetene. Bli inne til du får beskjed.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Signal', value: 'Tyfon «Viktig melding – søk informasjon» og/eller Nødvarsel' },
          { label: 'Varighet', value: 'Ofte timer – følg myndighetenes råd' },
          { label: 'Etterpå', value: 'Luft godt ut når myndighetene sier at faren er over' },
        ],
      },
      {
        type: 'warning',
        title: 'Radioaktivt nedfall',
        text: 'Har du vært ute: ta av yttertøyet i gangen og legg det i en pose, dusj og vask håret. Ta bare jodtabletter hvis myndighetene ber om det.',
      },
      {
        type: 'tip',
        text: 'Ha vann, mat, radio og lys i det rommet du vil oppholde deg i, slik at du kan bli der en stund.',
      },
    ],
    related: ['jodtabletter', 'tyfonsignaler', 'nodvarsel', 'gaffateip'],
    source: 'DSA, DSB',
  },

  // ─── SAMFUNN ─────────────────────────────────────────────────────────────
  {
    id: 'kommunens-beredskap',
    title: 'Kommunens beredskap',
    category: 'samfunn',
    summary:
      'Kommunen har plikt til å planlegge for kriser, lede arbeidet lokalt og informere innbyggerne – vit hvor du finner informasjonen.',
    tags: ['kommune', 'beredskap', 'kriseledelse', 'beredskapsplan', 'informasjonspunkt', 'municipality', 'lokalt', 'ROS'],
    blocks: [
      {
        type: 'p',
        text: 'Kommunene har en lovpålagt beredskapsplikt. De skal kartlegge hva som kan gå galt lokalt (risiko- og sårbarhetsanalyse), ha en beredskapsplan og en kriseledelse som kan settes raskt.',
      },
      { type: 'h', text: 'Hva kommunen gjør i en krise' },
      {
        type: 'list',
        items: [
          'Leder og samordner innsatsen lokalt, sammen med politi, nødetater og frivillige.',
          'Sørger for at viktige tjenester går: helse og omsorg, vann og avløp.',
          'Informerer innbyggerne via nettside, sosiale medier, lokalradio og oppslag.',
          'Kan opprette evakuerte- og pårørendesenter og steder der innbyggere kan få informasjon, varme og hjelp.',
          'Følger opp sårbare grupper.',
        ],
      },
      { type: 'h', text: 'Det du bør finne ut nå' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Hvor kommunen legger ut informasjon i en krise.',
          'Om kommunen har planlagte informasjons- eller møtepunkter ved langvarig strøm- eller telebrudd, og hvor de er.',
          'Hvilke lokale risikoer som gjelder der du bor: flom, skred, kvikkleire, industri.',
          'Hvordan du får beskjed om kokevarsel eller stans i vannforsyningen.',
        ],
      },
      {
        type: 'tip',
        text: 'Skriv ned adressen til nærmeste informasjonspunkt eller rådhus på papir i beredskapslageret.',
      },
      {
        type: 'warning',
        text: 'Kommunen kan ikke hjelpe alle samtidig i en stor krise. Derfor ber myndighetene alle som kan, om å klare seg selv i omtrent en uke.',
      },
    ],
    related: ['evakuering-og-mottak', 'sivilforsvaret', 'totalforsvaret', 'eldre-naboer'],
    source: 'DSB / egenberedskap.no',
  },
  {
    id: 'sivilforsvaret',
    title: 'Sivilforsvaret',
    category: 'samfunn',
    summary:
      'Sivilforsvaret er statens forsterkningsressurs som hjelper nødetatene ved store hendelser – og har ansvaret for tyfonene.',
    tags: ['sivilforsvaret', 'tjenesteplikt', 'forsterkning', 'DSB', 'tyfon', 'civil defence', 'FIG', 'innsats'],
    blocks: [
      {
        type: 'p',
        text: 'Sivilforsvaret er en statlig etat under DSB. Den består av tjenestepliktige mannskaper over hele landet som trer inn når nødetatene og kommunen trenger forsterkning.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Del av', value: 'DSB (Direktoratet for samfunnssikkerhet og beredskap)' },
          { label: 'Mannskaper', value: 'Tjenestepliktige – innkalt etter loven' },
          { label: 'Ansvar', value: 'Forsterkning i fred, sivilbeskyttelse i krig, befolkningsvarsling med tyfoner' },
        ],
      },
      { type: 'h', text: 'Typiske oppgaver' },
      {
        type: 'list',
        items: [
          'Skogbrann, flom og ekstremvær: slokking, sikring, pumping og vakthold.',
          'Søk etter savnede sammen med politi og frivillige.',
          'Hjelp ved evakuering og drift av evakuerte- og pårørendesentre.',
          'Måling og rensing ved farlige utslipp (CBRN).',
          'Strøm, lys, varme og telt der infrastruktur er rammet.',
          'Drift og vedlikehold av tyfonene.',
        ],
      },
      {
        type: 'p',
        text: 'Sivilforsvaret hjelper samfunnet, ikke enkeltpersoner direkte. Trenger du hjelp, ringer du nødnummer – så vurderer nødetatene om Sivilforsvaret skal kalles ut.',
      },
      {
        type: 'tip',
        text: 'Ser du folk i Sivilforsvarets uniform i en krise, kan de gi informasjon og formidle beskjeder videre til innsatsledelsen.',
      },
    ],
    related: ['tyfonsignaler', 'totalforsvaret', 'kommunens-beredskap', 'tilfluktsrom'],
    source: 'Sivilforsvaret / DSB',
  },
  {
    id: 'totalforsvaret',
    title: 'Totalforsvaret',
    category: 'samfunn',
    summary:
      'Totalforsvaret er samarbeidet mellom Forsvaret og det sivile samfunnet – og din egenberedskap er en del av det.',
    tags: ['totalforsvar', 'Forsvaret', 'sivilt-militært', 'totalberedskap', 'krig', 'total defence', 'samfunnssikkerhet', 'NATO'],
    blocks: [
      {
        type: 'p',
        text: 'Totalforsvaret betyr at samfunnets samlede ressurser skal kunne brukes for å forebygge og håndtere kriser, væpnet konflikt og krig. Forsvaret støtter det sivile samfunnet, og det sivile samfunnet støtter Forsvaret.',
      },
      { type: 'h', text: 'Hvem er med?' },
      {
        type: 'list',
        items: [
          'Forsvaret og Heimevernet.',
          'Politiet, brann- og redningsvesen, helsetjenesten og Sivilforsvaret.',
          'Kommuner, fylker og statlige etater.',
          'Næringsliv som leverer strøm, mat, drivstoff, transport og tele.',
          'Frivillige organisasjoner.',
          'Hver enkelt husstand.',
        ],
      },
      {
        type: 'p',
        text: 'Når innbyggerne kan klare seg selv i omtrent en uke, kan nødetater, helsevesen og Forsvaret bruke kreftene der behovet er størst. Egenberedskap er derfor ikke bare privat trygghet, men et bidrag til landets samlede beredskap.',
      },
      {
        type: 'tip',
        title: 'Hva du kan gjøre',
        text: 'Ha et beredskapslager for en uke, lær førstehjelp, kjenn tyfonsignalene, tenk kritisk om informasjon, og vurder å bli med i en frivillig beredskapsorganisasjon.',
      },
      {
        type: 'warning',
        text: 'I en sikkerhetspolitisk krise kan det bli spredt falsk informasjon for å skape frykt og splittelse. Følg råd fra norske myndigheter og etablerte medier.',
      },
    ],
    related: ['sivilforsvaret', 'desinformasjon', 'tilfluktsrom', 'kommunens-beredskap'],
    source: 'DSB, Forsvaret, Justis- og beredskapsdepartementet',
  },
  {
    id: 'tilfluktsrom',
    title: 'Tilfluktsrom',
    category: 'samfunn',
    summary:
      'Tilfluktsrom gir beskyttelse ved flyalarm og krigshandlinger – finn ut hvor nærmeste er, og hva du gjør hvis du ikke rekker frem.',
    tags: ['tilfluktsrom', 'bunker', 'flyalarm', 'beskyttelse', 'krig', 'shelter', 'kjeller', 'dekning'],
    blocks: [
      {
        type: 'p',
        text: 'Norge har offentlige og private tilfluktsrom, mest i byer og tettsteder. De skal beskytte mot virkningene av krigshandlinger. DSB har ansvaret for ordningen, og eiere av tilfluktsrom skal kunne klargjøre dem på kort varsel.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Offentlige', value: 'For folk som oppholder seg i området' },
          { label: 'Private', value: 'I boligblokker, skoler og næringsbygg – for de som bor eller jobber der' },
          { label: 'Signal', value: '«Flyalarm» – korte støt i ca. ett minutt' },
        ],
      },
      { type: 'h', text: 'Ved flyalarm' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Gå straks til nærmeste tilfluktsrom hvis du vet hvor det er og rekker det.',
          'Rekker du ikke frem: gå i kjelleren eller i et rom midt i bygningen, unna vinduer.',
          'Er du ute uten bygninger i nærheten: legg deg i en grøft eller forsenkning.',
          'Bli i dekning til «Faren over» – ett sammenhengende støt i ca. 30 sekunder.',
        ],
      },
      {
        type: 'tip',
        title: 'Finn ditt nærmeste',
        text: 'Spør borettslaget, arbeidsgiveren eller kommunen om tilfluktsrom i nærheten, og sjekk DSB sin oversikt mens du har nett. Skriv ned adressen.',
      },
      {
        type: 'p',
        text: 'Ta med vann, mat, medisiner, varme klær, lommelykt og radio hvis du har tid. Evakueringssekken passer godt.',
      },
      {
        type: 'warning',
        text: 'Mange tilfluktsrom brukes til andre formål i fredstid. Det kan ta tid å klargjøre dem. Følg alltid beskjeder fra myndighetene.',
      },
    ],
    related: ['tyfonsignaler', 'evakueringssekk', 'totalforsvaret', 'tette-boligen'],
    source: 'DSB / Sivilforsvaret',
  },
  {
    id: 'evakuering-og-mottak',
    title: 'Evakuering og evakueringssenter',
    category: 'samfunn',
    summary:
      'Når politiet ber deg evakuere: dra med en gang, sikre hjemmet raskt, og meld fra hvor du er.',
    tags: ['evakuering', 'evakueringssenter', 'pårørendesenter', 'EPS', 'flytte ut', 'evacuation', 'politiet', 'mottak'],
    blocks: [
      {
        type: 'p',
        text: 'Det er politiet som beslutter evakuering. Beskjeden kan komme via Nødvarsel, NRK, politiets kanaler eller ved at noen banker på døren. Følg den – evakuering besluttes bare når det er reell fare.',
      },
      { type: 'h', text: 'Før du drar' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Ta med evakueringssekken, medisiner og dyrene.',
          'Slå av komfyr, ovner og apparater. Steng gassen.',
          'Lukk vinduer og lås døren.',
          'Ved flom: flytt verdisaker opp, og slå av strømmen hvis vannet kan nå det elektriske anlegget.',
          'Hjelp naboer som trenger det.',
        ],
      },
      { type: 'h', text: 'Underveis og etterpå' },
      {
        type: 'list',
        items: [
          'Kjør eller gå den veien politiet anbefaler. Ikke ta snarveier gjennom faresonen.',
          'Registrer deg på evakuerte- og pårørendesenteret hvis det er opprettet – også om du bor hos venner. Da vet myndighetene at du er trygg.',
          'Gi beskjed til familien om hvor du er.',
          'Ikke dra tilbake før politiet sier at det er trygt.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Beslutter evakuering', value: 'Politiet' },
          { label: 'Evakuerte- og pårørendesenter', value: 'Drives av kommunen' },
          { label: 'Ta med', value: 'Evakueringssekk, ID, medisiner, telefon og lader' },
        ],
      },
      {
        type: 'warning',
        text: 'Ikke ring 112 for å spørre om evakueringen. Søk informasjon på NRK, hos politiet og kommunen, og hold linjene åpne for de som trenger hjelp.',
      },
    ],
    related: ['evakueringssekk', 'kommunens-beredskap', 'kjaeledyr', 'familieplan'],
    source: 'Politiet, DSB / egenberedskap.no',
  },
  {
    id: 'desinformasjon',
    title: 'Desinformasjon og rykter',
    category: 'samfunn',
    summary:
      'I kriser sprer rykter og falsk informasjon seg raskt – sjekk kilden, se etter bekreftelse, og del bare det du vet er riktig.',
    tags: ['desinformasjon', 'falske nyheter', 'rykter', 'kildekritikk', 'fake news', 'propaganda', 'påvirkning', 'sosiale medier'],
    blocks: [
      {
        type: 'p',
        text: 'Når mye er usikkert, søker alle etter svar. Da spres både misforståelser og bevisst falsk informasjon raskt. Feil informasjon kan føre til at folk tar farlige valg – eller lar være å følge viktige råd.',
      },
      { type: 'h', text: 'Fem spørsmål før du tror eller deler' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Hvem står bak? Er det en kjent avsender, en myndighet eller et etablert medium?',
          'Hvor kommer informasjonen fra? Står det en kilde du kan sjekke?',
          'Bekrefter andre uavhengige kilder det samme?',
          'Prøver budskapet å gjøre deg sint eller redd?',
          'Er bildet eller videoen fra denne hendelsen – eller gammelt og tatt ut av sammenheng?',
        ],
      },
      { type: 'h', text: 'Pålitelige kilder i krise' },
      {
        type: 'list',
        items: [
          'NRK (radio, TV, nett) – har beredskapsansvar.',
          'Politiet, kommunen og DSB sine offisielle kanaler.',
          'Nødvarsel på mobil og tyfonsignaler.',
          'Etablerte redaktørstyrte medier.',
        ],
      },
      {
        type: 'warning',
        text: 'Myndighetene ber deg aldri om passord, BankID eller kortnummer i en krise. Meldinger som gjør det, er svindel.',
      },
      {
        type: 'tip',
        text: 'Er du i tvil – ikke del. Det er bedre å vente på bekreftelse enn å spre noe som skaper unødig frykt.',
      },
    ],
    related: ['dab-og-fm', 'nodvarsel', 'totalforsvaret', 'stress-og-sovn'],
    source: 'DSB, Medietilsynet',
  },
  {
    id: 'kontanter',
    title: 'Kontanter og betaling',
    category: 'samfunn',
    summary:
      'Når strøm, nett eller betalingssystemer svikter, virker ikke kort og mobilbetaling – ha noe kontanter og flere betalingsmåter.',
    tags: ['kontanter', 'penger', 'cash', 'betaling', 'bankkort', 'Vipps', 'minibank', 'sedler'],
    blocks: [
      {
        type: 'p',
        text: 'Kortterminaler, minibanker og mobilbetaling trenger strøm og nett. Ved strømbrudd, dataangrep eller tekniske feil kan de stoppe helt. DSB anbefaler derfor å ha kontanter som en del av egenberedskapen.',
      },
      { type: 'h', text: 'Slik er du forberedt' },
      {
        type: 'list',
        items: [
          'Ha kontanter hjemme til innkjøp av mat, drivstoff og medisiner i noen dager.',
          'Velg små sedler og mynter – det er ikke sikkert butikken kan gi vekslepenger.',
          'Ha bankkort fra mer enn én bank, eller både kort og mobilbetaling.',
          'Oppbevar kontantene trygt og atskilt, gjerne litt i evakueringssekken.',
          'Kontroller av og til at sedlene ikke er utgått.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Kort og mobilbetaling', value: 'Avhengig av strøm og nett' },
          { label: 'Minibank', value: 'Virker ofte ikke ved strømbrudd' },
          { label: 'Kontanter', value: 'Virker uten teknologi' },
        ],
      },
      {
        type: 'tip',
        text: 'Ha et lite beløp på deg når du reiser – også i Norge. Et lokalt strømbrudd kan stoppe betalingene på bensinstasjonen der du står.',
      },
      {
        type: 'warning',
        text: 'Ikke oppbevar store summer hjemme. Det gir risiko ved innbrudd og brann, og er ofte bare delvis dekket av forsikringen.',
      },
    ],
    related: ['dokumenter-og-forsikring', 'evakueringssekk', 'familieplan'],
    source: 'DSB / egenberedskap.no, Norges Bank',
  },
  {
    id: 'familieplan',
    title: 'Familiens beredskapsplan',
    category: 'samfunn',
    summary:
      'Avtal på forhånd hvem som gjør hva, hvor dere møtes og hvordan dere får kontakt når mobilen ikke virker.',
    tags: ['familieplan', 'beredskapsplan', 'møtested', 'kontaktperson', 'family plan', 'hjemmeplan', 'avtale', 'kriseplan'],
    blocks: [
      {
        type: 'p',
        text: 'Kriser skjer ofte når familien er spredt – på jobb, skole og trening. En enkel plan som alle kjenner, sparer tid og bekymring når telefonene ikke virker.',
      },
      { type: 'h', text: 'Planen bør svare på' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Møtested hjemme hvis dere må ut i en fart (f.eks. ved postkassen).',
          'Møtested utenfor nabolaget hvis dere ikke kan komme hjem (f.eks. hos besteforeldre eller et kjent sted).',
          'En kontaktperson utenfor området som alle melder seg til.',
          'Hvem henter barna i barnehage og skole – og en reserve.',
          'Hvem sjekker på eldre slektninger eller naboer.',
          'Hvor beredskapslageret, evakueringssekkene, hovedkranen og sikringsskapet er.',
          'Hvem tar seg av dyrene.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Brann', value: '110' },
          { label: 'Politi', value: '112' },
          { label: 'Ambulanse', value: '113' },
          { label: 'Legevakt', value: '116 117' },
          { label: 'Giftinformasjonen', value: '22 59 13 00' },
          { label: 'Politiet (ikke akutt)', value: '02800' },
        ],
      },
      {
        type: 'tip',
        title: 'Skriv den ned',
        text: 'Skriv planen og viktige telefonnumre på papir. Gi alle en kopi til lommeboka eller sekken. Små barn kan ha en lapp i skolesekken.',
      },
      {
        type: 'p',
        text: 'Øv på planen én gang i året – for eksempel en kveld uten strøm. Da finner dere ut hva som mangler, mens det fortsatt er lett å fikse.',
      },
      {
        type: 'warning',
        text: 'Ikke legg planen bare i telefonen. Uten strøm og nett har du ikke tilgang til den.',
      },
    ],
    related: ['evakueringssekk', 'barn-i-krise', 'sms-og-overbelastning', 'eldre-naboer'],
    source: 'DSB / egenberedskap.no, Røde Kors',
  },
];
