import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { forwardRef, useImperativeHandle, useMemo, useRef, useState, type ReactNode } from 'react';
import { Animated, PanResponder, Pressable, StyleSheet, Text, View, type LayoutChangeEvent } from 'react-native';

import type { IconName } from '@/data/types';
import { MAP_ATTRIBUTION, MAX_ZOOM, MIN_ZOOM, project, TILE_SIZE, tileSource, unproject } from '@/lib/tiles';
import type { Bounds } from '@/store/offline';
import { fonts, usePalette } from '@/theme';

export interface MapMarker {
  id: string;
  lat: number;
  lon: number;
  icon: IconName;
  color: string;
  label?: string;
  size?: 'sm' | 'md';
  onPress?: () => void;
}

export interface MapView {
  lat: number;
  lon: number;
  zoom: number;
  bounds: Bounds;
}

export interface TileMapHandle {
  setView: (lat: number, lon: number, zoom?: number) => void;
  zoomBy: (delta: number) => void;
  getView: () => MapView | null;
}

/**
 * Lightweight raster map (no native map SDK). Tiles come from the local
 * offline cache when available, otherwise from the network. Works the same
 * on iOS, Android and web.
 */
export const TileMap = forwardRef<
  TileMapHandle,
  {
    initial: { lat: number; lon: number; zoom: number };
    markers?: MapMarker[];
    user?: { lat: number; lon: number; heading?: number | null; accuracy?: number | null } | null;
    onViewChange?: (v: MapView) => void;
    onLongPress?: (p: { lat: number; lon: number }) => void;
    children?: ReactNode;
  }
