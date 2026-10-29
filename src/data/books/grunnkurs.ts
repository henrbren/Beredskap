import type { Book } from '../types';

export const book: Book = {
  id: 'grunnkurs',
  title: 'Grunnkurs i egenberedskap',
  subtitle: 'Det alle i husstanden bør kunne',
  description:
    'Et rolig og praktisk innføringskurs i hvordan du og familien klarer dere selv i en uke når samfunnet er satt ut av spill. Du lærer hva du bør ha hjemme, hvordan du holder varmen uten strøm, hvordan varslingen fungerer og hvordan dere lager en enkel plan sammen.',
  icon: 'shield-home',
  accent: 'signal',
  premium: false,
  chapters: [
    {
      id: 'hvorfor-egenberedskap',
      title: 'Hvorfor egenberedskap?',
      minutes: 4,
      blocks: [
        {
          type: 'p',
          text: 'Norge er et trygt land med gode nødetater. Men når en krise rammer bredt – et langvarig strømbrudd, et uvær som stenger veier, en pandemi eller en alvorlig sikkerhetspolitisk situasjon – blir hjelpen en begrenset ressurs. Da må samfunnet prioritere.',
        },
        {
          type: 'p',
          text: 'Prioriteringen er enkel og riktig: Hjelpen går først til dem som trenger den mest. Syke, eldre, de som bor alene med hjelpebehov, sykehus og sykehjem. Er du frisk og har det du trenger hjemme, er du ikke bare tryggere selv – du frigjør hjelp til andre.',
        },
        { type: 'h', text: 'Én uke på egen hånd' },
        {
          type: 'p',
          text: 'Direktoratet for samfunnssikkerhet og beredskap (DSB) anbefaler at alle husstander skal kunne klare seg selv i en uke. Det betyr å ha vann, mat, varme, lys, medisiner og en måte å få informasjon på – uten strøm, uten butikk og uten at noen kommer på døra.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Anbefalt selvforsyning', value: '7 døgn' },
            { label: 'Vann per person', value: '3 liter per døgn' },
            { label: 'Hvem anbefaler', value: 'DSB' },
          ],
        },
        { type: 'h', text: 'Det handler om ro, ikke frykt' },
        {
          type: 'p',
          text: 'Egenberedskap er ikke dommedagsforberedelser. Det er det samme som å ha refleksvest i bilen eller røykvarsler i taket: noe du ordner én gang, holder ved like, og håper du aldri trenger. Familier som er forberedt, rapporterer at krisen oppleves mindre kaotisk. Barn merker forskjellen på voksne som har en plan og voksne som improviserer.',
        },
        {
          type: 'list',
          items: [
            'Du slipper å stå i kø eller kjempe om de siste varene i butikken.',
            'Du kan ta deg av eldre naboer eller slektninger som trenger det.',
            'Du tar bedre beslutninger når du ikke er sulten, kald eller redd.',
            'Du avlaster nødetatene, så de kan prioritere livsviktig hjelp.',
          ],
        },
        {
          type: 'tip',
          title: 'Start i det små',
          text: 'Du trenger ikke kjøpe alt på én dag. Kjøp litt ekstra hver gang du handler, så har du et fullt lager i løpet av noen uker – uten at det merkes på budsjettet.',
        },
      ],
    },
    {
      id: 'beredskapslageret',
      title: 'Beredskapslageret',
      minutes: 7,
      blocks: [
        {
          type: 'p',
          text: 'Et godt beredskapslager består stort sett av ting du allerede bruker. Hemmeligheten er å ha litt mer av dem, og å vite hvor de er når lyset er borte.',
        },
        { type: 'h', text: 'Grunnpakken for én uke' },
        {
          type: 'list',
          items: [
            'Vann: 3 liter per person per døgn, altså rundt 20 liter per person for en uke.',
            'Mat: Holdbar mat som kan spises kald eller lages med lite vann og varme – nok til sju dager.',
            'Varme: Ulltepper, soveposer, varme klær og om mulig en alternativ varmekilde som er trygg innendørs, for eksempel vedovn.',
            'Lys: Lommelykter eller hodelykter, ekstra batterier og stearinlys med stabile holdere.',
            'Informasjon: En DAB-radio som går på batteri, sveiv eller solcelle.',
            'Helse: Førstehjelpsutstyr, reseptbelagte medisiner for minst en uke og jodtabletter for de i husstanden som anbefales å ha det.',
            'Hygiene: Våtservietter, antibac, toalettpapir, søppelsekker og bind/tamponger.',
            'Energi: Fulladet powerbank, fyrstikker, tennere og brensel til stormkjøkken eller primus.',
            'Betaling: Litt kontanter i mindre sedler, i tilfelle betalingssystemene er nede.',
          ],
        },
        {
          type: 'facts',
          items: [
            { label: 'Vann, familie på fire', value: 'ca. 84 liter' },
            { label: 'Medisiner', value: 'minst 7 dager' },
            { label: 'Batterier', value: 'til alle lykter og radio' },
          ],
        },
        { type: 'h', text: 'Hvor skal det stå?' },
        {
          type: 'p',
          text: 'Samle lageret på ett sted som er tørt, kjølig og lett tilgjengelig – en bod, et skap i gangen eller en hylle i kjelleren. Alle i husstanden skal vite hvor det er. Lykt og radio bør ligge øverst, slik at du finner dem i mørket.',
        },
        { type: 'h', text: 'Først inn, først ut' },
        {
          type: 'p',
          text: 'Det dyreste lageret er det som går ut på dato. Bruk prinsippet «først inn, først ut»: Når du kjøper nytt, setter du det bakerst og tar det eldste fram til hverdagsbruk. Slik blir lageret en del av den vanlige handlingen, og ingenting kastes.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Skriv kjøpsdato eller utløpsdato med tusj på emballasjen.',
            'Sett nye varer bakerst i hylla, eldre varer foran.',
            'Ta alltid fra fronten når du lager middag.',
            'Kjøp inn erstatning neste gang du handler.',
          ],
        },
        {
          type: 'tip',
          title: 'Fast sjekkdag',
          text: 'Velg to faste datoer i året – for eksempel når vi stiller klokka til sommertid og vintertid – og gå gjennom lageret. Bytt batterier, sjekk datoer og skift vannet.',
        },
        {
          type: 'warning',
          title: 'Jodtabletter',
          text: 'Jodtabletter beskytter kun skjoldbruskkjertelen mot radioaktivt jod, og skal bare tas når myndighetene ber om det. Direktoratet for strålevern og atomsikkerhet (DSA) anbefaler at særlig barn, unge under 40 år, gravide og ammende har jodtabletter hjemme.',
        },
      ],
    },
    {
      id: 'nar-strommen-gar',
      title: 'Når strømmen går',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Nesten alt i et moderne hjem avhenger av strøm: varme, lys, matlaging, mobilnett, internett, og i mange bygg også vannpumper og heis. Et kort strømbrudd er en ulempe. Et langt strømbrudd midt på vinteren er en alvorlig hendelse.',
        },
        { type: 'h', text: 'De første minuttene' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Finn lykt eller hodelykt – ikke tenn stearinlys før du har oversikt.',
            'Sjekk sikringsskapet. Er det bare deg, eller er naboene også mørke?',
            'Skru på batteriradioen og hør etter informasjon.',
            'Slå av komfyr, strykejern og andre apparater som kan starte når strømmen kommer tilbake.',
            'La én lampe stå på, så du merker når strømmen er tilbake.',
          ],
        },
        { type: 'h', text: 'Hold på varmen' },
        {
          type: 'p',
          text: 'Et godt isolert hus mister varmen sakte, men etter et døgn eller to uten oppvarming kan det bli kaldt. Samle familien i ett rom, helst det minste og best isolerte, eller rommet med vedovn. Lukk dører til resten av huset, heng tepper for vinduer og legg tepper mot dørsprekker.',
        },
        {
          type: 'list',
          items: [
            'Kle deg i lag: ull innerst, så fleece eller ull, og vindtett ytterst.',
            'Lue og sokker holder mye av varmen – også innendørs og om natta.',
            'Sov flere sammen, gjerne i soveposer oppå madrasser.',
            'Spis og drikk varmt når du kan. Kroppen trenger energi for å holde varmen.',
          ],
        },
        {
          type: 'warning',
          title: 'Livsfarlig karbonmonoksid',
          text: 'Bruk aldri grill, gassgrill, engangsgrill, terrassevarmer eller aggregat innendørs, i garasje eller i telt. De produserer karbonmonoksid (CO), en gass du verken kan se eller lukte, og som dreper. Ha CO-varsler hvis du bruker vedovn, peis eller gass.',
        },
        {
          type: 'warning',
          title: 'Brannfare',
          text: 'Strømbrudd gir flere branner, fordi folk tyr til levende lys. Sett lys i stabile, ikke-brennbare holdere, aldri i nærheten av gardiner, og gå aldri fra tente lys. Sjekk at røykvarslerne har batteri.',
        },
        {
          type: 'tip',
          title: 'Mobilen er gull',
          text: 'Mobilnettet kan falle ut etter noen timer når basestasjonene går tomme for reservestrøm. Spar batteriet: skru ned lysstyrken, slå på strømsparing og bruk telefonen bare når det trengs. Lad fra powerbank eller bilen.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Hold fryseren lukket', value: 'holder kulda 1–2 døgn' },
            { label: 'Kjøleskapet', value: 'holder kulda noen timer' },
            { label: 'Samles i', value: 'ett rom' },
          ],
        },
      ],
    },
    {
      id: 'vann',
      title: 'Vann – det viktigste av alt',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Vi klarer oss lenge uten mat, men bare noen få dager uten vann. Samtidig er vannforsyningen sårbar: Ved strømbrudd kan pumpestasjoner stoppe, og ved flom eller ledningsbrudd kan vannet bli forurenset. Derfor er vann det første du bør sikre.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Drikke og matlaging', value: '3 liter per person per døgn' },
            { label: 'For en uke', value: 'ca. 20 liter per person' },
            { label: 'Husdyr', value: 'beregn i tillegg' },
          ],
        },
        { type: 'h', text: 'Lagre vann fra springen' },
        {
          type: 'p',
          text: 'Det enkleste og billigste er å tappe vann fra springen. Norsk drikkevann er godt, og det holder seg lenge i rene beholdere som er fylt helt opp og står mørkt og kjølig.',
        },
        {
          type: 'list',
          items: [
            'Bruk rene flasker eller dunker beregnet for mat og drikke.',
            'Skyll grundig, og fyll helt opp så det er minst mulig luft.',
            'Skriv dato på beholderen.',
            'Oppbevar mørkt og kjølig, og bytt vannet jevnlig.',
          ],
        },
        {
          type: 'tip',
          title: 'Fyll opp når varselet kommer',
          text: 'Varsles det uvær eller planlagt utkobling, fyll i tillegg kjeler, bøtter og badekaret. Vannet i badekaret er godt å ha til toalettspyling og vask.',
        },
        { type: 'h', text: 'Når vannet kan være forurenset' },
        {
          type: 'p',
          text: 'Får du beskjed om kokevarsel fra kommunen, skal vannet kokes før du drikker det, pusser tennene med det eller bruker det i mat som ikke varmebehandles. Det er nok at vannet koker opp ordentlig. Avkjøl det med lokk på.',
        },
        {
          type: 'warning',
          text: 'Er vannet forurenset av kjemikalier, olje eller kloakk som følge av flom, hjelper ikke koking mot alt. Følg rådene fra kommunen, og bruk lagret vann.',
        },
      ],
    },
    {
      id: 'varsling-og-informasjon',
      title: 'Varsling og informasjon',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'I en krise er riktig informasjon like viktig som mat og vann. Rykter sprer seg raskt, særlig på sosiale medier. Lær deg hvordan myndighetene varsler, og hvor du finner pålitelig informasjon.',
        },
        { type: 'h', text: 'Sivilforsvarets tyfoner' },
        {
          type: 'p',
          text: 'Over hele landet står det tyfoner – lydsirener – som Sivilforsvaret bruker for å varsle befolkningen. Det finnes tre signaler, og alle bør kjenne dem.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Viktig melding – søk informasjon', value: '3 serier à 3 støt, ett minutts opphold mellom seriene' },
            { label: 'Flyalarm', value: 'Korte støt i ca. ett minutt' },
            { label: 'Faren over', value: 'Ett sammenhengende støt i ca. 30 sek.' },
          ],
        },
        {
          type: 'list',
          items: [
            'Viktig melding – søk informasjon: Søk informasjon på radio (NRK P1), TV, myndighetenes nettsider og sosiale medier. Følg rådene som gis. Signalet het tidligere «Viktig melding – lytt på radio».',
            'Flyalarm: Søk dekning med en gang – i nærmeste tilfluktsrom, kjeller eller et rom innerst i bygningen.',
            'Faren over: Den akutte faren er over. Fortsett å følge med på informasjon fra myndighetene.',
          ],
        },
        {
          type: 'tip',
          title: 'Testvarsling',
          text: 'Sivilforsvaret tester signalet «Viktig melding – søk informasjon» klokka 12 andre onsdag i januar og juni, samtidig som Nødvarsel på mobil testes. Bruk anledningen til å snakke med barna om hva lyden betyr.',
        },
        { type: 'h', text: 'Radio er beredskapskanalen' },
        {
          type: 'p',
          text: 'NRK har et særskilt ansvar for å formidle beredskapsinformasjon, og radio er det mest robuste mediet når strøm og nett svikter. Ha en DAB-radio som går på batteri, sveiv eller solcelle, og vit hvordan du finner NRK P1. Bilradioen fungerer også.',
        },
        {
          type: 'p',
          text: 'Andre kanaler er kommunens nettsider og sosiale medier, politiets meldinger og nyhetsmedier. Gjennom Nødvarsel på mobil kan myndighetene også sende varsler direkte til mobiltelefoner i et berørt område.',
        },
        { type: 'h', text: 'Nødnumre' },
        {
          type: 'facts',
          items: [
            { label: 'Brann', value: '110' },
            { label: 'Politi', value: '112' },
            { label: 'Medisinsk nødhjelp', value: '113' },
            { label: 'Legevakt', value: '116 117' },
            { label: 'Giftinformasjonen', value: '22 59 13 00' },
            { label: 'Politiet, ikke akutt', value: '02800' },
          ],
        },
        {
          type: 'warning',
          title: 'Hold nødlinjene åpne',
          text: 'Ring 110, 112 og 113 bare når liv, helse eller verdier er i fare. Ved store hendelser blir linjene raskt overbelastet. Spørsmål om situasjonen besvares på radio og hos kommunen.',
        },
      ],
    },
    {
      id: 'evakuering-og-tilfluktsrom',
      title: 'Evakuering og tilfluktsrom',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Noen ganger er det tryggest å bli hjemme. Andre ganger må du komme deg bort – fordi brann, flom, skred eller farlige utslipp truer. Da teller minuttene, og det som er pakket på forhånd, er det du får med deg.',
        },
        { type: 'h', text: 'Evakueringsbagen' },
        {
          type: 'p',
          text: 'Pakk en sekk per person som du kan ta med på to minutter. Den skal dekke det viktigste for de første 1–2 døgnene borte hjemmefra.',
        },
        {
          type: 'list',
          items: [
            'Medisiner, briller og eventuelle hjelpemidler.',
            'Kopi av viktige dokumenter: pass, førerkort, forsikring, resepter.',
            'Mobillader, powerbank og liten radio.',
            'Lykt, ekstra batterier og fyrstikker.',
            'Vann og noe energirik mat.',
            'Skift, ullundertøy, regntøy og sovepose eller teppe.',
            'Toalettsaker, våtservietter og litt kontanter.',
            'For barn: Kosedyr, bleier, morsmelkerstatning og noe å holde seg opptatt med.',
          ],
        },
        { type: 'h', text: 'Når du blir bedt om å evakuere' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Følg rådene fra politi og redningsetater – også om du synes det virker overdrevet.',
            'Ta med evakueringsbagen og husdyrene.',
            'Slå av komfyr og elektriske apparater, lukk vinduer og lås døra.',
            'Gi beskjed til naboer som kan trenge hjelp.',
            'Kjør eller gå den ruten myndighetene anviser, og meld fra til kommunen hvor du er.',
          ],
        },
        { type: 'h', text: 'Tilfluktsrom' },
        {
          type: 'p',
          text: 'Offentlige tilfluktsrom er bygget for å beskytte mot virkninger av krigshandlinger. De står normalt i fredsbruk, for eksempel som garasjer eller lager, og klargjøres når myndighetene bestemmer det. Kommunen informerer om hvor de er og når de åpner.',
        },
        {
          type: 'p',
          text: 'Det er ikke plass til alle i offentlige tilfluktsrom. Hører du flyalarm og ikke rekker et tilfluktsrom, søk dekning i kjeller eller i et rom innerst i bygningen, unna vinduer. Bli der til du hører «Faren over».',
        },
        {
          type: 'tip',
          title: 'Kjenn ditt nærområde',
          text: 'Finn ut nå hvor nærmeste offentlige tilfluktsrom er, og hvilket rom i ditt hjem som gir best beskyttelse. Det er mye lettere å vite det på forhånd enn å lete når sirenene går.',
        },
      ],
    },
    {
      id: 'familiens-beredskapsplan',
      title: 'Familiens beredskapsplan og krisekort',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Et lager uten plan er bare en hylle med ting. Planen er det som gjør at familien handler rolig og samordnet – også når dere ikke er sammen når krisen inntreffer.',
        },
        { type: 'h', text: 'Spørsmål dere bør svare på sammen' },
        {
          type: 'list',
          items: [
            'Hvor møtes vi hvis vi ikke kan ringe hverandre? Velg ett sted nær hjemmet og ett utenfor nabolaget.',
            'Hvem henter barna i barnehagen eller på skolen, og hvem er reserve?',
            'Hvem tar vi oss av? Eldre foreldre, naboer, noen med særskilte behov.',
            'Hvor er beredskapslageret, sikringsskapet og stoppekranen for vann?',
            'Hvem holder kontakt med slekt utenfor området, slik at alle kan melde seg til én person?',
          ],
        },
        { type: 'h', text: 'Krisekortet' },
        {
          type: 'p',
          text: 'Mobilen kan gå tom, og få husker telefonnumre utenat lenger. Lag et lite kort på papir til hvert familiemedlem, og legg det i lommebok, skolesekk og evakueringsbag.',
        },
        {
          type: 'list',
          items: [
            'Navn, adresse og fødselsdato.',
            'Telefonnumre til familien og en kontaktperson utenfor området.',
            'Møtested 1 og møtested 2.',
            'Allergier, sykdommer og faste medisiner.',
            'Nødnumrene 110, 112, 113 og legevakt 116 117.',
          ],
        },
        {
          type: 'tip',
          title: 'Øv litt',
          text: 'Gjør det til en kveldsaktivitet: Slå av strømmen i sikringsskapet en kveld og lev med lykter, kald mat og radio i noen timer. Dere oppdager raskt hva som mangler – og barna synes ofte det er stas.',
        },
        { type: 'h', text: 'Snakk med barna' },
        {
          type: 'p',
          text: 'Barn tåler sannheten bedre enn usikkerhet, så lenge den tilpasses alder. Forklar at dere forbereder dere slik man har brannøvelse på skolen: ikke fordi noe farlig skal skje, men fordi det er lurt å vite hva man gjør. Gi dem gjerne ansvar for egen sekk og egen lykt.',
        },
        {
          type: 'warning',
          title: 'Hold planen oppdatert',
          text: 'Nye telefonnumre, ny barnehage eller nye medisiner gjør planen utdatert. Gå gjennom den på samme sjekkdag som lageret.',
        },
      ],
    },
  ],
};
