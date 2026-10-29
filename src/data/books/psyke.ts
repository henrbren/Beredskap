import type { Book } from '../types';

export const book: Book = {
  id: 'psyke',
  title: 'Mental beredskap & familien',
  subtitle: 'Ta vare på hverandre før, under og etter en krise',
  description:
    'Kriser setter ikke bare strøm og vann på prøve – de setter oss mennesker på prøve. Denne boka handler om hvordan du forstår dine egne reaksjoner, snakker med barn om det som skjer, tar vare på sårbare rundt deg og vet når det er tid for å søke hjelp.',
  icon: 'head-heart',
  accent: 'violet',
  premium: true,
  chapters: [
    {
      id: 'normale-reaksjoner',
      title: 'Normale reaksjoner på unormale hendelser',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Når noe dramatisk skjer, reagerer kroppen og sinnet med en gang. Pulsen øker, sansene skjerpes, og vi blir klare til å handle. Dette er et gammelt og nyttig alarmsystem. De fleste reaksjoner vi får under og etter en krise, er normale – selv når de føles sterke og uvante.',
        },
        { type: 'h', text: 'Vanlige reaksjoner' },
        {
          type: 'list',
          items: [
            'Kropp: hjertebank, skjelving, kvalme, uro i magen, muskelspenninger, utmattelse.',
            'Følelser: frykt, uro, sinne, tristhet, skyld, nummenhet eller følelse av uvirkelighet.',
            'Tanker: vansker med å konsentrere seg, huske eller ta beslutninger. Bilder av det som skjedde dukker opp.',
            'Søvn: vansker med å sovne, tidlig oppvåkning, mareritt.',
            'Atferd: rastløshet, irritabilitet, tilbaketrekning eller et sterkt behov for å være nær andre.',
          ],
        },
        {
          type: 'p',
          text: 'Noen blir handlekraftige og rolige i selve krisen og reagerer først etterpå. Andre blir stive og handlingslammet en kort stund. Begge deler er vanlig og sier ingenting om hvor sterk du er.',
        },
        {
          type: 'tip',
          title: 'Pust deg ned',
          text: 'Når alarmen går i kroppen, hjelper rolig pust. Pust inn gjennom nesa, og pust lenger ut enn inn – for eksempel inn mens du teller til fire, ut mens du teller til seks. Gjenta noen minutter.',
        },
        { type: 'h', text: 'Forberedelse demper stress' },
        {
          type: 'p',
          text: 'Den som har tenkt gjennom hva som kan skje og hva man da skal gjøre, opplever oftere å ha kontroll. Det er en viktig grunn til å ha beredskapslager og en plan: de gir ikke bare vann og varme, men også trygghet.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Sterke reaksjoner i en krise', value: 'normalt' },
            { label: 'Reaksjoner etterpå', value: 'avtar vanligvis gradvis' },
            { label: 'Beste motgift mot uro', value: 'kunnskap og forberedelse' },
          ],
        },
      ],
    },
    {
      id: 'ro-og-rutiner',
      title: 'Ro, rutiner og fellesskap',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'I en langvarig krise er det de små tingene som holder oss oppe. Faste rutiner gir forutsigbarhet, og forutsigbarhet gir ro – særlig for barn, eldre og personer med psykiske plager.',
        },
        { type: 'h', text: 'Hold på hverdagen så godt det går' },
        {
          type: 'list',
          items: [
            'Stå opp og legg dere til faste tider.',
            'Spis måltidene til vanlig tid, selv om maten er enklere.',
            'Gi alle i familien oppgaver: hente vann, holde lyset, lage mat, sjekke på naboen.',
            'Kom deg ut i dagslys og beveg deg litt hver dag.',
            'Sett av tid til spill, lesing, fortelling eller musikk.',
          ],
        },
        {
          type: 'tip',
          title: 'Begrens nyhetsstrømmen',
          text: 'Det er viktig å holde seg oppdatert, men å følge nyhetene hele tiden øker uroen. Avtal faste tidspunkter for å høre nyhetene, for eksempel morgen og kveld, og skru av mellom.',
        },
        { type: 'h', text: 'Fem ting som hjelper i en krise' },
        {
          type: 'p',
          text: 'Forskning på kriser peker på noen felles faktorer som hjelper mennesker gjennom det vanskelige:',
        },
        {
          type: 'list',
          items: [
            'Trygghet: å vite at man er i sikkerhet, eller hva man gjør for å bli det.',
            'Ro: å få dempet de sterkeste reaksjonene.',
            'Tilhørighet: å være sammen med og få støtte fra andre.',
            'Mestring: å kunne gjøre noe selv – for seg selv og andre.',
            'Håp: å tro at det vil bli bedre.',
          ],
        },
        {
          type: 'warning',
          title: 'Alkohol er en dårlig hjelper',
          text: 'Det kan være fristende å dempe uroen med alkohol, men det gir dårligere søvn, svekket dømmekraft og økt risiko for ulykker og konflikter. Vær ekstra forsiktig i en krise.',
        },
      ],
    },
    {
      id: 'snakke-med-barn',
      title: 'Snakke med barn om kriser',
      minutes: 7,
      blocks: [
        {
          type: 'p',
          text: 'Barn merker langt mer enn voksne tror. Når de ikke får forklaring, fyller de hullene med egen fantasi, og det de forestiller seg, er ofte verre enn virkeligheten. Det beste du kan gjøre, er å snakke ærlig, enkelt og rolig.',
        },
        { type: 'h', text: 'Grunnreglene' },
        {
          type: 'list',
          items: [
            'Spør først hva barnet vet og har hørt.',
            'Fortell sannheten – tilpasset alder, men ikke pyntet på.',
            'Bruk konkrete ord og korte setninger.',
            'Si hva voksne gjør for å passe på dem.',
            'Det er lov å si «Det vet jeg ikke, men jeg skal prøve å finne ut av det».',
            'Vis gjerne at du også er lei deg eller redd, men at du har kontroll.',
            'Gjenta samtalen – barn bearbeider i porsjoner og spør igjen.',
          ],
        },
        { type: 'h', text: 'Tilpass til alderen' },
        {
          type: 'list',
          items: [
            'Småbarn (0–5 år): trenger mest nærhet, ro og faste rutiner. Kortest mulige forklaringer. Kan bli mer klengete eller gå tilbake i utvikling en periode.',
            'Barn i skolealder (6–12 år): forstår mer og stiller konkrete spørsmål. Gi faktabaserte svar og konkrete oppgaver. Lek og tegning er ofte måten de bearbeider på.',
            'Ungdom (13+): får informasjon fra sosiale medier og venner. Snakk som med en voksen, ta bekymringene på alvor, og hjelp dem å vurdere kildene.',
          ],
        },
        {
          type: 'tip',
          title: 'La barna hjelpe til',
          text: 'Barn som får være med og pakke beredskapslageret, sjekke lommelyktene eller lære nødnumrene, opplever mestring i stedet for maktesløshet. Gjør beredskap til noe dere gjør sammen.',
        },
        {
          type: 'warning',
          title: 'Skjerm små barn mot bilder',
          text: 'Dramatiske bilder og videoer kan feste seg hos barn. Unngå at nyhetssendinger går på TV eller radio i bakgrunnen når små barn er til stede. Se heller nyheter for barn sammen med dem, og snakk om det etterpå.',
        },
        {
          type: 'p',
          text: 'Det er vanlig at barn får søvnvansker, blir urolige eller leker det som har skjedd igjen og igjen. Vær tålmodig. Hvis reaksjonene ikke avtar, eller barnet endrer seg mye over tid, kan du kontakte helsestasjonen, skolehelsetjenesten eller fastlegen.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Viktigst for de minste', value: 'nærhet og rutiner' },
            { label: 'Alarmtelefonen for barn og unge', value: '116 111' },
            { label: 'Grunnregel', value: 'ærlig, enkelt, rolig' },
          ],
        },
      ],
    },
    {
      id: 'sarbare-naboer',
      title: 'Eldre og sårbare naboer',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'I en krise vil nødetatene og kommunen ha mer enn nok å gjøre. Da er naboer ofte de første og viktigste hjelperne. Eldre som bor alene, personer med funksjonsnedsettelser og de som er avhengige av strøm til medisinsk utstyr, er særlig utsatt.',
        },
        { type: 'h', text: 'Hvem kan trenge hjelp?' },
        {
          type: 'list',
          items: [
            'Eldre som bor alene, særlig de med nedsatt bevegelighet eller hukommelse.',
            'Personer som bruker strømavhengig medisinsk utstyr, som oksygenkonsentrator.',
            'Personer med syns- eller hørselshemming, som kan gå glipp av varsler.',
            'Familier med nyfødte eller syke barn.',
            'Personer som ikke forstår norsk godt.',
          ],
        },
        { type: 'h', text: 'Slik kan du hjelpe' },
        {
          type: 'list',
          items: [
            'Bli kjent med naboene før noe skjer, og bytt telefonnumre.',
            'Bank på og sjekk at de har det bra – særlig ved kulde og strømbrudd.',
            'Del varme, mat, vann eller lys hvis du har mer enn nok.',
            'Formidle informasjon fra myndighetene til dem som ikke har radio eller nett.',
            'Hjelp med å kontakte kommunen, hjemmetjenesten eller fastlegen.',
          ],
        },
        {
          type: 'tip',
          title: 'Lag en nabolagsavtale',
          text: 'Snakk med naboene om hvem som har vedovn, aggregat eller ekstra vann, og hvem som kan trenge hjelp. En enkel liste over hvem som sjekker på hvem, gjør stor forskjell når det gjelder.',
        },
        {
          type: 'warning',
          title: 'Kulde rammer eldre hardt',
          text: 'Eldre kan bli nedkjølt innendørs uten å merke det selv. Kjenner en eldre seg uvanlig forvirret, slapp eller kald, kan det være et tegn på nedkjøling. Ring 113 ved tegn på akutt sykdom.',
        },
      ],
    },
    {
      id: 'sorg-og-etterreaksjoner',
      title: 'Sorg og etterreaksjoner',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Når krisen er over, starter for mange den egentlige bearbeidingen. Det er vanlig å få reaksjoner i dagene og ukene etterpå – også om man klarte seg godt mens det sto på. For de fleste avtar reaksjonene gradvis med tid, støtte og hvile.',
        },
        { type: 'h', text: 'Vanlige etterreaksjoner' },
        {
          type: 'list',
          items: [
            'Påtrengende minner, bilder eller lyder fra hendelsen.',
            'Søvnvansker og mareritt.',
            'Økt vaktsomhet: lett for å skvette, uro ved lyder og lukter som minner om det som skjedde.',
            'Unngåelse av steder, situasjoner eller samtaler.',
            'Skyldfølelse – også når man ikke har gjort noe galt.',
            'Tristhet, irritabilitet og konsentrasjonsvansker.',
          ],
        },
        { type: 'h', text: 'Det som hjelper' },
        {
          type: 'list',
          items: [
            'Snakk om det som skjedde – med noen du stoler på, i ditt eget tempo.',
            'Kom tilbake til hverdagens rutiner gradvis.',
            'Sov, spis og beveg deg så godt du klarer.',
            'Vær tålmodig med deg selv og hverandre. Folk reagerer ulikt og i ulikt tempo.',
            'Unngå å ta store beslutninger rett etter en krise hvis du kan.',
          ],
        },
        { type: 'h', text: 'Sorg' },
        {
          type: 'p',
          text: 'Å miste noen eller noe – et menneske, et hjem, en trygghet – gir sorg. Sorg er ikke en sykdom, men en naturlig reaksjon på tap. Den kommer ofte i bølger og kan vare lenge. Det finnes ingen riktig måte å sørge på.',
        },
        {
          type: 'tip',
          title: 'Til deg som står ved siden av',
          text: 'Du trenger ikke ha de riktige ordene. Vær til stede, lytt, og tilby konkret hjelp: lage mat, hente barn, følge til lege. Ta kontakt også etter noen uker – da har ofte de fleste andre trukket seg tilbake.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Etterreaksjoner', value: 'vanlige og normale' },
            { label: 'For de fleste', value: 'avtar med tiden' },
            { label: 'Viktigste støtte', value: 'mennesker rundt deg' },
          ],
        },
      ],
    },
    {
      id: 'nar-soke-hjelp',
      title: 'Når skal du søke hjelp?',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Det er et tegn på styrke, ikke svakhet, å søke hjelp. Mange kommuner har et psykososialt kriseteam som kan bistå etter alvorlige hendelser, og som ofte nås via legevakten. Fastlegen er også en god første kontakt.',
        },
        { type: 'h', text: 'Tegn på at du bør søke hjelp' },
        {
          type: 'list',
          items: [
            'Reaksjonene avtar ikke etter noen uker, eller de blir sterkere.',
            'Du klarer ikke å fungere i hverdagen, på jobb eller i familien.',
            'Du sover svært dårlig over lang tid.',
            'Du bruker alkohol, piller eller andre rusmidler for å dempe følelsene.',
            'Du føler deg nedstemt, håpløs eller har tanker om at livet ikke er verdt å leve.',
            'Et barn endrer seg markant og over tid.',
          ],
        },
        {
          type: 'facts',
          items: [
            { label: 'Akutt fare for liv', value: '113' },
            { label: 'Legevakt', value: '116 117' },
            { label: 'Mental Helse hjelpetelefon', value: '116 123' },
            { label: 'Alarmtelefonen for barn og unge', value: '116 111' },
            { label: 'Ikke-akutt', value: 'fastlegen' },
          ],
        },
        {
          type: 'warning',
          title: 'Ved selvmordstanker',
          text: 'Har du eller noen du kjenner tanker om å ta livet sitt, si det høyt til noen. Ring legevakten på 116 117, eller 113 hvis det er akutt fare. Mental Helses hjelpetelefon 116 123 er åpen hele døgnet for den som trenger noen å snakke med.',
        },
        {
          type: 'tip',
          title: 'Spør rett ut',
          text: 'Er du bekymret for noen, spør direkte hvordan de har det – og om de har tanker om å skade seg selv. Å spørre øker ikke risikoen. Det viser at du bryr deg, og åpner for hjelp.',
        },
      ],
    },
    {
      id: 'familiens-beredskapsplan',
      title: 'Lag familiens beredskapsplan sammen',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'En beredskapsplan som hele familien har vært med på å lage, er mye mer verdt enn en perfekt plan bare én person kjenner. Når alle vet hva de skal gjøre, blir det mindre kaos og mindre frykt. Og selve arbeidet med planen er god mental beredskap.',
        },
        { type: 'h', text: 'Slik gjør dere det' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Sett av en kveld. Gjør det hyggelig – med mat og god tid.',
            'Snakk om hvilke kriser som er mest aktuelle der dere bor: strømbrudd, uvær, flom, skred, bortfall av vann.',
            'Bli enige om møtesteder og en kontaktperson utenbys.',
            'Fordel oppgaver: hvem har ansvar for vann, lys, mat, førstehjelp og kjæledyr?',
            'Gå gjennom beredskapslageret sammen og fyll på det som mangler.',
            'Skriv ned planen og heng den på et sted alle ser den.',
            'Øv: ha en kveld uten strøm, og se hva som fungerer.',
          ],
        },
        { type: 'h', text: 'Husk de spesielle behovene' },
        {
          type: 'list',
          items: [
            'Faste medisiner: ha et lite ekstra lager etter avtale med lege, og en oversikt over hva hver enkelt bruker.',
            'Hjelpemidler: briller, høreapparat, batterier, og reserveløsninger for strømavhengig utstyr.',
            'Spedbarn: morsmelkerstatning, bleier og varme.',
            'Kjæledyr: mat, vann og bur eller bånd.',
            'Viktige dokumenter: kopier av pass, forsikring og helseopplysninger i en vanntett pose.',
          ],
        },
        {
          type: 'tip',
          title: 'Gjør det til en tradisjon',
          text: 'Velg en fast anledning hvert år – for eksempel når dere skifter til vintertid – til å gå gjennom planen, bytte batterier og sjekke lageret. Da blir beredskap en vane, ikke et prosjekt.',
        },
        {
          type: 'facts',
          items: [
            { label: 'DSB anbefaler egenberedskap for', value: 'én uke' },
            { label: 'Gjennomgang av planen', value: 'minst én gang i året' },
            { label: 'Hvem skal være med', value: 'hele familien' },
          ],
        },
      ],
    },
  ],
};
