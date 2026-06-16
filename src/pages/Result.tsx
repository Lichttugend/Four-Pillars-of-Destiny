import { useState } from 'react';
import { BirthData, BaziChart } from '../types';
import BaziChartComponent from '../components/BaziChart';
import FreePreview from '../components/FreePreview';
import PaywallModal from '../components/PaywallModal';

interface Props {
  birthData: BirthData;
  chart: BaziChart;
  onBack: () => void;
}

export default function Result({ birthData, chart, onBack }: Props) {
  const [showPaywall, setShowPaywall] = useState(false);
  const lang = birthData.language;

  return (
    <div className="relative min-h-screen px-4 py-12">
      <div className="stars" />
      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="text-white/50 hover:text-white text-sm flex items-center gap-2 transition-colors"
          >
            ← {lang === 'en' ? 'New Reading' : 'Neue Lesung'}
          </button>
          <p className="text-amber-400 text-xs uppercase tracking-widest">
            {lang === 'en' ? 'Your Chart' : 'Ihr Horoskop'}
          </p>
          <div className="w-20" />
        </div>

        <div className="text-center">
          <p className="text-white/50 text-sm mb-1">
            {lang === 'en' ? 'Four Pillars of Destiny for' : 'Vier Pfeiler des Schicksals für'}
          </p>
          <h1 className="text-3xl font-bold text-amber-300">{birthData.name}</h1>
          <p className="text-white/40 text-sm mt-1">
            {birthData.date} · {String(birthData.hour).padStart(2, '0')}:00 · {birthData.location}
          </p>
        </div>

        <BaziChartComponent chart={chart} language={lang} />

        <FreePreview
          chart={chart}
          name={birthData.name}
          language={lang}
          onUnlock={() => setShowPaywall(true)}
        />

        <div className="text-center pb-8">
          <button
            onClick={() => setShowPaywall(true)}
            className="px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-indigo-950 font-bold text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-amber-500/30 active:scale-95"
          >
            {lang === 'en' ? '✨ Get Full Report' : '✨ Vollständigen Bericht erhalten'}
          </button>
          <p className="text-white/30 text-xs mt-3">
            {lang === 'en' ? 'From €5 · PDF · Instant delivery' : 'Ab 5 € · PDF · Sofortiger Versand'}
          </p>
        </div>
      </div>

      {showPaywall && (
        <PaywallModal language={lang} onClose={() => setShowPaywall(false)} />
      )}
    </div>
  );
}
