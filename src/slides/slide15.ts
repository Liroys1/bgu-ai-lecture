import { topbar } from './topbar';

/* SLIDE 15: 9 SKILLS */
export function slide15() {
  const skills = [
    { num: '01', cat: 'CORE', name: 'חשיבת מערכות', desc: 'לראות את הצנרת, לא רק את הברז. הכל מחובר להכל.' },
    { num: '02', cat: 'CORE', name: 'ניתוח דאטה', desc: 'SQL בסיסי, Excel מתקדם, BI tools. מבוסס על שאלות נכונות.' },
    { num: '03', cat: 'AI', name: 'Prompt engineering', desc: 'לדבר עם המודלים. לדעת מתי GPT, מתי Claude, מתי Gemini.' },
    { num: '04', cat: 'AI', name: 'Building with AI', desc: 'No-code: Base44, Lovable, Bubble. תוכלו לבנות אפליקציה אמיתית.' },
    { num: '05', cat: 'TECH', name: 'אוטומציה', desc: 'Make, Zapier, n8n. לחבר מערכות בלי לכתוב קוד.' },
    { num: '06', cat: 'TECH', name: 'Python בסיסי', desc: 'pandas, Jupyter. לא להיות מהנדס, להיות שוטף.' },
    { num: '07', cat: 'SOFT', name: 'תקשורת חוצת תפקודים', desc: 'לדבר עם הנדסה, מוצר, פיננסים, לקוחות. לתרגם בין עולמות.' },
    { num: '08', cat: 'SOFT', name: 'מסגור בעיות', desc: 'איך לקחת בעיה לא ברורה ולהפוך אותה למשהו שאפשר לפתור.' },
    { num: '09', cat: 'META', name: 'למידה עצמית', desc: 'הכל ישתנה שוב בעוד 3 שנים. הכישור הכי חשוב הוא ללמוד מחדש.' }
  ];
  const cells = skills.map((s, i) => `
    <button class="skill-card" data-i="${i}">
      <div class="skill-card-head">
        <span class="skill-num">${s.num}</span>
        <span class="skill-cat">${s.cat}</span>
      </div>
      <div class="skill-name">${s.name}</div>
      <div class="skill-desc">${s.desc}</div>
    </button>
  `).join('');
  return `
    ${topbar(16, 'SKILLS')}
    <div class="frame skills-slide">
      <div class="anim-up skills-header">
        <div class="skills-header-row">
          <div>
            <span class="label"><span class="ldot"></span>13 · 9 מיומנויות</span>
            <h2 style="margin-top:8px">המיומנויות <span class="accent">לעידן הזה.</span></h2>
          </div>
          <div class="skills-balance-banner">
            <span class="sbb-pill core">2 ליבה</span>
            <span class="sbb-plus">+</span>
            <span class="sbb-pill ai">2 <span class="lat">AI</span></span>
            <span class="sbb-plus">+</span>
            <span class="sbb-pill tech">2 טכנולוגיה</span>
            <span class="sbb-plus">+</span>
            <span class="sbb-pill soft">2 רכות</span>
            <span class="sbb-plus">+</span>
            <span class="sbb-pill meta">1 מטא</span>
          </div>
        </div>
        <p class="lead skills-lead-emphasis">
          <strong>לא הכל טכני.</strong> לא הכל <span class="lat">soft</span>. <strong>הכל ביחד.</strong> 
          אלה תשעת המיומנויות שאני חושב שהיו עוזרות לי לו ידעתי בגיל 20.
        </p>
      </div>
      <div class="skills-grid anim-fade" style="animation-delay:0.3s">${cells}</div>
    </div>
  `;
}

