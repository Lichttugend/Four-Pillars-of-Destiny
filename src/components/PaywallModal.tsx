interface Props {
  language: 'en' | 'de';
  onClose: () => void;
}

const plans = {
  en: [
    {
      name: 'Basic Report',
      price: '€5',
      period: 'one-time',
      description: 'Complete personal BaZi analysis in English or German',
      features: ['Full Day Master interpretation', 'Four Pillars analysis', 'Life themes & strengths', '~800 word PDF report'],
      highlight: false,
    },
    {
      name: 'Premium Report',
      price: '€15',
      period: 'one-time',
      description: 'Deep dive with annual forecast',
      features: ['Everything in Basic', 'Annual & Monthly Forecast', 'Bilingual PDF (EN + DE)', 'Career & relationship insights', '~2000 word report'],
      highlight: true,
    },
    {
      name: 'Pro Subscription',
      price: '€7',
      period: '/month',
      description: 'Monthly updates & compatibility readings',
      features: ['Monthly forecast report', 'Compatibility readings', 'Annual cycle analysis', 'Priority support'],
      highlight: false,
    },
  ],
  de: [
    {
      name: 'Basisbericht',
      price: '5 €',
      period: 'einmalig',
      description: 'Vollständige persönliche BaZi-Analyse auf Englisch oder Deutsch',
      features: ['Vollständige Tagesmeister-Interpretation', 'Vier-Pfeiler-Analyse', 'Lebensthemen & Stärken', 'PDF-Bericht (~800 Wörter)'],
      highlight: false,
    },
    {
      name: 'Premium-Bericht',
      price: '15 €',
      period: 'einmalig',
      description: 'Tiefenanalyse mit Jahresprognose',
      features: ['Alles aus Basic', 'Jahres- & Monatsvorhersage', 'Zweisprachiges PDF (EN + DE)', 'Karriere- & Beziehungseinblicke', 'Bericht ~2000 Wörter'],
      highlight: true,
    },
    {
      name: 'Pro-Abonnement',
      price: '7 €',
      period: '/Monat',
      description: 'Monatliche Updates & Kompatibilitätslesungen',
      features: ['Monatlicher Prognosebericht', 'Kompatibilitätslesungen', 'Jahreszyklus-Analyse', 'Priority-Support'],
      highlight: false,
    },
  ],
};

export default function PaywallModal({ language, onClose }: Props) {
  const items = plans[language];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-gradient-to-b from-indigo-950 to-slate-900 border border-amber-500/30 rounded-2xl max-w-3xl w-full p-6 md:p-8 shadow-2xl shadow-amber-500/10 max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white text-2xl leading-none"
        >
          ×
        </button>

        <div className="text-center mb-8">
          <p className="text-amber-400 text-xs uppercase tracking-widest mb-2">
            {language === 'en' ? 'Unlock Your Destiny' : 'Ihr Schicksal enthüllen'}
          </p>
          <h2 className="text-2xl font-bold text-white">
            {language === 'en' ? 'Choose Your Reading' : 'Ihre Lesung wählen'}
          </h2>
          <p className="text-white/50 text-sm mt-2">
            {language === 'en'
              ? 'Deep, personalized insights delivered as a beautiful PDF'
              : 'Tiefe, personalisierte Einblicke als schönes PDF'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {items.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-5 border ${
                plan.highlight
                  ? 'border-amber-400 bg-amber-500/10 relative'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-indigo-950 text-xs font-bold px-3 py-0.5 rounded-full whitespace-nowrap">
                  {language === 'en' ? 'Most Popular' : 'Am beliebtesten'}
                </div>
              )}
              <h3 className={`font-bold text-base mb-1 ${plan.highlight ? 'text-amber-300' : 'text-white'}`}>
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-white/50 text-sm">{plan.period}</span>
              </div>
              <p className="text-white/50 text-xs mb-4">{plan.description}</p>
              <ul className="space-y-2 mb-5">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-xs text-white/70">
                    <span className="text-amber-400 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="w-full py-2.5 rounded-xl border border-amber-500/40 text-amber-400/60 text-sm font-semibold cursor-not-allowed relative overflow-hidden"
              >
                <span>{language === 'en' ? 'Get Report' : 'Bericht erhalten'}</span>
                <span className="absolute top-0.5 right-1.5 text-[10px] text-amber-500/80 font-normal">
                  {language === 'en' ? 'Coming Soon' : 'Demnächst'}
                </span>
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          {language === 'en'
            ? 'Payments powered by Stripe · Secure · Instant delivery'
            : 'Zahlungen über Stripe · Sicher · Sofortige Lieferung'}
        </p>
      </div>
    </div>
  );
}
