import { MockTestResult, GermanText } from '../types';

interface Props {
  result: MockTestResult;
  texts: GermanText[];
  onHome: () => void;
}

export default function MockResult({ result, texts, onHome }: Props) {
  const pct = Math.round((result.total / result.max) * 100);
  const grade = pct >= 90 ? 'Ausgezeichnet!' : pct >= 70 ? 'Gut bestanden!' : pct >= 50 ? 'Knapp – weiter üben!' : 'Noch nicht bestanden';
  const gradeColor = pct >= 90 ? 'text-green-600' : pct >= 70 ? 'text-blue-700' : pct >= 50 ? 'text-yellow-600' : 'text-red-600';

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-700 text-white py-6 px-4 shadow">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">⏱️ Übungstest abgeschlossen</h1>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-6 text-center shadow-sm">
          <p className={`text-5xl font-bold ${gradeColor}`}>{result.total}<span className="text-2xl text-gray-400">/{result.max}</span></p>
          <p className={`text-xl font-semibold mt-2 ${gradeColor}`}>{grade}</p>
          <div className="mt-4 bg-gray-100 rounded-full h-4 overflow-hidden">
            <div className={`h-4 rounded-full ${pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${pct}%` }} />
          </div>
          <p className="text-sm text-gray-500 mt-2">{pct}% Gesamtergebnis</p>
        </div>

        <div className="space-y-3 mb-6">
          {result.scores.map(s => {
            const text = texts.find(t => t.id === s.textId)!;
            const p = Math.round((s.score / s.total) * 100);
            return (
              <div key={s.textId} className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between shadow-sm">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{text.title}</p>
                  <p className="text-xs text-gray-400">{text.topic} · {text.level}</p>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${p >= 70 ? 'text-green-600' : p >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>{s.score}/{s.total}</p>
                  <p className="text-xs text-gray-400">{p}%</p>
                </div>
              </div>
            );
          })}
        </div>

        <button onClick={onHome} className="w-full py-4 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition-colors">
          Zur Übersicht
        </button>
      </div>
    </div>
  );
}
