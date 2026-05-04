import { topbar } from './topbar';

/* SLIDE 13: YOUR POSITION — orchestrating humans + AI agents */
export function slide13() {

  /* ── SVG network: YOU top → HUMANS middle → AI bottom ── */
  const YOU = { x: 450, y: 52 };

  const humans = [
    { x: 120, y: 195 }, { x: 240, y: 195 }, { x: 360, y: 195 },
    { x: 540, y: 195 }, { x: 660, y: 195 }, { x: 780, y: 195 }
  ];

  const ais = [
    { x: 60,  y: 340 }, { x: 150, y: 340 }, { x: 240, y: 340 },
    { x: 330, y: 340 }, { x: 420, y: 340 }, { x: 510, y: 340 },
    { x: 600, y: 340 }, { x: 690, y: 340 }, { x: 780, y: 340 }, { x: 860, y: 340 }
  ];

  // map each human to 2 nearest AI nodes
  const humanAiMap: [number, number][] = [
    [0,0],[0,1],[1,1],[1,2],[2,2],[2,3],[3,4],[3,5],[4,6],[4,7],[5,8],[5,9]
  ];

  const youLines = humans.map((h, i) =>
    `<path id="yh${i}" d="M${YOU.x},${YOU.y} L${h.x},${h.y}" class="net-line you-line"/>`
  ).join('');

  const humanAiLines = humanAiMap.map(([hi, ai], i) =>
    `<path id="ha${i}" d="M${humans[hi].x},${humans[hi].y} L${ais[ai].x},${ais[ai].y}" class="net-line ai-line"/>`
  ).join('');

  const youParticles = humans.map((h, i) => {
    const delay = (i * 0.35).toFixed(2);
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
      <circle cx="${h.x}" cy="${h.y}" r="20" class="node-ring-h"/>
      <circle cx="${h.x}" cy="${h.y}" r="14" fill="#FFB627" opacity="0.95"/>
      <text x="${h.x}" y="${h.y+5}" class="node-icon">👤</text>
    </g>`
  ).join('');

  const aiNodes = ais.map((a, i) =>
    `<g class="net-node ai-node" style="animation-delay:${i*0.08}s">
      <circle cx="${a.x}" cy="${a.y}" r="16" class="node-ring-ai"/>
      <circle cx="${a.x}" cy="${a.y}" r="11" fill="#00D9C0" opacity="0.9"/>
      <text x="${a.x}" y="${a.y+5}" class="node-icon ai-icon">🤖</text>
    </g>`
  ).join('');

  return `
    ${topbar(14, 'YOUR POSITION')}
    <div class="frame position-slide">

      <div class="ps-top anim-up">
        <span class="label"><span class="ldot"></span>11 · התפקיד החדש בעידן ה-AI</span>
        <h2 style="margin-top:6px">התפקיד החדש: לנהל <span class="accent">אנשים וסוכנים.</span></h2>
        <p class="ps-sub">לא רק לבצע עבודה — אלא <strong>לתזמר אנשים, סוכנים ומערכות.</strong></p>
      </div>

      <div class="ps-network-wrap anim-fade" style="animation-delay:0.3s">
        <svg class="ps-net-svg" viewBox="0 0 900 395" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="glow-you" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="8" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="glow-h" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="glow-ai" x="-60%" y="-60%" width="220%" height="220%">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <!-- connection lines -->
          ${youLines}
          ${humanAiLines}

          <!-- animated particles -->
          ${youParticles}
          ${aiParticles}

          <!-- human nodes -->
          ${humanNodes}

          <!-- AI nodes -->
          ${aiNodes}

          <!-- YOU node -->
          <g filter="url(#glow-you)">
            <circle cx="${YOU.x}" cy="${YOU.y}" r="42" fill="rgba(255,107,53,0.12)"/>
            <circle cx="${YOU.x}" cy="${YOU.y}" r="30" fill="rgba(255,107,53,0.22)"/>
            <circle cx="${YOU.x}" cy="${YOU.y}" r="20" fill="#FF6B35"/>
            <text x="${YOU.x}" y="${YOU.y+7}" class="you-icon">👤</text>
          </g>

          <!-- tier labels -->
          <text x="${YOU.x}" y="15" class="tier-label you-label">אנחנו</text>
          <text x="890" y="200" class="tier-label h-label" text-anchor="end">← אנשים</text>
          <text x="890" y="348" class="tier-label ai-label" text-anchor="end">← סוכני AI</text>
        </svg>
      </div>

      <div class="ps-closing anim-up" style="animation-delay:0.6s">
        אנחנו לא רק עושים את העבודה.
        <strong>אנחנו <span class="accent">מנהלים</span> את המערכת שעושה אותה.</strong>
      </div>

    </div>
  `;
}
