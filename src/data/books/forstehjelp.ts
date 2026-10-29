import type { Book } from '../types';

export const book: Book = {
  id: 'forstehjelp',
  title: 'Førstehjelp når hjelpen er langt unna',
  subtitle: 'Livreddende tiltak du kan gjøre selv',
  description:
    'En praktisk førstehjelpshåndbok for situasjoner der ambulansen bruker lang tid – på hytta, i uvær eller under en større krise. Boka følger rådene fra Norsk Resuscitasjonsråd og Norsk førstehjelpsråd, og tar deg gjennom alt fra hjerte- og lungeredning til blødninger, brannskader, nedkjøling og forgiftninger.',
  icon: 'medical-bag',
  accent: 'clay',
  premium: true,
  chapters: [
    {
      id: 'sikre-varsle-hjelpe',
      title: 'Sikre, varsle, hjelpe',
      minutes: 5,
      blocks: [
        {
          type: 'warning',
          title: 'Denne boka erstatter ikke et kurs',
          text: 'Førstehjelp læres best med hendene. Les denne boka som repetisjon og oppslagsverk, men ta et praktisk førstehjelpskurs og frisk det opp jevnlig. Er du i tvil om hva du skal gjøre, ring 113 – operatøren veileder deg.',
        },
        {
          type: 'p',
          text: 'Når noe skjer, er det lett å bli handlingslammet. Den gode nyheten er at førstehjelp ikke krever perfeksjon. Det viktigste er at du gjør noe. Den som griper inn, gjør nesten alltid situasjonen bedre.',
        },
        { type: 'h', text: 'Tre steg i riktig rekkefølge' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Sikre: Se deg rundt. Er det trafikk, brann, strøm, giftig gass eller rasfare? Du hjelper ingen ved å bli skadd selv. Flytt den skadde bare hvis dere er i umiddelbar fare.',
            'Varsle: Ring 113. Si hvor du er, hva som har skjedd og hvor mange som er skadd. Sett telefonen på høyttaler så du kan hjelpe mens du snakker.',
            'Livreddende førstehjelp: Sørg for frie luftveier, at personen puster, og stopp store blødninger. Start hjerte- og lungeredning hvis personen ikke puster normalt.',
          ],
        },
        {
          type: 'facts',
          items: [
            { label: 'Medisinsk nødhjelp', value: '113' },
            { label: 'Legevakt', value: '116 117' },
            { label: 'Giftinformasjonen', value: '22 59 13 00' },
          ],
        },
        { type: 'h', text: 'Når hjelpen er langt unna' },
        {
          type: 'p',
          text: 'I en krise kan ambulansen bruke mye lengre tid enn vanlig. Da blir rollen din større: Du må ikke bare starte førstehjelpen, men holde den i gang, følge med på personen over tid og beskytte mot kulde. Ring likevel alltid 113 – også når du tror det vil ta lang tid. Operatøren kan gi råd, prioritere og sende hjelp på andre måter.',
        },
        {
          type: 'list',
          items: [
            'Skriv ned klokkeslett for hva som skjedde og hva du gjorde.',
            'Følg med på bevissthet og pust hele tiden.',
            'Hold personen varm – nedkjøling forverrer nesten alle skader.',
            'Snakk rolig og forklar hva du gjør. Trygghet er også behandling.',
          ],
        },
        {
          type: 'tip',
          title: 'Del oppgaver',
          text: 'Er dere flere, pek på én person og si: «Du ringer 113», og på en annen: «Du henter hjertestarter.» Tydelige beskjeder virker mye bedre enn «Kan noen ringe?»',
        },
      ],
    },
    {
      id: 'bevisstloshet-og-hlr',
      title: 'Bevisstløshet og hjerte- og lungeredning',
      minutes: 8,
      blocks: [
        {
          type: 'p',
          text: 'Ved hjertestans teller hvert minutt. Hjernen tåler bare få minutter uten oksygen. Den som starter brystkompresjoner umiddelbart, kan doble eller tredoble sjansen for at personen overlever.',
        },
        { type: 'h', text: 'Sjekk bevissthet og pust' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Snakk høyt til personen og rist forsiktig i skuldrene: «Hører du meg?»',
            'Svarer personen ikke: Rop om hjelp.',
            'Åpne luftveiene: Legg én hånd på pannen og bøy hodet forsiktig bakover, og løft haken med to fingre.',
            'Se, lytt og kjenn etter normal pust i inntil 10 sekunder.',
          ],
        },
        { type: 'h', text: 'Puster normalt: stabilt sideleie' },
        {
          type: 'p',
          text: 'En bevisstløs person som puster normalt, legges i stabilt sideleie. Da holdes luftveiene åpne, og oppkast eller blod kan renne ut av munnen i stedet for ned i lungene. Ring 113, hold personen varm, og kontroller pusten jevnlig. Slutter personen å puste normalt, legg personen på ryggen og start HLR.',
        },
        { type: 'h', text: 'Puster ikke normalt: start HLR' },
        {
          type: 'warning',
          title: 'Gisping er ikke normal pust',
          text: 'Sjeldne, snappende gisp er vanlig de første minuttene etter hjertestans. Det er ikke normal pust. Er du i tvil, start HLR.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Ring 113 og sett telefonen på høyttaler. Få noen til å hente nærmeste hjertestarter.',
            'Legg personen på ryggen på et hardt underlag.',
            'Plasser hendene midt på brystet, på nedre halvdel av brystbeinet.',
            'Trykk 30 ganger, 5–6 cm ned, i en takt på 100–120 per minutt. Slipp helt opp mellom hvert trykk.',
            'Gi 2 innblåsninger: Hold nesen lukket, bøy hodet bakover, løft haken og blås rolig til brystkassa hever seg.',
            'Fortsett 30:2 uten pauser til hjertestarter kommer, helsepersonell tar over, eller personen begynner å puste normalt.',
          ],
        },
        {
          type: 'facts',
          items: [
            { label: 'Kompresjoner : innblåsninger', value: '30 : 2' },
            { label: 'Takt', value: '100–120 per minutt' },
            { label: 'Dybde, voksen', value: '5–6 cm' },
            { label: 'Sjekk pust', value: 'maks 10 sekunder' },
          ],
        },
        {
          type: 'tip',
          title: 'Kan ikke eller vil ikke blåse?',
          text: 'Gi kontinuerlige brystkompresjoner uten innblåsninger. Det er langt bedre enn ingenting. Er dere flere, bytt på å trykke hvert annet minutt – det er tungt arbeid, og kvaliteten faller fort når man blir sliten.',
        },
        { type: 'h', text: 'Hjertestarteren' },
        {
          type: 'p',
          text: 'En hjertestarter (AED) kan gi strømstøt som får hjertet til å slå normalt igjen. Den kan brukes av alle: Slå den på og følg talebeskjedene. Fest elektrodene på bar brystkasse slik bildene viser, og hold avstand når den analyserer og gir støt. Fortsett HLR straks etter støtet, og la elektrodene sitte på.',
        },
        { type: 'h', text: 'Barn' },
        {
          type: 'p',
          text: 'Hjertestans hos barn skyldes oftest pustesvikt. Har du lært barne-HLR, start med 5 innblåsninger før du går over til kompresjoner. Trykk en tredjedel av brystkassens dybde. Har du bare lært HLR for voksne, bruk den – det viktigste er å starte.',
        },
      ],
    },
    {
      id: 'blodninger',
      title: 'Kraftige blødninger',
      minutes: 7,
      blocks: [
        {
          type: 'p',
          text: 'En kraftig blødning kan ta livet av et menneske på få minutter. Samtidig er nesten alle blødninger mulige å stoppe med enkle grep. Det viktigste verktøyet har du allerede: hendene dine.',
        },
        { type: 'h', text: 'Direkte trykk' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Legg den skadde ned. Det reduserer blodtrykket i såret og hindrer fall om personen besvimer.',
            'Trykk hardt og direkte på såret – helst med kompress eller et rent tøystykke, men med bare hånden hvis det er alt du har.',
            'Hold trykket konstant. Ikke løft for å se om det har stoppet.',
            'Gjennomblødes kompressen, legg ny oppå og trykk videre.',
          ],
        },
        { type: 'h', text: 'Trykkbandasje' },
        {
          type: 'p',
          text: 'Når blødningen er under kontroll, kan du frigjøre hendene med en trykkbandasje. Legg en tykk kompress eller et sammenbrettet tøystykke rett over såret, og surr fast med elastisk bind eller tøystrimler. Bandasjen skal sitte stramt, men fingre og tær utenfor skal fortsatt ha farge og følelse.',
        },
        {
          type: 'tip',
          title: 'Dype sår',
          text: 'Ved dype sår, for eksempel i lysken eller armhulen, pakk kompress eller rent tøy ned i såret og trykk hardt. Hold trykket i flere minutter.',
        },
        { type: 'h', text: 'Tourniquet – bare ved livstruende blødning' },
        {
          type: 'p',
          text: 'En tourniquet er en stram reim som stopper blodtilførselen til en arm eller et bein. Den skal kun brukes ved livstruende blødning fra en arm eller et bein som ikke kan stoppes med direkte trykk – for eksempel ved amputasjon, eller når du må frigjøre hendene for å hjelpe flere skadde.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Bruk en kommersiell tourniquet om du har. Improviserte varianter virker sjelden godt.',
            'Plasser den 5–8 cm over såret, ikke over et ledd.',
            'Stram til blødningen stopper helt.',
            'Noter klokkeslettet, gjerne direkte på huden eller på tourniqueten.',
            'Ikke løsne den. Det skal helsepersonell gjøre.',
          ],
        },
        {
          type: 'warning',
          title: 'Fremmedlegemer',
          text: 'Står det en kniv, en spiker eller en glassbit i såret, ikke trekk den ut. Den kan dekke for en stor blødning. Stabiliser gjenstanden med kompresser rundt, og trykk rundt den.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Første tiltak', value: 'Direkte, hardt trykk' },
            { label: 'Tourniquet', value: '5–8 cm over såret' },
            { label: 'Noter alltid', value: 'tidspunkt' },
          ],
        },
        { type: 'h', text: 'Neseblod' },
        {
          type: 'p',
          text: 'Sitt med hodet lett fremoverbøyd, og klem hardt på den myke delen av nesen i 10 minutter uten å slippe. Ikke len hodet bakover, da renner blodet ned i halsen.',
        },
      ],
    },
    {
      id: 'brannskader',
      title: 'Brannskader',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Brannskader skjer oftere i kriser, fordi vi lager mat på primus, tenner lys og fyrer i ovner vi ikke er vant til. Riktig førstehjelp de første minuttene avgjør i stor grad hvor dyp skaden blir.',
        },
        { type: 'h', text: 'Kjøl, kjøl, kjøl' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Stopp brannen: Rull personen på bakken eller kvel flammene med et teppe.',
            'Kjøl det skadde området med lunkent vann – rundt 20 grader – i 20 minutter.',
            'Fjern ringer, klokker og stramme klær før hevelsen kommer. Klær som sitter fast i huden, skal ikke rives av.',
            'Dekk brannskaden løst med plastfolie, en ren pose eller brannskadekompress.',
            'Hold resten av kroppen varm.',
          ],
        },
        {
          type: 'facts',
          items: [
            { label: 'Kjøling', value: 'lunkent vann, ca. 20 °C' },
            { label: 'Varighet', value: '20 minutter' },
            { label: 'Dekk med', value: 'plastfolie eller ren kompress' },
          ],
        },
        {
          type: 'warning',
          title: 'Ikke bruk iskaldt vann eller is',
          text: 'Iskaldt vann og is kan gi ytterligere vevsskade og raskt føre til nedkjøling, spesielt hos barn. Lunkent vann gir best effekt. Smør aldri på salve, smør, olje eller tannkrem, og ikke stikk hull på blemmer.',
        },
        { type: 'h', text: 'Når skal du ringe 113 eller legevakt?' },
        {
          type: 'list',
          items: [
            'Ring 113 ved store brannskader, ved skader i ansiktet eller på halsen, eller hvis personen har pustet inn røyk eller varm luft.',
            'Kontakt legevakt ved brannskader større enn personens håndflate, ved skader på hender, føtter, ledd og kjønnsorganer, og ved alle brannskader hos små barn og eldre.',
            'Kontakt også legevakt ved dype skader som er hvite, læraktige eller uten følelse, og ved elektriske og kjemiske brannskader.',
          ],
        },
        {
          type: 'tip',
          title: 'Kjemikalier',
          text: 'Ved etsende stoffer på huden: Børst bort tørt pulver, og skyll deretter med rikelig vann i lang tid. Ved etsende stoff i øynene: Skyll med vann i minst 15 minutter mens du venter på hjelp, og ring 113.',
        },
        {
          type: 'p',
          text: 'Når hjelpen er langt unna, kan lette brannskader behandles hjemme. Hold såret rent og dekket, og følg med på tegn til infeksjon: økende rødhet, varme, puss eller feber. Det skal tas på alvor.',
        },
      ],
    },
    {
      id: 'kulde',
      title: 'Nedkjøling og frostskader',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Uten strøm i et norsk vinterhus, eller etter et fall ute i kulden, kan nedkjøling utvikle seg raskere enn man tror. Eldre, små barn og skadde er mest utsatt. Nedkjøling forverrer også blødninger og sjokk.',
        },
        { type: 'h', text: 'Tegn på nedkjøling' },
        {
          type: 'list',
          items: [
            'Lett: Kraftig skjelving, kalde hender og føtter, nedsatt finmotorikk.',
            'Moderat: Forvirring, sløvhet, utydelig tale. Skjelvingen kan avta.',
            'Alvorlig: Bevisstløshet, svak og langsom pust og puls.',
          ],
        },
        { type: 'h', text: 'Slik hjelper du' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Få personen inn i ly for vind og væte, og isoler mot underlaget.',
            'Bytt våte klær med tørre hvis dere er i ly. Ute: Pakk inn heller enn å kle av.',
            'Pakk inn i soveposer, ulltepper og et vindtett lag ytterst. Husk hodet.',
            'Er personen våken og kan svelge, gi varm og søt drikke.',
            'Håndter personen forsiktig og hold vedkommende liggende ved alvorlig nedkjøling.',
            'Ring 113 ved moderat eller alvorlig nedkjøling.',
          ],
        },
        {
          type: 'warning',
          title: 'Ikke gni og ikke gi alkohol',
          text: 'Gni aldri en nedkjølt person, og ikke gi alkohol. Brå bevegelser og aktivitet kan gi farlige hjerterytmeforstyrrelser ved alvorlig nedkjøling. Puster personen ikke normalt, start HLR.',
        },
        { type: 'h', text: 'Frostskader' },
        {
          type: 'p',
          text: 'Frostskader rammer oftest fingre, tær, ører, nese og kinn. Huden blir hvit eller gråblek, hard og nummen.',
        },
        {
          type: 'list',
          items: [
            'Overfladiske frostskader: Varm opp med kroppsvarme – legg hendene i armhulene, eller en varm hånd mot kinnet.',
            'Gni aldri med snø eller hender, det skader vevet mer.',
            'Ikke tin en dyp frostskade hvis det er fare for at den fryser igjen – det gir verre skader.',
            'Dype frostskader bør helst tines i varmt vann, rundt 37–39 °C, og alltid vurderes av lege.',
            'Ikke stikk hull på blemmer, og beskytt det skadde området mot trykk.',
          ],
        },
        {
          type: 'facts',
          items: [
            { label: 'Første tiltak', value: 'ly, isolasjon, tørt og vindtett' },
            { label: 'Varm drikke', value: 'bare hvis våken og kan svelge' },
            { label: 'Tining av dyp frostskade', value: 'vann ca. 37–39 °C' },
          ],
        },
        {
          type: 'tip',
          title: 'Hypothermiposen',
          text: 'Lag en «pølse» av underlag, sovepose og en presenning eller stor plastsekk ytterst. Den holder varmen langt bedre enn et enkelt pledd, og er god å kunne også på hytta.',
        },
      ],
    },
    {
      id: 'sjokk-og-forgiftning',
      title: 'Sjokk og forgiftning',
      minutes: 6,
      blocks: [
        { type: 'h', text: 'Sjokk' },
        {
          type: 'p',
          text: 'Sjokk betyr at kroppens organer ikke får nok blod og oksygen. Det kan komme etter store blødninger, alvorlige brannskader, kraftig allergisk reaksjon eller alvorlig infeksjon. Sjokk er livstruende og krever behandling på sykehus.',
        },
        {
          type: 'list',
          items: [
            'Blek, kald og klam hud.',
            'Rask og svak puls, rask pust.',
            'Uro, angst, tørst – senere sløvhet og forvirring.',
          ],
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Ring 113.',
            'Stopp synlige blødninger.',
            'Legg personen flatt. Har vedkommende ingen skade i bein, hofte eller rygg, kan du løfte beina litt.',
            'Hold personen varm, også med isolasjon under.',
            'Ikke gi mat eller drikke.',
            'Følg med på bevissthet og pust. Puster personen ikke normalt, start HLR.',
          ],
        },
        {
          type: 'warning',
          title: 'Alvorlig allergisk reaksjon',
          text: 'Ved hevelse i munn og svelg, pustebesvær eller sjokk etter et stikk, en matvare eller en medisin: Ring 113. Har personen adrenalinpenn, hjelp vedkommende å sette den i yttersiden av låret med en gang. Den som har pustebesvær, sitter ofte best.',
        },
        { type: 'h', text: 'Forgiftning' },
        {
          type: 'p',
          text: 'Giftinformasjonen gir råd døgnet rundt om forgiftninger hos mennesker. Ring dem når noen har fått i seg noe som kan være skadelig, og ha emballasjen klar. Ved alvorlige symptomer som bevisstløshet, pustebesvær eller kramper: Ring 113.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Giftinformasjonen', value: '22 59 13 00' },
            { label: 'Alvorlige symptomer', value: '113' },
          ],
        },
        {
          type: 'list',
          items: [
            'Ikke fremkall brekninger.',
            'Har personen fått i seg noe etsende, skyll munnen og gi litt vann å drikke.',
            'Medisinsk kull skal bare gis etter råd fra Giftinformasjonen eller helsepersonell.',
            'Ta vare på emballasje, plantedeler eller rester av det personen har fått i seg.',
          ],
        },
        {
          type: 'warning',
          title: 'Karbonmonoksid (CO)',
          text: 'Hodepine, svimmelhet, kvalme og tretthet hos flere i samme rom kan være CO-forgiftning – særlig ved bruk av grill, aggregat, gass eller vedovn. Få alle ut i frisk luft med en gang, og ring 113. Gå ikke inn igjen før rommet er luftet ut og kilden er fjernet.',
        },
      ],
    },
    {
      id: 'forstehjelpsskrinet',
      title: 'Førstehjelpsskrinet',
      minutes: 4,
      blocks: [
        {
          type: 'p',
          text: 'Et godt førstehjelpsskrin er ikke en eske med plaster. Det er utstyr for å håndtere en alvorlig skade i timene før hjelpen kommer. Ha ett hjemme, ett i bilen og et lite på hytta eller i turesekken.',
        },
        { type: 'h', text: 'Innholdet' },
        {
          type: 'list',
          items: [
            'Sterile kompresser i flere størrelser.',
            'Elastiske bind og minst to trykkbandasjer eller nødbandasjer.',
            'Sportstape og plaster i ulike størrelser.',
            'Saks som klipper klær, og pinsett.',
            'Engangshansker.',
            'Brannskadekompress eller ren plastfolie.',
            'Varmeteppe (redningsfolie) og et ullteppe.',
            'Kommersiell tourniquet – hvis du har lært å bruke den.',
            'Lommelykt eller hodelykt.',
            'Smertestillende og febernedsettende tabletter for voksne og barn.',
            'Liten notatblokk og penn for å notere tidspunkter.',
          ],
        },
        {
          type: 'tip',
          title: 'Faste medisiner',
          text: 'Bruker noen i husstanden faste medisiner, astmaspray eller adrenalinpenn, ha et lite ekstralager og en oversikt over dosering. Snakk med fastlegen om hvordan du kan ha nok til minst en uke.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Antall skrin', value: 'hjem, bil, tur' },
            { label: 'Sjekk', value: 'to ganger i året' },
            { label: 'Oppbevaring', value: 'tørt, kjent sted, utilgjengelig for små barn' },
          ],
        },
        {
          type: 'warning',
          title: 'Utstyr hjelper bare om du kan bruke det',
          text: 'En tourniquet eller trykkbandasje du aldri har prøvd, er vanskelig å bruke under stress. Øv med utstyret hjemme, og ta et praktisk førstehjelpskurs.',
        },
        {
          type: 'p',
          text: 'Sjekk skrinet når du sjekker beredskapslageret. Bytt ut det som er brukt, se over utløpsdatoer på medisiner og sterile produkter, og sjekk at lykta virker.',
        },
      ],
    },
  ],
};
