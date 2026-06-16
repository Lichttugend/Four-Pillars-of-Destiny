import { BaziChart } from '../types';
import { interpretations } from '../data/interpretations';

interface Props {
  chart: BaziChart;
  name: string;
  language: 'en' | 'de';
  onUnlock: () => void;
}

export default function FreePreview({ chart, name, language, onUnlock }: Props) {
  const interp = interpretations[chart.dayMaster];
  if (!interp) return null;

  const paragraphs = interp.preview[language];
  const color = interp.traits ? (interpretations[chart.dayMaster] as { color: string }).color : '#f59e0b';

  return (
    <div className="space-y-6">
      <div className="bg-glass rounded-2xl p-6 text-center">
        <p className="text-white/50 text-xs uppercase tracking-widest mb-2">
          {language === 'en' ? 'Day Master Archetype' : 'Tagesmeister-Archetyp'}
        </p>
        <h2 className="text-2xl font-bold text-amber-300 mb-1">{interp.title[language]}</h2>
        <p className="text-white/60 text-sm">{interp.archetype[language]}</p>
        <div className="flex gap-2 flex-wrap justify-center mt-4">
          {interp.traits.map(t => (
            <span key={t} className="px-3 py-1 text-xs rounded-full border" style={{ borderColor: color + '55', color }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-glass rounded-2xl p-6 space-y-4">
        <h3 className="text-amber-300 text-sm uppercase tracking-widest mb-2">
          {language === 'en' ? `Personal Reading for ${name}` : `Persönliche Lesung für ${name}`}
        </h3>

        {paragraphs.slice(0, 2).map((p, i) => (
          <p key={i} className="text-white/80 leading-relaxed text-sm">{p}</p>
        ))}

        <div className="relative">
          <p className="text-white/80 leading-relaxed text-sm" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)', maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)' }}>
            {paragraphs[2]}
          </p>

          <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
            <div className="text-center">
              <p className="text-white/50 text-xs mb-3">
                {language === 'en' ? '— Full reading continues in your report —' : '— Vollständige Lesung in Ihrem Bericht —'}
              </p>
              <button
                onClick={onUnlock}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-indigo-950 font-bold rounded-xl transition-all duration-200 shadow-lg hover:shadow-amber-500/30 active:scale-95"
              >
                {language === 'en' ? '✨ Unlock Full Report' : '✨ Vollständigen Bericht freischalten'}
              </button>
            </div>
          </div>

          <div className="h-24" />
        </div>
      </div>
    </div>
  );
}
