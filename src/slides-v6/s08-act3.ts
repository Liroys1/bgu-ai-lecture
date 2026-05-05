import { tb } from '../slides-v2/helpers';

/* DIVISION — V1 style two-column detailed list */
export function v6s22() {
  return `
    ${tb(22, 'DIVISION')}
    <div class="v2-frame v6-div-frame">
      <div class="v2-eyebrow">חלוקת העבודה החדשה</div>
      <h2 class="v6-div-title">מה <span class="v2-accent">הם</span> עושים. מה <span class="v2-accent">אתם</span> עושים.</h2>
      <div class="v6-div-cols">
        <div class="v6-div-col v6-div-ai">
          <div class="v6-div-head">
            <span class="v6-div-label">ה-AI עושה</span>
            <span class="v6-badge v6-badge-teal">AUTOMATION</span>
          </div>
          <div class="v6-div-list">
            <div class="v6-div-item"><span class="v6-di-num">01</span><div><div class="v6-di-t">איסוף וסינון דאטה</div><div class="v6-di-d">מעבר על מיליוני שורות, ניקוי, נורמליזציה</div></div></div>
            <div class="v6-div-item"><span class="v6-di-num">02</span><div><div class="v6-di-t">יצירת דשבורדים</div><div class="v6-di-d">גרפים, קווי מגמה, התראות אוטומטיות</div></div></div>
            <div class="v6-div-item"><span class="v6-di-num">03</span><div><div class="v6-di-t">אוטומציה של תהליכים</div><div class="v6-di-d">workflows, integrations, scripts</div></div></div>
            <div class="v6-div-item"><span class="v6-di-num">04</span><div><div class="v6-di-t">ניתוח טקסט וסנטימנט</div><div class="v6-di-d">משובים, תלונות, סקרים בקנה מידה גדול</div></div></div>
          </div>
        </div>
        <div class="v6-div-col v6-div-human">
          <div class="v6-div-head">
            <span class="v6-div-label">אתם עושים</span>
            <div style="display:flex;gap:0.4rem;flex-wrap:wrap"><span class="v6-badge v6-badge-orange">JUDGMENT</span><span class="v6-badge v6-badge-dim">ORCHESTRATION</span></div>
          </div>
          <div class="v6-div-list">
            <div class="v6-div-item"><span class="v6-di-num">01</span><div><div class="v6-di-t">הגדרת השאלה הנכונה</div><div class="v6-di-d">מה באמת חשוב למדוד? למי? מתי?</div></div></div>
            <div class="v6-div-item"><span class="v6-di-num">02</span><div><div class="v6-di-t">הבנת ההקשר העסקי</div><div class="v6-di-d">איך זה מתחבר לאסטרטגיה? למי הלקוחות?</div></div></div>
            <div class="v6-div-item"><span class="v6-di-num">03</span><div><div class="v6-di-t">גישור בין צוותים</div><div class="v6-di-d">הנדסה, מוצר, עסקי, רגולציה — אנשים</div></div></div>
            <div class="v6-div-item"><span class="v6-di-num">04</span><div><div class="v6-di-t">קבלת החלטות תחת אי-ודאות</div><div class="v6-di-d">כשהדאטה לא מספיקה — מה עושים?</div></div></div>
          </div>
        </div>
      </div>
    </div>`;
}

