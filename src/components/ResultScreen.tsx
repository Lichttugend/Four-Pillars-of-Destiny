import { Question } from '../types';

interface Props {
  questions: Question[];
  answers: (number | null)[];
  isMockTest: boolean;
  timeUsed?: number;
  onRestart: () => void;
  onHome: () => void;
}

export default function ResultScreen({ questions, answers, isMockTest, timeUsed, onRestart, onHome }: Props) {
  const correct = answers.filter((a, i) => a === questions[i].correctIndex).length;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);

  const grade = pct >= 80 ? 'Sehr gut' : pct >= 60 ? 'Gut' : pct >= 40 ? 'Befriedigend' : 'Noch üben';
  const gradeColor = pct >= 80 ? 'text-green-600' : pct >= 60 ? 'text-blue-600' : pct >= 40 ? 'text-yellow-600' : 'text-red-600';
  const gradeBg = pct >= 80 ? 'bg-green-50 border-green-200' : pct >= 60 ? 'bg-blue-50 border-blue-200' : pct >= 40 ? 'bg-yellow-50 border-yellow-200' : 'bg-red-50 border-red-200';

  const fmtTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className={`card border-2 ${gradeBg} mb-6 text-center`}>
          <div className="text-5xl mb-3">{pct >= 80 ? '🏆' : pct >= 60 ? '👍' : pct >= 40 ? '📚' : '💪'}</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">
            {isMockTest ? 'Testergebnis' : 'Übungsergebnis'}
          </h2>
          <div className={`text-4xl font-bold ${gradeColor} mb-2`}>{correct}/{total}</div>
          <div className={`text-xl font-semibold ${gradeColor}`}>{grade} ({pct}%)</div>
          {timeUsed !== undefined && (
            <div className="text-gray-500 mt-2 text-sm">Zeit: {fmtTime(timeUsed)}</div>
          )}
        </div>

        <div className="card mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Antwortübersicht</h3>
          <div className="space-y-4">
            {questions.map((q, i) => {
              const userAnswer = answers[i];
              const isCorrect = userAnswer === q.correctIndex;
              return (
                <div key={q.id} className={`p-4 rounded-xl border-2 ${isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
                  <div className="flex items-start gap-2 mb-2">
                    <span className="text-lg">{isCorrect ? '✅' : '❌'}</span>
                    <p className="font-medium text-gray-800 text-sm">{q.question}</p>
                  </div>
                  {!isCorrect && (
                    <div className="ml-7 space-y-1 text-sm">
                      <p className="text-red-600">
                        Ihre Antwort: {userAnswer !== null ? q.options[userAnswer] : '(keine Antwort)'}
                      </p>
                      <p className="text-green-700 font-medium">
                        Richtig: {q.options[q.correctIndex]}
                      </p>
                      <p className="text-gray-600 italic">{q.explanation}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-3">
          <button onClick={onRestart} className="btn-primary flex-1">
            🔄 Nochmal üben
          </button>
          <button onClick={onHome} className="btn-secondary flex-1">
            🏠 Startseite
          </button>
        </div>
      </div>
    </div>
  );
}
