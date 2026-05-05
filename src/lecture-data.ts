import { PHOTO_B64 } from './assets/images';

export type SlideAct = 'INTRO' | 'I' | 'II' | 'III' | 'OUTRO';
export type SlideType =
  | 'hero' | 'statement' | 'act' | 'bignum' | 'quote'
  | 'joblist' | 'split' | 'skills' | 'roadmap' | 'lessons'
  | 'qalist' | 'qa' | 'outro';

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
