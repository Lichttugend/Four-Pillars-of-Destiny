export interface BirthData {
  name: string;
  date: string;
  hour: number;
  location: string;
  language: 'en' | 'de';
}

export interface Pillar {
  stem: string;
  branch: string;
  stemName: string;
  branchName: string;
  element: string;
  yinYang: 'Yin' | 'Yang';
}

export interface BaziChart {
  year: Pillar;
  month: Pillar;
  day: Pillar;
  hour: Pillar;
  dayMaster: string;
  dayMasterElement: string;
}
