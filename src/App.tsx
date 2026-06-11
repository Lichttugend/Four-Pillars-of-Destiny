import { useState } from 'react';
import { Screen, TextScore, MockTestResult } from './types';
import { germanTexts } from './data/texts';
import Home from './components/Home';
import TextExercise from './components/TextExercise';
import ResultScreen from './components/ResultScreen';
import MockTest from './components/MockTest';
import MockResult from './components/MockResult';

function loadScores(): TextScore[] {
  try {
    const raw = localStorage.getItem('bps-text-scores');
    if (raw) return JSON.parse(raw);
  } catch {}
  return [];
}

function saveScore(score: TextScore) {
  const scores = loadScores();
  const existing = scores.findIndex(s => s.textId === score.textId);
  if (existing >= 0) {
    if (score.score > scores[existing].score) scores[existing] = score;
  } else {
    scores.push(score);
  }
  try { localStorage.setItem('bps-text-scores', JSON.stringify(scores)); } catch {}
}

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' });
  const [scores, setScores] = useState<TextScore[]>(loadScores);

  const handleStart = (textId: number) => {
    setScreen({ name: 'exercise', textId });
  };

  const handleSubmit = (textId: number, answers: Record<number, string>, timeUp: boolean) => {
    const text = germanTexts.find(t => t.id === textId)!;
    const score = text.blanks.filter(b => answers[b.id] === b.correctAnswer).length;
    const newScore: TextScore = { textId, score, total: text.blanks.length, date: new Date().toISOString() };
    saveScore(newScore);
    setScores(loadScores());
    setScreen({ name: 'result', textId, answers, timeUp });
  };

  const handleMockDone = (result: MockTestResult) => {
    result.scores.forEach(s => saveScore(s));
    setScores(loadScores());
    setScreen({ name: 'mockresult', result });
  };

  const goHome = () => setScreen({ name: 'home' });

  if (screen.name === 'exercise') {
    const text = germanTexts.find(t => t.id === screen.textId)!;
    return <TextExercise text={text} onSubmit={(a, t) => handleSubmit(screen.textId, a, t)} onHome={goHome} />;
  }

  if (screen.name === 'result') {
    const text = germanTexts.find(t => t.id === screen.textId)!;
    return <ResultScreen text={text} answers={screen.answers} timeUp={screen.timeUp} onHome={goHome} onRetry={() => handleStart(screen.textId)} />;
  }

  if (screen.name === 'mocktest') {
    return <MockTest texts={germanTexts} onDone={handleMockDone} onHome={goHome} />;
  }

  if (screen.name === 'mockresult') {
    return <MockResult result={screen.result} texts={germanTexts} onHome={goHome} />;
  }

  return <Home texts={germanTexts} scores={scores} onStart={handleStart} onMockTest={() => setScreen({ name: 'mocktest' })} />;
}
