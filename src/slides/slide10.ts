import { ALTMAN_B64,HASSABIS_B64,MATIAS_B64 } from '../assets/images';
import { topbar } from './topbar';

/* SLIDE 10: 3 QUOTES from global AI leaders — verified June 2025 */
export function slide10() {
  return `
    ${topbar(10, 'VOICES')}
    <div class="frame quotes-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>08 · מה אומרים מי שבונים את זה</span>
        <h2 style="margin-top:14px">שלושה אנשים. <span class="accent">אותו מסר.</span></h2>
        <p class="lead">
          המנהיגים שמובילים את ה-<span class="lat">AI</span> בעולם לא חושבים שמקצועות נעלמים —
          הם חושבים שה-<span class="accent">ceiling</span> של מה שאנשים יכולים להשיג <strong>עולה דרמטית.</strong>
        </p>
      </div>
      <div class="quotes-grid anim-fade" style="animation-delay:0.3s">

        <div class="quote-card">
          <div class="quote-header">
            <img class="quote-photo" src="data:image/jpeg;base64,${ALTMAN_B64}" alt="Sam Altman" />
            <div class="quote-person">
              <div class="qauthor">Sam Altman</div>
              <div class="qrole"><span class="lat">CEO</span>, OpenAI</div>
            </div>
          </div>
          <div class="qtext">
            "היכולת של <span class="accent">אדם אחד להשיג ב-2030 הרבה יותר</span> ממה שיכול היה ב-2020 תהיה <strong>שינוי מרשים</strong> — ורבים ידעו להפיק ממנו תועלת."
            <em>אותו אדם, אותן שעות — <strong>output של צוות שלם.</strong> לא כי הוא חכם יותר, אלא כי ה-AI מגדיל את מה שאפשר לעשות לבד.</em>
          </div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#fff"><img src="https://www.google.com/s2/favicons?domain=openai.com&sz=128" alt="OpenAI" /></span>
            <span class="qco-name">OpenAI</span>
            <span class="qco-desc">יוצרי ChatGPT · 800M משתמשים שבועיים</span>
          </div>
          <div class="qsource">
            <a href="https://blog.samaltman.com/the-gentle-singularity" target="_blank">blog.samaltman.com · The Gentle Singularity</a> · יוני 2025
          </div>
        </div>

        <div class="quote-card">
          <div class="quote-header">
            <img class="quote-photo" src="data:image/jpeg;base64,${MATIAS_B64}" alt="Yossi Matias" />
            <div class="quote-person">
              <div class="qauthor">Yossi Matias · יוסי מטיאס</div>
              <div class="qrole"><span class="lat">VP</span> Engineering &amp; Research, Google · בוגר ת"א</div>
            </div>
          </div>
          <div class="qtext">
            "אני חושב על זה כ-<span class="accent">AI שהוא מגבר של גאוניות אנושית</span> — שמעצים מדענים, עובדי בריאות, מורים, אנשי עסקים."
            <em><strong>מגבר — לא תחליף.</strong> כמו מיקרוסקופ שהגדיל את יכולת המדענים לראות — <strong>לא ביטל אותם.</strong></em>
          </div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#fff"><img src="https://www.google.com/s2/favicons?domain=google.com&sz=128" alt="Google" /></span>
            <span class="qco-name">Google Israel</span>
            <span class="qco-desc">מרכז המחקר הגדול של גוגל מחוץ לארה"ב · ת"א</span>
          </div>
          <div class="qsource">
            <a href="https://www.bigtechnology.com/p/google-research-head-yossi-matias" target="_blank">bigtechnology.com · Google Research Head</a> · אוקטובר 2025
          </div>
        </div>

        <div class="quote-card">
          <div class="quote-header">
            <img class="quote-photo" src="data:image/jpeg;base64,${HASSABIS_B64}" alt="Demis Hassabis" />
            <div class="quote-person">
              <div class="qauthor">Demis Hassabis</div>
              <div class="qrole">נובל לכימיה 2024 · <span class="lat">CEO</span>, Google DeepMind</div>
            </div>
          </div>
          <div class="qtext">
            "אני מאמין ש-AI יהיה <span class="accent">הטכנולוגיה המועילה ביותר שנוצרה אי פעם</span> — אבל רק אם <strong>נבנה ונשתמש בה בדרך הנכונה.</strong>"
            <em><span class="accent">AlphaFold</span> — פתר שאלה שהיתה פתוחה <strong>50 שנה.</strong> פרס נובל לכימיה 2024. לא ביטל חוקרים — <strong>פתח עידן שלם של גילויים שלא היו אפשריים בלעדיו.</strong></em>
          </div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#fff"><img src="https://www.google.com/s2/favicons?domain=deepmind.google&sz=128" alt="Google DeepMind" /></span>
            <span class="qco-name">Google DeepMind</span>
            <span class="qco-desc">יוצרי AlphaFold · נובל לכימיה 2024</span>
          </div>
          <div class="qsource">
            <a href="https://www.nobelprize.org/prizes/chemistry/2024/hassabis/interview/" target="_blank">nobelprize.org · ראיון זוכה נובל</a> · אוקטובר 2024
          </div>
        </div>

      </div>
    </div>
  `;
}
