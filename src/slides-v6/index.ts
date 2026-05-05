import { v2s01 } from '../slides-v2/s01-intro';
import { v2s11, v2s12, v2s13 } from '../slides-v2/s04-stats';
import { v2s16, v2s17, v2s18 } from '../slides-v2/s05-voices';

import { v6s02, v6s02b } from './s01-intro';
import { v6s03, v6s04 } from './s02-story';
import { v6s05, v6s05b } from './s03-why';
import { v6s10, v6s31 } from './s04-stats';
import { v6s07, v6s08 } from './s05-eras';
import { v6s30 } from './s06-evolution';
import { v6s_local } from './s07-local';
import { v6s22, v6s23 } from './s08-act3';
import { v6s24, v6s25, v6s26, v6s37_qa, v6s_summary, v6s28 } from './s09-work';
import {
  v6s_agenda, v6s_eras_chapter, v6s_era3,
  v6s_800m, v6s_78m, v6s_86,
  v6s_63, v6s_25sal,
  v6s_act2, v6s_voices,
  v6s_jobs_junior, v6s_jobs_senior,
  v6s_act3, v6s_doover,
} from './s10-extras';

export const SLIDES_V6 = [
  v2s01,            // 01 INTRO — photo + name
  v6s02,            // 02 OPENING — 78% shock
  v6s02b,           // 03 TENSION — 22% האחרים
  v6s_agenda,       // 04 AGENDA
  v6s03,            // 04 ACT I chapter
  v6s04,            // 05 MY STORY — dual track
  v6s05,            // 06 WHY תעשייה וניהול
  v6s05b,           // 07 WHY STATS
  v6s_eras_chapter, // 08 3 ERAS chapter
  v6s07,            // 09 ERA 1 — עידן המפעל (enriched)
  v6s08,            // 10 ERA 2 — עידן המחשב (enriched)
  v6s_era3,         // 11 ERA 3 — עידן ה-AI
  v6s30,            // 12 EVOLUTION — 4 roles table
  v6s10,            // 13 THE SHIFT — ChatGPT (no animation)
  v6s_800m,         // 14 800M users
  v6s_78m,          // 15 +78M jobs
  v6s_86,           // 16 86%
  v6s31,            // 17 39% with chart
  v6s_63,           // 18 63%
  v6s_25sal,        // 19 +25%
  v6s_act2,         // 20 ACT II chapter
  v6s_voices,       // 21 3 VOICES
  v2s16,            // 22 ALTMAN
  v2s17,            // 23 MATIAS
  v2s18,            // 24 HASSABIS
  v6s_jobs_junior,  // 25 JOBS JUNIOR
  v6s_jobs_senior,  // 26 JOBS SENIOR
  v6s_local,        // 27 CLOSE TO HOME — Daniel + Calcalist merged
  v6s_act3,         // 28 ACT III chapter
  v6s22,            // 29 DIVISION — V1 two-column style
  v6s23,            // 30 YOUR POSITION — network SVG + transitions
  v6s24,            // 31 MY AI WORK — 3 cards with images
  v6s25,            // 32 SKILLS — with color legend
  v6s26,            // 33 ROADMAP — updated 30/60/90
  v6s_doover,       // 34 DO OVER — 4 lessons
  v6s37_qa,         // 35 Q&A INTERACTIVE
  v6s_summary,      // 36 SUMMARY — one more thing
  v6s28,            // 37 THANKS — V1 style
];

export const SLIDE_META_V6 = [
  { label: 'INTRO',            act: 'INTRO' },
  { label: 'OPENING 78%',      act: 'INTRO' },
  { label: '22% האחרים',       act: 'INTRO' },
  { label: 'AGENDA',           act: 'INTRO' },
  { label: 'ACT I',            act: 'I' },
  { label: 'MY STORY',         act: 'I' },
  { label: 'WHY תע"י',         act: 'I' },
  { label: 'WHY STATS',        act: 'I' },
  { label: '3 ERAS',           act: 'I' },
  { label: 'ERA 1: INDUSTRY',  act: 'I' },
  { label: 'ERA 2: DIGITAL',   act: 'I' },
  { label: 'ERA 3: AI',        act: 'I' },
  { label: 'EVOLUTION',        act: 'I' },
  { label: 'THE SHIFT',        act: 'I' },
  { label: '800M',             act: 'I' },
  { label: '+78M JOBS',        act: 'I' },
  { label: '86%',              act: 'I' },
  { label: '39%',              act: 'I' },
  { label: '63%',              act: 'I' },
  { label: '+25%',             act: 'I' },
  { label: 'ACT II',           act: 'II' },
  { label: '3 VOICES',         act: 'II' },
  { label: 'ALTMAN',           act: 'II' },
  { label: 'MATIAS',           act: 'II' },
  { label: 'HASSABIS',         act: 'II' },
  { label: 'JOBS · JUNIOR',    act: 'II' },
  { label: 'JOBS · SENIOR',    act: 'II' },
  { label: 'CLOSE TO HOME',    act: 'II' },
  { label: 'ACT III',          act: 'III' },
  { label: 'DIVISION',         act: 'III' },
  { label: 'YOUR POSITION',    act: 'III' },
  { label: 'I BUILT IT',       act: 'III' },
  { label: 'SKILLS',           act: 'III' },
  { label: 'ROADMAP',          act: 'III' },
  { label: 'DO OVER',          act: 'III' },
  { label: 'Q&A',              act: 'OUTRO' },
  { label: 'ONE MORE THING',   act: 'OUTRO' },
  { label: 'THANKS',           act: 'OUTRO' },
];
