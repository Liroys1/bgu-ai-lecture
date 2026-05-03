import { topbar } from './topbar';

/* SLIDE 2: AGENDA - what's coming in this hour */
export function slide2() {
  return `
    ${topbar(2, 'AGENDA')}
    <div class="frame agenda">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>00 · המסע של השעה הזאת</span>
        <h2 style="margin-top:10px">שעה אחת. <span class="accent">שלוש מערכות.</span> סיפור אחד.</h2>
        <p class="lead">
          בשעה הקרובה אקח אתכם דרך הסיפור של המקצוע — מאיפה הוא בא, מה קורה לו עכשיו, ומה אתם 
          יכולים לעשות עם זה <strong>ממחר בבוקר</strong>. אין כאן הצגה — יש שיחה.
        </p>
      </div>
      <div class="agenda-grid anim-fade" style="animation-delay:0.3s">
        <div class="act-card act1">
          <div class="act-num">ACT I</div>
          <div class="act-time">~15 דק'</div>
          <div class="act-title">מאיפה באנו</div>
          <div class="act-desc">הסיפור האישי שלי, מה זה בכלל תעשייה וניהול, ולמה הוא עדיין רלוונטי <em>במיוחד עכשיו</em>.</div>
          <ul>
            <li>14 שנה, 6 תחנות</li>
            <li>הצנרת מאחורי הקלעים</li>
            <li>למה התחום עדיין חי</li>
          </ul>
          <div class="act-stat">3 סטטיסטיקות שיפתיעו אתכם</div>
        </div>
        <div class="act-card act2">
          <div class="act-num">ACT II</div>
          <div class="act-time">~25 דק'</div>
          <div class="act-title">מה משתנה עכשיו</div>
          <div class="act-desc">המקצוע משתנה לעיניכם. משרות חדשות, ציטוטים, ו<strong>ההרצאה</strong> של מנכ"ל <span class="lat">Lemonade</span>.</div>
          <ul>
            <li>תעשייה וניהול 2010 מול 2026</li>
            <li>8 משרות אמיתיות החודש</li>
            <li>החייזרים נחתו</li>
          </ul>
          <div class="act-stat">39% מהמיומנויות שלכם ישתנו עד 2030</div>
        </div>
        <div class="act-card act3">
          <div class="act-num">ACT III</div>
          <div class="act-time">~20 דק'</div>
          <div class="act-title">מה אתם תעשו</div>
          <div class="act-desc">הסיפור שלי עם <span class="lat">AI</span>, מפת דרכים ל-90 יום, ומה הייתי עושה אחרת.</div>
          <ul>
            <li>3 פרויקטים אמיתיים שלי</li>
            <li>9 מיומנויות לעידן הזה</li>
            <li>שאלות פתוחות</li>
          </ul>
          <div class="act-stat">המצגת הזו נבנתה בלי שורת קוד</div>
        </div>
      </div>
      <div class="agenda-footer">
        <span class="af-item"><strong>20</strong> שקפים</span>
        <span class="af-sep">·</span>
        <span class="af-item"><strong>2026</strong> מקורות עדכניים</span>
        <span class="af-sep">·</span>
        <span class="af-item">בנויה ב-<strong>Claude</strong></span>
        <span class="af-sep">·</span>
        <span class="af-item">דברו איתי <strong>בכל זמן</strong></span>
      </div>
    </div>
  `;
}

