import { topbar } from './topbar';

/* SLIDE 9: SENIOR JOBS — career ladder layout */
export function slide9() {
  const jobs = [
    {
      tag: 'AI PM',
      title: 'AI Product Manager / Tech Lead',
      co: 'monday.com', loc: 'תל אביב',
      coDesc: 'פלטפורמת work-management · 175K לקוחות',
      logo: 'm', logoColor: '#FF3D57', logoSlug: 'mondaydotcom',
      salary: '~₪45-65K',
      role: 'מובילים פיתוח AI agents, אוטונומיים וגנרטיביים.',
      req: '5+ שנות ניסיון במוצר/AI.'
    },
    {
      tag: 'AI LEAD',
      title: 'Enterprise AI CoE Manager',
      co: 'Payoneer', loc: 'פתח תקווה',
      coDesc: 'תשלומים גלובליים · ~2,500 עובדים',
      logo: 'P', logoColor: '#FF4800', logoSlug: 'payoneer',
      salary: '~₪50-70K',
      role: 'מובילים את ה-Center of Excellence ל-AI ברמת הארגון.',
      req: 'ניהול תוכניות חוצות-ארגון.'
    },
    {
      tag: 'SENIOR',
      title: 'Lead AI Transformation',
      co: 'Plus500', loc: 'רעננה',
      coDesc: 'מסחר אונליין · חברה ציבורית בלונדון',
      logo: 'P', logoColor: '#1A4D8C',
      salary: '~₪55-75K',
      role: 'מובילים את חזית ה-ML וההטמעה בפינטק.',
      req: 'רקע ב-ML production.'
    },
    {
      tag: 'STAFF',
      title: 'Staff AI Researcher / ML Engineer',
      co: 'NVIDIA Israel', loc: 'יקנעם',
      coDesc: 'יצרנית שבבי AI · ~3,000 עובדים בישראל',
      logo: 'N', logoColor: '#76B900', logoSlug: 'nvidia',
      salary: '~₪65-85K+',
      role: 'מחקר ופיתוח ML ברמה הגבוהה ביותר.',
      req: '400 משרות פתוחות. PhD/ניסיון מחקרי.'
    }
  ];
  const cells = jobs.map((j, i) => `
    <div class="ladder-card">
      <div class="ladder-node">
        <div class="ladder-circle">${String(i + 1).padStart(2, '0')}</div>
        ${i < jobs.length - 1 ? '<div class="ladder-connector"></div>' : ''}
      </div>
      <div class="ladder-content">
        <div class="ladder-head">
          <div class="job-logo" style="background:${j.logoColor}">${j.logoSlug ? `<img src="https://cdn.simpleicons.org/${j.logoSlug}/ffffff" alt="${j.co}" />` : j.logo}</div>
          <div class="job-co-block">
            <div class="job-co">${j.co}</div>
            <div class="job-co-desc">${j.coDesc}</div>
          </div>
          <span class="job-tag">${j.tag}</span>
          <span class="ladder-salary">${j.salary}<span class="ls-month">/חודש</span></span>
        </div>
        <div class="job-title">${j.title}</div>
        <div class="ladder-meta"><span class="job-loc">📍 ${j.loc}</span> · <span class="job-role-inline">${j.role}</span></div>
        <div class="job-req">${j.req}</div>
      </div>
    </div>
  `).join('');
  return `
    ${topbar(9, 'JOBS · SENIOR')}
    <div class="frame senior-ladder-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>07 · ולאן זה הולך · בכיר</span>
        <h2 style="margin-top:14px">לאן זה מוביל. <em>בעוד 5–8 שנים.</em></h2>
        <p class="lead">
          אלה לא חלומות — אלה משרות פתוחות עכשיו. רק שלא לכם. עוד. <strong>אבל זה הכיוון</strong>.
          מי שילמד נכון את העשור הקרוב, יוכל להגיש מועמדות לתפקידים האלה.
        </p>
      </div>
      <div class="career-ladder anim-fade" style="animation-delay:0.3s">${cells}</div>
      <div class="jobs-foot">
        <span class="source-tag">SOURCES</span>
        <a href="https://builtin.com/jobs/mena/israel/dev-engineering/search/artificial-intelligence" target="_blank">builtin.com/israel</a> ·
        <a href="https://startup.jobs/locations/israel" target="_blank">startup.jobs</a> ·
        <a href="https://www.glassdoor.com/Job/israel-artificial-intelligence-jobs-SRCH_IL.0,6_IN119_KO7,30.htm" target="_blank">glassdoor IL · 296 AI jobs</a>
      </div>
    </div>
  `;
}
