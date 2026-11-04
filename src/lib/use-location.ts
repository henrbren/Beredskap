import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { Platform } from 'react-native';

export interface Fix {
  lat: number;
  lon: number;
  accuracy: number | null;
  altitude: number | null;
  at: number;
}

export type Permission = 'unknown' | 'granted' | 'denied';

/**
 * GPS position (+ compass heading) that works without mobile network.
 * Watching starts once permission is granted.
 */
export function useLocation(opts: { heading?: boolean; precise?: boolean } = {}) {
  const [perm, setPerm] = useState<Permission>('unknown');
  const [fix, setFix] = useState<Fix | null>(null);
  const [heading, setHeading] = useState<number | null>(null);

  useEffect(() => {
    Location.getForegroundPermissionsAsync()
      .then((r) => setPerm(r.granted ? 'granted' : r.canAskAgain ? 'unknown' : 'denied'))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (perm !== 'granted') return;
    let alive = true;
    let posSub: Location.LocationSubscription | undefined;
    let headSub: Location.LocationSubscription | undefined;
    const toFix = (l: Location.LocationObject): Fix => ({
      lat: l.coords.latitude,
      lon: l.coords.longitude,
      accuracy: l.coords.accuracy ?? null,
      altitude: l.coords.altitude ?? null,
      at: l.timestamp,
    });
    (async () => {
      const last = await Location.getLastKnownPositionAsync().catch(() => null);
      if (last && alive) setFix((f) => f ?? toFix(last));
      posSub = await Location.watchPositionAsync(
        {
          accuracy: opts.precise ? Location.Accuracy.BestForNavigation : Location.Accuracy.Balanced,
          distanceInterval: opts.precise ? 2 : 10,
        },
        (l) => alive && setFix(toFix(l)),
      ).catch(() => undefined);
      if (opts.heading && Platform.OS !== 'web') {
        headSub = await Location.watchHeadingAsync((h) => {
          const v = h.trueHeading >= 0 ? h.trueHeading : h.magHeading;
          setHeading((prev) => (prev === null || Math.abs(prev - v) > 1.5 ? v : prev));
        }).catch(() => undefined);
      }
    })();
    return () => {
      alive = false;
      posSub?.remove();
      headSub?.remove();
    };
  }, [perm, opts.heading, opts.precise]);

  const request = async () => {
    const r = await Location.requestForegroundPermissionsAsync();
    setPerm(r.granted ? 'granted' : 'denied');
    return r.granted;
  };

  return { perm, fix, heading, request };
}
