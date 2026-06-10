import { useState, useEffect } from 'react';
import { Category, Question, ScoreHistory } from './types';
import Home from './components/Home';
import Exercise from './components/Exercise';
import MockTest from './components/MockTest';
import { leseVerstehenQuestions } from './data/leseverstehen';
import { lueckentextQuestions } from './data/lueckentext';
import { grammatikQuestions } from './data/grammatik';
import { wortschatzQuestions } from './data/wortschatz';
import { rechtschreibungQuestions } from './data/rechtschreibung';

const ALL_QUESTIONS: Question[] = [
  ...leseVerstehenQuestions,
  ...lueckentextQuestions,
  ...grammatikQuestions,
  ...wortschatzQuestions,
  ...rechtschreibungQuestions,
];

const CATEGORY_QUESTIONS: Record<Exclude<Category, 'mocktest'>, Question[]> = {
  leseverstehen: leseVerstehenQuestions,
  lueckentext: lueckentextQuestions,
  grammatik: grammatikQuestions,
  wortschatz: wortschatzQuestions,
  rechtschreibung: rechtschreibungQuestions,
};

const CATEGORY_LABELS: Record<Exclude<Category, 'mocktest'>, string> = {
  leseverstehen: '📖 Leseverstehen',
  lueckentext: '✏️ Lückentext',
  grammatik: '📝 Grammatik',
  wortschatz: '📚 Wortschatz',
  rechtschreibung: '🔤 Rechtschreibung',
};

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function loadScores(): ScoreHistory {
  try {
    const raw = localStorage.getItem('bps-scores');
    if (raw) return JSON.parse(raw);
  } catch {}
  return { scores: [], mockTestScores: [] };
}

function saveScores(h: ScoreHistory) {
  try { localStorage.setItem('bps-scores', JSON.stringify(h)); } catch {}
}

type Screen = 'home' | 'exercise' | 'mocktest';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [exerciseQuestions, setExerciseQuestions] = useState<Question[]>([]);
  const [scores, _setScores] = useState<ScoreHistory>(loadScores);

  useEffect(() => { saveScores(scores); }, [scores]);

  const handleStart = (cat: Category) => {
    setActiveCategory(cat);
    if (cat === 'mocktest') {
      const mock = shuffle(ALL_QUESTIONS).slice(0, 30);
      setExerciseQuestions(mock);
      setScreen('mocktest');
    } else {
      const qs = shuffle(CATEGORY_QUESTIONS[cat]).slice(0, 10);
      setExerciseQuestions(qs);
      setScreen('exercise');
    }
  };

  const handleHome = () => {
    setScreen('home');
    setActiveCategory(null);
    setExerciseQuestions([]);
  };

  if (screen === 'exercise' && activeCategory && activeCategory !== 'mocktest') {
    return (
      <Exercise
        questions={exerciseQuestions}
        categoryLabel={CATEGORY_LABELS[activeCategory]}
        onHome={handleHome}
      />
    );
  }

  if (screen === 'mocktest') {
    return <MockTest questions={exerciseQuestions} onHome={handleHome} />;
  }

  return <Home scores={scores} onStart={handleStart} />;
}
