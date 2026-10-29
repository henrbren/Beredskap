import type { Book } from '../types';

export const book: Book = {
  id: 'mat',
  title: 'Matlager & matsikkerhet',
  subtitle: 'Mat for en uke – trygt, godt og uten strøm',
  description:
    'Hvordan du bygger et matlager familien faktisk liker, holder det ferskt med enkel rotasjon, og tar vare på maten i kjøleskap og fryser når strømmen går. Med råd om matlaging uten strøm, barn, allergier og kjæledyr – og en ferdig ukesmeny du kan handle etter.',
  icon: 'food-variant',
  accent: 'amber',
  premium: true,
  chapters: [
    {
      id: 'hvor-mye-mat',
      title: 'Hvor mye mat trenger dere?',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'I en krise handler mat om mer enn å bli mett. Riktig mengde energi holder deg varm, gir overskudd og gjør at du tenker klart. Og kjent, god mat gir trygghet – særlig for barn.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Voksen kvinne', value: 'ca. 2000–2200 kcal per døgn' },
            { label: 'Voksen mann', value: 'ca. 2500–2800 kcal per døgn' },
            { label: 'Planleggingstall per voksen', value: 'ca. 2000–2500 kcal' },
          ],
        },
        {
          type: 'p',
          text: 'Tallene over gjelder voksne med moderat aktivitet. Barn trenger mindre totalt, men mye per kilo kroppsvekt, og tenåringer i vekst kan trenge like mye som voksne. I kulde og ved hardt fysisk arbeid øker behovet betydelig.',
        },
        { type: 'h', text: 'Velg energitett mat' },
        {
          type: 'p',
          text: 'Når lagringsplassen er begrenset, lønner det seg å velge mat med mye energi per kilo. Tørrvarer, nøtter, peanøttsmør, olje og sjokolade gir mye næring på liten plass. Hermetikk inneholder mye vann og er tyngre, men krever til gjengjeld lite vann og ingen koking.',
        },
        {
          type: 'list',
          items: [
            'Karbohydrater: Knekkebrød, havregryn, pasta, ris, poteter i pose, müsli.',
            'Proteiner: Hermetisk fisk og kjøtt, bønner, linser, nøtter, peanøttsmør, langtidsholdbar melk.',
            'Fett: Olje, nøtter, makrell i tomat, sardiner.',
            'Vitaminer: Hermetisk frukt og grønnsaker, tørket frukt, juice på kartong.',
            'Trivsel: Sjokolade, kjeks, kaffe, te, kakao og favorittsnacks.',
          ],
        },
        {
          type: 'tip',
          title: 'Lagre det dere spiser',
          text: 'Det beste matlageret består av mat dere allerede liker og bruker. En krise er ikke tidspunktet for å oppdage at ingen i familien spiser linsegryte.',
        },
        {
          type: 'warning',
          title: 'Saltet mat krever vann',
          text: 'Mye salt mat, som spekemat, salte kjeks og ferdigsupper, øker tørsten. Har dere begrenset med vann, velg mat med mindre salt og vær forsiktig med mengden.',
        },
      ],
    },
    {
      id: 'holdbarhet-og-datoer',
      title: 'Holdbar mat og datomerking',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Det meste av beredskapsmaten finner du i en vanlig dagligvarebutikk. Nøkkelen er å velge mat som tåler romtemperatur, og å forstå hva datoene på pakningen faktisk betyr.',
        },
        { type: 'h', text: 'Mat som holder seg' },
        {
          type: 'list',
          items: [
            'Hermetikk: Fisk, kjøtt, bønner, grønnsaker, supper og frukt. Holder seg lenge i uskadde bokser.',
            'Tørrvarer: Ris, pasta, havregryn, mel, knekkebrød, couscous og linser.',
            'Langtidsholdbart: UHT-melk, plantedrikk og juice på kartong.',
            'Tørket og frysetørket mat: Turmat, tørket frukt, nøtter.',
            'Pålegg som tåler romtemperatur: Peanøttsmør, syltetøy, honning, leverpostei på boks, makrell i tomat.',
          ],
        },
        { type: 'h', text: '«Best før» og «siste forbruksdag»' },
        {
          type: 'p',
          text: 'Mattilsynet skiller tydelig mellom de to merkingene, og forskjellen er viktig for et beredskapslager.',
        },
        {
          type: 'facts',
          items: [
            { label: '«Best før»', value: 'Kvalitet. Ofte trygt etter datoen.' },
            { label: '«Siste forbruksdag»', value: 'Sikkerhet. Skal ikke spises etter datoen.' },
          ],
        },
        {
          type: 'p',
          text: '«Best før» brukes på holdbar mat, og betyr at produsenten garanterer kvaliteten fram til datoen, gitt riktig oppbevaring. Etter datoen kan smak og konsistens bli dårligere, men maten er ofte helt fin. Se, lukt og smak. «Siste forbruksdag» brukes på lett bedervelige varer som ferskt kjøtt og fisk. Etter denne datoen kan maten være helseskadelig selv om den ser og lukter normalt.',
        },
        {
          type: 'warning',
          title: 'Kast bokser som er skadet',
          text: 'Hermetikkbokser som buler ut, lekker, er sterkt rustne eller har dype bulker i skjøtene, skal kastes. Det samme gjelder bokser som freser eller spruter når de åpnes.',
        },
        {
          type: 'tip',
          title: 'Sjekk tørrvarene',
          text: 'Mel, gryn og ris kan få skadedyr som melmøll. Oppbevar tørrvarer i tette bokser med lokk, så holder de seg bedre og er beskyttet mot fukt og mus.',
        },
      ],
    },
    {
      id: 'rotasjon-og-lagring',
      title: 'Rotasjon og lagringsforhold',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Et matlager som ikke brukes, blir et matlager som kastes. Med enkel rotasjon blir lageret en naturlig del av husholdningen – og alltid ferskt.',
        },
        { type: 'h', text: 'Først inn, først ut' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Merk varene med kjøpsmåned med tusj når du pakker ut.',
            'Sett det nye bakerst, og flytt det eldste fram.',
            'Bruk fra fronten i hverdagsmatlagingen.',
            'Skriv opp det du tar, og kjøp det inn igjen ved neste handel.',
          ],
        },
        {
          type: 'tip',
          title: 'Beredskapsmiddag en gang i måneden',
          text: 'Lag en middag bare fra lageret én gang i måneden. Da roterer dere varene, og dere finner ut hvilke retter som faktisk fungerer – og hva som mangler.',
        },
        { type: 'h', text: 'Gode lagringsforhold' },
        {
          type: 'facts',
          items: [
            { label: 'Temperatur', value: 'kjølig, stabilt' },
            { label: 'Lys', value: 'mørkt' },
            { label: 'Fukt', value: 'tørt' },
          ],
        },
        {
          type: 'list',
          items: [
            'Varme forkorter holdbarheten. Unngå loft og steder nær ovner og varmtvannsbereder.',
            'Fukt gir rust på bokser og mugg i tørrvarer. Unngå fuktige kjellere uten ventilasjon.',
            'Lys bryter ned vitaminer og fett. Mørke skap er best.',
            'Plasser lageret på hyller, ikke rett på gulvet, i tilfelle vannlekkasje.',
          ],
        },
        {
          type: 'warning',
          title: 'Unngå frost på hermetikk og drikke',
          text: 'Hermetikk og kartonger i en kald bod eller garasje kan fryse og sprekke. Ha lageret innenfor husets varme del, eller sjekk at temperaturen holder seg over null.',
        },
        {
          type: 'p',
          text: 'Del gjerne opp lageret: Hovedlageret står på et fast sted, mens en mindre del med lett mat ligger klar ved evakueringsbagen.',
        },
      ],
    },
    {
      id: 'kjoleskap-og-fryser',
      title: 'Kjøleskap og fryser under strømbrudd',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Et strømbrudd betyr ikke at maten i kjøleskap og fryser må kastes. Med noen enkle grep, og riktige vurderinger etterpå, kan det meste reddes.',
        },
        { type: 'h', text: 'Hold dørene lukket' },
        {
          type: 'p',
          text: 'Den viktigste regelen er enkel: Åpne kjøleskap og fryser så lite som mulig. Hver gang døra åpnes, slipper kulda ut.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Kjøleskap, lukket', value: 'holder kulda noen timer' },
            { label: 'Full fryser, lukket', value: 'ca. 1–2 døgn' },
            { label: 'Halvfull fryser', value: 'kortere tid' },
            { label: 'Kjøleskap, anbefalt', value: '4 °C eller lavere' },
            { label: 'Fryser, normal', value: '−18 °C eller lavere' },
          ],
        },
        { type: 'h', text: 'Prioriter riktig' },
        {
          type: 'list',
          ordered: true,
          items: [
            'Spis først den mest lettbedervelige maten fra kjøleskapet: rester, fersk fisk, kjøttdeig, fersk kylling og meieriprodukter.',
            'Er det kaldt ute, kan du flytte mat til en kald bod, balkong eller en kjølebag i skyggen – godt beskyttet mot dyr og sol.',
            'La fryseren stå lukket. Legg gjerne et teppe over for ekstra isolasjon, men ikke dekk til motor og kjølegitter.',
            'Mat som begynner å tine i fryseren, kan lages og spises.',
          ],
        },
        { type: 'h', text: 'Når strømmen kommer tilbake' },
        {
          type: 'list',
          items: [
            'Mat som fortsatt har iskrystaller eller har holdt kjøleskapstemperatur, kan fryses ned igjen. Kvaliteten kan bli noe dårligere.',
            'Råvarer som har tint helt, bør tilberedes – deretter kan den ferdige retten fryses.',
            'Lettbedervelig mat som har stått i romtemperatur over lengre tid, bør kastes.',
            'Is, kremer og ferdigretter med fløte eller egg som har tint, bør ikke fryses igjen.',
          ],
        },
        {
          type: 'warning',
          title: 'Er du i tvil, kast det',
          text: 'Mange bakterier som gir matforgiftning, verken lukter eller smaker. Vær ekstra varsom med kylling, kjøttdeig, fisk, skalldyr og rester – og med mat til barn, gravide, eldre og syke.',
        },
        {
          type: 'tip',
          title: 'Fyll fryseren med vann',
          text: 'Tomme plasser i fryseren kan fylles med plastflasker med vann. En full fryser holder kulda lenger, og du har is til kjølebagen og ekstra drikkevann når den tiner.',
        },
      ],
    },
    {
      id: 'matlaging-uten-strom',
      title: 'Matlaging uten strøm',
      minutes: 6,
      blocks: [
        {
          type: 'p',
          text: 'Varm mat er godt for både kropp og humør. Uten strøm trenger du en alternativ varmekilde – og den må brukes trygt.',
        },
        { type: 'h', text: 'Alternativer' },
        {
          type: 'list',
          items: [
            'Stormkjøkken eller primus med rødsprit eller gass: Tradisjonelt turutstyr som fungerer godt også innendørs med god lufting.',
            'Gassbluss for camping: Effektivt, men krever god ventilasjon.',
            'Vedovn med kokeplate eller flat topp: Gir både varme og matlaging.',
            'Bålpanne eller grill: Bare utendørs, på trygg avstand fra bygninger.',
          ],
        },
        {
          type: 'warning',
          title: 'Aldri grill innendørs',
          text: 'Kullgrill, gassgrill og engangsgrill skal aldri brukes innendørs, i garasje, i telt eller under tak. De produserer karbonmonoksid, som kan drepe på kort tid. Ha CO-varsler der du bruker ved eller gass.',
        },
        {
          type: 'list',
          items: [
            'Bruk stormkjøkken og primus på et stabilt, ikke-brennbart underlag.',
            'Hold barn og husdyr på trygg avstand.',
            'Fyll aldri på brensel mens brenneren er varm eller tent.',
            'Ha brannteppe eller brannslukker innen rekkevidde.',
            'Luft godt under og etter matlaging.',
          ],
        },
        { type: 'h', text: 'Spar brensel' },
        {
          type: 'list',
          items: [
            'Bruk lokk på kjelen – det sparer mye energi.',
            'Velg mat med kort koketid: hurtigris, couscous, nudler, havregryn og frysetørket mat.',
            'Bløtlegg pasta, linser og gryn på forhånd, så koker de raskere.',
            'Kok opp, og la retten trekke ferdig i en termos eller en isolert kasse.',
          ],
        },
        {
          type: 'tip',
          title: 'Lag en kokekasse',
          text: 'Kok opp grøt, ris eller gryte, sett kjelen med lokk ned i en eske og pakk den godt inn i dyner eller ulltepper. Maten koker ferdig av sin egen varme i løpet av noen timer – nesten uten brensel.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Brensel', value: 'nok til minst ett varmt måltid per dag i en uke' },
            { label: 'Fyrstikker', value: 'i tett pose, flere steder' },
          ],
        },
      ],
    },
    {
      id: 'spesielle-behov',
      title: 'Barn, allergier og kjæledyr',
      minutes: 5,
      blocks: [
        {
          type: 'p',
          text: 'Et standard matlager passer ikke alle. Har dere små barn, matallergier, spesielle dietter eller dyr i huset, må lageret tilpasses – og det er de som har minst marginer som bør planlegges først.',
        },
        { type: 'h', text: 'Spedbarn og småbarn' },
        {
          type: 'list',
          items: [
            'Ammer du, er morsmelk den tryggeste maten i en krise. Sørg for at du selv får nok mat og drikke.',
            'Ferdigblandet, flytende morsmelkerstatning krever verken vann eller koking, og er ideell i beredskapslageret.',
            'Pulvererstatning må blandes med rent vann som er kokt opp og avkjølt. Beregn vann og brensel til dette.',
            'Ha nok barnemat på glass eller pose, smokker, flasker og rengjøringsutstyr for en uke.',
            'Småbarn trenger kjent mat. Lagre favorittene: grøt, knekkebrød, fruktmos og pålegg de liker.',
          ],
        },
        {
          type: 'warning',
          title: 'Hygiene ved barnemat',
          text: 'Flasker og smokker må rengjøres grundig, også når vannet er knapt. Ferdigblandet erstatning som er åpnet og ikke brukt opp, skal ikke spares til senere uten kjøling.',
        },
        { type: 'h', text: 'Allergier og dietter' },
        {
          type: 'list',
          items: [
            'Lagre trygge alternativer i egen kasse, tydelig merket.',
            'Les ingredienslister på hermetikk og ferdigmat – mange inneholder melk, gluten, egg eller nøtter.',
            'Har noen i familien alvorlig allergi, sørg for ekstra adrenalinpenn og annen nødvendig medisin.',
            'Diabetikere trenger stabil tilgang på mat, druesukker og medisiner. Planlegg ekstra nøye.',
          ],
        },
        { type: 'h', text: 'Kjæledyr' },
        {
          type: 'list',
          items: [
            'Fôr til minst en uke, gjerne tørrfôr i tett beholder.',
            'Ekstra vann til dyrene.',
            'Kattesand, poser, bånd, transportbur og eventuelle medisiner.',
            'Et kort med dyrets navn, ID-merking og veterinær i evakueringsbagen.',
          ],
        },
        {
          type: 'tip',
          title: 'Eldre i familien',
          text: 'Eldre som bor alene, har ofte lite mat hjemme og kan ha vanskelig for å lage mat uten strøm. Avtal med dem nå hvem som tar kontakt i en krise, og hjelp dem gjerne å sette sammen et lite lager.',
        },
      ],
    },
    {
      id: 'ukesmeny',
      title: 'Ukesmeny for en familie',
      minutes: 7,
      blocks: [
        {
          type: 'p',
          text: 'Her er en ferdig ukesmeny for en familie på fire – to voksne og to skolebarn – uten strøm og kjøleskap. All maten tåler romtemperatur, og det trengs bare ett kokebluss. Bruk den som utgangspunkt, og bytt ut det familien ikke liker.',
        },
        {
          type: 'facts',
          items: [
            { label: 'Personer', value: '2 voksne, 2 barn' },
            { label: 'Varme måltider', value: '1 per dag' },
            { label: 'Kokeutstyr', value: 'ett bluss og en kjele' },
          ],
        },
        { type: 'h', text: 'Fast frokost og lunsj' },
        {
          type: 'list',
          items: [
            'Frokost: Havregrøt kokt på vann med rosiner og kanel, eller müsli med UHT-melk. Juice fra kartong.',
            'Lunsj: Knekkebrød med makrell i tomat, leverpostei på boks, peanøttsmør eller syltetøy.',
            'Mellommåltider: Nøtter, tørket frukt, kjeks, hermetisk frukt og sjokolade.',
          ],
        },
        { type: 'h', text: 'Middager' },
        {
          type: 'list',
          items: [
            'Mandag: Pasta med kjøttsaus av hermetisk kjøttdeig og tomatsaus.',
            'Tirsdag: Lapskaus eller ferdig gryte på boks, servert med knekkebrød.',
            'Onsdag: Tacogryte med bønner, hermetisk mais og tomat i tortillalefser.',
            'Torsdag: Ris med kylling i boks og karrisaus.',
            'Fredag: Fiskeboller i hvit saus med poteter i pose eller ris.',
            'Lørdag: Hjemmelaget pizza i stekepanne – tortillalefse, tomatsaus, tunfisk og langtidsholdbar ost.',
            'Søndag: Pølser i boks med potetmos av pulver og hermetiske erter.',
          ],
        },
        { type: 'h', text: 'Handleliste for uka' },
        {
          type: 'list',
          items: [
            '2 kg havregryn og 1 pakke müsli',
            '2 pakker knekkebrød og 2 pakker tortillalefser',
            '1 kg pasta og 1 kg ris',
            '6 bokser makrell i tomat og 3 bokser leverpostei',
            '1 glass peanøttsmør og 1 glass syltetøy',
            'Middagshermetikk: kjøttdeig, lapskaus, kylling, fiskeboller, tunfisk og pølser',
            'Tomatsaus, karrisaus, 2 bokser bønner, mais og erter',
            '1 pose potetmospulver og 1 pose poteter i pose',
            '8 liter UHT-melk og 4 liter juice på kartong',
            'Rosiner, tørket frukt, nøtter, kjeks og sjokolade',
            'Kaffe, te, kakao, salt, sukker og olje',
          ],
        },
        {
          type: 'tip',
          title: 'Varm drikke er verdt brenselet',
          text: 'En kopp kakao eller te om kvelden gjør underverker for stemningen i et kaldt hus. Kok opp vann til hele familien på en gang og hell det på termos.',
        },
        {
          type: 'warning',
          title: 'Tilpass mengdene',
          text: 'Menyen er et eksempel. Tenåringer og voksne i fysisk arbeid spiser mer, små barn mindre. Sjekk at den samlede mengden dekker familiens energibehov, og husk vann til matlaging i tillegg til drikkevann.',
        },
      ],
    },
  ],
};
