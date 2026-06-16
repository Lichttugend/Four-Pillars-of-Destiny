export interface DayMasterInterpretation {
  title: { en: string; de: string };
  archetype: { en: string; de: string };
  preview: { en: string[]; de: string[] };
  traits: string[];
  color: string;
}

export const interpretations: Record<string, DayMasterInterpretation> = {
  '甲': {
    title: { en: 'Yang Wood — The Pioneer', de: 'Yang Holz — Der Pionier' },
    archetype: { en: 'Visionary Leader', de: 'Visionärer Anführer' },
    preview: {
      en: [
        'You carry the energy of the towering oak — upward-reaching, rooted, and unyielding. Your nature is to grow, to lead, and to pioneer paths that others dare not take. Like a great tree, you give shelter to those around you while striving endlessly toward the light.',
        'In relationships, you are loyal and protective. You expect the same steadfastness from others, and may struggle when those around you seem too flexible or changeable. Your greatest gift is your sense of direction — when you commit to a vision, you pursue it with extraordinary persistence.',
        'Your life lessons often revolve around learning to bend without breaking. The most powerful trees survive storms not by rigidity, but by knowing when to flex. Cultivating adaptability alongside your natural strength will unlock your fullest potential.',
      ],
      de: [
        'Du trägst die Energie der aufragenden Eiche in dir — aufwärts strebend, verwurzelt und unnachgiebig. Deine Natur ist es zu wachsen, zu führen und Wege zu bahnen, die andere sich nicht zu gehen trauen. Wie ein großer Baum gibst du den Menschen um dich herum Schutz, während du unaufhörlich nach dem Licht strebst.',
        'In Beziehungen bist du loyal und beschützend. Du erwartest dieselbe Beständigkeit von anderen und kannst Schwierigkeiten haben, wenn Menschen um dich herum zu flexibel oder wechselhaft erscheinen. Dein größtes Geschenk ist dein Sinn für Richtung — wenn du dich einer Vision verschreibst, verfolgst du sie mit außergewöhnlicher Beharrlichkeit.',
        'Deine Lebenslektionen drehen sich oft darum zu lernen, sich zu biegen ohne zu brechen. Die mächtigsten Bäume überstehen Stürme nicht durch Starrheit, sondern dadurch, dass sie wissen, wann sie nachgeben müssen. Die Entwicklung von Anpassungsfähigkeit neben deiner natürlichen Stärke wird dein volles Potenzial entfalten.',
      ],
    },
    traits: ['Leadership', 'Vision', 'Persistence', 'Integrity'],
    color: '#22c55e',
  },
  '乙': {
    title: { en: 'Yin Wood — The Diplomat', de: 'Yin Holz — Die Diplomatin' },
    archetype: { en: 'Creative Mediator', de: 'Kreative Vermittlerin' },
    preview: {
      en: [
        'You embody the graceful vine — flexible, creative, and always finding a way forward even through the smallest openings. Where others see obstacles, you discover pathways. Your strength lies not in force but in finesse, not in dominance but in elegant adaptability.',
        'Socially gifted and emotionally perceptive, you have a rare ability to bring people together. You sense undercurrents in relationships long before they surface, giving you a natural edge in diplomacy, counseling, and the arts.',
        'Your challenge is to avoid becoming too dependent on your surroundings for support. The vine must eventually find its own structure. Developing inner confidence that does not rely on external validation will be your most transformative journey.',
      ],
      de: [
        'Du verkörperst die anmutige Weinrebe — flexibel, kreativ und immer einen Weg vorwärts findend, selbst durch die kleinsten Öffnungen. Wo andere Hindernisse sehen, entdeckst du Wege. Deine Stärke liegt nicht in Kraft, sondern in Finesse, nicht in Dominanz, sondern in eleganter Anpassungsfähigkeit.',
        'Sozial begabt und emotional wahrnehmend, hast du eine seltene Fähigkeit, Menschen zusammenzubringen. Du spürst Unterströmungen in Beziehungen lange bevor sie an die Oberfläche treten, was dir einen natürlichen Vorteil in Diplomatie, Beratung und Kunst verleiht.',
        'Deine Herausforderung besteht darin, nicht zu abhängig von deiner Umgebung für Unterstützung zu werden. Die Rebe muss schließlich ihre eigene Struktur finden. Das Entwickeln innerer Zuversicht, die nicht auf externe Bestätigung angewiesen ist, wird deine transformativste Reise sein.',
      ],
    },
    traits: ['Creativity', 'Diplomacy', 'Flexibility', 'Empathy'],
    color: '#86efac',
  },
  '丙': {
    title: { en: 'Yang Fire — The Luminary', de: 'Yang Feuer — Das Licht' },
    archetype: { en: 'Charismatic Leader', de: 'Charismatischer Anführer' },
    preview: {
      en: [
        'Like the sun itself, you radiate warmth, light, and energy wherever you go. People are drawn to your presence as naturally as flowers turn toward dawn. Your charisma is not manufactured — it is an innate expression of your generous, life-giving spirit.',
        'You think big, dream expansively, and inspire others to reach beyond what they believed possible. In leadership roles you shine brightest, energizing teams and communities with your enthusiasm and optimism.',
        'Your shadow side is the same as the sun\'s — you can overwhelm those who get too close, and your desire to illuminate everything can leave you feeling drained. Learning to conserve your energy and choose where you shine will help you sustain your brilliance across a lifetime.',
      ],
      de: [
        'Wie die Sonne selbst strahlst du Wärme, Licht und Energie aus, wohin du auch gehst. Menschen werden von deiner Gegenwart angezogen, so natürlich wie Blumen sich der Morgendämmerung zuwenden. Dein Charisma ist nicht künstlich — es ist ein angeborener Ausdruck deines großzügigen, lebensgebenden Geistes.',
        'Du denkst groß, träumst weitläufig und inspirierst andere, über das hinauszugehen, was sie für möglich hielten. In Führungsrollen strahlst du am hellsten und energisierst Teams und Gemeinschaften mit deiner Begeisterung und deinem Optimismus.',
        'Deine Schattenseite ist dieselbe wie die der Sonne — du kannst diejenigen überwältigen, die zu nahe kommen, und dein Wunsch, alles zu beleuchten, kann dich erschöpft fühlen lassen. Zu lernen, deine Energie zu bewahren und zu wählen, wo du leuchtst, wird dir helfen, deinen Glanz ein Leben lang aufrechtzuerhalten.',
      ],
    },
    traits: ['Charisma', 'Generosity', 'Inspiration', 'Optimism'],
    color: '#f97316',
  },
  '丁': {
    title: { en: 'Yin Fire — The Illuminator', de: 'Yin Feuer — Die Erleuchterin' },
    archetype: { en: 'Intuitive Visionary', de: 'Intuitive Visionärin' },
    preview: {
      en: [
        'You are the candle flame — steady, intimate, and capable of illuminating what daylight obscures. Your warmth draws people in for deep, meaningful conversation. Unlike the blazing sun, your light is focused and precise, perfect for illuminating truth in shadow.',
        'Highly intuitive, you often know things before you can explain how. This inner knowing is one of your greatest gifts — learn to trust it. You have a natural talent for mentoring, healing, and bringing comfort to those in darkness.',
        'Your challenge is consistency. A flame needs fuel, and you need inspiration and connection to stay lit. Periods of isolation or meaningless routine can dim your fire. Surround yourself with people and purposes that reignite your passion.',
      ],
      de: [
        'Du bist die Kerzenflamme — beständig, intim und in der Lage, zu beleuchten, was das Tageslicht verbirgt. Deine Wärme zieht Menschen zu tiefen, bedeutungsvollen Gesprächen an. Anders als die brennende Sonne ist dein Licht fokussiert und präzise, perfekt dafür, Wahrheit im Schatten zu beleuchten.',
        'Hochgradig intuitiv weißt du oft Dinge, bevor du erklären kannst, wie. Dieses innere Wissen ist eines deiner größten Geschenke — lerne ihm zu vertrauen. Du hast ein natürliches Talent für Mentoring, Heilung und das Bringen von Trost zu denen in der Dunkelheit.',
        'Deine Herausforderung ist Beständigkeit. Eine Flamme braucht Brennstoff, und du brauchst Inspiration und Verbindung, um zu brennen. Perioden der Isolation oder bedeutungsloser Routine können dein Feuer dämpfen. Umgib dich mit Menschen und Zwecken, die deine Leidenschaft neu entfachen.',
      ],
    },
    traits: ['Intuition', 'Warmth', 'Insight', 'Mentoring'],
    color: '#fb923c',
  },
  '戊': {
    title: { en: 'Yang Earth — The Mountain', de: 'Yang Erde — Der Berg' },
    archetype: { en: 'Steadfast Protector', de: 'Standhafter Beschützer' },
    preview: {
      en: [
        'You are the mountain — immovable, reliable, and a source of shelter for all who seek refuge. Your presence brings stability to every environment you inhabit. Where others are swept away by life\'s turbulence, you remain grounded and unshakeable.',
        'People trust you instinctively. You have an innate ability to create safe spaces — physically, emotionally, and spiritually. Your natural generosity extends to giving time, resources, and presence without expectation of return.',
        'Mountains can be difficult to move, and so can you. When your perspective becomes fixed, it can create friction with those who see the world differently. Your greatest growth comes from learning to value what lies in the valleys as much as the peaks.',
      ],
      de: [
        'Du bist der Berg — unbeweglich, zuverlässig und eine Quelle des Schutzes für alle, die Zuflucht suchen. Deine Gegenwart bringt Stabilität in jede Umgebung, in der du dich aufhältst. Wo andere von den Turbulenzen des Lebens weggespült werden, bleibst du geerdet und unerschütterlich.',
        'Menschen vertrauen dir instinktiv. Du hast eine angeborene Fähigkeit, sichere Räume zu schaffen — physisch, emotional und spirituell. Deine natürliche Großzügigkeit erstreckt sich darauf, Zeit, Ressourcen und Präsenz zu geben, ohne Erwartung einer Gegenleistung.',
        'Berge können schwer zu bewegen sein, und so kannst auch du sein. Wenn deine Perspektive festgelegt wird, kann es zu Reibungen mit denen führen, die die Welt anders sehen. Dein größtes Wachstum kommt davon zu lernen, das zu schätzen, was in den Tälern liegt, genauso wie die Gipfel.',
      ],
    },
    traits: ['Stability', 'Reliability', 'Generosity', 'Patience'],
    color: '#ca8a04',
  },
  '己': {
    title: { en: 'Yin Earth — The Nurturer', de: 'Yin Erde — Die Fürsorgende' },
    archetype: { en: 'Practical Caregiver', de: 'Praktische Fürsorgende' },
    preview: {
      en: [
        'Like fertile garden soil, you are the nurturer — creating the conditions in which others grow and flourish. Your attention to detail, your practical wisdom, and your quiet dedication make you indispensable in every circle you inhabit.',
        'You excel at managing complexity beneath the surface. While others focus on the visible, you attend to roots, foundations, and the subtle systems that make everything else possible. This makes you a masterful organizer, caregiver, and administrator.',
        'Your challenge is learning to receive as graciously as you give. Garden soil gives endlessly, but without replenishment it becomes depleted. Allowing others to care for you — and accepting help without guilt — will renew your boundless capacity to nurture.',
      ],
      de: [
        'Wie fruchtbare Gartenerde bist du die Fürsorgende — schaffst die Bedingungen, unter denen andere wachsen und gedeihen. Deine Liebe zum Detail, deine praktische Weisheit und deine stille Hingabe machen dich in jedem Kreis, in dem du dich aufhältst, unverzichtbar.',
        'Du übertriffst dich im Umgang mit Komplexität unter der Oberfläche. Während andere sich auf das Sichtbare konzentrieren, kümmerst du dich um Wurzeln, Fundamente und die subtilen Systeme, die alles andere erst möglich machen. Dies macht dich zu einer meisterhaften Organisatorin, Fürsorgende und Verwalterin.',
        'Deine Herausforderung besteht darin zu lernen, so anmutig zu empfangen, wie du gibst. Gartenerde gibt endlos, aber ohne Wiederauffüllung wird sie erschöpft. Anderen zu erlauben, sich um dich zu kümmern — und Hilfe ohne Schuldgefühle anzunehmen — wird deine grenzenlose Fähigkeit zur Fürsorge erneuern.',
      ],
    },
    traits: ['Nurturing', 'Detail', 'Practicality', 'Dedication'],
    color: '#eab308',
  },
  '庚': {
    title: { en: 'Yang Metal — The Blade', de: 'Yang Metall — Die Klinge' },
    archetype: { en: 'Decisive Justice-Seeker', de: 'Entscheidungsfreudige Gerechtigkeitssuchende' },
    preview: {
      en: [
        'You carry the energy of forged metal — strong, precise, and shaped through the fire of challenge into something extraordinary. Your nature is decisive, courageous, and deeply committed to fairness. When you believe in something, you pursue it with relentless determination.',
        'You have a gift for cutting through complexity and ambiguity to find the essential truth. Where others deliberate endlessly, you act. Your directness can be startling, but it is always rooted in a genuine desire for clarity and integrity.',
        'The blade that never bends may one day shatter. Your path involves learning the wisdom of strategic flexibility — knowing when to press forward and when to yield gracefully. Developing emotional intelligence alongside your formidable mental strength will make you unstoppable.',
      ],
      de: [
        'Du trägst die Energie von geschmiedetem Metall — stark, präzise und durch das Feuer der Herausforderung zu etwas Außergewöhnlichem geformt. Deine Natur ist entschlossen, mutig und tief dem Gerechtigkeitssinn verpflichtet. Wenn du an etwas glaubst, verfolgst du es mit unerbittlicher Entschlossenheit.',
        'Du hast ein Talent dafür, durch Komplexität und Mehrdeutigkeit durchzuschneiden, um die wesentliche Wahrheit zu finden. Wo andere endlos überlegen, handelst du. Deine Direktheit kann überraschend sein, aber sie ist immer in einem aufrichtigen Wunsch nach Klarheit und Integrität verwurzelt.',
        'Die Klinge, die sich nie biegt, kann eines Tages zerbrechen. Dein Weg beinhaltet das Erlernen der Weisheit strategischer Flexibilität — zu wissen, wann voranzuschreiten und wann anmutig nachzugeben ist. Die Entwicklung emotionaler Intelligenz neben deiner gewaltigen mentalen Stärke wird dich unaufhaltsam machen.',
      ],
    },
    traits: ['Decisiveness', 'Justice', 'Courage', 'Clarity'],
    color: '#94a3b8',
  },
  '辛': {
    title: { en: 'Yin Metal — The Jewel', de: 'Yin Metall — Das Juwel' },
    archetype: { en: 'Refined Perfectionist', de: 'Verfeinerter Perfektionist' },
    preview: {
      en: [
        'You are precious metal refined to its purest form — a jewel whose value comes from the exactness of your cut and the clarity of your nature. You have an exquisite aesthetic sensibility and a deep appreciation for quality, elegance, and precision in all things.',
        'Your standards are high — for yourself above all. This perfectionist streak drives you toward remarkable achievements, but can also make the journey unnecessarily painful when your inevitable human imperfections surface. You are far harder on yourself than anyone else could be.',
        'Your evolution lies in embracing the concept of wabi-sabi — finding beauty in imperfection. The most precious gems have inclusions. The most authentic art has irregularities. Allowing yourself and others to be beautifully imperfect will release you into a new dimension of peace and creativity.',
      ],
      de: [
        'Du bist Edelmetall, das zu seiner reinsten Form verfeinert wurde — ein Juwel, dessen Wert aus der Genauigkeit deines Schnitts und der Klarheit deiner Natur kommt. Du hast eine exquisite ästhetische Sensibilität und eine tiefe Wertschätzung für Qualität, Eleganz und Präzision in allen Dingen.',
        'Deine Standards sind hoch — vor allem für dich selbst. Dieser Perfektionismus treibt dich zu bemerkenswerten Leistungen, kann aber auch die Reise unnötig schmerzhaft machen, wenn deine unvermeidlichen menschlichen Unvollkommenheiten auftauchen. Du bist dir selbst gegenüber viel strenger als jeder andere.',
        'Deine Entwicklung liegt darin, das Konzept des Wabi-Sabi zu umarmen — Schönheit in Unvollkommenheit zu finden. Die kostbarsten Edelsteine haben Einschlüsse. Die authentischste Kunst hat Unregelmäßigkeiten. Sich selbst und anderen zu erlauben, wunderschön unvollkommen zu sein, wird dich in eine neue Dimension des Friedens und der Kreativität befreien.',
      ],
    },
    traits: ['Refinement', 'Aesthetics', 'Precision', 'Excellence'],
    color: '#e2e8f0',
  },
  '壬': {
    title: { en: 'Yang Water — The Ocean', de: 'Yang Wasser — Der Ozean' },
    archetype: { en: 'Adventurous Strategist', de: 'Abenteuerlustiger Stratege' },
    preview: {
      en: [
        'Like the vast ocean, your mind contains depths that few will ever fully explore. You are a natural strategist and systems thinker, capable of holding enormous complexity with apparent ease. Your intelligence is fluid — you adapt, flow around obstacles, and find the path of least resistance toward your goals.',
        'You are drawn to exploration — of ideas, places, and the furthest reaches of human experience. Boredom is your true enemy. When properly stimulated, your capacity for insight and innovation is virtually limitless. You have the ability to see patterns and connections invisible to most.',
        'Like the ocean, you can be both calm and overwhelming. In times of stress, your emotional currents run deep and can become turbulent. Learning to be a harbor as well as an ocean — creating still waters within yourself — will allow others to fully benefit from your extraordinary depth.',
      ],
      de: [
        'Wie der weite Ozean enthält dein Geist Tiefen, die nur wenige jemals vollständig erkunden werden. Du bist ein natürlicher Stratege und Systemdenker, der in der Lage ist, enorme Komplexität mit scheinbarer Leichtigkeit zu halten. Deine Intelligenz ist fließend — du passt dich an, umgehst Hindernisse und findest den Weg des geringsten Widerstands zu deinen Zielen.',
        'Du wirst zur Erkundung hingezogen — von Ideen, Orten und den weitesten Grenzen menschlicher Erfahrung. Langeweile ist dein wahrer Feind. Wenn du richtig stimuliert wirst, ist deine Kapazität für Einsicht und Innovation praktisch unbegrenzt. Du hast die Fähigkeit, Muster und Verbindungen zu sehen, die für die meisten unsichtbar sind.',
        'Wie der Ozean kannst du sowohl ruhig als auch überwältigend sein. In Zeiten von Stress laufen deine emotionalen Strömungen tief und können turbulent werden. Zu lernen, ein Hafen sowie ein Ozean zu sein — stille Gewässer in dir selbst zu schaffen — wird anderen ermöglichen, voll von deiner außergewöhnlichen Tiefe zu profitieren.',
      ],
    },
    traits: ['Intelligence', 'Adaptability', 'Strategy', 'Exploration'],
    color: '#3b82f6',
  },
  '癸': {
    title: { en: 'Yin Water — The Spring', de: 'Yin Wasser — Die Quelle' },
    archetype: { en: 'Empathic Mystic', de: 'Empathische Mystikerin' },
    preview: {
      en: [
        'You are the mountain spring — pure, perceptive, and emerging from hidden depths. Your empathy and intuition run so deep that you often feel what others feel before they feel it themselves. This extraordinary sensitivity is both your greatest gift and your most delicate challenge.',
        'You have a natural gift for healing, counseling, and spiritual understanding. People open up to you instinctively, sensing your non-judgmental presence. The unseen world — dreams, symbols, intuition — speaks to you in a language most people never hear.',
        'Your challenge is maintaining boundaries. A spring that gives endlessly without being replenished will dry up. Regular solitude, time in nature, and practices that restore your inner reserves are not luxuries for you — they are essential maintenance for the remarkable gifts you carry.',
      ],
      de: [
        'Du bist die Bergquelle — rein, wahrnehmend und aus verborgenen Tiefen hervorströmend. Deine Empathie und Intuition reichen so tief, dass du oft fühlst, was andere fühlen, bevor sie es selbst fühlen. Diese außergewöhnliche Sensibilität ist sowohl dein größtes Geschenk als auch deine zarteste Herausforderung.',
        'Du hast ein natürliches Talent für Heilung, Beratung und spirituelles Verständnis. Menschen öffnen sich dir instinktiv und spüren deine nicht urteilende Präsenz. Die unsichtbare Welt — Träume, Symbole, Intuition — spricht zu dir in einer Sprache, die die meisten Menschen nie hören.',
        'Deine Herausforderung ist die Aufrechterhaltung von Grenzen. Eine Quelle, die endlos gibt, ohne aufgefüllt zu werden, wird versiegen. Regelmäßige Einsamkeit, Zeit in der Natur und Praktiken, die deine inneren Reserven wiederherstellen, sind für dich keine Luxusgüter — sie sind wesentliche Pflege für die bemerkenswerten Gaben, die du trägst.',
      ],
    },
    traits: ['Empathy', 'Intuition', 'Healing', 'Perception'],
    color: '#60a5fa',
  },
};

export const elementColors: Record<string, string> = {
  Wood: '#22c55e',
  Fire: '#f97316',
  Earth: '#eab308',
  Metal: '#94a3b8',
  Water: '#3b82f6',
};
