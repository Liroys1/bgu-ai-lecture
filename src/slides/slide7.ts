import { topbar } from './topbar';

/* SLIDE 7: 4 STAT CARDS */
export function slide7() {
  return `
    ${topbar(7, 'DATA · 2/3')}
    <div class="frame stats">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>05 · עוד 4 מספרים</span>
        <h2 style="margin-top:8px">השוק בתנועה. <span class="accent">סיפור של אופטימיות זהירה.</span></h2>
        <p class="lead" style="margin-top:6px">
          <strong>הסיפור:</strong> צמיחה נטו, אבל פערי מיומנויות עצומים. 
          <strong>הסכנה לכם:</strong> אם תישארו עם הכלים של היום, תהיו מאחור עוד שנתיים. 
          <strong>ההזדמנות:</strong> הפרמיה של 25-43% למי שזריז יותר.
        </p>
      </div>
      <div class="grid anim-fade" style="animation-delay:0.3s">
        <div class="stat-card">
          <div class="stat-num">+78<span class="unit">M</span></div>
          <div class="stat-label">משרות נטו <span class="lat">2025–2030</span></div>
          <div class="stat-desc">170 מיליון משרות חדשות, 92 מיליון נעלמות. <strong>נטו: גידול של 78 מיליון משרות בעולם.</strong></div>
          <div class="source">
            <span class="source-tag">WEF 2025</span>
            <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report</a>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-num">86<span class="unit">%</span></div>
          <div class="stat-label">מהמעסיקים: <span class="lat">AI</span> ישנה את העסק</div>
          <div class="stat-desc"><strong>86% מהמעסיקים</strong> צופים שבינה מלאכותית ועיבוד מידע ישנו את הארגון שלהם עד 2030.</div>
          <div class="source">
            <span class="source-tag">WEF 2025</span>
            <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report</a>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-num">25<span class="unit">%</span></div>
          <div class="stat-label">פרמיית שכר על שליטה ב-<span class="lat">AI</span></div>
          <div class="stat-desc">עובדים עם מיומנויות <span class="lat">AI</span> מרוויחים <strong>בממוצע 25% יותר</strong>. בתפקידי הטק זה מגיע ל-43%.</div>
          <div class="source">
            <span class="source-tag">PwC</span>
            <a href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html" target="_blank">PwC 2025 AI Jobs Barometer</a>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-num">63<span class="unit">%</span></div>
          <div class="stat-label">מהמעסיקים: מחסור במיומנויות</div>
          <div class="stat-desc">נתון חדש מדו"ח <span class="lat">2026</span>. <strong>זו לא חוסר במשרות — זה חוסר באנשים מתאימים.</strong></div>
          <div class="source">
            <span class="source-tag">WEF 2026</span>
            <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report 2026</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

