import { topbar } from './topbar';

/* SLIDE 7: STATS — Big Number Hero layout */
export function slide7() {
  return `
    ${topbar(7, 'DATA · 2/2')}
    <div class="frame stats-hero-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>05 · עוד 4 מספרים</span>
        <h2 style="margin-top:8px">השוק <span class="accent">התחלק לשניים.</span> בחצי החדש — אתם מבוקשים.</h2>
        <p class="lead" style="margin-top:6px">
          צמיחה נטו של 78M משרות — אבל לא אותן משרות ולא אותם אנשים.
          <strong>בתפקידי AI ודאטה יש מחסור אדיר. ההזדמנות שלכם.</strong>
        </p>
      </div>
      <div class="stats-hero-grid anim-fade" style="animation-delay:0.3s">
        <div class="stat-hero-item">
          <div class="stat-hero-num"><span class="stat-num">+78</span><span class="stat-hero-unit">M</span></div>
          <div class="stat-hero-label">משרות נטו · <span class="lat">2025–2030</span></div>
          <div class="stat-hero-desc">
            170 מיליון משרות חדשות, 92 מיליון נעלמות. <strong>נטו: 78M משרות נוספות.</strong>
            <em>אבל</em> — לא אותן משרות. מי שיודע <span class="lat">AI</span> יקבל את החדשות. מי שלא — נמצא בקבוצה שנעלמת.
          </div>
          <div class="source"><span class="source-tag">WEF 2025</span><a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report</a></div>
        </div>
        <div class="stat-hero-item">
          <div class="stat-hero-num"><span class="stat-num">86</span><span class="stat-hero-unit">%</span></div>
          <div class="stat-hero-label">מהמעסיקים: <span class="lat">AI</span> ישנה את העסק</div>
          <div class="stat-hero-desc">
            86% מהארגונים צופים שינוי <strong>משמעותי</strong> עד 2030.
            <em>לכם זה אומר:</em> לא משנה לאיזה תחום תיכנסו — בנקאות, ייצור, ביטוח, מוצר — תפגשו <span class="lat">AI</span> ביום הראשון.
          </div>
          <div class="source"><span class="source-tag">WEF 2025</span><a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report</a></div>
        </div>
        <div class="stat-hero-item">
          <div class="stat-hero-num"><span class="stat-num">63</span><span class="stat-hero-unit">%</span></div>
          <div class="stat-hero-label">מהמעסיקים: לא מוצאים אנשים עם הכישורים</div>
          <div class="stat-hero-desc">
            63% מדווחים על קושי לגייס לתפקידי <span class="lat">AI</span> ודאטה. <strong>זו ההזדמנות שלכם:</strong>
            בתפקידים החדשים יש מחסור אדיר. <em>מי שילמד נכון, ייכנס בקלות יחסית.</em>
          </div>
          <div class="source"><span class="source-tag">WEF 2025</span><a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report 2025</a></div>
        </div>
        <div class="stat-hero-item accent-item">
          <div class="stat-hero-num"><span class="stat-num">+25</span><span class="stat-hero-unit">%</span></div>
          <div class="stat-hero-label">פרמיית שכר ממוצעת על מיומנויות <span class="lat">AI</span></div>
          <div class="stat-hero-desc">
            עובדים עם מיומנויות <span class="lat">AI</span> מרוויחים בממוצע <strong>25% יותר</strong> — גלובלית, חוצה תעשיות.
            <em>בתפקידי טק בארה"ב</em> הפער מגיע ל-43%. <strong>השקעה שמחזירה את עצמה תוך שנה.</strong>
          </div>
          <div class="source"><span class="source-tag">PwC 2025</span><a href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html" target="_blank">AI Jobs Barometer</a></div>
        </div>
      </div>
    </div>
  `;
}
