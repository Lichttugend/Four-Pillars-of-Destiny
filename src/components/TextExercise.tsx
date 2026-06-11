import { useState, useEffect, useCallback } from 'react';
import { GermanText } from '../types';

interface Props {
  text: GermanText;
  onSubmit: (answers: Record<number, string>, timeUp: boolean) => void;
  onHome: () => void;
}

function renderText(raw: string, answers: Record<number, string>, currentBlank: number, submitted: boolean, correctMap: Record<number, string>) {
  const parts = raw.split(/(\[\d+\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[(\d+)\]$/);
    if (!match) return <span key={i}>{part}</span>;
    const id = parseInt(match[1]);
    const selected = answers[id];
    if (submitted) {
      const isCorrect = selected === correctMap[id];
      return (
        <span key={i} className={`inline-block font-bold px-1 mx-0.5 rounded ${isCorrect ? 'bg-green-200 text-green-900' : 'bg-red-200 text-red-900'}`}>
          {selected || '—'}
          {!isCorrect && <span className="text-green-800 ml-1">→{correctMap[id]}</span>}
        </span>
      );
    }
    const isCurrent = id === currentBlank;
    return (
      <span key={i} className={`inline-block px-2 mx-0.5 rounded border-b-2 font-semibold transition-colors ${selected ? 'text-blue-800 border-blue-400' : 'text-gray-400 border-gray-300'} ${isCurrent ? 'bg-yellow-100 border-yellow-400' : ''}`}>
        {selected || `[${id}]`}
      </span>
    );
  });
}

export default function TextExercise({ text, onSubmit, onHome }: Props) {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentBlank, setCurrentBlank] = useState(1);
  const [timeLeft, setTimeLeft] = useState(text.timeLimit);
  const [submitted, setSubmitted] = useState(false);

  const correctMap = Object.fromEntries(text.blanks.map(b => [b.id, b.correctAnswer]));

  const handleSubmit = useCallback((timeUp = false) => {
    setSubmitted(true);
    onSubmit(answers, timeUp);
  }, [answers, onSubmit]);

  useEffect(() => {
    if (submitted) return;
    const t = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(t); handleSubmit(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [submitted, handleSubmit]);

  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');
  const isUrgent = timeLeft <= 120;
  const blank = text.blanks.find(b => b.id === currentBlank)!;
  const answered = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 shadow-sm z-10">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <div>
            <p className="font-bold text-gray-800 text-sm">{text.title}</p>
            <p className="text-xs text-gray-400">{text.topic} · {text.level}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-xs text-gray-400">Lücken</p>
              <p className="font-semibold text-sm">{answered}/10</p>
            </div>
            <div className={`text-center px-3 py-1 rounded-lg font-mono font-bold text-lg ${isUrgent ? 'bg-red-100 text-red-700 animate-pulse' : 'bg-gray-100 text-gray-800'}`}>
              {mins}:{secs}
            </div>
          </div>
        </div>
        {/* Progress */}
        <div className="max-w-3xl mx-auto mt-2">
          <div className="flex gap-1">
            {text.blanks.map(b => (
              <button
                key={b.id}
                onClick={() => setCurrentBlank(b.id)}
                className={`flex-1 h-2 rounded-full transition-colors ${answers[b.id] ? 'bg-blue-500' : b.id === currentBlank ? 'bg-yellow-400' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {/* Text */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-6 shadow-sm leading-relaxed text-gray-800">
          {renderText(text.text, answers, currentBlank, false, correctMap)}
        </div>

        {/* Current Blank Question */}
        <div className="bg-white rounded-xl border border-blue-200 p-5 shadow-sm">
          <p className="text-sm font-semibold text-blue-700 mb-3">Lücke {currentBlank} von 10</p>
          <div className="grid grid-cols-2 gap-3">
            {blank.options.map(opt => {
              const selected = answers[currentBlank] === opt;
              return (
                <button
                  key={opt}
                  onClick={() => {
                    setAnswers(a => ({ ...a, [currentBlank]: opt }));
                    if (currentBlank < 10) setCurrentBlank(currentBlank + 1);
                  }}
                  className={`py-3 px-4 rounded-xl border-2 font-semibold text-sm transition-all ${selected ? 'border-blue-500 bg-blue-50 text-blue-800' : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setCurrentBlank(Math.max(1, currentBlank - 1))}
              disabled={currentBlank === 1}
              className="px-4 py-2 text-sm rounded-lg border border-gray-200 disabled:opacity-30 hover:bg-gray-50"
            >
              ← Zurück
            </button>
            {currentBlank < 10 ? (
              <button
                onClick={() => setCurrentBlank(currentBlank + 1)}
                className="px-4 py-2 text-sm rounded-lg border border-gray-200 hover:bg-gray-50"
              >
                Weiter →
              </button>
            ) : (
              <button
                onClick={() => handleSubmit(false)}
                className="px-5 py-2 text-sm rounded-lg bg-blue-700 text-white font-bold hover:bg-blue-800"
              >
                Abgeben ✓
              </button>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button onClick={onHome} className="text-sm text-gray-400 hover:text-gray-600">← Zurück zur Übersicht</button>
          {answered === 10 && (
            <button onClick={() => handleSubmit(false)} className="text-sm font-semibold text-blue-700 hover:text-blue-900">
              Abgeben ✓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
