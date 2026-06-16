import { useState } from 'react';
import { BirthData, BaziChart } from './types';
import { calculateBazi } from './utils/calculator';
import Home from './pages/Home';
import Result from './pages/Result';

export default function App() {
  const [page, setPage] = useState<'home' | 'result'>('home');
  const [birthData, setBirthData] = useState<BirthData | null>(null);
  const [chart, setChart] = useState<BaziChart | null>(null);

  const handleSubmit = (data: BirthData) => {
    const [year, month, day] = data.date.split('-').map(Number);
    const calculated = calculateBazi(year, month, day, data.hour);
    setBirthData(data);
    setChart(calculated);
    setPage('result');
  };

  if (page === 'result' && birthData && chart) {
    return <Result birthData={birthData} chart={chart} onBack={() => setPage('home')} />;
  }

  return <Home onSubmit={handleSubmit} />;
}
