export interface Blank {
  id: number;
  correctAnswer: string;
  options: string[];
  explanation: string;
}

export interface GermanText {
  id: number;
  title: string;
  topic: string;
  level: 'B1' | 'B2' | 'C1';
  timeLimit: number; // seconds
  text: string; // [1] through [10] as placeholders
  blanks: Blank[];
}

export interface TextScore {
  textId: number;
  score: number;
  total: number;
  date: string;
}

export interface MockTestResult {
  scores: TextScore[];
  total: number;
  max: number;
  date: string;
}

export type Screen =
  | { name: 'home' }
  | { name: 'exercise'; textId: number }
  | { name: 'result'; textId: number; answers: Record<number, string>; timeUp: boolean }
  | { name: 'mocktest' }
  | { name: 'mockresult'; result: MockTestResult };
