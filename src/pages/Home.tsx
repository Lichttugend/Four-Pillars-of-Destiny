import BirthForm from '../components/BirthForm';
import { BirthData } from '../types';

interface Props {
  onSubmit: (data: BirthData) => void;
}

export default function Home({ onSubmit }: Props) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="stars" />
      <div className="relative z-10 w-full max-w-lg">
        <div className="text-center mb-10">
          <p className="text-amber-400 text-xs uppercase tracking-[0.3em] mb-4">
            四柱推命 · Four Pillars of Destiny
          </p>
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            BaZi<br />
            <span className="text-amber-400">Fortune</span>
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-sm mx-auto">
            Discover the celestial blueprint encoded in your birth moment.
            Ancient wisdom, made accessible.
          </p>
        </div>

        <div className="bg-glass rounded-2xl p-6 md:p-8 shadow-xl shadow-black/30">
          <BirthForm onSubmit={onSubmit} />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[
            { icon: '🧮', label: 'BaZi Chart', sub: 'Instant calculation' },
            { icon: '🌟', label: 'Free Preview', sub: 'Day Master reading' },
            { icon: '📄', label: 'Full Report', sub: 'From €5' },
          ].map(item => (
            <div key={item.label} className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="text-white text-xs font-semibold">{item.label}</p>
              <p className="text-white/40 text-xs">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
