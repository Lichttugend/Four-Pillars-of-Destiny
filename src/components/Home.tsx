import { Category, ScoreHistory } from '../types';

interface CategoryInfo {
  id: Exclude<Category, 'mocktest'>;
  label: string;
  icon: string;
  description: string;
  color: string;
}

const CATEGORIES: CategoryInfo[] = [
  { id: 'leseverstehen', label: 'Leseverstehen', icon: '📖', description: 'Texte lesen und verstehen', color: 'from-blue-500 to-blue-700' },
  { id: 'lueckentext', label: 'Lückentext', icon: '✏️', description: 'Fehlende Wörter ergänzen', color: 'from-purple-500 to-purple-700' },
  { id: 'grammatik', label: 'Grammatik', icon: '📝', description: 'Artikel, Fälle, Verbformen', color: 'from-green-500 to-green-700' },
  { id: 'wortschatz', label: 'Wortschatz', icon: '📚', description: 'Bedeutungen und Synonyme', color: 'from-orange-500 to-orange-700' },
  { id: 'rechtschreibung', label: 'Rechtschreibung', icon: '🔤', description: 'Korrekte Schreibweisen', color: 'from-red-500 to-red-700' },
];

interface Props {
  scores: ScoreHistory;
  onStart: (cat: Category) => void;
}

export default function Home({ scores, onStart }: Props) {
  const getScore = (cat: Exclude<Category, 'mocktest'>) => {
    return scores.scores.find(s => s.category === cat);
  };

  const lastMock = scores.mockTestScores[scores.mockTestScores.length - 1];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center py-8">
          <div className="text-5xl mb-3">🇩🇪</div>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">BPS Deutsch-Test</h1>
          <p className="text-gray-600 text-lg">Vorbereitung für die Agentur für Arbeit</p>
          <p className="text-gray-500 text-sm mt-1">Bildungsgutschein · Umschulung · B1/B2 Niveau</p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {CATEGORIES.map(cat => {
            const score = getScore(cat.id);
            return (
              <button
                key={cat.id}
                onClick={() => onStart(cat.id)}
                className="card hover:shadow-xl transition-all duration-200 active:scale-95 text-left group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} text-white text-2xl mb-3 shadow-md`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-800 text-lg group-hover:text-blue-700 transition-colors">{cat.label}</h3>
                <p className="text-gray-500 text-sm mb-3">{cat.description}</p>
                {score ? (
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-blue-500 h-1.5 rounded-full"
                        style={{ width: `${Math.round((score.correct / score.total) * 100)}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      {score.correct}/{score.total}
                    </span>
                  </div>
                ) : (
                  <span className="text-xs text-blue-500 font-medium">Noch nicht geübt</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mock Test button */}
        <button
          onClick={() => onStart('mocktest')}
          className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white rounded-2xl p-5 text-left transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 mb-4"
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl">⏱️</div>
            <div>
              <h3 className="font-bold text-xl">Mock Test</h3>
              <p className="text-gray-300 text-sm">30 Minuten · Alle Kategorien · Echte Prüfungssimulation</p>
              {lastMock && (
                <p className="text-gray-400 text-xs mt-1">
                  Letztes Ergebnis: {lastMock.score}/{lastMock.total} ({Math.round(lastMock.score/lastMock.total*100)}%)
                </p>
              )}
            </div>
          </div>
        </button>

        {/* Info box */}
        <div className="card bg-amber-50 border border-amber-200">
          <h4 className="font-semibold text-amber-800 mb-2">💡 Über den BPS Deutsch-Test</h4>
          <ul className="text-amber-700 text-sm space-y-1">
            <li>• Der Test findet beim Berufspsychologischen Service (BPS) der Agentur für Arbeit statt</li>
            <li>• Er prüft Deutschkenntnisse auf B1/B2 Niveau</li>
            <li>• Voraussetzung für den Bildungsgutschein zur Umschulung</li>
            <li>• Bereiche: Lesen, Schreiben, Grammatik, Wortschatz</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
