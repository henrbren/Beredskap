import type { Quiz } from '../types';

/**
 * «Kurs» – korte quizer som tester praktiske beslutninger.
 * Én quiz per bok i biblioteket, pluss «varsling» og «hva-hvis».
 * Innholdet følger bøkene i src/data/books og scenariene i src/data/scenarios.ts.
 */
export const quizzes: Quiz[] = [
  // ─── Grunnkurs ────────────────────────────────────────────────────────────
  {
    id: 'grunnkurs-egenberedskap',
    title: 'Grunnkurs i egenberedskap',
    topic: 'grunnkurs',
    icon: 'shield-home',
    accent: 'signal',
    questions: [
      {
        q: 'Hvor lenge anbefaler DSB at en husstand skal klare seg på egen hånd i en krise?',
        options: ['Ett døgn', 'Omtrent én uke', 'Tre uker', 'En måned'],
        answer: 1,
        explain:
          'DSB anbefaler at husstander kan klare seg selv i omtrent én uke. Da kan hjelpeapparatet prioritere dem som trenger det mest.',
      },
      {
        q: 'Du skal lagre drikkevann for familien på fire i én uke. Omtrent hvor mye trenger dere?',
        options: ['Ca. 20 liter', 'Ca. 40 liter', 'Ca. 150 liter', 'Ca. 84 liter'],
        answer: 3,
        explain:
          'Regn 3 liter per person per døgn til drikke og matlaging: 4 personer × 3 liter × 7 døgn = 84 liter.',
      },
      {
        q: 'Strømmen går en kald vinterkveld. Hva er det første du gjør?',
        options: [
          'Sjekker om naboene også er uten strøm, og slår av komfyr og ovner',
          'Tenner engangsgrillen på badet for å holde varmen',
          'Åpner fryseren for å se om maten tiner',
          'Ringer 112 for å melde fra om strømbruddet',
        ],
        answer: 0,
        explain:
          'Finn ut om bruddet bare gjelder deg (sikringsskapet) eller hele området. Slå av komfyr, ovner og strykejern så de ikke står på når strømmen kommer tilbake. Nødnumrene er bare for fare for liv og helse.',
      },
      {
        q: 'Hvordan holder du beredskapslageret ferskt uten å kaste mat?',
        options: [
          'Kjøper alt nytt hvert femte år',
          'Bruker bare hermetikk, den varer evig',
          'Først inn, først ut: bruk det eldste i hverdagen og fyll på med nytt',
          'Fryser ned alt lageret',
        ],
        answer: 2,
        explain:
          'Et lager du bruker og fyller på, holder seg ferskt. Sett nye varer bakerst og ta fra fronten.',
      },
      {
        q: 'Strømmen har vært borte i flere timer, og det blir kaldt i huset. Hvordan sparer dere best på varmen?',
        options: [
          'Fordeler dere i hvert deres rom så alle får plass',
          'Samles i ett lite rom, lukker dørene og tetter trekk',
          'Åpner alle innerdører slik at varmen fordeler seg',
          'Lufter grundig hver time',
        ],
        answer: 1,
        explain:
          'Det er mye lettere å holde ett lite rom varmt enn hele huset. Lukk dører, heng tepper for vinduer og samles der.',
      },
      {
        q: 'Hvor bør krisekortet med viktige telefonnumre og avtaler oppbevares?',
        options: [
          'Bare i notatappen på mobilen',
          'I en e-post til deg selv',
          'I bankboksen',
          'På papir, et kjent sted hjemme – gjerne også i evakueringsbagen',
        ],
        answer: 3,
        explain:
          'Når mobilen er tom for strøm eller nettet er nede, er papir det eneste som virker. Alle i husstanden bør vite hvor kortet er.',
      },
      {
        q: 'Du får beskjed om å evakuere hjemmet. Hva tar du med?',
        options: [
          'Evakueringsbagen med medisiner, ID, klær, vann og lader',
          'Så mye mat fra fryseren som mulig',
          'Ingenting – det tar for lang tid',
          'Alt verdifullt du kan bære, uansett hvor lang tid det tar',
        ],
        answer: 0,
        explain:
          'En ferdigpakket bag gjør at du kommer deg raskt ut med det viktigste. Følg myndighetenes beskjeder om hvor du skal dra.',
      },
      {
        q: 'Du tar faste medisiner. Hvor mye bør du ha i beredskap?',
        options: [
          'Det holder å ha resepten',
          'Nok til minst 7 dager',
          'To dager er nok – apoteket åpner fort igjen',
          'Det er ikke nødvendig å planlegge for medisiner',
        ],
        answer: 1,
        explain:
          'Ha nok faste medisiner til minst en uke, i tråd med anbefalingen om én ukes egenberedskap. Snakk med legen eller apoteket om hvordan du kan ordne det.',
      },
      {
        q: 'Hvordan snakker du best med barna om beredskap?',
        options: [
          'Ikke i det hele tatt – det skremmer dem',
          'Viser dem dramatiske nyhetsbilder så de forstår alvoret',
          'Ærlig, enkelt og rolig – og la dem få oppgaver i planen',
          'Sier at ingenting farlig noen gang kan skje',
        ],
        answer: 2,
        explain:
          'Barn takler kriser bedre når de vet hva som skjer og har noe å gjøre. Ærlig og rolig informasjon gir trygghet.',
      },
      {
        q: 'Hva er den viktigste grunnen til å ha et beredskapslager hjemme?',
        options: [
          'For å kunne selge varer videre i en krise',
          'Fordi det er påbudt ved lov for alle husstander',
          'For å slippe å handle i hverdagen',
          'For å være trygg selv og la hjelpeapparatet prioritere de mest sårbare',
        ],
        answer: 3,
        explain:
          'Egenberedskap handler om ro, ikke frykt. Når de fleste klarer seg selv en stund, kan nødetatene og kommunen hjelpe dem som trenger det mest.',
      },
    ],
  },

  // ─── Vann ─────────────────────────────────────────────────────────────────
  {
    id: 'vann-og-hygiene',
    title: 'Vann og hygiene',
    topic: 'vann',
    icon: 'water',
    accent: 'ice',
    questions: [
      {
        q: 'Kommunen sender ut kokevarsel. Hvilket vann må kokes?',
        options: [
          'Bare vannet du drikker rett fra springen',
          'Ingenting, det holder å la vannet renne en stund',
          'Alt vann du skal svelge: drikke, matlaging, tannpuss og vask av rå grønnsaker',
          'Bare vannet til barn under ett år',
        ],
        answer: 2,
        explain:
          'Alt som havner i munnen, må være kokt. Du kan dusje som vanlig, men pass på å ikke svelge vannet.',
      },
      {
        q: 'Hvordan koker du vann slik at det blir trygt mot smittestoffer?',
        options: [
          'Varm det til det er lunkent',
          'Kok det opp til det koker kraftig',
          'Hold det rett under kokepunktet i en time',
          'Varm det i mikrobølgeovnen i ti sekunder',
        ],
        answer: 1,
        explain:
          'Når vannet koker kraftig, er bakterier, virus og parasitter drept. La det kjøle seg ned med lokk på.',
      },
      {
        q: 'Vannet er forurenset med olje eller kjemikalier etter en ulykke. Hjelper det å koke det?',
        options: [
          'Ja, koking fjerner alt',
          'Ja, hvis du koker i minst ti minutter',
          'Ja, hvis du tilsetter rensetabletter etterpå',
          'Nei, koking fjerner ikke kjemikalier – bruk lagret vann eller vann kommunen anviser',
        ],
        answer: 3,
        explain:
          'Koking dreper smittestoffer, men fjerner ikke kjemikalier eller olje. Følg kommunens råd og bruk lagret vann.',
      },
      {
        q: 'Du skal tappe vann fra springen til beredskapslageret. Hva er riktig?',
        options: [
          'Bruk rene flasker eller kanner, fyll dem helt og lagre mørkt og kjølig',
          'Fyll halvveis så vannet får luft',
          'Bruk gamle kanner fra vaskemidler etter en rask skylling',
          'Lagre flaskene i sola så vannet holdes varmt',
        ],
        answer: 0,
        explain:
          'Rene, matgodkjente beholdere fylt helt opp og lagret mørkt og kjølig holder vannet best. Bytt vannet jevnlig, for eksempel to ganger i året.',
      },
      {
        q: 'Vannforsyningen er brutt. Hvor i huset kan du finne en stor reserve med rent vann?',
        options: [
          'I radiatorene',
          'I varmtvannsberederen',
          'I toalettsisternen – det kan drikkes rett fra den',
          'I avfuktingsmaskinen',
        ],
        answer: 1,
        explain:
          'En vanlig bereder rommer ofte 100–300 liter rent vann. Slå av strømmen til berederen før du tapper, og la vannet kjøle seg ned.',
      },
      {
        q: 'Du må hente vann fra en bekk. Hvilken kilde velger du?',
        options: [
          'En stillestående dam ved en gård',
          'Bekken rett nedenfor et hyttefelt',
          'Rennende vann ovenfor bebyggelse og beitedyr – og du renser det likevel',
          'Overflatevann fra en sølepytt etter regn',
        ],
        answer: 2,
        explain:
          'Rennende vann ovenfor bebyggelse er tryggest, men selv klart fjellvann kan inneholde smitte. Kok eller rens det før bruk.',
      },
      {
        q: 'Vannet du har hentet er grumsete. Hva gjør du før du renser det?',
        options: [
          'Ingenting, rensetabletter tar alt',
          'Tilsetter salt',
          'Fryser det ned',
          'Lar partiklene synke og siler det gjennom et rent tøystykke',
        ],
        answer: 3,
        explain:
          'Partikler skjermer smittestoffer og gjør tabletter og filter mindre effektive. Sil først, rens etterpå.',
      },
      {
        q: 'Hva fjerner et vanlig mekanisk tur- eller beredskapsfilter som regel IKKE?',
        options: ['Virus', 'Bakterier', 'Parasitter', 'Sand og partikler'],
        answer: 0,
        explain:
          'De fleste mekaniske filtre stopper bakterier og parasitter, men sjelden virus. Er du usikker, kok vannet i tillegg.',
      },
      {
        q: 'Toalettet kan ikke spyles. Hva er en trygg løsning?',
        options: [
          'Spyle med vann fra lageret ditt hver gang',
          'Bruke en solid søppelsekk i toalettskålen, med litt strø eller kattesand',
          'Grave et hull i hagen rett ved brønnen',
          'Bruke vasken',
        ],
        answer: 1,
        explain:
          'En pose i skålen, gjerne doble poser, holder det hygienisk uten å bruke drikkevann. Knyt godt igjen og oppbevar posene kjølig og utilgjengelig til avfallet kan hentes.',
      },
      {
        q: 'Vannet er tilbake etter et brudd. Hva gjør du først?',
        options: [
          'Fyller badekaret og drikker med en gang',
          'Venter en uke før du bruker vannet',
          'Spyler kranene til vannet er klart og kaldt, og følger eventuelle kokeråd fra kommunen',
          'Tilsetter klor i alt vannet uansett',
        ],
        answer: 2,
        explain:
          'Etter et brudd kan det komme luft og misfarget vann. La det renne til det er klart og kaldt, og sjekk om kommunen har sendt kokevarsel.',
      },
    ],
  },

  // ─── Førstehjelp ──────────────────────────────────────────────────────────
  {
    id: 'forstehjelp-grunnleggende',
    title: 'Førstehjelp',
    topic: 'forstehjelp',
    icon: 'medical-bag',
    accent: 'clay',
    questions: [
      {
        q: 'Du finner en voksen som ligger livløs. Hva gjør du først?',
        options: [
          'Starter innblåsninger med en gang',
          'Sjekker om det er trygt for deg, så bevissthet og pust',
          'Flytter personen inn i bilen',
          'Gir personen noe å drikke',
        ],
        answer: 1,
        explain:
          'Sikre deg selv først. Rist forsiktig og rop til personen, åpne luftveiene og se, lytt og kjenn etter normal pust i maks 10 sekunder.',
      },
      {
        q: 'Personen er bevisstløs, men puster normalt. Hva gjør du?',
        options: [
          'Legger personen i stabilt sideleie, ringer 113 og følger med på pusten',
          'Starter brystkompresjoner',
          'Setter personen opp mot en vegg',
          'Lar personen ligge på ryggen og går for å hente hjelp',
        ],
        answer: 0,
        explain:
          'Stabilt sideleie holder luftveiene åpne. Kontroller pusten jevnlig – slutter personen å puste normalt, start HLR.',
      },
      {
        q: 'En voksen puster ikke normalt. Hva er riktig HLR?',
        options: [
          '15 kompresjoner og 1 innblåsning, 60 i minuttet',
          '5 innblåsninger og så 10 kompresjoner',
          'Bare innblåsninger til ambulansen kommer',
          '30 kompresjoner og 2 innblåsninger, 100–120 i minuttet, 5–6 cm dypt',
        ],
        answer: 3,
        explain:
          'Ring 113, start HLR 30:2 midt på brystet. Trykk hardt og raskt, og la brystet heve seg helt mellom hvert trykk.',
      },
      {
        q: 'En hjertestarter blir hentet mens du gir HLR. Hva gjør du?',
        options: [
          'Venter på at ambulansepersonell skal bruke den',
          'Slutter med HLR til den er ferdig ladet, og fortsetter ikke etterpå',
          'Slår den på med en gang og følger talebeskjedene, med minst mulig pause i HLR',
          'Bruker den bare hvis personen puster',
        ],
        answer: 2,
        explain:
          'Hjertestarteren kan brukes av alle. Hold avstand når den analyserer og gir støt, og fortsett HLR straks etter.',
      },
      {
        q: 'Noen blør kraftig fra et dypt kutt i låret. Hva er første tiltak?',
        options: [
          'Direkte, hardt trykk på såret – og ring 113',
          'Skyller såret grundig med vann i flere minutter',
          'Legger tourniquet med en gang, uansett',
          'Hever beinet og venter på at blødningen stopper av seg selv',
        ],
        answer: 0,
        explain:
          'Hardt, direkte trykk stopper de fleste blødninger. Tourniquet brukes bare ved livstruende blødning fra arm eller bein som ikke stoppes med trykk.',
      },
      {
        q: 'Du har lagt på en tourniquet. Hva er viktig å huske?',
        options: [
          'Løsne den hvert femte minutt',
          'Notere tidspunktet og ikke løsne den selv',
          'Dekke den til så pasienten ikke ser den',
          'Legge den rett over såret',
        ],
        answer: 1,
        explain:
          'Tidspunktet er viktig for helsepersonell. Legg den 5–8 cm over såret, stram til blødningen stopper, og la den sitte til helsepersonell overtar.',
      },
      {
        q: 'Et barn får kokende vann over armen. Hvordan kjøler du brannskaden?',
        options: [
          'Med isbiter direkte på huden',
          'Med smør eller krem',
          'Ikke i det hele tatt – dekk den bare til',
          'Med lunkent vann, ca. 20 °C, i omtrent 20 minutter',
        ],
        answer: 3,
        explain:
          'Lunkent vann kjøler uten å skade vevet mer. Is kan gi frostskade, og hos barn kan for mye kaldt vann gi nedkjøling. Ved store skader eller brannskader hos små barn: ring 113.',
      },
      {
        q: 'Et barn har drukket noe fra en flaske under vasken. Barnet er våkent og upåvirket. Hvem ringer du?',
        options: [
          'Ingen – vent og se',
          'Giftinformasjonen, 22 59 13 00',
          'Politiet, 02800',
          'Brannvesenet, 110',
        ],
        answer: 1,
        explain:
          'Giftinformasjonen gir råd om hva du skal gjøre. Ikke fremkall brekninger. Får barnet alvorlige symptomer som pustevansker eller blir slapt, ring 113.',
      },
      {
        q: 'Hvilket tegn tyder på sjokk etter en alvorlig skade?',
        options: [
          'Rød, varm og tørr hud',
          'Langsom og rolig puls',
          'Blek, kald og klam hud, rask puls og uro',
          'Sterk sult',
        ],
        answer: 2,
        explain:
          'Sjokk er livstruende. Ring 113, stans blødninger, legg personen ned, hold vedkommende varm og gi ikke mat eller drikke.',
      },
      {
        q: 'Noen får neseblod. Hva er riktig?',
        options: [
          'Len hodet godt bakover',
          'Legg seg flatt på ryggen',
          'Snyt kraftig hvert minutt',
          'Sitt med hodet lett fremover og klem hardt på den myke delen av nesen i 10 minutter',
        ],
        answer: 3,
        explain:
          'Lener du hodet bakover, renner blodet ned i halsen. Hold trykket i 10 minutter uten å slippe.',
      },
    ],
  },

  // ─── Mat ──────────────────────────────────────────────────────────────────
  {
    id: 'mat-og-lager',
    title: 'Mat og lager',
    topic: 'mat',
    icon: 'food-variant',
    accent: 'amber',
    questions: [
      {
        q: 'Strømmen har vært borte i 6 timer. Hva gjør du med fryseren?',
        options: [
          'Tømmer den og spiser alt med en gang',
          'Åpner den hver time for å sjekke temperaturen',
          'Holder den lukket – en full fryser holder kulda i ca. 1–2 døgn',
          'Kaster alt innholdet',
        ],
        answer: 2,
        explain:
          'Hver gang du åpner døra, slipper kulda ut. En full, lukket fryser holder seg kald lenge. Spis heller fra kjøleskapet først.',
      },
      {
        q: 'Hvilken mat spiser du først når strømmen er borte?',
        options: [
          'Hermetikken fra lageret',
          'Det lettbedervelige fra kjøleskapet: rester, fersk fisk og kjøttdeig',
          'Knekkebrød og nøtter',
          'Det som ligger i fryseren',
        ],
        answer: 1,
        explain:
          'Kjøleskapet holder kulda bare noen timer. Start med det som blir dårlig fortest, og spar holdbar mat til senere.',
      },
      {
        q: 'Strømmen er tilbake. Maten i fryseren har fortsatt iskrystaller. Hva gjør du?',
        options: [
          'Den kan fryses ned igjen, men kvaliteten kan bli litt dårligere',
          'Kaster alt',
          'Lar den tine helt og fryser den igjen',
          'Spiser den rå med en gang',
        ],
        answer: 0,
        explain:
          'Mat med iskrystaller eller som har holdt kjøleskapstemperatur kan fryses igjen. Råvarer som har tint helt bør tilberedes før de eventuelt fryses. Er du i tvil, kast det.',
      },
      {
        q: 'Hva betyr «siste forbruksdag» på en pakke kjøttdeig?',
        options: [
          'Det er bare et kvalitetsråd',
          'Varen er trygg i minst en uke etter datoen',
          'Datoen gjelder bare uåpnet pakke i fryseren',
          'Den skal ikke spises etter datoen',
        ],
        answer: 3,
        explain:
          '«Siste forbruksdag» handler om sikkerhet. «Best før» handler om kvalitet – slik mat er ofte trygg etter datoen hvis du ser, lukter og smaker.',
      },
      {
        q: 'Du skal lage varm mat uten strøm. Hvor bruker du gassbrenneren eller primusen?',
        options: [
          'Utendørs, eller innendørs bare med god lufting og etter bruksanvisningen',
          'I et lukket bad så varmen ikke forsvinner',
          'I garasjen med porten lukket',
          'Inne i teltet med døra igjen',
        ],
        answer: 0,
        explain:
          'Ufullstendig forbrenning gir kullos, som verken lukter eller synes. Grill og utendørsutstyr skal aldri brukes innendørs.',
      },
      {
        q: 'Hvilken mat passer best i et beredskapslager?',
        options: [
          'Mest fersk frukt og grønt',
          'Frossenmat som tar mye plass',
          'Holdbar, energitett mat dere faktisk liker – og som kan spises kald',
          'Bare spesielle nødrasjoner',
        ],
        answer: 2,
        explain:
          'Velg mat som tåler romtemperatur, ikke krever mye vann eller koking, og som familien spiser i hverdagen så lageret blir brukt og fornyet.',
      },
      {
        q: 'Omtrent hvor mye energi bør du planlegge per voksen per døgn?',
        options: ['Ca. 800 kcal', 'Ca. 2000–2500 kcal', 'Ca. 4000 kcal', 'Ca. 1200 kcal'],
        answer: 1,
        explain:
          'En voksen trenger vanligvis ca. 2000–2800 kcal per døgn. Ca. 2000–2500 kcal er et greit planleggingstall – mer ved kulde og hardt arbeid.',
      },
      {
        q: 'Du har et spedbarn som får morsmelkerstatning. Hva må med i planen?',
        options: [
          'Ingenting ekstra – spedbarn kan spise det samme som voksne',
          'Bare ekstra bleier',
          'Melkeerstatning blandet på forhånd og lagret i romtemperatur',
          'Nok pulver eller ferdigblandet erstatning, og trygt vann til tillaging',
        ],
        answer: 3,
        explain:
          'Spedbarn tåler lite. Ha nok erstatning og rent vann, og bruk ferdigblandet (drikkeklar) erstatning hvis du er usikker på vannet.',
      },
      {
        q: 'Hvordan oppbevarer du lageret best?',
        options: [
          'Kjølig, mørkt og tørt',
          'Varmt og lyst så du ser alt',
          'I en fuktig kjeller',
          'Ved siden av ovnen',
        ],
        answer: 0,
        explain:
          'Varme, lys og fukt forkorter holdbarheten. Stabile, kjølige forhold gir best resultat.',
      },
      {
        q: 'Hvor mye brensel bør du ha til kokeapparatet for en uke?',
        options: [
          'Det holder med én boks',
          'Nok til minst ett varmt måltid per dag i en uke',
          'Ingen – maten kan spises kald hele uka',
          'Nok til å fyre hele døgnet',
        ],
        answer: 1,
        explain:
          'Ett varmt måltid om dagen gir både næring og moral. Spar brensel med lokk på kjelen og retter som trenger kort koketid.',
      },
    ],
  },

  // ─── Varme, lys og strøm ──────────────────────────────────────────────────
  {
    id: 'varme-lys-strom',
    title: 'Varme, lys og strøm',
    topic: 'varme',
    icon: 'fireplace',
    accent: 'moss',
    questions: [
      {
        q: 'Det er kaldt og strømløst. Kan du bruke grillen eller engangsgrillen inne for å holde varmen?',
        options: [
          'Ja, hvis du åpner et vindu på gløtt',
          'Ja, i garasjen eller boden',
          'Nei, aldri – den lager kullos, som kan drepe i søvne',
          'Ja, så lenge du er våken',
        ],
        answer: 2,
        explain:
          'Grill, terrassevarmer, aggregat og bil skal aldri brukes innendørs – heller ikke i garasje, bod, telt eller innglasset veranda.',
      },
      {
        q: 'Flere i familien får hodepine, kvalme og blir svimle mens gassovnen står på. Hva gjør du?',
        options: [
          'Gir dem smertestillende og legger dem til å sove',
          'Slår av ovnen, får alle ut i frisk luft og ringer 113',
          'Skrur ovnen ned litt',
          'Venter og ser om det går over',
        ],
        answer: 1,
        explain:
          'Dette kan være kullosforgiftning. Kom deg ut i frisk luft og ring 113. Ikke legg deg til å sove i rommet.',
      },
      {
        q: 'Du skal fyre i en vedovn som ikke har vært brukt på lenge. Hvordan starter du?',
        options: [
          'Fyller ovnen helt og fyrer for full trekk',
          'Bruker tennvæske på store kubber',
          'Fyrer med fuktig ved for at det skal vare lenger',
          'Begynner forsiktig med små, tørre vedskier og bygger varmen gradvis',
        ],
        answer: 3,
        explain:
          'For rask oppvarming kan gi sprekker i ovn og pipe. Tørr ved gir bedre forbrenning og mindre sot. Få pipa feid og sjekket før krisen.',
      },
      {
        q: 'Det dundrer i pipa og du ser flammer og gnister fra pipetoppen. Hva gjør du?',
        options: [
          'Ringer 110, stenger ovnsdøra, spjeldet og lufttilførselen',
          'Heller vann i ovnen',
          'Åpner ovnsdøra for å slippe ut varmen',
          'Legger på mer ved så brannen brenner fort ut',
        ],
        answer: 0,
        explain:
          'Ved pipebrann: ring 110 og kvel lufttilførselen. Aldri hell vann i ovnen eller pipa – vanndampen kan sprenge pipa.',
      },
      {
        q: 'Du har et bensinaggregat. Hvordan bruker du det trygt?',
        options: [
          'I kjelleren, så det er skjermet mot regn',
          'Alltid utendørs, og aldri koblet rett inn i en stikkontakt i huset',
          'I garasjen med porten på gløtt',
          'Du fyller drivstoff mens det går, så strømmen ikke faller ut',
        ],
        answer: 1,
        explain:
          'Aggregat lager kullos. Kobling til husets anlegg skal bare skje via omkoblingsbryter montert av elektriker. Fyll drivstoff med motoren av og kald.',
      },
      {
        q: 'Hva er det tryggeste lyset å bruke under et strømbrudd?',
        options: [
          'Stearinlys i hvert rom',
          'Fakler i gangen',
          'Batteridrevet lommelykt eller hodelykt',
          'Parafinlampe ved senga',
        ],
        answer: 2,
        explain:
          'Batterilys gir ingen brannfare. Bruker du stearinlys: stødig underlag, avstand til brennbart, og aldri uten tilsyn.',
      },
      {
        q: 'Hva er viktigst å ha på seg for å holde varmen inne i et kaldt hus?',
        options: [
          'Bomull innerst – det er mykest',
          'Én tykk dunjakke rett på kroppen',
          'Shorts og ullsokker',
          'Ull innerst, flere lag og lue',
        ],
        answer: 3,
        explain:
          'Ull isolerer også når den er fuktig. Flere tynne lag holder bedre på varmen, og du mister mye varme fra hodet.',
      },
      {
        q: 'Du vil lade mobilen i bilen under et langt strømbrudd. Hvordan gjør du det trygt?',
        options: [
          'Bilen står utendørs med motoren i gang – aldri i lukket garasje',
          'Bilen står i garasjen med porten lukket for å holde den varm',
          'Du lar bilen gå hele natta mens du sover i den inne i garasjen',
          'Bilen står i garasjen og du åpner en luke i taket',
        ],
        answer: 0,
        explain:
          'Eksosen inneholder kullos. Bruk bilen som lader bare ute i friluft, og husk at batterier tømmes raskere i kulde.',
      },
      {
        q: 'Hvorfor gir en solcellelader lite strøm i Norge i januar?',
        options: [
          'Kulde ødelegger solcellene',
          'Det er lite dagslys og lav sol om vinteren',
          'Solcelleladere virker bare i sydlige land',
          'Snø reflekterer bort all strøm',
        ],
        answer: 1,
        explain:
          'Om vinteren gir solcellelader lite effekt. En oppladet strømbank er mer pålitelig i den mørke årstiden.',
      },
      {
        q: 'Hvilken brannsikring er ekstra viktig når du bruker vedovn, parafin- eller gassovn?',
        options: [
          'Bare røykvarsler',
          'Ingen – disse er helt trygge',
          'Røykvarsler, kullosvarsler og slokkeutstyr som du vet hvordan du bruker',
          'En ekstra skjøteledning',
        ],
        answer: 2,
        explain:
          'Røykvarsleren varsler brann, men oppdager ikke kullos. En kullosvarsler varsler gassen du ikke kan lukte eller se.',
      },
    ],
  },

  // ─── Kommunikasjon ────────────────────────────────────────────────────────
  {
    id: 'kommunikasjon-og-informasjon',
    title: 'Kommunikasjon og informasjon',
    topic: 'kommunikasjon',
    icon: 'radio-tower',
    accent: 'violet',
    questions: [
      {
        q: 'Mobilnettet er overbelastet etter en hendelse. Hvordan gir du beskjed til familien om at du er i god behold?',
        options: [
          'Ringer igjen og igjen til du kommer gjennom',
          'Sender en kort SMS',
          'Laster opp en video på sosiale medier',
          'Ringer 112 og ber dem videreformidle',
        ],
        answer: 1,
        explain:
          'SMS kommer oftest fram når nettet er presset, og belaster nettet mindre enn samtaler. La nødnumrene være ledige for dem som trenger hjelp.',
      },
      {
        q: 'Strømmen og internett er borte. Hvor får du sikrest informasjon fra myndighetene?',
        options: [
          'Rykter fra naboene',
          'TV-en',
          'Batteri- eller sveivdrevet radio – NRK P1',
          'Ingen steder før strømmen er tilbake',
        ],
        answer: 2,
        explain:
          'NRK har et særskilt beredskapsansvar. En DAB-radio med batteri eller sveiv virker når strøm og nett er nede.',
      },
      {
        q: 'Mobilbatteriet ditt er på 30 % og strømmen er borte. Hva gjør du?',
        options: [
          'Slår på strømsparing, demper skjermen og skrur av det du ikke trenger',
          'Strømmer nyheter på video for å holde deg oppdatert',
          'Slår av telefonen helt i en uke',
          'Legger den ute i kulda så batteriet varer lenger',
        ],
        answer: 0,
        explain:
          'Spar batteriet til det viktige. Hold telefonen varm – kulde tømmer batteriet raskere – og lad med strømbank når du kan.',
      },
      {
        q: 'Du ringer 113. Hva er det første du sier?',
        options: [
          'Hele sykehistorien til personen',
          'Hvem du er gift med',
          'At du er redd og vil ha hjelp snart',
          'Hvor du er, hva som har skjedd, og nummeret du ringer fra',
        ],
        answer: 3,
        explain:
          'Adressen er det viktigste. Svar på spørsmålene og ikke legg på før operatøren sier det – de kan veilede deg i førstehjelp.',
      },
      {
        q: 'Mobil og internett er nede over lengre tid, og du trenger hjelp eller informasjon. Hva gjør du?',
        options: [
          'Venter hjemme til noen tar kontakt',
          'Går til kommunens oppmøtested eller nærmeste brannstasjon/legevakt',
          'Kjører rundt for å finne dekning, uansett vær',
          'Skriver et innlegg på sosiale medier og venter',
        ],
        answer: 1,
        explain:
          'Kommunen kan opprette informasjonspunkter. Finn ut på forhånd hvor slike oppmøtesteder er, og følg med på oppslag.',
      },
      {
        q: 'Hva bør familiens kommunikasjonsplan inneholde?',
        options: [
          'Bare passordene til strømmeappene',
          'Ingenting – alle har jo mobil',
          'Kontaktliste på papir, en kontaktperson utenbys og to møtesteder',
          'Kun nummeret til nærmeste nabo',
        ],
        answer: 2,
        explain:
          'Et nært og et fjernere møtested, en kontaktperson i en annen by og numre på papir gjør at dere finner hverandre når nettet svikter.',
      },
      {
        q: 'En dramatisk melding om forgiftet drikkevann sprer seg i en gruppechat. Hva gjør du?',
        options: [
          'Sjekker hva kommunen og offisielle kanaler sier før du gjør noe eller deler',
          'Deler den videre med en gang for sikkerhets skyld',
          'Kjøper opp alt flaskevann i butikken',
          'Svarer avsenderen med ny informasjon du har hørt',
        ],
        answer: 0,
        explain:
          'Feilinformasjon sprer seg raskt i kriser. Stopp, sjekk kilden, og stol på kommunen, politiet og NRK.',
      },
      {
        q: 'Du får en SMS «fra banken» under en krise om at kontoen må bekreftes via en lenke. Hva gjør du?',
        options: [
          'Klikker og logger inn med BankID for å være trygg',
          'Sender koden til avsenderen',
          'Ringer nummeret som står i meldingen',
          'Klikker ikke, og kontakter banken via kanaler du selv finner',
        ],
        answer: 3,
        explain:
          'Svindlere utnytter kriser. Banker og myndigheter ber aldri om passord eller koder på SMS. Ring politiet på 02800 hvis du er blitt svindlet.',
      },
      {
        q: 'Du har ikke dekning fra din egen operatør. Kan du likevel ringe 112?',
        options: [
          'Nei, nødnummer krever eget nett',
          'Ja, prøv – nødsamtaler kan gå via andre operatørers nett hvis de har dekning',
          'Bare hvis du har SIM-kort med fastpris',
          'Bare fra fasttelefon',
        ],
        answer: 1,
        explain:
          'Mobilen forsøker å koble nødsamtaler via et hvilket som helst tilgjengelig nett. Prøv alltid, også når skjermen viser dårlig eller ingen dekning.',
      },
      {
        q: 'Hvorfor bør dere avtale en kontaktperson som bor et annet sted?',
        options: [
          'Fordi det er påbudt',
          'For at noen skal kunne passe huset',
          'Et sted utenfor krisen kan være lettere å nå, og alle kan melde fra dit',
          'Det har ingen hensikt',
        ],
        answer: 2,
        explain:
          'Lokale nett kan være overbelastet. En kontaktperson utenbys kan samle beskjeder fra alle i familien.',
      },
    ],
  },

  // ─── Friluft ──────────────────────────────────────────────────────────────
  {
    id: 'friluft-og-overlevelse',
    title: 'Friluft og overlevelse',
    topic: 'friluft',
    icon: 'pine-tree',
    accent: 'moss',
    questions: [
      {
        q: 'Du har gått deg bort i skogen, og det begynner å mørkne. Hva gjør du først?',
        options: [
          'Løper i den retningen du tror er riktig',
          'Stopper, tenker og vurderer – og holder deg der du er hvis du er usikker',
          'Går ned i en bekkedal for å følge vannet uansett terreng',
          'Slår av mobilen for å spare batteri og fortsetter å gå',
        ],
        answer: 1,
        explain:
          'Panikk gjør det verre. Stopp, finn ly, hold varmen og ring 112. Har du meldt fra hvor du skulle, vil letemannskap starte der.',
      },
      {
        q: 'Hva er den største faren i norsk natur?',
        options: ['Bjørn og ulv', 'Huggorm', 'Kulde, vind og væte', 'Giftig sopp'],
        answer: 2,
        explain:
          'Nedkjøling er den vanligste alvorlige faren – også om sommeren når du er våt og det blåser.',
      },
      {
        q: 'Du må overnatte ute uten telt. Hva er viktigst?',
        options: [
          'Å isolere deg godt fra bakken og skjerme deg mot vind og væte',
          'Å ligge på bar mark så du kjenner om noen kommer',
          'Å ta av deg våte ullklær og sove i bare bomull',
          'Å legge deg rett i vinden så du ikke blir for varm',
        ],
        answer: 0,
        explain:
          'Bakken stjeler varme fort. Granbar, sitteunderlag eller sekken under deg og et enkelt ly mot vinden gjør stor forskjell.',
      },
      {
        q: 'Du trenger å tenne bål med naturlig materiale. Hva tar fyr lettest?',
        options: ['Grønne grankvister', 'Fuktig mose', 'Store, våte kubber', 'Never fra bjørk'],
        answer: 3,
        explain:
          'Never inneholder oljer og brenner også når den er litt fuktig. Bygg opp med tynne, tørre kvister – fra fyrstikktykkelse og oppover.',
      },
      {
        q: 'Det er juli, og du vil tenne bål i skogen. Hva gjelder?',
        options: [
          'Det er alltid lov så lenge du har vann i nærheten',
          'Det er generelt forbudt i eller nær skog og utmark fra 15. april til 15. september, med unntak der brann åpenbart ikke kan oppstå',
          'Det er bare forbudt i nasjonalparker',
          'Det er bare forbudt etter kl. 22',
        ],
        answer: 1,
        explain:
          'Det generelle bålforbudet gjelder 15. april–15. september. Kommunen kan i tillegg innføre totalforbud ved stor skogbrannfare.',
      },
      {
        q: 'Turkameraten skjelver, snakker uklart og blir klossete. Hva gjør du?',
        options: [
          'Lar ham gå raskt videre så han blir varm',
          'Gnir armer og bein kraftig med snø',
          'Gir ham alkohol for å varme opp',
          'Søker ly, skifter til tørre klær, isolerer fra bakken og ringer 113',
        ],
        answer: 3,
        explain:
          'Dette er tegn på nedkjøling. Behandle personen skånsomt, gi varm, søt drikke bare hvis han er våken og kan svelge. Stopper skjelvingen, er det et faresignal.',
      },
      {
        q: 'Du skal drikke vann fra en klar fjellbekk. Hva er tryggest?',
        options: [
          'Kok det, selv om det ser rent ut',
          'Drikk det rett fra bekken – fjellvann er alltid rent',
          'Drikk det bare hvis det er kaldt',
          'Bland det med saft for å drepe bakterier',
        ],
        answer: 0,
        explain:
          'Koking er sikreste rensemetode. Klart vann kan inneholde smitte fra dyr. Snø må smeltes før du drikker.',
      },
      {
        q: 'Du ser en sopp du tror er en kantarell, men er ikke helt sikker. Hva gjør du?',
        options: [
          'Spiser en liten bit for å teste',
          'Steker den godt så giften forsvinner',
          'Lar den stå – spis aldri noe du ikke er 100 % sikker på',
          'Spiser den hvis den lukter godt',
        ],
        answer: 2,
        explain:
          'Flere farlige sopper kan forveksles med matsopp, og steking fjerner ikke giften. Mat har dessuten lav prioritet på kort sikt – vann, varme og ly kommer først.',
      },
      {
        q: 'Hvordan viser du at du trenger hjelp når redningsmannskap leter etter deg?',
        options: [
          'Gjemmer deg i tett skog for å holde varmen',
          'Lager tre signaler – tre rop, tre fløytestøt eller tre bål – og gjentar',
          'Går fra sted til sted for å dekke større område',
          'Venter i stillhet',
        ],
        answer: 1,
        explain:
          'Tre signaler, gjentatt, er et internasjonalt nødsignal. Bli der du er, og gjør deg synlig med farger, lys og røyk.',
      },
      {
        q: 'Hvilken fjellvettregel passer best når været blir mye verre enn meldt?',
        options: [
          'Spar på kreftene – du kan alltid løpe senere',
          'Ta snarveien over brefallet',
          'Følg flokken',
          'Vend i tide, det er ingen skam å snu',
        ],
        answer: 3,
        explain:
          'Å snu i tide er ofte den klokeste avgjørelsen. Ta hensyn til vær- og skredvarsel, og vær forberedt på uvær også på korte turer.',
      },
    ],
  },

  // ─── Psyke ────────────────────────────────────────────────────────────────
  {
    id: 'psykisk-beredskap',
    title: 'Psykisk beredskap',
    topic: 'psyke',
    icon: 'head-heart',
    accent: 'violet',
    questions: [
      {
        q: 'Du merker hjertebank, uro og at det er vanskelig å tenke klart under en krise. Hva er riktig å vite?',
        options: [
          'Det betyr at du har en psykisk lidelse',
          'Sterke reaksjoner er normale i en unormal situasjon',
          'Du bør skjule det for alle',
          'Det går aldri over',
        ],
        answer: 1,
        explain:
          'Kroppen gjør seg klar til å handle. Pust rolig, fokuser på én oppgave om gangen, og snakk med noen du stoler på.',
      },
      {
        q: 'Hva hjelper mest mot uro før en eventuell krise?',
        options: [
          'Å følge med på nyheter hele døgnet',
          'Å unngå å tenke på det i det hele tatt',
          'Kunnskap og konkret forberedelse',
          'Å kjøpe så mye som mulig',
        ],
        answer: 2,
        explain:
          'Når du vet hva du skal gjøre og har det du trenger, blir uroen mindre. Små, konkrete tiltak gir følelse av kontroll.',
      },
      {
        q: 'Strømmen har vært borte i tre døgn. Hva hjelper familien til å holde motet oppe?',
        options: [
          'Faste rutiner for måltider, søvn og små oppgaver til alle',
          'At alle sover så mye som mulig hele dagen',
          'At de voksne holder alt hemmelig',
          'Å sjekke nyheter på mobilen hver time',
        ],
        answer: 0,
        explain:
          'Rutiner og meningsfulle oppgaver gir trygghet. Hold på hverdagen så godt det går, og begrens nyhetsstrømmen.',
      },
      {
        q: 'En fireåring er redd etter en storm som rev av taket på naboens hus. Hva er viktigst?',
        options: [
          'Forklare alt i detalj',
          'Si at det ikke var noe å være redd for',
          'La barnet se nyhetsdekningen sammen med deg',
          'Nærhet, faste rutiner og enkle, ærlige svar',
        ],
        answer: 3,
        explain:
          'De minste trenger først og fremst nærhet og forutsigbarhet. Svar enkelt og rolig på det de spør om.',
      },
      {
        q: 'En ungdom vil snakke med noen andre enn foreldrene. Hvilket nummer kan de ringe?',
        options: [
          'Alarmtelefonen for barn og unge, 116 111',
          'Politiets nummer 02800',
          'Giftinformasjonen',
          '110',
        ],
        answer: 0,
        explain:
          'Alarmtelefonen for barn og unge er gratis. Ved akutt fare for liv: ring 113.',
      },
      {
        q: 'En nabo virker helt i sjokk etter en brann. Hvordan hjelper du best?',
        options: [
          'Presser ham til å fortelle alt i detalj med en gang',
          'Sier at han må ta seg sammen',
          'Er rolig til stede, sørger for varme og trygghet, og lytter hvis han vil snakke',
          'Lar ham være i fred – det er ikke din sak',
        ],
        answer: 2,
        explain:
          'Psykologisk førstehjelp handler om trygghet, ro og kontakt. Hjelp med praktiske behov og koble på familie eller hjelpeapparat.',
      },
      {
        q: 'Uker etter en dramatisk hendelse sover du dårlig og tenker mye på det. Hva er vanligst?',
        options: [
          'At slike etterreaksjoner varer resten av livet',
          'At etterreaksjoner er vanlige og avtar gradvis for de fleste',
          'At det betyr at du håndterte krisen dårlig',
          'At du bør unngå alle andre mennesker',
        ],
        answer: 1,
        explain:
          'Etterreaksjoner er vanlige og normale. Søvn, rutiner og mennesker rundt deg hjelper. Blir det ikke bedre, kontakt fastlegen.',
      },
      {
        q: 'Når bør du søke hjelp for etterreaksjoner?',
        options: [
          'Aldri – det går alltid over av seg selv',
          'Bare hvis du har vært fysisk skadet',
          'Først etter mange år',
          'Når reaksjonene ikke avtar, hindrer deg i hverdagen, eller du får tanker om å skade deg selv',
        ],
        answer: 3,
        explain:
          'Kontakt fastlegen eller legevakt (116 117). Ved akutt fare for liv: ring 113. Mental Helse hjelpetelefon er 116 123.',
      },
      {
        q: 'Hvem bør du særlig sjekke på i nabolaget under et langvarig strømbrudd?',
        options: [
          'Eldre, syke og folk som bor alene',
          'Bare de du kjenner godt',
          'Ingen – alle skal klare seg selv',
          'Bare barnefamilier',
        ],
        answer: 0,
        explain:
          'Eldre, kronisk syke og folk som bor alene kan være ekstra sårbare. Et besøk kan avdekke behov for varme, mat, medisiner eller hjelp.',
      },
      {
        q: 'Hvordan blir hele familien best rustet psykisk for en krise?',
        options: [
          'De voksne planlegger alene i hemmelighet',
          'Dere lager planen sammen, og går gjennom den minst én gang i året',
          'Man planlegger først når krisen er her',
          'Hver person lager sin egen plan uten å fortelle de andre',
        ],
        answer: 1,
        explain:
          'Når alle vet hva de skal gjøre og har en rolle, blir det mindre kaos og mindre frykt.',
      },
    ],
  },

  // ─── Varsling (ekstra) ────────────────────────────────────────────────────
  {
    id: 'varsling-og-nodnumre',
    title: 'Varsling og nødnumre',
    topic: 'grunnkurs',
    icon: 'bullhorn-outline',
    accent: 'signal',
    questions: [
      {
        q: 'Du hører tyfonen: tre serier med tre støt, med ett minutts opphold mellom seriene. Hva betyr det?',
        options: [
          'Flyalarm – søk dekning umiddelbart',
          'Faren er over',
          'Viktig melding – søk informasjon',
          'Test av anlegget, ingenting å bry seg om',
        ],
        answer: 2,
        explain:
          '«Viktig melding – søk informasjon» (tidligere «lytt på radio»). Slå på NRK eller sjekk offisielle nettsider og følg rådene.',
      },
      {
        q: 'Tyfonen gir korte støt i omtrent ett minutt. Hva gjør du?',
        options: [
          'Søker dekning med en gang – nærmeste tilfluktsrom eller et rom innendørs uten vinduer',
          'Går ut for å se hva som skjer',
          'Venter på neste signal før du gjør noe',
          'Kjører ut av byen',
        ],
        answer: 0,
        explain:
          'Dette er «Flyalarm». Søk dekning umiddelbart i tilfluktsrom, kjeller eller et indre rom, og bli der til du får beskjed.',
      },
      {
        q: 'Tyfonen gir ett sammenhengende støt i ca. 30 sekunder. Hva betyr det?',
        options: [
          'Viktig melding',
          'Flyalarm',
          'Evakuer straks',
          'Faren over',
        ],
        answer: 3,
        explain:
          '«Faren over» betyr at du kan forlate dekningsrommet. Følg fortsatt med på informasjon fra myndighetene.',
      },
      {
        q: 'Det er andre onsdag i juni kl. 12, og tyfonen går. Hva er dette mest sannsynlig?',
        options: [
          'En ekte flyalarm',
          'Den faste testen av tyfonene, sammen med test av Nødvarsel på mobil',
          'Et tegn på at strømmen skal kobles ut',
          'En feil i anlegget',
        ],
        answer: 1,
        explain:
          'Tyfonene testes kl. 12 andre onsdag i januar og juni, samtidig med Nødvarsel på mobil. Andre tidspunkter kan være ekte varsling.',
      },
      {
        q: 'Mobilen hyler med en kraftig lyd selv om den står på lydløs, og viser «Nødvarsel». Hva gjør du?',
        options: [
          'Avviser varselet og fortsetter som før',
          'Slår av telefonen så det ikke skjer igjen',
          'Leser meldingen nøye og følger rådene i den',
          'Ringer 112 for å spørre hva det gjelder',
        ],
        answer: 2,
        explain:
          'Nødvarsel sendes til alle mobiler i et område ved akutt fare. Meldingen sier hva du skal gjøre og hvor du finner mer informasjon. Ikke belast nødnumrene med spørsmål.',
      },
      {
        q: 'Det brenner i en søppelcontainer ved huset. Hvilket nummer ringer du?',
        options: ['112', '113', '110', '116 117'],
        answer: 2,
        explain:
          '110 er brann, røyk og ulykker med farlige stoffer. 112 er politi, 113 er medisinsk nødhjelp.',
      },
      {
        q: 'Du ser et innbrudd pågå hos naboen. Hvilket nummer ringer du?',
        options: ['02800', '112', '110', '113'],
        answer: 1,
        explain:
          'Pågående kriminalitet og fare er akutt – ring 112. 02800 er politiets nummer for saker som ikke haster.',
      },
      {
        q: 'Du har høy feber og trenger råd, men det er ikke livstruende. Hvem kontakter du på kvelden?',
        options: ['Legevakt, 116 117', '113', '112', 'Giftinformasjonen'],
        answer: 0,
        explain:
          'Legevakten tar seg av det som ikke kan vente til fastlegen. Ved tegn på livstruende sykdom – som pustebesvær, brystsmerter eller slapphet – ring 113.',
      },
      {
        q: 'Du ringer 113, men blir stresset og vet ikke helt hva du skal si. Hva er riktig?',
        options: [
          'Legge på og ringe tilbake når du har tenkt deg om',
          'Sende SMS i stedet',
          'Be dem ringe tilbake senere',
          'Si hvor du er og hva som har skjedd, svar på spørsmålene og ikke legg på',
        ],
        answer: 3,
        explain:
          'Operatøren leder samtalen. Hold linjen åpen – de kan veilede deg i HLR eller annen førstehjelp mens hjelpen er på vei.',
      },
      {
        q: 'Du hører tyfonen «Viktig melding», men strømmen er borte. Hvor søker du informasjon?',
        options: [
          'På batteridrevet DAB-radio – NRK',
          'Ingen steder – vent til strømmen kommer',
          'Ved å ringe 112',
          'Ved å kjøre rundt og spørre folk',
        ],
        answer: 0,
        explain:
          'En radio med batteri eller sveiv er beredskapskanalen når strøm og nett er nede. NRK sender viktige meldinger fra myndighetene.',
      },
    ],
  },

  // ─── Hva hvis? (ekstra) ───────────────────────────────────────────────────
  {
    id: 'hva-hvis',
    title: 'Hva gjør du hvis …?',
    topic: 'grunnkurs',
    icon: 'head-question-outline',
    accent: 'signal',
    questions: [
      {
        q: 'Det begynner å brenne på kjøkkenet, og røyken sprer seg raskt. Hva gjør du først?',
        options: [
          'Rydder unna verdisaker',
          'Roper «Brann!», får alle ut og lukker døra etter deg',
          'Åpner alle vinduer for å slippe ut røyken',
          'Prøver å slokke uansett hvor stor brannen er',
        ],
        answer: 1,
        explain:
          'Varsle, redd, slokk – i den rekkefølgen. Lukk døra for å stenge brannen inne, ring 110 og slokk bare hvis det er trygt.',
      },
      {
        q: 'En kjele med olje tar fyr på komfyren. Hva gjør du?',
        options: [
          'Slår på vann for å kvele flammene',
          'Bærer kjelen ut',
          'Slår av platen og legger et lokk eller brannteppe over',
          'Vifter med et håndkle',
        ],
        answer: 2,
        explain:
          'Vann på brennende olje kan gi en eksplosjonsaktig brann. Kvel brannen med lokk eller brannteppe og la det ligge.',
      },
      {
        q: 'Det er meldt rødt farevarsel om storm. Hva gjør du kvelden før?',
        options: [
          'Sikrer løse ting ute, lader telefoner og har vann, mat og lys klart',
          'Planlegger en tur langs kysten for å se på bølgene',
          'Lar trampolinen stå – den er tung nok',
          'Ingenting, det blir sjelden så ille',
        ],
        answer: 0,
        explain:
          'Les farevarselet på yr.no eller varsom.no, sikre det som kan blåse bort, og vær forberedt på strømbrudd.',
      },
      {
        q: 'Stormen raser. Du må ut. Hva er viktigst?',
        options: [
          'Ta snarveien gjennom skogen',
          'Parkere under et stort tre for å skjerme bilen',
          'Kjøre over en flomstor bekk for å komme fram raskere',
          'Unngå trær, master og bygninger der tak og løse ting kan falle ned',
        ],
        answer: 3,
        explain:
          'Hold deg innendørs hvis du kan. Fallende trær og flygende gjenstander er den største faren i storm.',
      },
      {
        q: 'Vannet er borte i hele området, og du vet ikke hvorfor. Hva gjør du først?',
        options: [
          'Fyller badekaret med vann fra varmtvannsberederen',
          'Sjekker hva kommunen sier og bruker lagret vann til drikke og mat',
          'Henter vann fra nærmeste dam og drikker det rått',
          'Ringer 113',
        ],
        answer: 1,
        explain:
          'Kommunen informerer om årsak, varighet og eventuelle vannposter. Spar på drikkevannet og steng kraner du har åpnet.',
      },
      {
        q: 'Betalingsterminaler og bankapper er nede i hele landsdelen. Hva er planen?',
        options: [
          'Bruke kontanter du har hjemme til det du trenger',
          'Låne kortet til en nabo',
          'Vente med alt til systemene er oppe',
          'Kjøre til nærmeste nabokommune med fullt drivstoff i håp om at det virker der',
        ],
        answer: 0,
        explain:
          'Ha noe kontanter i beredskapslageret. Ved digitale utfall er kontanter ofte eneste betalingsmiddel.',
      },
      {
        q: 'Røykvarsleren piper midt på natta og det er røyk i gangen utenfor soverommet. Hva gjør du?',
        options: [
          'Åpner døra og løper ut gjennom røyken',
          'Gjemmer deg under senga',
          'Holder døra lukket, tetter sprekker, ringer 110 og gjør deg synlig i vinduet',
          'Venter til røyken går over',
        ],
        answer: 2,
        explain:
          'Røyk dreper raskere enn flammer. En lukket dør beskytter. Ring 110, vis deg i vinduet og bruk alternativ rømningsvei hvis det er trygt.',
      },
      {
        q: 'Strømbruddet har vart i to døgn i kulda. Nabokona på 85 bor alene. Hva gjør du?',
        options: [
          'Venter på at kommunen tar kontakt med henne',
          'Ringer 112 og ber dem sjekke',
          'Sender en SMS og går ut fra at alt er bra',
          'Går bort og sjekker om hun har varme, mat, vann og medisiner',
        ],
        answer: 3,
        explain:
          'Sårbare naboer kan raskt bli nedkjølt. Et besøk kan være avgjørende. Er hun syk eller kald og forvirret, ring 113.',
      },
      {
        q: 'Du blir bedt om å evakuere på grunn av flom eller skred. Hva gjør du?',
        options: [
          'Følger beskjeden med en gang, tar evakueringsbagen og går den veien myndighetene anviser',
          'Blir igjen for å passe på huset',
          'Venter til vannet er synlig i hagen',
          'Kjører gjennom oversvømte veier for å komme fortere ut',
        ],
        answer: 0,
        explain:
          'Evakuering skjer for å redde liv. Kjør aldri gjennom vann i veien – bilen kan bli tatt av strømmen. Gi beskjed til kontaktpersonen din.',
      },
      {
        q: 'Myndighetene ber alle i området holde seg innendørs på grunn av giftig røyk fra en brann. Hva gjør du?',
        options: [
          'Lufter godt for å få frisk luft',
          'Lukker vinduer og dører, slår av ventilasjonen og følger med på NRK',
          'Går ut for å hente barna fra nabolaget i røyken',
          'Kjører ut av området gjennom røyken',
        ],
        answer: 1,
        explain:
          'Hold røyken ute: lukk alt, skru av ventilasjon og avtrekk, og vent på beskjed om at faren er over.',
      },
    ],
  },
];
