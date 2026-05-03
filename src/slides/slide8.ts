import { topbar } from './topbar';

/* SLIDE 8: JUNIOR JOBS - real listings April 2026 */
export function slide8() {
  const jobs = [
    {
      tag: 'OPS',
      title: 'AI & Technology Operations Manager',
      co: 'BeamUP', loc: 'תל אביב',
      coDesc: 'AI לתחום הנדל"ן · ~150 עובדים',
      logo: 'B', logoColor: '#FF6B35',
      salary: '~₪25-35K/חודש',
      role: 'מה תעשו: ניהול תפעול AI, אינטגרציות, אוטומציה תהליכים.',
      req: 'דורש: בוגר/ת תעשייה וניהול או הנדסה, חשיבה אנליטית.'
    },
    {
      tag: 'PRODUCT',
      title: 'Operations / Data roles (50+ open)',
      co: 'Buildots', loc: 'תל אביב',
      coDesc: 'AI לאתרי בנייה · ~250 עובדים',
      logo: 'B', logoColor: '#00D9C0',
      salary: '~₪22-32K/חודש',
      role: 'מה תעשו: ניהול תפעול, דאטה, BI לפרויקטים.',
      req: 'דורש: גיוס מאסיבי ב-2026, פתוחים גם ל-junior.'
    },
    {
      tag: 'DATA',
      title: 'Data Operations Analyst',
      co: 'Plus500', loc: 'רעננה',
      coDesc: 'מסחר אונליין · חברה ציבורית בלונדון',
      logo: 'P', logoColor: '#1A4D8C',
      salary: '~₪28-38K/חודש',
      role: 'מה תעשו: BI, Python, ניתוח, דשבורדים פיננסיים.',
      req: 'דורש: בוגר/ת תעשייה וניהול רלוונטי/ת. רקע ב-SQL.'
    },
    {
      tag: 'AI OPS',
      title: 'AI Integration Specialist (Junior)',
      co: 'Microsoft Israel', loc: 'הרצליה',
      coDesc: 'ענקית טכנולוגיה · ~3,000 עובדים בישראל',
      logo: 'M', logoColor: '#0078D4', logoSlug: 'microsoft',
      salary: '~₪30-40K/חודש',
      role: 'מה תעשו: שילוב Copilot/AI בתהליכי עבודה ארגוניים.',
      req: 'דורש: 100 משרות פתוחות ב-Copilot/AI ב-2026.'
    }
  ];
  const cells = jobs.map(j => `
    <div class="job-card senior">
      <div class="job-head">
        <div class="job-logo" style="background:${j.logoColor}">${j.logoSlug ? `<img src="https://cdn.simpleicons.org/${j.logoSlug}/ffffff" alt="${j.co}" />` : j.logo}</div>
        <div class="job-co-block">
          <div class="job-co">${j.co}</div>
          <div class="job-co-desc">${j.coDesc}</div>
        </div>
        <span class="job-tag">${j.tag}</span>
      </div>
      <div class="job-title">${j.title}</div>
      <div class="job-loc-salary"><span class="job-loc">📍 ${j.loc}</span> · <span class="job-salary">${j.salary}</span></div>
      <div class="job-role">${j.role}</div>
      <div class="job-req">${j.req}</div>
    </div>
  `).join('');
  return `
    ${topbar(8, 'JOBS · JUNIOR')}
    <div class="frame jobs-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>06 · משרות פתוחות עכשיו · ג'וניור</span>
        <h2 style="margin-top:14px">איפה מתחילים. <em>היום.</em></h2>
        <p class="lead">
          ארבע משרות אמיתיות, שפורסמו <strong>בחודש האחרון</strong>, בחברות אמיתיות, לבוגרים שכמוכם. 
          זה לא תיאוריה — זה הדף של היום. שכר בסיס, לפני בונוסים ואופציות.
        </p>
      </div>
      <div class="jobs-grid anim-fade" style="animation-delay:0.3s">${cells}</div>
      <div class="jobs-foot">
        <span class="source-tag">SOURCES</span>
        <a href="https://startup.jobs/locations/israel" target="_blank">startup.jobs/israel</a> ·
        <a href="https://www.calcalistech.com/ctechnews/article/cdzdrd6pl" target="_blank">calcalistech.com</a> ·
        <a href="https://www.nucamp.co/blog/coding-bootcamp-israel-isr-top-10-best-paid-tech-job-in-israel-in-2025" target="_blank">salary data: Nucamp/Ravio 2026</a>
      </div>
    </div>
  `;
}

