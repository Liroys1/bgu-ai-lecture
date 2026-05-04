import { FAMILY_APP_B64 } from '../assets/images';
import { topbar } from './topbar';

const LEMONADE_CHART_SVG = `
<svg viewBox="0 0 400 282" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%;display:block;">
  <rect width="400" height="282" fill="#FAFAFA" rx="10"/>
  <!-- quadrant backgrounds -->
  <rect x="38" y="10" width="172" height="120" fill="#FFF8D8" rx="5"/>
  <rect x="210" y="10" width="172" height="120" fill="#E6F5EA" rx="5"/>
  <rect x="38" y="130" width="172" height="122" fill="#FFE8E8" rx="5"/>
  <rect x="210" y="130" width="172" height="122" fill="#E6EDF8" rx="5"/>
  <!-- divider lines -->
  <line x1="38" y1="130" x2="382" y2="130" stroke="#DCDCE8" stroke-width="1"/>
  <line x1="210" y1="10" x2="210" y2="252" stroke="#DCDCE8" stroke-width="1"/>
  <!-- outer border -->
  <rect x="38" y="10" width="344" height="242" fill="none" stroke="#DCDCE8" stroke-width="1" rx="5"/>
  <!-- axis labels -->
  <text transform="translate(17,155) rotate(-90)" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="9" font-weight="700" fill="#AAAABC" letter-spacing="0.8">PROGRESS →</text>
  <text x="210" y="272" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="9" font-weight="700" fill="#AAAABC" letter-spacing="0.8">ENGAGEMENT →</text>
  <!-- quadrant labels -->
  <text x="52" y="46" font-family="Inter,Arial,sans-serif" font-size="11" font-weight="800" fill="#C8900A">NEEDS SUPPORT</text>
  <text x="225" y="46" font-family="Inter,Arial,sans-serif" font-size="11" font-weight="800" fill="#22845A">THRIVING</text>
  <text x="52" y="198" font-family="Inter,Arial,sans-serif" font-size="11" font-weight="800" fill="#C03030">AT RISK</text>
  <text x="222" y="198" font-family="Inter,Arial,sans-serif" font-size="11" font-weight="800" fill="#3858A8">NEEDS CHALLENGE</text>
  <!-- avatars — coloured initials circles, scattered like the screenshot -->
  <!-- THRIVING zone -->
  <circle cx="310" cy="70" r="22" fill="#4A90D9" stroke="white" stroke-width="2.5"/>
  <text x="310" y="76" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="13" font-weight="700" fill="white">SR</text>
  <!-- top-center crossing into THRIVING -->
  <circle cx="225" cy="58" r="25" fill="#9B59B6" stroke="white" stroke-width="2.5"/>
  <text x="225" y="65" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="13" font-weight="700" fill="white">NL</text>
  <!-- center, near border — heading up -->
  <circle cx="185" cy="122" r="27" fill="#E67E22" stroke="white" stroke-width="2.5"/>
  <text x="185" y="130" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="13" font-weight="700" fill="white">MB</text>
  <!-- AT RISK zone -->
  <circle cx="100" cy="162" r="25" fill="#27AE60" stroke="white" stroke-width="2.5"/>
  <text x="100" y="169" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="13" font-weight="700" fill="white">YK</text>
  <circle cx="190" cy="178" r="24" fill="#E74C3C" stroke="white" stroke-width="2.5"/>
  <text x="190" y="185" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="13" font-weight="700" fill="white">TA</text>
  <circle cx="245" cy="158" r="22" fill="#1ABC9C" stroke="white" stroke-width="2.5"/>
  <text x="245" y="165" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="12" font-weight="700" fill="white">OS</text>
  <!-- AT RISK lower -->
  <circle cx="155" cy="222" r="23" fill="#E91E9C" stroke="white" stroke-width="2.5"/>
  <text x="155" y="229" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="12" font-weight="700" fill="white">DM</text>
  <!-- NEEDS CHALLENGE -->
  <circle cx="330" cy="195" r="25" fill="#95A5A6" stroke="white" stroke-width="2.5"/>
  <text x="330" y="202" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="13" font-weight="700" fill="white">RI</text>
  <circle cx="370" cy="218" r="20" fill="#2C3E50" stroke="white" stroke-width="2.5"/>
  <text x="370" y="224" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="11" font-weight="700" fill="white">AL</text>
</svg>`;

