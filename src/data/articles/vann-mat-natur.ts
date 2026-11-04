import type { Article } from '../types';

/**
 * Leksikon – vann, mat og natur.
 * Basert på råd fra DSB/egenberedskap.no, FHI, Mattilsynet, Helsedirektoratet,
 * NVE/varsom.no, Miljødirektoratet, Statens naturoppsyn og DNT.
 */
export const articles: Article[] = [
  // ─── VANN ────────────────────────────────────────────────────────────────
  {
    id: 'vannbehov',
    title: 'Hvor mye vann trenger du?',
    category: 'vann',
    summary:
      'Regn med minst 3 liter drikkevann per person per døgn – mer ved varme, sykdom og hardt arbeid.',
    tags: ['vann', 'drikkevann', 'vannforbruk', 'væske', 'liter', 'water needs', 'tørst'],
    blocks: [
      {
        type: 'p',
        text: 'Uten vann blir du alvorlig svekket i løpet av få døgn – lenge før mangel på mat blir et problem. Vann er derfor det første du skal sikre i en krise.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Drikke og enkel matlaging', value: 'ca. 3 l per person per døgn' },
          { label: 'En uke (DSBs anbefaling)', value: 'ca. 20 l per person' },
          { label: 'Varme, feber, diaré, amming', value: 'trenger mer' },
          { label: 'Hygiene (i tillegg)', value: 'så mye du får til' },
        ],
      },
      {
        type: 'p',
        text: 'DSB anbefaler at husstanden kan klare seg selv i omtrent en uke. Med 3 liter per person per døgn tilsvarer det drøyt 20 liter per person bare til drikke og mat. Husk barn, kjæledyr og eventuelle medisiner som skal blandes med vann.',
      },
      { type: 'h', text: 'Slik sparer du vann' },
      {
        type: 'list',
        items: [
          'Prioriter drikkevann. Bruk det aldri til skylling eller vask hvis du kan unngå det.',
          'Velg mat som ikke må kokes i mye vann, og bruk kokevannet videre (f.eks. i suppe).',
          'Vask hender med våtservietter eller antibac når vannet er knapt – men vask med vann og såpe før matlaging hvis mulig.',
          'Unngå salt mat og alkohol. Begge øker væskebehovet.',
          'Hold deg i ro og i skyggen når det er varmt. Svette er tapt vann.',
        ],
      },
      {
        type: 'tip',
        title: 'Sjekk urinen',
        text: 'Lys gul urin betyr at du drikker nok. Mørk, sparsom urin er et tidlig tegn på at du trenger mer væske.',
      },
      {
        type: 'warning',
        text: 'Ikke rasjoner drikkevannet så hardt at du blir dehydrert. Drikk det du trenger, og bruk energien på å skaffe mer vann.',
      },
    ],
    related: ['lagre-vann', 'dehydrering', 'vann-i-boligen', 'koke-vann'],
    source: 'DSB / egenberedskap.no, Helsedirektoratet',
  },
  {
    id: 'lagre-vann',
    title: 'Lagre vann hjemme',
    category: 'vann',
    summary: 'Slik fyller, oppbevarer og bytter du ut et nødlager med drikkevann.',
    tags: ['vannlager', 'vannkanne', 'flasker', 'oppbevaring', 'nødvann', 'water storage', 'dunk'],
    blocks: [
      {
        type: 'p',
        text: 'Det enkleste nødlageret er kjøpt flaskevann eller rene kanner fylt med vann fra springen. Vann fra kommunalt nett holder seg godt når det tappes rent og lagres mørkt og kjølig.',
      },
      { type: 'h', text: 'Slik fyller du egne kanner' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Bruk kanner eller flasker beregnet for drikkevann/mat. Ikke bruk beholdere som har hatt kjemikalier.',
          'Vask med varmt vann og oppvaskmiddel, og skyll godt.',
          'La kaldt vann renne til det er skikkelig kaldt før du fyller.',
          'Fyll helt opp og skru korken godt til. Ikke ta på innsiden av kork eller tut.',
          'Merk med dato.',
          'Oppbevar mørkt og kjølig, gjerne der det ikke fryser.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Kjøpt flaskevann', value: 'se holdbarhetsdato' },
          { label: 'Egentappet springvann', value: 'bytt ut jevnlig, f.eks. hvert halvår' },
          { label: 'Mengde', value: 'ca. 3 l per person per døgn' },
        ],
      },
      {
        type: 'tip',
        title: 'Rotér',
        text: 'Bruk det gamle vannet til planter eller rengjøring når du fyller nytt. Legg inn en fast påminnelse, for eksempel når du bytter batteri i røykvarsleren.',
      },
      {
        type: 'warning',
        text: 'Ikke lagre vann i sollys eller ved siden av bensin, maling eller rengjøringsmidler. Plast kan ta opp lukt og smak.',
      },
      {
        type: 'p',
        text: 'Får du varsel om vannstans eller uvær, fyll i tillegg badekar, bøtter og kjeler. Dette vannet egner seg til toalettspyling og vask – kok det før du drikker det.',
      },
    ],
    related: ['vannbehov', 'vann-i-boligen', 'koke-vann', 'holdbar-mat'],
    source: 'DSB / egenberedskap.no, Mattilsynet',
  },
  {
    id: 'koke-vann',
    title: 'Koke vann',
    category: 'vann',
    summary:
      'Koking er den sikreste måten å gjøre vann trygt for bakterier, virus og parasitter – det holder at vannet koker opp.',
    tags: ['kokevarsel', 'koke opp', 'rense vann', 'desinfisere', 'boil water', 'drikkevann'],
    blocks: [
      {
        type: 'p',
        text: 'Ved kokevarsel fra kommunen, eller når du bruker vann fra natur, regnvann eller usikre kilder, er koking førstevalget. Koking dreper bakterier, virus og parasitter, men fjerner ikke kjemikalier, olje eller tungmetaller.',
      },
      { type: 'h', text: 'Slik gjør du' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Er vannet grumsete: la det stå så partikler synker, og hell av det klare. Sil gjerne gjennom en ren klut eller kaffefilter.',
          'Kok opp vannet til det bobler kraftig. FHI oppgir at det er tilstrekkelig at vannet når kokepunktet.',
          'La vannet avkjøles med lokk på.',
          'Oppbevar i rene, tildekkede beholdere. Bruk innen et døgn eller to.',
        ],
      },
      { type: 'h', text: 'Ved kokevarsel – bruk kokt vann til' },
      {
        type: 'list',
        items: [
          'Drikke, også til kjæledyr',
          'Matlaging der vannet ikke kokes, og skylling av frukt og grønt',
          'Tannpuss',
          'Isbiter og morsmelkerstatning',
        ],
      },
      {
        type: 'tip',
        title: 'Smak',
        text: 'Kokt vann smaker flatt. Hell det frem og tilbake mellom to rene kar for å få luft i det igjen.',
      },
      {
        type: 'warning',
        text: 'Koking hjelper ikke mot kjemisk forurensning (f.eks. etter flom fra industri eller oljesøl). Følg kommunens råd og bruk lagret vann.',
      },
    ],
    related: ['klor-desinfisering', 'vannfilter', 'vann-i-naturen', 'diare-og-oppkast'],
    source: 'Folkehelseinstituttet (FHI), Mattilsynet',
  },
  {
    id: 'klor-desinfisering',
    title: 'Klor og kjemisk vannrensing',
    category: 'vann',
    summary:
      'Klortabletter og klordioksid kan gjøre klart vann drikkbart når du ikke kan koke – følg alltid produktets bruksanvisning.',
    tags: ['klortabletter', 'klordioksid', 'vannrensetabletter', 'desinfisering', 'water purification tablets', 'kjemisk rensing'],
    blocks: [
      {
        type: 'p',
        text: 'Vannrensetabletter og -dråper er lette, holdbare og nyttige i sekken eller nødlageret. De virker godt mot bakterier og virus. Klordioksid virker i tillegg bedre mot parasitter enn vanlig klor.',
      },
      { type: 'h', text: 'Slik bruker du det' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Sil eller la vannet sedimentere først. Klor virker dårlig i grumsete vann.',
          'Dosér nøyaktig etter pakningen – både mengde vann og antall tabletter/dråper.',
          'Rist, og skyll gjengene på flasken med det behandlede vannet.',
          'Vent så lenge produktet sier, ofte minst 30 minutter. Lengre ved kaldt vann (under ca. 10 °C).',
          'En svak klorlukt etterpå er et tegn på at det er nok klor igjen.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Klor (natriumdiklorisocyanurat)', value: 'bakterier og virus' },
          { label: 'Klordioksid', value: 'også bedre mot Giardia/Cryptosporidium' },
          { label: 'Kaldt vann', value: 'lengre virketid' },
        ],
      },
      {
        type: 'warning',
        title: 'Ikke bruk husholdningsklor på måfå',
        text: 'Mange klorprodukter i butikken inneholder parfyme, såpe eller andre tilsetninger og er ikke beregnet for drikkevann. Bruk produkter laget for vannrensing, og aldri mer enn anbefalt.',
      },
      {
        type: 'p',
        text: 'Kjemisk rensing fjerner ikke kjemikalier, salt eller giftstoffer fra alger. Koking er fortsatt det sikreste når du har mulighet.',
      },
      {
        type: 'tip',
        text: 'Kombinér gjerne: filter først (fjerner parasitter og partikler), deretter tabletter (tar virus).',
      },
    ],
    related: ['koke-vann', 'vannfilter', 'vann-i-naturen', 'smittevern-hjemme'],
    source: 'Folkehelseinstituttet (FHI), produsentenes bruksanvisninger',
  },
  {
    id: 'vannfilter',
    title: 'Vannfilter',
    category: 'vann',
    summary:
      'Et godt turfilter fjerner bakterier og parasitter, men som regel ikke virus – vit hva filteret ditt klarer.',
    tags: ['filter', 'turfilter', 'sugerør-filter', 'water filter', 'mikrofilter', 'kullfilter'],
    blocks: [
      {
        type: 'p',
        text: 'Bærbare vannfiltre gir deg drikkevann på sekunder uten å koke. De er gode på tur og som supplement hjemme, men ikke alle filtre beskytter mot alt.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Hulfiber ca. 0,1–0,2 µm', value: 'bakterier og parasitter' },
          { label: 'Virus', value: 'krever renser/kjemi/koking' },
          { label: 'Aktivt kull', value: 'smak, lukt, noen kjemikalier – ikke mikrober' },
          { label: 'Salt (sjøvann)', value: 'fjernes ikke' },
        ],
      },
      { type: 'h', text: 'Slik får du det til å virke' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Hent vannet fra den klareste kilden du finner. Forfilter grumsete vann gjennom en klut.',
          'Hold «skittent» og «rent» adskilt – ikke la urent vann dryppe på utløpet.',
          'Tilbakespyl filteret jevnlig etter bruksanvisningen.',
          'Beskytt mot frost: mange hulfiberfiltre blir ødelagt hvis de fryser med vann i. Sov med det i soveposen om vinteren.',
          'Bytt filter når produsenten sier det, eller hvis det har frosset eller blitt slått hardt.',
        ],
      },
      {
        type: 'warning',
        text: 'Nær bebyggelse, avløp, beitedyr eller etter flom kan vannet inneholde virus. Kok eller bruk kjemisk rensing i tillegg til filteret.',
      },
      {
        type: 'tip',
        text: 'Et gravitasjonsfilter (pose som henger) renser mange liter uten at du må pumpe – praktisk for en hel familie.',
      },
    ],
    related: ['koke-vann', 'klor-desinfisering', 'vann-i-naturen', 'regnvann'],
    source: 'Folkehelseinstituttet (FHI), DNT',
  },
  {
    id: 'vann-i-boligen',
    title: 'Skjulte vannkilder i boligen',
    category: 'vann',
    summary:
      'Varmtvannsberederen, rørene og toalettsisternen kan gi deg mange liter vann når kranen er tørr.',
    tags: ['varmtvannsbereder', 'vannstans', 'toalettsisterne', 'nødvann', 'hidden water', 'vannrør'],
    blocks: [
      {
        type: 'p',
        text: 'Når vannet blir borte, har de fleste boliger fortsatt en god del vann stående i systemet. Med litt kunnskap kan du hente det ut trygt.',
      },
      { type: 'h', text: 'Varmtvannsberederen' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Skru av strømmen til berederen (sikring eller bryter) før du tapper. Elementet kan bli ødelagt hvis det går uten vann.',
          'Steng hovedkranen hvis vannet i nettet kan være forurenset, slik at urent vann ikke presses inn.',
          'Åpne en varmtvannskran i huset for å slippe inn luft.',
          'Tapp fra tappeventilen nederst på berederen ned i en ren bøtte. Vannet kan være svært varmt.',
          'Kok vannet før du drikker det hvis du er usikker på kvaliteten.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Vanlig bereder', value: 'ofte 100–200 liter' },
          { label: 'Rørene', value: 'noen liter fra laveste kran' },
          { label: 'Toalettsisterne', value: 'noen liter – til vask/spyling' },
        ],
      },
      { type: 'h', text: 'Andre kilder' },
      {
        type: 'list',
        items: [
          'Rørene: åpne en kran høyt oppe i huset og tapp fra den laveste kranen.',
          'Toalettsisternen (ikke skålen): bra til vask og spyling. Ikke drikk hvis det er brukt toalettblokk.',
          'Is i fryseren og vann fra hermetikk (grønnsaker, frukt).',
          'Badekar fylt før vannstans: til spyling og vask, kok før drikking.',
        ],
      },
      {
        type: 'warning',
        text: 'Ikke drikk vann fra radiatorer, vannbåren gulvvarme, akvarier eller bassenger. Det kan inneholde kjemikalier.',
      },
    ],
    related: ['lagre-vann', 'koke-vann', 'nodtoalett', 'vannlekkasje'],
    source: 'DSB / egenberedskap.no, Folkehelseinstituttet (FHI)',
  },
  {
    id: 'vann-i-naturen',
    title: 'Finne vann i naturen',
    category: 'vann',
    summary:
      'Velg rennende, klart vann langt fra bebyggelse og beitedyr – og rens det hvis du er i tvil.',
    tags: ['bekk', 'kilde', 'elv', 'innsjø', 'drikke fra bekken', 'water source', 'friluft'],
    blocks: [
      {
        type: 'p',
        text: 'I store deler av Norge er det lett å finne vann. Utfordringen er å velge riktig kilde. Mange drikker fra fjellbekker uten problemer, men risikoen øker nær hytter, veier, beitedyr og bebyggelse.',
      },
      { type: 'h', text: 'Velg den beste kilden' },
      {
        type: 'list',
        items: [
          'Rennende vann over stillestående.',
          'Kilder og oppkommer der vannet kommer ut av bakken er ofte rene.',
          'Oppstrøms for hytter, stier, leirplasser og beitedyr.',
          'Klart, luktfritt vann uten skum, algeoppblomstring eller oljefilm.',
          'Hent fra midt i strømmen, ikke fra kanten der det samler seg rusk.',
        ],
      },
      { type: 'h', text: 'Når du bør rense' },
      {
        type: 'list',
        items: [
          'Nedstrøms bebyggelse, hytter, campingplasser eller beitemark',
          'Etter kraftig regn eller flom',
          'Stillestående vann, myrvann og dammer',
          'Når vannet skal gis til barn, eldre eller syke',
        ],
      },
      {
        type: 'warning',
        text: 'Ikke drikk sjøvann eller brakkvann – saltet gjør deg mer dehydrert. Unngå vann nær gruver, industri, dyrekadavre eller med blågrønn algeoppblomstring.',
      },
      {
        type: 'tip',
        title: 'Tegn på vann',
        text: 'Følg dalsøkk og grønn, frodig vegetasjon nedover. Om morgenen kan du samle dugg med en klut fra gresset.',
      },
    ],
    related: ['koke-vann', 'vannfilter', 'smelte-sno', 'allemannsretten'],
    source: 'Folkehelseinstituttet (FHI), DNT',
  },
  {
    id: 'regnvann',
    title: 'Samle regnvann',
    category: 'vann',
    summary:
      'Regnvann er en nyttig reservekilde, men vann fra tak og takrenner må alltid renses før du drikker det.',
    tags: ['regn', 'takrenne', 'regntønne', 'oppsamling', 'rainwater harvesting', 'nødvann'],
    blocks: [
      {
        type: 'p',
        text: 'Regnet i seg selv er stort sett rent, men det tar med seg det som ligger på taket: fugleskitt, støv, mose og rester fra takmaterialet. Behandle derfor regnvann som urent vann.',
      },
      { type: 'h', text: 'Slik samler du' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Bruk rene bøtter, kar eller en presenning spent med et lavpunkt over en beholder.',
          'La de første minuttene med regn renne bort – de skyller taket.',
          'Dekk beholderen til mellom regnskyllene mot insekter, blader og dyr.',
          'Sil gjennom en ren klut, og kok eller rens før drikking.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: '1 mm regn på 1 m²', value: '1 liter' },
          { label: '10 m² tak, 10 mm regn', value: 'ca. 100 liter' },
        ],
      },
      {
        type: 'warning',
        text: 'Vann fra tak med asfalt-takpapp, behandlet treverk, eldre maling eller kobber kan inneholde stoffer som koking ikke fjerner. Bruk slikt vann bare til spyling og vask.',
      },
      {
        type: 'tip',
        text: 'Regnvann er utmerket til toalettspyling, klesvask og hagevanning. Da sparer du drikkevannet.',
      },
    ],
    related: ['koke-vann', 'vannfilter', 'nodly-presenning', 'nodtoalett'],
    source: 'Folkehelseinstituttet (FHI)',
  },
  {
    id: 'smelte-sno',
    title: 'Smelte snø og is til vann',
    category: 'vann',
    summary:
      'Smelt snø i stedet for å spise den – og start alltid med litt vann i bunnen av kjelen.',
    tags: ['snø', 'is', 'smeltevann', 'vinter', 'melt snow', 'vintertur', 'brenselsforbruk'],
    blocks: [
      {
        type: 'p',
        text: 'Om vinteren er snø ofte den eneste vannkilden. Å spise snø direkte kjøler ned kroppen og bruker energi, og kan gi sår munn. Smelt den heller.',
      },
      { type: 'h', text: 'Slik gjør du' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Ha litt vann i bunnen av kjelen først. Tørr snø i tom kjele kan svi og gi brent smak.',
          'Tilsett snø gradvis, og pakk den gjerne litt sammen.',
          'Bruk is eller gammel, kornete snø når du kan – den gir mer vann per volum.',
          'Hent snø fra et rent sted, bort fra stier, vei og der folk og dyr ferdes.',
          'Kok opp hvis du er i tvil om renheten.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Lett nysnø', value: 'mange liter snø gir 1 liter vann' },
          { label: 'Is og gammel snø', value: 'langt mer vann per volum' },
          { label: 'Brensel', value: 'regn med ekstra til snøsmelting' },
        ],
      },
      {
        type: 'tip',
        title: 'Spar brensel',
        text: 'Bruk lokk, le for vinden og en vindskjerm rundt brenneren. Fyll termosen med varmt vann om kvelden, så slipper du å smelte snø i kulda om morgenen.',
      },
      {
        type: 'warning',
        text: 'Gul, rosa eller skitten snø skal ikke brukes. Bruk aldri primus eller gassbrenner inne i et lukket telt eller snøhule uten god lufting – fare for kullosforgiftning.',
      },
    ],
    related: ['vann-i-naturen', 'snohule', 'kullos', 'nedkjoling'],
    source: 'DNT / Norsk Friluftsliv, Folkehelseinstituttet (FHI)',
  },
  {
    id: 'sol-desinfisering',
    title: 'Soldesinfisering (SODIS)',
    category: 'vann',
    summary:
      'Klare plastflasker i sterk sol i mange timer kan redusere smittestoffer i vann – en siste utvei når du ikke kan koke.',
    tags: ['SODIS', 'UV', 'sollys', 'PET-flaske', 'solar disinfection', 'nødrensing'],
    blocks: [
      {
        type: 'p',
        text: 'UV-stråling og varme fra sola kan drepe mange bakterier, virus og parasitter i klart vann. Metoden er anbefalt av WHO for områder uten alternativer, men den er treg og avhengig av sterk sol. I Norge er den mest aktuell om sommeren.',
      },
      { type: 'h', text: 'Slik gjør du' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Bruk rene, klare og uskadde PET-plastflasker, helst 2 liter eller mindre. Fjern etiketten.',
          'Vannet må være klart. Sil eller la det sedimentere først.',
          'Fyll flasken og rist godt for å få luft inn, fyll deretter helt opp og skru på korken.',
          'Legg flaskene ned i full sol, gjerne på et blikktak eller et reflekterende underlag.',
          'La dem ligge minst 6 timer i sterk sol – minst to dager hvis det er overskyet.',
          'Drikk rett fra flasken.',
        ],
      },
      {
        type: 'warning',
        text: 'Virker ikke i regnvær, ved lav sol eller i grumsete vann. Fjerner ikke kjemikalier. Bruk koking, filter eller tabletter når du kan.',
      },
      {
        type: 'tip',
        text: 'UV-penner til vannrensing virker etter samme prinsipp på sekunder, men krever batteri og klart vann.',
      },
    ],
    related: ['koke-vann', 'klor-desinfisering', 'vannfilter'],
    source: 'Verdens helseorganisasjon (WHO), Folkehelseinstituttet (FHI)',
  },

  // ─── MAT ─────────────────────────────────────────────────────────────────
  {
    id: 'kaloribehov',
    title: 'Kaloribehov i en krise',
    category: 'mat',
    summary:
      'En voksen trenger rundt 2000–2500 kcal i døgnet – i kulde og ved hardt arbeid mye mer.',
    tags: ['kalorier', 'energi', 'kcal', 'næring', 'calorie needs', 'matbehov', 'sult'],
    blocks: [
      {
        type: 'p',
        text: 'Kroppen tåler å være uten mat lenge, men du blir raskt sliten, kald og ukonsentrert. I en krise er det lurt å spise jevnlig og prioritere energitett mat.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Voksen, rolig aktivitet', value: 'ca. 2000–2500 kcal/døgn' },
          { label: 'Hardt arbeid / kulde', value: '3000–4500 kcal eller mer' },
          { label: 'Fett', value: 'ca. 9 kcal per gram' },
          { label: 'Karbohydrat og protein', value: 'ca. 4 kcal per gram' },
        ],
      },
      { type: 'h', text: 'Energitett nødmat' },
      {
        type: 'list',
        items: [
          'Nøtter, peanøttsmør, sjokolade',
          'Olje, smør og harde oster',
          'Havregryn, knekkebrød, pasta, ris',
          'Hermetisk fisk i olje, makrell i tomat',
          'Tørket frukt, müslibarer, turmat',
        ],
      },
      {
        type: 'p',
        text: 'Planter, bær og sopp fra naturen inneholder lite energi. De gir vitaminer og variasjon, men kan ikke erstatte et matlager.',
      },
      {
        type: 'tip',
        title: 'Varm mat holder motet oppe',
        text: 'Ett varmt måltid om dagen gjør mye for humør og varme. Ha med noe barna liker – kjent mat skaper trygghet.',
      },
      {
        type: 'warning',
        text: 'Spiser du lite, må du fortsatt drikke nok. Barn, gravide, eldre og personer med diabetes tåler sult dårligere og skal prioriteres.',
      },
    ],
    related: ['holdbar-mat', 'vannbehov', 'lavt-blodsukker', 'matlaging-uten-strom'],
    source: 'Helsedirektoratet, DSB / egenberedskap.no',
  },
  {
    id: 'holdbar-mat',
    title: 'Holdbar mat og matlager',
    category: 'mat',
    summary:
      'Bygg et lager av mat som tåler romtemperatur og kan spises uten eller med lite koking – og bruk og fyll på jevnlig.',
    tags: ['matlager', 'tørrmat', 'hermetikk', 'best før', 'food storage', 'nødmat', 'egenberedskap'],
    blocks: [
      {
        type: 'p',
        text: 'DSB anbefaler at husstanden kan klare seg selv i omtrent en uke. Velg mat du faktisk spiser til vanlig, så kan du bruke av lageret og fylle på – da blir ingenting gammelt.',
      },
      { type: 'h', text: 'Gode valg' },
      {
        type: 'list',
        items: [
          'Hermetikk: fisk, kjøttboller, bønner, supper, frukt',
          'Tørrvarer: havregryn, pasta, ris, knekkebrød, kjeks',
          'Turmat og posesupper (husk ekstra vann)',
          'Nøtter, peanøttsmør, sjokolade, tørket frukt',
          'Holdbar melk, juice, kaffe, te',
          'Barnemat, spesialkost og fôr til dyr',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: '«Best før»', value: 'ofte god lenge etter – se, lukt, smak' },
          { label: '«Siste forbruksdag»', value: 'ikke spis etter datoen' },
          { label: 'Bulende/lekk boks', value: 'kast' },
        ],
      },
      { type: 'h', text: 'Slik holder du lageret i orden' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Lagre tørt, mørkt og kjølig.',
          'Sett nye varer bakerst og ta fra fremst («først inn, først ut»).',
          'Gå gjennom lageret et par ganger i året.',
          'Ha en manuell bokseåpner liggende sammen med hermetikken.',
        ],
      },
      {
        type: 'warning',
        text: 'Bokser som buler, lekker, er sterkt rustne eller spruter når de åpnes, kan inneholde farlige bakterier. Ikke smak – kast dem.',
      },
    ],
    related: ['kaloribehov', 'matlaging-uten-strom', 'lagre-vann', 'kjoleskap-uten-strom'],
    source: 'DSB / egenberedskap.no, Mattilsynet',
  },
  {
    id: 'kjoleskap-uten-strom',
    title: 'Kjøleskapet når strømmen går',
    category: 'mat',
    summary:
      'Hold døra lukket, spis fra kjøleskapet først, og vurder hva som må kastes når temperaturen har vært over 4 °C lenge.',
    tags: ['kjøleskap', 'strømbrudd', 'matsikkerhet', 'temperatur', 'fridge power outage', 'kjølevarer'],
    blocks: [
      {
        type: 'p',
        text: 'Et lukket kjøleskap holder kulden i noen timer. Deretter stiger temperaturen, og bakterier vokser raskere. Kjølevarer er det første du bør spise ved strømbrudd.',
      },
      { type: 'h', text: 'Gjør dette' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Hold døra lukket så mye som mulig. Bestem hva du skal ta ut før du åpner.',
          'Spis fra kjøleskapet først, deretter fryseren, og spar holdbar mat til sist.',
          'Er det kaldt ute: flytt mat ut i en kjølebag eller boks på et skyggefullt sted beskyttet mot dyr.',
          'Legg frosne kjøleelementer eller frossen mat i kjøleskapet for å holde det kaldt lenger.',
          'Ha et termometer i kjøleskapet, så du vet hvor varmt det har vært.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Riktig temperatur', value: '4 °C eller lavere' },
          { label: 'Lukket kjøleskap', value: 'holder kaldt i noen timer' },
          { label: 'Mest utsatt', value: 'kjøtt, fisk, skalldyr, egg, rester, melk' },
        ],
      },
      {
        type: 'warning',
        title: 'Når du er i tvil, kast',
        text: 'Rått kjøtt, fisk, kylling, skalldyr, ferdigretter og rester som har vært over 4 °C i flere timer bør kastes. Lukt og utseende avslører ikke alltid farlige bakterier.',
      },
      {
        type: 'tip',
        text: 'Smør, harde oster, frukt, grønnsaker, syltetøy og sennep tåler som regel romtemperatur en god stund.',
      },
    ],
    related: ['fryser-uten-strom', 'holdbar-mat', 'matlaging-uten-strom', 'diare-og-oppkast'],
    source: 'Mattilsynet, DSB / egenberedskap.no',
  },
  {
    id: 'fryser-uten-strom',
    title: 'Fryseren når strømmen går',
    category: 'mat',
    summary:
      'En full, lukket fryser holder maten frossen i omtrent ett til to døgn – ikke åpne den.',
    tags: ['fryser', 'frossen mat', 'strømbrudd', 'tine', 'fryse på nytt', 'freezer power outage'],
    blocks: [
      {
        type: 'facts',
        items: [
          { label: 'Full fryser, lukket', value: 'ca. 48 timer' },
          { label: 'Halvfull fryser', value: 'ca. 24 timer' },
          { label: 'Fryseboks vs. skap', value: 'boks holder ofte lenger' },
        ],
      },
      { type: 'h', text: 'Under strømbruddet' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Ikke åpne fryseren. Hver åpning slipper ut kulde.',
          'Dekk den med dyner eller tepper for ekstra isolasjon – men ikke over ventilasjonsristen hvis den kan få strøm igjen.',
          'Er det kuldegrader ute: legg maten i bokser ute i skyggen, sikret mot dyr.',
          'Ved langvarig brudd: tin og tilbered mat i rekkefølge, og del med naboer.',
        ],
      },
      { type: 'h', text: 'Når strømmen kommer tilbake' },
      {
        type: 'list',
        items: [
          'Mat som fortsatt har iskrystaller eller er like kald som i et kjøleskap, kan som hovedregel fryses ned igjen. Kvaliteten kan bli dårligere.',
          'Tint kjøtt, fisk og kylling som har vært kjøleskapskaldt: tilbered det, så kan den ferdige retten fryses.',
          'Mat som har vært tint og varm lenge: kast.',
        ],
      },
      {
        type: 'tip',
        title: 'Testen med isbiten',
        text: 'Frys en kopp vann, og legg en mynt oppå når den er frossen. Ligger mynten på bunnen etter et strømbrudd, har fryseren vært tint helt.',
      },
      {
        type: 'warning',
        text: 'Er du usikker på hvor lenge maten har vært tint, ikke smak for å teste. Kast kjøtt, fisk, skalldyr og ferdigretter.',
      },
    ],
    related: ['kjoleskap-uten-strom', 'matlaging-uten-strom', 'holdbar-mat'],
    source: 'Mattilsynet, DSB / egenberedskap.no',
  },
  {
    id: 'matlaging-uten-strom',
    title: 'Lage mat uten strøm',
    category: 'mat',
    summary:
      'Stormkjøkken, gassbrenner og grill gir varm mat ved strømbrudd – men åpen flamme og grill skal brukes ute eller med god lufting.',
    tags: ['stormkjøkken', 'primus', 'gassbrenner', 'grill', 'vedovn', 'cooking without power', 'strømbrudd'],
    blocks: [
      {
        type: 'p',
        text: 'Et varmt måltid gjør en stor forskjell under et lengre strømbrudd. Planlegg hvordan du skal lage mat før du trenger det, og ha brensel nok til en uke.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Stormkjøkken/turbrenner', value: 'ute eller godt luftet' },
          { label: 'Kull- og gassgrill', value: 'kun utendørs' },
          { label: 'Vedovn med kokeplate', value: 'trygt innendørs' },
          { label: 'Telys/fonduebrenner', value: 'kun til oppvarming av små mengder' },
        ],
      },
      { type: 'h', text: 'Tips for effektiv matlaging' },
      {
        type: 'list',
        items: [
          'Bruk lokk alltid. Det sparer mye brensel.',
          'Velg mat som koker raskt: pasta, nudler, couscous, posesupper, havregryn.',
          'Bruk høykasse for ris, gryn og gryteretter.',
          'Kok opp vann og fyll termoser til te, kaffe og turmat.',
          'Mye hermetikk kan spises kald.',
        ],
      },
      {
        type: 'warning',
        title: 'Kullos dreper',
        text: 'Bruk aldri grill, kullgrill, engangsgrill eller gassbrenner beregnet for utebruk inne, i garasje, telt eller bobil uten lufting. Kullos (CO) er luktfri og kan gjøre deg bevisstløs uten forvarsel.',
      },
      {
        type: 'warning',
        title: 'Brann',
        text: 'Aldri gå fra åpen flamme. Ha brannslukker eller brannteppe i nærheten, og fyll aldri brensel på en varm brenner.',
      },
      {
        type: 'tip',
        text: 'Øv på å bruke stormkjøkkenet ditt på tur, så vet du at det virker og har riktig brensel.',
      },
    ],
    related: ['hoykasse', 'kullos', 'parafin-og-gass', 'vedfyring'],
    source: 'DSB / egenberedskap.no',
  },
  {
    id: 'hoykasse',
    title: 'Høykasse – kok med restvarme',
    category: 'mat',
    summary:
      'Kok opp maten kort, pakk gryta godt inn, og la den bli ferdig i sin egen varme – det sparer mye brensel.',
    tags: ['høykasse', 'kokekasse', 'isolert koking', 'restvarme', 'haybox', 'thermal cooking', 'spare brensel'],
    blocks: [
      {
        type: 'p',
        text: 'En høykasse er en godt isolert kasse eller kurv der en kokende gryte pakkes inn og koker videre av egen varme. Prinsippet ble mye brukt i Norge under krigen og er perfekt når brensel er knapt.',
      },
      { type: 'h', text: 'Slik gjør du' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Bruk en gryte med tettsittende lokk, og fyll den godt – mye mat holder bedre på varmen.',
          'Kok opp, og la det småkoke noen minutter.',
          'Sett gryta raskt i kassen, en kjølebag, en eske eller rett i en sovepose eller dyne.',
          'Pakk inn på alle sider, også over og under. Ikke åpne underveis.',
          'La den stå til maten er mør. Varm opp igjen før servering hvis den har kjølnet.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Ris', value: 'kok opp, ca. 1 time i kassen' },
          { label: 'Havregrøt/gryn', value: 'kok opp, 30–60 min' },
          { label: 'Gryteretter', value: 'noen minutters koking, 2–4 timer' },
          { label: 'Tørkede bønner', value: 'bløtlegg, kok kraftig først, flere timer' },
        ],
      },
      {
        type: 'warning',
        title: 'Bønner og matsikkerhet',
        text: 'Tørkede røde kidneybønner må kokes kraftig i minst 10 minutter før de settes i høykassen – ellers kan de gi forgiftning. Mat som står lunken i mange timer kan få bakterievekst: spis den varm, eller kok opp igjen.',
      },
      {
        type: 'tip',
        text: 'Lag kveldsmaten i høykassen om morgenen – den er klar når dere kommer hjem.',
      },
    ],
    related: ['matlaging-uten-strom', 'holdbar-mat', 'sovepose'],
    source: 'Mattilsynet, DSB / egenberedskap.no',
  },
  {
    id: 'brod-uten-gjaer',
    title: 'Brød uten gjær',
    category: 'mat',
    summary:
      'Med mel, vann, salt og eventuelt bakepulver kan du lage flatbrød, lefser og pinnebrød i stekepanne eller over bål.',
    tags: ['flatbrød', 'pinnebrød', 'lefse', 'bannock', 'bakepulver', 'surdeig', 'unleavened bread'],
    blocks: [
      {
        type: 'p',
        text: 'Mel er billig, holder lenge og gir mye energi. Uten ovn og gjær kan du fortsatt bake brød i stekepanne, på en takke eller rundt en pinne over bålet.',
      },
      { type: 'h', text: 'Grunnoppskrift: pannebrød' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Bland ca. 3 dl mel, 1 ts bakepulver og en klype salt.',
          'Tilsett ca. 1,5–2 dl vann (eller melk) og eventuelt en skvett olje. Elt til en myk, ikke klissete deig.',
          'Del i 4–6 emner og trykk dem flate, ca. 1 cm tykke.',
          'Stek på middels varme i tørr eller lett smurt panne, noen minutter på hver side, til brødet er gyllent og hult når du banker på det.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Uten bakepulver', value: 'tynne flatbrød/lefser' },
          { label: 'Natron', value: 'trenger syre (surmelk, yoghurt)' },
          { label: 'Surdeig', value: 'mel + vann, mates daglig i ca. en uke' },
        ],
      },
      { type: 'h', text: 'Pinnebrød på bål' },
      {
        type: 'p',
        text: 'Bruk samme deig, gjerne litt fastere. Rull til en pølse og surr den rundt en barket pinne. Stek over glørne, ikke i flammene, og vend ofte til brødet slipper pinnen.',
      },
      {
        type: 'tip',
        text: 'Havregryn, knust knekkebrød eller potetmos kan blandes inn for å drøye melet.',
      },
      {
        type: 'warning',
        text: 'Ikke spis rå deig – rått mel kan inneholde bakterier. Stek brødet gjennom.',
      },
    ],
    related: ['holdbar-mat', 'matlaging-uten-strom', 'tenne-bal', 'kaloribehov'],
    source: 'Mattilsynet, tradisjonell norsk matlaging',
  },
  {
    id: 'torking-av-mat',
    title: 'Tørking av mat',
    category: 'mat',
    summary:
      'Tørking fjerner vannet bakterier og mugg trenger – frukt, grønnsaker, sopp, fisk og kjøtt kan holde seg i måneder.',
    tags: ['tørke', 'tørket frukt', 'tørrfisk', 'tørket kjøtt', 'dehydrator', 'konservering', 'food drying'],
    blocks: [
      {
        type: 'p',
        text: 'Tørking er en av de eldste konserveringsmetodene, og tørrfisk er et norsk eksempel. Tørket mat er lett, tar liten plass og trenger ikke kjøling.',
      },
      { type: 'h', text: 'Slik tørker du' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Bruk fersk, fin råvare. Skjær i jevne, tynne skiver (ca. 3–6 mm).',
          'Tørk med lav varme og god luftsirkulasjon: tørkeapparat, ovn med døra på gløtt (ca. 50–60 °C), eller et luftig sted.',
          'Snu jevnlig. Frukt skal være læraktig, grønnsaker og sopp sprø.',
          'La avkjøle, og oppbevar lufttett, mørkt og tørt.',
          'Sjekk etter noen dager. Ser du fukt i glasset: tørk mer.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Epler, plommer', value: 'skiver, gjerne dyppet i sitronvann' },
          { label: 'Sopp', value: 'tørkes godt, er lett å oppbevare' },
          { label: 'Urter, brennesle', value: 'henges i bunter i skyggen' },
        ],
      },
      {
        type: 'warning',
        title: 'Kjøtt og fisk',
        text: 'Tørking av kjøtt og fisk krever riktig salting og temperatur for å unngå farlige bakterier. Bruk magert kjøtt, og varmebehandle det helst før tørking. Følg en pålitelig oppskrift.',
      },
      {
        type: 'tip',
        text: 'Mugg, harsk lukt eller klissete overflate betyr at maten ikke er tørr nok eller har tatt opp fukt. Kast den.',
      },
    ],
    related: ['sylting-og-salting', 'holdbar-mat', 'baer', 'sopp-sikkerhet'],
    source: 'Mattilsynet',
  },
  {
    id: 'sylting-og-salting',
    title: 'Sylting, salting og hermetisering',
    category: 'mat',
    summary:
      'Sukker, eddik og salt kan konservere mat trygt – men hjemmehermetisering av kjøtt og grønnsaker uten syre gir fare for botulisme.',
    tags: ['sylting', 'salting', 'saltfisk', 'syltetøy', 'eddik', 'botulisme', 'preserving', 'pickling'],
    blocks: [
      {
        type: 'p',
        text: 'Høyt sukkerinnhold, syre (eddik) og salt gjør det vanskelig for bakterier å vokse. Disse tradisjonelle metodene lar deg ta vare på høsten og fangsten uten fryser.',
      },
      { type: 'h', text: 'Trygge metoder' },
      {
        type: 'list',
        items: [
          'Syltetøy og saft: koke bær med sukker, fylles på rene, varme glass.',
          'Sylteagurk, rødbeter og løk i eddiklake.',
          'Saltet fisk og kjøtt i rikelig salt eller sterk lake, oppbevart kjølig.',
          'Surkål og andre melkesyregjærede grønnsaker.',
        ],
      },
      { type: 'h', text: 'Slik steriliserer du glass' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Vask glass og lokk i varmt såpevann og skyll.',
          'Varm glassene i ovnen eller kok dem i vann i noen minutter.',
          'Fyll varm masse i varme glass, tørk kanten ren og skru på lokket med en gang.',
          'Merk med innhold og dato.',
        ],
      },
      {
        type: 'warning',
        title: 'Botulisme',
        text: 'Kjøtt, fisk og grønnsaker med lite syre (bønner, sopp, gulrøtter) skal ikke hermetiseres hjemme i vanlige glass uten riktig utstyr og prosedyre. Bakterien som gir botulisme kan overleve vanlig koking og danne en livsfarlig gift i lufttette glass. Mistenkes botulisme (dobbeltsyn, hengende øyelokk, svelgvansker): ring 113.',
      },
      {
        type: 'tip',
        text: 'Bulende lokk, skum, gjæringslukt eller mugg betyr at glasset skal kastes uten å smakes på.',
      },
    ],
    related: ['torking-av-mat', 'holdbar-mat', 'baer', 'forgiftning-forstehjelp'],
    source: 'Mattilsynet, Folkehelseinstituttet (FHI)',
  },
  {
    id: 'spiselige-planter',
    title: 'Spiselige ville planter',
    category: 'mat',
    summary:
      'Brennesle, løvetann, syre og granskudd er lette å kjenne igjen – men spis aldri noe du ikke er 100 % sikker på.',
    tags: ['ville vekster', 'nyttevekster', 'brennesle', 'løvetann', 'sanking', 'foraging', 'wild plants'],
    blocks: [
      {
        type: 'warning',
        title: 'Spis aldri noe du ikke er 100 % sikker på',
        text: 'Noen av Norges giftigste planter ligner spiselige arter. Lær én plante om gangen, gjerne sammen med en erfaren sanker, og bruk en god flora.',
      },
      {
        type: 'p',
        text: 'Ville planter gir vitaminer, mineraler og variasjon, men svært lite energi. Se på dem som et supplement til matlageret, ikke en erstatning.',
      },
      { type: 'h', text: 'Lette å kjenne igjen' },
      {
        type: 'list',
        items: [
          'Brennesle: unge skudd og topper om våren. Kokes eller tørkes – da forsvinner brenningen. Bruk hansker.',
          'Løvetann: unge blader i salat, blomster og røtter kan også brukes. Bladene blir bitre utover sommeren.',
          'Engsyre: syrlige blader. Inneholder oksalsyre – spis moderat.',
          'Vassarve: mild, vanlig ugressplante i hager og åkerkanter.',
          'Granskudd: lysegrønne, myke skudd om våren, til te og sirup.',
          'Bjørkesevje: tappes en kort periode om våren før løvsprett.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Ramsløk', value: 'kan forveksles med giftig liljekonvall' },
          { label: 'Skjermplanter', value: 'unngå – selsnepe er dødelig' },
          { label: 'Ukjent plante', value: 'ikke smak' },
        ],
      },
      { type: 'h', text: 'Regler for sanking' },
      {
        type: 'list',
        items: [
          'Plukk unna veikanter, åkre som sprøytes, industri og hundeluftingsområder.',
          'Skyll godt, og kok helst plantene.',
          'Prøv en liten mengde av en ny plante først.',
          'Ta bare det du trenger, og ikke plukk fredede arter.',
        ],
      },
      {
        type: 'tip',
        text: 'Ved mistanke om forgiftning: ring Giftinformasjonen på 22 59 13 00. Ved alvorlige symptomer: ring 113. Ta vare på en bit av planten.',
      },
    ],
    related: ['giftige-planter', 'baer', 'sopp-sikkerhet', 'allemannsretten'],
    source: 'Giftinformasjonen (Helsedirektoratet), Norges sopp- og nyttevekstforbund',
  },
  {
    id: 'baer',
    title: 'Ville bær',
    category: 'mat',
    summary:
      'Blåbær, tyttebær, multer og bringebær er trygge og vanlige – men noen giftige bær kan forveksles med dem.',
    tags: ['blåbær', 'tyttebær', 'multer', 'bringebær', 'krekling', 'bærplukking', 'wild berries'],
    blocks: [
      {
        type: 'p',
        text: 'Norske skoger og fjell er fulle av spiselige bær fra midtsommer til langt ut på høsten. Bær gir vitaminer og litt energi, og de er lette å konservere.',
      },
      { type: 'h', text: 'Vanlige spiselige bær' },
      {
        type: 'list',
        items: [
          'Blåbær: lave lyng i skogen, blå-svarte bær med blå innmat.',
          'Tyttebær: blanke, røde bær på eviggrønn lyng. Holder seg lenge.',
          'Multer: gule/oransje bær på myr og i fjellet.',
          'Bringebær og jordbær: skogkanter og hogstflater.',
          'Krekling: svarte, saftige bær på lyng i fjellet. Spiselige, men smaker lite.',
          'Rognebær: bør kokes eller frostbitt – rå bær kan gi mageplager.',
        ],
      },
      {
        type: 'warning',
        title: 'Giftige bær og forvekslinger',
        text: 'Firblad har ett blåsvart bær midt mellom fire blader og kan forveksles med blåbær. Liljekonvall har røde bær, tysbast røde bær tett på stammen, trollbær svarte eller røde i klaser, og leddved røde bær i par. Alle er giftige. Svarthyll må kokes; rå rødhyll skal ikke spises.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Plukker du ukjente bær', value: 'ikke spis dem' },
          { label: 'Barn har spist ukjente bær', value: 'Giftinformasjonen 22 59 13 00' },
          { label: 'Alvorlige symptomer', value: 'ring 113' },
        ],
      },
      {
        type: 'tip',
        title: 'Ta vare på dem',
        text: 'Tyttebær holder seg i ukevis kjølig, og kan røres med litt sukker. Blåbær kan tørkes eller kokes til syltetøy og saft.',
      },
      {
        type: 'p',
        text: 'Allemannsretten gir deg rett til å plukke bær i utmark. I deler av Nord-Norge kan grunneier ha begrenset retten til å plukke multer – følg skilting og lokale regler.',
      },
    ],
    related: ['giftige-planter', 'spiselige-planter', 'allemannsretten', 'sylting-og-salting'],
    source: 'Giftinformasjonen (Helsedirektoratet), Miljødirektoratet',
  },
  {
    id: 'sopp-sikkerhet',
    title: 'Sopp – trygg sanking',
    category: 'mat',
    summary:
      'Noen av verdens giftigste sopper vokser i Norge. Plukk bare sopp du kjenner sikkert, og få den kontrollert hvis du er i tvil.',
    tags: ['sopp', 'kantarell', 'fluesopp', 'giftslørsopp', 'soppkontroll', 'mushroom', 'soppforgiftning'],
    blocks: [
      {
        type: 'warning',
        title: 'Spis aldri sopp du ikke er 100 % sikker på',
        text: 'Hvit fluesopp, grønn fluesopp og spiss og butt giftslørsopp kan gi livstruende lever- eller nyreskader. Symptomene kommer ofte sent – fra mange timer til flere dager etter måltidet.',
      },
      {
        type: 'p',
        text: 'Sopp gir smak og variasjon, men svært lite energi. Det lønner seg ikke å ta sjanser for et måltid sopp.',
      },
      { type: 'h', text: 'Kjente forvekslinger' },
      {
        type: 'list',
        items: [
          'Hvit fluesopp kan forveksles med sjampinjong. Fluesoppen har hvite skiver, ring og en poseformet slire nederst på stilken.',
          'Spiss giftslørsopp kan forveksles med traktkantarell.',
          'Unge fluesopper i «egg» kan ligne røyksopp. Del alltid soppen på langs.',
        ],
      },
      { type: 'h', text: 'Regler for soppsanking' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Lær noen få, lette arter godt – f.eks. kantarell og steinsopp – og hold deg til dem.',
          'Plukk hele soppen med stilkbasis, slik at den kan artsbestemmes.',
          'Hold ulike arter adskilt i kurven. Én giftig sopp kan ødelegge resten.',
          'Få soppen kontrollert på en soppkontroll hvis du er usikker.',
          'Spis aldri rå villsopp, og varmebehandle godt.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Mistenkt soppforgiftning', value: 'Giftinformasjonen 22 59 13 00' },
          { label: 'Alvorlige symptomer', value: 'ring 113' },
          { label: 'Ta med', value: 'rester av soppen og måltidet' },
        ],
      },
      {
        type: 'tip',
        text: 'Ved mistanke om forgiftning: ikke vent på symptomer. Ring Giftinformasjonen med en gang, også om alle føler seg friske.',
      },
    ],
    related: ['giftige-planter', 'spiselige-planter', 'forgiftning-forstehjelp', 'torking-av-mat'],
    source: 'Giftinformasjonen (Helsedirektoratet), Norges sopp- og nyttevekstforbund, Mattilsynet',
  },
  {
    id: 'giftige-planter',
    title: 'Giftige planter i Norge',
    category: 'mat',
    summary:
      'Kjenn igjen de farligste plantene – særlig skjermplantene, tyrihjelm og liljekonvall – før du begynner å sanke.',
    tags: ['giftig', 'selsnepe', 'tyrihjelm', 'skarntyde', 'kjempebjørnekjeks', 'poisonous plants', 'liljekonvall'],
    blocks: [
      {
        type: 'p',
        text: 'Det er få plantearter som er dødelige, men de finnes, og noen av dem vokser der folk sanker mat. Barn er mest utsatt fordi små mengder gir høy dose.',
      },
      { type: 'h', text: 'De farligste' },
      {
        type: 'list',
        items: [
          'Selsnepe: skjermplante ved vann og i sump. Regnes som en av Norges giftigste planter, særlig rotstokken.',
          'Skarntyde: skjermplante med lilla flekker på stengelen og ubehagelig lukt.',
          'Tyrihjelm og andre stormhatter (gule eller blå hjelmformede blomster): hele planten er giftig.',
          'Liljekonvall: blader ligner ramsløk, røde bær. Påvirker hjertet.',
          'Revebjelle: påvirker hjertet.',
          'Tysbast og firblad: giftige bær.',
        ],
      },
      {
        type: 'warning',
        title: 'Hold deg unna skjermplanter',
        text: 'Mange hvite skjermplanter ligner hverandre (hundekjeks, selsnepe, skarntyde, kvann, skvallerkål). Med mindre du er ekspert: ikke spis noen av dem.',
      },
      {
        type: 'warning',
        title: 'Kjempebjørnekjeks',
        text: 'Plantesaften gjør huden ekstremt følsom for sollys og kan gi kraftige, blemmete brannskader. Vask huden straks med såpe og vann, og hold den skjermet fra sol.',
      },
      { type: 'h', text: 'Ved mistanke om forgiftning' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Fjern planterester fra munnen, og gi litt å drikke.',
          'Ikke fremkall brekninger.',
          'Ring Giftinformasjonen på 22 59 13 00 for råd.',
          'Ring 113 ved pustevansker, kramper, nedsatt bevissthet eller hjerteuregelmessighet.',
          'Ta vare på en bit av planten.',
        ],
      },
    ],
    related: ['spiselige-planter', 'baer', 'sopp-sikkerhet', 'forgiftning-forstehjelp'],
    source: 'Giftinformasjonen (Helsedirektoratet), Norsk førstehjelpsråd',
  },
  {
    id: 'fiske',
    title: 'Fiske for mat',
    category: 'mat',
    summary:
      'Fiske i sjøen med stang og håndsnøre er gratis for alle; i ferskvann trenger du som regel fiskekort – og fisk er en av de beste naturlige proteinkildene.',
    tags: ['fiske', 'fiskestang', 'garn', 'makrell', 'ørret', 'fiskekort', 'fishing'],
    blocks: [
      {
        type: 'p',
        text: 'Norge har gode muligheter for matfiske, både langs kysten og i ferskvann. Et enkelt fiskesett er lett, billig og hører hjemme i beredskapslageret til mange.',
      },
      { type: 'h', text: 'Regler i korte trekk' },
      {
        type: 'list',
        items: [
          'Sjøen: fritidsfiske med stang og håndsnøre er gratis. Det gjelder egne regler for redskap, minstemål og fredningstider.',
          'Ferskvann: du trenger fiskekort fra grunneier eller fiskelag. Barn og unge kan ofte fiske gratis etter innlandsfisk – sjekk lokale regler.',
          'Laks, sjøørret og sjørøye: krever i tillegg fiskeravgift, og har egne regler.',
          'Desinfiser utstyr som har vært brukt i andre vassdrag, for å hindre spredning av lakseparasitten Gyrodactylus.',
        ],
      },
      { type: 'h', text: 'Enkle metoder' },
      {
        type: 'list',
        items: [
          'Mark eller mais på krok med dupp i vann med ørret og abbor.',
          'Sluk eller spinner langs bredden eller fra båt.',
          'Makrell med paternoster fra brygge om sommeren.',
          'Pilk etter torsk og sei fra båt.',
          'Isfiske med pimpel og mark om vinteren – når isen bærer.',
        ],
      },
      {
        type: 'tip',
        title: 'Når biter fisken?',
        text: 'Ofte best tidlig morgen og kveld, ved værskifte og der bekker renner ut i innsjøen.',
      },
      {
        type: 'warning',
        text: 'Mattilsynet har kostholdsråd for fisk fra enkelte forurensede fjorder og innsjøer. Sjekk lokale råd før du spiser mye fisk fra samme sted. Bruk flytevest i båt.',
      },
    ],
    related: ['rense-fisk', 'isen-baerer', 'allemannsretten', 'knuter'],
    source: 'Fiskeridirektoratet, Miljødirektoratet, Mattilsynet',
  },
  {
    id: 'rense-fisk',
    title: 'Bløgge, sløye og tilberede fisk',
    category: 'mat',
    summary:
      'Bløgg fisken med en gang, sløy den raskt og hold den kald – så får du trygg og god mat.',
    tags: ['bløgge', 'sløye', 'filetere', 'rense fisk', 'kveis', 'clean fish', 'fiskemat'],
    blocks: [
      {
        type: 'p',
        text: 'Rask og riktig behandling gir bedre smak og holdbarhet, og reduserer risikoen for matforgiftning.',
      },
      { type: 'h', text: 'Slik gjør du' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Bedøv fisken med et kraftig slag i hodet rett bak øynene.',
          'Bløgg: skjær over gjellebuene eller blodårene bak gjellene. La fisken blø ut i vann i noen minutter.',
          'Sløy: stikk kniven inn ved gattet og skjær forsiktig fremover mot gjellene uten å skjære i tarmene.',
          'Fjern innvollene og nyreblodet langs ryggbeinet (bruk tommelneglen eller en skje).',
          'Skyll i rent, kaldt vann.',
          'Hold fisken kald og spis den innen kort tid, eller røyk, tørk, salt eller frys den.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Rå fisk (sushi, rakfisk e.l.)', value: 'frys først (minst –20 °C i et døgn)' },
          { label: 'Kveis (parasitt)', value: 'drepes av koking/steking og frysing' },
          { label: 'Varmebehandling', value: 'til kjøttet er ugjennomsiktig og flaker seg' },
        ],
      },
      { type: 'h', text: 'Tilberedning uten kjøkken' },
      {
        type: 'list',
        items: [
          'Stek hel fisk på en pinne eller planke ved bålet.',
          'Pakk inn i folie med smør og salt og legg i glørne.',
          'Kok fiskesuppe – du utnytter hele fisken og får også i deg væske.',
        ],
      },
      {
        type: 'warning',
        text: 'Kast fisk som lukter vondt eller er slimete. Grav ned eller kast innvoller bort fra leirplassen og vannet, så du ikke trekker til deg dyr.',
      },
    ],
    related: ['fiske', 'torking-av-mat', 'sylting-og-salting', 'tenne-bal'],
    source: 'Mattilsynet',
  },

  // ─── NATUR ───────────────────────────────────────────────────────────────
  {
    id: 'allemannsretten',
    title: 'Allemannsretten',
    category: 'natur',
    summary:
      'Du har rett til å ferdes, raste og telte i utmark – med plikt til å vise hensyn til natur, dyr og grunneiere.',
    tags: ['friluftsloven', 'utmark', 'innmark', 'telting', 'båndtvang', 'right to roam', 'ferdsel'],
    blocks: [
      {
        type: 'p',
        text: 'Allemannsretten er lovfestet i friluftsloven og gir alle rett til å ferdes fritt i norsk natur. Den gjelder i utmark – det vil si udyrket mark som skog, fjell, myr og strand.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Telting', value: 'inntil 2 døgn uten å spørre' },
          { label: 'Avstand til hus/hytte', value: 'minst 150 m' },
          { label: 'Båndtvang for hund', value: '1. april – 20. august' },
          { label: 'Bålforbud nær skog', value: '15. april – 15. september' },
        ],
      },
      { type: 'h', text: 'Du kan' },
      {
        type: 'list',
        items: [
          'Gå, gå på ski, sykle og ri på stier og veier i utmark.',
          'Raste og telte i utmark. Lenger enn to døgn er ofte greit høyt til fjells eller langt fra bebyggelse.',
          'Plukke bær, sopp og blomster til eget bruk (med visse unntak, f.eks. multer i deler av Nord-Norge).',
          'Bade og padle.',
        ],
      },
      { type: 'h', text: 'Du skal' },
      {
        type: 'list',
        items: [
          'Ikke gå over innmark (dyrket mark, hager, gårdsplass) uten lov.',
          'Ta med deg søppel og forlat plassen slik du fant den.',
          'Ikke forstyrre beitedyr og vilt, særlig i yngletida.',
          'Følge bålforbudet og alltid slokke bålet helt.',
          'Ikke hogge levende trær.',
        ],
      },
      {
        type: 'tip',
        text: 'Kommunen kan ha lokale regler, f.eks. utvidet båndtvang eller lokalt bålforbud. Sjekk kommunens nettsider eller skilting.',
      },
      {
        type: 'p',
        text: 'I en nødsituasjon kan du søke ly og hjelp der det er nødvendig for å redde liv og helse. Gi beskjed til eieren så snart som mulig.',
      },
    ],
    related: ['balforbud', 'fiske', 'baer', 'fjellvettreglene'],
    source: 'Friluftsloven, Miljødirektoratet, DNT',
  },
  {
    id: 'elg-og-rovdyr',
    title: 'Elg, bjørn og andre store dyr',
    category: 'natur',
    summary:
      'Store dyr i Norge er sjelden farlige, men elgku med kalv, bjørn og moskus skal du gi god avstand og aldri provosere.',
    tags: ['elg', 'bjørn', 'ulv', 'moskus', 'villdyr', 'rovdyr', 'wildlife', 'moose', 'bear'],
    blocks: [
      {
        type: 'p',
        text: 'Angrep fra store dyr er svært sjeldne i Norge. De fleste skader skjer når dyr blir overrasket, føler seg truet eller forsvarer unger. Gi dem plass og tid til å trekke seg unna.',
      },
      { type: 'h', text: 'Elg' },
      {
        type: 'list',
        items: [
          'Elgkua forsvarer kalven om forsommeren. Oksen kan være aggressiv i brunsten om høsten.',
          'Tegn på irritasjon: ørene bakover, reist bust i nakken, slikker seg om munnen.',
          'Trekk deg rolig unna. Angriper den, løp og få et tre eller en stor stein mellom deg og dyret.',
          'I trafikken: elg er vanligst i skumringen. Senk farten og se langt.',
        ],
      },
      { type: 'h', text: 'Bjørn' },
      {
        type: 'list',
        items: [
          'Gjør deg til kjenne – snakk høyt der det er bjørn, så den rekker å gå unna.',
          'Ser du en bjørn: stå rolig, snakk lavt, og trekk deg sakte tilbake samme vei som du kom. Ikke løp.',
          'Gå aldri mot en binne med unger eller en bjørn ved et kadaver.',
          'Ikke legg igjen mat eller søppel ved leirplassen.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Moskus (Dovrefjell m.fl.)', value: 'hold minst 200 m avstand' },
          { label: 'Ulv og gaupe', value: 'sky, svært sjelden farlige' },
          { label: 'Hund i rovdyrområder', value: 'hold den i bånd' },
        ],
      },
      {
        type: 'warning',
        text: 'Moskusen kan angripe uten forvarsel og løper fortere enn deg. Går den mot deg, trekk deg straks unna.',
      },
      {
        type: 'tip',
        text: 'Ved trafikkulykke med vilt: sikre stedet og ring politiet på 02800 (112 ved personskade eller fare). Ikke forsøk å avlive dyret selv.',
      },
    ],
    related: ['allemannsretten', 'hoggormbitt', 'fjellvettreglene', 'kraftig-blodning'],
    source: 'Statens naturoppsyn (SNO), Miljødirektoratet, Politiet',
  },
  {
    id: 'isen-baerer',
    title: 'Bærer isen?',
    category: 'natur',
    summary:
      'Klar, blank stålis bør være minst 5 cm tykk før en person går på den – og du må vite hvordan du redder deg selv hvis du går gjennom.',
    tags: ['is', 'isvett', 'gå gjennom isen', 'istykkelse', 'isbrodder', 'ice safety', 'skøyter'],
    blocks: [
      {
        type: 'facts',
        items: [
          { label: 'Stålis, én person til fots', value: 'minst ca. 5 cm' },
          { label: 'Grupper, mer vekt', value: 'tykkere is' },
          { label: 'Kvitis/sørpeis', value: 'mye svakere enn stålis' },
          { label: 'Kald vann-sjokk', value: 'første ca. 1 minutt' },
        ],
      },
      { type: 'h', text: 'Før du går ut' },
      {
        type: 'list',
        items: [
          'Gå aldri alene. Si fra hvor du skal.',
          'Bær isbrodder rundt halsen, ispiggstav og kasteline. Pakk klær i vanntett pose i sekken, og løsne hoftebeltet.',
          'Test isen med ispiggstav foran deg.',
          'Unngå oser, innløp, utløp, sund, rundt brygger, steiner og siv – der strøm og varme gjør isen svak.',
          'Vær ekstra forsiktig ved mildvær, regn og snø på isen.',
        ],
      },
      { type: 'h', text: 'Hvis du går gjennom' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Ikke få panikk. Kontroller pusten det første minuttet – kuldesjokket går over.',
          'Snu deg mot den retningen du kom fra. Der har isen båret.',
          'Legg armene opp på isen, og sett isbroddene i.',
          'Spark kraftig med beina så kroppen blir mest mulig vannrett, og dra deg opp på isen.',
          'Rull deg bort fra hullet. Ikke reis deg før du er på trygg is.',
          'Kom deg raskt i tørre klær og i varme. Ring 113 ved tegn til nedkjøling.',
        ],
      },
      {
        type: 'warning',
        title: 'Når andre går gjennom',
        text: 'Ikke løp ut til hullet. Ring 112, og hjelp fra land eller trygg is med tau, gren eller stige. Legg deg flat for å fordele vekten.',
      },
    ],
    related: ['nedkjoling', 'drukning', 'fiske', 'sno-og-kulde'],
    source: 'NVE, Norsk Folkehjelp, Norsk førstehjelpsråd',
  },
  {
    id: 'snoskred-tegn',
    title: 'Snøskred – faretegn',
    category: 'natur',
    summary:
      'Sjekk snøskredvarselet på varsom.no, unngå bratte heng over ca. 30 grader ved fare – og lær naturens egne varseltegn.',
    tags: ['snøskred', 'skred', 'lavine', 'varsom', 'skredfare', 'avalanche', 'toppturer'],
    blocks: [
      {
        type: 'p',
        text: 'De fleste snøskredulykker utløses av de som blir tatt. NVE varsler skredfare på en skala fra 1 til 5 på varsom.no og i appen Varsom. Selv faregrad 2 og 3 gir mange ulykker.',
      },
      { type: 'h', text: 'Naturens varseltegn' },
      {
        type: 'list',
        items: [
          'Ferske snøskred i lignende terreng',
          'Drønn eller «wumm»-lyder når snødekket setter seg',
          'Skytende sprekker i snøen rundt skiene',
          'Mye nysnø eller snøfokk det siste døgnet',
          'Rask temperaturstigning, regn på snø eller sterk sol på bratte heng',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Snøskredterreng', value: 'brattere enn ca. 30°' },
          { label: 'Utløpsområder', value: 'kan nå langt ut i flatt terreng' },
          { label: 'Faregrad', value: '1–5, varsom.no' },
        ],
      },
      { type: 'h', text: 'Hvis noen blir tatt' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Følg med på personen og merk stedet der du så vedkommende sist.',
          'Sikre deg selv mot nye skred.',
          'Ring 112 eller 113 – men ikke la det forsinke søket hvis dere er få.',
          'Søk med skredsøker, søkestang og øyne/ører under det sist sette punktet.',
          'Grav effektivt fra nedsiden. De første minuttene er avgjørende.',
          'Frigjør luftveiene først, og gi førstehjelp.',
        ],
      },
      {
        type: 'warning',
        text: 'I skredterreng skal alle ha skredsøker, spade og søkestang – og kunne bruke dem. Uten utstyr: hold deg unna bratt terreng ved snøskredfare.',
      },
    ],
    related: ['fjellvettreglene', 'farevarsler', 'hlr-voksen', 'nedkjoling'],
    source: 'NVE / varsom.no, Norsk Fjellsportforum, DNT',
  },
  {
    id: 'kvikkleire',
    title: 'Kvikkleire og jordskred',
    category: 'natur',
    summary:
      'Kvikkleire kan gi store, plutselige skred. Lær tegnene, og ring 112 hvis du ser at bakken beveger seg.',
    tags: ['kvikkleire', 'leirskred', 'jordskred', 'flomskred', 'NVE', 'quick clay', 'landslide'],
    blocks: [
      {
        type: 'p',
        text: 'Kvikkleire er marin leire som ble avsatt i havet etter siste istid og senere hevet over havet. Den finnes særlig på Østlandet, i Trøndelag og andre lavtliggende områder under den marine grensen. Når den blir forstyrret, kan den gå fra fast form til flytende.',
      },
      { type: 'h', text: 'Faretegn' },
      {
        type: 'list',
        items: [
          'Nye sprekker i bakken, i asfalt eller grunnmur',
          'Bakken synker eller buler ut, stolper og trær heller',
          'Små utglidninger i bekkeskråninger og elvekanter',
          'Bekker som plutselig blir grumsete eller endrer løp',
          'Lyder av knaking eller brak fra grunnen',
        ],
      },
      { type: 'h', text: 'Hvis du ser faretegn' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Ved akutt fare: kom deg bort fra området, i retning bort fra skråningen, og varsle andre.',
          'Ring 112.',
          'Ved mindre tydelige tegn: kontakt kommunen, som har ansvar for å følge opp.',
          'Hold deg unna skredområdet etterpå – nye skred kan komme.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Kartlagte faresoner', value: 'NVE Atlas / kommunen' },
          { label: 'Jord- og flomskredvarsel', value: 'varsom.no' },
          { label: 'Graving/fylling i skråninger', value: 'kan utløse skred' },
        ],
      },
      {
        type: 'warning',
        text: 'Ikke grav, fyll masse eller legg om bekker i leirområder uten å avklare med kommunen. Små inngrep kan utløse store skred.',
      },
      {
        type: 'tip',
        text: 'Ved jordskred- og flomvarsel: hold deg unna bratte skråninger, bekkedaler og elvekanter, og følg kommunens råd om evakuering.',
      },
    ],
    related: ['ekstremnedbor', 'farevarsler', 'evakuering-og-mottak', 'evakueringssekk'],
    source: 'NVE / varsom.no, DSB',
  },
];
