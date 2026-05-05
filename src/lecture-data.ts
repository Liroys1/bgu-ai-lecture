import { PHOTO_B64 } from './assets/images';

export type SlideAct = 'INTRO' | 'I' | 'II' | 'III' | 'OUTRO';
export type SlideType =
  | 'hero' | 'statement' | 'act' | 'bignum' | 'quote'
  | 'joblist' | 'split' | 'skills' | 'roadmap' | 'lessons'
  | 'qalist' | 'qa' | 'outro'
  | 'stat-group'   // V3: combined stats bar chart
  | 'era-visual'   // V3/V4: visual timeline of 3 eras
  | 'chapter'      // V4: memoir chapter opener
  | 'alarm';       // V5: urgent wake-up call

export interface Job { tag: string; title: string; co: string; salary: string; desc: string; }
export interface LSlide {
  type: SlideType; act: SlideAct; label: string;
  hl?: string; hl2?: string; sub?: string;
  roman?: string; actTitle?: string; actSub?: string;
  num?: string; unit?: string; numDesc?: string; source?: string;
  quote?: string; author?: string; authorRole?: string;
  jobs?: Job[];
  splitL?: { icon: string; label: string; tag: string; items: string[] };
  splitR?: { icon: string; label: string; tag: string; items: string[] };
  lessons?: { num: string; title: string; desc: string }[];
  steps?: { days: string; title: string; desc: string }[];
  skills?: { cat: string; items: string[] }[];
  questions?: string[];
  photo?: string;
  // new fields for V3/V4/V5
  stats?: { num: string; unit: string; label: string; source: string; pct: number }[];
  eras?: { year: string; title: string; tools: string; active?: boolean }[];
  chNum?: string; chTitle?: string; chSub?: string;
  alarmLines?: string[];
  context?: string;
}

