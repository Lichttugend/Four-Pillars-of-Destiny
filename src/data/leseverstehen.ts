import { Question } from '../types';

const bewerbungsText = `Der Bewerbungsprozess in Deutschland

Eine Bewerbung in Deutschland besteht in der Regel aus mehreren Teilen: dem Anschreiben, dem Lebenslauf und den Zeugnissen. Das Anschreiben sollte nicht länger als eine Seite sein und muss individuell auf die jeweilige Stelle angepasst werden. Der Lebenslauf wird in Deutschland üblicherweise in tabellarischer Form erstellt und enthält persönliche Daten, Schulabschlüsse, Berufsausbildungen und Berufserfahrungen in umgekehrt chronologischer Reihenfolge.

Nachdem eine Bewerbung eingereicht wurde, dauert es meistens zwei bis vier Wochen, bis man eine Rückmeldung erhält. Wird man zu einem Vorstellungsgespräch eingeladen, sollte man sich gut vorbereiten. Dazu gehört, das Unternehmen zu recherchieren, typische Fragen zu üben und pünktlich zu erscheinen. In Deutschland gilt Pünktlichkeit als sehr wichtig – man sollte mindestens fünf Minuten vor dem vereinbarten Termin da sein.

Beim Vorstellungsgespräch werden oft Fragen zur eigenen Qualifikation, zu Stärken und Schwächen sowie zur Motivation gestellt. Es ist üblich, Fragen über das Gehalt erst am Ende des Gesprächs zu besprechen, wenn der Arbeitgeber das Thema anspricht. Nach dem Gespräch kann man eine kurze Dankes-E-Mail schreiben, was einen guten Eindruck hinterlässt.

Wer eine Absage erhält, sollte nicht entmutigt sein. Es ist normal, mehrere Bewerbungen zu verschicken, bevor man eine Zusage bekommt. Manchmal kann man auch nach einer Absage nachfragen, warum die Bewerbung nicht erfolgreich war, um daraus zu lernen.`;

const arbeitnehmerrechteText = `Arbeitnehmerrechte in Deutschland

In Deutschland genießen Arbeitnehmer umfangreichen gesetzlichen Schutz. Zu den wichtigsten Rechten gehören das Recht auf Urlaub, das Recht auf einen Mindestlohn sowie der Schutz vor ungerechtfertigter Kündigung. Der gesetzliche Mindesturlaub beträgt 24 Werktage im Jahr, wobei viele Tarifverträge mehr Urlaubstage vorsehen.

Der gesetzliche Mindestlohn gilt für fast alle Beschäftigten in Deutschland und wird regelmäßig von der Mindestlohnkommission überprüft und angepasst. Ausnahmen gelten beispielsweise für Auszubildende, Langzeitarbeitslose in den ersten sechs Monaten nach der Einstellung sowie für Jugendliche unter 18 Jahren ohne Berufsausbildung.

Der Kündigungsschutz greift ab einer Betriebszugehörigkeit von mehr als sechs Monaten in Betrieben mit mehr als zehn Mitarbeitern. Eine Kündigung muss in der Regel schriftlich erfolgen und eine Begründung enthalten. Arbeitnehmer können gegen eine Kündigung vor dem Arbeitsgericht klagen, wenn sie diese für ungerechtfertigt halten.

Darüber hinaus haben Arbeitnehmer das Recht, einem Betriebsrat anzugehören oder an der Wahl eines Betriebsrats teilzunehmen. Der Betriebsrat vertritt die Interessen der Belegschaft gegenüber dem Arbeitgeber und hat Mitspracherechte bei wichtigen betrieblichen Entscheidungen wie Überstunden, Kurzarbeit oder Entlassungen.

Bei Krankheit haben Arbeitnehmer Anspruch auf Lohnfortzahlung für bis zu sechs Wochen. Danach übernimmt die gesetzliche Krankenkasse das Krankengeld, das 70 Prozent des Bruttogehalts beträgt.`;

