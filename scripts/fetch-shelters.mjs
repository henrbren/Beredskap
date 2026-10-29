#!/usr/bin/env node
/**
 * Henter DSBs datasett over offentlige tilfluktsrom og lagrer et komprimert
 * øyeblikksbilde i assets/data/tilfluktsrom.json, slik at appen har dataene
 * offline fra første oppstart.
 *
 *   npm run fetch:shelters
 *   SHELTERS_URL=<egen GeoJSON-url> npm run fetch:shelters
 *
 * Datasettet er åpne data fra DSB (se Geonorge: «Tilfluktsrom - offentlige»).
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const url =
  process.env.SHELTERS_URL ??
  'https://raw.githubusercontent.com/dsb-norge/static-share/master/shelters.json';
// Alternativ kilde (DSBs WFS):
//  'https://ogc.dsb.no/wfs.ashx?SERVICE=WFS&VERSION=2.0.0&REQUEST=GetFeature&TYPENAMES=layer_340&OUTPUTFORMAT=application/json&SRSNAME=EPSG:4326';

const res = await fetch(url);
if (!res.ok) {
  console.error(`Klarte ikke å hente ${url}: HTTP ${res.status}`);
  process.exit(1);
}
const json = await res.json();
const features = (json.features ?? []).filter((f) => f?.geometry);
if (!features.length) {
  console.error('Datasettet inneholdt ingen tilfluktsrom — sjekk URL/lagnavn.');
  process.exit(1);
}

// Behold bare feltene appen bruker, for å holde bundlen liten.
const slim = {
  type: 'FeatureCollection',
  crs: json.crs,
  features: features.map((f, i) => {
    const p = Object.fromEntries(Object.entries(f.properties ?? {}).map(([k, v]) => [k.toLowerCase(), v]));
    return {
      type: 'Feature',
      id: f.id ?? i,
      geometry: f.geometry,
      properties: {
        adresse: p.adresse ?? p.address ?? p.navn,
        plasser: p.plasser ?? p.antallplasser ?? p.kapasitet,
        romnr: p.romnr ?? p.romnummer,
      },
    };
  }),
};

const out = fileURLToPath(new URL('../assets/data/tilfluktsrom.json', import.meta.url));
await writeFile(out, JSON.stringify(slim));
console.log(`Lagret ${slim.features.length} tilfluktsrom → ${out}`);
