import { Pillar, BaziChart } from '../types';

const STEMS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const STEM_NAMES = ['Jiǎ', 'Yǐ', 'Bǐng', 'Dīng', 'Wù', 'Jǐ', 'Gēng', 'Xīn', 'Rén', 'Guǐ'];
const BRANCHES = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const BRANCH_NAMES = ['Zǐ', 'Chǒu', 'Yín', 'Mǎo', 'Chén', 'Sì', 'Wǔ', 'Wèi', 'Shēn', 'Yǒu', 'Xū', 'Hài'];
const ELEMENTS = ['Wood', 'Wood', 'Fire', 'Fire', 'Earth', 'Earth', 'Metal', 'Metal', 'Water', 'Water'];

function stemElement(stemIdx: number): string {
  return ELEMENTS[stemIdx];
}

function makePillar(stemIdx: number, branchIdx: number): Pillar {
  const si = ((stemIdx % 10) + 10) % 10;
  const bi = ((branchIdx % 12) + 12) % 12;
  return {
    stem: STEMS[si],
    branch: BRANCHES[bi],
    stemName: STEM_NAMES[si],
    branchName: BRANCH_NAMES[bi],
    element: stemElement(si),
    yinYang: si % 2 === 0 ? 'Yang' : 'Yin',
  };
}

function julianDay(year: number, month: number, day: number): number {
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  let jdn = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4);
  if (year > 1582 || (year === 1582 && month > 10) || (year === 1582 && month === 10 && day >= 15)) {
    jdn += -Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  } else {
    jdn -= 32083;
  }
  return jdn;
}

function chineseYear(year: number, month: number, day: number): number {
  if (month < 2 || (month === 2 && day < 4)) return year - 1;
  return year;
}

function chineseMonth(month: number, day: number): number {
  const solarTermDays = [6, 4, 6, 5, 6, 6, 7, 7, 8, 8, 7, 7];
  let mIdx = month - 1;
  if (day < solarTermDays[mIdx]) mIdx = (mIdx - 1 + 12) % 12;
  return mIdx;
}

function monthStemOffset(yearStemIdx: number): number {
  const offsets = [2, 4, 6, 8, 0, 2, 4, 6, 8, 0];
  return offsets[yearStemIdx];
}

export function calculateBazi(
  year: number,
  month: number,
  day: number,
  hour: number
): BaziChart {
  const cYear = chineseYear(year, month, day);
  const yearStemIdx = (cYear - 4) % 10;
  const yearBranchIdx = (cYear - 4) % 12;
  const yearPillar = makePillar(yearStemIdx, yearBranchIdx);

  const monthIdx = chineseMonth(month, day);
  const mStemStart = monthStemOffset(((yearStemIdx % 10) + 10) % 10);
  const monthStemIdx = (mStemStart + monthIdx) % 10;
  const monthBranchIdx = (monthIdx + 2) % 12;
  const monthPillar = makePillar(monthStemIdx, monthBranchIdx);

  const jd = julianDay(year, month, day);
  const dayStemIdx = (jd + 49) % 10;
  const dayBranchIdx = (jd + 11) % 12;
  const dayPillar = makePillar(dayStemIdx, dayBranchIdx);

  const hourBranchIdx = Math.floor((hour + 1) / 2) % 12;
  const ds = ((dayStemIdx % 10) + 10) % 10;
  const hourStemOffsets = [0, 2, 4, 6, 8, 0, 2, 4, 6, 8];
  const hourStemIdx = (hourStemOffsets[ds] + hourBranchIdx) % 10;
  const hourPillar = makePillar(hourStemIdx, hourBranchIdx);

  const dsi = ((dayStemIdx % 10) + 10) % 10;
  return {
    year: yearPillar,
    month: monthPillar,
    day: dayPillar,
    hour: hourPillar,
    dayMaster: STEMS[dsi],
    dayMasterElement: ELEMENTS[dsi],
  };
}
