import { topbar } from './topbar';

/* SLIDE 18: Q&A - questions to spark discussion */
export function slide18() {
  const questions = [
    { n: '01', t: 'איך אדע שלימוד <span class="lat">Python</span> עכשיו לא יהיה מיותר?', h: 'תתחילו מ-<span class="lat">pandas</span> לניתוח דאטה, לא מ-<span class="lat">syntax</span> בסיסי. 5 שעות עם <span class="lat">Claude</span> לידכם = אתם רצים. <strong>רלוונטי עוד 10 שנים בטוח.</strong>' },
    { n: '02', t: 'תארים שניים — <span class="lat">MBA</span> / <span class="lat">M.Sc.</span> / כלום?', h: '<span class="lat">MBA</span> רק אם רוצים ניהול בכיר/<span class="lat">VC</span> (₪200K+שנתיים). <span class="lat">M.Sc.</span> רק ל-<span class="lat">ML Research</span>. <strong>ברוב המקרים — ללמוד תוך כדי עבודה.</strong>' },
    { n: '03', t: 'איך מתחילים לבנות פרויקט בלי רעיון?', h: 'תיקחו דבר שמעצבן אתכם כל יום — טופס, חישוב, מעקב — ותבנו לזה אפליקציה ב-<span class="lat">Base44</span>. <strong>דוגמה: אפליקציית סדר יום לסטודנט בתעשייה וניהול.</strong>' },
    { n: '04', t: 'סטאז\' או משרה ראשונה — מה עדיף?', h: 'סטאז\' (~₪10K) = למידה בלי לחץ. משרה (~₪25K) = הוכחה. <strong>השאלה האמיתית: מי המנטור שלכם?</strong> זה שווה יותר משכר.' },
    { n: '05', t: 'איך מתבלטים ב-<span class="lat">CV</span> בלי ניסיון?', h: 'שלושה דברים: (1) <span class="lat">LinkedIn</span> חי עם פרויקטים אמיתיים. (2) קישור ישיר לאפליקציה שבניתם. (3) <strong>שורה אחת על ה-<span class="lat">AI workflow</span> היומיומי שלכם</strong> — ספציפית.' },
    { n: '06', t: 'משהו שלא הייתי עושה אם הייתי חוזר אחורה?', h: '3 שנים בייעוץ זה הרבה — שנה אחת מספיקה. <span class="lat">MBA</span> אונליין — בזבוז כסף. ולא הייתי מחכה 14 שנה לבנות בפומבי. <strong>תתחילו מחר.</strong>' }
  ];
  const cells = questions.map(q => `
    <div class="q-card">
      <span class="q-num">${q.n}</span>
      <div class="q-title">${q.t}</div>
      <div class="q-hint">${q.h}</div>
    </div>
  `).join('');
  return `
    ${topbar(19, 'Q&A')}
    <div class="frame qs-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>16 · שאלות פתוחות</span>
        <h1 style="margin-top:18px">עכשיו <span class="accent">תורכם.</span></h1>
        <p class="lead">
          הנה כמה שאלות שכדאי שתחשבו עליהן — או פשוט תשאלו מה שמטריד אתכם. 
          אין שאלה טיפשית. הכי טיפשי זה לא לשאול ולצאת בלי תשובה.
        </p>
      </div>
      <div class="qs-grid anim-fade" style="animation-delay:0.3s">${cells}</div>
    </div>
  `;
}

