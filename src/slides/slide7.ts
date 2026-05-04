import { topbar } from './topbar';

/* SLIDE 7: STATS — Big Number Hero layout */
export function slide7() {
  return `
    ${topbar(7, 'DATA · 2/2')}
    <div class="frame stats-hero-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>05 · עוד 4 מספרים</span>
        <h2 style="margin-top:8px">השוק בתנועה. <span class="accent">סיפור של אופטימיות זהירה.</span></h2>
        <p class="lead" style="margin-top:6px">
          <strong>הסיפור:</strong> צמיחה נטו, אבל פערי מיומנויות עצומים.
          <strong>הסכנה לכם:</strong> אם תישארו עם הכלים של היום, תהיו מאחור עוד שנתיים.
          <strong>ההזדמנות:</strong> הפרמיה של 25-43% למי שזריז יותר.
        </p>
      </div>
      <div class="stats-hero-grid anim-fade" style="animation-delay:0.3s">
        <div class="stat-hero-item">
          <div class="stat-hero-num"><span class="stat-num">+78</span><span class="stat-hero-unit">M</span></div>
          <div class="stat-hero-label">משרות נטו <span class="lat">2025–2030</span></div>
          <div class="stat-hero-desc">170 מיליון משרות חדשות, 92 מיליון נעלמות. <strong>נטו: גידול של 78 מיליון בעולם.</strong></div>
          <div class="source"><span class="source-tag">WEF 2025</span><a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report</a></div>
        </div>
        <div class="stat-hero-item">
          <div class="stat-hero-num"><span class="stat-num">86</span><span class="stat-hero-unit">%</span></div>
          <div class="stat-hero-label">מהמעסיקים: <span class="lat">AI</span> ישנה את העסק</div>
          <div class="stat-hero-desc"><strong>86% מהמעסיקים</strong> צופים שינוי ארגוני משמעותי עד 2030.</div>
          <div class="source"><span class="source-tag">WEF 2025</span><a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report</a></div>
        </div>
        <div class="stat-hero-item accent-item">
          <div class="stat-hero-num"><span class="stat-num">25</span><span class="stat-hero-unit">%</span></div>
          <div class="stat-hero-label">פרמיית שכר על שליטה ב-<span class="lat">AI</span></div>
          <div class="stat-hero-desc">פרמיה ממוצעת. בתפקידי טק — <strong>43%</strong>.</div>
          <div class="source"><span class="source-tag">PwC 2025</span><a href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html" target="_blank">AI Jobs Barometer</a></div>
        </div>
        <div class="stat-hero-item">
          <div class="stat-hero-num"><span class="stat-num">63</span><span class="stat-hero-unit">%</span></div>
          <div class="stat-hero-label">מהמעסיקים: מחסור במיומנויות</div>
          <div class="stat-hero-desc">לא חוסר במשרות — <strong>חוסר באנשים מתאימים</strong>. הפתח פתוח לכם.</div>
          <div class="source"><span class="source-tag">WEF 2026</span><a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report</a></div>
        </div>
      </div>
    </div>
  `;
}
