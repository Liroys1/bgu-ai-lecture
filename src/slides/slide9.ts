import { topbar } from './topbar';

/* SLIDE 9: SENIOR JOBS - real senior listings */
export function slide9() {
  const jobs = [
    {
      tag: 'AI PM',
      title: 'AI Product Manager / Tech Lead',
      co: 'monday.com', loc: 'תל אביב',
      coDesc: 'פלטפורמת work-management (SaaS) · 175K+ לקוחות',
      logoSlug: 'mondaydotcom',
      salary: '₪45–65K',
      desc: 'מובילים פיתוח AI agents, אוטונומיים וגנרטיביים, תוך עבודה עם הנהלה ומשתמשי enterprise. <strong>דרוש:</strong> 5+ שנות ניסיון במוצר/AI.'
    },
    {
      tag: 'AI LEAD',
      title: 'Enterprise AI CoE Manager',
      co: 'Payoneer', loc: 'פתח תקווה',
      coDesc: 'תשלומים גלובליים B2B · ~2,500 עובדים',
      logoSlug: 'payoneer',
      salary: '₪50–70K',
      desc: 'מובילים את ה-Center of Excellence ל-AI ברמת הארגון, חוצה מחלקות ומוצרים. <strong>דרוש:</strong> ניהול תוכניות חוצות-ארגון, רקע בהטמעת AI.'
    },
    {
      tag: 'SENIOR',
      title: 'Lead AI Transformation',
      co: 'Plus500', loc: 'רעננה',
      coDesc: 'מסחר אונליין · חברה ציבורית בלונדון',
      logoSlug: 'plus500',
      salary: '₪55–75K',
      desc: 'מובילים את חזית ה-ML וההטמעה בפינטק — מודלים בפרודקשן, ניהול צוות דאטה. <strong>דרוש:</strong> רקע ב-ML production, ניהול טכני.'
    },
    {
      tag: 'STAFF',
      title: 'Staff AI Researcher / ML Engineer',
      co: 'NVIDIA Israel', loc: 'יקנעם',
      coDesc: 'יצרנית שבבי AI · ~3,500 עובדים בישראל',
      logoSlug: 'nvidia',
      salary: '₪65–85K+',
      desc: 'מחקר ופיתוח ML ברמה הגבוהה ביותר — ארכיטקטורות שבבים, networking AI. <strong>דרוש:</strong> PhD או ניסיון מחקרי מוכח.'
    }
  ];
  const cells = jobs.map(j => `
    <div class="job-card senior">
      <div class="job-head">
        <div class="job-logo">
          ${j.logoSlug
            ? `<img src="https://cdn.simpleicons.org/${j.logoSlug}/FFFFFF" alt="${j.co}" />`
            : `<div class="job-logo-fallback">${j.co.charAt(0)}</div>`}
        </div>
        <div class="job-co-block">
          <div class="job-co">${j.co}</div>
          <div class="job-co-desc">${j.coDesc}</div>
        </div>
        <span class="job-tag">${j.tag}</span>
      </div>
      <div class="job-title">${j.title}</div>
      <div class="job-loc-salary">
        <span class="job-loc">📍 ${j.loc}</span>
        <span class="job-sep">·</span>
        <span class="job-salary">${j.salary} <span class="salary-unit">לחודש</span></span>
      </div>
      <div class="job-desc">${j.desc}</div>
    </div>
  `).join('');
  return `
    ${topbar(9, 'JOBS · SENIOR')}
    <div class="frame jobs-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>07 · ולאן זה הולך · בכיר</span>
        <h2 style="margin-top:14px">לאן זה מוביל. <em>בעוד 5–8 שנים.</em></h2>
        <p class="lead">
          אלה לא חלומות — אלה משרות פתוחות עכשיו. רק שלא לכם. עוד. <strong>אבל זה הכיוון</strong>.
          מי שילמד נכון את העשור הקרוב, יוכל להגיש מועמדות לתפקידים האלה.
        </p>
      </div>
      <div class="jobs-grid anim-fade" style="animation-delay:0.3s">${cells}</div>
      <div class="jobs-foot">
        <span class="source-tag">SOURCES · VERIFIED 04/2026</span>
        <a href="https://builtin.com/jobs/mena/israel/dev-engineering/search/artificial-intelligence" target="_blank">builtin.com/israel</a> ·
        <a href="https://startup.jobs/locations/israel" target="_blank">startup.jobs</a> ·
        <a href="https://www.glassdoor.com/Job/israel-artificial-intelligence-jobs-SRCH_IL.0,6_IN119_KO7,30.htm" target="_blank">Glassdoor IL</a> ·
        <span style="color:#909AA8;">שכר: Nucamp 2026, Ravio IL</span>
      </div>
    </div>
  `;
}
