import { tb, bigNum, statement } from './helpers';

/* AGENDA */
export function v2s29() {
  return `
    ${tb(29, 'AGENDA')}
    <div class="v2-frame">
      <div class="v2-eyebrow">מה הולך לקרות פה</div>
      <h1 class="v2-headline v2-hl-md">שעה אחת.<br/><span class="v2-accent">3 מערכות.</span><br/>סיפור אחד.</h1>
      <div class="v2-agenda-acts">
        <div class="v2-agenda-act">
          <span class="v2-act-pill">ACT I · ~15 דק'</span>
          <span class="v2-agenda-act-text">מאיפה באנו — הסיפור שלי, התואר, 3 עידנים</span>
        </div>
        <div class="v2-agenda-act">
          <span class="v2-act-pill">ACT II · ~25 דק'</span>
          <span class="v2-agenda-act-text">מה משתנה עכשיו — נתונים, משרות, קולות מהשוק</span>
        </div>
        <div class="v2-agenda-act">
          <span class="v2-act-pill">ACT III · ~20 דק'</span>
          <span class="v2-agenda-act-text">מה אתם תעשו — מיומנויות, פרויקטים, 90 יום</span>
        </div>
      </div>
    </div>`;
}

/* OLD vs NEW IE — 4 עידנים */
export function v2s30() {
  return `
    ${tb(30, 'EVOLUTION')}
    <div class="v2-frame">
      <div class="v2-eyebrow">אותו תואר · 4 ניסוחים שונים</div>
      <h1 class="v2-headline v2-hl-md">
        <span style="opacity:.4">Lean → ERP → Data →</span><br/>
        <span class="v2-accent">AI.</span>
      </h1>
      <div class="v2-evo-table">
        <div class="v2-evo-row v2-evo-past">
          <span class="v2-evo-year">2010</span>
          <span class="v2-evo-role">מהנדס/ת קווי ייצור</span>
          <span class="v2-evo-tools v2-lat">Lean · AutoCAD · FMEA</span>
        </div>
        <div class="v2-evo-row v2-evo-past">
          <span class="v2-evo-year">2015</span>
          <span class="v2-evo-role">מהנדס/ת תהליכים</span>
          <span class="v2-evo-tools v2-lat">SAP · BPMN · Excel</span>
        </div>
        <div class="v2-evo-row v2-evo-past">
          <span class="v2-evo-year">2020</span>
          <span class="v2-evo-role">מהנדס/ת דאטה ותפעול</span>
          <span class="v2-evo-tools v2-lat">SQL · Power BI · Agile</span>
        </div>
        <div class="v2-evo-row v2-evo-now">
          <span class="v2-evo-year">2026</span>
          <span class="v2-evo-role">מהנדס/ת AI ומערכות</span>
          <span class="v2-evo-tools v2-lat">LLMs · Agents · no-code</span>
        </div>
      </div>
      <p class="v2-sub">הליבה — אופטימיזציה של מערכות אנוש-מכונה — לא משתנה.<br/>הכלים תמיד משתנים. מי שלמד נכון, ניצח כל פעם.</p>
    </div>`;
}

/* 39% */
export const v2s31 = () => bigNum(
  31, 'WEF 2025', '39', '%',
  'מהמיומנויות שלכם ישתנו עד 2030. ממצא WEF — 1,043 מעסיקים גלובליים, 14 מיליון עובדים. ירד מ-57% ב-2020 כי השוק כבר התחלק לשניים.',
  'WEF Future of Jobs 2025'
);

/* 63% talent shortage */
export const v2s32 = () => bigNum(
  32, 'WEF 2025', '63', '%',
  'מהמעסיקים בעולם לא מוצאים אנשים עם כישורי AI ודאטה. המחסור הכי גדול בשוק העבודה. זו ההזדמנות שלכם.',
  'WEF Future of Jobs 2025'
);

/* +25% salary */
export const v2s33 = () => bigNum(
  33, 'PwC 2025', '+25', '%',
  'פרמיית שכר ממוצעת לבעלי מיומנויות AI — גלובלית, חוצה תעשיות. בתפקידי טק בארה"ב: 43%.',
  'PwC AI Jobs Barometer 2025'
);

/* JUNIOR JOBS */
export function v2s34() {
  return `
    ${tb(34, 'JOBS · JUNIOR')}
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

/* SENIOR JOBS */
export function v2s35() {
  return `
    ${tb(35, 'JOBS · SENIOR')}
    <div class="v2-frame">
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

/* IF I COULD DO OVER */
export function v2s36() {
  return `
    ${tb(36, 'IF I COULD DO OVER')}
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

/* Q&A discussion questions */
export function v2s37() {
  return `
    ${tb(37, 'Q&A · QUESTIONS')}
    <div class="v2-frame">
      <div class="v2-eyebrow">6 שאלות שכדאי לחשוב עליהן</div>
      <h1 class="v2-headline v2-hl-md">תורכם.<br/><span class="v2-accent">לשאול.</span></h1>
      <div class="v2-qlist">
        <div class="v2-q-item"><span class="v2-q-num">01</span><span>איך אדע שלימוד Python לא יהיה מיותר?</span></div>
        <div class="v2-q-item"><span class="v2-q-num">02</span><span>MBA / M.Sc. / כלום — מה עדיף?</span></div>
        <div class="v2-q-item"><span class="v2-q-num">03</span><span>איך מתחילים לבנות פרויקט בלי רעיון?</span></div>
        <div class="v2-q-item"><span class="v2-q-num">04</span><span>סטאז' או משרה ראשונה — מה עדיף?</span></div>
        <div class="v2-q-item"><span class="v2-q-num">05</span><span>איך מתבלטים ב-CV בלי ניסיון?</span></div>
        <div class="v2-q-item"><span class="v2-q-num">06</span><span>משהו שלא הייתי עושה אם הייתי חוזר אחורה?</span></div>
      </div>
    </div>`;
}