const sozialversicherungText = `Das deutsche Sozialversicherungssystem

Das deutsche Sozialversicherungssystem gilt als eines der umfassendsten der Welt. Es basiert auf dem Prinzip der Solidarität: Alle Beitragszahler finanzieren gemeinsam die Leistungen, die jeder im Bedarfsfall in Anspruch nehmen kann. Das System besteht aus fünf Säulen: der Krankenversicherung, der Pflegeversicherung, der Rentenversicherung, der Arbeitslosenversicherung und der Unfallversicherung.

Die gesetzliche Krankenversicherung (GKV) ist für die meisten Beschäftigten Pflicht. Die Beiträge werden je zur Hälfte vom Arbeitnehmer und vom Arbeitgeber getragen. Wer über der Jahresarbeitsentgeltgrenze verdient, kann sich privat versichern. Die Krankenversicherung deckt Arztbesuche, Krankenhausaufenthalte, Medikamente und viele weitere medizinische Leistungen ab.

Die Rentenversicherung sichert das Einkommen im Alter. Das Rentensystem in Deutschland funktioniert nach dem Umlageverfahren: Die aktuell Beschäftigten finanzieren die Renten der aktuell Rentner. Die Rentenhöhe richtet sich nach der Anzahl der Beitragsjahre und dem durchschnittlichen Verdienst während des Berufslebens.

Die Arbeitslosenversicherung zahlt bei Jobverlust das Arbeitslosengeld I. Um Anspruch darauf zu haben, muss man in den letzten zwei Jahren mindestens zwölf Monate lang in die Arbeitslosenversicherung eingezahlt haben. Die Höhe des Arbeitslosengeldes beträgt 60 Prozent des letzten Nettoeinkommens, bei Personen mit Kindern 67 Prozent.

Wer keine Ansprüche auf Arbeitslosengeld I hat oder wessen Ansprüche ausgelaufen sind, kann unter bestimmten Voraussetzungen Bürgergeld (früher: Arbeitslosengeld II / Hartz IV) beantragen. Das Bürgergeld soll den Lebensunterhalt sichern und wird vom Jobcenter verwaltet.`;

