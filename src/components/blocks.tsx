import { StyleSheet, View } from 'react-native';

import type { BookBlock } from '@/data/types';
import { fonts, radius, space, usePalette } from '@/theme';

import { Icon, Row, Txt } from './ui';

/** Renders long-form content blocks (books and leksikon). */
export function Blocks({ blocks, accent }: { blocks: BookBlock[]; accent: string }) {
  return (
    <View style={{ gap: space.lg }}>
      {blocks.map((b, i) => (
        <Block key={i} block={b} accent={accent} />
      ))}
    </View>
  );
}

function Block({ block, accent }: { block: BookBlock; accent: string }) {
  const p = usePalette();
  switch (block.type) {
    case 'p':
      return <Txt variant="reading">{block.text}</Txt>;
    case 'h':
      return (
        <Txt variant="heading" style={{ fontSize: 22, lineHeight: 27, marginTop: space.md }}>
          {block.text}
        </Txt>
      );
    case 'list':
      return (
        <View style={{ gap: 10 }}>
          {block.items.map((it, i) => (
            <Row key={i} style={{ alignItems: 'flex-start' }} gap={12}>
              <Txt style={{ fontFamily: fonts.monoBold, color: accent, width: 22, fontSize: 14, lineHeight: 28 }}>
                {block.ordered ? `${i + 1}.` : '—'}
              </Txt>
              <Txt variant="reading" style={{ flex: 1 }}>
                {it}
              </Txt>
            </Row>
          ))}
        </View>
      );
    case 'tip':
    case 'warning': {
      const warn = block.type === 'warning';
      const c = warn ? p.danger : accent;
      return (
        <View style={[styles.callout, { borderColor: c, backgroundColor: p.surface }]}>
          <Row gap={8}>
            <Icon name={warn ? 'alert-octagon' : 'lightbulb-on-outline'} size={18} color={c} />
            <Txt variant="label" style={{ color: c }}>
              {block.title ?? (warn ? 'Advarsel' : 'Tips')}
            </Txt>
          </Row>
          <Txt style={{ fontSize: 16, lineHeight: 24 }}>{block.text}</Txt>
        </View>
      );
    }
    case 'facts':
      return (
        <View style={styles.facts}>
          {block.items.map((f) => (
            <View key={f.label} style={[styles.fact, { backgroundColor: p.surface, borderColor: p.line }]}>
              <Txt style={{ fontFamily: fonts.bold, fontSize: 20, letterSpacing: -0.5, color: accent }}>{f.value}</Txt>
              <Txt variant="small" tone="muted">
                {f.label}
              </Txt>
            </View>
          ))}
        </View>
      );
  }
}

const styles = StyleSheet.create({
  callout: { borderLeftWidth: 3, borderRadius: radius.sm, padding: space.lg, gap: 8 },
  facts: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  fact: {
    flexGrow: 1,
    flexBasis: '45%',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: radius.md,
    padding: 14,
    gap: 4,
  },
});
