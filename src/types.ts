export type Category =
  | 'leseverstehen'
  | 'lueckentext'
  | 'grammatik'
  | 'wortschatz'
  | 'rechtschreibung'
  | 'mocktest';

export interface Question {
  id: string;
  category: Exclude<Category, 'mocktest'>;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  text?: string; // For reading comprehension passages
}

export interface CategoryScore {
  category: Exclude<Category, 'mocktest'>;
  correct: number;
  total: number;
  lastPlayed: string;
}

export interface AppState {
  screen: 'home' | 'exercise' | 'mocktest' | 'result';
  currentCategory: Category | null;
  questions: Question[];
  currentIndex: number;
  answers: (number | null)[];
  startTime: number | null;
  isMockTest: boolean;
}

export interface ScoreHistory {
  scores: CategoryScore[];
  mockTestScores: { score: number; total: number; date: string }[];
}
