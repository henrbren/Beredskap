import type { Book } from '../types';

export const book: Book = {
  id: 'varme',
  title: 'Varme, lys & strøm',
  subtitle: 'Hold hjemmet trygt og varmt når strømmen er borte',
  description:
    'Et langvarig strømbrudd midt på vinteren er en av de mest sannsynlige krisene i Norge. Denne boka lærer deg å holde varmen i ett rom, fyre trygt, bruke alternative varmekilder uten å risikere kullosforgiftning og skaffe deg strøm og lys på trygge måter.',
  icon: 'fireplace',
  accent: 'moss',
  premium: true,
  chapters: [
    {
      id: 'varmt-uten-strom',
      title: 'Hold hjemmet varmt uten strøm',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'De fleste norske boliger varmes opp med strøm. Når strømmen går en kald vinterdag, synker innetemperaturen ofte overraskende fort – i et dårlig isolert hus kan det bli kaldt i løpet av et halvt døgn. Målet er ikke å holde hele huset varmt, men å holde menneskene varme.',
        },
        { type: 'h', text: 'Samle familien i ett rom' },
        {
          type: 'p',
          text: 'Velg ett rom dere kan varme opp og oppholde dere i, helst et lite rom midt i huset med få yttervegger og små vinduer. Har du vedovn eller peis, blir det naturlig nok rommet der den står. Steng dørene til resten av huset, så varmen holder seg der dere er.',
        },
        {
          type: 'list',
          items: [
            'Steng dører til rom dere ikke bruker, og legg et håndkle eller teppe langs dørsprekken.',
            'Heng tepper, dyner eller sovepose foran dører og store vinduer.',
            'Trekk for gardiner og rullegardiner når det er mørkt – og åpne dem på solrike dager for å slippe inn varme.',
            'Legg tepper, liggeunderlag eller tykke matter på kalde gulv.',
            'Flytt madrasser inn i varmerommet, så dere kan sove der også.',
          ],
        },
        { type: 'h', text: 'Tett vinduene' },
        {
          type: 'p',
          text: 'Vinduer er hjemmets største varmetap. Plastfolie, bobleplast eller tepper festet med tape rundt vinduskarmen gir et ekstra isolerende luftlag. Selv en enkel løsning med et ullteppe hengt over gardinstangen merkes godt.',
        },
        { type: 'h', text: 'Kle deg lag på lag – også inne' },
        {
          type: 'list',
          items: [
            'Innerst: ull mot huden. Ull varmer selv når den er litt fuktig.',
            'Mellomlag: ullgenser eller fleece som holder på varmen.',
            'Ytterst: en jakke eller vest. Inne trenger du sjelden vindtett, men et ekstra lag gjør stor forskjell.',
            'Lue, ullsokker og tøfler – mye varme forsvinner gjennom hode og føtter.',
            'Om natten: sov i sovepose under dyna, med lue på. Del gjerne seng – kroppsvarme er effektiv varme.',
          ],
        },
        {
          type: 'tip',
          title: 'Varm mat og drikke',
          text: 'Kroppen produserer varme når den forbrenner mat. Spis regelmessig, og drikk varm drikke fra termos. Fyll termosene mens du har varme tilgjengelig, så har du varm drikke gjennom natten.',
        },
        {
          type: 'warning',
          title: 'De mest sårbare blir kalde først',
          text: 'Spedbarn, eldre og syke mister varme raskere og merker det ikke alltid selv. Kjenn på nakken eller brystet til små barn, ikke på hender og føtter. Sjekk også på eldre naboer som bor alene.',
        },
        {
          type: 'facts',
          items: [
            { label: 'DSB anbefaler egenberedskap for', value: 'én uke' },
            { label: 'Varmerommet bør være', value: 'lite og sentralt' },
            { label: 'Viktigste plagg', value: 'ull innerst + lue' },
          ],
        },
      ],
    },
    {
      id: 'vedfyring',
      title: 'Vedfyring – trygt og effektivt',
      minutes: 7,
      blocks: [
        {
          type: 'p',
          text: 'En vedovn eller peis er den beste reservevarmen du kan ha. Den virker uten strøm og kan holde et helt rom varmt. Men en ovn som sjelden brukes, kan være farlig når den plutselig skal gå døgnet rundt.',
        },
        { type: 'h', text: 'Før krisen: sørg for at ildstedet er klart' },
        {
          type: 'list',
          items: [
            'Sørg for at pipa er feiet og ildstedet er sjekket av feiervesenet i kommunen.',
            'Ha et lager av tørr ved som rekker i minst en uke med jevn fyring.',
            'Oppbevar opptenningsbriketter, fyrstikker og avispapir tørt.',
            'Ha brannslukningsapparat eller brannslange lett tilgjengelig.',
            'Sjekk at røykvarslerne fungerer og har batteri.',
            'Har ildstedet stått ubrukt lenge, bør du få det kontrollert før du fyrer – fuglereir eller sprekker i pipa er vanlige problemer.',
          ],
        },
        { type: 'h', text: 'Tørr ved er trygg ved' },
        {
          type: 'p',
          text: 'Rå ved gir dårlig varme, mye røyk og sot som setter seg i pipa – og sot er det som brenner ved en pipebrann. God ved har tørket i lang tid, gjerne et år, og skal ha lav fuktighet. Tørr ved er lett, klinger når to kubber slås mot hverandre, og har ofte sprekker i endeflatene.',
        },
        { type: 'h', text: 'Start forsiktig i en kald ovn' },
        {
          type: 'p',
          text: 'Aldri fyr for hardt i en kald ovn. Rask oppvarming kan gi sprekker i støpejern og i pipa, og en overopphetet ovn kan antenne vegger og møbler i nærheten. Begynn med små vedskier og god lufttilførsel, og bygg varmen gradvis opp.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Åpne spjeldet og luftventilen helt.',
            'Legg to–tre kubber i bunnen, opptenningsved på kryss over, og tennbrikett øverst. Tenn ovenfra – det gir renere forbrenning.',
            'La døra stå på gløtt de første minuttene til trekken er god.',
            'Legg i ny ved når flammene har roet seg og det er glør igjen – bare noen kubber om gangen.',
            'Reguler med lufttilførselen, ikke ved å kvele bålet. Synlige flammer gir ren forbrenning.',
          ],
        },
        {
          type: 'warning',
          title: 'Overfyring',
          text: 'En ovn som gløder rødt, er overfyrt. Steng lufttilførselen delvis og ikke legg i mer ved. Hold brennbart materiale – vedkurv, tekstiler, papir – i god avstand fra ovnen.',
        },
        { type: 'h', text: 'Hvis det blir pipebrann' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Ring 110.',
            'Steng ovnsdøra, spjeldet og all lufttilførsel.',
            'Fjern brennbare ting fra rundt pipa i alle etasjer og på loftet.',
            'Ikke hell vann i ovnen eller pipa – vanndamp kan sprenge pipa.',
            'Følg med på pipa fra utsiden og hold deg klar til å evakuere.',
          ],
        },
        {
          type: 'tip',
          title: 'Aske er farlig lenge',
          text: 'Aske kan inneholde glør i flere døgn. Bruk en metallbøtte med lokk, og sett den ute på ikke-brennbart underlag – aldri i en plastbøtte eller på trapp i tre.',
        },
      ],
    },
    {
      id: 'parafin-gass-co',
      title: 'Parafin, gass og kullos',
      minutes: 7,
      blocks: [
        {
          type: 'p',
          text: 'Har du ikke vedovn, kan en parafinovn eller gassovn holde ett rom varmt i en krise. Begge brenner drivstoff i rommet du sitter i, og det gir to risikoer: brann og karbonmonoksid (kullos). Brukt riktig er de nyttige. Brukt feil kan de være dødelige.',
        },
        { type: 'h', text: 'Kullos – den usynlige faren' },
        {
          type: 'p',
          text: 'Kullos dannes ved ufullstendig forbrenning. Gassen har verken lukt, farge eller smak, og den binder seg til blodet mye sterkere enn oksygen. Tidlige symptomer ligner influensa: hodepine, svimmelhet, kvalme og tretthet. I høye konsentrasjoner kan man miste bevisstheten uten forvarsel – ofte i søvne.',
        },
        {
          type: 'warning',
          title: 'Aldri innendørs',
          text: 'Bruk aldri grill, engangsgrill, terrassevarmer, gassbluss for utebruk, aggregat eller bil til oppvarming innendørs – heller ikke i garasje, bod, telt eller på innglasset veranda. Dette er en av de vanligste årsakene til dødsfall ved strømbrudd.',
        },
        { type: 'h', text: 'Skaff kullosvarsler' },
        {
          type: 'p',
          text: 'En batteridrevet kullosvarsler er en rimelig og viktig forsikring for alle som har ildsted, gassovn eller parafinovn. Monter den i rommet der varmekilden står og der dere sover. Kullosvarsler erstatter ikke røykvarsler – du trenger begge.',
        },
        { type: 'h', text: 'Bruk parafinovn riktig' },
        {
          type: 'list',
          items: [
            'Sørg for lufting: ha et vindu på gløtt mens ovnen står på.',
            'Bruk kun parafin beregnet for ovnen – aldri bensin eller andre drivstoff.',
            'Fyll på utendørs, og bare når ovnen er slukket og kald.',
            'Plasser ovnen stødig, unna gardiner, møbler og ferdselsvei.',
            'Ikke la ovnen stå på mens dere sover eller forlater rommet.',
          ],
        },
        { type: 'h', text: 'Bruk gassovn riktig' },
        {
          type: 'list',
          items: [
            'Bruk kun gassovner som er laget og godkjent for innendørs bruk.',
            'Følg bruksanvisningen for lufting og avstand til brennbart materiale.',
            'Sjekk slange og koblinger for lekkasje med såpevann – aldri med åpen flamme.',
            'Oppbevar reservegassflasker utendørs eller i godt ventilert bod, aldri i kjeller.',
            'Steng ventilen på flasken når ovnen ikke er i bruk.',
          ],
        },
        {
          type: 'warning',
          title: 'Ved mistanke om kullosforgiftning',
          text: 'Kom deg straks ut i frisk luft, og få med alle andre. Slå av varmekilden hvis det kan gjøres uten risiko. Ring 113 ved symptomer – også om de virker milde. Er flere i husstanden uvel samtidig, er det et sterkt varselsignal.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Lukt, farge, smak', value: 'ingen' },
            { label: 'Tidlige symptomer', value: 'hodepine, kvalme, svimmelhet' },
            { label: 'Nødnummer ved forgiftning', value: '113' },
            { label: 'Giftinformasjonen', value: '22 59 13 00' },
          ],
        },
      ],
    },
    {
      id: 'aggregat',
      title: 'Aggregat – strøm uten nett',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Et bensin- eller dieselaggregat kan holde fryseren, en varmeovn eller en sirkulasjonspumpe i gang. Men aggregatet er også en av de farligste tingene du kan ha i en krise hvis det brukes feil.',
        },
        {
          type: 'warning',
          title: 'Alltid utendørs',
          text: 'Aggregatet lager store mengder kullos. Det skal stå ute, godt unna vinduer, dører og ventiler – aldri i garasje, kjeller, bod eller under et tett tak, heller ikke med porten åpen.',
        },
        { type: 'h', text: 'Aldri koble rett inn i stikkontakten' },
        {
          type: 'p',
          text: 'Å koble aggregatet til husets elektriske anlegg via en stikkontakt er livsfarlig. Strømmen kan gå baklengs ut på strømnettet og drepe montører som jobber med å reparere linjene. Det kan også gi brann i ditt eget anlegg. Skal aggregatet forsyne husets kurser, må en elektriker installere en godkjent omkoblingsbryter som skiller huset fra nettet.',
        },
        { type: 'h', text: 'Trygg bruk uten fast installasjon' },
        {
          type: 'list',
          items: [
            'Koble apparater direkte til aggregatet med skjøteledning beregnet for utendørs bruk.',
            'Sjekk effekten: summen av apparatene må ikke overstige det aggregatet tåler.',
            'Prioriter: fryser og kjøleskap i perioder, lading, en varmeovn i varmerommet.',
            'Fyll drivstoff kun når motoren er avslått og har kjølt seg ned.',
            'Lagre drivstoff i godkjente kanner, utendørs eller i godt ventilert bod.',
            'Test aggregatet jevnlig – også før vinteren kommer.',
          ],
        },
        {
          type: 'tip',
          title: 'Drivstoff blir gammelt',
          text: 'Bensin brytes ned over tid og kan gi startproblemer. Bruk og bytt lageret jevnlig, eller bruk tilsetning som forlenger holdbarheten etter produsentens anvisning.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Plassering', value: 'alltid utendørs' },
            { label: 'Kobling til husets anlegg', value: 'kun via omkoblingsbryter fra elektriker' },
            { label: 'Fylling av drivstoff', value: 'motoren av og kald' },
          ],
        },
      ],
    },
    {
      id: 'lading-og-batteri',
      title: 'Strømbank, solcelle og bil',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Mobilen er radio, lommelykt, kart og telefon i én. Når strømmen er borte, handler det om å ha noe å lade fra – og å bruke strømmen klokt.',
        },
        { type: 'h', text: 'Strømbank' },
        {
          type: 'list',
          items: [
            'En stor strømbank kan lade en vanlig mobil flere ganger.',
            'Hold den fulladet – sett en fast påminnelse om å lade den, for eksempel hver måned.',
            'Ha riktige ladekabler sammen med strømbanken.',
            'Batterier tømmes raskere i kulde. Oppbevar strømbank og mobil inne på kroppen når det er kaldt.',
          ],
        },
        { type: 'h', text: 'Solcellelader' },
        {
          type: 'p',
          text: 'En sammenleggbar solcellelader er nyttig om sommeren og på turer, men i mørketiden gir den lite. Se på den som et supplement, ikke hovedløsningen. Mange lader best ved å fylle en strømbank i dagslys, som du deretter lader telefonen fra.',
        },
        { type: 'h', text: 'Bilen som lader' },
        {
          type: 'list',
          items: [
            'Bilen kan lade telefoner via USB eller sigarettenneruttak.',
            'Kjør motoren kun utendørs og i fri luft – aldri i garasje.',
            'Lader du uten motoren i gang, kan startbatteriet tømmes. Start motoren innimellom.',
            'Elbil kan ofte levere strøm til små apparater; sjekk bilens brukerveiledning.',
            'En full tank er god beredskap: bilen er både varmestue, lader og transport.',
          ],
        },
        {
          type: 'tip',
          title: 'Spar strøm på mobilen',
          text: 'Skru på strømsparingsmodus, demp skjermen og slå av unødvendige apper. Trenger du ikke mobilnett en periode, kan flymodus spare mye. Slå den på igjen med jevne mellomrom for å få meldinger.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Solcellelader om vinteren', value: 'lite effekt' },
            { label: 'Batterier i kulde', value: 'tømmes raskere' },
            { label: 'Bil som lader', value: 'kun utendørs med motor i gang' },
          ],
        },
      ],
    },
    {
      id: 'lys-og-brannsikkerhet',
      title: 'Lys og brannsikkerhet',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Antall boligbranner øker ofte når strømmen går. Levende lys, provisoriske varmekilder og slitne mennesker er en farlig kombinasjon. Batteridrevet lys bør derfor være førstevalget.',
        },
        { type: 'h', text: 'Batterilys først' },
        {
          type: 'list',
          items: [
            'Hodelykt til alle i husstanden – du får begge hender fri.',
            'En LED-lykt som kan lyse opp et helt rom.',
            'Ekstra batterier i riktige størrelser, oppbevart tørt.',
            'Fortrinnsvis like batterityper i alle lykter, så de kan byttes mellom.',
          ],
        },
        { type: 'h', text: 'Stearinlys – trygt' },
        {
          type: 'list',
          items: [
            'Bruk stødige lysestaker på ikke-brennbart underlag.',
            'Hold god avstand til gardiner, tekstiler, papir og hyller over.',
            'Aldri forlat rom med levende lys, og slukk alltid før du legger deg.',
            'Ikke sett lys i vinduskarmen der gardiner kan blåse inn.',
            'Hold lys utenfor rekkevidde for barn og dyr.',
            'Telys kan bli svært varme – ikke sett flere tett sammen.',
          ],
        },
        {
          type: 'warning',
          title: 'Røykvarsleren må virke',
          text: 'Røykvarslere som er koblet til strømnettet, har ofte batteri som reserve, men ikke alltid. Sjekk at du har minst én batteridrevet røykvarsler i hver etasje og nær soverom.',
        },
        { type: 'h', text: 'Hvis det begynner å brenne' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Varsle alle i huset og få dem ut.',
            'Ring 110.',
            'Forsøk å slukke bare hvis det er trygt og brannen er liten.',
            'Lukk dører bak deg for å begrense brannen.',
            'Møt brannvesenet ute.',
          ],
        },
        {
          type: 'tip',
          title: 'Avtal et møtested',
          text: 'Bestem et fast sted utenfor huset der familien møtes ved brann, for eksempel postkassen eller naboens innkjørsel. Øv på rømningsveien – også i mørket.',
        },
      ],
    },
  ],
};
