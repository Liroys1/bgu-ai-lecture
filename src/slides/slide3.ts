import { topbar } from './topbar';

/* SLIDE 3: MY STORY (career timeline) */
export function slide3() {
  const stops = [
    { years: '2008–2012', tag: 'STUDIES', role: '.B.Sc', company: 'BGU · תעשייה וניהול', desc: 'התואר. הבסיס לכל מה שבא אחרי כך.' },
    { years: '2011–2015', tag: 'CONSULTING', role: 'Senior Project Manager', company: 'Tefen Consulting', desc: 'ייעוץ <span class="lat">Lean</span>, redesign תהליכים, מודלים תפעוליים. בנקים, מוקדים, תעשייה.' },
    { years: '2015–2018', tag: 'E-COMMERCE', role: 'Project Group Manager', company: 'Sears Israel', desc: 'הקמת <span class="lat">marketplace</span>, החלפת פלטפורמת אנליטיקס, <span class="lat">Agile</span> adoption.' },
    { years: '2018–2020', tag: 'STARTUP', role: 'Business Ops Manager', company: 'HERE Mobility', desc: 'B2B <span class="lat">Salesforce</span>, פרויקטי דאטה מול לקוחות. סטארטאפ.' },
    { years: '2020–2026', tag: 'HI-TECH', role: 'BA Department Ops Manager', company: 'Wix', desc: 'ניהול <span class="lat">L&D</span>, <span class="lat">People Ops</span>: 250 איש, סימולציות, אירועים, פודקאסט.' },
    { years: '5/2026', tag: 'STARTING 10.5', role: 'L&D Lead Tech Dev', company: 'Lemonade', desc: 'לימוד והטמעת <span class="lat">AI</span> לצוותי <span class="lat">Product & R&D</span>. <span class="lat">AI-first organization</span>.', current: true }
  ];
  const cells = stops.map((s, i) => {
    const num = (i+1).toString().padStart(2,'0');
    return `
    <div class="stop ${s.current ? 'current' : ''} ${s.next ? 'next' : ''}">
      <div class="stop-head">
        <span class="years">${s.years}</span>
        <span class="badge-tag"><span class="tnum">${num}</span> · ${s.tag}</span>
      </div>
      <div class="role">${s.role}</div>
      <div class="company">${s.company}</div>
      <div class="desc">${s.desc}</div>
    </div>
  `;
  }).join('');
  return `
    ${topbar(3, 'MY STORY')}
    <div class="frame journey">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>01 · המסלול האישי</span>
        <h2 style="margin-top:14px">14 שנה. שש תחנות. <span class="accent">קו אחד.</span></h2>
        <p class="lead">
          כל תחנה הייתה תפקיד שונה — אבל המקצוע הוא אותו מקצוע: לקחת מערכת אנושית מורכבת, להבין 
          איך היא זורמת, ולגרום לה לעבוד טוב יותר. זה תעשייה וניהול. זה לא משתנה. מה שמשתנה זה <strong>הכלים</strong>.
        </p>
      </div>
      <div class="timeline anim-fade" style="animation-delay:0.3s">${cells}</div>
    </div>
  `;
}

