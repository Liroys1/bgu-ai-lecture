import { topbar } from './topbar';

/* SLIDE 13: YOUR POSITION — decision layer above AI, clear interface */
export function slide13() {
  const dots = [0, 0.6, 1.2, 1.8, 2.4].map((delay, i) =>
    `<span class="ps-dot" style="left:${10 + i * 18}%;animation-delay:${delay}s"></span>`
  ).join('');

  return `
    ${topbar(14, 'YOUR POSITION')}
    <div class="frame position-slide">

      <div class="ps-top anim-up">
        <span class="label"><span class="ldot"></span>11 · המיקום שלכם בעולם החדש</span>
        <h2 style="margin-top:8px">ה-<span class="lat">AI</span> מבצע. <span class="accent">אתם שופטים.</span></h2>
        <p class="ps-sub">
          ה-<span class="lat">AI</span> מציע — אתם בודקים. הוא <strong>לא תמיד צודק</strong>, ולעיתים פספס.
          <strong>שיפוט, הקשר, ערכים — זה אתם.</strong>
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
              <span>שיפוט</span>
              <span>הקשר</span>
              <span>ערכים</span>
              <span>אסטרטגיה</span>
              <span>אחריות</span>
            </div>
          </div>

          <div class="ps-connector">
            ${dots}
            <div class="ps-connector-text">↑ &nbsp;ניתוח · המלצות · תוצאות</div>
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

        <div class="ps-interface">
          <div class="psi-title">הממשק ביניכם</div>

          <div class="psi-row you-to-ai">
            <div class="psi-dir-label">YOU → AI</div>
            <div class="psi-items">
              <div class="psi-item"><span class="psi-icon">🎯</span>מטרות והגדרות</div>
              <div class="psi-item"><span class="psi-icon">📋</span>הקשר עסקי</div>
              <div class="psi-item"><span class="psi-icon">⚖️</span>מגבלות וערכים</div>
            </div>
          </div>

          <div class="psi-divider">
            <div class="psi-flow-arrow down">↓</div>
            <div class="psi-flow-arrow up">↑</div>
          </div>

          <div class="psi-row ai-to-you">
            <div class="psi-dir-label">AI → YOU</div>
            <div class="psi-items">
              <div class="psi-item"><span class="psi-icon">📊</span>ניתוח ודאטה</div>
              <div class="psi-item"><span class="psi-icon">💡</span>המלצות</div>
              <div class="psi-item"><span class="psi-icon">⚡</span>ביצוע משימות</div>
            </div>
          </div>

          <div class="psi-judgment">
            <span class="psi-j-label">JUDGMENT</span>
            אתם מחליטים מה לקבל, מה לדחות, ומה הלאה
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
