import type { Book } from '../types';

export const book: Book = {
  id: 'kommunikasjon',
  title: 'Kommunikasjon & informasjon',
  subtitle: 'Hold kontakten og få riktig informasjon når nettet svikter',
  description:
    'I en krise er informasjon like viktig som mat og vann. Denne boka viser deg hvordan du holder kontakten når mobilnettet faller ut, hvor du får pålitelig informasjon fra myndighetene, og hvordan du lager en kommunikasjonsplan for familien – og avslører desinformasjon og svindel.',
  icon: 'radio-tower',
  accent: 'violet',
  premium: true,
  chapters: [
    {
      id: 'nar-mobilnettet-faller-ut',
      title: 'Når mobilnettet faller ut',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Mobilnettet er avhengig av strøm. Basestasjonene har reservestrøm, men den varer begrenset tid – ofte bare noen timer. Ved et langvarig strømbrudd, ekstremvær eller skade på fiberkabler kan dekningen bli ustabil eller forsvinne helt. Samtidig ringer alle på én gang, og nettet blir overbelastet.',
        },
        { type: 'h', text: 'Send SMS i stedet for å ringe' },
        {
          type: 'p',
          text: 'En SMS krever langt mindre kapasitet enn en samtale, og telefonen prøver å sende den på nytt automatisk. Derfor kommer tekstmeldinger ofte fram når samtaler ikke gjør det. Hold meldingene korte og konkrete, og la telefonlinjene være ledige for dem som trenger å ringe nødnumre.',
        },
        {
          type: 'list',
          items: [
            'Skriv kort: hvem du er, hvor du er, om alle er ok, og hva du planlegger.',
            'Eksempel: «Alle her ok. Vi blir hjemme i natt. Sjekker igjen kl. 18.»',
            'Unngå å sende bilder og video når nettet er presset.',
            'Avtal faste tidspunkter for å sjekke meldinger, så sparer alle batteri.',
          ],
        },
        { type: 'h', text: 'Spar på batteriet' },
        {
          type: 'list',
          items: [
            'Slå på strømsparingsmodus og demp skjermen.',
            'Slå av Bluetooth, posisjonstjenester og bakgrunnsoppdatering du ikke trenger.',
            'Når telefonen leter etter et svakt signal, tappes batteriet raskt. Ved dårlig eller ingen dekning: bruk flymodus og slå den av med jevne mellomrom for å hente meldinger.',
            'Hold telefonen varm – i kulde tømmes batteriet langt raskere.',
            'Lad fra strømbank eller bil mens du kan, ikke vent til batteriet er tomt.',
          ],
        },
        {
          type: 'tip',
          title: 'Nødsamtaler prøver alle nett',
          text: 'Ring nødnummer selv om du ikke har dekning på ditt eget nett. Nødsamtaler kan i mange tilfeller gå via en annen operatørs nett hvis det er tilgjengelig.',
        },
        {
          type: 'tip',
          title: 'Skriv ned viktige numre',
          text: 'Hvor mange telefonnumre kan du utenat? Ha en papirliste med numrene til familie, naboer, fastlege og arbeidsgiver i beredskapslageret og i lommeboka.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Kommer oftest fram', value: 'SMS' },
            { label: 'Reservestrøm i basestasjoner', value: 'begrenset, ofte timer' },
            { label: 'Batteri i kulde', value: 'tømmes raskere' },
          ],
        },
      ],
    },
    {
      id: 'radio-og-varsling',
      title: 'Radio og varsling',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Når strøm, internett og mobilnett svikter, er radioen ofte den eneste informasjonskilden som fortsatt virker. NRK har et særskilt beredskapsansvar og sender viktige meldinger fra myndighetene. NRK P1 er kanalen du skal lytte til i en krise.',
        },
        { type: 'h', text: 'Ha en radio som virker uten strøm' },
        {
          type: 'list',
          items: [
            'Velg en radio som går på batteri, sveiv eller solcelle – helst en kombinasjon.',
            'DAB gir best dekning i dag. En radio med både DAB og FM gir ekstra sikkerhet.',
            'Bilradioen virker også, og bilen er en god lytteplass ved strømbrudd.',
            'Test radioen jevnlig og ha ekstra batterier.',
            'Finn og lagre NRK P1 på forhånd, så du ikke må lete når det haster.',
          ],
        },
        { type: 'h', text: 'Tyfonsignalene' },
        {
          type: 'p',
          text: 'Sivilforsvaret har tyfoner (sirener) i mange byer og tettsteder. Signalet «Viktig melding – søk informasjon» testes klokka 12 andre onsdag i januar og juni, samtidig med test av Nødvarsel på mobil. Lær deg de tre signalene – det tar ett minutt.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Viktig melding – søk informasjon', value: '3 serier à 3 støt, ett minutts opphold mellom seriene' },
            { label: 'Flyalarm', value: 'korte støt i ca. ett minutt' },
            { label: 'Faren over', value: 'ett sammenhengende støt i ca. 30 sek.' },
          ],
        },
        {
          type: 'list',
          items: [
            'Viktig melding – søk informasjon: søk informasjon på radio (NRK P1), TV, myndighetenes nettsider og sosiale medier, og følg rådene som gis. Signalet het tidligere «Viktig melding – lytt på radio».',
            'Flyalarm: søk dekning straks – i tilfluktsrom, kjeller eller et rom uten vinduer midt i bygningen.',
            'Faren over: faren for angrep er over. Følg fortsatt med på informasjon fra myndighetene.',
          ],
        },
        { type: 'h', text: 'Nødvarsel på mobilen' },
        {
          type: 'p',
          text: 'Myndighetene kan sende nødvarsel direkte til alle mobiltelefoner i et område. Varselet kommer med en egen, kraftig lyd – også om telefonen står på lydløs. Les meldingen nøye og følg rådene. Nødvarselet viser til hvor du finner mer informasjon.',
        },
        {
          type: 'warning',
          title: 'Ikke ring nødnumrene for å spørre',
          text: 'Ved tyfonvarsel eller nødvarsel: ikke ring 110, 112 eller 113 for å få informasjon. Linjene må være ledige for dem som er i akutt fare. Lytt på radio og følg kommunens og myndighetenes kanaler.',
        },
      ],
    },
    {
      id: 'kommunen-og-myndighetene',
      title: 'Kommunen og myndighetene',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Kommunen har ansvaret for innbyggerne i en lokal krise. Den skal ha en beredskapsplan, varsle befolkningen og gi informasjon om hva som skjer og hva du skal gjøre. Det lønner seg å vite hvor kommunen publiserer informasjon før noe skjer.',
        },
        { type: 'h', text: 'Hvor kommer informasjonen?' },
        {
          type: 'list',
          items: [
            'Kommunens nettside – ofte med en egen krisebanner eller kriseside.',
            'Kommunens kontoer i sosiale medier.',
            'NRK og lokale medier, som formidler meldinger fra kommunen og politiet.',
            'Nødvarsel og SMS-varsling til innbyggere i et bestemt område.',
            'Politiets og nasjonale myndigheters offisielle kanaler.',
          ],
        },
        { type: 'h', text: 'Når nettet er nede: oppmøtesteder' },
        {
          type: 'p',
          text: 'Ved langvarige brudd i strøm og ekom etablerer mange kommuner fysiske informasjonspunkter, for eksempel på rådhuset, en skole, et bibliotek eller en brannstasjon. Der kan du få informasjon, varme deg, lade telefonen eller melde fra om behov for hjelp. Hvilke steder som brukes, varierer fra kommune til kommune.',
        },
        {
          type: 'tip',
          title: 'Finn ut nå',
          text: 'Sjekk kommunens nettside i dag: Hvor informerer kommunen i en krise? Finnes det planlagte informasjons- eller oppmøtepunkter? Skriv det ned og legg lappen i beredskapslageret.',
        },
        { type: 'h', text: 'Meld deg på varsling' },
        {
          type: 'p',
          text: 'Mange kommuner tilbyr varsling på SMS eller e-post, for eksempel om vannbrudd, flom eller stengte veier. Har du hytte, kan du ofte melde deg på varsling i hyttekommunen også.',
        },
        {
          type: 'list',
          items: [
            'Følg rådene fra myndighetene, også når de føles overdrevne.',
            'Del offisiell informasjon med naboer som ikke har nett eller radio.',
            'Kontakt kommunen hvis du eller noen du kjenner trenger hjelp og ikke klarer seg selv.',
          ],
        },
      ],
    },
    {
      id: 'nodnumre',
      title: 'Nødnumre – og hva som skjer når du ringer',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Nødnumrene er gratis og kan ringes fra alle telefoner. Det viktigste er å ringe – ikke å velge helt riktig nummer. Nødsentralene samarbeider og setter deg over til riktig etat ved behov.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Brann, røyk, ulykker med farlige stoffer', value: '110' },
            { label: 'Politi', value: '112' },
            { label: 'Medisinsk nødhjelp', value: '113' },
            { label: 'Legevakt (når det ikke haster like mye)', value: '116 117' },
            { label: 'Giftinformasjonen', value: '22 59 13 00' },
          ],
        },
        { type: 'h', text: 'Når du ringer' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Si hvor du er: adresse, sted, kommune. Nevn stedsnavn eller kjennemerker hvis du er ute.',
            'Si hva som har skjedd, og hvor mange som er berørt.',
            'Oppgi telefonnummeret du ringer fra.',
            'Svar på spørsmålene – operatøren leder samtalen. Spørsmålene forsinker ikke hjelpen; den sendes ofte mens dere snakker.',
            'Ikke legg på før operatøren sier det.',
            'Hold telefonen ledig etterpå, slik at nødsentralen kan ringe deg tilbake.',
          ],
        },
        {
          type: 'p',
          text: 'Mange smarttelefoner sender automatisk posisjonen din til nødsentralen når du ringer et nødnummer. Det er likevel viktig å si hvor du er, for posisjonen er ikke alltid nøyaktig.',
        },
        { type: 'h', text: 'Når du ringer 113' },
        {
          type: 'p',
          text: 'Du kommer til AMK-sentralen, der helsepersonell vurderer situasjonen og sender ambulanse, legebil eller luftambulanse. De kan veilede deg i førstehjelp, for eksempel hjerte-lunge-redning, helt til hjelpen er framme. Sett telefonen på høyttaler så du har hendene fri.',
        },
        {
          type: 'tip',
          title: 'Lær barna nødnumrene',
          text: 'Selv små barn kan lære at 113 er nummeret når noen er syke eller skadet, og at de skal si navnet sitt og adressen. Øv gjerne med en lek – og lær dem å låse opp mobilen til en voksen eller bruke nødanrop fra låseskjermen.',
        },
        {
          type: 'warning',
          title: 'Hvis linjen er opptatt',
          text: 'I en stor krise kan nødnumrene ha kø. Legg ikke på – du står i kø. Ring på nytt med en gang hvis samtalen brytes.',
        },
      ],
    },
    {
      id: 'familiens-kommunikasjonsplan',
      title: 'Familiens kommunikasjonsplan',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Kriser skjer sjelden når hele familien er samlet. Barna er på skolen, en er på jobb, en annen på reise. En enkel plan som alle kjenner, gjør at dere vet hva dere skal gjøre – selv om ingen får tak i hverandre.',
        },
        { type: 'h', text: 'Dette bør planen inneholde' },
        {
          type: 'list',
          items: [
            'Telefonnumre til alle i familien – på papir.',
            'En kontaktperson utenbys: Det er ofte lettere å nå noen i en annen landsdel enn lokalt. Alle melder seg til denne personen, som holder oversikten.',
            'Et møtested i nærområdet, for eksempel hos en nabo, hvis dere ikke kan være hjemme.',
            'Et møtested lenger unna, hvis hele nærområdet må evakueres.',
            'Hvem som henter barna, og hva skolen eller barnehagen gjør i en krise.',
            'Hvem som sjekker på eldre slektninger eller naboer.',
            'Hvordan dere tar med kjæledyr.',
          ],
        },
        {
          type: 'tip',
          title: 'Regelen når ingen svarer',
          text: 'Avtal hva som gjelder hvis dere ikke når hverandre: «Får vi ikke kontakt, møtes vi hjemme. Er hjemmet ikke tilgjengelig, møtes vi hos bestemor.» Enkle regler fungerer best under stress.',
        },
        { type: 'h', text: 'Lag et kontaktkort' },
        {
          type: 'p',
          text: 'Lag et lite kort til hvert familiemedlem med de viktigste numrene, møtestedene og eventuelle helseopplysninger. Barna kan ha det i sekken, de voksne i lommeboka. Ha en kopi i beredskapslageret.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Sett dere ned sammen og lag planen.',
            'Skriv den ned og del den med kontaktpersonen utenbys.',
            'Gå gjennom møtestedene – gjerne ved å gå dit.',
            'Oppdater planen når noe endrer seg: ny skole, ny jobb, nytt nummer.',
          ],
        },
        {
          type: 'facts',
          items: [
            { label: 'Kontaktperson', value: 'helst utenbys' },
            { label: 'Møtesteder', value: 'ett nært, ett lenger unna' },
            { label: 'Gjennomgang', value: 'minst én gang i året' },
          ],
        },
      ],
    },
    {
      id: 'kildekritikk-og-desinformasjon',
      title: 'Kildekritikk og desinformasjon',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'I en krise sprer rykter seg raskere enn fakta. Folk er redde, informasjonen er mangelfull, og alle vil hjelpe ved å dele. Noen sprer også bevisst falsk informasjon for å skape frykt, splittelse eller mistillit til myndighetene. Å være kildekritisk er en del av egenberedskapen.',
        },
        { type: 'h', text: 'Stopp – før du deler' },
        {
          type: 'list',
          items: [
            'Hvem står bak? Er det en offisiell kilde, en kjent redaksjon eller en ukjent konto?',
            'Når er det publisert? Gamle bilder og videoer deles ofte på nytt som om de var nye.',
            'Finner du det samme i flere uavhengige og pålitelige kilder?',
            'Spiller innholdet på sterke følelser – sinne, frykt, forargelse? Det er et varselsignal.',
            'Står det «del før det blir slettet»? Da er det grunn til ekstra skepsis.',
          ],
        },
        { type: 'h', text: 'Stol på de offisielle kanalene' },
        {
          type: 'p',
          text: 'Det er myndighetene som har oversikt og ansvar. Kommunen, politiet, nødetatene og NRK formidler offisielle råd. Er det sprik mellom det du ser i sosiale medier og det myndighetene sier, er det myndighetenes råd du skal følge.',
        },
        {
          type: 'warning',
          title: 'Falske bilder og stemmer',
          text: 'Det er blitt lett å lage overbevisende falske bilder, videoer og lydklipp med kunstig intelligens. En video av en kjent person eller et dramatisk bilde er ikke lenger bevis i seg selv.',
        },
        { type: 'h', text: 'Snakk med barn og eldre' },
        {
          type: 'p',
          text: 'Unge får mye av nyhetene sine fra sosiale medier, og eldre kan være mindre vant til manipulert innhold. Snakk sammen om hvor dere henter informasjon, og hjelp hverandre med å sjekke det som virker skremmende.',
        },
        {
          type: 'tip',
          title: 'Del det som hjelper',
          text: 'Det beste du kan dele i en krise, er offisielle råd og lenker til myndighetenes egne kanaler – ikke egne gjetninger eller ubekreftede rykter.',
        },
      ],
    },
    {
      id: 'svindel-i-krisetid',
      title: 'Digital sikkerhet og svindel',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Svindlere utnytter kriser. Når folk er stresset og leter etter informasjon eller vil hjelpe, er de lettere å lure. Typiske eksempler er falske innsamlinger, meldinger som utgir seg for å være fra myndigheter, banker eller strømselskaper, og tilbud om varer det er mangel på.',
        },
        { type: 'h', text: 'Vanlige svindelforsøk i krisetid' },
        {
          type: 'list',
          items: [
            'SMS eller e-post som ber deg klikke på en lenke for å «motta kompensasjon» eller «bekrefte opplysninger».',
            'Telefoner fra noen som sier de er fra banken, politiet eller et offentlig kontor og ber om koder.',
            'Falske innsamlingsaksjoner til ofre for krisen.',
            'Nettbutikker som selger aggregater, jodtabletter eller annet utstyr det er mangel på – og aldri leverer.',
            'Personer på døra som tilbyr hjelp mot forskuddsbetaling.',
          ],
        },
        {
          type: 'warning',
          title: 'Aldri del koder',
          text: 'Banken, politiet og offentlige etater ber deg aldri oppgi BankID-kode, passord eller engangskoder på telefon, SMS eller e-post. Blir du bedt om det, er det svindel. Legg på.',
        },
        { type: 'h', text: 'Slik beskytter du deg' },
        {
          type: 'list',
          items: [
            'Gå selv inn på nettsiden til avsenderen i stedet for å klikke på lenker.',
            'Gi til innsamlinger gjennom kjente, etablerte organisasjoner.',
            'Ta deg tid. Press og hastverk er svindlerens viktigste verktøy.',
            'Ha oppdatert programvare og bruk tofaktorinnlogging der det er mulig.',
            'Ta sikkerhetskopi av viktige bilder og dokumenter, også på et sted som ikke krever nett.',
          ],
        },
        {
          type: 'tip',
          title: 'Har du blitt lurt?',
          text: 'Kontakt banken din umiddelbart for å sperre kort og stoppe betalinger. Anmeld forholdet til politiet. Jo raskere du handler, jo større er sjansen for å begrense tapet.',
        },
      ],
    },
  ],
};
