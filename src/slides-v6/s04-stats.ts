import { tb } from '../slides-v2/helpers';

export function v6s10() {
  return `
    ${tb(10, 'THE SHIFT')}
    <div class="v2-frame v2-stat-frame">
      <div class="v2-eyebrow">ChatGPT · 2022</div>
      <div class="v2-stat-row" style="direction:ltr;justify-content:flex-start">
        <span class="v2-stat-num">0</span>
        <span class="v2-stat-unit"> → </span>
        <span class="v2-stat-num" style="color:#FF6B35">100M</span>
      </div>
      <p class="v2-sub">משתמשים. ב-60 יום.<br/>אף מוצר בהיסטוריה לא צמח כך.</p>
    </div>`;
}

const WEF_LINE_SVG = `
<svg viewBox="0 0 320 165" xmlns="http://www.w3.org/2000/svg" class="v6-chart-svg">
  <line x1="40" y1="10" x2="40" y2="135" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <line x1="40" y1="135" x2="305" y2="135" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <text x="35" y="32" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="9" font-family="monospace">60%</text>
  <line x1="40" y1="28" x2="305" y2="28" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="35" y="78" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="9" font-family="monospace">40%</text>
  <line x1="40" y1="74" x2="305" y2="74" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="35" y="118" text-anchor="end" fill="rgba(255,255,255,0.35)" font-size="9" font-family="monospace">20%</text>
  <line x1="40" y1="114" x2="305" y2="114" stroke="rgba(255,255,255,0.06)" stroke-width="1" stroke-dasharray="4,4"/>
  <polygon points="65,24 185,64 305,76 305,135 65,135" fill="rgba(255,107,53,0.1)"/>
  <polyline points="65,24 185,64 305,76" fill="none" stroke="#FF6B35" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="65" cy="24" r="5" fill="#FF6B35"/>
  <circle cx="185" cy="64" r="5" fill="#FF6B35"/>
  <circle cx="305" cy="76" r="5" fill="#FF6B35"/>
  <text x="65" y="16" text-anchor="middle" fill="#FF6B35" font-size="11" font-weight="700" font-family="monospace">57%</text>
  <text x="185" y="56" text-anchor="middle" fill="#FF6B35" font-size="11" font-weight="700" font-family="monospace">44%</text>
  <text x="305" y="68" text-anchor="middle" fill="#FF6B35" font-size="11" font-weight="700" font-family="monospace">39%</text>
  <text x="65" y="150" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9" font-family="monospace">2020</text>
  <text x="185" y="150" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9" font-family="monospace">2023</text>
  <text x="305" y="150" text-anchor="middle" fill="rgba(255,255,255,0.4)" font-size="9" font-family="monospace">2025</text>
  <text x="172" y="163" text-anchor="middle" fill="rgba(255,255,255,0.25)" font-size="7.5" font-family="monospace">% מיומנויות שיעברו טרנספורמציה — WEF Future of Jobs</text>
</svg>`;

export function v6s31() {
  return `
    ${tb(17, 'WEF 2025')}
    <div class="v2-frame v6-stat-chart-frame">
      <div class="v6-sc-left">
        ${WEF_LINE_SVG}
      </div>
      <div class="v6-sc-right">
        <div class="v2-eyebrow">הנתון</div>
        <div class="v6-sc-big">39%</div>
        <p class="v6-sc-body">מהמיומנויות שלכם<br/>ישתנו עד 2030.</p>
        <div class="v6-sc-detail">
          <p>ירד מ-57% ב-2020 ל-39% ב-2025. <strong>לא כי החשיבני נעצר</strong> — אלא כי הנתון מודד רק את מי שעדיין בעבודה.</p>
          <div class="v6-sc-box">
            <span class="v6-sc-pill v6-pill-up">מגמה</span>
            <span>AI literacy, חשיבה ביקרתית, יצירתיות, הסתגלות</span>
          </div>
          <div class="v6-sc-box">
            <span class="v6-sc-pill v6-pill-dn">נעלמות</span>
            <span>92 מיליון משרות עד 2030 — לא "מיומנויות שמשתנות", אלה תפקידים שנסגרים</span>
          </div>
        </div>
        <div class="v2-source">WEF Future of Jobs Report 2025 · ינואר 2025</div>
      </div>
    </div>`;
}
