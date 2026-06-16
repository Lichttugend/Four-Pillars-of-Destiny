import { BaziChart as BaziChartType, Pillar } from '../types';
import { elementColors } from '../data/interpretations';

interface Props {
  chart: BaziChartType;
  language: 'en' | 'de';
}

const PILLAR_LABELS = {
  en: { year: 'Year Pillar', month: 'Month Pillar', day: 'Day Pillar', hour: 'Hour Pillar' },
  de: { year: 'Jahrpfeiler', month: 'Monatspfeiler', day: 'Tagpfeiler', hour: 'Stundenpfeiler' },
};

function PillarCard({ pillar, label, isDayMaster }: { pillar: Pillar; label: string; isDayMaster?: boolean }) {
  const color = elementColors[pillar.element] || '#f59e0b';
  return (
    <div className={`pillar-card p-5 text-center relative ${isDayMaster ? 'ring-2 ring-amber-400' : ''}`}>
      {isDayMaster && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-indigo-950 text-xs font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
          Day Master ★
        </div>
      )}
      <p className="text-white/50 text-xs uppercase tracking-widest mb-3">{label}</p>
      <div className="text-5xl font-bold mb-1" style={{ color }}>{pillar.stem}</div>
      <p className="text-white/60 text-xs mb-3">{pillar.stemName}</p>
      <div className="h-px w-10 bg-amber-500/40 mx-auto mb-3" />
      <div className="text-4xl font-bold text-white/80 mb-1">{pillar.branch}</div>
      <p className="text-white/60 text-xs mb-3">{pillar.branchName}</p>
      <div className="mt-2 inline-block px-2 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: color + '22', color }}>
        {pillar.yinYang} {pillar.element}
      </div>
    </div>
  );
}

export default function BaziChart({ chart, language }: Props) {
  const labels = PILLAR_LABELS[language];
  const pillars: [Pillar, string, boolean][] = [
    [chart.year, labels.year, false],
    [chart.month, labels.month, false],
    [chart.day, labels.day, true],
    [chart.hour, labels.hour, false],
  ];

  const elementCounts = [chart.year, chart.month, chart.day, chart.hour].reduce<Record<string, number>>((acc, p) => {
    acc[p.element] = (acc[p.element] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pillars.map(([pillar, label, isDM]) => (
          <PillarCard key={label} pillar={pillar} label={label} isDayMaster={isDM} />
        ))}
      </div>

      <div className="bg-glass rounded-2xl p-5">
        <h3 className="text-amber-300 text-sm uppercase tracking-widest mb-4 text-center">
          {language === 'en' ? 'Five Elements Balance' : 'Fünf-Elemente-Balance'}
        </h3>
        <div className="flex gap-3 flex-wrap justify-center">
          {Object.entries(elementCounts).map(([el, count]) => (
            <div key={el} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: elementColors[el] }} />
              <span className="text-sm text-white/80">{el}</span>
              <span className="text-amber-400 font-bold text-sm">×{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
