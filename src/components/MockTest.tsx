import { useState, useEffect, useCallback } from 'react';
import { Question } from '../types';
import ProgressBar from './ProgressBar';
import ResultScreen from './ResultScreen';

const MOCK_DURATION = 30 * 60; // 30 Minuten

interface Props {
  questions: Question[];
  onHome: () => void;
}

export default function MockTest({ questions, onHome }: Props) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [selected, setSelected] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(MOCK_DURATION);
  const [done, setDone] = useState(false);
  const [timeUsed, setTimeUsed] = useState(0);

  const finish = useCallback(() => {
    setTimeUsed(MOCK_DURATION - timeLeft);
    setDone(true);
  }, [timeLeft]);

  useEffect(() => {
    if (done) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { finish(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [done, finish]);

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
      finish();
    } else {
      setIndex(index + 1);
      setSelected(null);
    }
  };

  if (done) {
    return (
      <ResultScreen
        questions={questions}
        answers={answers}
        isMockTest={true}
        timeUsed={timeUsed}
        onRestart={() => {
          setIndex(0);
          setAnswers(Array(questions.length).fill(null));
          setSelected(null);
          setTimeLeft(MOCK_DURATION);
          setDone(false);
        }}
        onHome={onHome}
      />
    );
  }

  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const isUrgent = timeLeft < 300;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button onClick={onHome} className="text-gray-300 hover:text-white text-sm">← Abbrechen</button>
            <span className="text-gray-300 text-sm font-medium">📝 Mock Test</span>
          </div>
          <div className={`px-4 py-2 rounded-xl font-mono font-bold text-lg ${isUrgent ? 'bg-red-600 text-white animate-pulse' : 'bg-blue-700 text-white'}`}>
            ⏱ {mins}:{String(secs).padStart(2, '0')}
          </div>
        </div>

        <div className="mb-4">
          <ProgressBar current={index + 1} total={questions.length} />
        </div>

        {q.text && (
          <div className="bg-blue-900/50 rounded-2xl p-4 mb-4 border border-blue-700">
            <h3 className="font-semibold text-blue-300 mb-2 text-sm uppercase tracking-wide">📄 Lesetext</h3>
            <div className="text-gray-200 text-sm leading-relaxed whitespace-pre-line max-h-48 overflow-y-auto">
              {q.text}
            </div>
          </div>
        )}

        <div className="bg-white/10 backdrop-blur rounded-2xl p-5 mb-4">
          <p className="text-white font-semibold text-lg leading-snug">{q.question}</p>
        </div>

        <div className="space-y-3 mb-4">
          {q.options.map((opt, i) => {
            let cls = 'w-full text-left p-4 rounded-xl border-2 border-white/20 hover:border-blue-400 hover:bg-blue-400/20 text-white transition-all duration-200 font-medium cursor-pointer';
            if (selected !== null) {
              if (i === q.correctIndex) cls = 'w-full text-left p-4 rounded-xl border-2 border-green-400 bg-green-400/20 text-white font-medium';
              else if (i === selected) cls = 'w-full text-left p-4 rounded-xl border-2 border-red-400 bg-red-400/20 text-white font-medium';
              else cls = 'w-full text-left p-4 rounded-xl border-2 border-white/10 text-white/40 font-medium cursor-default';
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
          <button onClick={handleNext} className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md">
            {index + 1 >= questions.length ? '📊 Test beenden' : 'Nächste Frage →'}
          </button>
        )}
      </div>
    </div>
  );
}
