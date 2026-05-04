import { topbar } from './topbar';

/* SLIDE 6: THE 39% CHART */
export function slide6() {
  return `
    ${topbar(6, 'DATA · 1/2')}
    <div class="frame chart-slide">
      <div class="grid">
        <div class="left">
          <span class="label anim-fade"><span class="ldot"></span>04 · הנתון</span>
          <h2 class="anim-up">
            <span class="accent">39%</span> מהמיומנויות שלכם<br/>
            ישתנו עד <span class="lat">2030</span>.
          </h2>
          <p class="lead anim-up" style="animation-delay:0.2s">
            זה לא ניחוש. זה ממצא של פורום הכלכלה העולמי, מסקר של <strong>1,043 מעסיקים גלובליים</strong> 
            המעסיקים יחד <strong>14 מיליון עובדים</strong>.
          </p>
          <p class="anim-up" style="animation-delay:0.3s; margin-top:10px; font-size:clamp(0.85rem, 1.05vw, 0.95rem); color:#A0A0AE; line-height:1.5">
            הנתון ירד מ-57% ב-2020 ל-44% ב-2023 ל-39% ב-2025. 
            <strong style="color:#FFB627">לא כי השינוי נעצר — אלא כי הנתון מודד רק את מי שעדיין בעבודה.</strong>
          </p>
          <div class="anim-up chart-insights" style="animation-delay:0.4s;">
            <div class="ci-headline">למה הנתון יורד? לא כי השינוי קטן יותר.</div>
            <div class="ci-row">
              <div class="ci-tag tag-grow">↑ עולות</div>
              <div class="ci-text"><span class="lat">AI literacy</span>, ניתוח דאטה, חשיבה ביקורתית, יצירתיות, הסתגלות</div>
            </div>
            <div class="ci-row">
              <div class="ci-tag tag-fall">↓ נעלמות</div>
              <div class="ci-text"><strong>92 מיליון משרות נסגרות עד 2030</strong> (WEF). אלה לא "מיומנויות שמשתנות" — אלה תפקידים שנמחקים לגמרי.</div>
            </div>
            <div class="ci-row">
              <div class="ci-tag tag-watch">⚠ הפואנטה</div>
              <div class="ci-text">הסקר שואל מעסיקים על תפקידים <strong>שעדיין קיימים</strong>. מי שמשרתו בוטלה — לא נספר. הירידה ל-39% זה לא סימן לרגיעה, זה סימן ש<em>השוק כבר התחלק לשני מחנות</em>: מי שלמד AI נשאר, מי שלא — בחוץ.</div>
            </div>
          </div>
        </div>
        <div class="data-card anim-scale" style="animation-delay:0.4s">
          <div>
            <div class="chart-title">שינוי במיומנויות נדרשות לעובדים</div>
            <div class="chart-subtitle">% מהמיומנויות שיעברו טרנספורמציה — לפי <span class="lat">WEF Future of Jobs</span></div>
          </div>
          <svg viewBox="0 0 480 240" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.4"/>
                <stop offset="100%" stop-color="#FF6B35" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <line x1="50" y1="20" x2="50" y2="200" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <line x1="50" y1="200" x2="450" y2="200" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <text x="40" y="40" fill="#6B6B7B" font-size="10" text-anchor="end" font-family="Inter">60%</text>
            <text x="40" y="100" fill="#6B6B7B" font-size="10" text-anchor="end" font-family="Inter">40%</text>
            <text x="40" y="160" fill="#6B6B7B" font-size="10" text-anchor="end" font-family="Inter">20%</text>
            <text x="40" y="200" fill="#6B6B7B" font-size="10" text-anchor="end" font-family="Inter">0%</text>
            <text x="100" y="220" fill="#A0A0AE" font-size="11" text-anchor="middle" font-family="Inter">2020</text>
            <text x="240" y="220" fill="#A0A0AE" font-size="11" text-anchor="middle" font-family="Inter">2023</text>
            <text x="380" y="220" fill="#A0A0AE" font-size="11" text-anchor="middle" font-family="Inter">2025</text>
            <path d="M 100 80 L 240 119 L 380 134 L 380 200 L 100 200 Z" fill="url(#lineGrad)"/>
            <path d="M 100 80 L 240 119 L 380 134" fill="none" stroke="#FF6B35" stroke-width="3" stroke-linecap="round"/>
            <circle cx="100" cy="80" r="6" fill="#FF6B35"/>
            <circle cx="240" cy="119" r="6" fill="#FF6B35"/>
            <circle cx="380" cy="134" r="8" fill="#FFB627" stroke="#FF6B35" stroke-width="2"/>
            <text x="100" y="68" fill="#FFFFFF" font-size="13" text-anchor="middle" font-family="Inter" font-weight="700">57%</text>
            <text x="240" y="107" fill="#FFFFFF" font-size="13" text-anchor="middle" font-family="Inter" font-weight="700">44%</text>
            <text x="380" y="120" fill="#FFB627" font-size="14" text-anchor="middle" font-family="Inter" font-weight="800">39%</text>
          </svg>
          <div class="legend">
            <div class="item">
              <span class="swatch" style="background:#FF6B35"></span>
              <span>% מיומנויות שיעברו טרנספורמציה</span>
            </div>
          </div>
          <div class="source">
            <span class="source-tag">WEF 2025</span>
            <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report 2025</a>
            · עמוד 5 · ינואר 2025
          </div>
        </div>
      </div>
    </div>
  `;
}

