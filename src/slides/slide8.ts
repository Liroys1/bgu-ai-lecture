import { topbar } from './topbar';

/* SLIDE 8: JUNIOR JOBS - real listings April 2026 */
export function slide8() {
  const jobs = [
    {
      tag: 'OPS',
      title: 'AI & Technology Operations Manager',
      co: 'BeamUP', loc: 'תל אביב',
      coDesc: 'Agentic AI לשרשרת אספקה · ~50 עובדים',
      logoSlug: '',
      salary: '₪18–28K',
      desc: 'תפעול אינטגרציות AI, אוטומציה של תהליכים, עבודה עם data וניהול ספקים. <strong>דרוש:</strong> בוגר/ת תעשייה וניהול עם חשיבה אנליטית, רקע ב-SQL/Excel.'
    },
    {
      tag: 'DATA',
      title: 'Data Analyst',
      co: 'Buildots', loc: 'תל אביב',
      coDesc: 'AI לניטור פרויקטי בנייה (computer vision) · ~250 עובדים',
      logoSlug: '',
      salary: '₪20–30K',
      desc: 'ניתוח נתוני פרויקטים, בניית דשבורדים, עבודה עם צוותי מוצר ופיתוח. <strong>דרוש:</strong> בוגר/ת תעשייה וניהול, SQL בסיסי, Python יתרון.'
    },
    {
      tag: 'BI',
      title: 'Data Operations Analyst',
      co: 'Plus500', loc: 'רעננה',
      coDesc: 'מסחר אונליין · חברה ציבורית בלונדון',
      logoSlug: 'plus500',
      salary: '₪22–32K',
      desc: 'BI ודאטה לקבלת החלטות פיננסיות, בניית מודלים, דשבורדים מנהליים. <strong>דרוש:</strong> SQL חזק, Python, רקע אנליטי, אנגלית גבוהה.'
    },
    {
      tag: 'AI OPS',
      title: 'AI Integration Specialist',
      co: 'Microsoft Israel', loc: 'הרצליה',
      coDesc: 'מרכז R&D של Microsoft · ~3,000 עובדים בישראל',
      logoSlug: 'microsoft',
      salary: '₪25–35K',
      desc: 'הטמעת Copilot ו-AI בתהליכי עבודה ארגוניים, עבודה עם צוותי product וצוותים גלובליים. <strong>דרוש:</strong> רקע טכני, אנגלית גבוהה, חשיבה מערכתית.'
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
    ${topbar(8, 'JOBS · JUNIOR')}
    <div class="frame jobs-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>06 · משרות פתוחות עכשיו · ג'וניור</span>
        <h2 style="margin-top:14px">איפה מתחילים. <em>היום.</em></h2>
        <p class="lead">
          ארבע משרות אמיתיות מחברות אמיתיות, לבוגרים שכמוכם — מתוך משרות פעילות <strong>באפריל 2026</strong>.
          שכר בסיס, לפני בונוסים ואופציות.
        </p>
      </div>
      <div class="jobs-grid anim-fade" style="animation-delay:0.3s">${cells}</div>
      <div class="jobs-foot">
        <span class="source-tag">SOURCES · VERIFIED 04/2026</span>
        <a href="https://startup.jobs/locations/israel" target="_blank">startup.jobs</a> ·
        <a href="https://builtin.com/jobs/mena/israel" target="_blank">builtin.com</a> ·
        <a href="https://www.levels.fyi/t/business-analyst/locations/israel" target="_blank">Levels.fyi</a> ·
        <span style="color:#909AA8;">שכר: Nucamp/Ravio 2026, Levels.fyi entry-level TLV</span>
      </div>
    </div>
  `;
}
