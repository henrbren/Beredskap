# Beredskap

En egenberedskapsapp for norske husstander, laget i Expo / React Native. Appen fungerer **helt offline**. Ingen konto, og alle data blir liggende på telefonen.

> «Når det gjelder, vet du hva du gjør.»

## Funksjoner

| | |
|---|---|
| **I dag** | Beredskapsnivå i prosent, hvor mange døgn vann og mat rekker, neste rotasjon, kvartalssjekk, nødnumre med ett trykk og dagens råd. |
| **Lager** | Sjekkliste basert på DSBs råd, skalert etter husstanden (voksne, barn, kjæledyr og antall døgn). Du kan sette «bytt innen»-dato og få lokale påminnelser før noe går ut på dato. Knappen «Byttet ut nå» registrerer at du har rotert. Du kan også legge til egne varer. |
| **Hva hvis** | 19 handlingskort, for eksempel strømbrudd, flyalarm, atomhendelse, flom, hjertestans og brann. Hvert kort har «Ikke gjør dette», steg i tidsfaser som kan krysses av, fakta og en kobling til lageret. Det finnes også en visuell oversikt over Sivilforsvarets varselsignaler. |
| **Tilflukt** | En radar med kompass som viser nærmeste offentlige tilfluktsrom, med avstand, retning og gangtid. Den bruker GPS og lagrede data og trenger ikke mobilnett. Du får også råd for hva du gjør hvis du ikke rekker frem. |
| **Krisekort** | Møtested, kontakt utenbys, husstandens helseinformasjon, kontakter, hovedkran og sikringsskap. Kortet kan deles som tekst eller skrives ut / lagres som PDF. |
| **Kunnskap** | Et bibliotek med 8 bøker og 54 kapitler. *Grunnkurs i egenberedskap* er gratis. Resten hører til **Beredskap Pluss**: Vann, Førstehjelp, Mat, Varme/lys/strøm, Kommunikasjon, Overlevelse i naturen og Mental beredskap. |

## Design

Designspråket heter «feltmanual»: varmt papir og blekk, ett signaloransje (`#F2481B`), *Space Grotesk* til tekst og *JetBrains Mono* til etiketter. Tynne linjer og nummererte seksjoner (`01 — VANN ───`) går igjen, og beredskapsnivået vises som en instrumentlignende måler. Appen har lys og mørk modus. Fontene er bundlet, så de virker også offline.

## Kom i gang

```bash
npm install
npx expo start
```

Appen bruker `expo-notifications` og `expo-location`. Den virker i Expo Go, men til ekte påminnelser og kompass er en development build best:

```bash
npx expo run:ios        # eller run:android
# eller i skyen:
npx eas-cli@latest build --profile development
```

Nyttige kommandoer:

```bash
npm run typecheck        # tsc --noEmit
npm run lint             # expo lint
npm run fetch:shelters   # bundle DSBs tilfluktsromdata (se under)
```

## Tilfluktsrom-data

Kartet bruker DSBs åpne datasett over offentlige tilfluktsrom i GeoJSON-format, som er oppført på data.norge.no og Geonorge.

- Appen henter data første gang brukeren trykker «Last ned nå», og lagrer dem lokalt. Etter det virker radaren uten nett.
- `npm run fetch:shelters` legger et øyeblikksbilde i `assets/data/tilfluktsrom.json`, slik at dataene er med fra første oppstart. Kjør dette før hver release.
- Du kan overstyre kilden med `expo.extra.sheltersUrl` i `app.json`, eller med `SHELTERS_URL=… npm run fetch:shelters`.
- Parseren i `src/lib/shelters.ts` tåler både WGS84 og UTM (EPSG:258xx), og ulike feltnavn som `adresse`, `plasser` og `romnr`.

> ⚠️ Datakildene var ikke tilgjengelige fra byggemiljøet, så URL-ene og feltnavnene er ikke testet mot ekte data. Sjekk dem før lansering.

## Beredskap Pluss (betalt del)

`src/app/pluss.tsx` inneholder betalingsmuren. Kjøpet låser foreløpig bare opp lokalt, som en demo. Før lansering må `purchase()` kobles til ekte kjøp, for eksempel med [RevenueCat](https://www.revenuecat.com/) (`react-native-purchases`) eller `expo-iap`. Prisene i UI-et er plassholdere.

Nye bøker legger du til som en fil i `src/data/books/` og registrerer i `src/data/books/index.ts`. Formatet står i `src/data/types.ts`.

## Struktur

```
src/
  app/                  Expo Router-skjermer
    (tabs)/             I dag · Lager · Hva hvis · Tilflukt · Kunnskap
    scenario/[id]       Handlingskort
    bok/[id]            Bokoversikt
    kapittel/[book]/[chapter]
    krisekort(-rediger), vare, pluss, nodnumre, innstillinger, onboarding
  components/           UI-primitiver, fanelinje, måler, bokomslag
  data/                 Sjekkliste, scenarier, bøker, nødnumre, råd
  lib/                  Rotasjonsvarsler, beredskapsberegning, geo, tilfluktsrom, PDF
  store/                Zustand-state, lagret med AsyncStorage
  theme/                Farger, typografi, avstander
```

## Kilder og ansvar

Innholdet bygger på offentlige råd fra DSB (egenberedskap.no), Sivilforsvaret, Helsedirektoratet, DSA, Mattilsynet, FHI, NVE og Norsk førstehjelpsråd. Fagstoffet bør kvalitetssikres av en fagperson før lansering, særlig førstehjelpskapitlene. Appen erstatter ikke beskjeder fra myndighetene i en konkret krise.
