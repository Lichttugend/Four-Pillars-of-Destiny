import { GermanText, TextScore } from '../types';

interface Props {
  texts: GermanText[];
  scores: TextScore[];
  onStart: (textId: number) => void;
  onMockTest: () => void;
}

const levelColors: Record<string, string> = {
  B1: 'bg-green-100 text-green-800',
  B2: 'bg-blue-100 text-blue-800',
  C1: 'bg-purple-100 text-purple-800',
};

export default function Home({ texts, scores, onStart, onMockTest }: Props) {
  const totalAttempted = scores.length;
  const avgScore = scores.length > 0
    ? Math.round(scores.reduce((s, x) => s + (x.score / x.total) * 100, 0) / scores.length)
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white py-6 px-4 shadow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">🇩🇪 BPS Deutsch-Test Vorbereitung</h1>
          <p className="text-blue-200 text-sm mt-1">Lückentext-Training für den Berufspsychologischen Service</p>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-900">
          <p className="font-semibold mb-1">📋 So läuft der echte BPS-Test ab:</p>
          <ul className="list-disc list-inside space-y-1 text-blue-800">
            <li>Langer Text mit <strong>10 Lücken</strong> pro Aufgabe</li>
            <li>Für jede Lücke gibt es <strong>4 Antwortmöglichkeiten</strong></li>
            <li><strong>9 Minuten</strong> pro Text · Niveau <strong>B1 bis C1</strong></li>
          </ul>
        </div>

        {totalAttempted > 0 && (
          <div className="flex gap-4 mb-6">
            <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-blue-700">{totalAttempted}<span className="text-base text-gray-500">/{texts.length}</span></p>
              <p className="text-xs text-gray-500 mt-1">Texte geübt</p>
            </div>
            <div className="flex-1 bg-white rounded-xl border border-gray-200 p-4 text-center shadow-sm">
              <p className="text-2xl font-bold text-blue-700">{avgScore}%</p>
              <p className="text-xs text-gray-500 mt-1">Ø Ergebnis</p>
            </div>
          </div>
        )}

        <button
          onClick={onMockTest}
          className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-xl mb-6 shadow transition-colors flex items-center justify-center gap-2"
        >
          <span className="text-xl">⏱️</span>
          <span>Übungstest starten (alle 7 Texte · ~63 min)</span>
        </button>

        <h2 className="font-semibold text-gray-700 mb-3">Einzelne Texte üben</h2>
        <div className="space-y-3">
          {texts.map(text => {
            const score = scores.find(s => s.textId === text.id);
            const pct = score ? Math.round((score.score / score.total) * 100) : null;
            return (
              <button
                key={text.id}
                onClick={() => onStart(text.id)}
                className="w-full bg-white border border-gray-200 rounded-xl p-4 text-left hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[text.level]}`}>{text.level}</span>
                      <span className="text-xs text-gray-400">{text.topic}</span>
                    </div>
                    <p className="font-semibold text-gray-800 group-hover:text-blue-700">{text.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">10 Lücken · 9 Minuten</p>
                  </div>
                  <div className="text-right shrink-0">
                    {pct !== null ? (
                      <div>
                        <p className={`text-lg font-bold ${pct >= 70 ? 'text-green-600' : pct >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>{pct}%</p>
                        <p className="text-xs text-gray-400">{score!.score}/{score!.total}</p>
                      </div>
                    ) : (
                      <span className="text-gray-300 text-2xl group-hover:text-blue-400">→</span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
