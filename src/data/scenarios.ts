import type { Scenario } from './types';

/**
 * «Hva gjør jeg hvis …?» — korte, konkrete handlingsråd for kriser.
 * Sortert etter hvor ofte situasjonen typisk oppstår.
 * Rådene bygger på DSB/egenberedskap.no, Helsedirektoratet, DSA, Mattilsynet,
 * Folkehelseinstituttet, NVE/varsom.no, Meteorologisk institutt, Sivilforsvaret og Politiet.
 */
export const scenarios: Scenario[] = [
  // ─── Strømbrudd ──────────────────────────────────────────────────────────
  {
    id: 'stromstans',
    title: 'Strømbrudd',
    question: 'Hva gjør jeg hvis strømmen går?',
    category: 'infrastruktur',
    icon: 'flash-off',
    severity: 'alvorlig',
    summary:
      'De fleste strømbrudd er korte, men forbered deg på at det kan vare. Hold på varmen, maten og batteriene – og hent informasjon fra radio.',
    dont: [
      'Ikke bruk grill, gassovn, primus eller aggregat innendørs – fare for kullos (CO)',
      'Ikke åpne fryser og kjøleskap unødig',
      'Ikke la levende lys stå uten tilsyn',
      'Ikke bruk mobilen til underholdning – spar batteriet',
      'Ikke ring 112/113 for å spørre om strømmen – hold linjene åpne',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Sjekk om det bare gjelder deg',
            detail:
              'Se om naboene har lys og sjekk sikringsskapet. Er det bare din bolig, kan en jordfeilbryter ha slått ut.',
          },
          {
            title: 'Slå av komfyr, ovner og strykejern',
            detail: 'Da står de ikke på uten tilsyn når strømmen kommer tilbake. La gjerne én lampe stå på, så du ser når den er tilbake.',
          },
          {
            title: 'Finn frem lommelykt og DAB-radio',
            detail: 'Bruk batteridrevet lys før stearinlys. Lytt på NRK for informasjon fra myndighetene.',
          },
          {
            title: 'Hold fryser og kjøleskap lukket',
            detail: 'En full og lukket fryser holder seg kald i omtrent ett til to døgn.',
          },
          {
            title: 'Spar mobilbatteriet',
            detail: 'Skru ned lysstyrken, slå på strømsparing og lukk apper. Bruk SMS fremfor samtaler.',
          },
        ],
      },
      {
        label: 'De første timene',
        steps: [
          {
            title: 'Samle familien i ett rom',
            detail: 'Velg et lite rom, gjerne med vedovn. Lukk dørene til resten av boligen for å holde på varmen.',
          },
          {
            title: 'Tapp opp vann på flasker og kanner',
            detail: 'Vannverkets pumpestasjoner kan stoppe, så vannet i springen kan forsvinne etter en stund.',
          },
          {
            title: 'Kle deg i ull, lag på lag',
            detail: 'Bruk lue og sokker innendørs. Ull varmer selv om det blir fuktig.',
          },
          {
            title: 'Spis maten fra kjøleskapet først',
            detail: 'Deretter fryseren, og til slutt hermetikk og tørrmat.',
          },
          {
            title: 'Sjekk på naboer som kan trenge hjelp',
            detail: 'Eldre, syke og folk som bor alene kan trenge varme, mat eller noen å snakke med.',
          },
        ],
      },
      {
        label: 'Hvis det varer',
        steps: [
          {
            title: 'Fyr forsiktig i vedovn eller peis',
            detail: 'Bruk tørr ved og ha røykvarsleren i orden. Den bør ha batteri.',
          },
          {
            title: 'Lag varm mat på kokeapparat – ute eller ved åpent vindu',
            detail: 'Friluftskoker og gassapparat skal brukes med god lufting. Grill skal alltid stå ute.',
          },
          {
            title: 'Lad mobilen med powerbank eller i bilen',
            detail: 'Kjør bare motoren utendørs, aldri i lukket garasje.',
          },
          {
            title: 'Følg med på meldinger fra kommunen',
            detail: 'Kommunen kan opprette varmestuer og steder for informasjon og vann.',
          },
        ],
      },
      {
        label: 'Når strømmen kommer tilbake',
        steps: [
          {
            title: 'Slå på apparatene litt etter litt',
            detail: 'Da unngår du at sikringene går og at nettet overbelastes.',
          },
          {
            title: 'Sjekk maten i fryseren',
            detail: 'Mat med iskrystaller kan fryses ned igjen. Tint kjøtt, fisk og ferdigretter bør brukes raskt eller kastes.',
          },
          {
            title: 'Etterfyll lageret',
            detail: 'Bytt batterier, lad powerbanken og fyll på det du brukte.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Full, lukket fryser holder seg', value: '1–2 døgn' },
      { label: 'Vann per person per døgn', value: 'ca. 3 liter' },
      { label: 'Info fra myndighetene', value: 'NRK på DAB-radio' },
    ],
    supplies: [
      'lys-lommelykt',
      'lys-batterier',
      'kom-dabradio',
      'kom-powerbank',
      'varme-ull',
      'varme-sovepose',
      'varme-ved',
      'varme-kokeapparat',
      'varme-fyrstikker',
      'vann',
      'mat-hermetikk',
      'lys-stearin',
    ],
    relatedBook: 'varme',
    source: 'DSB / egenberedskap.no, Mattilsynet',
  },

  // ─── Ekstremvær ──────────────────────────────────────────────────────────
  {
    id: 'ekstremvaer',
    title: 'Ekstremvær og storm',
    question: 'Hva gjør jeg hvis det er varslet storm eller ekstremvær?',
    category: 'natur',
    icon: 'weather-lightning-rainy',
    severity: 'alvorlig',
    summary:
      'Når Meteorologisk institutt varsler farlig vær, har du som regel tid til å forberede deg. Sikre hjemmet, hold deg inne og vær klar for strømbrudd.',
    dont: [
      'Ikke kjør bil hvis du ikke må',
      'Ikke gå tur i skog, ved sjøen eller i fjellet',
      'Ikke oppsøk bølger og sjøsprøyt for å se på uværet',
      'Ikke rør nedfalte strømledninger – hold god avstand',
      'Ikke gå ut for å rydde mens det fortsatt blåser kraftig',
    ],
    phases: [
      {
        label: 'Før uværet',
        steps: [
          {
            title: 'Les farevarselet på yr.no eller varsom.no',
            detail: 'Gult er utfordrende, oransje er farlig, rødt er ekstremt. Se hvor og når det treffer.',
          },
          {
            title: 'Sikre løse ting ute',
            detail: 'Hagemøbler, trampoliner, søppeldunker og parasoller kan bli farlige prosjektiler.',
          },
          {
            title: 'Lukk vinduer, dører og luker godt',
            detail: 'Sjekk også at takrenner og sluk er åpne hvis det er varslet mye regn.',
          },
          {
            title: 'Lad telefon og powerbank',
            detail: 'Uvær gir ofte strømbrudd og brudd i mobilnettet.',
          },
          {
            title: 'Ha vann, mat og lys klart for et par døgn',
            detail: 'Fyll gjerne noen kanner med vann i tilfelle vannforsyningen påvirkes.',
          },
        ],
      },
      {
        label: 'Mens det står på',
        steps: [
          {
            title: 'Hold deg innendørs',
            detail: 'Opphold deg helst i et rom vendt bort fra vinden, unna store vinduer.',
          },
          {
            title: 'Lytt på NRK for oppdateringer',
            detail: 'Bruk DAB-radio hvis strømmen eller nettet går.',
          },
          {
            title: 'Må du ut: unngå trær, master og tak',
            detail: 'Trær kan velte og takstein kan blåse ned.',
          },
          {
            title: 'Ring 112 ved fare for liv',
            detail: 'Meld fra til nettselskapet om nedfalte ledninger.',
          },
        ],
      },
      {
        label: 'Etterpå',
        steps: [
          {
            title: 'Vent til vinden har løyet før du rydder',
            detail: 'Vær forsiktig med trær i spenn – de kan slå kraftig.',
          },
          {
            title: 'Dokumenter skader med bilder',
            detail: 'Ta bilder før du rydder, og meld skaden til forsikringsselskapet.',
          },
          {
            title: 'Sjekk på naboer og eldre',
            detail: 'Mange kan være uten strøm eller isolert av veier som er stengt.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Farevarsler', value: 'Gult · oransje · rødt' },
      { label: 'Varsler fra', value: 'Meteorologisk institutt' },
      { label: 'Strøm- og nettbrudd', value: 'Vanlig ved storm' },
    ],
    supplies: [
      'kom-dabradio',
      'kom-powerbank',
      'lys-lommelykt',
      'lys-batterier',
      'vann',
      'mat-hermetikk',
      'helse-forstehjelp',
    ],
    relatedBook: 'grunnkurs',
    source: 'Meteorologisk institutt, NVE / varsom.no, DSB',
  },

  // ─── Vannbrudd / kokepåbud ───────────────────────────────────────────────
  {
    id: 'vannbrudd',
    title: 'Vannet forsvinner eller må kokes',
    question: 'Hva gjør jeg hvis vannet blir borte eller det er kokepåbud?',
    category: 'infrastruktur',
    icon: 'water-off',
    severity: 'moderat',
    summary:
      'Uten rent vann blir hverdagen raskt vanskelig. Følg kommunens beskjed nøye, bruk lagret vann og kok vannet hvis du får beskjed om det.',
    dont: [
      'Ikke drikk vann fra springen ved kokepåbud uten å koke det',
      'Ikke puss tennene eller skyll grønnsaker i ukokt vann ved kokepåbud',
      'Ikke gi ukokt vann til husdyr eller bruk det i babymat',
      'Ikke drikk vann fra bekk eller vann uten å rense det',
      'Ikke la springen stå åpen og vente – steng den til vannet er tilbake',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Finn ut hva kommunen sier',
            detail: 'Sjekk kommunens nettside, lokalradio eller SMS-varsel. Gjelder det vannbrudd, kokepåbud eller noe annet?',
          },
          {
            title: 'Bruk lagret vann til drikke og mat',
            detail: 'Regn med omtrent 3 liter per person per døgn til drikke og enkel matlaging.',
          },
          {
            title: 'Steng kranene du har åpnet',
            detail: 'Da unngår du vannskader når trykket kommer tilbake.',
          },
          {
            title: 'Spar på vannet',
            detail: 'Prioriter drikke, matlaging og håndhygiene. Bruk våtservietter og håndsprit.',
          },
        ],
      },
      {
        label: 'Ved kokepåbud',
        steps: [
          {
            title: 'Kok opp vannet før bruk',
            detail: 'Det holder at vannet kommer til et kraftig oppkok med store bobler. Avkjøl og oppbevar det i rene, lukkede beholdere.',
          },
          {
            title: 'Bruk kokt vann til alt du svelger',
            detail: 'Drikke, matlaging, tannpuss, isbiter, morsmelkerstatning og vask av frukt og grønnsaker.',
          },
          {
            title: 'Dusj gjerne, men ikke svelg vannet',
            detail: 'Små barn bør vaskes med kokt og avkjølt vann.',
          },
          {
            title: 'Følg påbudet til kommunen opphever det',
            detail: 'Kommunen gir beskjed når vannet er trygt igjen.',
          },
        ],
      },
      {
        label: 'Hvis det varer',
        steps: [
          {
            title: 'Hent vann der kommunen anviser',
            detail: 'Kommunen kan sette ut tankbiler eller vannposter. Ta med rene kanner med lokk.',
          },
          {
            title: 'Rens vann fra naturen før bruk',
            detail: 'Kok det, eller bruk vannrensetabletter eller filter etter bruksanvisningen.',
          },
          {
            title: 'Bruk søppelsekk i do hvis det ikke kan spyles',
            detail: 'Legg en sekk i toalettskålen, bruk litt strø eller kattesand og knyt igjen.',
          },
        ],
      },
      {
        label: 'Etterpå',
        steps: [
          {
            title: 'Spyl kranene til vannet er klart og kaldt',
            detail: 'Følg eventuelle råd fra kommunen om gjennomspyling.',
          },
          {
            title: 'Fyll på vannlageret ditt',
            detail: 'Tapp nytt vann i rene kanner og merk dem med dato.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Kokepåbud', value: 'Kraftig oppkok' },
      { label: 'Drikke og mat per person', value: 'ca. 3 liter/døgn' },
      { label: 'Kokt vann i ren, lukket beholder', value: 'Holder et par døgn' },
    ],
    supplies: ['vann', 'vannkanner', 'vannrens', 'varme-kokeapparat', 'hyg-vatserv', 'hyg-soppelsekker'],
    relatedBook: 'vann',
    source: 'Folkehelseinstituttet, Mattilsynet, DSB / egenberedskap.no',
  },

  // ─── Digitalt brudd ──────────────────────────────────────────────────────
  {
    id: 'digitalt-brudd',
    title: 'Betaling, mobil og internett nede',
    question: 'Hva gjør jeg hvis mobilnett, internett og kortbetaling slutter å virke?',
    category: 'infrastruktur',
    icon: 'wifi-off',
    severity: 'moderat',
    summary:
      'Uten nett kan du ikke betale med kort eller mobil, og det blir vanskelig å ringe og få informasjon. Radio og kontanter er reserveløsningene dine.',
    dont: [
      'Ikke regn med at kort, Vipps eller nettbank virker',
      'Ikke bruk opp mobilbatteriet på å lete etter dekning',
      'Ikke stol på rykter – sjekk med radio eller offisielle kilder',
      'Ikke ring nødnumrene for å spørre om nettet',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Slå på DAB-radio og lytt på NRK',
            detail: 'Radio er myndighetenes viktigste kanal når nettet er nede.',
          },
          {
            title: 'Prøv nødnummer selv med dårlig dekning',
            detail: 'Nødanrop til 110, 112 og 113 kan gå gjennom andre mobilnett enn ditt eget.',
          },
          {
            title: 'Send SMS fremfor å ringe',
            detail: 'SMS kommer ofte frem når samtaler ikke gjør det.',
          },
          {
            title: 'Spar mobilbatteriet',
            detail: 'Slå på flymodus innimellom og sjekk nettet med jevne mellomrom.',
          },
        ],
      },
      {
        label: 'De første timene',
        steps: [
          {
            title: 'Bruk kontanter til det du trenger',
            detail: 'Ha små sedler og mynter. Butikker kan ha begrenset mulighet til å gi vekslepenger.',
          },
          {
            title: 'Finn frem kontaktlisten på papir',
            detail: 'Uten telefonen husker de fleste få nummer utenat.',
          },
          {
            title: 'Avtal oppmøtested med familien',
            detail: 'Bestem hvor og når dere møtes hvis dere ikke får kontakt.',
          },
          {
            title: 'Trenger du hjelp: møt opp',
            detail: 'Gå til legevakt, brannstasjon, politi eller informasjonspunkt kommunen oppretter.',
          },
        ],
      },
      {
        label: 'Hvis det varer',
        steps: [
          {
            title: 'Følg med på kommunens oppslag',
            detail: 'Kommunen kan bruke oppslag, høyttalerbil og oppmøtesteder for å nå innbyggerne.',
          },
          {
            title: 'Ta vare på medisiner',
            detail: 'Apotek kan ha problemer med e-resept. Ha reserve og papirkopi av viktige resepter.',
          },
          {
            title: 'Hjelp naboer med informasjon',
            detail: 'Del det du hører på radio, særlig med eldre og andre som bor alene.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Brann', value: '110' },
      { label: 'Politi', value: '112' },
      { label: 'Ambulanse', value: '113' },
      { label: 'Legevakt', value: '116 117' },
    ],
    supplies: ['kom-kontanter', 'kom-dabradio', 'kom-powerbank', 'kom-kontaktliste', 'annet-kopier', 'helse-medisiner'],
    relatedBook: 'kommunikasjon',
    source: 'DSB / egenberedskap.no, Norges Bank',
  },

  // ─── Brann i hjemmet ─────────────────────────────────────────────────────
  {
    id: 'brann-hjemme',
    title: 'Brann i hjemmet',
    question: 'Hva gjør jeg hvis det brenner hjemme?',
    category: 'hjem',
    icon: 'fire',
    severity: 'akutt',
    summary:
      'Røyk er farligere enn flammene og kan gjøre deg bevisstløs på kort tid. Varsle, redd og kom deg ut – så slukk bare hvis det er trygt.',
    dont: [
      'Ikke hell vann på brennende fett eller olje',
      'Ikke gå tilbake inn for å hente ting',
      'Ikke åpne en dør som er varm',
      'Ikke bruk heis',
      'Ikke gå gjennom tett røyk hvis du har et trygt alternativ',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Rop «Brann!» og få alle ut',
            detail: 'Varsle alle i boligen. Ta med barn og andre som trenger hjelp.',
          },
          {
            title: 'Lukk døren til rommet som brenner',
            detail: 'En lukket dør bremser røyk og flammer og kan redde liv.',
          },
          {
            title: 'Krabb lavt under røyken',
            detail: 'Den reneste luften er nær gulvet.',
          },
          {
            title: 'Ring 110 når du er ute',
            detail: 'Si adressen, hva som brenner og om noen er savnet.',
          },
          {
            title: 'Slukk bare hvis brannen er liten',
            detail: 'Bruk brannslukker eller brannteppe. Ha alltid rømningsveien bak deg.',
          },
        ],
      },
      {
        label: 'Hvis du er innestengt',
        steps: [
          {
            title: 'Lukk døren og tett sprekker',
            detail: 'Bruk klær, håndklær eller sengetøy – gjerne fuktig – langs dørsprekken.',
          },
          {
            title: 'Ring 110 og si hvor du er',
            detail: 'Gi adresse, etasje og hvilket rom du er i.',
          },
          {
            title: 'Gå til vinduet og gjør deg synlig',
            detail: 'Rop, vift med noe lyst og bruk lommelykt. Lukk vinduet igjen hvis røyk kommer inn.',
          },
        ],
      },
      {
        label: 'Komfyrbrann',
        steps: [
          {
            title: 'Slå av komfyren',
          },
          {
            title: 'Kvel flammene med lokk eller brannteppe',
            detail: 'La lokket ligge på til alt er kaldt.',
          },
          {
            title: 'Aldri vann på brennende fett',
            detail: 'Vann gjør at fettet eksploderer i en ildkule.',
          },
        ],
      },
      {
        label: 'Etterpå',
        steps: [
          {
            title: 'Samle alle på et avtalt møtested',
            detail: 'Tell opp og si fra til brannvesenet om noen mangler.',
          },
          {
            title: 'Søk legehjelp ved røykinnånding',
            detail: 'Hoste, hodepine eller tung pust kan være tegn på røykforgiftning. Ring 113 ved alvorlige symptomer.',
          },
          {
            title: 'Kontakt forsikringsselskapet',
            detail: 'Ikke gå inn igjen før brannvesenet sier at det er trygt.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Brann', value: '110' },
      { label: 'Røykvarsler', value: 'Test den hver måned' },
      { label: 'Røykfylt rom', value: 'Krabb lavt' },
    ],
    supplies: ['annet-brannslukker', 'lys-lommelykt', 'helse-forstehjelp'],
    relatedBook: 'grunnkurs',
    source: 'DSB / Brannvernforeningen',
  },

  // ─── Hjertestans ─────────────────────────────────────────────────────────
  {
    id: 'hjertestans',
    title: 'Noen faller om – hjertestans',
    question: 'Hva gjør jeg hvis noen faller om og ikke puster normalt?',
    category: 'helse',
    icon: 'heart-pulse',
    severity: 'akutt',
    summary:
      'Hvert minutt teller. Ring 113, start hjerte-lunge-redning med en gang og bruk hjertestarter så snart du får tak i en. Du kan ikke gjøre noe galt – bare det å ikke gjøre noe.',
    dont: [
      'Ikke vent med å starte – begynn HLR med en gang',
      'Ikke stopp kompresjonene unødig',
      'Ikke vær redd for å trykke for hardt',
      'Ikke la personen være alene for å hente utstyr hvis andre kan hente det',
      'Ikke legg på 113 før operatøren sier det',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Sjekk om personen reagerer',
            detail: 'Rist forsiktig i skuldrene og snakk høyt: «Hører du meg?»',
          },
          {
            title: 'Åpne luftveiene og sjekk pusten',
            detail: 'Bøy hodet bakover og løft haken. Se, lytt og kjenn etter normal pust i opptil 10 sekunder.',
          },
          {
            title: 'Ring 113 – sett telefonen på høyttaler',
            detail: '113 veileder deg og kan fortelle hvor nærmeste hjertestarter er.',
          },
          {
            title: 'Be noen hente hjertestarter',
            detail: 'Hjertestartere finnes ofte på kjøpesentre, skoler, idrettsanlegg og stasjoner.',
          },
        ],
      },
      {
        label: 'Start HLR',
        steps: [
          {
            title: 'Gi 30 brystkompresjoner',
            detail: 'Midt på brystet, 5–6 cm dypt, 100–120 i minuttet. Slipp helt opp mellom hvert trykk.',
          },
          {
            title: 'Gi 2 innblåsninger',
            detail: 'Klyp igjen nesen og blås til brystkassen hever seg. Klarer du ikke, gi bare kompresjoner.',
          },
          {
            title: 'Fortsett 30:2 uten pause',
            detail: 'Bytt med andre hvert annet minutt hvis dere er flere – det er tungt.',
          },
          {
            title: 'Bruk hjertestarteren straks den kommer',
            detail: 'Slå den på og følg stemmen. Fortsett HLR mens elektrodene settes på.',
          },
        ],
      },
      {
        label: 'Til hjelpen kommer',
        steps: [
          {
            title: 'Fortsett til ambulansen tar over',
            detail: 'Eller til personen våkner og begynner å puste normalt.',
          },
          {
            title: 'Puster personen normalt? Legg i stabilt sideleie',
            detail: 'Følg med på pusten hele tiden. Start HLR igjen hvis pusten stopper.',
          },
          {
            title: 'Send noen for å møte ambulansen',
            detail: 'Det sparer tid, særlig i store bygg og uoversiktlige områder.',
          },
        ],
      },
      {
        label: 'Etterpå',
        steps: [
          {
            title: 'Snakk med noen om det du opplevde',
            detail: 'Det er normalt å reagere i dagene etter. Fastlegen kan hjelpe hvis det ikke går over.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Ambulanse', value: '113' },
      { label: 'Kompresjoner : innblåsninger', value: '30 : 2' },
      { label: 'Dybde og takt', value: '5–6 cm · 100–120/min' },
    ],
    supplies: ['helse-forstehjelp'],
    relatedBook: 'forstehjelp',
    source: 'Norsk Resuscitasjonsråd, Helsedirektoratet',
  },

  // ─── Forgiftning ─────────────────────────────────────────────────────────
  {
    id: 'forgiftning',
    title: 'Forgiftning',
    question: 'Hva gjør jeg hvis noen har fått i seg noe giftig?',
    category: 'helse',
    icon: 'bottle-tonic-skull',
    severity: 'akutt',
    summary:
      'Ring Giftinformasjonen for råd. Har personen alvorlige symptomer – puster dårlig, er slapp, bevisstløs eller kramper – ring 113 med en gang.',
    dont: [
      'Ikke fremkall brekninger',
      'Ikke gi melk eller annet «mot gift» uten råd',
      'Ikke gi noe å drikke til en som er slapp eller bevisstløs',
      'Ikke vent på symptomer før du ringer for råd',
      'Ikke kast emballasjen – den viser hva det er',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Ring 113 ved alvorlige symptomer',
            detail: 'Pustevansker, bevisstløshet, kramper eller sterk påvirkning.',
          },
          {
            title: 'Ellers: ring Giftinformasjonen 22 59 13 00',
            detail: 'Døgnåpen. De vurderer om det er farlig og hva du skal gjøre.',
          },
          {
            title: 'Fjern resten av stoffet',
            detail: 'Ta det ut av munnen og hold det unna barn og andre.',
          },
          {
            title: 'Ha emballasjen klar',
            detail: 'Si hva, hvor mye, når, og personens alder og vekt.',
          },
        ],
      },
      {
        label: 'Etter type',
        steps: [
          {
            title: 'Svelget etsende: skyll munnen, drikk litt vann',
            detail: 'Bare et lite glass. Ikke fremkall brekninger.',
          },
          {
            title: 'I øynene: skyll med lunkent vann i lang tid',
            detail: 'Hold øyet åpent og skyll i minst 5–15 minutter. Ta ut kontaktlinser.',
          },
          {
            title: 'På huden: ta av klær og skyll godt',
            detail: 'Skyll med mye vann og vask med såpe etterpå.',
          },
          {
            title: 'Innånding, røyk eller kullos: frisk luft',
            detail: 'Få personen ut i frisk luft hvis det er trygt for deg. Ring 113 ved symptomer.',
          },
        ],
      },
      {
        label: 'Mens du venter',
        steps: [
          {
            title: 'Følg med på pust og bevissthet',
            detail: 'Legg personen i stabilt sideleie hvis hen er bevisstløs men puster normalt.',
          },
          {
            title: 'Start HLR hvis pusten stopper',
            detail: 'Ring 113 og følg veiledningen.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Giftinformasjonen (døgnåpen)', value: '22 59 13 00' },
      { label: 'Alvorlige symptomer', value: '113' },
      { label: 'Fremkalle brekninger', value: 'Nei' },
    ],
    supplies: ['kom-kontaktliste', 'helse-forstehjelp', 'vann'],
    relatedBook: 'forstehjelp',
    source: 'Giftinformasjonen / Helsedirektoratet',
  },

  // ─── Flom ────────────────────────────────────────────────────────────────
  {
    id: 'flom',
    title: 'Flom og overvann',
    question: 'Hva gjør jeg hvis det er fare for flom eller vann kommer inn?',
    category: 'natur',
    icon: 'home-flood',
    severity: 'alvorlig',
    summary:
      'Flom og overvann etter kraftig regn kan komme raskt. Flytt verdier opp, hold deg unna vannmassene og følg rådene fra kommunen og varsom.no.',
    dont: [
      'Ikke kjør eller gå gjennom vann på veien – selv lite strømmende vann kan rive deg med',
      'Ikke oppsøk elver og bekker for å se på flommen',
      'Ikke rør elektriske anlegg som står i vann',
      'Ikke la barn leke i flomvann – det kan være forurenset',
      'Ikke vent for lenge med å evakuere hvis du blir bedt om det',
    ],
    phases: [
      {
        label: 'Når det er varslet',
        steps: [
          {
            title: 'Følg flomvarselet på varsom.no',
            detail: 'Se farenivået for ditt område og følg med på oppdateringer.',
          },
          {
            title: 'Rens sluk, takrenner og stikkrenner',
            detail: 'Gi overvannet en vei bort fra huset.',
          },
          {
            title: 'Flytt verdier og strømførende ting opp',
            detail: 'Bær ting fra kjeller og første etasje til høyere etasjer.',
          },
          {
            title: 'Flytt bilen til høyere grunn',
          },
          {
            title: 'Ha evakueringssekken klar',
            detail: 'Med medisiner, dokumenter, lader, varme klær og mat.',
          },
        ],
      },
      {
        label: 'Når vannet kommer',
        steps: [
          {
            title: 'Gå til høyere etasje',
            detail: 'Ta med vann, mat, telefon og radio.',
          },
          {
            title: 'Slå av strømmen hvis vann når elektrisk anlegg',
            detail: 'Bare hvis du kan gjøre det tørrskodd og trygt.',
          },
          {
            title: 'Følg beskjed om evakuering',
            detail: 'Ta med evakueringssekken og bruk anviste ruter.',
          },
          {
            title: 'Ring 112 ved fare for liv',
          },
        ],
      },
      {
        label: 'Etterpå',
        steps: [
          {
            title: 'Vent med å gå inn til det er trygt',
            detail: 'Vær obs på skader på bygget og det elektriske anlegget.',
          },
          {
            title: 'Dokumenter skadene',
            detail: 'Ta bilder og kontakt forsikringsselskapet før du kaster ting.',
          },
          {
            title: 'Vask hender etter kontakt med flomvann',
            detail: 'Vannet kan inneholde kloakk og kjemikalier. Kast mat som har vært i kontakt med det.',
          },
          {
            title: 'Sjekk om drikkevannet er trygt',
            detail: 'Har du egen brønn kan den være forurenset. Følg rådene fra kommunen.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Flomvarsler', value: 'NVE / varsom.no' },
      { label: 'Strømmende vann over veien', value: 'Ikke kjør' },
      { label: 'Flomvann', value: 'Regn med forurenset' },
    ],
    supplies: ['vann', 'kom-dabradio', 'kom-powerbank', 'lys-lommelykt', 'hyg-soppelsekker', 'annet-kopier'],
    relatedBook: 'grunnkurs',
    source: 'NVE / varsom.no, DSB',
  },

  // ─── Kulde uten oppvarming ───────────────────────────────────────────────
  {
    id: 'kulde',
    title: 'Kulde uten oppvarming',
    question: 'Hva gjør jeg hvis det er kaldt og jeg ikke kan varme opp boligen?',
    category: 'hjem',
    icon: 'snowflake-thermometer',
    severity: 'alvorlig',
    summary:
      'En norsk bolig kan bli kald på et døgn eller to. Samle varmen i ett rom, kle deg riktig og pass ekstra på barn, eldre og syke.',
    dont: [
      'Ikke bruk grill, gassovn, terrassevarmer eller aggregat innendørs',
      'Ikke varm opp med komfyrens stekeovn eller kokeplater',
      'Ikke sov i bilen med motoren i gang',
      'Ikke drikk alkohol for å holde varmen',
      'Ikke glem kjæledyr og naboer',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Samle alle i det minste rommet',
            detail: 'Velg et rom med vedovn eller et rom midt i boligen. Lukk dører til resten.',
          },
          {
            title: 'Tett vinduer og dørsprekker',
            detail: 'Bruk tepper, håndklær og gardiner. Dekk store vinduer om natten.',
          },
          {
            title: 'Kle deg i ull, lag på lag',
            detail: 'Ull innerst, så et varmende lag, og lue, votter og ullsokker.',
          },
          {
            title: 'Spis og drikk varmt',
            detail: 'Kroppen trenger energi for å holde varmen.',
          },
        ],
      },
      {
        label: 'Om natten',
        steps: [
          {
            title: 'Sov i sovepose eller under flere dyner',
            detail: 'Legg et isolerende underlag mellom deg og gulvet.',
          },
          {
            title: 'Sov tett sammen',
            detail: 'Kroppsvarme deles. Små barn kan sove sammen med en voksen.',
          },
          {
            title: 'Sjekk barn og eldre jevnlig',
            detail: 'Kalde hender og føtter, blek hud, skjelving og sløvhet er tegn på nedkjøling.',
          },
        ],
      },
      {
        label: 'Hvis det varer',
        steps: [
          {
            title: 'Unngå frostskader på vannrørene',
            detail: 'Ved fare for frost i huset: steng hovedkranen og tapp ned rørene.',
          },
          {
            title: 'Spør kommunen om varmestue',
            detail: 'Kommunen kan åpne varme oppholdssteder ved langvarig kulde og strømbrudd.',
          },
          {
            title: 'Vurder å flytte til familie eller venner',
            detail: 'Særlig hvis du har små barn, er eldre eller syk.',
          },
          {
            title: 'Ring 113 ved alvorlig nedkjøling',
            detail: 'Tegn er forvirring, sløvhet og at skjelvingen stopper selv om personen er kald.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Varmestuer', value: 'Kommunen informerer' },
      { label: 'Kullos (CO)', value: 'Usynlig og luktfri' },
      { label: 'Mest varme tapes via', value: 'Hode, hender og føtter' },
    ],
    supplies: [
      'varme-ull',
      'varme-sovepose',
      'varme-ved',
      'varme-fyrstikker',
      'varme-kokeapparat',
      'mat-havregryn',
      'mat-hermetikk',
      'kom-dabradio',
    ],
    relatedBook: 'varme',
    source: 'DSB / egenberedskap.no, Helsedirektoratet',
  },

  // ─── Bilen står fast i kulde ─────────────────────────────────────────────
  {
    id: 'bil-kulde',
    title: 'Bilen står fast i kulde',
    question: 'Hva gjør jeg hvis bilen står fast i kulde og snø?',
    category: 'sikkerhet',
    icon: 'car-off',
    severity: 'alvorlig',
    summary:
      'Bilen gir ly og er lettere å finne enn deg. Bli i bilen hvis det er trygt, hold deg varm og pass på at eksosen ikke kommer inn.',
    dont: [
      'Ikke gå fra bilen i uvær eller mørke uten å vite at hjelpen er nær',
      'Ikke la motoren gå med eksosrøret tettet av snø – fare for kullos',
      'Ikke la motoren gå hele tiden – spar drivstoff',
      'Ikke sovne med motoren i gang',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Slå på nødblink og sett ut varseltrekant',
            detail: 'Bruk refleksvest når du går ut av bilen.',
          },
          {
            title: 'Ring etter hjelp',
            detail: 'Veihjelp eller forsikringsselskap. Er noen i fare, ring 112 eller 113.',
          },
          {
            title: 'Si hvor du er så nøyaktig som mulig',
            detail: 'Veinavn, nærmeste sted eller kjente punkter. Del gjerne posisjonen fra telefonen.',
          },
        ],
      },
      {
        label: 'Mens du venter',
        steps: [
          {
            title: 'Hold eksosrøret fritt for snø',
            detail: 'Sjekk og måk rundt eksosrøret jevnlig, særlig i snøfokk.',
          },
          {
            title: 'Kjør motoren i korte perioder',
            detail: 'For eksempel 10 minutter i timen, med et vindu litt på gløtt.',
          },
          {
            title: 'Ta på alle klærne du har',
            detail: 'Bruk tepper og sovepose. Hold dere tett sammen.',
          },
          {
            title: 'Spis, drikk og beveg deg litt',
            detail: 'Små bevegelser holder varmen oppe. Unngå å svette.',
          },
          {
            title: 'Gjør bilen synlig',
            detail: 'Bruk nødblink i perioder og fest noe med farge på antennen eller vinduet.',
          },
        ],
      },
      {
        label: 'Før neste vintertur',
        steps: [
          {
            title: 'Ha vinterutstyr i bilen',
            detail: 'Spade, varme klær, sovepose, lommelykt, mat, drikke og ladekabel.',
          },
          {
            title: 'Sjekk vær og veimeldinger før du kjører',
          },
          {
            title: 'Hold tanken eller batteriet godt fylt',
          },
        ],
      },
    ],
    facts: [
      { label: 'Politi / nødhjelp', value: '112' },
      { label: 'Eksosrør tett av snø', value: 'Kullosfare' },
      { label: 'Bli ved bilen', value: 'Lettere å bli funnet' },
    ],
    supplies: ['varme-sovepose', 'varme-ull', 'lys-lommelykt', 'kom-powerbank', 'mat-snacks', 'vann'],
    relatedBook: 'friluft',
    source: 'Statens vegvesen, Politiet, DSB',
  },

  // ─── Isolert på hytta ────────────────────────────────────────────────────
  {
    id: 'hytte-isolert',
    title: 'Isolert på hytta',
    question: 'Hva gjør jeg hvis jeg blir isolert på hytta?',
    category: 'sikkerhet',
    icon: 'cabin-a-frame',
    severity: 'moderat',
    summary:
      'Uvær, ras eller stengte veier kan gjøre at du blir værende lenger enn planlagt. Med varme, vann og mat er du trygg – vent til det er sikkert å dra.',
    dont: [
      'Ikke legg ut på tur i dårlig vær for å komme deg hjem',
      'Ikke bruk gassovn eller grill innendørs uten god lufting',
      'Ikke kast bort mobilbatteriet',
      'Ikke undervurder hvor fort ved og vann kan gå med',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Gi beskjed til noen hjemme',
            detail: 'Si hvor du er, hvem som er med og hva du har av forsyninger.',
          },
          {
            title: 'Lag oversikt over mat, vann og ved',
            detail: 'Fordel det på antall dager du kanskje må bli.',
          },
          {
            title: 'Sjekk vær og veimeldinger',
            detail: 'Lytt på radio eller sjekk yr.no og varsom.no mens du har dekning.',
          },
        ],
      },
      {
        label: 'Mens du venter',
        steps: [
          {
            title: 'Hold varmen i ett rom',
            detail: 'Fyr jevnt og sparsomt. Lukk dører til rom du ikke bruker.',
          },
          {
            title: 'Skaff vann fra snø eller bekk',
            detail: 'Kok eller rens vannet før du drikker det.',
          },
          {
            title: 'Sørg for lufting når du fyrer',
            detail: 'Ha røykvarsler og helst CO-varsler. Sjekk at pipa trekker.',
          },
          {
            title: 'Avtal faste tidspunkt for kontakt',
            detail: 'Da sparer du batteri, og andre vet når de skal reagere.',
          },
        ],
      },
      {
        label: 'Hvis noen blir syk eller skadet',
        steps: [
          {
            title: 'Ring 113 ved alvorlig sykdom eller skade',
            detail: 'Beskriv hvor dere er og hvordan man kommer frem.',
          },
          {
            title: 'Ring legevakt 116 117 ved mindre akutt behov',
          },
        ],
      },
    ],
    facts: [
      { label: 'Snø til vann', value: 'Krever mye brensel' },
      { label: 'Nødnummer', value: '110 · 112 · 113' },
      { label: 'Legevakt', value: '116 117' },
    ],
    supplies: [
      'varme-ved',
      'varme-fyrstikker',
      'varme-sovepose',
      'varme-kokeapparat',
      'vannrens',
      'mat-torrmat',
      'mat-hermetikk',
      'lys-lommelykt',
      'kom-dabradio',
      'kom-powerbank',
      'helse-forstehjelp',
    ],
    relatedBook: 'friluft',
    source: 'DSB / egenberedskap.no, Den Norske Turistforening',
  },

  // ─── Skogbrann ───────────────────────────────────────────────────────────
  {
    id: 'skogbrann',
    title: 'Skogbrann eller gressbrann',
    question: 'Hva gjør jeg hvis det brenner i skog eller gress nær meg?',
    category: 'natur',
    icon: 'fire-alert',
    severity: 'alvorlig',
    summary:
      'Skogbrann kan spre seg svært raskt i vind og tørke. Varsle 110, kom deg i sikkerhet og følg beskjed fra brannvesen og politi.',
    dont: [
      'Ikke forsøk å slukke en brann som er større enn du rekker over',
      'Ikke rømme oppover en li – brann sprer seg raskest oppover',
      'Ikke kjør inn i røyken',
      'Ikke oppsøk brannen for å se eller filme',
      'Ikke gjør opp ild i eller nær skog og utmark når det er tørt',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Ring 110',
            detail: 'Si hvor brannen er, hvor stor den er og hvilken vei den beveger seg.',
          },
          {
            title: 'Kom deg bort – på tvers av vinden',
            detail: 'Gå bort fra røyken og helst nedover i terrenget, mot vei, vann eller åpne områder.',
          },
          {
            title: 'Slukk bare helt små branner',
            detail: 'Bruk vann, jord eller grønne kvister mens du har trygg retrett.',
          },
        ],
      },
      {
        label: 'Hvis brannen nærmer seg hjemmet',
        steps: [
          {
            title: 'Lytt på NRK og følg beskjeder',
            detail: 'Dra med en gang hvis du blir bedt om å evakuere.',
          },
          {
            title: 'Lukk vinduer, dører og ventiler',
            detail: 'Slå av ventilasjonen for å holde røyken ute.',
          },
          {
            title: 'Flytt brennbart bort fra huset',
            detail: 'Hagemøbler, ved, gassflasker og søppel.',
          },
          {
            title: 'Ha evakueringssekk og bil klar',
            detail: 'Park bilen med fronten ut mot veien.',
          },
        ],
      },
      {
        label: 'Etterpå',
        steps: [
          {
            title: 'Vent på klarsignal før du drar tilbake',
            detail: 'Brann kan blusse opp igjen fra glør i bakken.',
          },
          {
            title: 'Søk lege ved pustebesvær',
            detail: 'Røyk kan gi plager, særlig for barn, eldre og personer med astma.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Brann', value: '110' },
      { label: 'Generelt bålforbud nær skog', value: '15. april–15. sept.' },
      { label: 'Brann sprer seg raskest', value: 'Oppover og med vinden' },
    ],
    supplies: ['kom-dabradio', 'kom-powerbank', 'vann', 'helse-forstehjelp', 'annet-kopier'],
    relatedBook: 'grunnkurs',
    source: 'DSB, Meteorologisk institutt',
  },

  // ─── Skred ───────────────────────────────────────────────────────────────
  {
    id: 'skred',
    title: 'Skred – jord, kvikkleire eller snø',
    question: 'Hva gjør jeg hvis det går skred eller er fare for skred der jeg bor?',
    category: 'natur',
    icon: 'landslide',
    severity: 'akutt',
    summary:
      'Skred kommer brått. Ved tegn på fare: kom deg bort fra skråninger og skredløp, varsle og følg rådene fra varsom.no og myndighetene.',
    dont: [
      'Ikke gå inn i et skredområde for å se eller hente ting',
      'Ikke stå nedenfor bratte skråninger eller i bekkeløp ved mye regn',
      'Ikke kjør forbi stengte veier eller sperringer',
      'Ikke gå tilbake før myndighetene sier det er trygt',
    ],
    phases: [
      {
        label: 'Tegn på fare',
        steps: [
          {
            title: 'Følg med på farevarsler på varsom.no',
            detail: 'Jordskred, snøskred og flom varsles der.',
          },
          {
            title: 'Se etter sprekker, sig og uvanlige lyder',
            detail: 'Nye sprekker i bakken, skjeve trær eller stolper, brak eller buldring.',
          },
          {
            title: 'Vær obs på bekker som plutselig endrer seg',
            detail: 'Grumsete vann, mye stein og grus eller en bekk som tørker ut kan bety skred lenger opp.',
          },
        ],
      },
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Kom deg bort – til siden for skredbanen',
            detail: 'Gå på tvers av skredretningen, mot høyere og fast grunn.',
          },
          {
            title: 'Kvikkleire: kom deg langt unna',
            detail: 'Kvikkleireskred kan utvide seg bakover. Hold god avstand til skredkanten.',
          },
          {
            title: 'Ring 112 – eller 113 hvis noen er skadet',
            detail: 'Si hvor skredet er og om noen kan være tatt.',
          },
          {
            title: 'Varsle naboer',
          },
        ],
      },
      {
        label: 'Noen er tatt av snøskred',
        steps: [
          {
            title: 'Ring 112 og start søk med en gang',
            detail: 'Kameratredning de første minuttene er avgjørende.',
          },
          {
            title: 'Søk der personen sist ble sett, nedover',
            detail: 'Bruk skredsøker og søkestang hvis dere har det.',
          },
          {
            title: 'Grav fri hodet og luftveiene først',
          },
        ],
      },
      {
        label: 'Etterpå',
        steps: [
          {
            title: 'Følg beskjed om evakuering og retur',
          },
          {
            title: 'Meld fra om skader og nye tegn',
            detail: 'Kontakt kommunen hvis du ser nye sprekker eller sig.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Skredvarsler', value: 'NVE / varsom.no' },
      { label: 'Snøskred – kameratredning', value: 'Minuttene teller' },
      { label: 'Kom deg ut av skredbanen', value: 'Til siden' },
    ],
    supplies: ['kom-dabradio', 'kom-powerbank', 'lys-lommelykt', 'helse-forstehjelp'],
    relatedBook: 'grunnkurs',
    source: 'NVE / varsom.no, DSB',
  },

  // ─── Pandemi ─────────────────────────────────────────────────────────────
  {
    id: 'pandemi',
    title: 'Smittsom sykdom og pandemi',
    question: 'Hva gjør jeg ved utbrudd av en alvorlig smittsom sykdom?',
    category: 'helse',
    icon: 'virus',
    severity: 'moderat',
    summary:
      'Gode vaner og riktig informasjon er det viktigste vernet. Følg rådene fra Folkehelseinstituttet og kommunen, og planlegg for å kunne være hjemme en stund.',
    dont: [
      'Ikke gå på jobb, skole eller besøk når du er syk',
      'Ikke møt opp på legekontor eller legevakt uten å ringe først',
      'Ikke hamstre – kjøp litt ekstra i god tid',
      'Ikke spre rykter eller ubekreftede råd',
      'Ikke ta antibiotika uten resept – det virker ikke mot virus',
    ],
    phases: [
      {
        label: 'Når smitten sprer seg',
        steps: [
          {
            title: 'Følg rådene fra FHI og kommunen',
            detail: 'Rådene kan endre seg raskt. Bruk fhi.no, helsenorge.no og NRK.',
          },
          {
            title: 'Vask hendene ofte',
            detail: 'Med såpe og vann, eller bruk håndsprit når du ikke har vann.',
          },
          {
            title: 'Host og nys i albuen',
          },
          {
            title: 'Hold avstand til andre',
            detail: 'Særlig til eldre og personer med kronisk sykdom.',
          },
        ],
      },
      {
        label: 'Hvis du blir syk',
        steps: [
          {
            title: 'Hold deg hjemme',
            detail: 'Unngå nær kontakt med andre i husstanden så godt det lar seg gjøre.',
          },
          {
            title: 'Ring fastlegen eller 116 117 ved behov',
            detail: 'Ring alltid før du møter opp.',
          },
          {
            title: 'Ring 113 ved alvorlige symptomer',
            detail: 'Tung pust, brystsmerter, forvirring eller at du blir raskt mye verre.',
          },
          {
            title: 'Drikk mye og hvil',
            detail: 'Bruk febernedsettende etter pakningsvedlegget.',
          },
        ],
      },
      {
        label: 'Hvis det varer',
        steps: [
          {
            title: 'Ha medisiner nok for en periode',
            detail: 'Sørg for at faste medisiner ikke går tom.',
          },
          {
            title: 'Avtal hjelp med naboer og familie',
            detail: 'Noen kan handle for den som er i isolasjon.',
          },
          {
            title: 'Hold kontakt med andre digitalt',
            detail: 'Isolasjon kan tære. Snakk med noen hver dag.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Legevakt', value: '116 117' },
      { label: 'Ambulanse', value: '113' },
      { label: 'Råd og informasjon', value: 'FHI / helsenorge.no' },
    ],
    supplies: ['helse-medisiner', 'helse-reseptfritt', 'helse-forstehjelp', 'hyg-vatserv', 'hyg-dopapir', 'mat-hermetikk', 'mat-torrmat'],
    relatedBook: 'psyke',
    source: 'Folkehelseinstituttet, Helsedirektoratet',
  },

  // ─── Evakuering ──────────────────────────────────────────────────────────
  {
    id: 'evakuering',
    title: 'Du må evakuere',
    question: 'Hva gjør jeg hvis jeg må forlate hjemmet raskt?',
    category: 'sikkerhet',
    icon: 'exit-run',
    severity: 'alvorlig',
    summary:
      'Når myndighetene ber deg evakuere, er det fordi det er farlig å bli. Ta med det viktigste, sikre boligen kort og følg anviste ruter.',
    dont: [
      'Ikke bruk tid på å pakke mer enn det viktigste',
      'Ikke ta snarveier – følg rutene politiet anviser',
      'Ikke vend tilbake før du får beskjed om at det er trygt',
      'Ikke glem medisinene dine',
      'Ikke ring nødnumrene for å spørre om informasjon – lytt på radio',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Ta evakueringssekken',
            detail: 'Medisiner, ID, mobil og lader, nøkler, kontanter, varme klær og litt mat og vann.',
          },
          {
            title: 'Hjelp barn, eldre og dyr',
            detail: 'Ta med det kjæledyrene trenger.',
          },
          {
            title: 'Slå av komfyr, ovner og apparater',
            detail: 'Steng vann og strøm hvis myndighetene ber om det, eller ved flom.',
          },
          {
            title: 'Lukk vinduer og lås døren',
          },
        ],
      },
      {
        label: 'På vei',
        steps: [
          {
            title: 'Følg rutene myndighetene oppgir',
            detail: 'Lytt på NRK underveis.',
          },
          {
            title: 'Ta med naboer som trenger skyss',
          },
          {
            title: 'Gi familien beskjed om hvor du drar',
            detail: 'Send SMS hvis det er vanskelig å ringe.',
          },
        ],
      },
      {
        label: 'Når du er fremme',
        steps: [
          {
            title: 'Registrer deg på evakuertesenteret',
            detail: 'Da kan pårørende og myndighetene finne ut at du er trygg – også hvis du bor hos familie.',
          },
          {
            title: 'Følg med på informasjon fra kommunen',
          },
          {
            title: 'Ta vare på deg selv og hverandre',
            detail: 'Det er normalt å være urolig. Snakk sammen og hold rutiner for barna.',
          },
        ],
      },
    ],
    facts: [
      { label: 'Info underveis', value: 'NRK / DAB-radio' },
      { label: 'Husk registrering', value: 'Evakuertesenter' },
      { label: 'Ved fare for liv', value: '112' },
    ],
    supplies: [
      'helse-medisiner',
      'annet-kopier',
      'kom-powerbank',
      'kom-kontanter',
      'kom-kontaktliste',
      'varme-ull',
      'vann',
      'mat-snacks',
      'mat-dyr',
      'mat-barnemat',
      'hyg-bleier',
    ],
    relatedBook: 'grunnkurs',
    source: 'DSB / egenberedskap.no, Politiet',
  },

  // ─── Farlige stoffer / gasslekkasje ──────────────────────────────────────
  {
    id: 'farlige-stoffer',
    title: 'Gasslekkasje og farlige stoffer',
    question: 'Hva gjør jeg ved gasslekkasje eller utslipp av farlige stoffer?',
    category: 'sikkerhet',
    icon: 'gas-cylinder',
    severity: 'akutt',
    summary:
      'Inne: unngå gnister og kom deg ut. Ute: gå inn, lukk alt og slå av ventilasjonen – eller kom deg bort på tvers av vindretningen.',
    dont: [
      'Ikke tenn lys, fyrstikker eller sigaretter ved gasslukt',
      'Ikke slå på eller av strømbrytere eller elektriske apparater ved gasslukt',
      'Ikke gå mot skyen eller røyken for å se',
      'Ikke gå med vinden – gå på tvers',
      'Ikke hent barn fra skole eller barnehage hvis du blir bedt om å holde deg inne',
    ],
    phases: [
      {
        label: 'Gasslukt innendørs',
        steps: [
          {
            title: 'Steng gassventilen hvis du kan',
          },
          {
            title: 'Åpne vinduer og dører',
            detail: 'Uten å bruke strømbrytere eller annet som kan gi gnister.',
          },
          {
            title: 'Få alle ut',
          },
          {
            title: 'Ring 110 når du er ute',
          },
        ],
      },
      {
        label: 'Utslipp ute – er du i nærheten',
        steps: [
          {
            title: 'Gå inn og lukk vinduer og dører',
            detail: 'Et vanlig hus gir god beskyttelse den første tiden.',
          },
          {
            title: 'Slå av ventilasjon og varmepumpe',
            detail: 'Steng også ventiler hvis du kan.',
          },
          {
            title: 'Er du ute: gå på tvers av vinden',
            detail: 'Bort fra skyen, og helst opp i terrenget – mange gasser er tyngre enn luft.',
          },
          {
            title: 'Lytt på NRK og følg beskjeder',
            detail: 'Myndighetene sier fra når det er trygt å gå ut eller lufte.',
          },
        ],
      },
      {
        label: 'Ved symptomer',
        steps: [
          {
            title: 'Ring 113 ved pustevansker eller slapphet',
          },
          {
            title: 'Skyll hud og øyne med mye vann',
            detail: 'Ta av forurensede klær og legg dem i en lukket pose.',
          },
          {
            title: 'Ring Giftinformasjonen 22 59 13 00 for råd',
          },
        ],
      },
      {
        label: 'Etterpå',
        steps: [
          {
            title: 'Luft godt når myndighetene sier det er trygt',
          },
          {
            title: 'Følg råd om mat, vann og hage',
          },
        ],
      },
    ],
    facts: [
      { label: 'Brann og gass', value: '110' },
      { label: 'Giftinformasjonen', value: '22 59 13 00' },
      { label: 'Gå bort', value: 'På tvers av vinden' },
    ],
    supplies: ['kom-dabradio', 'helse-forstehjelp', 'hyg-soppelsekker', 'vann'],
    relatedBook: 'grunnkurs',
    source: 'DSB, Giftinformasjonen',
  },

  // ─── Viktig melding – søk informasjon ────────────────────────────────────
  {
    id: 'viktig-melding',
    title: 'Viktig melding – søk informasjon',
    question: 'Hva gjør jeg hvis jeg hører signalet «Viktig melding – søk informasjon»?',
    category: 'sikkerhet',
    icon: 'bullhorn',
    severity: 'akutt',
    summary:
      'Signalet betyr at noe alvorlig har skjedd, for eksempel en gasslekkasje eller en stor brann. Gå inn og søk informasjon med en gang – på radio, TV eller myndighetenes nettsider. Signalet het tidligere «Viktig melding – lytt på radio».',
    dont: [
      'Ikke bli ute for å finne ut hva som skjer',
      'Ikke ring nødnumrene for å spørre hva signalet betyr',
      'Ikke stol på rykter – bruk NRK og myndighetenes egne kanaler',
      'Ikke dra for å hente noen hvis du blir bedt om å holde deg inne',
    ],
    phases: [
      {
        label: 'Kjenn igjen signalet',
        steps: [
          {
            title: 'Tre serier med tre støt',
            detail: 'Det er ett minutts opphold mellom seriene. Signalet kan også gis med kirkeklokker.',
          },
          {
            title: 'Sjekk mobilen for Nødvarsel',
            detail: 'Myndighetene kan sende varsel direkte til mobiler i området via mobilnettet.',
          },
        ],
      },
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Gå innendørs',
          },
          {
            title: 'Lukk vinduer og dører',
          },
          {
            title: 'Søk informasjon',
            detail: 'Bruk NRK P1 på radio eller NRK på TV, eller sjekk myndighetenes nettsider og kontoer i sosiale medier. DAB-radio virker også uten strøm og mobilnett.',
          },
          {
            title: 'Følg myndighetenes råd',
            detail: 'Rådene avhenger av hva som har skjedd: gasslekkasje, brann, atomhendelse eller noe annet.',
          },
        ],
      },
      {
        label: 'Mens du venter',
        steps: [
          {
            title: 'Slå av ventilasjonen hvis du blir bedt om det',
          },
          {
            title: 'Gi beskjed til naboer som ikke har hørt det',
            detail: 'Særlig eldre og personer med nedsatt hørsel.',
          },
          {
            title: 'Bruk telefonen minst mulig',
            detail: 'Hold nettet ledig for nødetatene. Send heller SMS.',
          },
        ],
      },
      {
        label: 'Når faren er over',
        steps: [
          {
            title: 'Signalet «Faren over» er ett langt støt',
            detail: 'Ett sammenhengende signal i ca. 30 sekunder.',
          },
          {
            title: 'Fortsett å følge rådene fra myndighetene',
          },
        ],
      },
    ],
    facts: [
      { label: 'Viktig melding', value: '3 serier à 3 støt, 1 min opphold' },
      { label: 'Faren over', value: '1 langt støt, ca. 30 sek' },
      { label: 'Test av signalene og Nødvarsel', value: 'Kl. 12, andre onsdag i januar og juni' },
    ],
    supplies: ['kom-dabradio', 'lys-batterier', 'kom-powerbank'],
    relatedBook: 'kommunikasjon',
    source: 'Sivilforsvaret / DSB, Statsforvalteren',
  },

  // ─── Atomhendelse ────────────────────────────────────────────────────────
  {
    id: 'atomhendelse',
    title: 'Atomulykke og radioaktivt nedfall',
    question: 'Hva gjør jeg ved en atomulykke eller radioaktivt nedfall?',
    category: 'sikkerhet',
    icon: 'radioactive',
    severity: 'akutt',
    summary:
      'Det viktigste er å gå inn og holde deg inne. Lytt på NRK. Ta jodtabletter bare hvis myndighetene ber om det.',
    dont: [
      'Ikke ta jodtabletter før myndighetene sier at du skal',
      'Ikke bli ute for å hente noen hvis du blir bedt om å holde deg inne',
      'Ikke spis grønnsaker, bær eller sopp fra utendørs før du får råd',
      'Ikke lufte ut før myndighetene sier at det er trygt',
      'Ikke ta jod hvis du er over 40 år – du har liten nytte av det',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Gå inn og bli inne',
            detail: 'Vegger og tak skjermer mot strålingen. Kjeller eller midten av huset er best.',
          },
          {
            title: 'Lukk vinduer, dører og ventiler',
          },
          {
            title: 'Slå av ventilasjon og varmepumpe',
          },
          {
            title: 'Lytt på NRK',
            detail: 'Myndighetene gir råd om hvor lenge du skal være inne, og om jod.',
          },
        ],
      },
      {
        label: 'Hvis du har vært ute',
        steps: [
          {
            title: 'Ta av ytterklær og sko i gangen',
            detail: 'Legg dem i en tett pose.',
          },
          {
            title: 'Dusj og vask håret',
            detail: 'Uten balsam. Det fjerner det meste av radioaktivt støv.',
          },
          {
            title: 'Tørk av kjæledyr som har vært ute',
          },
        ],
      },
      {
        label: 'Jodtabletter',
        steps: [
          {
            title: 'Ta jod bare når myndighetene sier det',
            detail: 'Jod beskytter bare skjoldbruskkjertelen, og bare hvis det tas til riktig tid.',
          },
          {
            title: 'Viktigst for barn, unge, gravide og ammende',
            detail: 'Voksne under 40 år kan også ta jod. Over 40 år er nytten liten.',
          },
          {
            title: 'Følg dosen i pakningsvedlegget',
            detail: 'Dosen avhenger av alder. Jod beskytter ikke mot annen stråling.',
          },
        ],
      },
      {
        label: 'Hvis det varer',
        steps: [
          {
            title: 'Bruk mat og vann du har inne',
            detail: 'Hermetikk, tørrmat og vann på flasker er trygt.',
          },
          {
            title: 'Følg råd om mat fra Mattilsynet og DSA',
            detail: 'Det kan komme råd om beite, hagebruk og sanking i lang tid etterpå.',
          },
          {
            title: 'Følg beskjed om evakuering hvis den kommer',
          },
        ],
      },
    ],
    facts: [
      { label: 'Beste vern', value: 'Gå inn, bli inne' },
      { label: 'Jod – målgruppe', value: 'Under 40, gravide, ammende' },
      { label: 'Jod tas', value: 'Kun på råd fra myndighetene' },
    ],
    supplies: ['helse-jod', 'kom-dabradio', 'vann', 'mat-hermetikk', 'mat-torrmat', 'hyg-soppelsekker'],
    relatedBook: 'grunnkurs',
    source: 'DSA – Direktoratet for strålevern og atomsikkerhet, DSB',
  },

  // ─── Flyalarm ────────────────────────────────────────────────────────────
  {
    id: 'flyalarm',
    title: 'Flyalarm',
    question: 'Hva gjør jeg hvis jeg hører flyalarm?',
    category: 'sikkerhet',
    icon: 'alarm-light',
    severity: 'akutt',
    summary:
      'Flyalarm betyr fare for angrep. Søk beskyttelse med en gang – i tilfluktsrom, kjeller eller et innerrom uten vinduer.',
    dont: [
      'Ikke bli stående ute for å se',
      'Ikke oppholde deg ved vinduer',
      'Ikke bruk heis',
      'Ikke forlat beskyttelsen før «Faren over»',
    ],
    phases: [
      {
        label: 'Med en gang',
        steps: [
          {
            title: 'Søk nærmeste tilfluktsrom',
            detail: 'Offentlige tilfluktsrom er skiltet. Er det for langt unna, gå i kjeller.',
          },
          {
            title: 'Ingen kjeller? Velg et innerrom',
            detail: 'Bad eller gang midt i boligen, med flest mulig vegger mellom deg og utsiden.',
          },
          {
            title: 'Er du ute: søk dekning',
            detail: 'Legg deg ned i en grøft eller forsenkning hvis det ikke finnes bygg i nærheten.',
          },
          {
            title: 'Ta med radio, vann og telefon',
            detail: 'Bare hvis det ikke forsinker deg.',
          },
        ],
      },
      {
        label: 'Mens du er i dekning',
        steps: [
          {
            title: 'Lytt på NRK',
            detail: 'Myndighetene gir informasjon og råd.',
          },
          {
            title: 'Hold deg unna vinduer og glass',
          },
          {
            title: 'Hjelp barn og andre rundt deg til å holde roen',
          },
        ],
      },
      {
        label: 'Når faren er over',
        steps: [
          {
            title: 'Vent på «Faren over»',
            detail: 'Ett sammenhengende signal i ca. 30 sekunder.',
          },
          {
            title: 'Vær forsiktig ute',
            detail: 'Hold deg unna skadde bygg og ukjente gjenstander. Meld fra til politiet.',
          },
          {
            title: 'Gi familien beskjed om at du er trygg',
          },
        ],
      },
    ],
    facts: [
      { label: 'Flyalarm', value: 'Korte støt i ca. 1 min' },
      { label: 'Faren over', value: '1 langt støt, ca. 30 sek' },
      { label: 'Beskyttelse', value: 'Tilfluktsrom · kjeller · innerrom' },
    ],
    supplies: ['kom-dabradio', 'vann', 'lys-lommelykt', 'helse-forstehjelp', 'helse-medisiner'],
    relatedBook: 'psyke',
    source: 'Sivilforsvaret / DSB',
  },
];
