import { topbar } from './topbar';

/* SLIDE ARTICLE - Calcalist 1.5.26 - The juniors are coming back */
export function slideArticle() {
  return `
    ${topbar(12, 'CALCALIST · 01.05.26')}
    <div class="frame article-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>10 · הכתבה שפורסמה לפני 4 ימים</span>
        <h2 style="margin-top:14px">"<em>הג'וניורים חוזרים?</em>"<br/>זה לא ספוילר — זה <span class="accent">החדשות.</span></h2>
      </div>
      <div class="grid anim-fade" style="animation-delay:0.3s">
        <div class="browser-mock">
          <div class="browser-bar">
            <div class="browser-dots"><span class="bd red"></span><span class="bd yellow"></span><span class="bd green"></span></div>
            <a class="browser-url" href="https://www.calcalist.co.il/calcalistech/article/bjphxyxc11g" target="_blank" rel="noopener">calcalist.co.il/calcalistech/article/bjphxyxc11g</a>
          </div>
          <div class="article-clip">
            <div class="ctech-brand">
              <span class="ctech-logo">כלכליסט</span>
              <span class="ctech-section">Tech@Work</span>
              <span class="ctech-date">01.05.26 · 07:30</span>
            </div>
            <div class="head1">הג'וניורים חוזרים? לצד פיטורי הענק, בהייטק <em>בונים על צעירי דור ה-AI</em></div>
            <div class="head2">
              מ-<span class="lat">IBM</span>, דרך סיילספורס ועד לסטארט-אפים ישראלים, בחלק מחברות ההייטק עוברים לגייס
              <strong>לפי כישורים, לא לפי ותק וניסיון</strong>, וכך, סטודנטים ואקדמאים טריים עם גישה ל-<span class="lat">AI</span>
              מצליחים לעקוף את המסלול המסורתי — היישר לתפקידי המפתח.
            </div>
            <div class="article-highlights">
              <div class="ah-row">
                <span class="ah-icon">▸</span>
                <span><strong>גיוס לפי כישורים</strong> — לא לפי ותק. מי ששולט ב-<span class="lat">AI</span> מקבל את התפקיד.</span>
              </div>
              <div class="ah-row">
                <span class="ah-icon">▸</span>
                <span>בוגרים טריים <strong>עוקפים את המסלול הקלאסי</strong> — היישר לתפקידי המפתח.</span>
              </div>
              <div class="ah-row">
                <span class="ah-icon">▸</span>
                <span>החברות מחפשות <strong>גישה לכלים החדשים</strong>, לא 5 שנות ניסיון.</span>
              </div>
            </div>
            <div class="author">
              <strong>מעין מנלה</strong> · כתבת קריירה · כלכליסט
            </div>
          </div>
        </div>
        <div class="article-side">
          <div class="article-stat-grid">
            <div class="art-stat">
              <div class="as-num">1,000</div>
              <div class="as-lbl">בוגרים שמגייסת <span class="lat">Salesforce</span> השנה</div>
            </div>
            <div class="art-stat">
              <div class="as-num">↓</div>
              <div class="as-lbl">סניורים מסורתיים נדחקים החוצה</div>
            </div>
            <div class="art-stat highlight">
              <div class="as-num">↑</div>
              <div class="as-lbl"><strong>אתם</strong> נכנסים ישר לתפקידי המפתח</div>
            </div>
          </div>
          <div class="article-pull">
            <div class="pull-text">
              "אנחנו מגייסים כרגע <em>1,000 בוגרי אוניברסיטאות ומתמחים חדשים</em> כדי לרכוב על העקומה האקספוננציאלית של ה-<span class="lat">AI</span>. הבוגרים הטריים האלה הם אלה <em>שבונים אותו</em>."
            </div>
            <div class="pull-source">
              <strong>Marc Benioff</strong> · <span class="lat">CEO</span> Salesforce · <span class="lat">X</span>, 04/2026
            </div>
          </div>
          <div class="article-takeaway">
            <strong>הקליק</strong> — הסיפור הזה הוא <strong>בדיוק עליכם</strong>.
            בוגרים טריים, ללא תפיסות קדומות, עם גישה ל-<span class="lat">AI</span> — <strong>עוקפים</strong> את המסלול הקלאסי, היישר לתפקידי המפתח.
            <strong>אתם בעמדה הכי חזקה שיש.</strong>
          </div>
          <div class="article-link">
            <span class="source-tag">SOURCE</span>
            <a href="https://www.calcalist.co.il/calcalistech/article/bjphxyxc11g" target="_blank" rel="noopener">calcalist.co.il</a> · פורסם 1.5.26
          </div>
        </div>
      </div>
    </div>
  `;
}
