import { useState } from 'react';
import { Question } from '../types';
import ProgressBar from './ProgressBar';
import ResultScreen from './ResultScreen';

interface Props {
  questions: Question[];
  categoryLabel: string;
  onHome: () => void;
}

export default function Exercise({ questions, categoryLabel, onHome }: Props) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [selected, setSelected] = useState<number | null>(null);
  const [_showResult, setShowResult] = useState(false);
  const [done, setDone] = useState(false);

  const q = questions[index];

  const handleSelect = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    const newAnswers = [...answers];
    newAnswers[index] = i;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (index + 1 >= questions.length) {
      setDone(true);
    } else {
      setIndex(index + 1);
      setSelected(null);
      setShowResult(false);
    }
  };

  if (done) {
    return (
      <ResultScreen
        questions={questions}
        answers={answers}
        isMockTest={false}
        onRestart={() => {
          setIndex(0);
          setAnswers(Array(questions.length).fill(null));
          setSelected(null);
          setShowResult(false);
          setDone(false);
        }}
        onHome={onHome}
      />
    );
  }

  const isCorrect = selected === q.correctIndex;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onHome} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            ← Zurück
          </button>
          <span className="text-gray-500 text-sm font-medium">{categoryLabel}</span>
        </div>

        <div className="mb-4">
          <ProgressBar current={index + 1} total={questions.length} />
        </div>

        {q.text && (
          <div className="card mb-4 bg-blue-50 border border-blue-100">
            <h3 className="font-semibold text-blue-800 mb-2 text-sm uppercase tracking-wide">📄 Lesetext</h3>
            <div className="text-gray-700 text-sm leading-relaxed whitespace-pre-line max-h-48 overflow-y-auto">
              {q.text}
            </div>
          </div>
        )}

        <div className="card mb-4">
          <p className="text-gray-800 font-semibold text-lg leading-snug">{q.question}</p>
        </div>

        <div className="space-y-3 mb-4">
          {q.options.map((opt, i) => {
            let cls = 'answer-btn';
            if (selected !== null) {
              if (i === q.correctIndex) cls = 'answer-btn-correct';
              else if (i === selected) cls = 'answer-btn-wrong';
              else cls = 'w-full text-left p-4 rounded-xl border-2 border-gray-200 font-medium opacity-50 cursor-default';
            }
            return (
              <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={selected !== null}>
                <span className="inline-block w-6 h-6 rounded-full border-2 border-current mr-2 text-xs text-center leading-5 font-bold">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className={`card mb-4 border-2 ${isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'}`}>
            <div className="flex items-start gap-2">
              <span className="text-xl">{isCorrect ? '✅' : '❌'}</span>
              <div>
                <p className={`font-semibold mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                  {isCorrect ? 'Richtig! Gut gemacht!' : `Falsch. Die richtige Antwort: ${q.options[q.correctIndex]}`}
                </p>
                <p className="text-gray-600 text-sm">{q.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {selected !== null && (
          <button onClick={handleNext} className="btn-primary w-full">
            {index + 1 >= questions.length ? '📊 Ergebnisse ansehen' : 'Nächste Frage →'}
          </button>
        )}
      </div>
    </div>
  );
}
