import { topbar } from './topbar';

/* SLIDE 13: YOUR POSITION - YOU above AI, not competing with it */
export function slide13() {
  const examples = [
    {
      num: '01',
      ai: 'AI: "צמצם מלאי ב-20% — חסכון מוכח"',
      you: 'אתם: הספק העיקרי עומד לשבות בשבוע הבא. דווקא עכשיו צריך מאגר.'
    },
    {
      num: '02',
      ai: 'AI: "הסר שלב 4 מהתהליך — מקצר 22% זמן"',
      you: 'אתם: שלב 4 הוא ביקורת בטיחות חוקית. לא נוגעים בו.'
    },
    {
      num: '03',
      ai: 'AI: "העבר עובד A לקו B — אופטימלי מבחינת עומס"',
      you: 'אתם: A היחידי שיודע לתחזק את המכונה הישנה. אם הוא עוזב — אנחנו קורסים.'
    }
  ];

  const exHTML = examples.map(e => `
    <div class="sys-ex-new">
      <div class="sxn-num">${e.num}</div>
      <div class="sxn-body">
        <div class="sxn-ai"><span class="sxn-label-ai">AI</span>${e.ai.replace('AI: ', '')}</div>
        <div class="sxn-sep">← אבל</div>
        <div class="sxn-you"><span class="sxn-label-you">YOU</span>${e.you.replace('אתם: ', '')}</div>
      </div>
    </div>
  `).join('');

  return `
    ${topbar(14, 'YOUR POSITION')}
    <div class="frame position-slide">
      <div class="position-top anim-up">
        <div class="position-text">
          <span class="label"><span class="ldot"></span>11 · המיקום שלכם בעולם החדש</span>
          <h2 style="margin-top:10px">ה-<span class="lat">AI</span> מבצע. <span class="accent">אתם מחליטים.</span></h2>
          <p class="lead" style="margin-top:8px">
            ה-<span class="lat">AI</span> צודק טכנית — תמיד. אבל הנתונים לא מספרים הכל.
            <strong>ההקשר, המגבלות, הערכים — זה אתם.</strong>
            ואף מודל לא ישתפר בזה.
          </p>
        </div>
        <div class="three-host" id="threeHost">
          <div class="three-tag">YOU · HUMANS · AI AGENTS</div>
          <div class="three-foot">live · interactive</div>
          <div class="three-legend">
            <div class="item"><span class="swatch" style="background:#FF6B35"></span><span>YOU</span></div>
            <div class="item"><span class="swatch" style="background:#FFB627"></span><span>HUMANS</span></div>
            <div class="item"><span class="swatch" style="background:#00D9C0"></span><span>AI AGENTS</span></div>
          </div>
        </div>
      </div>
      <div class="sys-examples-new anim-fade" style="animation-delay:0.3s">
        ${exHTML}
      </div>
      <div class="position-closing anim-up" style="animation-delay:0.55s">
        <span class="lat">AI</span> רואה <em>דאטה.</em> <strong>אתם רואים <span class="accent">משמעות.</span></strong>
      </div>
    </div>
  `;
}