export const leseVerstehenQuestions: Question[] = [
  // Text 1: Bewerbungsprozess
  {
    id: 'lv1',
    category: 'leseverstehen',
    text: bewerbungsText,
    question: 'Welche Teile gehören laut dem Text zu einer vollständigen deutschen Bewerbung?',
    options: [
      'Nur Lebenslauf und Zeugnisse',
      'Anschreiben, Lebenslauf und Zeugnisse',
      'Motivationsschreiben, Lebenslauf und Referenzen',
      'Anschreiben, Portfolio und Zertifikate',
    ],
    correctIndex: 1,
    explanation:
      'Der Text nennt explizit: „Eine Bewerbung in Deutschland besteht in der Regel aus mehreren Teilen: dem Anschreiben, dem Lebenslauf und den Zeugnissen."',
  },
  {
    id: 'lv2',
    category: 'leseverstehen',
    text: bewerbungsText,
    question: 'Wie lange dauert es meistens, bis man nach einer Bewerbung eine Rückmeldung erhält?',
    options: [
      'Einen bis zwei Wochen',
      'Drei bis sechs Wochen',
      'Zwei bis vier Wochen',
      'Vier bis acht Wochen',
    ],
    correctIndex: 2,
    explanation: 'Im Text steht: „dauert es meistens zwei bis vier Wochen, bis man eine Rückmeldung erhält."',
  },
  {
    id: 'lv3',
    category: 'leseverstehen',
    text: bewerbungsText,
    question: 'Was sollte man bezüglich Pünktlichkeit beim Vorstellungsgespräch beachten?',
    options: [
      'Genau zur vereinbarten Zeit erscheinen',
      'Mindestens 15 Minuten früher erscheinen',
      'Mindestens fünf Minuten vor dem Termin da sein',
      'Pünktlichkeit ist in Deutschland nicht so wichtig',
    ],
    correctIndex: 2,
    explanation: 'Der Text erklärt: „man sollte mindestens fünf Minuten vor dem vereinbarten Termin da sein."',
  },
  {
    id: 'lv4',
    category: 'leseverstehen',
    text: bewerbungsText,
    question: 'Wann sollte man laut dem Text das Thema Gehalt ansprechen?',
    options: [
      'Direkt am Anfang des Gesprächs',
      'Wenn der Arbeitgeber das Thema anspricht, am Ende des Gesprächs',
      'In der Bewerbungs-E-Mail vor dem Gespräch',
      'Man sollte das Thema Gehalt gar nicht ansprechen',
    ],
    correctIndex: 1,
    explanation:
      'Im Text steht: „Es ist üblich, Fragen über das Gehalt erst am Ende des Gesprächs zu besprechen, wenn der Arbeitgeber das Thema anspricht."',
  },
  {
    id: 'lv5',
    category: 'leseverstehen',
    text: bewerbungsText,
    question: 'Was kann man nach einem Vorstellungsgespräch tun, um einen guten Eindruck zu hinterlassen?',
    options: [
      'Den Arbeitgeber täglich anrufen',
      'Eine kurze Dankes-E-Mail schreiben',
      'Sofort die Gehaltsvorstellungen schriftlich einreichen',
      'Nach drei Tagen persönlich vorbeikommen',
    ],
    correctIndex: 1,
    explanation: 'Der Text schreibt: „Nach dem Gespräch kann man eine kurze Dankes-E-Mail schreiben, was einen guten Eindruck hinterlässt."',
  },
  // Text 2: Arbeitnehmerrechte
  {
    id: 'lv6',
    category: 'leseverstehen',
    text: arbeitnehmerrechteText,
    question: 'Wie viele Werktage Mindesturlaub haben Arbeitnehmer in Deutschland gesetzlich Anspruch?',
    options: ['20 Werktage', '24 Werktage', '30 Werktage', '28 Werktage'],
    correctIndex: 1,
    explanation: 'Der Text besagt: „Der gesetzliche Mindesturlaub beträgt 24 Werktage im Jahr."',
  },
  {
    id: 'lv7',
    category: 'leseverstehen',
    text: arbeitnehmerrechteText,
    question: 'Wer ist laut dem Text vom Mindestlohn ausgenommen?',
    options: [
      'Teilzeitbeschäftigte',
      'Auszubildende und Jugendliche unter 18 Jahren ohne Berufsausbildung',
      'Alle Beschäftigten mit weniger als einem Jahr Betriebszugehörigkeit',
      'Beschäftigte in kleinen Unternehmen',
    ],
    correctIndex: 1,
    explanation:
      'Laut Text gelten Ausnahmen „beispielsweise für Auszubildende, Langzeitarbeitslose in den ersten sechs Monaten nach der Einstellung sowie für Jugendliche unter 18 Jahren ohne Berufsausbildung."',
  },
  {
    id: 'lv8',
    category: 'leseverstehen',
    text: arbeitnehmerrechteText,
    question: 'Ab wann greift der Kündigungsschutz laut dem Text?',
    options: [
      'Ab dem ersten Arbeitstag',
      'Nach drei Monaten Betriebszugehörigkeit',
      'Nach mehr als sechs Monaten Betriebszugehörigkeit in Betrieben mit mehr als zehn Mitarbeitern',
      'Nach einem Jahr Betriebszugehörigkeit',
    ],
    correctIndex: 2,
    explanation:
      'Im Text steht: „Der Kündigungsschutz greift ab einer Betriebszugehörigkeit von mehr als sechs Monaten in Betrieben mit mehr als zehn Mitarbeitern."',
  },
  {
    id: 'lv9',
    category: 'leseverstehen',
    text: arbeitnehmerrechteText,
    question: 'Was zahlt der Arbeitgeber bei Krankheit und wie lange?',
    options: [
      'Das volle Gehalt für drei Monate',
      'Die Lohnfortzahlung für bis zu sechs Wochen',
      'Das halbe Gehalt für vier Wochen',
      'Nichts – das übernimmt sofort die Krankenkasse',
    ],
    correctIndex: 1,
    explanation: 'Laut Text: „Bei Krankheit haben Arbeitnehmer Anspruch auf Lohnfortzahlung für bis zu sechs Wochen."',
  },
  {
    id: 'lv10',
    category: 'leseverstehen',
    text: arbeitnehmerrechteText,
    question: 'Welche Rechte hat der Betriebsrat laut dem Text?',
    options: [
      'Er kann Arbeitnehmer entlassen',
      'Er vertritt die Belegschaft und hat Mitspracherechte bei wichtigen betrieblichen Entscheidungen',
      'Er verhandelt ausschließlich Gehaltserhöhungen',
      'Er kontrolliert die Arbeit der Geschäftsführung',
    ],
    correctIndex: 1,
    explanation:
      'Der Text beschreibt: „Der Betriebsrat vertritt die Interessen der Belegschaft gegenüber dem Arbeitgeber und hat Mitspracherechte bei wichtigen betrieblichen Entscheidungen."',
  },
  // Text 3: Sozialversicherung
  {
    id: 'lv11',
    category: 'leseverstehen',
    text: sozialversicherungText,
    question: 'Auf welchem Prinzip basiert das deutsche Sozialversicherungssystem?',
    options: [
      'Dem Prinzip der Eigenverantwortung',
      'Dem Prinzip der Solidarität',
      'Dem Prinzip des freien Marktes',
      'Dem Prinzip der staatlichen Kontrolle',
    ],
    correctIndex: 1,
    explanation: 'Im Text steht: „Es basiert auf dem Prinzip der Solidarität: Alle Beitragszahler finanzieren gemeinsam die Leistungen."',
  },
  {
    id: 'lv12',
    category: 'leseverstehen',
    text: sozialversicherungText,
    question: 'Wie werden die Beiträge zur gesetzlichen Krankenversicherung aufgeteilt?',
    options: [
      'Vollständig vom Arbeitnehmer getragen',
      'Vollständig vom Arbeitgeber getragen',
      'Je zur Hälfte vom Arbeitnehmer und vom Arbeitgeber getragen',
      'Zu zwei Dritteln vom Staat und zu einem Drittel vom Arbeitnehmer',
    ],
    correctIndex: 2,
    explanation: 'Der Text erklärt: „Die Beiträge werden je zur Hälfte vom Arbeitnehmer und vom Arbeitgeber getragen."',
  },
  {
    id: 'lv13',
    category: 'leseverstehen',
    text: sozialversicherungText,
    question: 'Wie viele Säulen hat das deutsche Sozialversicherungssystem?',
    options: ['Drei Säulen', 'Vier Säulen', 'Fünf Säulen', 'Sechs Säulen'],
    correctIndex: 2,
    explanation:
      'Der Text zählt auf: „Das System besteht aus fünf Säulen: der Krankenversicherung, der Pflegeversicherung, der Rentenversicherung, der Arbeitslosenversicherung und der Unfallversicherung."',
  },
  {
    id: 'lv14',
    category: 'leseverstehen',
    text: sozialversicherungText,
    question: 'Wie hoch ist das Arbeitslosengeld I als Prozentsatz des letzten Nettoeinkommens?',
    options: [
      '50 Prozent',
      '60 Prozent (ohne Kinder) bzw. 67 Prozent (mit Kindern)',
      '70 Prozent für alle',
      '80 Prozent für die ersten sechs Monate',
    ],
    correctIndex: 1,
    explanation:
      'Laut Text: „Die Höhe des Arbeitslosengeldes beträgt 60 Prozent des letzten Nettoeinkommens, bei Personen mit Kindern 67 Prozent."',
  },
  {
    id: 'lv15',
    category: 'leseverstehen',
    text: sozialversicherungText,
    question: 'Welche Voraussetzung muss man erfüllen, um Arbeitslosengeld I zu erhalten?',
    options: [
      'Man muss mindestens fünf Jahre gearbeitet haben',
      'In den letzten zwei Jahren mindestens zwölf Monate in die Arbeitslosenversicherung eingezahlt haben',
      'Man muss mindestens 30 Jahre alt sein',
      'Man darf kein anderes Einkommen haben',
    ],
    correctIndex: 1,
    explanation:
      'Der Text erklärt: „Um Anspruch darauf zu haben, muss man in den letzten zwei Jahren mindestens zwölf Monate lang in die Arbeitslosenversicherung eingezahlt haben."',
  },
];
