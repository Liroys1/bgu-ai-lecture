import { topbar } from './topbar';

/* SLIDE 13: YOUR POSITION — YOU above AI, the decision layer */
export function slide13() {
  const dots = [0, 0.5, 1.0, 1.5, 2.0].map((delay, i) =>
    `<span class="ps-dot" style="left:${10 + i * 18}%;animation-delay:${delay}s"></span>`
  ).join('');

  return `
    ${topbar(14, 'YOUR POSITION')}
    <div class="frame position-slide">

      <div class="ps-top anim-up">
        <span class="label"><span class="ldot"></span>11 · המיקום שלכם בעולם החדש</span>
        <h2 style="margin-top:8px">ה-<span class="lat">AI</span> מבצע. <span class="accent">אתם מחליטים.</span></h2>
        <p class="ps-sub">
          ה-<span class="lat">AI</span> צודק טכנית — תמיד. אבל הנתונים לא מספרים הכל.
          <strong>ההקשר, הערכים, המגבלות — זה אתם. ואף מודל לא ישתפר בזה.</strong>
        </p>
      </div>

      <div class="ps-body anim-fade" style="animation-delay:0.3s">

        <div class="ps-stack-wrap">
          <div class="ps-layer ps-layer-you">
            <div class="ps-layer-left">
              <div class="ps-layer-id">YOU</div>
              <div class="ps-layer-name">שכבת ההחלטה</div>
            </div>
            <div class="ps-layer-tags">
              <span>שיפוט עסקי</span>
              <span>הקשר</span>
              <span>ערכים</span>
              <span>אסטרטגיה</span>
              <span>אחריות</span>
            </div>
          </div>

          <div class="ps-connector">
            ${dots}
            <div class="ps-connector-text">↑ &nbsp;נתונים · תובנות · המלצות</div>
          </div>

          <div class="ps-layer ps-layer-ai">
            <div class="ps-layer-left">
              <div class="ps-layer-id ai">AI</div>
              <div class="ps-layer-name">שכבת הביצוע</div>
            </div>
            <div class="ps-layer-tags ai-tags">
              <span>דאטה</span>
              <span>ניתוח</span>
              <span>אוטומציה</span>
              <span>חיזוי</span>
              <span>ביצוע</span>
            </div>
          </div>
        </div>

        <div class="three-host" id="threeHost">
          <div class="three-tag">YOU · HUMANS · AI AGENTS</div>
          <div class="three-legend">
            <div class="item"><span class="swatch" style="background:#FF6B35"></span><span>YOU — top</span></div>
            <div class="item"><span class="swatch" style="background:#FFB627"></span><span>HUMANS</span></div>
            <div class="item"><span class="swatch" style="background:#00D9C0"></span><span>AI AGENTS</span></div>
          </div>
        </div>

      </div>

      <div class="ps-closing anim-up" style="animation-delay:0.6s">
        <span class="lat">AI</span> הוא <em>המנוף.</em>
        <strong>אתם מחליטים <span class="accent">איפה לשים אותו.</span></strong>
      </div>

    </div>
  `;
}
