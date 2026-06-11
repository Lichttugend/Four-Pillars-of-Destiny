import { useState, useEffect, useCallback } from 'react';
import { GermanText, MockTestResult, TextScore } from '../types';

interface Props {
  texts: GermanText[];
  onDone: (result: MockTestResult) => void;
  onHome: () => void;
}

function renderText(raw: string, answers: Record<number, string>, currentBlank: number) {
  const parts = raw.split(/(\[\d+\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[(\d+)\]$/);
    if (!match) return <span key={i}>{part}</span>;
    const id = parseInt(match[1]);
    const selected = answers[id];
    const isCurrent = id === currentBlank;
    return (
      <span key={i} className={`inline-block px-2 mx-0.5 rounded border-b-2 font-semibold transition-colors ${selected ? 'text-blue-300 border-blue-400' : 'text-gray-500 border-gray-600'} ${isCurrent ? 'bg-yellow-900/30 border-yellow-400' : ''}`}>
        {selected || `[${id}]`}
      </span>
    );
  });
}

export default function MockTest({ texts, onDone, onHome }: Props) {
  const [textIndex, setTextIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentBlank, setCurrentBlank] = useState(1);
  const [timeLeft, setTimeLeft] = useState(540);
  const [allScores, setAllScores] = useState<TextScore[]>([]);

  const text = texts[textIndex];

  const nextText = useCallback((timeUp = false) => {
    const score = text.blanks.filter(b => answers[b.id] === b.correctAnswer).length;
    const newScore: TextScore = { textId: text.id, score, total: text.blanks.length, date: new Date().toISOString() };
    const updated = [...allScores, newScore];

    if (textIndex + 1 >= texts.length) {
      onDone({
        scores: updated,
        total: updated.reduce((s, x) => s + x.score, 0),
        max: updated.reduce((s, x) => s + x.total, 0),
        date: new Date().toISOString(),
      });
    } else {
      setAllScores(updated);
      setTextIndex(textIndex + 1);
      setAnswers({});
      setCurrentBlank(1);
      setTimeLeft(540);
    }
    void timeUp;
  }, [text, answers, allScores, textIndex, texts.length, onDone]);

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(t); nextText(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [nextText]);

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');
  const isUrgent = timeLeft <= 120;
  const blank = text.blanks.find(b => b.id === currentBlank)!;
  const answered = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="sticky top-0 bg-gray-800 border-b border-gray-700 px-4 py-3 z-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <p className="font-bold text-sm">Text {textIndex + 1}/{texts.length}: {text.title}</p>
            <p className="text-xs text-gray-400">{text.topic} · {text.level}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-xs text-gray-400">Lücken</p>
              <p className="font-semibold text-sm">{answered}/10</p>
            </div>
            <div className={`px-3 py-1 rounded-lg font-mono font-bold text-lg ${isUrgent ? 'bg-red-900 text-red-300 animate-pulse' : 'bg-gray-700 text-white'}`}>
              {mins}:{secs}
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-2 flex gap-1">
          {texts.map((_, i) => (
            <div key={i} className={`flex-1 h-1.5 rounded-full ${i < textIndex ? 'bg-green-500' : i === textIndex ? 'bg-blue-400' : 'bg-gray-600'}`} />
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-1 flex gap-1">
          {text.blanks.map(b => (
            <button key={b.id} onClick={() => setCurrentBlank(b.id)}
              className={`flex-1 h-1.5 rounded-full ${answers[b.id] ? 'bg-blue-400' : b.id === currentBlank ? 'bg-yellow-400' : 'bg-gray-600'}`} />
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-5 mb-6 leading-relaxed">
          {renderText(text.text, answers, currentBlank)}
        </div>

        <div className="bg-gray-800 rounded-xl border border-blue-700 p-5">
          <p className="text-sm font-semibold text-blue-400 mb-3">Lücke {currentBlank} von 10</p>
          <div className="grid grid-cols-2 gap-3">
            {blank.options.map(opt => {
              const selected = answers[currentBlank] === opt;
              return (
                <button key={opt} onClick={() => {
                  setAnswers(a => ({ ...a, [currentBlank]: opt }));
                  if (currentBlank < 10) setCurrentBlank(currentBlank + 1);
                }}
                  className={`py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all ${selected ? 'border-blue-500 bg-blue-900/50 text-blue-300' : 'border-gray-600 text-gray-200 hover:border-blue-500'}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          <div className="flex justify-between mt-4">
            <button onClick={() => setCurrentBlank(Math.max(1, currentBlank - 1))} disabled={currentBlank === 1}
              className="px-4 py-2 text-sm rounded-lg border border-gray-600 disabled:opacity-30 hover:bg-gray-700">
              ← Zurück
            </button>
            {currentBlank < 10 ? (
              <button onClick={() => setCurrentBlank(currentBlank + 1)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-600 hover:bg-gray-700">
                Weiter →
              </button>
            ) : (
              <button onClick={() => nextText(false)}
                className="px-5 py-2 text-sm rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700">
                {textIndex + 1 < texts.length ? 'Nächster Text →' : 'Test abgeben ✓'}
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button onClick={onHome} className="text-sm text-gray-500 hover:text-gray-300">Test abbrechen</button>
          {answered === 10 && (
            <button onClick={() => nextText(false)} className="text-sm font-semibold text-blue-400 hover:text-blue-300">
              {textIndex + 1 < texts.length ? 'Nächster Text →' : 'Test abgeben ✓'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
