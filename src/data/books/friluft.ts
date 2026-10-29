import type { Book } from '../types';

export const book: Book = {
  id: 'friluft',
  title: 'Overlevelse i naturen',
  subtitle: 'Prioriter riktig og klar deg til hjelpen kommer',
  description:
    'De fleste nødsituasjoner i norsk natur handler ikke om å overleve i uker, men om å holde seg varm, synlig og rolig noen timer eller en natt til hjelpen kommer. Denne boka gir deg prioriteringene, ferdighetene og vurderingene som gjør forskjellen.',
  icon: 'pine-tree',
  accent: 'moss',
  premium: true,
  chapters: [
    {
      id: 'prioriteringer',
      title: 'Prioriteringer og fjellvettreglene',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Når noe går galt ute, er det lett å gjøre det som føles mest presserende i stedet for det som er viktigst. I norsk klima er det kulde, vind og væte som er den store faren – ikke sult. Mennesker klarer seg lenge uten mat, men kan bli alvorlig nedkjølt på få timer.',
        },
        { type: 'h', text: 'Rekkefølgen som redder liv' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Stopp opp, tenk og vurder. Panikk er farligere enn de fleste situasjoner.',
            'Førstehjelp: ta hånd om skader – dine egne og andres.',
            'Ly og varme: kom deg ut av vind og væte, og isoler deg fra bakken.',
            'Signal: varsle eller gjør deg synlig, slik at hjelpen finner deg.',
            'Vann: drikk jevnlig – dehydrering svekker både kropp og dømmekraft.',
            'Mat: minst viktig på kort sikt, men gir varme og humør.',
          ],
        },
        {
          type: 'tip',
          title: 'Bli der du er',
          text: 'Har du meldt fra om turen, er det ofte klokest å bli værende og gjøre deg synlig. Det er mye lettere for redningsmannskapene å finne deg på et kjent sted enn mens du er i bevegelse.',
        },
        { type: 'h', text: 'Fjellvettreglene' },
        {
          type: 'p',
          text: 'Fjellvettreglene er utarbeidet av Den Norske Turistforening, Røde Kors og andre organisasjoner innen friluftsliv og redning. De er gode å kunne på alle turer, ikke bare til fjells:',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Planlegg turen og meld fra hvor du går.',
            'Tilpass turen etter evne og forhold.',
            'Ta hensyn til vær- og skredvarsel.',
            'Vær forberedt på uvær og kulde, selv på korte turer.',
            'Ta med nødvendig utstyr, så du kan hjelpe deg selv og andre.',
            'Velg trygge ruter. Kjenn igjen skredfarlig terreng og usikker is.',
            'Bruk kart og kompass. Vit alltid hvor du er.',
            'Vend i tide. Det er ingen skam å snu.',
            'Spar på kreftene og søk ly om nødvendig.',
          ],
        },
        {
          type: 'facts',
          items: [
            { label: 'Største fare i norsk natur', value: 'kulde, vind og væte' },
            { label: 'Nødnummer redning', value: '113 / 112' },
            { label: 'Første prioritet', value: 'stopp, tenk, vurder' },
          ],
        },
      ],
    },
    {
      id: 'klaer-og-nodly',
      title: 'Klær, nødly og varme',
      minutes: 7,
      blocks: [
        {
          type: 'p',
          text: 'Kroppen mister varme på fire måter: til kald luft, til vind, til kaldt underlag og gjennom fordampning når du er våt. God bekledning og et enkelt ly stopper alle fire.',
        },
        { type: 'h', text: 'Lag på lag' },
        {
          type: 'list',
          items: [
            'Innerst: ull, som transporterer fukt bort fra huden og varmer også når den er fuktig. Unngå bomull – den holder på vannet og kjøler.',
            'Mellomlag: ullgenser, fleece eller lett dunjakke som isolerer.',
            'Ytterst: vind- og vanntett skall som beskytter isolasjonen.',
            'Lue, votter og tørre sokker. Ha alltid et ekstra sett tørt i sekken.',
          ],
        },
        {
          type: 'tip',
          title: 'Unngå å bli svett',
          text: 'Ta av et lag før du begynner å gå i motbakke, og på igjen før du stopper. Svette som fryser, er en av de vanligste årsakene til at turgåere blir kalde.',
        },
        { type: 'h', text: 'Isoler deg fra bakken' },
        {
          type: 'p',
          text: 'Kaldt underlag stjeler varme raskere enn kald luft. Sitt aldri direkte på snø eller stein. Bruk sitteunderlag, sekken, liggeunderlag, et tykt lag granbar eller tau og klær du ikke har på deg.',
        },
        { type: 'h', text: 'Nødly' },
        {
          type: 'list',
          items: [
            'Vindsekk eller nødbivuakksekk: lett, rimelig og kanskje det viktigste sikkerhetsutstyret på vinterturen. Kryp inn med sekken som underlag.',
            'Utnytt terrenget: le bak store steiner, i tett skog eller under en gran med tette, lave greiner.',
            'Med presenning eller regnponcho: spenn den opp mellom trær og la den ene siden gå helt ned mot bakken mot vinden.',
            'I snø: en enkel snøgrop eller snøhule kan gi godt ly, men tar tid og krefter. Unngå å bli våt av svette under gravingen, og sørg for lufthull.',
            'Gjør lyet lite – mindre luft å varme opp.',
          ],
        },
        {
          type: 'warning',
          title: 'Aldri bål eller brenner i tett ly',
          text: 'Bruk aldri primus, brenner eller bål inne i telt, snøhule eller annet lukket ly uten svært god lufting. Kullos kan drepe også ute i naturen.',
        },
        { type: 'h', text: 'Hold på varmen' },
        {
          type: 'list',
          items: [
            'Sitt tett sammen hvis dere er flere.',
            'Spis og drikk – gjerne noe søtt og varmt.',
            'Beveg store muskelgrupper jevnlig, men uten å bli svett.',
            'Bytt til tørre klær så snart du kan.',
          ],
        },
      ],
    },
    {
      id: 'bal-i-darlig-vaer',
      title: 'Tenne bål i dårlig vær',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Et bål gir varme, lys, tørre klær, kokt vann og ikke minst moral. Å tenne bål i regn, vind eller snø er en ferdighet som må øves på – før du trenger den.',
        },
        { type: 'h', text: 'Ha med tenning du kan stole på' },
        {
          type: 'list',
          items: [
            'Stormfyrstikker og en lighter, oppbevart vanntett og på ulike steder.',
            'Tennstål, som virker også når det er vått.',
            'Opptenningsbriketter eller bomullsdotter med vaselin i en liten boks.',
          ],
        },
        { type: 'h', text: 'Finn tørt materiale' },
        {
          type: 'list',
          items: [
            'Never (bjørkebark): brenner selv når den er fuktig. Ta kun løs never eller fra nedfalne trær.',
            'Tørre, døde kvister nederst på grantrær – de som knekker med et knepp.',
            'Splitt våt ved: innsiden er ofte tørr. Lag fliser og spiker med kniv.',
            'Kvae (harpiks) fra gran og furu brenner godt.',
          ],
        },
        { type: 'h', text: 'Bygg bålet' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Lag et tørt underlag av pinner, så bålet ikke ligger direkte på snø eller våt mark.',
            'Legg tennmaterialet i midten, med tynne kvister rundt i tipi-form.',
            'Skjerm for vinden med kroppen, sekken eller steiner.',
            'Tenn i bunnen, på vindsiden.',
            'Legg på gradvis tykkere ved først når flammene har tatt godt tak.',
          ],
        },
        {
          type: 'warning',
          title: 'Bålforbud og skogbrannfare',
          text: 'I Norge er det generelt forbudt å gjøre opp ild i eller i nærheten av skog og annen utmark i perioden 15. april til 15. september, med mindre det åpenbart ikke kan føre til brann. Kommunen kan også innføre totalforbud. I en reell nødsituasjon er det lov å gjøre det som er nødvendig for å berge liv – men vær ekstremt forsiktig.',
        },
        {
          type: 'tip',
          title: 'Slukk skikkelig',
          text: 'Slukk bålet med vann eller snø til det ikke lenger er varmt å holde hånden over. Glør kan ligge og ulme under mose og torv i lang tid.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Beste naturlige tennmateriale', value: 'never' },
            { label: 'Generelt bålforbud i utmark', value: '15. april – 15. sept.' },
            { label: 'Brannvesenet', value: '110' },
          ],
        },
      ],
    },
    {
      id: 'vann-i-naturen',
      title: 'Finne og rense vann',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'I store deler av Norge er det rikelig med vann. Utfordringen er å vite når det er trygt å drikke. Rennende vann fra høyfjellet er ofte rent, men kan være forurenset av dyr, beitedyr eller bebyggelse lenger opp.',
        },
        { type: 'h', text: 'Velg vannkilden med omhu' },
        {
          type: 'list',
          items: [
            'Velg rennende fremfor stillestående vann.',
            'Hent vann ovenfor stier, hytter, beiteområder og veier.',
            'Unngå vann med lukt, farge eller synlig grums.',
            'Unngå vann nær døde dyr, avløp eller dyrka mark.',
          ],
        },
        { type: 'h', text: 'Slik renser du vann' },
        {
          type: 'list',
          items: [
            'Koking: den sikreste metoden. Når vannet har kokt opp, er bakterier, virus og parasitter drept.',
            'Vannfilter: fjerner bakterier og parasitter. Mange filtre fjerner ikke virus – sjekk produktet.',
            'Rensetabletter: virker mot bakterier og virus, men trenger tid, og noen parasitter er motstandsdyktige. Følg bruksanvisningen nøye.',
            'Grumsete vann: sil gjennom et tøystykke først, slik at rensingen virker bedre.',
          ],
        },
        {
          type: 'warning',
          title: 'Ikke spis snø',
          text: 'Å spise snø senker kroppstemperaturen og gir lite vann. Smelt snøen i en kjele over bål eller brenner først. Ha litt vann i bunnen av kjelen, så snøen ikke svir seg.',
        },
        {
          type: 'tip',
          title: 'Drikk før du blir tørst',
          text: 'Kulde demper tørstefølelsen, men du mister mye væske gjennom pusten i kald luft. Mørk urin er et tegn på at du må drikke mer.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Sikreste rensemetode', value: 'koking' },
            { label: 'Foretrukket vannkilde', value: 'rennende, ovenfor bebyggelse' },
            { label: 'Snø', value: 'smelt før du drikker' },
          ],
        },
      ],
    },
    {
      id: 'orientering-og-signal',
      title: 'Orientering og signalisering',
      minutes: 7,
      blocks: [
        {
          type: 'p',
          text: 'Mobilen er et fantastisk navigasjonsverktøy – helt til batteriet dør, skjermen fryser eller dekningen forsvinner. Kart og kompass virker alltid. Og når du trenger hjelp, handler det om å varsle tidlig og gjøre deg synlig.',
        },
        { type: 'h', text: 'Kart og kompass' },
        {
          type: 'list',
          items: [
            'Ha med papirkart over området i vanntett lomme, og et kompass.',
            'Følg med på kartet underveis – det er mye lettere å vite hvor du er enn å finne ut av det etterpå.',
            'Lær deg å ta ut en kursretning fra kartet og følge den med kompasset.',
            'Bruk ledelinjer i terrenget: bekker, stier, vann og rygger.',
            'Last ned kart til mobilen på forhånd, slik at de virker uten dekning.',
          ],
        },
        { type: 'h', text: 'Uten kart og kompass' },
        {
          type: 'list',
          items: [
            'Sola står omtrent i sør midt på dagen.',
            'Følg bekker og elver nedover – de leder ofte mot dal, vei og bebyggelse. Vær forsiktig ved stup og fosser.',
            'Har du gått deg vill: stopp. Å gå videre uten plan gjør det verre og vanskeligere å finne deg.',
          ],
        },
        { type: 'h', text: 'Varsle om hjelp' },
        {
          type: 'list',
          items: [
            'Ring 113 ved skade eller sykdom, eller 112 hvis du er savnet eller har gått deg bort. Begge setter i gang redning.',
            'Har du ikke dekning, prøv fra et høyere punkt. En SMS kan komme fram selv om samtalen ikke gjør det.',
            'Oppgi posisjon – for eksempel koordinater fra mobilen eller kartet.',
            'Spar batteriet etter samtalen, så redningstjenesten kan nå deg igjen.',
          ],
        },
        {
          type: 'tip',
          title: 'Nødpeilesender',
          text: 'En personlig nødpeilesender (PLB) sender nødsignal og posisjon via satellitt, også der det ikke finnes mobildekning. Den må registreres før bruk. For turer i avsidesliggende områder er den en god investering.',
        },
        { type: 'h', text: 'Gjør deg synlig' },
        {
          type: 'p',
          text: 'Tre av noe – tre bål, tre fløytesignaler, tre lysblink – er et internasjonalt anerkjent nødsignal. Gjenta signalet med jevne mellomrom.',
        },
        {
          type: 'list',
          items: [
            'Fløyte: høres mye lenger enn stemmen og sparer krefter.',
            'Lommelykt eller hodelykt: tre blink, pause, gjenta.',
            'Røyk om dagen, flammer om natten. Legg grønt bar på bålet for mye hvit røyk.',
            'Klær i sterke farger spredt utover i åpent terreng.',
            'Til helikopter: stå med begge armene løftet i en V-form – det betyr «Vi trenger hjelp».',
          ],
        },
        {
          type: 'facts',
          items: [
            { label: 'Medisinsk nødhjelp', value: '113' },
            { label: 'Savnet eller gått seg bort', value: '112' },
            { label: 'Internasjonalt nødsignal', value: 'tre signaler, gjentatt' },
          ],
        },
      ],
    },
    {
      id: 'mat-i-naturen',
      title: 'Mat i naturen – med forsiktighet',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Mat er lavest prioritert når du må klare deg ute på kort sikt. Et voksent, friskt menneske tåler lang tid uten mat. Likevel gir mat varme og energi, og naturen har mye å by på – for den som vet hva den plukker.',
        },
        { type: 'h', text: 'Trygt å starte med' },
        {
          type: 'list',
          items: [
            'Bær du kjenner godt: blåbær, tyttebær, multer og bringebær.',
            'Fisk: krever utstyr og tålmodighet, men er god og næringsrik mat.',
            'Ha alltid med nødmat i sekken: nøtter, sjokolade, tørket frukt eller turmat.',
          ],
        },
        {
          type: 'warning',
          title: 'Sopp: aldri uten sikker kunnskap',
          text: 'Noen av Norges giftigste sopper kan forveksles med matsopp og kan gi alvorlige organskader. Symptomene kan komme mange timer etter måltidet. Spis aldri sopp du ikke er helt sikker på. Ved mistanke om forgiftning: kontakt Giftinformasjonen på 22 59 13 00, eller ring 113 ved alvorlige symptomer.',
        },
        {
          type: 'list',
          items: [
            'Lær deg noen få matsopper grundig, sammen med en erfaren plukker eller på soppkurs.',
            'Bruk soppkontrollen når du er i tvil.',
            'Smak aldri på ukjente planter eller bær «for å teste».',
            'Unngå planter i skjermplantefamilien med mindre du er ekspert – flere av dem er svært giftige.',
          ],
        },
        {
          type: 'tip',
          title: 'Spar på energien',
          text: 'Å lete etter mat koster ofte mer energi enn du får igjen. Bruk heller kreftene på ly, varme og signal – og spis det du har med deg.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Prioritet på kort sikt', value: 'lav' },
            { label: 'Giftinformasjonen', value: '22 59 13 00' },
            { label: 'Ukjent sopp', value: 'aldri spis' },
          ],
        },
      ],
    },
    {
      id: 'nedkjoling',
      title: 'Nedkjøling – gjenkjenne og handle',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Nedkjøling (hypotermi) betyr at kroppens kjernetemperatur synker. Det kan skje også om sommeren, særlig når du er våt og det blåser. Nedkjøling svekker dømmekraften, og den som rammes, merker det ofte ikke selv. Derfor må dere passe på hverandre.',
        },
        { type: 'h', text: 'Tegn på nedkjøling' },
        {
          type: 'list',
          items: [
            'Tidlig: kraftig skjelving, kalde hender og føtter, klossethet, dårlig humør.',
            'Videre: forvirring, utydelig tale, apati, snubling og dårlig dømmekraft.',
            'Alvorlig: skjelvingen avtar eller opphører, nedsatt bevissthet, langsom puls og pust.',
          ],
        },
        {
          type: 'warning',
          title: 'Når skjelvingen stopper',
          text: 'At en kald person slutter å skjelve, er ikke et tegn på bedring. Det kan bety at nedkjølingen er blitt alvorlig. Ring 113 straks.',
        },
        { type: 'h', text: 'Slik hjelper du' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Ring 113 ved tegn på mer enn lett nedkjøling.',
            'Få personen i ly for vind og væte.',
            'Isoler godt mot underlaget.',
            'Bytt våte klær med tørre hvis det kan gjøres raskt i ly. Ellers: pakk inn utenpå de våte klærne.',
            'Pakk personen inn i sovepose, tepper og et vindtett ytterlag. Husk hodet.',
            'Gi varm, søt drikke bare hvis personen er våken og kan svelge normalt.',
            'Håndter personen skånsomt og hold vedkommende liggende ved alvorlig nedkjøling.',
          ],
        },
        {
          type: 'warning',
          title: 'Dette skal du ikke gjøre',
          text: 'Ikke gni eller massere kalde armer og bein, ikke gi alkohol, og ikke la en alvorlig nedkjølt person gå eller anstrenge seg. Unødvendig bevegelse kan gi livsfarlige hjerterytmeforstyrrelser.',
        },
        {
          type: 'tip',
          title: 'Varmepakker og kroppsvarme',
          text: 'Varmeposer kan legges på brystet, i armhulene og i nakken – aldri direkte mot huden. Å ligge tett inntil en varm person i sovepose er også effektivt.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Kan skje om sommeren', value: 'ja – vått og vind' },
            { label: 'Varselsignal', value: 'skjelvingen stopper' },
            { label: 'Ring', value: '113' },
          ],
        },
      ],
    },
  ],
};