>(function TileMap({ initial, markers = [], user, onViewChange, onLongPress, children }, ref) {
  const p = usePalette();
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [zoom, setZoom] = useState(Math.round(initial.zoom));
  const [center, setCenter] = useState(() => project(initial.lat, initial.lon, Math.round(initial.zoom)));
  const pan = useRef(new Animated.ValueXY()).current;
  const scale = useRef(new Animated.Value(1)).current;

  // Latest values for the responder callbacks.
  const state = useRef({ zoom, center, size });
  state.current = { zoom, center, size };

  const viewOf = (c: { x: number; y: number }, z: number, s = state.current.size): MapView => {
    const ll = unproject(c.x, c.y, z);
    const nw = unproject(c.x - s.w / 2, c.y - s.h / 2, z);
    const se = unproject(c.x + s.w / 2, c.y + s.h / 2, z);
    return { lat: ll.lat, lon: ll.lon, zoom: z, bounds: { north: nw.lat, west: nw.lon, south: se.lat, east: se.lon } };
  };

  const commit = (c: { x: number; y: number }, z: number) => {
    setCenter(c);
    setZoom(z);
    onViewChange?.(viewOf(c, z));
  };

  const changeZoom = (delta: number) => {
    const { zoom: z, center: c } = state.current;
    const nz = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, z + delta));
    if (nz === z) return;
    const ll = unproject(c.x, c.y, z);
    commit(project(ll.lat, ll.lon, nz), nz);
  };

  useImperativeHandle(ref, () => ({
    setView: (lat, lon, z) => {
      const nz = z ?? state.current.zoom;
      commit(project(lat, lon, nz), nz);
    },
    zoomBy: changeZoom,
    getView: () => (state.current.size.w ? viewOf(state.current.center, state.current.zoom) : null),
  }));

  const gesture = useRef({ startDist: 0, pinching: false, lastTap: 0, longTimer: null as ReturnType<typeof setTimeout> | null, moved: false });

  const responder = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: (e) => {
          const g = gesture.current;
          g.moved = false;
          g.pinching = false;
          const { locationX, locationY } = e.nativeEvent;
          if (g.longTimer) clearTimeout(g.longTimer);
          g.longTimer = setTimeout(() => {
            if (g.moved || g.pinching) return;
            const { center: c, zoom: z, size: s } = state.current;
            const ll = unproject(c.x - s.w / 2 + locationX, c.y - s.h / 2 + locationY, z);
            onLongPress?.(ll);
          }, 550);
        },
        onPanResponderMove: (e, gs) => {
          const g = gesture.current;
          const touches = e.nativeEvent.touches;
          if (Math.abs(gs.dx) + Math.abs(gs.dy) > 6) g.moved = true;
          if (touches.length >= 2) {
            const d = Math.hypot(touches[0].pageX - touches[1].pageX, touches[0].pageY - touches[1].pageY);
            if (!g.pinching) {
              g.pinching = true;
              g.startDist = d;
            }
            scale.setValue(Math.max(0.25, Math.min(4, d / g.startDist)));
            return;
          }
          if (!g.pinching) pan.setValue({ x: gs.dx, y: gs.dy });
        },
        onPanResponderRelease: (_, gs) => {
          const g = gesture.current;
          if (g.longTimer) clearTimeout(g.longTimer);
          const { center: c, zoom: z } = state.current;
          if (g.pinching) {
            // @ts-expect-error — _value is the current number of an Animated.Value
            const sc: number = scale._value ?? 1;
            scale.setValue(1);
            pan.setValue({ x: 0, y: 0 });
            changeZoom(Math.round(Math.log2(sc)));
            return;
          }
          if (!g.moved) {
            const now = Date.now();
            if (now - g.lastTap < 300) changeZoom(1);
            g.lastTap = now;
            return;
          }
          pan.setValue({ x: 0, y: 0 });
          commit({ x: c.x - gs.dx, y: c.y - gs.dy }, z);
        },
        onPanResponderTerminate: () => {
          pan.setValue({ x: 0, y: 0 });
          scale.setValue(1);
        },
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height } = e.nativeEvent.layout;
    setSize({ w: width, h: height });
    state.current.size = { w: width, h: height };
    onViewChange?.(viewOf(state.current.center, state.current.zoom, { w: width, h: height }));
  };

  const left = center.x - size.w / 2;
  const top = center.y - size.h / 2;
  const n = 2 ** zoom;
  const tiles: { key: string; x: number; y: number; uri: string }[] = [];
  if (size.w) {
    const tx0 = Math.floor(left / TILE_SIZE) - 1;
    const tx1 = Math.floor((left + size.w) / TILE_SIZE) + 1;
    const ty0 = Math.max(0, Math.floor(top / TILE_SIZE) - 1);
    const ty1 = Math.min(n - 1, Math.floor((top + size.h) / TILE_SIZE) + 1);
    for (let ty = ty0; ty <= ty1; ty++)
      for (let tx = tx0; tx <= tx1; tx++) {
        const wx = ((tx % n) + n) % n;
        tiles.push({ key: `${zoom}-${tx}-${ty}`, x: tx * TILE_SIZE - left, y: ty * TILE_SIZE - top, uri: tileSource(zoom, wx, ty) });
      }
  }

  const toScreen = (lat: number, lon: number) => {
    const w = project(lat, lon, zoom);
    return { x: w.x - left, y: w.y - top };
  };

  const transform = [{ translateX: pan.x }, { translateY: pan.y }, { scale }];
  const u = user ? toScreen(user.lat, user.lon) : null;
  const metersPerPx = user ? (156543.03392 * Math.cos((user.lat * Math.PI) / 180)) / n : 0;

  return (
    <View style={[styles.root, { backgroundColor: p.surfaceAlt }]} onLayout={onLayout}>
      <Animated.View style={[StyleSheet.absoluteFill, { transform }]} {...responder.panHandlers}>
        {tiles.map((t) => (
          <View
            key={`g-${t.key}`}
            style={{ position: 'absolute', left: t.x, top: t.y, width: TILE_SIZE, height: TILE_SIZE, borderColor: p.line, borderWidth: StyleSheet.hairlineWidth }}
          />
        ))}
        {tiles.map((t) => (
          <Image
            key={t.key}
            source={{ uri: t.uri }}
            style={{ position: 'absolute', left: t.x, top: t.y, width: TILE_SIZE, height: TILE_SIZE }}
            cachePolicy="disk"
            transition={120}
          />
        ))}
      </Animated.View>

      <Animated.View pointerEvents="box-none" style={[StyleSheet.absoluteFill, { transform }]}>
        {u && user?.accuracy && metersPerPx ? (
          <View
            pointerEvents="none"
            style={{
              position: 'absolute',
              left: u.x - user.accuracy / metersPerPx,
              top: u.y - user.accuracy / metersPerPx,
              width: (2 * user.accuracy) / metersPerPx,
              height: (2 * user.accuracy) / metersPerPx,
              borderRadius: 9999,
              backgroundColor: p.ice + '22',
              borderColor: p.ice + '55',
              borderWidth: 1,
            }}
          />
        ) : null}
        {markers.map((m) => {
          const s = toScreen(m.lat, m.lon);
          if (s.x < -60 || s.y < -60 || s.x > size.w + 60 || s.y > size.h + 60) return null;
          const d = m.size === 'sm' ? 22 : 30;
          return (
            <Pressable
              key={m.id}
              onPress={m.onPress}
              hitSlop={8}
              style={{ position: 'absolute', left: s.x - d / 2, top: s.y - d / 2, alignItems: 'center' }}>
              <View style={[styles.marker, { width: d, height: d, borderRadius: d / 2, backgroundColor: m.color, borderColor: p.surface }]}>
                <MaterialCommunityIcons name={m.icon} size={d * 0.55} color="#fff" />
              </View>
              {m.label && zoom >= 14 ? (
                <Text numberOfLines={1} style={[styles.markerLabel, { color: p.ink, backgroundColor: p.surface + 'E6' }]}>
                  {m.label}
                </Text>
              ) : null}
            </Pressable>
          );
        })}
        {u && user?.heading != null && (
          <View
            pointerEvents="none"
            style={{ position: 'absolute', left: u.x - 22, top: u.y - 22, width: 44, height: 44, alignItems: 'center', transform: [{ rotate: `${user.heading}deg` }] }}>
            <MaterialCommunityIcons name="menu-up" size={30} color={p.ice} style={{ marginTop: -10 }} />
          </View>
        )}
        {u && (
          <View
            pointerEvents="none"
            style={[styles.userDot, { left: u.x - 8, top: u.y - 8, backgroundColor: p.ice, borderColor: '#fff' }]}
          />
        )}
      </Animated.View>

      {children}

      <View pointerEvents="none" style={[styles.attribution, { backgroundColor: p.surface + 'CC' }]}>
        <Text style={{ fontFamily: fonts.mono, fontSize: 9, color: p.muted }}>{MAP_ATTRIBUTION}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: { flex: 1, overflow: 'hidden' },
  marker: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  markerLabel: {
    marginTop: 2,
    fontFamily: fonts.medium,
    fontSize: 11,
    paddingHorizontal: 4,
    borderRadius: 4,
    overflow: 'hidden',
    maxWidth: 140,
  },
  userDot: { position: 'absolute', width: 16, height: 16, borderRadius: 8, borderWidth: 2.5 },
  attribution: { position: 'absolute', right: 6, bottom: 4, paddingHorizontal: 5, paddingVertical: 1, borderRadius: 3 },
});
