/** Korte «dagens råd» som roterer på forsiden. */
export const tips: string[] = [
  'Fyll tomme brusflasker med springvann og merk dem med dato. Gratis, og det holder et år mørkt og kjølig.',
  'En full fryser holder kulden lenger enn en halvfull. Fyll tomrom med vannflasker — de blir også nødvann.',
  'Lær deg hvor hovedkranen for vann og sikringsskapet er. Skriv det på krisekortet.',
  'Ha kontanter i små sedler. Når betalingsterminalene er nede, er det få butikker som kan gi vekslepenger.',
  'Test røykvarsleren i dag. Det tar fem sekunder.',
  'Hodelykt slår lommelykt — du får begge hendene fri.',
  'Avtal et møtested med familien hvis dere ikke kommer hjem. Én plass i nærheten, én utenfor nabolaget.',
  'Kjøp det du faktisk spiser. Et beredskapslager som roteres i hverdagen, går aldri ut på dato.',
  'Last ned kart over nærområdet ditt for offline bruk i kartappen din.',
  'Lad strømbanken når du lader telefonen om kvelden én gang i måneden.',
  'Snakk med en eldre nabo om hvordan dere kan hjelpe hverandre hvis strømmen går.',
  'Gaffateip og kraftige søppelsekker løser overraskende mange problemer — fra nødtoalett til tette vinduer.',
  'Skru ned kjøleskapet og fryseren til riktig temperatur (4 °C og -18 °C). Det gir deg mer tid ved strømbrudd.',
  'Ullundertøy til hele familien er beredskap du også har glede av på tur.',
  'Skriv ned de viktigste telefonnumrene på papir. Mobilen kan gå tom før strømmen kommer tilbake.',
];

export function tipOfTheDay(now = new Date()): string {
  const start = new Date(now.getFullYear(), 0, 0);
  const day = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return tips[day % tips.length];
}
