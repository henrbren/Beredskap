import { router } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Linking, Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TAB_BAR_SPACE } from '@/components/screen';
import { TileMap, type MapMarker, type MapView, type TileMapHandle } from '@/components/tile-map';
import { Button, Field, Icon, IconButton, Row, Tap, Txt } from '@/components/ui';
import { compassLabel, bearing, distance, formatDistance } from '@/lib/geo';
import { haptic } from '@/lib/haptics';
import { useShelters } from '@/lib/shelters';
import { useLayout } from '@/lib/layout';
import { useLocation } from '@/lib/use-location';
import { useOffline, waypointKinds, type WaypointKind } from '@/store/offline';
import { fonts, radius, space, usePalette } from '@/theme';

const NORWAY = { lat: 64.5, lon: 13, zoom: 4 };

type Selected = { kind: 'shelter' | 'waypoint'; id: string } | null;

export default function Kart() {
  const p = usePalette();
  const insets = useSafeAreaInsets();
  const { wide } = useLayout();
  const mapRef = useRef<TileMapHandle>(null);
  const shelters = useShelters((s) => s.shelters);
  const waypoints = useOffline((s) => s.waypoints);
  const areas = useOffline((s) => s.areas);
  const lastView = useOffline((s) => s.lastMapView);
  const setLastView = useOffline((s) => s.setLastMapView);
  const addWaypoint = useOffline((s) => s.addWaypoint);
  const removeWaypoint = useOffline((s) => s.removeWaypoint);
  const { perm, fix, heading, request } = useLocation({ heading: true });
  const [view, setView] = useState<MapView | null>(null);
  const [layers, setLayers] = useState({ shelters: true, waypoints: true });
  const [selected, setSelected] = useState<Selected>(null);
  const [draft, setDraft] = useState<{ lat: number; lon: number; name: string; kind: WaypointKind } | null>(null);
  const followed = useRef(false);

  // Jump to the user the first time we get a fix (unless the map has been used before).
  const hadView = useRef(!!lastView);
  useEffect(() => {
    if (!fix || followed.current || hadView.current) return;
    followed.current = true;
    mapRef.current?.setView(fix.lat, fix.lon, 14);
  }, [fix]);

  const markers = useMemo(() => {
    const out: MapMarker[] = [];
    if (layers.shelters && view && view.zoom >= 11) {
      const b = view.bounds;
      for (const s of shelters) {
        if (s.lat > b.north || s.lat < b.south || s.lon < b.west || s.lon > b.east) continue;
        out.push({
          id: `s-${s.id}`,
          lat: s.lat,
          lon: s.lon,
          icon: 'shield-home',
          color: p.signal,
          size: 'sm',
          onPress: () => setSelected({ kind: 'shelter', id: s.id }),
        });
        if (out.length > 300) break;
      }
    }
    if (layers.waypoints) {
      for (const w of waypoints) {
        out.push({
          id: `w-${w.id}`,
          lat: w.lat,
          lon: w.lon,
          icon: waypointKinds[w.kind].icon,
          color: p.inverse,
          label: w.name,
          onPress: () => setSelected({ kind: 'waypoint', id: w.id }),
        });
      }
    }
    return out;
  }, [layers, view, shelters, waypoints, p]);

  const sel =
    selected?.kind === 'shelter'
      ? shelters.find((s) => s.id === selected.id)
      : selected?.kind === 'waypoint'
        ? waypoints.find((w) => w.id === selected.id)
        : undefined;

  const locate = async () => {
    if (perm !== 'granted' && !(await request())) return;
    if (fix) mapRef.current?.setView(fix.lat, fix.lon, Math.max(14, view?.zoom ?? 14));
  };

  const offlineHere = view && areas.some((a) => a.complete && view.lat <= a.bounds.north && view.lat >= a.bounds.south && view.lon >= a.bounds.west && view.lon <= a.bounds.east);

  return (
    <View style={{ flex: 1, backgroundColor: p.bg }}>
      <TileMap
        ref={mapRef}
        initial={lastView ?? NORWAY}
        markers={markers}
        user={fix ? { lat: fix.lat, lon: fix.lon, heading, accuracy: fix.accuracy } : null}
        onViewChange={(v) => {
          setView(v);
          setLastView({ lat: v.lat, lon: v.lon, zoom: v.zoom });
        }}
        onLongPress={(ll) => {
          haptic.select();
          setSelected(null);
          setDraft({ ...ll, name: '', kind: 'motested' });
        }}
      />

      {/* Top bar */}
      <View style={[styles.top, { paddingTop: insets.top + 8 }]} pointerEvents="box-none">
        <View style={[styles.pill, { backgroundColor: p.surface, borderColor: p.line }]}>
          <Icon name={offlineHere ? 'cloud-check-outline' : 'cloud-outline'} size={16} tone={offlineHere ? 'ok' : 'muted'} />
          <Txt variant="label" tone={offlineHere ? 'ok' : 'muted'}>
            {offlineHere ? 'Offline-kart' : 'Online-kart'}
          </Txt>
          {view && (
            <Txt variant="label" tone="muted">
              · Z{view.zoom}
            </Txt>
          )}
        </View>
        <Row gap={8}>
          <LayerChip on={layers.shelters} icon="shield-home" label="Tilflukt" onPress={() => setLayers((l) => ({ ...l, shelters: !l.shelters }))} />
          <LayerChip on={layers.waypoints} icon="map-marker-star" label="Mine" onPress={() => setLayers((l) => ({ ...l, waypoints: !l.waypoints }))} />
        </Row>
      </View>

      {/* Right controls */}
      <View style={[styles.controls, { top: insets.top + 64 }]} pointerEvents="box-none">
        <IconButton icon="plus" label="Zoom inn" onPress={() => mapRef.current?.zoomBy(1)} />
        <IconButton icon="minus" label="Zoom ut" onPress={() => mapRef.current?.zoomBy(-1)} />
        <IconButton icon="crosshairs-gps" label="Min posisjon" onPress={locate} />
        <IconButton icon="download-outline" label="Last ned kart" onPress={() =>
            router.push({ pathname: '/kart-omrader', params: view ? { b: JSON.stringify(view.bounds), z: String(view.zoom) } : {} })
          } />
        <IconButton icon="radar" label="Tilfluktsrom-radar" onPress={() => router.push('/radar')} />
      </View>

      {/* Bottom sheet */}
      <View style={[styles.bottom, wide ? styles.bottomWide : { bottom: TAB_BAR_SPACE + insets.bottom - 18 }]} pointerEvents="box-none">
        {draft ? (
          <View style={[styles.sheet, { backgroundColor: p.surface, borderColor: p.line }]}>
            <Row style={{ justifyContent: 'space-between' }}>
              <Txt variant="heading">Nytt punkt</Txt>
              <Tap onPress={() => setDraft(null)} hitSlop={10}>
                <Icon name="close" tone="muted" />
              </Tap>
            </Row>
            <Field label="Navn" value={draft.name} onChangeText={(name) => setDraft({ ...draft, name })} placeholder="F.eks. Møtested ved skolen" />
            <View style={styles.kinds}>
              {(Object.keys(waypointKinds) as WaypointKind[]).map((k) => {
                const on = draft.kind === k;
                return (
                  <Tap
                    key={k}
                    onPress={() => setDraft({ ...draft, kind: k })}
                    style={[styles.kind, { backgroundColor: on ? p.inverse : p.bg, borderColor: on ? p.inverse : p.line }]}>
                    <Icon name={waypointKinds[k].icon} size={14} color={on ? p.onInverse : p.ink} />
                    <Txt style={{ fontFamily: fonts.medium, fontSize: 13, color: on ? p.onInverse : p.ink }}>{waypointKinds[k].label}</Txt>
                  </Tap>
                );
              })}
            </View>
            <Button
              label="Lagre punkt"
              icon="map-marker-plus"
              small
              onPress={() => {
                addWaypoint({ lat: draft.lat, lon: draft.lon, kind: draft.kind, name: draft.name.trim() || waypointKinds[draft.kind].label });
                haptic.success();
                setDraft(null);
              }}
            />
          </View>
        ) : sel ? (
          <View style={[styles.sheet, { backgroundColor: p.surface, borderColor: p.line }]}>
            <Row style={{ alignItems: 'flex-start' }}>
              <View style={{ flex: 1, gap: 2 }}>
                <Txt variant="label" tone="signal">
                  {selected?.kind === 'shelter' ? 'Offentlig tilfluktsrom' : waypointKinds[(sel as { kind: WaypointKind }).kind].label}
                </Txt>
                <Txt variant="heading">{'address' in sel ? sel.address : sel.name}</Txt>
                <Txt variant="small" tone="muted">
                  {'capacity' in sel && sel.capacity ? `${sel.capacity} plasser · ` : ''}
                  {fix ? `${formatDistance(distance(fix, sel))} ${compassLabel(bearing(fix, sel))}` : `${sel.lat.toFixed(5)}, ${sel.lon.toFixed(5)}`}
                </Txt>
              </View>
              <Tap onPress={() => setSelected(null)} hitSlop={10}>
                <Icon name="close" tone="muted" />
              </Tap>
            </Row>
            <Row gap={8}>
              <Button
                label="Vis vei"
                icon="walk"
                small
                style={{ flex: 1 }}
                onPress={() => {
                  const url = Platform.select({
                    ios: `maps://?daddr=${sel.lat},${sel.lon}&dirflg=w`,
                    android: `geo:0,0?q=${sel.lat},${sel.lon}`,
                    default: `https://www.google.com/maps/dir/?api=1&destination=${sel.lat},${sel.lon}&travelmode=walking`,
                  });
                  Linking.openURL(url).catch(() => {});
                }}
              />
              {selected?.kind === 'waypoint' && (
                <Button
                  label="Slett"
                  icon="trash-can-outline"
                  variant="outline"
                  small
                  onPress={() => {
                    removeWaypoint(selected.id);
                    setSelected(null);
                  }}
                />
              )}
            </Row>
          </View>
        ) : (
          <View style={[styles.hint, { backgroundColor: p.surface + 'EE', borderColor: p.line }]}>
            <Icon name="gesture-tap-hold" size={16} tone="muted" />
            <Txt variant="small" tone="muted" style={{ flex: 1 }}>
              {view && view.zoom < 11 && layers.shelters ? 'Zoom inn for å se tilfluktsrom. ' : ''}
              Hold inne for å lagre et punkt — møtested, vannkilde, bil …
            </Txt>
          </View>
        )}
      </View>
    </View>
  );
}

function LayerChip({ on, icon, label, onPress }: { on: boolean; icon: 'shield-home' | 'map-marker-star'; label: string; onPress: () => void }) {
  const p = usePalette();
  return (
    <Tap onPress={onPress} style={[styles.pill, { backgroundColor: on ? p.inverse : p.surface, borderColor: on ? p.inverse : p.line }]}>
      <Icon name={icon} size={15} color={on ? p.onInverse : p.ink} />
      <Txt style={{ fontFamily: fonts.medium, fontSize: 13, color: on ? p.onInverse : p.ink }}>{label}</Txt>
    </Tap>
  );
}

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    paddingHorizontal: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    height: 36,
  },
  controls: { position: 'absolute', right: 14, gap: 8 },
  bottom: { position: 'absolute', left: 14, right: 14 },
  bottomWide: { bottom: 24, left: 24, right: undefined, width: 420 },
  sheet: { borderWidth: StyleSheet.hairlineWidth, borderRadius: radius.lg, padding: space.lg, gap: space.md },
  hint: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  kinds: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  kind: { flexDirection: 'row', alignItems: 'center', gap: 5, borderWidth: 1, borderRadius: radius.pill, paddingHorizontal: 10, paddingVertical: 6 },
});
