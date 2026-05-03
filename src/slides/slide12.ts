import { topbar } from './topbar';

/* SLIDE 12: DIVISION OF LABOR - what AI does, what you do */
export function slide12() {
  const aiTasks = [
    { t: 'איסוף וסינון דאטה', d: 'מעבר על מיליוני שורות, ניקוי, נורמליזציה' },
    { t: 'יצירת דשבורדים', d: 'גרפים, קווי מגמה, התראות אוטומטיות' },
    { t: 'אוטומציה של תהליכים', d: 'workflows, integrations, scripts' },
    { t: 'ניתוח טקסט וסנטימנט', d: 'משובים, תלונות, סקרים בקנה מידה גדול' }
  ];
  const youTasks = [
    { t: 'הגדרת השאלה הנכונה', d: 'מה באמת חשוב למדוד? למי? מתי?' },
    { t: 'הבנת ההקשר העסקי', d: 'איך זה מתחבר לאסטרטגיה? למי הלקוחות?' },
    { t: 'גישור בין צוותים', d: 'הנדסה, מוצר, עסקי, רגולציה — אנשים' },
    { t: 'קבלת החלטות תחת אי-וודאות', d: 'כשהדאטה לא מספיקה — מה עושים?' }
  ];
  const aiList = aiTasks.map((t, i) => `
    <li>
      <div class="marker">${String(i+1).padStart(2,'0')}</div>
      <div>
        <div class="li-t">${t.t}</div>
        <div class="li-d">${t.d}</div>
      </div>
    </li>
  `).join('');
  const youList = youTasks.map((t, i) => `
    <li>
      <div class="marker">${String(i+1).padStart(2,'0')}</div>
      <div>
        <div class="li-t">${t.t}</div>
        <div class="li-d">${t.d}</div>
      </div>
    </li>
  `).join('');
  return `
    ${topbar(13, 'DIVISION')}
    <div class="frame division">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>10 · חלוקת העבודה החדשה</span>
        <h2 style="margin-top:14px">מה <span class="accent">הם</span> עושים. מה <span class="accent">אתם</span> עושים.</h2>
      </div>
      <div class="cols anim-fade" style="animation-delay:0.3s">
        <div class="col-card left-col">
          <div class="col-card-head">
            <h3>ה-<span class="lat">AI</span> עושה</h3>
            <span class="badge">automation</span>
          </div>
          <ul>${aiList}</ul>
        </div>
        <div class="col-card right-col">
          <div class="col-card-head">
            <h3>אתם עושים</h3>
            <span class="badge">judgment</span>
          </div>
          <ul>${youList}</ul>
        </div>
      </div>
    </div>
  `;
}

