import { topbar } from './topbar';

/* SLIDE 16: 90-DAY ROADMAP */
export function slide16() {
  return `
    ${topbar(17, 'ROADMAP')}
    <div class="frame roadmap">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>14 · מה לעשות מחר בבוקר</span>
        <h2 style="margin-top:14px">תוכנית <span class="accent">90 יום.</span></h2>
        <p class="lead">
          לא צריך לחכות לסיום התואר. תתחילו <strong>השבוע</strong>. אלה שלושים-שלושים-שלושים יום של בנייה הדרגתית.
        </p>
      </div>
      <div class="roadmap-flow anim-fade" style="animation-delay:0.3s">
        <div class="phase-card">
          <div class="phase-head">
            <div class="phase-num">30</div>
            <span class="phase-tag">DAYS · ABSORB</span>
          </div>
          <ol>
            <li><span class="num">01</span><div>תרשמו ל-<span class="lat">Claude Pro / ChatGPT Plus</span>. 20$ לחודש. השקעה הכי טובה שתעשו.</div></li>
            <li><span class="num">02</span><div>תעבדו עם <span class="lat">AI</span> כל יום. שיעורי בית, סיכומים, ניתוחים. <em>תיקחו את היד</em>.</div></li>
            <li><span class="num">03</span><div>תעקבו אחרי 5 חשבונות <span class="lat">AI</span> ב-<span class="lat">LinkedIn / X</span>. התמונה תתבהר.</div></li>
          </ol>
        </div>
        <div class="arrow">→</div>
        <div class="phase-card">
          <div class="phase-head">
            <div class="phase-num">60</div>
            <span class="phase-tag">DAYS · BUILD</span>
          </div>
          <ol>
            <li><span class="num">04</span><div>תבנו <em>פרויקט אישי אחד</em> מסיים. אפליקציה, בוט, אוטומציה — כל דבר.</div></li>
            <li><span class="num">05</span><div>תלמדו <span class="lat">SQL</span> בסיסי. <span class="lat">Khan Academy</span> ב-10 שעות.</div></li>
            <li><span class="num">06</span><div>תרשמו פוסט אחד ב-<span class="lat">LinkedIn</span> על מה שבניתם. <em>פומבי או שלא היה</em>.</div></li>
          </ol>
        </div>
        <div class="arrow">→</div>
        <div class="phase-card last">
          <div class="phase-head">
            <div class="phase-num">90</div>
            <span class="phase-tag">DAYS · LAND</span>
          </div>
          <ol>
            <li><span class="num">07</span><div>תגישו ל-<em>3 משרות סטאז'</em> או חצי-משרה. עם תיק עבודות אמיתי.</div></li>
            <li><span class="num">08</span><div>תהיו ב-<em>אירוע אחד</em> פיזי של <span class="lat">AI / IE</span>. אנשים מגייסים לאנשים.</div></li>
            <li><span class="num">09</span><div>תקבעו את היעד הבא. <em>איפה אתם רוצים להיות בעוד שנה?</em></div></li>
          </ol>
        </div>
      </div>
    </div>
  `;
}

