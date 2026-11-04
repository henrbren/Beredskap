# Beredskap

En egenberedskapsapp for norske husstander, laget i Expo / React Native. Appen fungerer **helt offline**. Ingen konto, og alle data blir liggende på telefonen.

> «Når det gjelder, vet du hva du gjør.»

## Funksjoner

Beredskap er en lommeutgave av [Project N.O.M.A.D.](https://github.com/Crosstalk-Solutions/project-nomad): bibliotek, kart, lokal AI, kurs og verktøy, alt på telefonen og uten nett.

| N.O.M.A.D. | Beredskap (mobil) |
|---|---|
| Kiwix (Wikipedia, oppslagsverk) | **Leksikon** med 160+ artikler om førstehjelp, vann, mat, ly, navigasjon, vær, samband og teknikk. Søk i fulltekst (BM25) på tvers av alt innhold. |
| ProtoMaps (offline-kart) | **Kart**: Kartverkets topografiske kart. Du kan laste ned områder for offline bruk, se tilfluktsrom-laget, lagre egne punkter (møtested, vannkilde, bil …) og se GPS-posisjon og kompassretning. |
| Ollama + Qdrant (lokal AI/RAG) | **Assistent**: en lokal språkmodell (llama.cpp via `llama.rn`) som svarer ut fra appens eget bibliotek. Uten modell svarer den med de mest relevante utdragene. |
| Kolibri (kurs) | **Kurs**: quiz til hver bok, med fremdrift og beredskapssertifikat. |
| Kommandosentral | **Offline-senter**: sjekkliste for «klar for offline», lagringsoversikt og nedlasting av kart og AI-modell. |

Appen har i tillegg disse delene:

| | |
|---|---|
| **I dag** | Beredskapsnivå, hvor mange døgn vann og mat rekker, hurtigverktøy (SOS, lykt, posisjon, kart), status for offline-klar, neste rotasjon og dagens råd. |
| **Hva hvis** | 19 handlingskort med «Ikke gjør dette», tidsfaser og avkrysning. |
| **Verktøy** | SOS-signal (blits, skjerm, lyd og fløyte), lommelykt (blits, hvitt eller rødt skjermlys, blink), min posisjon (grader og minutter, UTM og SMS, «les opp for 113»), kompass med kurslås, sol og lys (soloppgang, mørkt, månefase), morse (oversetter og blinking), kalkulatorer (vann og mat, strøm, omregning), arkiv (bilder av dokumenter og krisedagbok), lager, krisekort, tilfluktsrom-radar og nødnumre. |
| **Bibliotek** | Leksikon, bøker (grunnkurset er gratis, resten er Beredskap Pluss), kurs, søk og assistent. |

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

## Offline-kart

Kartet er en egen lett rasterkomponent (`src/components/tile-map.tsx`) uten native kart-SDK, og fungerer likt på iOS, Android og web. Flisene hentes fra Kartverkets åpne topografiske cache (CC BY 4.0). Nedlastede områder lagres i `Paths.document/kart` og brukes før nettet.

- Du kan overstyre kartkilden med `expo.extra.mapTileUrl` (`{z}/{x}/{y}`).
- ⚠️ URL-malen `https://cache.kartverket.no/v1/wmts/1.0.0/topo/default/webmercator/{z}/{y}/{x}.png` er ikke testet herfra fordi nettet var stengt. Sjekk den mot Kartverkets GetCapabilities før lansering.
- Følg Kartverkets vilkår for bruk. Nedlasting er begrenset til 25 000 fliser per område.

## Lokal AI

`src/lib/ai.ts` laster ned en GGUF-modell til `Paths.document/modeller` og kjører den med `llama.rn`. Assistenten bruker henting og generering (RAG): `src/lib/search.ts` finner de beste avsnittene i biblioteket, og modellen får beskjed om å svare bare ut fra dem.

- Modellene er Gemma 3 1B (cirka 0,8 GB) og Llama 3.2 3B (cirka 2 GB), begge Q4_K_M. Nedlastingsadressene er ikke testet herfra.
- `llama.rn` er en native modul. Den virker i en development build eller produksjonsbuild, ikke i Expo Go eller på web. Der faller assistenten tilbake til bibliotekssøk.

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
    (tabs)/             I dag · Hva hvis · Kart · Bibliotek · Verktøy
    scenario/[id]       Handlingskort
    bok/[id]            Bokoversikt
    kapittel/[book]/[chapter]
    krisekort(-rediger), vare, pluss, nodnumre, innstillinger, onboarding
  components/           UI-primitiver, fanelinje, måler, bokomslag
  data/                 Sjekkliste, scenarier, bøker, leksikon (articles/), kurs (quizzes/), nødnumre, råd
  lib/                  Søk (BM25), AI, kartfliser, geo/UTM, sol, morse, filer, rotasjonsvarsler, tilfluktsrom, PDF
  store/                Zustand-state, lagret med AsyncStorage
  theme/                Farger, typografi, avstander
```

## Kilder og ansvar

Innholdet bygger på offentlige råd fra DSB (egenberedskap.no), Sivilforsvaret, Helsedirektoratet, DSA, Mattilsynet, FHI, NVE og Norsk førstehjelpsråd. Fagstoffet bør kvalitetssikres av en fagperson før lansering, særlig førstehjelpskapitlene. Appen erstatter ikke beskjeder fra myndighetene i en konkret krise.