/* SLIDE 14: MY AI STORY */
export function slide14() {
  const projs = [
    { tag: 'FOR HOME', t: 'אפליקציית ניהול משפחה', d: 'אפליקציה אישית — לוח משמורת, משימות לילדים, רשימות ומטלות בית. <strong>פתרה לי בעיה אמיתית בחיים</strong>, עם דאטה מסודרת והתראות.', tools: ['Base44', 'Lovable'], img: FAMILY_APP_B64, imgType: 'png', svg: null as string|null, live: false },
    { tag: 'FOR WORK', t: 'אפליקציית משימת בית · Lemonade', d: 'בניתי בעצמי, לפני שהתחלתי בלמונייד, אפליקציה שפותרת בעיה אמיתית בארגון. <strong>זה המוצר שהביא אותי לתפקיד.</strong> רץ עכשיו: <span class="lat">amj-lemonade.onrender.com</span>', tools: ['Base44', 'Render'], img: null as string|null, imgType: 'png', svg: LEMONADE_CHART_SVG, live: true },
    { tag: 'FOR TONIGHT', t: 'המצגת הזו · You\'re looking at it', d: 'מה שאתם רואים עכשיו. נבנתה ב-Claude — מהמחקר, דרך העיצוב, עד הקוד. <strong>אפס שורות שכתבתי בעצמי.</strong> כל אנימציה, כל גרף, כל שקף — שיחה.', tools: ['Claude', 'HTML/CSS', 'Three.js'], img: null as string|null, imgType: 'png', svg: null as string|null, live: false }
  ];
  const cards = projs.map(p => `
    <div class="proj-card">
      ${p.svg ? `<div class="proj-image-wrap proj-chart-wrap">
        ${p.live ? '<span class="live-badge">● LIVE</span>' : ''}
        ${p.svg}
      </div>` : p.img ? `<div class="proj-image-wrap">
        ${p.live ? '<span class="live-badge">● LIVE</span>' : ''}
        <img src="data:image/${p.imgType};base64,${p.img}" alt="${p.t}" />
      </div>` : `<div class="proj-image-wrap" style="background:linear-gradient(135deg,#0A0A0F,#1a1a24);display:flex;align-items:center;justify-content:center;">
        <div style="text-align:center;color:#FF6B35;font-family:'Inter',monospace;">
          <div style="font-size:0.65rem;letter-spacing:0.1em;">YOU ARE HERE</div>
          <div style="font-size:1.6rem;font-weight:900;margin-top:4px;">→ THIS ←</div>
        </div>
      </div>`}
      <div class="proj-content">
        <span class="pj-tag">${p.tag}</span>
        <div class="pj-title">${p.t}</div>
        <div class="pj-desc">${p.d}</div>
        <div class="ptools" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:auto;">${p.tools.map(t => `<span class="tool">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
  return `
    ${topbar(15, 'MY AI WORK')}
    <div class="frame ai-story">
      <span class="label anim-fade"><span class="ldot"></span>12 · מה אני עושה <em>בסופי שבוע</em></span>
      <h2 class="anim-up" style="margin:6px 0 0;">
        אני <span class="accent">בונה</span>. ואתם יכולים <em>גם.</em>
      </h2>
      <p class="lead anim-up" style="animation-delay:0.2s; max-width:1200px;">
        לא כתבתי שורת קוד מאז התואר. ובכל זאת בניתי 3 אפליקציות שעובדות עם <span class="lat">Base44</span>, <span class="lat">Claude</span>, וכלי <span class="lat">no-code</span>. <strong>זו היכולת החדשה שאתם חייבים לעצמכם.</strong>
      </p>
      <div class="grid" style="grid-template-columns:repeat(3,1fr); gap:clamp(10px,1.4vw,16px); flex:1; min-height:0; align-items:stretch;">
        ${cards}
      </div>
    </div>
  `;
}
