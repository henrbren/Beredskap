/**
 * Sunrise/sunset and twilight from the NOAA solar position algorithm.
 * Handles midnight sun and polar night (returns null times).
 */
const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;

function julianDay(d: Date) {
  return d.getTime() / 86400000 + 2440587.5;
}

function solar(jd: number) {
  const t = (jd - 2451545) / 36525;
  const l0 = (280.46646 + t * (36000.76983 + t * 0.0003032)) % 360;
  const m = 357.52911 + t * (35999.05029 - 0.0001537 * t);
  const e = 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
  const c =
    Math.sin(rad(m)) * (1.914602 - t * (0.004817 + 0.000014 * t)) +
    Math.sin(rad(2 * m)) * (0.019993 - 0.000101 * t) +
    Math.sin(rad(3 * m)) * 0.000289;
  const trueLong = l0 + c;
  const omega = 125.04 - 1934.136 * t;
  const lambda = trueLong - 0.00569 - 0.00478 * Math.sin(rad(omega));
  const eps0 = 23 + (26 + (21.448 - t * (46.815 + t * (0.00059 - t * 0.001813))) / 60) / 60;
  const eps = eps0 + 0.00256 * Math.cos(rad(omega));
  const decl = deg(Math.asin(Math.sin(rad(eps)) * Math.sin(rad(lambda))));
  const y = Math.tan(rad(eps / 2)) ** 2;
  const eqTime =
    4 *
    deg(
      y * Math.sin(2 * rad(l0)) -
        2 * e * Math.sin(rad(m)) +
        4 * e * y * Math.sin(rad(m)) * Math.cos(2 * rad(l0)) -
        0.5 * y * y * Math.sin(4 * rad(l0)) -
        1.25 * e * e * Math.sin(2 * rad(m)),
    );
  return { decl, eqTime };
}

/** Returns minutes from UTC midnight for the event, or null if the sun never reaches that altitude. */
function eventUtcMinutes(date: Date, lat: number, lon: number, altitude: number, rising: boolean): number | null {
  const noon = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12));
  const { decl, eqTime } = solar(julianDay(noon));
  const cosH =
    (Math.sin(rad(altitude)) - Math.sin(rad(lat)) * Math.sin(rad(decl))) / (Math.cos(rad(lat)) * Math.cos(rad(decl)));
  if (cosH > 1 || cosH < -1) return null;
  const h = deg(Math.acos(cosH));
  const solarNoon = 720 - 4 * lon - eqTime;
  return rising ? solarNoon - 4 * h : solarNoon + 4 * h;
}

function toDate(date: Date, utcMinutes: number | null): Date | null {
  if (utcMinutes === null) return null;
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) + utcMinutes * 60000);
}

export interface SunTimes {
  sunrise: Date | null;
  sunset: Date | null;
  dawn: Date | null;
  dusk: Date | null;
  /** 'normal' | 'midnattssol' | 'mørketid' */
  kind: 'normal' | 'midnattssol' | 'morketid';
  daylightMinutes: number;
}

export function sunTimes(date: Date, lat: number, lon: number): SunTimes {
  const sunrise = toDate(date, eventUtcMinutes(date, lat, lon, -0.833, true));
  const sunset = toDate(date, eventUtcMinutes(date, lat, lon, -0.833, false));
  const dawn = toDate(date, eventUtcMinutes(date, lat, lon, -6, true));
  const dusk = toDate(date, eventUtcMinutes(date, lat, lon, -6, false));
  let kind: SunTimes['kind'] = 'normal';
  let daylightMinutes = sunrise && sunset ? (sunset.getTime() - sunrise.getTime()) / 60000 : 0;
  if (!sunrise || !sunset) {
    const noon = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), 12));
    const { decl } = solar(julianDay(noon));
    const up = Math.sign(lat) === Math.sign(decl);
    kind = up ? 'midnattssol' : 'morketid';
    daylightMinutes = up ? 1440 : 0;
  }
  return { sunrise, sunset, dawn, dusk, kind, daylightMinutes };
}

/** Moon illumination 0..1 and phase name (approximation, good to a few hours). */
export function moon(date: Date) {
  const synodic = 29.530588853;
  const ref = Date.UTC(2000, 0, 6, 18, 14);
  const age = ((((date.getTime() - ref) / 86400000) % synodic) + synodic) % synodic;
  const illum = (1 - Math.cos((2 * Math.PI * age) / synodic)) / 2;
  const names = ['Nymåne', 'Voksende månesigd', 'Første kvarter', 'Voksende måne', 'Fullmåne', 'Minkende måne', 'Siste kvarter', 'Minkende månesigd'];
  const name = names[Math.round((age / synodic) * 8) % 8];
  return { age, illum, name };
}