export const LECTURE_SLIDES: LSlide[] = [
  { type: 'hero', act: 'INTRO', label: 'INTRO', hl: 'לירן שקד', hl2: 'L&D Lead Tech Dev · Lemonade', sub: 'BGU · פורום 80–20 · מאי 2026', photo: PHOTO_B64 },
  { type: 'statement', act: 'INTRO', label: 'OPENING', hl: 'למה תעשייה וניהול', hl2: 'ומה עושים עם זה היום.' },
  { type: 'statement', act: 'INTRO', label: 'AGENDA', hl: 'שעה אחת.', hl2: '3 מערכות. סיפור אחד.', sub: 'ACT I: מאיפה באנו · ACT II: מה משתנה · ACT III: מה תעשו' },
  { type: 'act', act: 'I', label: 'ACT I', roman: 'I', actTitle: 'הסיפור שלי', actSub: '20 שנה. שני עידנים. שיעור אחד.' },
  { type: 'statement', act: 'I', label: 'MY STORY', hl: '20 שנה. BGU. צבא.', hl2: 'ייעוץ. סטארטאפ. Lemonade.' },
  { type: 'statement', act: 'I', label: 'WHY IE', hl: 'מערכות. נתונים. אנשים.', hl2: 'הנוסחה המנצחת בעידן ה-AI.' },
  { type: 'statement', act: 'I', label: '3 ERAS', hl: 'שלושה עידנים.', hl2: 'אנחנו בשלישי.' },
  { type: 'statement', act: 'I', label: 'ERA 1', hl: '1900 – 1990', hl2: 'עידן המפעל', sub: 'מי שידע לעבוד עם מכונות — ניצח · Lean · AutoCAD · FMEA' },
  { type: 'statement', act: 'I', label: 'ERA 2', hl: '1990 – 2020', hl2: 'עידן המחשב', sub: 'מי שידע Excel, ERP, מערכות מידע — ניצח · SAP · BI · Agile' },
  { type: 'statement', act: 'I', label: 'ERA 3', hl: '2020 →', hl2: 'עידן ה-AI', sub: 'מי שיידע לנהל סוכני AI — ינצח · LLMs · Agents · no-code' },
  { type: 'statement', act: 'I', label: 'EVOLUTION', hl: 'Lean → ERP → Data →', hl2: 'AI.', sub: 'אותו תואר. 4 ניסוחים שונים. הליבה לא השתנתה — הכלים כן.' },
  { type: 'bignum', act: 'I', label: 'THE SHIFT', num: '0→100M', unit: '', numDesc: 'משתמשים. ב-60 יום.', source: 'ChatGPT · 2022' },
  { type: 'bignum', act: 'I', label: '800M', num: '800', unit: 'M', numDesc: 'משתמשים שבועיים ב-ChatGPT בלבד', source: 'OpenAI · 2025' },
  { type: 'bignum', act: 'I', label: '+78M', num: '+78', unit: 'M', numDesc: 'משרות נטו ייווצרו עד 2030', source: 'WEF Future of Jobs · 2025' },
  { type: 'bignum', act: 'I', label: '86%', num: '86', unit: '%', numDesc: 'מהמעסיקים: AI ישנה את העסק עד 2030', source: 'WEF Future of Jobs · 2025' },
  { type: 'bignum', act: 'I', label: '39%', num: '39', unit: '%', numDesc: 'מהמיומנויות שלכם ישתנו עד 2030', source: 'WEF Future of Jobs · 2025' },
  { type: 'bignum', act: 'I', label: '63%', num: '63', unit: '%', numDesc: 'מהמעסיקים לא מוצאים אנשים עם כישורי AI', source: 'WEF Future of Jobs · 2025' },
  { type: 'bignum', act: 'I', label: '+25%', num: '+25', unit: '%', numDesc: 'פרמיית שכר לבעלי מיומנויות AI', source: 'PwC AI Jobs Barometer · 2025' },
  { type: 'act', act: 'II', label: 'ACT II', roman: 'II', actTitle: 'מה זה אומר עליכם', actSub: 'השוק דיבר. המנהיגים דיברו. השאלה היא מה תעשו עם זה.' },
  { type: 'statement', act: 'II', label: '3 VOICES', hl: 'שלושה אנשים.', hl2: 'אותו מסר.' },
  { type: 'quote', act: 'II', label: 'ALTMAN', quote: 'היכולת של אדם אחד להשיג ב-2030 הרבה יותר ממה שיכול היה ב-2020 תהיה שינוי מרשים.', author: 'Sam Altman', authorRole: 'CEO · OpenAI' },
  { type: 'quote', act: 'II', label: 'MATIAS', quote: 'AI הוא מגבר של גאוניות אנושית — שמעצים מדענים, עובדי בריאות, מורים, אנשי עסקים.', author: 'Yossi Matias · יוסי מטיאס', authorRole: 'VP Engineering · Google Israel' },
  { type: 'quote', act: 'II', label: 'HASSABIS', quote: 'AlphaFold פתר שאלה שהיתה פתוחה 50 שנה — לא ביטל חוקרים, פתח עידן שלם של גילויים.', author: 'Demis Hassabis', authorRole: 'Nobel Chemistry 2024 · CEO · Google DeepMind' },
  { type: 'joblist', act: 'II', label: 'JOBS · JUNIOR', hl: "אלה המשרות שמחפשות אתכם.", sub: "אפריל 2026 · ג'וניור", jobs: [
    { tag: 'OPS', title: 'AI Operations Manager', co: 'BeamUP', salary: '₪18–28K', desc: 'תפעול AI, אוטומציה, SQL' },
    { tag: 'DATA', title: 'Data Analyst', co: 'Buildots', salary: '₪20–30K', desc: 'ניתוח נתונים, Power BI' },
    { tag: 'BI', title: 'Data Operations Analyst', co: 'Plus500', salary: '₪22–32K', desc: 'SQL, Python, BI' },
    { tag: 'AI', title: 'AI Integration Specialist', co: 'Microsoft', salary: '₪25–35K', desc: 'Copilot, enterprise AI' },
  ]},
  { type: 'joblist', act: 'II', label: 'JOBS · SENIOR', hl: 'לאן זה מוביל.', sub: 'בכיר · 5–8 שנים', jobs: [
    { tag: 'PM', title: 'AI Product Manager', co: 'monday.com', salary: '₪45–65K', desc: 'שכבת ה-AI של המוצר, enterprise' },
    { tag: 'COE', title: 'Enterprise AI CoE Manager', co: 'Payoneer', salary: '₪50–70K', desc: 'אסטרטגיית AI לארגון של 2,500+' },
    { tag: 'LEAD', title: 'Lead AI Transformation', co: 'Plus500', salary: '₪55–75K', desc: 'ML בזמן אמת, חברה ציבורית' },
    { tag: 'TOP', title: 'Staff ML Engineer', co: 'NVIDIA Israel', salary: '₪65–85K+', desc: 'מחקר AI בחזית, inference' },
  ]},
  { type: 'statement', act: 'II', label: 'DANIEL', hl: 'דניאל שרייבר.', hl2: 'AI-first מיום 1.', sub: 'מייסד Lemonade. ב-10 במאי, אני מתחיל לעבוד שם.' },
  { type: 'statement', act: 'II', label: 'CALCALIST', hl: 'בוגרי תעשייה וניהול', hl2: 'עוקפים את 5 שנות הניסיון — תוך שנה.', sub: 'כלכליסט · 1 במאי 2026' },
  { type: 'act', act: 'III', label: 'ACT III', roman: 'III', actTitle: 'מה לעשות עם זה', actSub: 'לא לפחד, לא להתעלם — להבין את התפקיד החדש.' },
  { type: 'split', act: 'III', label: 'DIVISION',
    splitL: { icon: '🧠', label: 'אנשים', tag: 'JUDGMENT', items: ['הגדרת בעיה', 'שיקול דעת', 'אחריות ואמון'] },
    splitR: { icon: '🤖', label: 'AI', tag: 'AUTOMATION', items: ['עיבוד נתונים', 'משימות חוזרות', 'סקיילינג מהיר'] },
  },
  { type: 'statement', act: 'III', label: 'YOUR POSITION', hl: 'לא לבצע.', hl2: 'לנהל את המערכת שמבצעת.', sub: 'מבצעים → מנהלי מערכת. אנחנו לא נעלמים — אנחנו עולים שכבה.' },
  { type: 'statement', act: 'III', label: 'I BUILT IT', hl: 'בניתי 3 אפליקציות.', hl2: 'לא כתבתי שורת קוד.', sub: 'Lovable · Base44 · Render · Claude · Three.js' },
  { type: 'skills', act: 'III', label: 'SKILLS', hl: 'לא הכל טכני. לא הכל רך.', hl2: 'הכל ביחד.', skills: [
    { cat: 'CORE', items: ['חשיבת מערכות', 'ניתוח דאטה'] },
    { cat: 'AI', items: ['Prompt Engineering', 'Building with AI'] },
    { cat: 'TECH', items: ['אוטומציה', 'Python בסיסי'] },
    { cat: 'SOFT', items: ['תקשורת', 'מסגור בעיות'] },
    { cat: 'META', items: ['למידה עצמית'] },
  ]},
  { type: 'roadmap', act: 'III', label: 'ROADMAP', hl: '3 צעדים.', hl2: 'היום.', steps: [
    { days: '30', title: 'ספוג', desc: 'Claude Pro / ChatGPT. כל יום. שיעורי בית, סיכומים, ניתוחים.' },
    { days: '60', title: 'בנה', desc: 'פרויקט אמיתי. Base44, Lovable, n8n. משהו שפותר בעיה שלך.' },
    { days: '90', title: 'הצג', desc: 'LinkedIn, GitHub, Portfolio. הפוך את הידע לנראות.' },
  ]},
  { type: 'lessons', act: 'III', label: 'DO OVER', hl: 'מה הייתי עושה', hl2: 'אחרת.', lessons: [
    { num: '01', title: 'לבנות פומבי מהיום הראשון', desc: 'GitHub. LinkedIn. בלוג. זה הקו"ח האמיתי.' },
    { num: '02', title: 'פחות תאוריה, יותר מעשה', desc: 'הפרויקט עם החברה? עדיין משפיע. הסמינריון? שכחתי.' },
    { num: '03', title: 'תקשורת לפני אקסל', desc: 'אקסל — שבועיים. להציג מסקנה ב-3 דקות — 10 שנים.' },
    { num: '04', title: 'לעזוב מהר יותר', desc: 'תזוזה היא הכלי הכי חזק לפיתוח קריירה.' },
  ]},
  { type: 'qalist', act: 'OUTRO', label: 'Q&A QUESTIONS', hl: 'תורכם.', hl2: 'לשאול.', questions: [
    'איך אדע שלימוד Python לא יהיה מיותר?',
    'MBA / M.Sc. / כלום — מה עדיף?',
    'איך מתחילים לבנות פרויקט בלי רעיון?',
    'סטאז׳ או משרה ראשונה — מה עדיף?',
    'איך מתבלטים ב-CV בלי ניסיון?',
    'משהו שלא הייתי עושה אם הייתי חוזר?',
  ]},
  { type: 'qa', act: 'OUTRO', label: 'Q&A', hl: 'שאלות?', hl2: 'אני כאן.' },
  { type: 'outro', act: 'OUTRO', label: 'THANKS', hl: 'תודה.', hl2: 'בהצלחה בדרך.', sub: 'LinkedIn · liranshaked · liroys1@gmail.com', photo: PHOTO_B64 },
];

