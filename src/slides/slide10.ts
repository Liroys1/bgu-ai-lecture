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
          המנהיגים שמובילים את ה-<span class="lat">AI</span> בעולם לא חושבים שהמקצועות נעלמים. הם חושבים 
          ש<strong>הצורה משתנה</strong>. שזה מגביר אנושיות. שצריך עוד אנשים, לא פחות.
        </p>
      </div>
      <div class="quotes-grid anim-fade" style="animation-delay:0.3s">
        <div class="quote-card">
          <img class="quote-photo" src="data:image/jpeg;base64,${ALTMAN_B64}" alt="Sam Altman" />
          <div class="qmark">"</div>
          <div class="qtext">
            <em>"The shape of jobs will change."</em><br/>
            צורת העבודה תשתנה — אנשים יוכלו להגיע ל<em>גבהים גדולים יותר</em> בעזרת הכלים האלה.
          </div>
          <div class="qauthor">Sam Altman</div>
          <div class="qrole"><span class="lat">CEO</span>, OpenAI · נאום ב-Harvard, 2024</div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#10A37F"><img src="https://cdn.simpleicons.org/openai/ffffff" alt="OpenAI" /></span>
            <span class="qco-name">OpenAI</span>
            <span class="qco-desc">יוצרי ChatGPT · 800M משתמשים שבועיים</span>
          </div>
          <div class="qsource">
            <a href="https://www.hbs.edu/bigs/sam-altman-harvard-business-school" target="_blank">hbs.edu/bigs/sam-altman</a>
          </div>
        </div>
        <div class="quote-card">
          <img class="quote-photo" src="data:image/jpeg;base64,${HASSABIS_B64}" alt="Demis Hassabis" />
          <div class="qmark">"</div>
          <div class="qtext">
            <em>"AI as an amplifier of human ingenuity."</em><br/>
            ה-<span class="lat">AI</span> הוא <em>מגבר של גאוניות אנושית</em>. נצטרך הרבה יותר חוקרים בכל התחומים, לא פחות.
          </div>
          <div class="qauthor">Demis Hassabis</div>
          <div class="qrole">Nobel Chemistry 2024 · <span class="lat">CEO</span>, Google DeepMind · ראיון ב-TIME 2025</div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#4285F4"><img src="https://cdn.simpleicons.org/googledeepmind/ffffff" alt="Google DeepMind" /></span>
            <span class="qco-name">Google DeepMind</span>
            <span class="qco-desc">המעבדה שיצרה את AlphaFold ו-Gemini</span>
          </div>
          <div class="qsource">
            <a href="https://time.com/7280740/demis-hassabis-interview/" target="_blank">time.com/demis-hassabis</a>
          </div>
        </div>
        <div class="quote-card">
          <img class="quote-photo" src="data:image/jpeg;base64,${MATIAS_B64}" alt="Yossi Matias" />
          <div class="qmark">"</div>
          <div class="qtext">
            <em>"We're going to need many more researchers in all disciplines."</em><br/>
            עם <span class="lat">AlphaFold</span>, <em>יש לנו יותר חוקרי חלבונים, לא פחות.</em> הם עכשיו עובדים על שאלות גדולות יותר.
          </div>
          <div class="qauthor">Yossi Matias · יוסי מטיאס</div>
          <div class="qrole"><span class="lat">VP</span> Engineering & Research, Google · בוגר ת״א</div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#EA4335"><img src="https://cdn.simpleicons.org/google/ffffff" alt="Google" /></span>
            <span class="qco-name">Google Israel</span>
            <span class="qco-desc">מרכז המחקר הגדול של גוגל מחוץ לארה״ב · ת״א</span>
          </div>
          <div class="qsource">
            <a href="https://www.bigtechnology.com/p/google-research-head-yossi-matias" target="_blank">bigtechnology.com/yossi-matias</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

