import type { Book } from '../types';

export const book: Book = {
  id: 'vann',
  title: 'Vann',
  subtitle: 'Lagre, finne og rense drikkevann',
  description:
    'Alt du trenger å vite for å sikre husstanden rent vann når springen går tørr eller vannet ikke er trygt. Fra hvor mye du bør lagre og hvordan, til koking, rensetabletter, filtre og skjulte vannkilder i boligen – og hvordan dere holder hygienen oppe uten rennende vann.',
  icon: 'water',
  accent: 'ice',
  premium: true,
  chapters: [
    {
      id: 'hvor-mye-vann',
      title: 'Hvor mye vann trenger dere?',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Kroppen består for en stor del av vann, og vi taper vann hele tiden gjennom pust, svette og urin. Allerede et lite væsketap gir hodepine, tretthet og dårligere dømmekraft – akkurat det du ikke trenger i en krise.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Drikke og matlaging', value: '3 liter per person per døgn' },
            { label: 'Én uke, én person', value: 'ca. 20 liter' },
            { label: 'Én uke, familie på fire', value: 'ca. 84 liter' },
          ],
        },
        {
          type: 'p',
          text: 'De tre literne dekker drikke og enkel matlaging. Til personlig hygiene, oppvask og toalett går det mye mer. Har du plass, er det lurt å lagre ekstra vann til slike formål, eller ha en plan for å skaffe det.',
        },
        { type: 'h', text: 'Når behovet øker' },
        {
          type: 'list',
          items: [
            'Varmt vær og fysisk arbeid, som snømåking, rydding eller vedhogst.',
            'Feber, oppkast og diaré – da kan væsketapet bli stort.',
            'Gravide og ammende.',
            'Hvis maten er tørrmat som skal bløtlegges eller kokes, som ris, pasta og frysetørket turmat.',
          ],
        },
        { type: 'h', text: 'Ikke glem' },
        {
          type: 'list',
          items: [
            'Husdyr: En hund trenger daglig vann i forhold til størrelse og aktivitet. Beregn rikelig.',
            'Spedbarn som får morsmelkerstatning i pulverform: Pulveret må blandes med rent, kokt vann.',
            'Medisiner som skal tas med vann.',
          ],
        },
        {
          type: 'tip',
          title: 'Regn det ut',
          text: 'Gang antall personer med 3 liter og 7 dager, og rund opp. Det er minimum. Plusser du på 50 prosent, har du en buffer til hygiene og uforutsette behov.',
        },
        {
          type: 'warning',
          title: 'Ikke spar på drikkevannet',
          text: 'Har du vann, drikk det. Det er bedre å drikke nok i dag og skaffe mer i morgen, enn å gå dehydrert og ta dårlige valg. Spar heller på vann til vask og oppvask.',
        },
      ],
    },
    {
      id: 'lagre-springvann',
      title: 'Lagring av springvann',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Drikkevannet i Norge er blant det beste i verden, og det er også det billigste beredskapsvannet du kan få. Med rene beholdere og riktig oppbevaring holder det seg godt i lang tid.',
        },
        { type: 'h', text: 'Slik gjør du det' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Velg beholdere beregnet for mat og drikke: tomme brusflasker, vannflasker eller vanndunker for tur.',
            'Vask beholder og kork med varmt vann og litt oppvaskmiddel, og skyll grundig.',
            'La kaldtvannet renne en stund før du fyller, slik at du får friskt vann fra ledningen.',
            'Fyll helt opp til kanten, så det blir minst mulig luft igjen.',
            'Skru korken godt på, og skriv dato med tusj.',
            'Sett beholderne mørkt og kjølig – i kjeller, bod eller et kaldt skap.',
          ],
        },
        {
          type: 'facts',
          items: [
            { label: 'Oppbevaring', value: 'mørkt og kjølig' },
            { label: 'Fyllgrad', value: 'helt full' },
            { label: 'Bytt vannet', value: 'jevnlig, for eksempel to ganger i året' },
          ],
        },
        {
          type: 'warning',
          title: 'Unngå disse beholderne',
          text: 'Bruk aldri beholdere som har inneholdt kjemikalier, vaskemidler, olje eller bilprodukter – heller ikke etter grundig vask. Unngå også melkekartonger og -flasker, fordi melkerester er vanskelige å få helt bort.',
        },
        { type: 'h', text: 'Kjøpt flaskevann' },
        {
          type: 'p',
          text: 'Kjøpt vann på flaske har holdbarhetsdato og er praktisk, men dyrere og tar like mye plass. Mange kombinerer: noen kartonger kjøpevann som står urørt, og tappevann som skiftes jevnlig.',
        },
        {
          type: 'tip',
          title: 'Bruk det gamle vannet',
          text: 'Når du skifter vannet, ikke hell det ut. Bruk det til planter, til å vaske bilen eller til å fylle opp kjelen. Da føles det ikke som sløsing, og du blir mer motivert til å bytte ofte.',
        },
        {
          type: 'p',
          text: 'Smaker vannet litt flatt etter lang lagring, skyldes det ofte at oksygenet har gått ut av det. Hell det fram og tilbake mellom to rene kanner noen ganger, så får det friskere smak igjen.',
        },
      ],
    },
    {
      id: 'koking',
      title: 'Koking av vann',
      minutes: 4,
      blocks: [
        {
          type: 'p',
          text: 'Koking er den sikreste måten å gjøre vann fritt for sykdomsfremkallende mikroorganismer – bakterier, virus og parasitter. Det krever bare en kjele og en varmekilde.',
        },
        { type: 'h', text: 'Når skal vannet kokes?' },
        {
          type: 'list',
          items: [
            'Når kommunen har sendt ut kokevarsel.',
            'Når du bruker vann fra bekk, elv, innsjø eller annen kilde du ikke kjenner.',
            'Når vannforsyningen har vært avbrutt, og du er usikker på om vannet er rent når det kommer tilbake.',
            'Når du lager morsmelkerstatning til spedbarn.',
          ],
        },
        { type: 'h', text: 'Slik koker du vannet' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Er vannet grumsete, la det først bunnfelle seg og hell det klare vannet over i en ren kjele, eller sil det gjennom et rent klede.',
            'Kok opp vannet til det bobler kraftig. Det er nok at det når ordentlig koking.',
            'La vannet kjøle seg ned med lokk på.',
            'Oppbevar det kokte vannet i rene beholdere med lokk.',
          ],
        },
        {
          type: 'warning',
          title: 'Koking fjerner ikke kjemikalier',
          text: 'Koking dreper mikroorganismer, men fjerner ikke olje, drivstoff, tungmetaller eller andre kjemikalier. Mistenker du slik forurensning, for eksempel etter flom, skal vannet ikke drikkes.',
        },
        {
          type: 'tip',
          title: 'Spar brensel',
          text: 'Kok opp vannet en gang, og ha det kokende varme vannet rett over på en termos. Da har du vann til kaffe, te og frysetørket mat senere uten å bruke mer brensel.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Koketid', value: 'til det koker kraftig' },
            { label: 'Fjerner', value: 'bakterier, virus, parasitter' },
            { label: 'Fjerner ikke', value: 'kjemikalier og olje' },
          ],
        },
      ],
    },
    {
      id: 'rensing-og-filter',
      title: 'Klor, rensetabletter og filtre',
      minutes: 7,
      blocks: [
        {
          type: 'p',
          text: 'Har du ikke mulighet til å koke vannet, kan kjemisk rensing og filtre være gode alternativer. De er lette, tar lite plass, og hører hjemme både i beredskapslageret og i evakueringsbagen. Men de har svakheter du må kjenne til.',
        },
        { type: 'h', text: 'Rensetabletter og -dråper' },
        {
          type: 'p',
          text: 'Vannrensemidler for tur og beredskap inneholder vanligvis klor eller klordioksid, og selges på apotek og i sportsbutikker. De dreper bakterier og virus effektivt. Klordioksid virker i tillegg mot flere parasitter enn vanlig klor.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Bruk så klart vann som mulig. Sil eller bunnfell grumsete vann først.',
            'Dosér nøyaktig etter bruksanvisningen på pakningen.',
            'Vent hele virketiden før du drikker. Den varierer fra produkt til produkt, ofte fra en halv time til flere timer.',
            'Kaldt vann trenger ofte lengre virketid. Les pakningen.',
          ],
        },
        {
          type: 'warning',
          title: 'Ikke bland egne løsninger',
          text: 'Bruk produkter som er laget for å rense drikkevann, og følg doseringen. Vanlig klorin til rengjøring kan inneholde tilsetningsstoffer og ha ukjent styrke. Feil dosering kan gi helseskade eller for dårlig rensing.',
        },
        { type: 'h', text: 'Vannfiltre' },
        {
          type: 'p',
          text: 'Mekaniske vannfiltre presser vannet gjennom svært fine porer. Gode turfiltre fjerner bakterier og parasitter, men de fleste stopper ikke virus. Filtre med aktivt kull kan i tillegg bedre smak og lukt, og fjerne noen kjemikalier.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Koking', value: 'bakterier, virus, parasitter' },
            { label: 'Klor/klordioksid', value: 'bakterier, virus, (de fleste) parasitter' },
            { label: 'Mekanisk filter', value: 'bakterier, parasitter – sjelden virus' },
          ],
        },
        {
          type: 'tip',
          title: 'Kombiner',
          text: 'Den tryggeste løsningen uten koking er filter først, deretter rensetabletter. Filteret fjerner partikler og parasitter, tablettene tar virusene.',
        },
        { type: 'h', text: 'Vedlikehold av filteret' },
        {
          type: 'list',
          items: [
            'Hold skittent og rent vann adskilt – én dråpe urent vann i drikkeflaska ødelegger hele jobben.',
            'Tilbakespyl eller rengjør filteret etter produsentens anvisning.',
            'Beskytt filteret mot frost. Mange filtre blir ødelagt hvis vannet i dem fryser.',
            'Bytt filteret når produsenten sier det, eller når gjennomstrømningen blir svært dårlig.',
          ],
        },
      ],
    },
    {
      id: 'finne-vann',
      title: 'Finne vann i boligen og naturen',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Selv om lageret er tomt, finnes det ofte mer vann rundt deg enn du tror. Det gjelder å vite hvor du skal lete, og hvilket vann som kan drikkes og hvilket som bare egner seg til vask.',
        },
        { type: 'h', text: 'Varmtvannsberederen' },
        {
          type: 'p',
          text: 'En vanlig varmtvannsbereder rommer ofte 100–300 liter rent vann. Når vannforsyningen er brutt, er dette et av de største reservoarene i boligen.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Slå av strømmen til berederen i sikringsskapet. Kommer strømmen tilbake mens tanken er tom, kan varmeelementet bli ødelagt.',
            'Steng stoppekranen for kaldtvann inn i boligen, slik at forurenset vann ikke trekkes inn.',
            'Åpne en varmtvannskran et sted i huset for å slippe inn luft.',
            'Tapp vann fra tappeventilen nederst på berederen. Vannet kan være varmt – vær forsiktig.',
            'De første literne kan inneholde bunnfall. La dem renne i en bøtte og bruk dem til vask.',
          ],
        },
        {
          type: 'warning',
          text: 'Vannet i berederen er ikke ment som drikkevann over tid. Kok det før du drikker det, eller bruk det til matlaging og hygiene.',
        },
        { type: 'h', text: 'Andre kilder i huset' },
        {
          type: 'list',
          items: [
            'Toalettsisternen (tanken, ikke skålen): Godt vann til vask og spyling. Brukes det ikke toalettrens i tanken, kan det kokes og drikkes i en nødsituasjon.',
            'Vannrørene: Åpne den lavest plasserte kranen i huset, så renner vannet som står igjen i ledningene ut.',
            'Is i fryseren: Smeltede isbiter er rent vann.',
            'Hermetikk: Lake fra grønnsaker og fruktsaft er væske du kan bruke i matlaging.',
          ],
        },
        { type: 'h', text: 'Vann i naturen' },
        {
          type: 'p',
          text: 'I Norge er det sjelden langt til en bekk eller et vann. Selv om det ser rent ut, kan naturvann inneholde bakterier og parasitter fra dyr og mennesker. Behandle det alltid før du drikker.',
        },
        {
          type: 'list',
          items: [
            'Velg rennende vann fremfor stillestående, og hent oppstrøms fra bebyggelse, veier og beitedyr.',
            'Unngå vann med misfarging, oljefilm eller døde fisker.',
            'Snø og is kan smeltes, men skal behandles som naturvann. Velg ren, hvit snø.',
            'Regnvann samlet i rene beholdere er som regel godt, men bør kokes eller renses.',
          ],
        },
        {
          type: 'tip',
          title: 'Smelt snø i en kjele med litt vann',
          text: 'Snø i en tørr kjele kan svi seg fast og gi brent smak. Ha en skvett vann i bunnen før du fyller på snø, og tilsett litt og litt.',
        },
      ],
    },
    {
      id: 'hygiene-uten-vann',
      title: 'Hygiene uten rennende vann',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Når vannet forsvinner, er det ikke tørsten som først blir et problem – det er hygienen. Uvaskede hender og dårlig toaletthåndtering sprer magesykdom raskt i en husstand, og i en krise er det ekstra viktig å holde seg frisk.',
        },
        { type: 'h', text: 'Håndhygiene' },
        {
          type: 'list',
          items: [
            'Vask alltid hendene etter toalettbesøk, før matlaging og før måltider.',
            'Med lite vann: Bruk en kanne og hell litt vann over hendene, såp inn, og skyll med litt til. En liter rekker til mange håndvasker.',
            'Hånddesinfeksjon virker godt på hender som ikke er synlig skitne. Ved synlig skitt, vask med såpe først.',
            'Ha en egen håndkle per person, eller bruk tørkepapir.',
          ],
        },
        { type: 'h', text: 'Toalett uten vann' },
        {
          type: 'p',
          text: 'Toalettet kan brukes selv om vannet er borte, men det må håndteres riktig. Spyler du med en bøtte vann, risikerer du at det renner tilbake hvis avløpet også er påvirket.',
        },
        {
          type: 'list',
          ordered: true,
          items: [
            'Tøm toalettskålen så godt det går.',
            'Tre to kraftige søppelsekker over skålen, under setet.',
            'Etter bruk, strø over litt kattesand, sagflis eller torvstrø for å binde fukt og lukt.',
            'Knyt igjen posen når den er en tredjedel full, og legg den i en tett beholder med lokk ute eller i en kald bod.',
            'Følg kommunens råd om hvordan avfallet skal leveres.',
          ],
        },
        {
          type: 'tip',
          title: 'Lag et toalettsett nå',
          text: 'En pakke kraftige søppelsekker, en sekk kattesand, toalettpapir, våtservietter og hånddesinfeksjon i en bøtte med lokk. Det tar to minutter å kjøpe, og sparer dere for mye ubehag.',
        },
        { type: 'h', text: 'Kroppsvask og oppvask' },
        {
          type: 'list',
          items: [
            'En klut, et vaskefat og en liter lunkent vann holder til en god kroppsvask.',
            'Våtservietter er gode til ansikt, armhuler og underliv.',
            'Spis av engangstallerkener eller kle tallerkenene med matpapir, så sparer du oppvaskvann.',
            'Skyll oppvasken i brukt vaskevann først, og bruk rent vann bare til siste skylling.',
          ],
        },
        {
          type: 'warning',
          title: 'Ved magesykdom',
          text: 'Får noen oppkast eller diaré, hold den syke adskilt hvis mulig, gi rikelig å drikke, og vær ekstra nøye med håndvask for alle. Hånddesinfeksjon virker dårlig mot noen magevirus, så bruk såpe og vann når det er mulig.',
        },
      ],
    },
  ],
};
