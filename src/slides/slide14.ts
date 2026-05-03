import { FAMILY_APP_B64,LEMONADE_APP_B64 } from '../assets/images';
import { topbar } from './topbar';

/* SLIDE 14: MY AI STORY */
export function slide14() {
  const projs = [
    { tag: 'FOR HOME', t: 'אפליקציית ניהול משפחה', d: 'אפליקציה אישית — לוח משמורת, משימות לילדים, רשימות ומטלות בית. <strong>פתרה לי בעיה אמיתית בחיים</strong>, עם דאטה מסודרת והתראות.', tools: ['Base44', 'Lovable'], img: FAMILY_APP_B64, imgType: 'png', live: false },
    { tag: 'FOR WORK', t: 'אפליקציית משימת בית · Lemonade', d: 'בניתי בעצמי, לפני שהתחלתי בלמונייד, אפליקציה שפותרת בעיה אמיתית בארגון. <strong>זה המוצר שהביא אותי לתפקיד.</strong> רץ עכשיו: <span class="lat">amj-lemonade.onrender.com</span>', tools: ['Base44', 'Render'], img: LEMONADE_APP_B64, imgType: 'png', live: true },
    { tag: 'FOR TONIGHT', t: 'המצגת הזו · You\'re looking at it', d: 'מה שאתם רואים עכשיו. נבנתה ב-Claude — מהמחקר, דרך העיצוב, עד הקוד. <strong>אפס שורות שכתבתי בעצמי.</strong> כל אנימציה, כל גרף, כל שקף — שיחה.', tools: ['Claude', 'HTML/CSS', 'Three.js'], img: null, live: false }
  ];
  const cards = projs.map(p => `
    <div class="proj-card">
      ${p.img ? `<div class="proj-image-wrap">
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
