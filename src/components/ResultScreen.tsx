import { useState } from 'react';
import { GermanText } from '../types';

interface Props {
  text: GermanText;
  answers: Record<number, string>;
  timeUp: boolean;
  onHome: () => void;
  onRetry: () => void;
}

function renderTextWithResults(raw: string, answers: Record<number, string>, correctMap: Record<number, string>) {
  const parts = raw.split(/(\[\d+\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[(\d+)\]$/);
    if (!match) return <span key={i}>{part}</span>;
    const id = parseInt(match[1]);
    const selected = answers[id] || '—';
    const isCorrect = selected === correctMap[id];
    return (
      <span key={i} className={`inline-block font-bold px-1 mx-0.5 rounded ${isCorrect ? 'bg-green-100 text-green-900 border border-green-300' : 'bg-red-100 text-red-900 border border-red-300'}`}>
        {selected}
        {!isCorrect && <span className="text-green-700 text-xs ml-1">[{correctMap[id]}]</span>}
      </span>
    );
  });
}

export default function ResultScreen({ text, answers, timeUp, onHome, onRetry }: Props) {
  const [openId, setOpenId] = useState<number | null>(null);
  const correctMap = Object.fromEntries(text.blanks.map(b => [b.id, b.correctAnswer]));
  const score = text.blanks.filter(b => answers[b.id] === b.correctAnswer).length;
  const pct = Math.round((score / text.blanks.length) * 100);
  const grade = pct >= 90 ? 'Ausgezeichnet!' : pct >= 70 ? 'Gut gemacht!' : pct >= 50 ? 'Weiter üben!' : 'Nicht aufgeben!';
  const gradeColor = pct >= 90 ? 'text-green-700' : pct >= 70 ? 'text-blue-700' : pct >= 50 ? 'text-yellow-700' : 'text-red-700';

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-4 shadow-sm">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <h2 className="font-bold text-gray-800">Ergebnis: {text.title}</h2>
          <button onClick={onHome} className="text-sm text-blue-600 hover:underline">← Übersicht</button>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {timeUp && (
          <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-3 mb-4 text-sm text-yellow-800">
            ⏱️ Die Zeit ist abgelaufen. Nicht beantwortete Lücken werden als falsch gewertet.
          </div>
        )}

        {/* Score Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 text-center shadow-sm">
          <p className={`text-4xl font-bold ${gradeColor}`}>{score}<span className="text-2xl text-gray-400">/{text.blanks.length}</span></p>
          <p className={`text-lg font-semibold mt-1 ${gradeColor}`}>{grade}</p>
          <div className="mt-3 bg-gray-100 rounded-full h-3 overflow-hidden">
            <div className={`h-3 rounded-full transition-all ${pct >= 70 ? 'bg-green-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${pct}%` }} />
          </div>
          <p className="text-sm text-gray-500 mt-1">{pct}% richtig</p>
        </div>

        {/* Text with highlights */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6 shadow-sm leading-relaxed text-gray-800">
          <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wide">Text mit Lösungen</p>
          {renderTextWithResults(text.text, answers, correctMap)}
        </div>

        {/* Per-blank explanations */}
        <div className="space-y-2 mb-6">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Erklärungen</p>
          {text.blanks.map(b => {
            const selected = answers[b.id] || '—';
            const isCorrect = selected === b.correctAnswer;
            return (
              <div key={b.id} className={`rounded-xl border ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                <button
                  onClick={() => setOpenId(openId === b.id ? null : b.id)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-lg ${isCorrect ? '✅' : '❌'}`}>{isCorrect ? '✅' : '❌'}</span>
                    <span className="text-sm font-semibold text-gray-700">Lücke {b.id}</span>
                    <span className="text-sm text-gray-500">
                      {isCorrect ? `„${b.correctAnswer}"` : <><span className="line-through text-red-500">„{selected}"</span> → <span className="text-green-700 font-semibold">„{b.correctAnswer}"</span></>}
                    </span>
                  </div>
                  <span className="text-gray-400 text-xs">{openId === b.id ? '▲' : '▼'}</span>
                </button>
                {openId === b.id && (
                  <div className="px-4 pb-4 text-sm text-gray-700 border-t border-gray-200 pt-3">
                    {b.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex gap-3">
          <button onClick={onRetry} className="flex-1 py-3 rounded-xl border-2 border-blue-700 text-blue-700 font-bold hover:bg-blue-50 transition-colors">
            Nochmal üben
          </button>
          <button onClick={onHome} className="flex-1 py-3 rounded-xl bg-blue-700 text-white font-bold hover:bg-blue-800 transition-colors">
            Zur Übersicht
          </button>
        </div>
      </div>
    </div>
  );
}
