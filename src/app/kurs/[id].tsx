import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ProgressRing } from '@/components/progress-ring';
import { Screen } from '@/components/screen';
import { Bar, Button, Icon, Row, Tap, Txt } from '@/components/ui';
import { quizzes } from '@/data/quizzes';
import { haptic } from '@/lib/haptics';
import { useOffline } from '@/store/offline';
import { fonts, radius, space, usePalette } from '@/theme';

export default function KursScreen() {
  const p = usePalette();
  const { id } = useLocalSearchParams<{ id: string }>();
  const quiz = quizzes.find((q) => q.id === id);
  const record = useOffline((s) => s.recordQuiz);
  const prev = useOffline((s) => s.quiz[id]);
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!quiz) {
    return (
      <Screen back title="Fant ikke kurset">
        <Txt tone="muted">Det kan ha blitt flyttet.</Txt>
      </Screen>
    );
  }

  const q = quiz.questions[i];
  const total = quiz.questions.length;
  const accent = p[quiz.accent];

  const pick = (k: number) => {
    if (picked !== null) return;
    setPicked(k);
    if (k === q.answer) {
      setScore((s) => s + 1);
      haptic.success();
    } else haptic.warn();
  };

  const next = () => {
    if (i + 1 < total) {
      setI(i + 1);
      setPicked(null);
    } else {
      record(quiz.id, score, total);
      setFinished(true);
    }
  };

  if (finished) {
    const pct = score / total;
    const passed = pct >= 0.8;
    return (
      <Screen back>
        <View style={{ alignItems: 'center', gap: space.lg, marginTop: space.xl }}>
          <ProgressRing value={pct} size={180} color={passed ? p.ok : accent}>
            <Txt style={{ fontFamily: fonts.bold, fontSize: 44, letterSpacing: -1.5, color: p.ink }}>
              {score}/{total}
            </Txt>
          </ProgressRing>
          <Txt variant="title" style={{ textAlign: 'center' }}>
            {passed ? 'Bestått!' : 'Nesten der'}
          </Txt>
          <Txt tone="muted" style={{ textAlign: 'center' }}>
            {passed
              ? 'Du kan dette. Kurset teller mot beredskapssertifikatet.'
              : 'Du trenger 80 % for å bestå. Les kapitlene på nytt og prøv igjen.'}
          </Txt>
          {prev && (
            <Txt variant="label" tone="muted">
              Beste resultat: {prev.best}/{total} · {prev.attempts} forsøk
            </Txt>
          )}
        </View>
        <View style={{ gap: space.sm, marginTop: space.xxl }}>
          <Button
            label="Ta kurset igjen"
            icon="restart"
            onPress={() => {
              setI(0);
              setPicked(null);
              setScore(0);
              setFinished(false);
            }}
          />
          <Button label="Tilbake til biblioteket" variant="ghost" onPress={() => router.back()} />
        </View>
      </Screen>
    );
  }

  return (
    <Screen back>
      <View style={{ gap: 10, marginBottom: space.xl }}>
        <Row style={{ justifyContent: 'space-between' }}>
          <Txt variant="label" style={{ color: accent }}>
            {quiz.title}
          </Txt>
          <Txt variant="label" tone="muted">
            {i + 1}/{total}
          </Txt>
        </Row>
        <Bar value={(i + (picked !== null ? 1 : 0)) / total} color={accent} />
      </View>

      <Txt variant="title" style={{ marginBottom: space.xl }}>
        {q.q}
      </Txt>

      <View style={{ gap: 10 }}>
        {q.options.map((o, k) => {
          const isAnswer = k === q.answer;
          const isPicked = k === picked;
          const show = picked !== null;
          const border = show && isAnswer ? p.ok : show && isPicked ? p.danger : p.line;
          return (
            <Tap
              key={k}
              onPress={() => pick(k)}
              disabled={picked !== null}
              style={[styles.option, { borderColor: border, backgroundColor: show && isAnswer ? p.ok + '14' : p.surface }]}>
              <View style={[styles.letter, { borderColor: border }]}>
                {show && (isAnswer || isPicked) ? (
                  <Icon name={isAnswer ? 'check' : 'close'} size={15} color={isAnswer ? p.ok : p.danger} />
                ) : (
                  <Txt variant="mono" style={{ fontSize: 12 }}>
                    {'ABCD'[k]}
                  </Txt>
                )}
              </View>
              <Txt style={{ flex: 1 }}>{o}</Txt>
            </Tap>
          );
        })}
      </View>

      {picked !== null && (
        <View style={{ marginTop: space.xl, gap: space.lg }}>
          <View style={[styles.explain, { borderLeftColor: picked === q.answer ? p.ok : p.danger, backgroundColor: p.surface }]}>
            <Txt variant="label" tone={picked === q.answer ? 'ok' : 'danger'}>
              {picked === q.answer ? 'Riktig' : 'Ikke helt'}
            </Txt>
            <Txt>{q.explain}</Txt>
          </View>
          <Button label={i + 1 < total ? 'Neste spørsmål' : 'Se resultat'} icon="arrow-right" onPress={next} />
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  option: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1.5, borderRadius: radius.md, padding: 14 },
  letter: { width: 28, height: 28, borderRadius: 14, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  explain: { borderLeftWidth: 3, borderRadius: radius.sm, padding: space.lg, gap: 6 },
});
