import { v2s01, v2s02 } from './s01-intro';
import { v2s03, v2s04, v2s05 } from './s02-story';
import { v2s06, v2s07, v2s08, v2s09 } from './s03-eras';
import { v2s10, v2s11, v2s12, v2s13 } from './s04-stats';
import { v2s14, v2s15, v2s16, v2s17, v2s18 } from './s05-voices';
import { v2s19, v2s20 } from './s06-local';
import { v2s21, v2s22, v2s23 } from './s07-role';
import { v2s24, v2s25, v2s26 } from './s08-action';
import { v2s27, v2s28 } from './s09-outro';

export const SLIDES_V2 = [
  v2s01, v2s02,                         // INTRO
  v2s03, v2s04, v2s05,                  // ACT I – story
  v2s06, v2s07, v2s08, v2s09,          // Eras
  v2s10, v2s11, v2s12, v2s13,          // Stats
  v2s14, v2s15, v2s16, v2s17, v2s18,   // ACT II – voices
  v2s19, v2s20,                         // Local
  v2s21, v2s22, v2s23,                  // ACT III – role
  v2s24, v2s25, v2s26,                  // Action
  v2s27, v2s28,                         // Outro
];

export const SLIDE_META_V2 = [
  { label: 'INTRO',            act: 'INTRO' },
  { label: 'OPENING',          act: 'INTRO' },
  { label: 'ACT I',            act: 'I' },
  { label: 'MY STORY',         act: 'I' },
  { label: 'WHY IE',           act: 'I' },
  { label: '3 ERAS',           act: 'I' },
  { label: 'ERA 1: INDUSTRY',  act: 'I' },
  { label: 'ERA 2: DIGITAL',   act: 'I' },
  { label: 'ERA 3: AI',        act: 'I' },
  { label: 'THE SHIFT',        act: 'I' },
  { label: '800M',             act: 'I' },
  { label: '+78M JOBS',        act: 'I' },
  { label: '86%',              act: 'I' },
  { label: 'ACT II',           act: 'II' },
  { label: '3 VOICES',         act: 'II' },
  { label: 'ALTMAN',           act: 'II' },
  { label: 'MATIAS',           act: 'II' },
  { label: 'HASSABIS',         act: 'II' },
  { label: 'DANIEL',           act: 'II' },
  { label: 'CALCALIST',        act: 'II' },
  { label: 'ACT III',          act: 'III' },
  { label: 'DIVISION',         act: 'III' },
  { label: 'YOUR POSITION',    act: 'III' },
  { label: 'I BUILT IT',       act: 'III' },
  { label: 'SKILLS',           act: 'III' },
  { label: 'ROADMAP',          act: 'III' },
  { label: 'Q&A',              act: 'III' },
  { label: 'THANKS',           act: 'OUTRO' },
];