export const LECTURE_META = LECTURE_SLIDES.map(s => ({ label: s.label, act: s.act }));

// ─────────────────────────────────────────────────────────────
// V3 SLIDES — "The Numbers Don't Lie" (data-journalism order)
// Opens with THE GAP → scale of change → voices → market → action
// ─────────────────────────────────────────────────────────────
export const V3_SLIDES: LSlide[] = [
  // HOOK: open with the 3 most dramatic stats combined
  { type: 'stat-group', act: 'I', label: 'THE GAP',
    hl: 'שלושה מספרים.', hl2: 'סיפור אחד.',
    stats: [
      { num: '63', unit: '%', label: 'מעסיקים שלא מוצאים כישורי AI', source: 'WEF 2025', pct: 63 },
      { num: '39', unit: '%', label: 'מהמיומנויות שלכם ישתנו עד 2030', source: 'WEF 2025', pct: 39 },
      { num: '+25', unit: '%', label: 'פרמיית שכר לבעלי כישורי AI', source: 'PwC 2025', pct: 25 },
    ],
  },
  // WHO IS TELLING YOU THIS
  { type: 'hero', act: 'INTRO', label: 'NARRATOR', hl: 'לירן שקד', hl2: 'L&D Lead Tech Dev · Lemonade', sub: 'BGU · פורום 80–20 · מאי 2026', photo: PHOTO_B64 },
  // HOW WE GOT HERE: 3 eras as one visual
  { type: 'era-visual', act: 'I', label: 'THE 3 ERAS', hl: '3 עידנים. הכלים השתנו. הליבה — לא.',
    eras: [
      { year: '1900–1990', title: 'עידן המפעל', tools: 'Lean · AutoCAD · FMEA' },
      { year: '1990–2020', title: 'עידן המחשב', tools: 'SAP · BI · Excel · Agile' },
      { year: '2020 →', title: 'עידן ה-AI', tools: 'LLMs · Agents · no-code', active: true },
    ],
  },
  // THE SPEED OF CHANGE
  { type: 'bignum', act: 'I', label: 'SPEED', num: '60', unit: ' יום', numDesc: 'מ-0 ל-100 מיליון משתמשים. שום טכנולוגיה לא גדלה כך לפני.', source: 'ChatGPT · 2022', context: 'לשם השוואה: הטלפון לקח 75 שנה. האינטרנט — 7 שנים.' },
  { type: 'bignum', act: 'I', label: 'SCALE', num: '800', unit: 'M', numDesc: 'משתמשים שבועיים ב-ChatGPT בלבד. כל שבוע, כל העולם, כל עכשיו.', source: 'OpenAI · 2025' },
  { type: 'bignum', act: 'I', label: 'NET JOBS', num: '+78', unit: 'M', numDesc: 'משרות נטו עד 2030. יותר נוצרות ממה שנעלמות. אבל לא אותן משרות.', source: 'WEF · 2025' },
  { type: 'bignum', act: 'I', label: 'EMPLOYERS', num: '86', unit: '%', numDesc: 'מהמעסיקים: AI ישנה את כל דרך העסק עד 2030. לא חלק — הכל.', source: 'WEF · 2025' },
  // THE VOICES: expert consensus
  { type: 'quote', act: 'II', label: 'ALTMAN', quote: 'היכולת של אדם אחד להשיג ב-2030 הרבה יותר ממה שיכול היה ב-2020 תהיה שינוי מרשים.', author: 'Sam Altman', authorRole: 'CEO · OpenAI' },
  { type: 'quote', act: 'II', label: 'MATIAS', quote: 'AI הוא מגבר של גאוניות אנושית — שמעצים מדענים, עובדי בריאות, מורים, אנשי עסקים.', author: 'Yossi Matias · יוסי מטיאס', authorRole: 'VP Engineering · Google Israel' },
  { type: 'quote', act: 'II', label: 'HASSABIS', quote: 'AlphaFold פתר שאלה שהיתה פתוחה 50 שנה — לא ביטל חוקרים, פתח עידן שלם של גילויים.', author: 'Demis Hassabis', authorRole: 'Nobel Chemistry 2024 · CEO · Google DeepMind' },
  // MARKET DATA
  { type: 'joblist', act: 'II', label: 'MARKET: ENTRY', hl: 'השוק פתוח. אפריל 2026.', sub: "ג'וניור — כניסה עכשיו", jobs: [
    { tag: 'OPS', title: 'AI Operations Manager', co: 'BeamUP', salary: '₪18–28K', desc: 'תפעול AI, אוטומציה, SQL' },
    { tag: 'DATA', title: 'Data Analyst', co: 'Buildots', salary: '₪20–30K', desc: 'ניתוח נתונים, Power BI' },
    { tag: 'BI', title: 'Data Operations Analyst', co: 'Plus500', salary: '₪22–32K', desc: 'SQL, Python, BI' },
    { tag: 'AI', title: 'AI Integration Specialist', co: 'Microsoft', salary: '₪25–35K', desc: 'Copilot, enterprise AI' },
  ]},
  { type: 'joblist', act: 'II', label: 'MARKET: SENIOR', hl: 'לאן זה מוביל. 5–8 שנים.', sub: 'בכיר — אם תתחילו היום', jobs: [
    { tag: 'PM', title: 'AI Product Manager', co: 'monday.com', salary: '₪45–65K', desc: 'שכבת ה-AI של המוצר, enterprise' },
    { tag: 'COE', title: 'Enterprise AI CoE Manager', co: 'Payoneer', salary: '₪50–70K', desc: 'אסטרטגיית AI לארגון של 2,500+' },
    { tag: 'LEAD', title: 'Lead AI Transformation', co: 'Plus500', salary: '₪55–75K', desc: 'ML בזמן אמת, חברה ציבורית' },
    { tag: 'TOP', title: 'Staff ML Engineer', co: 'NVIDIA Israel', salary: '₪65–85K+', desc: 'מחקר AI בחזית, inference' },
  ]},
  // WHAT TO DO
  { type: 'split', act: 'III', label: 'THE DIVISION',
    splitL: { icon: '🧠', label: 'בני-אדם', tag: 'תמיד', items: ['הגדרת בעיה', 'שיקול דעת', 'אחריות ואמון'] },
    splitR: { icon: '🤖', label: 'AI', tag: 'עכשיו', items: ['עיבוד נתונים', 'משימות חוזרות', 'סקיילינג מהיר'] },
  },
  { type: 'skills', act: 'III', label: 'SKILLS MAP', hl: 'מה לבנות.', hl2: 'לפי עדיפות.', skills: [
    { cat: 'CORE', items: ['חשיבת מערכות', 'ניתוח דאטה'] },
    { cat: 'AI', items: ['Prompt Engineering', 'Building with AI'] },
    { cat: 'TECH', items: ['אוטומציה', 'Python בסיסי'] },
    { cat: 'SOFT', items: ['תקשורת', 'מסגור בעיות'] },
    { cat: 'META', items: ['למידה עצמית'] },
  ]},
  { type: 'roadmap', act: 'III', label: 'ROADMAP', hl: '90 יום.', hl2: '3 צעדים.', steps: [
    { days: '30', title: 'ספוג', desc: 'Claude Pro / ChatGPT. כל יום. שיעורי בית, סיכומים, ניתוחים.' },
    { days: '60', title: 'בנה', desc: 'פרויקט אמיתי. Base44, Lovable, n8n. משהו שפותר בעיה שלך.' },
    { days: '90', title: 'הצג', desc: 'LinkedIn, GitHub, Portfolio. הפוך את הידע לנראות.' },
  ]},
  { type: 'lessons', act: 'III', label: 'FINDINGS', hl: '4 ממצאים', hl2: 'מ-14 שנה.', lessons: [
    { num: '01', title: 'לבנות פומבי מהיום הראשון', desc: 'GitHub. LinkedIn. בלוג. זה הקו"ח האמיתי.' },
    { num: '02', title: 'פחות תאוריה, יותר מעשה', desc: 'הפרויקט עם החברה? עדיין משפיע. הסמינריון? שכחתי.' },
    { num: '03', title: 'תקשורת לפני אקסל', desc: 'אקסל — שבועיים. להציג ב-3 דקות — 10 שנים.' },
    { num: '04', title: 'לעזוב מהר יותר', desc: 'תזוזה היא הכלי הכי חזק לפיתוח קריירה.' },
  ]},
  { type: 'qalist', act: 'OUTRO', label: 'Q&A', hl: 'תורכם.', hl2: 'לשאול.', questions: [
    'איך אדע שלימוד Python לא יהיה מיותר?',
    'MBA / M.Sc. / כלום — מה עדיף?',
    'איך מתחילים לבנות פרויקט בלי רעיון?',
    'סטאז׳ או משרה ראשונה — מה עדיף?',
    'איך מתבלטים ב-CV בלי ניסיון?',
    'משהו שלא הייתי עושה אם הייתי חוזר?',
  ]},
  { type: 'outro', act: 'OUTRO', label: 'THANKS', hl: 'תודה.', hl2: 'בהצלחה בדרך.', sub: 'LinkedIn · liranshaked · liroys1@gmail.com', photo: PHOTO_B64 },
];
export const V3_META = V3_SLIDES.map(s => ({ label: s.label, act: s.act }));

