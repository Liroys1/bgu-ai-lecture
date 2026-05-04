import { topbar } from './topbar';

/* SLIDE 4: WHY IE - 3 stats */
export function slide4() {
  return `
    ${topbar(4, 'WHY IE')}
    <div class="frame why-ie">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>02 · למה התחום הזה</span>
        <h2 style="margin-top:10px">המקצוע שתמיד <span class="accent">מתאים את עצמו.</span></h2>
        <p class="lead">
          בכל פעם שהעולם משתנה — תעשייה וניהול נשאר רלוונטי. כי לא לימדו אותך טכנולוגיה אחת.
          לימדו אותך <strong>איך לחשוב על מערכות</strong>. <em>זו המיומנות שלא ניתן לאוטמט</em> — ולכן ה-<span class="lat">AI</span> משלים אותה, לא מחליף.
        </p>
      </div>
      <div class="why-rankings anim-fade" style="animation-delay:0.2s">
        <div class="rank-pill highlight">
          <span class="rank-num">#1</span>
          <span class="rank-text"><span class="lat">Best Engineering Job</span> · <span class="rank-source-inline lat">US News 2026</span></span>
        </div>
        <div class="rank-pill">
          <span class="rank-num">#1</span>
          <span class="rank-text"><span class="lat">IE Graduate Program · Georgia Tech ISyE</span> · <span>36 שנה ברצף · <span class="rank-source-inline lat">US News 2026</span></span></span>
        </div>
        <div class="rank-pill">
          <span class="rank-num">25,200</span>
          <span class="rank-text">משרות פתוחות בשנה · <span class="rank-source-inline lat">BLS 2024–2034</span></span>
        </div>
      </div>
      <div class="grid anim-fade" style="animation-delay:0.35s">
        <div class="why-card">
          <div class="num">+11%</div>
          <div class="t">צמיחת המקצוע ב-<span class="lat">USA</span> · 2024–2034</div>
          <div class="d">המקצוע צומח <strong>מהר יותר מהממוצע במשק</strong>. כ-<strong>25,200 פתיחות בשנה</strong> (חדשות + עוזבים). הצמיחה מואצת ע"י דרישה לאופטימיזציה של תהליכים בעידן <span class="lat">AI</span>.</div>
          <div class="source">
            <span class="source-tag">BLS · 2024–2034</span>
            <a href="https://www.bls.gov/ooh/architecture-and-engineering/industrial-engineers.htm" target="_blank">U.S. Bureau of Labor Statistics</a>
          </div>
        </div>
        <div class="why-card">
          <div class="num">$107K</div>
          <div class="t">שכר חציוני שנתי בארה"ב</div>
          <div class="d">השכר הממוצע <strong>גבוה ב-25% מהממוצע למקצועות אקדמיים</strong>. בישראל — סטארטר ~₪25-35K, בכירים ₪50-85K (לפי <span class="lat">LinkedIn / Glassdoor IL</span>, אפריל 2026).</div>
          <div class="source">
            <span class="source-tag">U.S. NEWS · 2026</span>
            <a href="https://money.usnews.com/careers/best-jobs/industrial-engineer" target="_blank">Industrial Engineer Salary</a>
          </div>
        </div>
        <div class="why-card">
          <div class="num">~60%</div>
          <div class="t">מהבוגרים — מחוץ לייצור</div>
          <div class="d">רוב הבוגרים פונים ל-<strong>ניהול, ייעוץ, מוצר, דאטה ותחום הטק</strong>. תעשייה וניהול היא הדלת הרחבה ביותר בהנדסה לעולם הביזנס.</div>
          <div class="source">
            <span class="source-tag">RESEARCH · 2026</span>
            <a href="https://research.com/advice/ai-automation-and-the-future-of-industrial-engineering-degree-careers" target="_blank">research.com</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
