import { useState } from 'react';
import { BirthData } from '../types';

interface Props {
  onSubmit: (data: BirthData) => void;
}

export default function BirthForm({ onSubmit }: Props) {
  const [form, setForm] = useState<BirthData>({
    name: '',
    date: '',
    hour: 12,
    location: '',
    language: 'en',
  });

  const hours = Array.from({ length: 24 }, (_, i) => {
    const label = `${String(i).padStart(2, '0')}:00`;
    return { value: i, label };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.location) return;
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-amber-300 text-sm mb-1 tracking-wide">
          {form.language === 'en' ? 'Your Name' : 'Ihr Name'}
        </label>
        <input
          type="text"
          value={form.name}
          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
          placeholder={form.language === 'en' ? 'Enter your name' : 'Namen eingeben'}
          required
          className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-amber-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-amber-300 text-sm mb-1 tracking-wide">
          {form.language === 'en' ? 'Date of Birth' : 'Geburtsdatum'}
        </label>
        <input
          type="date"
          value={form.date}
          onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
          required
          className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors [color-scheme:dark]"
        />
      </div>

      <div>
        <label className="block text-amber-300 text-sm mb-1 tracking-wide">
          {form.language === 'en' ? 'Hour of Birth' : 'Geburtsstunde'}
        </label>
        <select
          value={form.hour}
          onChange={e => setForm(f => ({ ...f, hour: parseInt(e.target.value) }))}
          className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors [color-scheme:dark]"
        >
          {hours.map(h => (
            <option key={h.value} value={h.value} className="bg-indigo-950">
              {h.label}
            </option>
          ))}
        </select>
        <p className="text-white/40 text-xs mt-1">
          {form.language === 'en' ? 'Use 12:00 if unknown' : 'Bei Unklarheit 12:00 verwenden'}
        </p>
      </div>

      <div>
        <label className="block text-amber-300 text-sm mb-1 tracking-wide">
          {form.language === 'en' ? 'Birth Location' : 'Geburtsort'}
        </label>
        <input
          type="text"
          value={form.location}
          onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
          placeholder={form.language === 'en' ? 'City, Country' : 'Stadt, Land'}
          required
          className="w-full bg-white/10 border border-amber-400/30 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-amber-400 transition-colors"
        />
      </div>

      <div>
        <label className="block text-amber-300 text-sm mb-1 tracking-wide">
          {form.language === 'en' ? 'Report Language' : 'Berichtssprache'}
        </label>
        <div className="flex gap-3">
          {(['en', 'de'] as const).map(lang => (
            <button
              key={lang}
              type="button"
              onClick={() => setForm(f => ({ ...f, language: lang }))}
              className={`flex-1 py-3 rounded-xl border transition-all font-semibold tracking-wide ${
                form.language === lang
                  ? 'bg-amber-500 border-amber-400 text-indigo-950'
                  : 'bg-white/10 border-amber-400/30 text-white hover:border-amber-400'
              }`}
            >
              {lang === 'en' ? '🇬🇧 English' : '🇩🇪 Deutsch'}
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-4 mt-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-indigo-950 font-bold text-lg rounded-xl transition-all duration-200 shadow-lg hover:shadow-amber-500/30 active:scale-95"
      >
        {form.language === 'en' ? '✨ Reveal My Chart' : '✨ Mein Horoskop enthüllen'}
      </button>
    </form>
  );
}