/* YOUR POSITION — V1 network SVG + transitions table */
function buildNetSVG() {
  const YOU = { x: 435, y: 62 };
  const humans = [
    { x: 100, y: 210 }, { x: 218, y: 210 }, { x: 342, y: 210 },
    { x: 528, y: 210 }, { x: 652, y: 210 }, { x: 770, y: 210 },
  ];
  const ais = [
    { x: 45, y: 345 }, { x: 135, y: 345 }, { x: 228, y: 345 },
    { x: 322, y: 345 }, { x: 415, y: 345 }, { x: 508, y: 345 },
    { x: 600, y: 345 }, { x: 694, y: 345 }, { x: 786, y: 345 },
  ];
  const haMap: [number, number][] = [[0,0],[0,1],[1,1],[1,2],[2,2],[2,3],[3,4],[3,5],[4,5],[4,6],[5,7],[5,8]];

  const youLines = humans.map((h, i) =>
    `<path id="v6yh${i}" d="M${YOU.x},${YOU.y} L${h.x},${h.y}" class="v6-net-line v6-you-line"/>`).join('');
  const haLines = haMap.map(([hi, ai], i) =>
    `<path id="v6ha${i}" d="M${humans[hi].x},${humans[hi].y} L${ais[ai].x},${ais[ai].y}" class="v6-net-line v6-ai-line"/>`).join('');

  const youParts = humans.map((_, i) => {
    const d = (i * 0.38).toFixed(2);
    return `<circle r="3.5" fill="#FF6B35" opacity="0.9"><animateMotion dur="1.6s" repeatCount="indefinite" begin="${d}s"><mpath href="#v6yh${i}"/></animateMotion></circle>
    <circle r="2.5" fill="#FFB627" opacity="0.6"><animateMotion dur="1.6s" repeatCount="indefinite" begin="${(+d+0.8).toFixed(2)}s"><mpath href="#v6yh${i}"/></animateMotion></circle>`;
  }).join('');
  const aiParts = haMap.map(([,,], i) => {
    const d = (i * 0.22).toFixed(2);
    return `<circle r="2.8" fill="#00D9C0" opacity="0.8"><animateMotion dur="1.4s" repeatCount="indefinite" begin="${d}s"><mpath href="#v6ha${i}"/></animateMotion></circle>`;
  }).join('');

  const hNodes = humans.map((h, i) =>
    `<g style="animation-delay:${i*0.1}s">
      <circle cx="${h.x}" cy="${h.y}" r="24" fill="none" stroke="rgba(255,182,39,0.3)" stroke-width="1.5"/>
      <circle cx="${h.x}" cy="${h.y}" r="17" fill="#FFB627" opacity="0.9"/>
      <text x="${h.x}" y="${h.y+6}" text-anchor="middle" font-size="14">👤</text>
    </g>`).join('');
  const aNodes = ais.map((a, i) =>
    `<g style="animation-delay:${i*0.08}s">
      <circle cx="${a.x}" cy="${a.y}" r="22" fill="none" stroke="rgba(0,217,192,0.3)" stroke-width="1.5"/>
      <circle cx="${a.x}" cy="${a.y}" r="16" fill="#00D9C0" opacity="0.88"/>
      <text x="${a.x}" y="${a.y+6}" text-anchor="middle" font-size="11">🤖</text>
    </g>`).join('');

  return `<svg class="v6-net-svg" viewBox="0 0 840 400" xmlns="http://www.w3.org/2000/svg">
    <defs><filter id="v6glow" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter></defs>
    <rect x="0" y="0" width="840" height="110" fill="rgba(255,107,53,0.04)" rx="8"/>
    <rect x="0" y="180" width="840" height="60" fill="rgba(255,182,39,0.04)" rx="8"/>
    <rect x="0" y="320" width="840" height="80" fill="rgba(0,217,192,0.04)" rx="8"/>
    ${youLines}${haLines}${youParts}${aiParts}${hNodes}${aNodes}
    <g filter="url(#v6glow)">
      <circle cx="${YOU.x}" cy="${YOU.y}" r="42" fill="rgba(255,107,53,0.12)"/>
      <circle cx="${YOU.x}" cy="${YOU.y}" r="30" fill="rgba(255,107,53,0.22)"/>
      <circle cx="${YOU.x}" cy="${YOU.y}" r="20" fill="#FF6B35"/>
      <text x="${YOU.x}" y="${YOU.y+7}" text-anchor="middle" font-size="14">👤</text>
    </g>
    <text x="${YOU.x}" y="14" text-anchor="middle" font-family="'Courier New',monospace" font-size="11" font-weight="700" fill="#FF6B35">אנחנו</text>
    <text x="828" y="218" text-anchor="end" font-family="'Courier New',monospace" font-size="11" font-weight="700" fill="rgba(255,182,39,0.8)">← אנשים</text>
    <text x="828" y="358" text-anchor="end" font-family="'Courier New',monospace" font-size="11" font-weight="700" fill="rgba(0,217,192,0.8)">← סוכני AI</text>
  </svg>`;
}

export function v6s23() {
  const transitions: [string, string][] = [
    ['עושים משימות', 'בונים מערכות שמבצעות'],
    ['מחפשים מידע', 'שואלים שאלות שמייצרות תובנות'],
    ['מפיקים תוצרים', 'מאמתים שהתוצרים נכונים'],
    ['עובדים בתוך תהליך', 'מעצבים את התהליך'],
    ['יודעים לבצע', 'יודעים לכוון, לבקר ולהוביל'],
  ];
  const rows = transitions.map(([b, n]) =>
    `<div class="v6-tr-row"><div class="v6-tr-before">${b}</div><div class="v6-tr-arr">←</div><div class="v6-tr-now">${n}</div></div>`
  ).join('');

  return `
    ${tb(23, 'YOUR POSITION')}
    <div class="v2-frame v6-pos-frame">
      <div class="v2-eyebrow">התפקיד החדש שלנו</div>
      <h1 class="v2-headline v6-pos-hl">לא לבצע — <span class="v2-accent">לנהל את המערכת שמבצעת.</span></h1>
      <div class="v6-pos-body">
        <div class="v6-pos-net">${buildNetSVG()}</div>
        <div class="v6-pos-right">
          <div class="v6-pos-role-title">התפקיד החדש שלנו</div>
          <div class="v6-pos-role-item"><span class="v6-ri-dot v6-ri-orange"></span>מגדיר את הבעיה הנכונה ואת הכיוון</div>
          <div class="v6-pos-role-item"><span class="v6-ri-dot v6-ri-orange"></span>מתזמר אנשים וסוכני AI לאורך תהליך</div>
          <div class="v6-pos-role-item"><span class="v6-ri-dot v6-ri-teal"></span>בודק איכות — כי ה-AI לא תמיד צודק</div>
          <div class="v6-pos-role-item"><span class="v6-ri-dot v6-ri-teal"></span>שומר על הקשר אנושי, רגישות ואמון</div>
          <div class="v6-pos-divider">המעבר</div>
          <div class="v6-tr-head"><span class="v6-tr-lbl-before">לפני</span><span></span><span class="v6-tr-lbl-now">עכשיו</span></div>
          ${rows}
          <div class="v6-pos-closing">אנחנו לא נעלמים. <strong>אנחנו <span class="v2-accent">עולים שכבה.</span></strong></div>
        </div>
      </div>
    </div>`;
}
