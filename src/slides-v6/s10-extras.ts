import { tb, bigNum, act } from '../slides-v2/helpers';

/* AGENDA */
export function v6s_agenda() {
  return `
    ${tb(3, 'AGENDA')}
    <div class="v2-frame">
      <div class="v2-eyebrow">מה הולך לקרות פה</div>
      <h1 class="v2-headline v2-hl-md">שעה אחת.<br/><span class="v2-accent">3 מערכות.</span><br/>סיפור אחד.</h1>
      <div class="v2-agenda-acts">
        <div class="v2-agenda-act">
          <span class="v2-act-pill">ACT I · ~15 דק'</span>
          <span class="v2-agenda-act-text">מאיפה באנו — הסיפור שלי, תעשייה וניהול רלוונטי, 3 עידנים</span>
        </div>
        <div class="v2-agenda-act">
          <span class="v2-act-pill">ACT II · ~25 דק'</span>
          <span class="v2-agenda-act-text">מה משתנה עכשיו — נתונים, משרות, קולות מהשוק</span>
        </div>
        <div class="v2-agenda-act">
          <span class="v2-act-pill">ACT III · ~20 דק'</span>
          <span class="v2-agenda-act-text">העתיד שלכם — מיומנויות, פרויקטים, 90 יום</span>
        </div>
      </div>
    </div>`;
}

/* 3 ERAS chapter */
export const v6s_eras_chapter = () => act(8, 'I', 'שלושה עידנים.<br/><span class="v2-accent">אנחנו בשלישי.</span>', 'כל עידן שינה מי ינצח. אנחנו בשינוי הגדול ביותר עד כה.');

/* ERA 3 AI */
export function v6s_era3() {
  return `
    ${tb(11, 'TRANSFORMATION')}
    <div class="v2-frame v2-era-frame">
      <div class="v2-era-year v2-era-now">2020 ←</div>
      <h1 class="v2-headline v2-hl-md"><span class="v2-accent">עידן ה-AI</span></h1>
      <p class="v2-sub">מי שיידע לנהל סוכני AI ולהפעיל כלים — <strong>ינצח.</strong><br/>AI משנה את כל מה שהיה לפניו.<br/><span class="v6-era-tools">LLMs · Agents · Copilot · Claude · GPT-4 · no-code</span></p>
      <div class="v2-era-dot v2-era-dot3"></div>
    </div>`;
}

/* 800M */
export const v6s_800m = () => bigNum(14, 'DATA', '800', 'M',
  'משתמשים שבועיים ב-ChatGPT בלבד. לא כולל Gemini, Claude, Grok.',
  'OpenAI · 2025'
);

/* +78M */
export const v6s_78m = () => bigNum(15, 'DATA', '+78', 'M',
  'משרות נטו ייווצרו עד 2030. 170M חדשות פחות 92M שייעלמו.',
  'WEF Future of Jobs 2025'
);

/* 86% */
export const v6s_86 = () => bigNum(16, 'DATA', '86', '%',
  'מהמעסיקים בעולם: AI ישנה את העסק שלהם באופן מהותי עד 2030.',
  'WEF Future of Jobs 2025'
);

/* 63% */
export const v6s_63 = () => bigNum(18, 'WEF 2025', '63', '%',
  'מהמעסיקים בעולם לא מוצאים אנשים עם כישורי AI ודאטה. המחסור הכי גדול בשוק העבודה. זו ההזדמנות שלכם.',
  'WEF Future of Jobs 2025'
);

/* +25% salary */
export const v6s_25sal = () => bigNum(19, 'PwC 2025', '+25', '%',
  'פרמיית שכר ממוצעת לבעלי מיומנויות AI — גלובלית, חוצה תעשיות. בתפקידי טק בארה"ב: 43%.',
  'PwC AI Jobs Barometer 2025'
);

/* ACT II chapter */
export const v6s_act2 = () => act(20, 'II', 'מה זה אומר עליכם', 'השוק דיבר. המנהיגים דיברו. השאלה היא מה תעשו עם זה.');

/* 3 VOICES */
export function v6s_voices() {
  return `
    ${tb(21, 'VOICES')}
    <div class="v2-frame">
      <div class="v2-eyebrow">3 בוני ה-AI המובילים בעולם</div>
      <h1 class="v2-headline v2-hl-md">שלושה אנשים.<br/><span class="v2-accent">אותו מסר.</span></h1>
      <p class="v2-sub">Altman. Matias. Hassabis. OpenAI, Google, DeepMind.<br/>כולם אומרים: AI הוא <strong>מגבר</strong> — לא תחליף.</p>
    </div>`;
}