// ─────────────────────────────────────────────────────────────
// V4 SLIDES — "The Story Within the Story" (memoir/personal)
// His journey mirrors theirs. Every stat is human. Every lesson is a letter.
// ─────────────────────────────────────────────────────────────
export const V4_SLIDES: LSlide[] = [
  // CHAPTER OPENER: the real question
  { type: 'chapter', act: 'INTRO', label: 'PROLOGUE',
    chNum: '—', chTitle: '14 שנה. 4 תפקידים. שיעור אחד שלא לימדו אותי.', chSub: 'BGU · מאי 2026 · לירן שקד · Lemonade' },
  // WHO I AM
  { type: 'hero', act: 'INTRO', label: 'INTRO', hl: 'לירן שקד', hl2: 'L&D Lead Tech Dev · Lemonade', sub: 'BGU · פורום 80–20 · מאי 2026', photo: PHOTO_B64 },
  // MY PATH — personally framed
  { type: 'statement', act: 'I', label: 'MY PATH', hl: '20 שנה. BGU. צבא.', hl2: 'ייעוץ. סטארטאפ. Lemonade.', sub: 'כל תפקיד לימד אותי משהו שהתפקיד הקודם לא יכול היה ללמד אותי.' },
  // THE 3 ERAS — as his personal journey through time
  { type: 'era-visual', act: 'I', label: 'ERAS I LIVED', hl: 'עברתי 3 עידנים. אתם נכנסים לשלישי.',
    eras: [
      { year: '1900–1990', title: 'עידן המפעל', tools: 'Lean · AutoCAD · FMEA' },
      { year: '1990–2020', title: 'עידן המחשב', tools: 'SAP · BI · Excel · Agile' },
      { year: '2020 →', title: 'עידן ה-AI', tools: 'LLMs · Agents · no-code', active: true },
    ],
  },
  // THE MOMENT OF REALIZATION
  { type: 'statement', act: 'I', label: 'THE MOMENT', hl: 'בניתי 3 אפליקציות.', hl2: 'בלי שורת קוד.', sub: 'Lovable · Base44 · Claude · Render. אז הבנתי שמשהו השתנה לגמרי. לגמרי.' },
  // SCALE — personally framed
  { type: 'bignum', act: 'I', label: 'THE SWITCH', num: '60', unit: ' יום', numDesc: '100 מיליון אנשים שינו את הדרך שהם עובדים. בזמן שאתם ישבתם כאן בכיתה.', source: 'ChatGPT · 2022' },
  { type: 'bignum', act: 'I', label: 'RIGHT NOW', num: '800', unit: 'M', numDesc: 'אנשים עובדים אחרת כל שבוע. חלקם יהיו עמיתים שלכם. חלקם — המתחרים שלכם.', source: 'OpenAI · 2025' },
  // THE EXPERT VOICES — as conversations overheard
  { type: 'quote', act: 'II', label: 'ALTMAN', quote: 'היכולת של אדם אחד להשיג ב-2030 הרבה יותר ממה שיכול היה ב-2020 תהיה שינוי מרשים.', author: 'Sam Altman', authorRole: 'CEO · OpenAI' },
  { type: 'quote', act: 'II', label: 'MATIAS', quote: 'AI הוא מגבר של גאוניות אנושית — שמעצים מדענים, עובדי בריאות, מורים, אנשי עסקים.', author: 'Yossi Matias · יוסי מטיאס', authorRole: 'VP Engineering · Google Israel' },
  { type: 'quote', act: 'II', label: 'HASSABIS', quote: 'AlphaFold פתר שאלה שהיתה פתוחה 50 שנה — לא ביטל חוקרים, פתח עידן שלם של גילויים.', author: 'Demis Hassabis', authorRole: 'Nobel Chemistry 2024 · CEO · Google DeepMind' },
  // THE MARKET — framed as "your door is open"
  { type: 'bignum', act: 'II', label: 'YOUR DOOR', num: '63', unit: '%', numDesc: 'מהמעסיקים לא מוצאים מי שהם מחפשים. הדלת לא רק פתוחה — היא מחכה.', source: 'WEF 2025' },
  { type: 'bignum', act: 'II', label: 'YOUR PRIZE', num: '+25', unit: '%', numDesc: 'שכר נוסף. לא בגלל מאסטר — בגלל מיומנות שרוב האנשים עדיין אין להם.', source: 'PwC 2025' },
  // JOBS — framed as "your path"
  { type: 'joblist', act: 'II', label: 'OPEN NOW', hl: 'הדלת פתוחה. היום.', sub: 'המשרות שמחפשות אתכם — אפריל 2026', jobs: [
    { tag: 'OPS', title: 'AI Operations Manager', co: 'BeamUP', salary: '₪18–28K', desc: 'תפעול AI, אוטומציה, SQL' },
    { tag: 'DATA', title: 'Data Analyst', co: 'Buildots', salary: '₪20–30K', desc: 'ניתוח נתונים, Power BI' },
    { tag: 'BI', title: 'Data Operations Analyst', co: 'Plus500', salary: '₪22–32K', desc: 'SQL, Python, BI' },
    { tag: 'AI', title: 'AI Integration Specialist', co: 'Microsoft', salary: '₪25–35K', desc: 'Copilot, enterprise AI' },
  ]},
  { type: 'joblist', act: 'II', label: 'YOUR FUTURE', hl: 'לאן אתם הולכים.', sub: '5–8 שנים — אם תתחילו עכשיו', jobs: [
    { tag: 'PM', title: 'AI Product Manager', co: 'monday.com', salary: '₪45–65K', desc: 'שכבת ה-AI של המוצר, enterprise' },
    { tag: 'COE', title: 'Enterprise AI CoE Manager', co: 'Payoneer', salary: '₪50–70K', desc: 'אסטרטגיית AI לארגון של 2,500+' },
    { tag: 'LEAD', title: 'Lead AI Transformation', co: 'Plus500', salary: '₪55–75K', desc: 'ML בזמן אמת, חברה ציבורית' },
    { tag: 'TOP', title: 'Staff ML Engineer', co: 'NVIDIA Israel', salary: '₪65–85K+', desc: 'מחקר AI בחזית, inference' },
  ]},
  // CHAPTER: NOW YOUR TURN
  { type: 'chapter', act: 'III', label: 'YOUR TURN',
    chNum: '→', chTitle: 'עכשיו תורכם. אותה הצומת. אותה הבחירה.', chSub: 'מה אתם הולכים לעשות עם זה?' },
  // WHAT YOU ALREADY HAVE + WHAT TO ADD
  { type: 'split', act: 'III', label: 'WHAT YOU HAVE',
    splitL: { icon: '🧠', label: 'מה שיש לכם', tag: 'IE SKILLS', items: ['הגדרת בעיה', 'שיקול דעת', 'אחריות ואמון'] },
    splitR: { icon: '🤖', label: 'מה ה-AI עושה', tag: 'AI LAYER', items: ['עיבוד נתונים', 'משימות חוזרות', 'סקיילינג מהיר'] },
  },
  { type: 'skills', act: 'III', label: 'BUILD THIS', hl: 'מה לבנות עוד.', hl2: 'בשנה הקרובה.', skills: [
    { cat: 'CORE', items: ['חשיבת מערכות', 'ניתוח דאטה'] },
    { cat: 'AI', items: ['Prompt Engineering', 'Building with AI'] },
    { cat: 'TECH', items: ['אוטומציה', 'Python בסיסי'] },
    { cat: 'SOFT', items: ['תקשורת', 'מסגור בעיות'] },
    { cat: 'META', items: ['למידה עצמית'] },
  ]},
  { type: 'roadmap', act: 'III', label: 'YOUR 90 DAYS', hl: 'שלושה חודשים.', hl2: 'שלוש החלטות.', steps: [
    { days: '30', title: 'ספוג', desc: 'Claude Pro / ChatGPT. כל יום. שיעורי בית, סיכומים, ניתוחים.' },
    { days: '60', title: 'בנה', desc: 'פרויקט אמיתי. Base44, Lovable, n8n. משהו שפותר בעיה שלך.' },
    { days: '90', title: 'הצג', desc: 'LinkedIn, GitHub, Portfolio. הפוך את הידע לנראות.' },
  ]},
  // LETTERS — deeply personal
  { type: 'lessons', act: 'III', label: 'LETTERS', hl: 'מה הייתי אומר', hl2: 'לעצמי בשנה א׳.', lessons: [
    { num: '01', title: 'לבנות פומבי מהיום הראשון', desc: 'GitHub. LinkedIn. בלוג. זה הקו"ח האמיתי.' },
    { num: '02', title: 'פחות תאוריה, יותר מעשה', desc: 'הפרויקט עם החברה? עדיין משפיע. הסמינריון? שכחתי.' },
    { num: '03', title: 'תקשורת לפני אקסל', desc: 'אקסל — שבועיים. להציג ב-3 דקות — 10 שנים.' },
    { num: '04', title: 'לעזוב מהר יותר', desc: 'תזוזה היא הכלי הכי חזק לפיתוח קריירה.' },
  ]},
  { type: 'qalist', act: 'OUTRO', label: 'Q&A', hl: 'שאלות?', hl2: 'אני כאן.', questions: [
    'איך אדע שלימוד Python לא יהיה מיותר?',
    'MBA / M.Sc. / כלום — מה עדיף?',
    'איך מתחילים לבנות פרויקט בלי רעיון?',
    'סטאז׳ או משרה ראשונה — מה עדיף?',
    'איך מתבלטים ב-CV בלי ניסיון?',
    'משהו שלא הייתי עושה אם הייתי חוזר?',
  ]},
  { type: 'outro', act: 'OUTRO', label: 'THANKS', hl: 'תודה.', hl2: 'בהצלחה בדרך.', sub: 'LinkedIn · liranshaked · liroys1@gmail.com', photo: PHOTO_B64 },
];
export const V4_META = V4_SLIDES.map(s => ({ label: s.label, act: s.act }));

