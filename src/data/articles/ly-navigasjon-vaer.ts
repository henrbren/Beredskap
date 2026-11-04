import type { Article } from '../types';

/**
 * Leksikon – ly og varme, navigasjon og vær.
 * Basert på råd fra DSB/egenberedskap.no, DNT/Norsk Friluftsliv, Røde Kors,
 * Kartverket, Meteorologisk institutt, NVE/varsom.no og Helsedirektoratet.
 */
export const articles: Article[] = [
  // ─── LY OG VARME ───────────────────────────────────────────────────────────
  {
    id: 'lag-pa-lag',
    title: 'Lag-på-lag-prinsippet',
    category: 'ly-varme',
    summary:
      'Kle deg i tre lag – ull innerst, isolasjon i midten og vind- og vanntett ytterst – og juster ofte så du aldri blir svett.',
    tags: ['bekledning', 'klær', 'påkledning', 'kulde', 'ullundertøy', 'skallplagg', 'layering', 'friluftsliv'],
    blocks: [
      {
        type: 'p',
        text: 'Flere tynne lag holder bedre på varmen enn ett tykt, fordi luften mellom lagene isolerer. Lagene kan tas av og på etter aktivitet og vær. Målet er å være lett kjølig når du beveger deg, og varm når du står stille.',
      },
      { type: 'h', text: 'De tre lagene' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Innerst – ullundertøy (eller syntetisk) som transporterer fukt bort fra huden. Aldri bomull.',
          'Mellomlag – isolasjon: ullgenser, fleece, ullfrotté eller en lett dun-/syntetjakke.',
          'Ytterst – skallplagg som stopper vind og nedbør, men slipper ut damp. Ha det alltid i sekken.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Ekstra varmt lag i sekken', value: 'alltid, også på korte turer' },
          { label: 'Lue, votter, tørre sokker', value: 'alltid med' },
          { label: 'Stopp > noen minutter', value: 'ta på ekstra lag før du fryser' },
        ],
      },
      { type: 'h', text: 'Unngå å bli svett' },
      {
        type: 'list',
        items: [
          'Ta av et lag før en bakke – ikke på toppen.',
          'Åpne glidelåser i hals, armhuler og lår før du åpner hele plagget.',
          'Bytt til tørt innerlag når du stopper for natten, og heng det våte innenfor jakken eller i soveposen for å tørke.',
          'Hode, hender og føtter avgir mye varme: lue og votter er den raskeste måten å regulere på.',
        ],
      },
      {
        type: 'tip',
        title: 'Hjemme ved strømbrudd',
        text: 'Lag-på-lag gjelder også innendørs når huset blir kaldt. Ullundertøy, ullsokker, tøfler og lue gjør stor forskjell – også om natten.',
      },
      {
        type: 'warning',
        text: 'Våte klær leder varme bort mange ganger raskere enn tørre. Fukt fra svette eller regn er den vanligste veien til nedkjøling.',
      },
    ],
    related: ['ull-og-bomull', 'nedkjoling', 'vindavkjoling', 'sovepose'],
    source: 'DNT / Norsk Friluftsliv, Røde Kors',
  },
  {
    id: 'ull-og-bomull',
    title: 'Ull, bomull, syntet og dun',
    category: 'ly-varme',
    summary:
      'Ull varmer også når den er fuktig, bomull gjør det ikke – velg materiale etter hva som skjer når det blir vått.',
    tags: ['ull', 'bomull', 'syntetisk', 'dun', 'fleece', 'materialer', 'wool vs cotton', 'tekstil'],
    blocks: [
      {
        type: 'p',
        text: 'I kaldt og vått vær er det viktigste spørsmålet om et plagg fortsatt isolerer når det er fuktig. Her er forskjellen mellom materialene stor.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Ull', value: 'varmer også fuktig, lukter lite, tørker sakte' },
          { label: 'Syntet / fleece', value: 'varmer fuktig, tørker raskt, smelter ved gnister' },
          { label: 'Dun', value: 'svært varmt og lett tørt, mister isolasjon når vått' },
          { label: 'Bomull', value: 'suger vann, mister nesten all isolasjon våt' },
        ],
      },
      { type: 'h', text: 'Slik velger du' },
      {
        type: 'list',
        items: [
          'Innerst: ull eller syntet. Ull er best når du ikke kan vaske og tørke klær ofte.',
          'Mellomlag: ull eller fleece i vått vær. Dun er best i tørr kulde og om kvelden i leir.',
          'Syntetisk isolasjonsjakke er tryggere enn dun når du ikke kan holde den tørr.',
          'Bomull (jeans, t-skjorter, bomullssokker) passer bare til varme, tørre dager nær hjemmet.',
          'Ved bål: ull og bomull tåler gnister bedre enn syntet og fleece, som smelter.',
        ],
      },
      {
        type: 'warning',
        title: 'Bomull kan være farlig',
        text: 'Våte bomullsklær kjøler kroppen effektivt – også i plussgrader med vind. Bytt til tørt ull- eller syntetplagg så snart du kan.',
      },
      {
        type: 'tip',
        text: 'Tørre ullsokker og et ekstra ullundertøy pakket i en vanntett pose er noe av det mest verdifulle du kan ha i sekken eller evakueringssekken.',
      },
    ],
    related: ['lag-pa-lag', 'nedkjoling', 'sovepose', 'evakueringssekk'],
    source: 'DNT / Norsk Friluftsliv',
  },
  {
    id: 'nodly-presenning',
    title: 'Nødly med presenning',
    category: 'ly-varme',
    summary:
      'Med en presenning, snor og isolasjon under deg kan du lage ly mot vind og nedbør på kort tid.',
    tags: ['ly', 'gapahuk', 'tarp', 'presenning', 'vindsekk', 'bivuakk', 'shelter', 'overnatting'],
    blocks: [
      {
        type: 'p',
        text: 'Et nødly skal stoppe vind og nedbør og isolere deg fra bakken. Kroppen mister mye varme ned i kald, våt mark – isolasjon under deg er derfor like viktig som tak over deg.',
      },
      { type: 'h', text: 'Velg plass' },
      {
        type: 'list',
        items: [
          'Le for vinden, gjerne bak en kolle, stein eller tett skog.',
          'Ikke i forsenkninger der kald luft og vann samler seg, og ikke i skredterreng eller rett under døde trær og greiner.',
          'Nær ved og vann, men ikke helt nede ved elva (kald luft, flomfare).',
        ],
      },
      { type: 'h', text: 'Skråtak (gapahuk-form)' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Spenn en snor mellom to trær i ca. hoftehøyde til brysthøyde.',
          'Legg presenningen over snoren og la den ene siden gå ned til bakken mot vinden.',
          'Fest hjørnene mot vinden lavt med plugger, steiner eller pinner. Den andre siden kan stå åpen mot bålet.',
          'Stram duken så regnet renner av og den ikke blafrer.',
          'Lag et tykt underlag: liggeunderlag, sekk, granbar, lyng eller tau i lag.',
        ],
      },
      {
        type: 'tip',
        title: 'Telt-form ved dårlig vær',
        text: 'I sterk vind og regn: spenn snoren lavere og la duken gå ned til bakken på begge sider (A-form). Steng den ene enden med sekken eller en ekstra duk.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Nyttig størrelse', value: 'ca. 3 × 3 m dekker 1–2 personer' },
          { label: 'Snor', value: '10–15 m tynn tau eller parakord' },
          { label: 'Underlag', value: 'minst like viktig som tak' },
        ],
      },
      {
        type: 'warning',
        text: 'Ikke ha åpen flamme eller kokeapparat inne under en lukket duk. Det gir brannfare og kan gi kullosforgiftning.',
      },
    ],
    related: ['snohule', 'knuter', 'tenne-bal', 'nedkjoling'],
    source: 'DNT / Norsk Friluftsliv, Røde Kors',
  },
  {
    id: 'snohule',
    title: 'Snøhule og snøly',
    category: 'ly-varme',
    summary:
      'En snøhule holder vind og kulde ute, men krever riktig snø, ventilasjon og kunnskap – og en spade.',
    tags: ['snøhule', 'snøgrop', 'snøly', 'vinterfjellet', 'bivuakk', 'snow cave', 'snøspade', 'overnatting'],
    blocks: [
      {
        type: 'p',
        text: 'Snø isolerer godt. Inne i en snøhule er det skjermet for vind og ofte bare noen få kuldegrader, selv når det er sprengkaldt og blåser ute. Å grave tar lang tid og gjør deg svett, så start tidlig og grav i rolig tempo.',
      },
      { type: 'h', text: 'Slik graver du' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Finn en dyp, fast snøfonn i le – gjerne i en skavl. Stikk med stav eller sonde for å sjekke dybden.',
          'Grav en inngang inn i fonnen, så et rom innover og oppover.',
          'Lag liggehylla høyere enn inngangen. Kald luft synker og blir liggende i inngangen (kuldefelle).',
          'Gjør taket hvelvet og glatt, med minst en armlengde snø i taket, så det ikke drypper eller raser.',
          'Stikk et ventilasjonshull gjennom taket med en stav, og hold det åpent hele natten.',
          'Ta spaden med inn. Merk hulen utenfra med staver eller ski.',
        ],
      },
      {
        type: 'tip',
        title: 'Rask nødløsning',
        text: 'Mangler du tid eller dyp snø: grav en grøft, legg ski/staver over og en duk eller snøblokker som tak. Eller grav deg ned i le av en stein. Alt som stopper vinden hjelper.',
      },
      {
        type: 'warning',
        title: 'Kullos og pust',
        text: 'Bruk kokeapparat helst i inngangen, aldri med tett hule. Både stearinlys og kokeapparat bruker oksygen og kan gi kullos. Blir lyset svakt eller får noen hodepine: lufte ut med en gang.',
      },
      {
        type: 'warning',
        title: 'Skred',
        text: 'Ikke grav i bratte heng eller under skavler som kan løsne. Sjekk snøskredvarselet, og velg flatt terreng under fonnen.',
      },
    ],
    related: ['snoskred-tegn', 'kullos', 'nodly-presenning', 'fjellvettreglene'],
    source: 'DNT / Norsk Friluftsliv, Røde Kors, NVE / varsom.no',
  },
  {
    id: 'tenne-bal',
    title: 'Tenne bål',
    category: 'ly-varme',
    summary:
      'Forbered alt før du tenner: never eller tennmiddel, tynne kvister, så stadig tykkere ved – og velg et trygt sted.',
    tags: ['bål', 'bålfyring', 'opptenning', 'never', 'ved', 'campfire', 'fyre opp', 'varme'],
    blocks: [
      {
        type: 'p',
        text: 'De fleste bål mislykkes fordi veden ikke er klar. Samle og sorter alt før du tenner: en neve tennmateriale, en god bunt fyrstikktynne kvister, en bunt fingertykke og deretter tykkere ved.',
      },
      { type: 'h', text: 'Trygg plass' },
      {
        type: 'list',
        items: [
          'Bruk eksisterende bålplass når den finnes.',
          'På sand, grus eller mineraljord. Ikke på torv, myr eller tørr mose – glør kan ulme videre i bakken.',
          'Ikke direkte på berg – det kan sprekke og blir skjemmet.',
          'God avstand til trær, busker og telt. Ikke under greiner.',
          'Sjekk om det er bålforbud.',
        ],
      },
      { type: 'h', text: 'Slik tenner du' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Legg et underlag av tørre pinner så glørne ikke ligger rett på våt bakke.',
          'Legg tennmaterialet (never, tyri, fjærpinner) i midten.',
          'Bygg tynne kvister over i tipi-form eller som et lite tak, med luft mellom.',
          'Tenn nederst, i le for vinden. Bruk kroppen som vindskjerm.',
          'Mat bålet gradvis med tykkere ved når flammene tar godt. Ikke kvel det.',
        ],
      },
      {
        type: 'tip',
        title: 'Bjørkenever',
        text: 'Never inneholder oljer og brenner godt selv når den er fuktig. Riv den i tynne flak og lag en løs ball. Ta helst never fra døde eller felte trær.',
      },
      {
        type: 'warning',
        title: 'Slukk helt',
        text: 'Slukk med mye vann og rør om til asken er kald å ta på. Glør kan ligge og ulme i timer og spre seg under bakken.',
      },
    ],
    related: ['bal-i-regn', 'balforbud', 'tennmidler', 'brannskader'],
    source: 'DSB, DNT / Norsk Friluftsliv',
  },
  {
    id: 'bal-i-regn',
    title: 'Bål i regn og vått vær',
    category: 'ly-varme',
    summary:
      'Tørt brensel finnes nesten alltid: døde kvister på stammen, innsiden av kløyvd ved og bjørkenever.',
    tags: ['vått vær', 'regn', 'fuktig ved', 'fjærpinner', 'tyri', 'wet weather fire', 'bål', 'nedbør'],
    blocks: [
      {
        type: 'p',
        text: 'Når alt er vått, er det ofte tørt innenfor. Jobb med kniv, og beskytt tennmaterialet mot regnet til flammene er etablert.',
      },
      { type: 'h', text: 'Hvor finner du tørt brensel?' },
      {
        type: 'list',
        items: [
          'Døde, tynne kvister nederst på stammen av gran – under tett krone er de ofte tørre.',
          'Stående døde trær og greiner som ikke ligger på bakken.',
          'Innsiden av kløyvd ved. Kløyv tykke stykker til du kommer inn til tørr ved.',
          'Bjørkenever – brenner også fuktig.',
          'Tyri (kvae-rik furu fra gamle stubber og røtter) – lukter terpentin og brenner kraftig.',
          'Ta aldri ved som ligger på bakken – den er nesten alltid gjennomvåt.',
        ],
      },
      { type: 'h', text: 'Slik gjør du det' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Lag et tak: tenn under en presenning (høyt nok), en tett gran eller et bergheng.',
          'Lag et tørt underlag av kløyvde pinner eller en flat stein/never.',
          'Spikk fjærpinner: tynne spon du lar sitte fast på pinnen. Lag flere.',
          'Ha dobbelt så mye fyrstikktynt materiale som du tror du trenger.',
          'Når bålet brenner: legg våt ved rundt kanten så den tørker før den skal på.',
        ],
      },
      {
        type: 'tip',
        text: 'Ha alltid med et tennmiddel som ikke er avhengig av været, f.eks. tennbriketter, stormfyrstikker eller vaselinbomull i en tett boks.',
      },
      {
        type: 'warning',
        text: 'Bruk aldri bensin eller annen brannfarlig væske for å få fyr. Damper kan eksplodere og gi alvorlige brannskader.',
      },
    ],
    related: ['tenne-bal', 'tennmidler', 'nodly-presenning'],
    source: 'DNT / Norsk Friluftsliv',
  },
  {
    id: 'balforbud',
    title: 'Bålforbud og skogbrannfare',
    category: 'ly-varme',
    summary:
      'Fra 15. april til 15. september er det generelt forbudt å gjøre opp ild i eller nær skog og annen utmark uten tillatelse.',
    tags: ['bålforbud', 'skogbrann', 'brannfare', 'regler', 'grill', 'utmark', 'fire ban', 'lov'],
    blocks: [
      {
        type: 'p',
        text: 'Etter forskrift om brannforebygging er det i perioden 15. april – 15. september forbudt å gjøre opp ild i eller i nærheten av skog og annen utmark uten tillatelse fra kommunen. Forbudet gjelder ikke der brann åpenbart ikke kan oppstå, men vurderingen er ditt ansvar.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Generelt bålforbud', value: '15. april – 15. september' },
          { label: 'Lokale regler', value: 'kommunen kan skjerpe eller lempe' },
          { label: 'Ved meldt skogbrannfare', value: 'vær ekstra forsiktig – også med grill' },
          { label: 'Brann i skog og mark', value: 'ring 110' },
        ],
      },
      { type: 'h', text: 'Hva betyr det i praksis?' },
      {
        type: 'list',
        items: [
          'Sjekk kommunens nettsider eller lokale meldinger før tur – mange kommuner har egne regler og tilrettelagte bålplasser.',
          'Engangsgrill, primus og bål i utmark omfattes av forsiktighetsplikten. Ved høy skogbrannfare kan også dette være forbudt.',
          'Ved sjø og vann på sand eller svaberg kan brann åpenbart være usannsynlig – men ikke i tørt vær med vind mot land.',
          'Utenfor perioden gjelder fortsatt plikten til å vise aktsomhet.',
        ],
      },
      { type: 'h', text: 'Tegn på høy skogbrannfare' },
      {
        type: 'list',
        items: [
          'Lang tid uten nedbør og sol og vind.',
          'Knasende tørr mose og lyng, støvete bakke.',
          'Farevarsel om skogbrannfare fra Meteorologisk institutt.',
        ],
      },
      {
        type: 'warning',
        title: 'Hvis brann oppstår',
        text: 'Ring 110 med en gang, selv om du tror du kan slukke selv. Gå bort fra brannen – på tvers av vindretningen og helst nedover – aldri oppover en skråning foran brannen.',
      },
      {
        type: 'tip',
        text: 'I en krise der du trenger varme kan det være nødvendig å fyre. Velg da den tryggeste plassen, hold bålet lite og ha vann klart til slukking.',
      },
    ],
    related: ['tenne-bal', 'farevarsler', 'slokke-brann', 'allemannsretten'],
    source: 'DSB (forskrift om brannforebygging), Meteorologisk institutt',
  },
  {
    id: 'tennmidler',
    title: 'Tennmidler: fyrstikker, lighter og tennstål',
    category: 'ly-varme',
    summary:
      'Ha minst to uavhengige måter å lage ild på, og pakk dem vanntett.',
    tags: ['fyrstikker', 'lighter', 'tennstål', 'ildstål', 'tennbriketter', 'firesteel', 'opptenning', 'stormfyrstikker'],
    blocks: [
      {
        type: 'p',
        text: 'Ild gir varme, lys, trygghet og mulighet til å koke vann. Regelen er «to er én, én er ingen»: ha alltid reserve, og lagre dem på forskjellige steder.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Fyrstikker', value: 'enkle, men tåler ikke vann' },
          { label: 'Stormfyrstikker', value: 'brenner i vind og regn' },
          { label: 'Gasslighter', value: 'svikter i kulde – hold den varm' },
          { label: 'Tennstål', value: 'tåler vann og kulde, krever øvelse' },
        ],
      },
      { type: 'h', text: 'Hjemmelaget tennmiddel' },
      {
        type: 'list',
        items: [
          'Vaselinbomull: bomullsdotter innsmurt i vaselin. Brenner i flere minutter. Oppbevar i tett boks.',
          'Never og tyri fra naturen.',
          'Talglys eller telys: gir en stabil flamme mens du legger på kvister.',
          'Tørt papir, eggekartong med stearin, knust chips (fett).',
        ],
      },
      { type: 'h', text: 'Bruke tennstål' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Legg tennmaterialet klart: fint, tørt og luftig (never-dun, vaselinbomull).',
          'Hold stålstangen helt nede ved materialet.',
          'Dra stangen bakover mot skraperen (i stedet for å slå skraperen fremover) så du ikke sparker bort materialet.',
          'Blås forsiktig når det gløder, og legg på tynne kvister.',
        ],
      },
      {
        type: 'tip',
        title: 'Pakking',
        text: 'Ha fyrstikker eller lighter i en vanntett boks eller pose i lommen, ikke bare i sekken. En lighter i innerlommen fungerer også i sterk kulde.',
      },
      {
        type: 'warning',
        text: 'Oppbevar tennmidler utilgjengelig for barn, og aldri sammen med brannfarlig væske.',
      },
    ],
    related: ['tenne-bal', 'bal-i-regn', 'evakueringssekk'],
    source: 'DNT / Norsk Friluftsliv',
  },
  {
    id: 'vedfyring',
    title: 'Trygg vedfyring i ovn og peis',
    category: 'ly-varme',
    summary:
      'Bruk tørr ved, tenn ovenfra, ha god trekk og håndter asken trygt – da får du mye varme og lav brannrisiko.',
    tags: ['vedovn', 'peis', 'ved', 'fyring', 'pipe', 'feiing', 'wood stove', 'aske'],
    blocks: [
      {
        type: 'p',
        text: 'En vedovn er en av de beste varmekildene ved langvarig strømbrudd. Men feil fyring gir pipebrann, sot og kullos. Fyr jevnt og med god trekk, og ha røykvarsler og slokkeutstyr klart.',
      },
      { type: 'h', text: 'Slik fyrer du' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Åpne spjeld og lufttilførsel helt.',
          'Topptenning: legg to–tre kubber nederst, opptenningsved over og tennbrikett eller never øverst. Tenn på toppen.',
          'La døren stå på gløtt de første minuttene til det brenner godt, men aldri ubevoktet.',
          'Legg i ny ved mens det fortsatt er flammer eller gode glør – få kubber om gangen.',
          'Skru ned lufta litt når veden brenner godt, men ikke så mye at flammene dør og det ryker.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Tørr ved', value: 'lett, klinger når to kubber slås mot hverandre' },
          { label: 'Rå ved', value: 'gir sot, røyk og fare for pipebrann' },
          { label: 'Aske', value: 'kan inneholde glør i flere døgn' },
          { label: 'Pipebrann', value: 'ring 110' },
        ],
      },
      { type: 'h', text: 'Sikkerhet' },
      {
        type: 'list',
        items: [
          'Ha fungerende røykvarsler, og gjerne CO-varsler, i rommet og på soverom.',
          'Hold avstand mellom ovnen og møbler, klær og ved.',
          'Ta asken ut i en metallbøtte med lokk og sett den ute på ubrennbart underlag.',
          'Ikke brenn søppel, malt eller impregnert trevirke.',
          'Har du ikke brukt ovnen på lenge: få den og pipa sjekket av feiervesenet før du fyrer hardt.',
        ],
      },
      {
        type: 'warning',
        title: 'Ved pipebrann',
        text: 'Steng spjeld og lufttilførsel, ring 110, få alle ut og hold et øye med rom rundt pipa på alle etasjer. Ikke kast vann inn i en glødende ovn.',
      },
    ],
    related: ['varme-innendors', 'roykvarsler', 'kullos', 'brannsikring'],
    source: 'DSB, lokalt brann- og feiervesen',
  },
  {
    id: 'varme-innendors',
    title: 'Holde varmen hjemme uten strøm',
    category: 'ly-varme',
    summary:
      'Samle alle i ett rom, tett trekk og kle deg som ute – og bruk bare varmekilder som er laget for innendørs bruk.',
    tags: ['strømbrudd', 'kaldt hus', 'oppvarming', 'varme', 'isolere', 'power outage heat', 'vinter', 'kulde'],
    blocks: [
      {
        type: 'p',
        text: 'Uten strøm blir mange norske hjem raskt kalde om vinteren. Med noen enkle grep kan du holde ett rom varmt nok til å bo og sove trygt i flere døgn.',
      },
      { type: 'h', text: 'Gjør dette først' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Velg ett lite rom, helst midt i huset og med vedovn hvis du har.',
          'Lukk dører til resten av huset. Tett dørsprekker med håndklær.',
          'Heng tepper eller dyner for vinduer om natten, og trekk for gardiner.',
          'Kle alle i lag-på-lag med ull, lue og sokker – også innendørs.',
          'Sov sammen i samme rom, med soveposer eller dyner og underlag mot gulvet.',
        ],
      },
      { type: 'h', text: 'Ekstra varme' },
      {
        type: 'list',
        items: [
          'Varm mat og drikke varmer innenfra. Ha termos klar.',
          'Varmeflasker (godt lukket, pakket i et håndkle).',
          'Telys gir lite varme og mye brannfare – bruk dem til lys, ikke oppvarming.',
          'Ved, parafin og gass bare i ovner beregnet for innendørs bruk, med lufting.',
        ],
      },
      {
        type: 'warning',
        title: 'Aldri innendørs',
        text: 'Grill (kull og gass), aggregat, terrassevarmer og primus skal aldri brukes til oppvarming inne – heller ikke i garasje eller telt. Kullos er luktfritt og kan drepe på kort tid.',
      },
      {
        type: 'tip',
        title: 'Følg med på de sårbare',
        text: 'Spedbarn, eldre og syke blir raskt nedkjølt. Sjekk på naboer som bor alene, og meld fra til kommunen hvis noen ikke klarer seg.',
      },
      {
        type: 'facts',
        items: [
          { label: 'DSB anbefaler', value: 'klare deg selv i ca. én uke' },
          { label: 'Alternativ varmekilde', value: 'ved, parafin eller gass godkjent for innendørs bruk' },
          { label: 'Tegn på kullos', value: 'hodepine, svimmelhet, kvalme – luft ut og kom deg ut' },
        ],
      },
    ],
    related: ['vedfyring', 'parafin-og-gass', 'kullos', 'eldre-naboer'],
    source: 'DSB / egenberedskap.no',
  },
  {
    id: 'sovepose',
    title: 'Sovepose og liggeunderlag',
    category: 'ly-varme',
    summary:
      'En sovepose varmer bare så godt som underlaget, klærne og maten du har i kroppen – slik sover du varmt.',
    tags: ['sovepose', 'liggeunderlag', 'overnatting', 'sove ute', 'sleeping bag', 'kulde', 'telt', 'komforttemperatur'],
    blocks: [
      {
        type: 'p',
        text: 'Soveposen holder på varmen kroppen lager – den lager ikke varme selv. Bakken stjeler varme gjennom posen fordi isolasjonen under deg blir klemt sammen. Et godt underlag er derfor avgjørende.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Komforttemperatur', value: 'gjelder for de fleste som fryser lett' },
          { label: 'Grensetemperatur', value: 'gjelder for de fleste som fryser lite – ikke komfort' },
          { label: 'Underlag', value: 'høyere R-verdi = bedre isolasjon' },
          { label: 'Vinter', value: 'gjerne to underlag (skum + oppblåsbart)' },
        ],
      },
      { type: 'h', text: 'Sov varmt' },
      {
        type: 'list',
        items: [
          'Spis noe fett og drikk varmt før du legger deg.',
          'Tisse før du legger deg – kroppen bruker energi på å holde full blære varm.',
          'Bytt til tørt ullundertøy og tørre sokker, og ta på lue.',
          'Ikke pust inn i soveposen – fukten gjør isolasjonen dårligere. Bruk hetta og snøringen.',
          'Fyll en tett flaske med varmt vann og ha den i posen.',
          'Fyll tomrom i posen med klær, så du ikke må varme opp luft.',
          'Lufte og tørk posen i sola eller over bålet om dagen hvis du kan.',
        ],
      },
      {
        type: 'tip',
        title: 'Hjemme ved strømbrudd',
        text: 'Soveposer er like nyttige inne i et kaldt hus. Legg dem oppå hverandre eller under dyna, og ha et underlag mot kaldt gulv.',
      },
      {
        type: 'warning',
        text: 'Våkner du og fryser så du skjelver: gjør noen rolige øvelser i posen, spis og drikk varmt. Ikke ligg og fryser i timevis.',
      },
    ],
    related: ['lag-pa-lag', 'nedkjoling', 'varme-innendors', 'snohule'],
    source: 'DNT / Norsk Friluftsliv',
  },
  {
    id: 'aggregat',
    title: 'Strømaggregat – trygg bruk',
    category: 'ly-varme',
    summary:
      'Et aggregat skal alltid stå ute, og skal ikke kobles til husets elanlegg uten godkjent omkoblingsbryter montert av elektriker.',
    tags: ['aggregat', 'generator', 'strømaggregat', 'nødstrøm', 'bensin', 'kullos', 'generator safety', 'strømbrudd'],
    blocks: [
      {
        type: 'p',
        text: 'Et aggregat kan holde kjøleskap, fryser, pumpe eller lading i gang ved lange strømbrudd. Men eksosen inneholder kullos, og feil tilkobling kan sette strøm på nettet og skade montører eller utstyr.',
      },
      { type: 'h', text: 'Plassering' },
      {
        type: 'list',
        items: [
          'Alltid ute, under åpen himmel – aldri i hus, garasje, bod, kjeller eller telt, heller ikke med åpen dør.',
          'Godt unna vinduer, dører og ventiler, så eksosen ikke trekker inn.',
          'Beskyttet mot regn og snø på en måte som ikke stenger inne eksosen.',
          'Fyll drivstoff bare når aggregatet er slått av og kaldt.',
        ],
      },
      { type: 'h', text: 'Tilkobling' },
      {
        type: 'list',
        items: [
          'Koble apparater direkte til aggregatet med skjøteledning beregnet for utendørs bruk.',
          'Skal aggregatet forsyne husets anlegg, må en elektriker montere godkjent omkoblingsbryter først.',
          'Ikke overbelast. Legg sammen effekten (watt) på det du kobler til, og husk at motorer trenger mer ved oppstart.',
          'Prioriter: fryser/kjøleskap, ladere, lys, sirkulasjonspumpe for vedfyrt/sentralvarme.',
        ],
      },
      {
        type: 'warning',
        title: 'Livsfarlig',
        text: 'Plugg aldri aggregatet inn i en vanlig stikkontakt for å «mate» huset. Det kan gi strøm tilbake på nettet og drepe noen som jobber med feilen.',
      },
      {
        type: 'tip',
        text: 'Prøvekjør aggregatet jevnlig, ha friskt drivstoff og olje, og skaff CO-varsler til huset. Følg produsentens anvisninger for lagring av drivstoff, og lagre bensin i godkjente kanner utenfor boligen.',
      },
    ],
    related: ['kullos', 'stenge-gass', 'fryser-uten-strom', 'sikringsskap'],
    source: 'DSB',
  },
  {
    id: 'parafin-og-gass',
    title: 'Parafinovn og gassovn',
    category: 'ly-varme',
    summary:
      'Parafin- og gassovner kan gi nødvarme, men bruker oksygen og kan avgi kullos – bruk kun typer beregnet for innendørs bruk, og luft ut.',
    tags: ['parafin', 'gassovn', 'propan', 'gass', 'oppvarming', 'kerosene heater', 'nødvarme', 'kullos'],
    blocks: [
      {
        type: 'p',
        text: 'Mange skaffer seg en parafinovn eller gassovn til bruk under strømbrudd. Det kan være et godt valg, men bare hvis ovnen er laget for innendørs bruk og du har god lufting.',
      },
      { type: 'h', text: 'Slik bruker du dem trygt' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Kontroller at ovnen er merket for innendørs bruk, og les bruksanvisningen.',
          'Sørg for lufttilførsel: et vindu på gløtt eller åpen ventil.',
          'Ha CO-varsler og røykvarsler i rommet.',
          'Plasser ovnen stødig, med god avstand til møbler, gardiner og tøy.',
          'Fyll parafin bare når ovnen er slukket og kald – og helst ute.',
          'Slå av ovnen når dere sover eller forlater rommet.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Parafin', value: 'bruk ren lampe-/ovnsparafin, ikke diesel' },
          { label: 'Gassflasker', value: 'oppbevares stående, utilgjengelig for barn' },
          { label: 'Gasslekkasje', value: 'steng flasken, luft ut, ingen gnister' },
        ],
      },
      {
        type: 'warning',
        title: 'Aldri innendørs',
        text: 'Terrassevarmere, grill, primus og campingkokere er ikke laget for oppvarming innendørs og skal ikke brukes slik.',
      },
      {
        type: 'warning',
        title: 'Tegn på kullos',
        text: 'Hodepine, svimmelhet, kvalme og tretthet – særlig hvis flere i rommet får det samtidig. Slå av ovnen, få alle ut i frisk luft og ring 113 ved bevissthetsforstyrrelser.',
      },
      {
        type: 'tip',
        text: 'Følg DSBs regler for hvor mye gass og brannfarlig væske du kan oppbevare i boligen, og oppbevar reservedrivstoff utenfor oppholdsrom.',
      },
    ],
    related: ['kullos', 'varme-innendors', 'stenge-gass', 'brannsikring'],
    source: 'DSB',
  },

  // ─── NAVIGASJON ────────────────────────────────────────────────────────────
  {
    id: 'kart-og-kompass',
    title: 'Kart og kompass – grunnleggende',
    category: 'navigasjon',
    summary:
      'Med et papirkart og et platekompass kan du finne veien uten strøm og dekning – slik tar du ut og følger en kurs.',
    tags: ['kart', 'kompass', 'orientering', 'kurs', 'platekompass', 'map and compass', 'navigere', 'retning'],
    blocks: [
      {
        type: 'p',
        text: 'Kart og kompass virker uten batteri og dekning. Lær det før du trenger det. Et turkart i målestokk 1:50 000 eller 1:25 000 og et platekompass er nok.',
      },
      {
        type: 'facts',
        items: [
          { label: '1:50 000', value: '1 cm på kartet = 500 m' },
          { label: '1:25 000', value: '1 cm på kartet = 250 m' },
          { label: 'Rutenett', value: 'ofte 1 km mellom linjene' },
          { label: 'Høydekurver', value: 'tett = bratt, glissent = slakt' },
        ],
      },
      { type: 'h', text: 'Ta ut kurs (tre steg)' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Legg kompasset på kartet med langsiden fra der du er til målet, med pilen på kompassplata mot målet.',
          'Drei kompasshuset til nordlinjene i huset er parallelle med nordlinjene på kartet, med nordmerket mot kartnord.',
          'Korriger for misvisning hvis den er betydelig der du er. Løft kompasset, hold det vannrett foran deg og snu deg til den røde nålen ligger i «huset». Gå dit retningspilen peker.',
        ],
      },
      { type: 'h', text: 'Følge kursen' },
      {
        type: 'list',
        items: [
          'Sikt på et kjennemerke (stein, tre) i kursretningen, gå dit og sikt på nytt.',
          'Hold kompasset borte fra metall, magneter og mobil – de forstyrrer nålen.',
          'Følg med på kartet underveis: bekker, vann, høyder og stier bekrefter hvor du er.',
          'Bruk ledelinjer: en bekk, sti eller kraftlinje som fører deg mot målet.',
        ],
      },
      {
        type: 'tip',
        title: 'Sikt bevisst til siden',
        text: 'Skal du treffe et punkt på en sti eller elv, sikt bevisst litt til én side. Da vet du hvilken vei du skal svinge når du kommer fram.',
      },
      {
        type: 'warning',
        text: 'Orienter alltid kartet etter terrenget før du bestemmer veien. De fleste feilnavigeringer skjer når man går på følelsen og ikke sjekker kompasset.',
      },
    ],
    related: ['misvisning', 'utm-koordinater', 'avstand-og-tid', 'uten-kompass'],
    source: 'Kartverket, DNT / Norsk Friluftsliv',
  },
  {
    id: 'misvisning',
    title: 'Misvisning',
    category: 'navigasjon',
    summary:
      'Kompassnålen peker mot magnetisk nord, ikke geografisk nord – forskjellen kalles misvisning og varierer med sted og tid.',
    tags: ['misvisning', 'deklinasjon', 'magnetisk nord', 'kompass', 'declination', 'kartnord', 'korrigere'],
    blocks: [
      {
        type: 'p',
        text: 'Magnetisk nord ligger ikke på samme sted som Nordpolen og flytter seg over tid. Vinkelen mellom retningen til geografisk nord og der kompassnålen peker, kalles misvisning. Den er forskjellig i ulike deler av landet og endrer seg fra år til år.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Østlig misvisning', value: 'nålen peker øst for nord' },
          { label: 'Vestlig misvisning', value: 'nålen peker vest for nord' },
          { label: 'Norge i dag', value: 'stort sett østlig, varierer med sted' },
          { label: 'Hvor finner du verdien?', value: 'kartets tegnforklaring, Kartverket' },
        ],
      },
      { type: 'h', text: 'Slik korrigerer du' },
      {
        type: 'list',
        items: [
          'Fra kart til terreng: Østlig misvisning trekkes fra. Vestlig misvisning legges til.',
          'Fra terreng til kart: motsatt – østlig legges til, vestlig trekkes fra.',
          'Mange kompass har justerbar misvisning. Still den inn én gang, så slipper du å regne.',
        ],
      },
      {
        type: 'p',
        text: 'Eksempel: Kursen på kartet er 90° (rett øst) og misvisningen er 4° østlig. Da går du etter 86° på kompasset.',
      },
      {
        type: 'tip',
        title: 'Når betyr det noe?',
        text: 'På korte strekninger med gode kjennemerker betyr noen få grader lite. På lange strekninger, i tåke eller over snøvidder blir feilen stor: 5° feil gir nesten 90 m avvik per kilometer.',
      },
      {
        type: 'warning',
        text: 'Eldre kart kan oppgi en misvisning som ikke lenger stemmer. Sjekk alltid årstallet, og bruk oppdatert verdi fra Kartverket hvis du kan.',
      },
    ],
    related: ['kart-og-kompass', 'utm-koordinater', 'uten-kompass'],
    source: 'Kartverket',
  },
  {
    id: 'utm-koordinater',
    title: 'UTM-koordinater og kartreferanse',
    category: 'navigasjon',
    summary:
      'Les av og oppgi posisjon med UTM-koordinater fra kartets rutenett – østover først, så nordover.',
    tags: ['UTM', 'koordinater', 'posisjon', 'kartreferanse', 'rutenett', 'grid reference', 'EUREF89', 'WGS84'],
    blocks: [
      {
        type: 'p',
        text: 'Norske topografiske kart har et rutenett i UTM-systemet (datum EUREF89, som i praksis er det samme som WGS84 i GPS). En UTM-posisjon består av sone, østkoordinat og nordkoordinat, angitt i meter.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Soner i fastlands-Norge', value: '32, 33 og 35' },
          { label: 'Rekkefølge', value: 'øst først, så nord' },
          { label: 'Rute på 1:50 000-kart', value: 'vanligvis 1 × 1 km' },
          { label: 'Eksempel', value: '32V 0597000 6643000' },
        ],
      },
      { type: 'h', text: 'Les av en posisjon' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Finn sonen i kartets tegnforklaring.',
          'Finn den loddrette linjen til venstre for punktet. Les tallet langs kanten – det er østkoordinaten.',
          'Mål hvor langt til høyre for linjen punktet ligger, og legg til (f.eks. 4/10 av ruta = 400 m).',
          'Finn den vannrette linjen under punktet og les nordkoordinaten.',
          'Mål hvor langt over linjen punktet ligger, og legg til.',
        ],
      },
      {
        type: 'tip',
        title: 'Huskeregel',
        text: '«Først bortover gangen, så opp trappa.» Østkoordinaten (bortover) kommer alltid før nordkoordinaten (oppover).',
      },
      {
        type: 'p',
        text: 'Mange GPS-er og kartapper kan vise både UTM og grader (bredde/lengde). Nødetatene kan ta imot begge deler – det viktigste er at du sier hvilket format du bruker.',
      },
      {
        type: 'warning',
        text: 'Pass på at kartet og GPS-en bruker samme datum. Gamle kart med et annet datum kan gi flere hundre meters feil.',
      },
    ],
    related: ['gi-posisjon', 'kart-og-kompass', 'gps-og-batteri'],
    source: 'Kartverket',
  },
  {
    id: 'gi-posisjon',
    title: 'Gi posisjonen din til nødetatene',
    category: 'navigasjon',
    summary:
      'Når du ringer 112 eller 113: si hvor du er så presist som mulig – koordinater, stedsnavn og kjennemerker.',
    tags: ['posisjon', 'koordinater', 'nødsamtale', 'redning', 'hvor er jeg', 'location', 'GPS', 'AML'],
    blocks: [
      {
        type: 'p',
        text: 'Redningstjenesten må vite hvor du er for å kunne hjelpe. Mange smarttelefoner sender posisjonen automatisk til nødsentralen når du ringer et nødnummer, men det fungerer ikke alltid. Vær klar til å oppgi den selv.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Brann', value: '110' },
          { label: 'Politi', value: '112' },
          { label: 'Medisinsk nødhjelp', value: '113' },
        ],
      },
      { type: 'h', text: 'Finn posisjonen' },
      {
        type: 'list',
        items: [
          'Kartappen på mobilen: trykk på din posisjon og les av koordinatene. Dette virker uten mobildekning hvis GPS er på.',
          'Apper laget for nødsituasjoner, f.eks. Hjelp 113, viser koordinatene tydelig.',
          'Papirkart: les av UTM-koordinatene.',
          'Uten koordinater: stedsnavn, sti, nærmeste hytte, vann, topp, vei, kraftlinje – og retning og avstand fra det.',
        ],
      },
      { type: 'h', text: 'Slik sier du det' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Si først hva som har skjedd og hvor mange som er skadet.',
          'Si formatet: «UTM sone 32» eller «grader og desimalminutter».',
          'Les tallene langsomt, siffer for siffer, og be operatøren gjenta.',
          'Beskriv terrenget og hva redningsmannskapet vil se: farge på klær, telt, lys.',
          'Avtal hvordan dere holder kontakt, og spar batteri.',
        ],
      },
      {
        type: 'tip',
        title: 'Gjør deg synlig',
        text: 'Bruk lommelykt, mobillys, sterke farger eller bål med grønt for røyk. Gå ut på åpne områder hvis det er trygt. Hold deg i ro når du har gitt posisjon.',
      },
      {
        type: 'warning',
        text: 'Har du ikke dekning, prøv likevel 112 – telefonen kan koble seg til andre operatørers nett. Ellers: flytt deg høyere opp om du trygt kan, eller send SMS.',
      },
    ],
    related: ['utm-koordinater', 'nodsignaler', 'gps-og-batteri', 'satellitt-nodmelding'],
    source: 'Politiet / Hovedredningssentralen, Kartverket, Norsk Luftambulanse',
  },
  {
    id: 'uten-kompass',
    title: 'Finne retning uten kompass',
    category: 'navigasjon',
    summary:
      'Sola, stjernene og klokka kan gi deg en grov himmelretning – godt nok til å holde kursen, men ikke presist.',
    tags: ['himmelretning', 'sola', 'nordstjerna', 'Polaris', 'klokke', 'natural navigation', 'retning', 'stjerner'],
    blocks: [
      {
        type: 'p',
        text: 'Metodene her gir en omtrentlig retning. Bruk dem til å holde en grov kurs eller sjekke at du ikke går i ring – ikke til presis navigasjon.',
      },
      { type: 'h', text: 'Sola' },
      {
        type: 'list',
        items: [
          'Sola står omtrent i sør midt på dagen: rundt kl. 12–13 vintertid og 13–14 sommertid, avhengig av hvor i landet du er.',
          'Om morgenen er sola i østlig retning, om kvelden i vestlig. Om sommeren i nord står den opp i nordøst og går ned i nordvest.',
          'Skyggepinne: sett en pinne i bakken, merk skyggespissen, vent 15–20 minutter og merk igjen. Linjen fra første til andre merke peker omtrent mot øst.',
        ],
      },
      { type: 'h', text: 'Stjernene' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Finn Karlsvogna (Store bjørn).',
          'Forleng linjen mellom de to bakerste stjernene i «vogna» ca. fem ganger avstanden mellom dem.',
          'Du kommer til Nordstjerna (Polaris), som står nesten nøyaktig i nord. I Norge står den høyt på himmelen.',
        ],
      },
      {
        type: 'warning',
        title: 'Mose og maur er upålitelig',
        text: 'Mose på trær, maurtuer og greiner på trær er påvirket av lokalt lys, fukt og vind, og er ikke til å stole på som kompass.',
      },
      {
        type: 'tip',
        text: 'Om sommeren i Nord-Norge går ikke sola ned, og i mørketiden er den borte – bruk stjerner, terrengformer og et kart. Følger du en bekk eller dal nedover, kommer du som regel til bebyggelse.',
      },
      {
        type: 'tip',
        title: 'Har du mobil?',
        text: 'GPS i telefonen virker uten dekning. Kompass-funksjonen i telefonen trenger kalibrering og kan påvirkes av metall – sjekk mot sola.',
      },
    ],
    related: ['kart-og-kompass', 'misvisning', 'gps-og-batteri', 'avstand-og-tid'],
    source: 'DNT / Norsk Friluftsliv',
  },
  {
    id: 'avstand-og-tid',
    title: 'Beregne avstand og tid',
    category: 'navigasjon',
    summary:
      'Mål avstand på kartet, legg til tid for stigning og ta høyde for terreng, vær og gruppa – så vet du når du må snu.',
    tags: ['avstand', 'turtid', 'marsjfart', 'dobbeltskritt', 'høydemeter', "Naismith's rule", 'beregne', 'planlegging'],
    blocks: [
      {
        type: 'p',
        text: 'Å vite hvor lang tid du trenger, er like viktig som å vite veien. Mange ulykker skjer fordi folk blir tatt av mørket eller været fordi turen tok lengre tid enn ventet.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Gange på sti (tommelfinger)', value: 'ca. 4–5 km/t' },
          { label: 'Tillegg for stigning', value: 'ca. 1 time per 600 høydemeter' },
          { label: 'Uten sti, myr, ur', value: 'ofte halv fart eller mindre' },
          { label: 'Høydekurver N50-kart', value: '20 m mellom hver' },
        ],
      },
      {
        type: 'p',
        text: 'Tommelfingerregelen over (Naismiths regel) passer for voksne i rimelig form. Juster for barn, tung sekk, snø, mørke og dårlig vær – og regn alltid med den tregeste i gruppa.',
      },
      { type: 'h', text: 'Måle avstand i terrenget' },
      {
        type: 'list',
        items: [
          'Tell dobbeltskritt (hver gang høyre fot treffer bakken) på en kjent strekning på 100 m. Antallet er ditt personlige mål.',
          'Du tar flere skritt i motbakke, i snø og i ulendt terreng.',
          'Bruk en knute på snora eller små steiner i lomma for hver 100 m.',
          'Sjekk tiden når du passerer kjente punkter, og regn ut faktisk fart.',
        ],
      },
      {
        type: 'tip',
        title: 'Sett en snutid',
        text: 'Bestem på forhånd et klokkeslett der du snur uansett hvor du er. Husk at det blir mørkt tidlig om høsten og vinteren.',
      },
      {
        type: 'warning',
        text: 'Tøff motvind, snø og dårlig sikt kan doble tiden. Vend i tide – det er ingen skam å snu.',
      },
    ],
    related: ['kart-og-kompass', 'fjellvettreglene', 'gps-og-batteri'],
    source: 'DNT / Norsk Friluftsliv, Kartverket',
  },
  {
    id: 'gps-og-batteri',
    title: 'GPS, mobilkart og batteri',
    category: 'navigasjon',
    summary:
      'Mobilens GPS virker uten dekning hvis kartet er lastet ned – men batteriet er det svake leddet, særlig i kulde.',
    tags: ['GPS', 'mobil', 'offline kart', 'batteri', 'flymodus', 'kulde', 'smartphone navigation', 'strømsparing'],
    blocks: [
      {
        type: 'p',
        text: 'GPS-mottakeren i telefonen trenger ikke mobildekning, men kartet må ligge lagret på telefonen. Last ned kart for området før du drar, og ha alltid papirkart og kompass som reserve.',
      },
      { type: 'h', text: 'Før du drar' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Last ned offline-kart for hele området, med god margin.',
          'Lad telefonen og powerbanken fullt opp.',
          'Lær hvor koordinatene vises i appen.',
          'Legg inn viktige punkter: bil, hytter, rømningsveier.',
        ],
      },
      { type: 'h', text: 'Spar batteri' },
      {
        type: 'list',
        items: [
          'Bruk flymodus. GPS virker fortsatt på de fleste telefoner, og batteriet varer mye lenger.',
          'Skru ned skjermlysstyrken og slå av Bluetooth, Wi-Fi og bakgrunnsapper.',
          'Sjekk posisjonen ved behov i stedet for å ha kartet åpent hele tiden.',
          'Slå på strømsparingsmodus tidlig.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Kulde', value: 'batteriet kan dø plutselig' },
          { label: 'Oppbevar', value: 'innerlomme, nær kroppen' },
          { label: 'Reserve', value: 'powerbank + kabel i vanntett pose' },
        ],
      },
      {
        type: 'warning',
        title: 'Ikke stol bare på mobilen',
        text: 'Kulde, vann, fall og tomt batteri kan stoppe telefonen når du trenger den mest. Spar alltid nok strøm til en nødsamtale.',
      },
      {
        type: 'tip',
        text: 'Viser telefonen 0 % i kulden: varm den opp inne ved kroppen. Batteriet er ofte ikke tomt, bare for kaldt.',
      },
    ],
    related: ['strombank', 'gi-posisjon', 'kart-og-kompass', 'batterier'],
    source: 'Kartverket, DNT / Norsk Friluftsliv, Røde Kors',
  },
  {
    id: 'fjellvettreglene',
    title: 'Fjellvettreglene',
    category: 'navigasjon',
    summary:
      'De ni fjellvettreglene er norsk friluftslivs grunnregler for å komme trygt hjem – i fjellet, i skogen og på vannet.',
    tags: ['fjellvett', 'fjellvettregler', 'tursikkerhet', 'DNT', 'Røde Kors', 'mountain safety code', 'fjelltur', 'friluftsliv'],
    blocks: [
      {
        type: 'p',
        text: 'Fjellvettreglene er utarbeidet av DNT og Røde Kors, og ble sist revidert i 2016. De gjelder like mye på en kort tur i nærområdet som på langtur over vidda.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Planlegg turen og meld fra hvor du går.',
          'Tilpass turen etter evne og forhold.',
          'Ta hensyn til vær- og skredvarsel.',
          'Vær forberedt på uvær og kulde, selv på korte turer.',
          'Ta med nødvendig utstyr så du kan hjelpe deg selv og andre.',
          'Velg trygge ruter. Kjenn igjen skredterreng og usikker is.',
          'Bruk kart og kompass. Vit alltid hvor du er.',
          'Vend i tide, det er ingen skam å snu.',
          'Spar på kreftene og søk ly om nødvendig.',
        ],
      },
      { type: 'h', text: 'Minimumsutstyr på tur' },
      {
        type: 'list',
        items: [
          'Kart og kompass (og lært å bruke dem).',
          'Ekstra varme klær, lue, votter og vindtett ytterplagg.',
          'Mat, drikke og noe ekstra.',
          'Ladet mobil, gjerne powerbank.',
          'Hodelykt, førstehjelpsutstyr og vindsekk eller presenning.',
        ],
      },
      {
        type: 'tip',
        title: 'Meld fra',
        text: 'Fortell noen hvor du skal, hvilken rute du tar og når du er tilbake. Avtal når de skal varsle hvis du ikke har gitt lyd fra deg.',
      },
      {
        type: 'warning',
        text: 'Er du i nød: ring 112 (politiet leder redningsaksjoner) eller 113 ved personskade.',
      },
    ],
    related: ['farevarsler', 'snoskred-tegn', 'avstand-og-tid', 'kart-og-kompass'],
    source: 'DNT og Røde Kors (Fjellvettreglene)',
  },

  // ─── VÆR ───────────────────────────────────────────────────────────────────
  {
    id: 'skyer-og-vaertegn',
    title: 'Skyer og værtegn',
    category: 'vaer',
    summary:
      'Uten varsel kan du lese været fra skyene, vinden og lufttrykket – og se når uvær er på vei.',
    tags: ['skyer', 'værtegn', 'værvarsel', 'barometer', 'lufttrykk', 'cloud types', 'front', 'tordensky'],
    blocks: [
      {
        type: 'p',
        text: 'Uten mobil og radio er himmelen ditt værvarsel. Endringer i skyer, vind og lufttrykk over noen timer forteller mye om hva som kommer. Bruk tegnene sammen, ikke ett alene.',
      },
      { type: 'h', text: 'Skyer som varsler endring' },
      {
        type: 'list',
        items: [
          'Fjærskyer (cirrus) som tykner til et slør over himmelen: en varmfront med nedbør kan komme innen et døgn eller to.',
          'Ring rundt sola eller månen (halo): fuktig luft høyt oppe, ofte før front.',
          'Skydekket senker seg og blir grått og jevnt: regn eller snø er nær.',
          'Høye, tårnende bygeskyer (cumulonimbus) med flat, utflytende topp: torden, kraftige byger og vindkast.',
          'Linseformede skyer over fjell: sterk vind i høyden.',
        ],
      },
      { type: 'h', text: 'Tegn på fint vær' },
      {
        type: 'list',
        items: [
          'Små, hvite «bomullsdotter» (godværsskyer) som løser seg opp om kvelden.',
          'Stigende eller stabilt høyt lufttrykk.',
          'Dugg eller rim på bakken om morgenen etter en klar natt.',
        ],
      },
      {
        type: 'facts',
        items: [
          { label: 'Raskt fallende trykk', value: 'uvær og vind på vei' },
          { label: 'Stigende trykk', value: 'bedring' },
          { label: 'Vinden dreier og øker', value: 'front nærmer seg' },
        ],
      },
      {
        type: 'tip',
        title: 'Barometer i mobilen',
        text: 'Mange telefoner og klokker har barometer. Noter trykket morgen og kveld – utviklingen er viktigere enn tallet.',
      },
      {
        type: 'warning',
        text: 'I fjellet kan været endre seg på kort tid. Ser du tegn til uvær: vurder å snu eller søk ly før det kommer.',
      },
    ],
    related: ['farevarsler', 'torden', 'storm', 'fjellvettreglene'],
    source: 'Meteorologisk institutt, DNT / Norsk Friluftsliv',
  },
  {
    id: 'farevarsler',
    title: 'Farevarsler – gult, oransje og rødt',
    category: 'vaer',
    summary:
      'Meteorologisk institutt og NVE sender farevarsler i tre farger for vær, flom, skred og skogbrannfare – her er hva de betyr.',
    tags: ['farevarsel', 'gult farevarsel', 'oransje farevarsel', 'rødt farevarsel', 'varsom', 'yr', 'weather warning', 'MET'],
    blocks: [
      {
        type: 'p',
        text: 'Farevarsler varsler vær og naturfarer som kan true liv og verdier. Meteorologisk institutt (MET) varsler blant annet vind, kraftig nedbør, stormflo, polart lavtrykk, ising og skogbrannfare. NVE varsler flom, jordskred og snøskred på varsom.no. Varslene vises også på yr.no.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Gult', value: 'utfordrende situasjon – vær forberedt' },
          { label: 'Oransje', value: 'alvorlig situasjon – ta forholdsregler' },
          { label: 'Rødt', value: 'ekstrem situasjon – sjelden, følg rådene fra myndighetene' },
          { label: 'Snøskredfare', value: 'faregrad 1–5' },
        ],
      },
      { type: 'h', text: 'Ved gult' },
      {
        type: 'list',
        items: [
          'Følg med på varselet og planlegg reiser og turer deretter.',
          'Sikre løse gjenstander og sjekk sluk og avløp.',
        ],
      },
      { type: 'h', text: 'Ved oransje og rødt' },
      {
        type: 'list',
        items: [
          'Unngå unødvendig reise. Hold deg unna utsatte områder: elver, bratte skråninger, kyst og fjell.',
          'Lad mobil og powerbank, fyll vann, sjekk lommelykt og batteriradio.',
          'Følg råd fra kommunen og politiet, og vær klar til å evakuere.',
          'Sjekk at naboer og familie har fått med seg varselet.',
        ],
      },
      {
        type: 'tip',
        title: 'Når nettet er nede',
        text: 'Lytt på NRK P1 via DAB eller batteriradio. Ved akutt fare kan myndighetene sende Nødvarsel direkte til mobiler i området.',
      },
      {
        type: 'warning',
        text: 'Farevarsler gjelder et område – lokalt kan det bli verre. Bruk egen vurdering og ta hensyn til det du ser.',
      },
    ],
    related: ['nodvarsel', 'storm', 'ekstremnedbor', 'dab-og-fm'],
    source: 'Meteorologisk institutt, NVE / varsom.no',
  },
  {
    id: 'torden',
    title: 'Torden og lyn',
    category: 'vaer',
    summary:
      'Hører du torden, er du innenfor rekkevidde for lyn – søk ly i hus eller bil, og unngå topper, vann og enslige trær.',
    tags: ['torden', 'lyn', 'tordenvær', 'lynnedslag', 'uvær', 'lightning', 'thunderstorm', 'tordenbyge'],
    blocks: [
      {
        type: 'p',
        text: 'Lyn kan slå ned flere kilometer fra tordenbygen. Hører du torden, er det på tide å søke ly. Den tryggeste plassen er inne i en bygning eller i en bil med metalltak.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Avstand til lynet', value: 'sekunder fra lyn til torden ÷ 3 = km' },
          { label: 'Vent etter siste torden', value: 'ca. 30 minutter' },
          { label: 'Treffet av lyn', value: 'ring 113, start HLR ved behov' },
        ],
      },
      { type: 'h', text: 'Ute i terrenget' },
      {
        type: 'list',
        items: [
          'Kom deg ned fra topper, rygger og åpne vidder.',
          'Hold deg unna vann, enslige trær, master, gjerder og kraftledninger.',
          'Tett skog med jevnhøye trær er bedre enn åpent terreng.',
          'Spre gruppa med noen meters mellomrom, så ikke alle rammes av samme nedslag.',
          'Siste utvei: sett deg på huk på et isolerende underlag (sekk, liggeunderlag), med føttene samlet og hendene over ørene.',
          'Legg fra deg staver og metallutstyr et stykke unna.',
        ],
      },
      { type: 'h', text: 'Innendørs' },
      {
        type: 'list',
        items: [
          'Hold deg unna vinduer, peis og vannrør. Vent med dusj og oppvask.',
          'Trekk ut ledningen til TV, ruter og annet følsomt utstyr.',
          'Ikke bruk fasttelefon med ledning.',
        ],
      },
      {
        type: 'warning',
        title: 'Lynskadde er trygge å røre',
        text: 'En person som er truffet av lyn har ingen strøm i kroppen. Start HLR straks hvis personen ikke puster normalt, og ring 113.',
      },
    ],
    related: ['stromskade', 'hlr-voksen', 'skyer-og-vaertegn'],
    source: 'Meteorologisk institutt, DSB, Norsk Resuscitasjonsråd',
  },
  {
    id: 'storm',
    title: 'Storm og sterk vind',
    category: 'vaer',
    summary:
      'Sikre løse gjenstander før uværet, hold deg inne under stormen og vær forberedt på strømbrudd og stengte veier.',
    tags: ['storm', 'orkan', 'kuling', 'vind', 'uvær', 'windstorm', 'Beaufort', 'stormflo'],
    blocks: [
      {
        type: 'p',
        text: 'Sterk vind river løs takplater, trampoliner og trær, og kan gi langvarige strømbrudd. De fleste skader skjer når folk er ute under uværet eller rydder for tidlig etterpå.',
      },
      {
        type: 'facts',
        items: [
          { label: 'Liten kuling', value: '10,8–13,8 m/s' },
          { label: 'Sterk kuling', value: '17,2–20,7 m/s' },
          { label: 'Full storm', value: '24,5–28,4 m/s' },
          { label: 'Orkan', value: '32,7 m/s og mer' },
        ],
      },
      { type: 'h', text: 'Før uværet' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Sikre eller ta inn hagemøbler, trampoliner, søppeldunker og løst utstyr.',
          'Lukk og sikre vinduer, dører og porter.',
          'Fortøy båten godt, og flytt bilen bort fra store trær.',
          'Lad mobil og powerbank, ha lommelykt, batteriradio, vann og mat klar.',
          'Ved stormflo-varsel: flytt verdier opp fra kjeller og strandnære boder.',
        ],
      },
      { type: 'h', text: 'Under uværet' },
      {
        type: 'list',
        items: [
          'Hold deg inne, borte fra vinduer.',
          'Unngå å kjøre bil og å gå i skog.',
          'Følg med på varsler fra MET og meldinger fra kommunen.',
        ],
      },
      {
        type: 'warning',
        title: 'Etterpå',
        text: 'Hold god avstand til nedfalte strømledninger – de kan være strømførende. Meld fra til nettselskapet. Vær forsiktig med motorsag på trær i spenn; det er svært farlig arbeid.',
      },
      {
        type: 'tip',
        text: 'Ta bilder av skader før du rydder, og kontakt forsikringsselskapet så snart du kan.',
      },
    ],
    related: ['farevarsler', 'vindavkjoling', 'dokumenter-og-forsikring', 'stromskade'],
    source: 'Meteorologisk institutt, DSB / egenberedskap.no',
  },
  {
    id: 'vindavkjoling',
    title: 'Vindavkjøling – følt temperatur',
    category: 'vaer',
    summary:
      'Vind gjør at kroppen mister varme mye raskere – ved minusgrader og sterk vind kan bar hud få frostskader på kort tid.',
    tags: ['vindavkjøling', 'følt temperatur', 'effektiv temperatur', 'wind chill', 'kulde', 'frost', 'vind'],
    blocks: [
      {
        type: 'p',
        text: 'Vinden blåser bort det tynne laget av varm luft rundt kroppen. Derfor føles det kaldere enn termometeret viser, og huden kjøles raskere. Følt temperatur er et mål på hvor kaldt det kjennes for bar hud.',
      },
      {
        type: 'facts',
        items: [
          { label: '0 °C og 10 m/s', value: 'føles som ca. −7 °C' },
          { label: '−10 °C og 5 m/s', value: 'føles som ca. −17 °C' },
          { label: '−10 °C og 10 m/s', value: 'føles som ca. −20 °C' },
          { label: '−20 °C og 10 m/s', value: 'føles som ca. −33 °C' },
          { label: '−20 °C og 20 m/s', value: 'føles som ca. −38 °C' },
        ],
      },
      {
        type: 'p',
        text: 'Ved følt temperatur rundt −30 °C og kaldere kan bar hud få frostskader i løpet av minutter. Nese, kinn, ører, fingre og tær er mest utsatt.',
      },
      { type: 'h', text: 'Beskytt deg' },
      {
        type: 'list',
        items: [
          'Vindtett ytterlag er viktigere enn tykkere genser.',
          'Dekk til ansiktet: hette, buff eller ansiktsmaske.',
          'Votter er varmere enn fingerhansker.',
          'Gå i le, snu ryggen til vinden når du stopper.',
          'Følg med på hverandre: hvite flekker i ansiktet er tidlige frostskader.',
        ],
      },
      {
        type: 'warning',
        text: 'Vind og våte klær sammen er farlig – også i plussgrader. Nedkjøling skjer gradvis og merkes ofte først når du blir klumsete og forvirret.',
      },
      {
        type: 'tip',
        text: 'Varm en frostskadet flekk med varm hånd eller mot varm hud, ikke ved å gni med snø.',
      },
    ],
    related: ['frostskader', 'nedkjoling', 'lag-pa-lag', 'sno-og-kulde'],
    source: 'Meteorologisk institutt, Helsedirektoratet, Norsk førstehjelpsråd',
  },
  {
    id: 'ekstremnedbor',
    title: 'Ekstremnedbør og flom',
    category: 'vaer',
    summary:
      'Kraftig regn kan på kort tid gi oversvømte kjellere, flom i bekker og jordskred – forbered deg og hold deg unna vannet.',
    tags: ['flom', 'styrtregn', 'kraftig nedbør', 'overvann', 'jordskred', 'flood', 'oversvømmelse', 'regn'],
    blocks: [
      {
        type: 'p',
        text: 'Kraftig regn kan fylle avløpene raskere enn de klarer å ta unna. Små bekker kan bli farlige elver, og bratte skråninger kan gi jordskred og flomskred. Følg farevarsler fra MET og varsom.no.',
      },
      { type: 'h', text: 'Før regnet' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Rens sluk, takrenner og stikkrenner rundt huset.',
          'Flytt verdisaker, dokumenter og elektriske apparater opp fra kjelleren.',
          'Ha sandsekker eller tettinger klare ved utsatte dører.',
          'Sjekk at tilbakeslagsventil og pumpe i kjelleren virker.',
          'Lad mobil, ha lommelykt og vann klart i tilfelle strøm- eller vannbrudd.',
        ],
      },
      { type: 'h', text: 'Under flom' },
      {
        type: 'list',
        items: [
          'Hold deg unna elver, bekker og bratte skråninger. Ikke gå eller kjør gjennom vann på vei – selv lite strømmende vann kan ta med seg bil og mennesker.',
          'Slå av strømmen i rom som står i fare for å bli oversvømt – men aldri hvis du må stå i vann for å gjøre det.',
          'Følg kommunens råd om evakuering.',
        ],
      },
      {
        type: 'warning',
        title: 'Tegn på jordskred',
        text: 'Plutselig grumset eller mer/mindre vann i bekken, sprekker i bakken, rumling, trær som heller. Kom deg bort sidelengs fra skredbanen og ring 112.',
      },
      {
        type: 'warning',
        title: 'Drikkevann',
        text: 'Etter flom kan brønner og vannverk bli forurenset. Følg kommunens råd, og kok vannet hvis du er i tvil.',
      },
      {
        type: 'tip',
        text: 'Dokumenter skader med bilder før du rydder, og meld fra til forsikringsselskapet.',
      },
    ],
    related: ['farevarsler', 'kvikkleire', 'koke-vann', 'vannlekkasje'],
    source: 'NVE / varsom.no, Meteorologisk institutt, DSB',
  },
  {
    id: 'sno-og-kulde',
    title: 'Mye snø og streng kulde',
    category: 'vaer',
    summary:
      'Kulde og snø gir frosne rør, tunge tak, glatte veier og fare for nedkjøling – særlig hvis strømmen også går.',
    tags: ['kulde', 'snø', 'vinter', 'frost', 'snølast', 'cold snap', 'frosne rør', 'snøfall'],
    blocks: [
      {
        type: 'p',
        text: 'Langvarig kulde og store snømengder stiller krav til hus, bil og helse. Kombinasjonen kulde og strømbrudd er en av de mest alvorlige situasjonene for husholdninger i Norge.',
      },
      { type: 'h', text: 'Hjemme' },
      {
        type: 'list',
        items: [
          'Hold litt varme i alle rom med vannrør, og åpne skapdører under vasker mot yttervegg.',
          'Vet du hvor stoppekranen er? Fryser et rør, steng vannet før det tiner.',
          'Følg med på snølasten på taket. Måk bare hvis du kan gjøre det trygt, ellers få hjelp.',
          'Hold rømningsveier, ventiler og pipe fri for snø.',
          'Ha ved, ekstra klær, soveposer og mat som ikke trenger koking.',
        ],
      },
      { type: 'h', text: 'I bilen' },
      {
        type: 'list',
        items: [
          'Ha full tank eller godt ladet batteri før du kjører i kulde.',
          'Ha med spade, varme klær, sovepose eller ullteppe, mat, drikke, lommelykt og lader.',
          'Står du fast: bli i bilen, gjør den synlig og hold eksosrøret fritt for snø hvis motoren går.',
        ],
      },
      {
        type: 'warning',
        title: 'Snø og is fra tak',
        text: 'Takras og istapper kan drepe. Hold deg og barn unna takskjegget, og sperr av utsatte områder.',
      },
      {
        type: 'warning',
        title: 'Kullos i bil',
        text: 'Er eksosrøret dekket av snø, kan kullos trekke inn i bilen. Grav fritt, og la motoren gå bare korte perioder med en vindusglipe åpen.',
      },
      {
        type: 'tip',
        text: 'Følg med på eldre og syke naboer i kuldeperioder. Nedkjøling kan skje innendørs, langsomt og uten at personen merker det selv.',
      },
    ],
    related: ['varme-innendors', 'nedkjoling', 'vindavkjoling', 'eldre-naboer'],
    source: 'DSB / egenberedskap.no, Statens vegvesen, Helsedirektoratet',
  },
];