/* JOBS JUNIOR */
export function v6s_jobs_junior() {
  return `
    ${tb(25, 'JOBS · JUNIOR')}
    <div class="v2-frame">
      <div class="v2-eyebrow">אפריל 2026 · ג'וניור</div>
      <h1 class="v2-headline v2-hl-md">אלה המשרות שמחפשות <span class="v2-accent">אתכם.</span></h1>
      <div class="v2-job-list">
        <div class="v2-job-item">
          <span class="v2-job-tag">OPS</span>
          <div class="v2-job-body">
            <span class="v2-job-title">AI Operations Manager · BeamUP</span>
            <span class="v2-job-desc">תפעול AI, אוטומציה, דאטה · דרוש: חשיבה אנליטית, SQL</span>
          </div>
          <span class="v2-job-salary">₪18–28K</span>
        </div>
        <div class="v2-job-item">
          <span class="v2-job-tag">DATA</span>
          <div class="v2-job-body">
            <span class="v2-job-title">Data Analyst · Buildots</span>
            <span class="v2-job-desc">ניתוח נתוני פרויקטים, דשבורדים · Python יתרון</span>
          </div>
          <span class="v2-job-salary">₪20–30K</span>
        </div>
        <div class="v2-job-item">
          <span class="v2-job-tag">BI</span>
          <div class="v2-job-body">
            <span class="v2-job-title">Data Operations Analyst · Plus500</span>
            <span class="v2-job-desc">BI ודאטה לפיננסים · SQL חזק, Python</span>
          </div>
          <span class="v2-job-salary">₪22–32K</span>
        </div>
        <div class="v2-job-item">
          <span class="v2-job-tag">AI</span>
          <div class="v2-job-body">
            <span class="v2-job-title">AI Integration Specialist · Microsoft</span>
            <span class="v2-job-desc">הטמעת Copilot ב-enterprise · חשיבה מערכתית</span>
          </div>
          <span class="v2-job-salary">₪25–35K</span>
        </div>
      </div>
    </div>`;
}

/* JOBS SENIOR */
export function v6s_jobs_senior() {
  return `
    ${tb(26, 'JOBS · SENIOR')}
    <div class="v2-frame v6-jobs-senior-frame">
      <div class="v2-eyebrow">ולאן זה מוביל · בכיר · 5–8 שנים</div>
      <h1 class="v2-headline v2-hl-md">לאן זה הולך.<br/><span class="v2-accent">לאלה שנכנסים נכון.</span></h1>
      <div class="v2-job-list">
        <div class="v2-job-item">
          <span class="v2-job-tag">PM</span>
          <div class="v2-job-body">
            <span class="v2-job-title">AI Product Manager · monday.com</span>
            <span class="v2-job-desc">שכבת ה-AI של המוצר · עבודה מול CTO ו-enterprise</span>
          </div>
          <span class="v2-job-salary">₪45–65K</span>
        </div>
        <div class="v2-job-item">
          <span class="v2-job-tag">COE</span>
          <div class="v2-job-body">
            <span class="v2-job-title">Enterprise AI CoE Manager · Payoneer</span>
            <span class="v2-job-desc">אסטרטגיית AI לארגון של 2,500+ עובדים</span>
          </div>
          <span class="v2-job-salary">₪50–70K</span>
        </div>
        <div class="v2-job-item">
          <span class="v2-job-tag">LEAD</span>
          <div class="v2-job-body">
            <span class="v2-job-title">Lead AI Transformation · Plus500</span>
            <span class="v2-job-desc">מודלי ML לפיננסים בזמן אמת · חברה ציבורית</span>
          </div>
          <span class="v2-job-salary">₪55–75K</span>
        </div>
        <div class="v2-job-item v2-job-item-top">
          <span class="v2-job-tag v2-job-tag-accent">TOP</span>
          <div class="v2-job-body">
            <span class="v2-job-title">Staff ML Engineer · NVIDIA Israel</span>
            <span class="v2-job-desc">מחקר AI בחזית — inference, distributed training</span>
          </div>
          <span class="v2-job-salary">₪65–85K+</span>
        </div>
      </div>
    </div>`;
}

/* ACT III chapter */
export const v6s_act3 = () => act(28, 'III', 'מה לעשות עם זה', 'לא לפחד, לא להתעלם — להבין את התפקיד החדש.');

/* DO OVER */
export function v6s_doover() {
  return `
    ${tb(34, 'IF I COULD DO OVER')}
    <div class="v2-frame">
      <div class="v2-eyebrow">14 שנה · 4 שיעורים</div>
      <h1 class="v2-headline v2-hl-md">מה הייתי עושה <span class="v2-accent">אחרת.</span></h1>
      <div class="v2-lesson-list">
        <div class="v2-lesson-item">
          <span class="v2-lesson-num">01</span>
          <div>
            <div class="v2-lesson-title">לבנות <em>פומבי</em> מהיום הראשון</div>
            <div class="v2-lesson-desc">GitHub. LinkedIn. בלוג. זה הקו"ח האמיתי — לא הנייר.</div>
          </div>
        </div>
        <div class="v2-lesson-item">
          <span class="v2-lesson-num">02</span>
          <div>
            <div class="v2-lesson-title">פחות תאוריה, יותר <em>מעשה</em></div>
            <div class="v2-lesson-desc">הפרויקט עם החברה? עדיין משפיע. הסמינריון הסטטיסטי? שכחתי מזמן.</div>
          </div>
        </div>
        <div class="v2-lesson-item">
          <span class="v2-lesson-num">03</span>
          <div>
            <div class="v2-lesson-title"><em>תקשורת</em> לפני אקסל</div>
            <div class="v2-lesson-desc">אקסל לומדים בשבועיים. איך מציגים מסקנה ב-3 דקות — לוקח 10 שנים.</div>
          </div>
        </div>
        <div class="v2-lesson-item">
          <span class="v2-lesson-num">04</span>
          <div>
            <div class="v2-lesson-title">לעזוב <em>מהר יותר</em></div>
            <div class="v2-lesson-desc">תזוזה היא הכלי הכי חזק לפיתוח קריירה. אל תנשאו לתפקיד.</div>
          </div>
        </div>
      </div>
    </div>`;
}