// ─────────────────────────────────────────────────────────────
// V5 SLIDES — "90 Days" (mission/urgency order)
// The window is open. The clock is ticking. Act or don't — but decide now.
// ─────────────────────────────────────────────────────────────
export const V5_SLIDES: LSlide[] = [
  // THE ALARM — the whole talk in 3 lines
  { type: 'alarm', act: 'INTRO', label: 'WAKE UP',
    alarmLines: ['90 יום.', 'החלטה אחת.', 'השוק לא מחכה.'],
    sub: 'BGU · מאי 2026 · לירן שקד · Lemonade',
  },
  // WHO IS BRIEFING YOU
  { type: 'hero', act: 'INTRO', label: 'BRIEFING OFFICER', hl: 'לירן שקד', hl2: 'L&D Lead · Lemonade · 14 שנה בשטח', sub: 'BGU · פורום 80–20 · מאי 2026', photo: PHOTO_B64 },
  // THE SPEED OF THE THREAT
  { type: 'bignum', act: 'I', label: 'SPEED OF CHANGE', num: '60', unit: ' יום', numDesc: '100 מיליון אנשים שינו את דרך העבודה. המהיר ביותר בהיסטוריה. שום חיסרון הגנה.', source: 'ChatGPT · 2022' },
  { type: 'bignum', act: 'I', label: 'ENEMY SCALE', num: '800', unit: 'M', numDesc: 'אנשים שעובדים עם AI כל שבוע. חלקם — המתחרים שלכם על אותם תפקידים.', source: 'OpenAI · 2025' },
  { type: 'bignum', act: 'I', label: 'EMPLOYER CONSENSUS', num: '86', unit: '%', numDesc: 'מהמעסיקים: AI ישנה את כל העסק. לא "יחלחל". יישנה. הכל.', source: 'WEF 2025' },
  // THE THREAT TO YOU
  { type: 'bignum', act: 'I', label: 'SKILL EXPIRY', num: '39', unit: '%', numDesc: 'מהמיומנויות שלכם יפוגו תוקף עד 2030. השאלה היא רק: איזה 39% שלכם?', source: 'WEF 2025' },
  // THE OPENING
  { type: 'bignum', act: 'II', label: 'THE GAP = YOUR OPENING', num: '63', unit: '%', numDesc: 'מהמעסיקים לא מוצאים כישורי AI. זו לא בעיה. זו הדלת הפתוחה. היא לא תישאר פתוחה.', source: 'WEF 2025' },
  { type: 'bignum', act: 'II', label: 'THE PRIZE', num: '+25', unit: '%', numDesc: 'שכר על אותה משרה — רק עם AI skills. בטק? +43%. זה המספר שמסביר הכל.', source: 'PwC 2025' },
  // INTELLIGENCE: WHAT THE GENERALS SAY
  { type: 'quote', act: 'II', label: 'INTEL: ALTMAN', quote: 'היכולת של אדם אחד להשיג ב-2030 הרבה יותר ממה שיכול היה ב-2020 תהיה שינוי מרשים.', author: 'Sam Altman', authorRole: 'CEO · OpenAI' },
  { type: 'quote', act: 'II', label: 'INTEL: HASSABIS', quote: 'AlphaFold פתר שאלה שהיתה פתוחה 50 שנה — לא ביטל חוקרים, פתח עידן שלם של גילויים.', author: 'Demis Hassabis', authorRole: 'Nobel Chemistry 2024 · CEO · Google DeepMind' },
  // TARGET POSITIONS
  { type: 'joblist', act: 'II', label: 'OPEN TARGETS: NOW', hl: 'משרות פתוחות. עכשיו.', sub: 'אפריל 2026 — כניסה: 12–18 חודש', jobs: [
    { tag: 'OPS', title: 'AI Operations Manager', co: 'BeamUP', salary: '₪18–28K', desc: 'תפעול AI, אוטומציה, SQL' },
    { tag: 'DATA', title: 'Data Analyst', co: 'Buildots', salary: '₪20–30K', desc: 'ניתוח נתונים, Power BI' },
    { tag: 'BI', title: 'Data Operations Analyst', co: 'Plus500', salary: '₪22–32K', desc: 'SQL, Python, BI' },
    { tag: 'AI', title: 'AI Integration Specialist', co: 'Microsoft', salary: '₪25–35K', desc: 'Copilot, enterprise AI' },
  ]},
  { type: 'joblist', act: 'II', label: 'FINAL TARGET: 5Y', hl: 'יעד סופי. 5–8 שנים.', sub: 'אם תתחילו היום', jobs: [
    { tag: 'PM', title: 'AI Product Manager', co: 'monday.com', salary: '₪45–65K', desc: 'שכבת ה-AI של המוצר, enterprise' },
    { tag: 'COE', title: 'Enterprise AI CoE Manager', co: 'Payoneer', salary: '₪50–70K', desc: 'אסטרטגיית AI לארגון של 2,500+' },
    { tag: 'LEAD', title: 'Lead AI Transformation', co: 'Plus500', salary: '₪55–75K', desc: 'ML בזמן אמת, חברה ציבורית' },
    { tag: 'TOP', title: 'Staff ML Engineer', co: 'NVIDIA Israel', salary: '₪65–85K+', desc: 'מחקר AI בחזית, inference' },
  ]},
  // YOUR ARSENAL
  { type: 'split', act: 'III', label: 'YOUR WEAPONS',
    splitL: { icon: '🧠', label: 'יש לך כבר', tag: 'IE SKILLS', items: ['הגדרת בעיה', 'שיקול דעת', 'אחריות ואמון'] },
    splitR: { icon: '⚡', label: 'צריך לרכוש', tag: 'AI LAYER', items: ['Prompt Engineering', 'Building with AI', 'אוטומציה'] },
  },
  { type: 'skills', act: 'III', label: 'ARSENAL', hl: 'מה לרכוש.', hl2: 'לפי עדיפות.', skills: [
    { cat: 'CORE', items: ['חשיבת מערכות', 'ניתוח דאטה'] },
    { cat: 'AI', items: ['Prompt Engineering', 'Building with AI'] },
    { cat: 'TECH', items: ['אוטומציה', 'Python בסיסי'] },
    { cat: 'SOFT', items: ['תקשורת', 'מסגור בעיות'] },
    { cat: 'META', items: ['למידה עצמית'] },
  ]},
  // THE MISSION PLAN
  { type: 'roadmap', act: 'III', label: 'MISSION PLAN', hl: 'המשימה.', hl2: '90 יום מהיום.', steps: [
    { days: '30', title: 'סיור', desc: 'Claude Pro / ChatGPT. כל יום. שיעורי בית, סיכומים, ניתוחים.' },
    { days: '60', title: 'פריסה', desc: 'פרויקט אמיתי. Base44, Lovable, n8n. משהו שפותר בעיה שלך.' },
    { days: '90', title: 'דיווח', desc: 'LinkedIn, GitHub, Portfolio. הפוך את הידע לנראות.' },
  ]},
  // FIELD INTELLIGENCE
  { type: 'lessons', act: 'III', label: 'FIELD INTEL', hl: '4 לקחים מהשטח.', hl2: '14 שנה. 4 הפתעות.', lessons: [
    { num: '01', title: 'לבנות פומבי מהיום הראשון', desc: 'GitHub. LinkedIn. בלוג. זה הקו"ח האמיתי.' },
    { num: '02', title: 'פחות תאוריה, יותר מעשה', desc: 'הפרויקט עם החברה? עדיין משפיע. הסמינריון? שכחתי.' },
    { num: '03', title: 'תקשורת לפני אקסל', desc: 'אקסל — שבועיים. להציג ב-3 דקות — 10 שנים.' },
    { num: '04', title: 'לעזוב מהר יותר', desc: 'תזוזה היא הכלי הכי חזק לפיתוח קריירה.' },
  ]},
  { type: 'qalist', act: 'OUTRO', label: 'DEBRIEF', hl: 'שאלות?', hl2: 'דיבריף.', questions: [
    'איך אדע שלימוד Python לא יהיה מיותר?',
    'MBA / M.Sc. / כלום — מה עדיף?',
    'איך מתחילים לבנות פרויקט בלי רעיון?',
    'סטאז׳ או משרה ראשונה — מה עדיף?',
    'איך מתבלטים ב-CV בלי ניסיון?',
    'משהו שלא הייתי עושה אם הייתי חוזר?',
  ]},
  { type: 'outro', act: 'OUTRO', label: 'MISSION START', hl: 'תודה.', hl2: 'המשימה מתחילה עכשיו.', sub: 'LinkedIn · liranshaked · liroys1@gmail.com', photo: PHOTO_B64 },
];
export const V5_META = V5_SLIDES.map(s => ({ label: s.label, act: s.act }));
