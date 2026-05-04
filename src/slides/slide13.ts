import { topbar } from './topbar';

/* SLIDE 13: YOUR POSITION — new role in AI era */
export function slide13() {

  const transitions: [string, string][] = [
    ['עושים משימות', 'בונים מערכות שמבצעות'],
    ['מחפשים מידע', 'שואלים שאלות שמייצרות תובנות'],
    ['מפיקים תוצרים', 'מאמתים שהתוצרים נכונים ואמינים'],
    ['עובדים בתוך תהליך', 'מעצבים את התהליך'],
    ['יודעים לבצע', 'יודעים לכוון, לבקר ולהוביל'],
  ];

  const trRows = transitions.map(([before, now]) => `
    <div class="tr-row">
      <div class="tr-before">${before}</div>
      <div class="tr-arrow">←</div>
      <div class="tr-now">${now}</div>
    </div>
  `).join('');

  /* ── SVG network ── */
  const YOU = { x: 435, y: 62 };

  const humans = [
    { x: 100, y: 210 }, { x: 218, y: 210 }, { x: 342, y: 210 },
    { x: 528, y: 210 }, { x: 652, y: 210 }, { x: 770, y: 210 },
  ];

  const ais = [
    { x: 45,  y: 352 }, { x: 135, y: 352 }, { x: 228, y: 352 },
    { x: 322, y: 352 }, { x: 415, y: 352 }, { x: 508, y: 352 },
    { x: 600, y: 352 }, { x: 694, y: 352 }, { x: 786, y: 352 },
  ];

  const humanAiMap: [number, number][] = [
    [0,0],[0,1],[1,1],[1,2],[2,2],[2,3],[3,4],[3,5],[4,5],[4,6],[5,7],[5,8]
  ];

  const youLines = humans.map((h, i) =>
    `<path id="yh${i}" d="M${YOU.x},${YOU.y} L${h.x},${h.y}" class="net-line you-line"/>`
  ).join('');

  const humanAiLines = humanAiMap.map(([hi, ai], i) =>
    `<path id="ha${i}" d="M${humans[hi].x},${humans[hi].y} L${ais[ai].x},${ais[ai].y}" class="net-line ai-line"/>`
  ).join('');

  const youParticles = humans.map((h, i) => {
    const delay = (i * 0.38).toFixed(2);
    return `
      <circle r="3.5" fill="#FF6B35" opacity="0.9">
        <animateMotion dur="1.6s" repeatCount="indefinite" begin="${delay}s">
          <mpath href="#yh${i}"/>
        </animateMotion>
      </circle>
      <circle r="2.5" fill="#FFB627" opacity="0.6">
        <animateMotion dur="1.6s" repeatCount="indefinite" begin="${(parseFloat(delay)+0.8).toFixed(2)}s">
          <mpath href="#yh${i}"/>
        </animateMotion>
      </circle>`;
  }).join('');

  const aiParticles = humanAiMap.map(([hi, ai], i) => {
    const delay = (i * 0.22).toFixed(2);
    return `
      <circle r="2.8" fill="#00D9C0" opacity="0.8">
        <animateMotion dur="1.4s" repeatCount="indefinite" begin="${delay}s">
          <mpath href="#ha${i}"/>
        </animateMotion>
      </circle>`;
  }).join('');

  const humanNodes = humans.map((h, i) =>
    `<g class="net-node human-node" style="animation-delay:${i*0.1}s">
      <circle cx="${h.x}" cy="${h.y}" r="24" class="node-ring-h"/>
      <circle cx="${h.x}" cy="${h.y}" r="17" fill="#FFB627" opacity="0.95"/>
      <text x="${h.x}" y="${h.y+6}" class="node-icon">👤</text>
    </g>`
  ).join('');

  const aiNodes = ais.map((a, i) =>
    `<g class="net-node ai-node" style="animation-delay:${i*0.08}s">
      <circle cx="${a.x}" cy="${a.y}" r="22" class="node-ring-ai"/>
      <circle cx="${a.x}" cy="${a.y}" r="16" fill="#00D9C0" opacity="0.9"/>
      <text x="${a.x}" y="${a.y+6}" class="node-icon ai-icon">🤖</text>
    </g>`
  ).join('');

  return `
    ${topbar(14, 'YOUR POSITION')}
    <div class="frame position-slide">

      <div class="ps-top anim-up">
        <span class="label"><span class="ldot"></span>11 · התפקיד החדש בעידן ה-AI</span>
        <h2 style="margin-top:6px">לא רק לבצע — <span class="accent">לנהל את המערכת שמבצעת.</span></h2>
      </div>

      <div class="ps-main-body anim-fade" style="animation-delay:0.25s">

        <!-- SVG Network (left) -->
        <div class="ps-network-side">
          <svg class="ps-net-svg-enr" viewBox="0 0 840 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow-you3" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="8" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            <!-- Zone background bands -->
            <rect x="0" y="0"   width="840" height="110" fill="rgba(255,107,53,0.04)" rx="8"/>
            <rect x="0" y="180" width="840" height="64"  fill="rgba(255,182,39,0.04)" rx="8"/>
            <rect x="0" y="325" width="840" height="75"  fill="rgba(0,217,192,0.04)"  rx="8"/>

            ${youLines}
            ${humanAiLines}
            ${youParticles}
            ${aiParticles}
            ${humanNodes}
            ${aiNodes}

            <!-- YOU node -->
            <g filter="url(#glow-you3)">
              <circle cx="${YOU.x}" cy="${YOU.y}" r="42" fill="rgba(255,107,53,0.12)"/>
              <circle cx="${YOU.x}" cy="${YOU.y}" r="30" fill="rgba(255,107,53,0.22)"/>
              <circle cx="${YOU.x}" cy="${YOU.y}" r="20" fill="#FF6B35"/>
              <text x="${YOU.x}" y="${YOU.y+7}" class="you-icon">👤</text>
            </g>

            <!-- Tier labels — clear, readable, no overlap -->
            <text x="${YOU.x}" y="14" class="tier-label-lg you-label">אנחנו</text>
            <text x="10" y="218" class="tier-label-lg h-label" text-anchor="start">אנשים</text>
            <text x="10" y="365" class="tier-label-lg ai-label" text-anchor="start">סוכני AI</text>
          </svg>
        </div>

        <!-- Before / Now + Role intro (right) -->
        <div class="ps-transitions-side">

          <div class="ps-role-intro">
            <div class="ps-role-title">התפקיד החדש שלנו</div>
            <div class="ps-role-list">
              <div class="ps-role-item"><span class="ri-dot ri-orange"></span>מגדיר את הבעיה הנכונה ואת הכיוון</div>
              <div class="ps-role-item"><span class="ri-dot ri-orange"></span>מתזמר אנשים וסוכני AI לאורך תהליך</div>
              <div class="ps-role-item"><span class="ri-dot ri-teal"></span>בודק איכות — כי ה-AI לא תמיד צודק</div>
              <div class="ps-role-item"><span class="ri-dot ri-teal"></span>שומר על הקשר אנושי, רגישות ואמון</div>
            </div>
          </div>

          <div class="ps-tr-divider">המעבר</div>

          <div class="ps-tr-heading">
            <span class="ps-tr-lbl ps-before-lbl">לפני</span>
            <span></span>
            <span class="ps-tr-lbl ps-now-lbl">עכשיו</span>
          </div>

          ${trRows}

        </div>
      </div>

      <div class="ps-closing anim-up" style="animation-delay:0.8s">
        אנחנו לא נעלמים.
        <strong>אנחנו <span class="accent">עולים שכבה.</span></strong>
      </div>

    </div>
  `;
}
