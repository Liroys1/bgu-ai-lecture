import { ALTMAN_B64,HASSABIS_B64,MATIAS_B64 } from '../assets/images';
import { topbar } from './topbar';

/* SLIDE 10: 3 QUOTES from global AI leaders */
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
            <span class="lat qen">"The ability for one person to get much more done in 2030 than they could in 2020 will be a striking change — and one many people will figure out how to benefit from."</span>
            <br/>
            היכולת של <span class="accent">אדם אחד לעשות הרבה יותר ב-2030</span> מאשר ב-2020 תהיה שינוי מרשים.
            <em>מי שרותם AI נכון — עובד <span class="accent">ב-10x</span> יחסית למי שלא.</em>
          </div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#10A37F"><img src="https://cdn.simpleicons.org/openai/ffffff" alt="OpenAI" /></span>
            <span class="qco-name">OpenAI</span>
            <span class="qco-desc">יוצרי ChatGPT · 800M משתמשים שבועיים</span>
          </div>
          <div class="qsource">
            <a href="https://blog.samaltman.com/the-gentle-singularity" target="_blank">blog.samaltman.com · The Gentle Singularity</a> · מאי 2024
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
            <span class="lat qen">"AI is an amplifier of human ingenuity — it really empowers the scientists, the healthcare workers, the teachers, the business people."</span>
            <br/>
            <span class="accent">AI הוא מגבר של גאוניות אנושית.</span>
            <em>"נצטרך פחות חוקרים רק אם ענינו על כל השאלות הגדולות — ואני לא חושב שמישהו מאמין בכך."</em>
            לא מהנדס שיוחלף — אלא <span class="accent">מהנדס שרותם AI וישאל שאלות שלא יכול היה לשאול קודם.</span>
          </div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#EA4335"><img src="https://cdn.simpleicons.org/google/ffffff" alt="Google" /></span>
            <span class="qco-name">Google Israel</span>
            <span class="qco-desc">מרכז המחקר הגדול של גוגל מחוץ לארה"ב · ת"א</span>
          </div>
          <div class="qsource">
            <a href="https://www.bigtechnology.com/p/google-research-head-yossi-matias" target="_blank">bigtechnology.com · Google Research Head</a> · 2024
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
            <span class="lat qen">"I believe AI is going to be the most beneficial technology ever created — but only if we apply it in the right way."</span>
            <br/>
            <span class="accent">AlphaFold</span> — ה-AI שחזה מבנה תלת-ממדי של חלבונים (<span class="accent">נובל לכימיה 2024</span>) —
            לא ביטל חוקרים. <em>פתח עידן שלם של גילויים שלא היו אפשריים בלעדיו.</em>
            בכל תחום שתיכנסו אליו — AI יהיה <span class="accent">הכלי שמכפיל את מה שתוכלו לעשות.</span>
          </div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#4285F4"><img src="https://cdn.simpleicons.org/googlegemini/ffffff" alt="Google DeepMind" /></span>
            <span class="qco-name">Google DeepMind</span>
            <span class="qco-desc">יוצרי AlphaFold ו-Gemini · נובל לכימיה 2024</span>
          </div>
          <div class="qsource">
            <a href="https://www.nobelprize.org/prizes/chemistry/2024/hassabis/interview/" target="_blank">nobelprize.org · ראיון לפרס נובל</a> · אוקטובר 2024
          </div>
        </div>

      </div>
    </div>
  `;
}
