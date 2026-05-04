import { topbar } from './topbar';

/* SLIDE 5: OLD vs NEW IE - The job description has changed */
export function slide5() {
  const eras = [
    {
      year: '2010',
      tag: 'LEAN-ERA',
      industry: 'Industry 3.0',
      industryNote: 'pre-IoT',
      title: 'מהנדס/ת קווי ייצור',
      kw: 'Lean · פיזי · רצפת ייצור',
      skills: ['TAKT time studies', 'AutoCAD · layout', 'Lean · 5S · Kaizen', 'FMEA · MRP', 'Six Sigma', 'Work measurement']
    },
    {
      year: '2015',
      tag: 'EARLY DIGITAL',
      industry: 'Industry 4.0',
      industryNote: 'digital twin',
      title: 'מהנדס/ת תהליכים',
      kw: 'ERP · דיגיטציה · תהליכים',
      skills: ['SAP · Oracle ERP', 'BPMN · process mapping', 'Excel מתקדם · pivot', 'KPI dashboards', 'project management', 'process automation']
    },
    {
      year: '2020',
      tag: 'DATA-FIRST',
      industry: 'Industry 4.0+',
      industryNote: 'cloud · IoT',
      title: 'מהנדס/ת דאטה ותפעול',
      kw: 'דאטה · ענן · אנליטיקה',
      skills: ['SQL · Python בסיסי', 'Power BI · Tableau', 'Salesforce · HubSpot', 'Agile · Scrum', 'A/B testing', 'cloud platforms']
    },
    {
      year: '2026',
      tag: 'AI-NATIVE',
      industry: 'Industry 5.0',
      industryNote: 'human + AI',
      title: 'מהנדס/ת AI ומערכות',
      kw: 'AI · אוטומציה · low-code',
      skills: ['LLMs · prompt engineering', 'no-code · Base44 · Lovable', 'AI agents · workflows', 'RAG · vector DBs', 'API integrations', 'pandas · ML basics']
    }
  ];
  const cells = eras.map((e, i) => {
    const isFirst = i === 0;
    const isLast = i === eras.length - 1;
    const cls = isLast ? 'era-card current' : (isFirst ? 'era-card past' : 'era-card');
    return `
    <div class="${cls}">
      <div class="era-industry"><span class="lat">${e.industry}</span> <span class="era-industry-note lat">${e.industryNote}</span></div>
      <div class="era-year">${e.year}</div>
      <div class="era-tag">${e.tag}</div>
      <div class="era-title">${e.title}</div>
      <div class="era-kw">${e.kw}</div>
      <div class="era-skills">
        ${e.skills.map(s => `<span class="es-tag lat">${s}</span>`).join('')}
      </div>
    </div>`;
  }).join('');
  return `
    ${topbar(5, 'TRANSFORMATION')}
    <div class="frame vs-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>03 · המקצוע משתנה</span>
        <h2 style="margin-top:8px">אותו תואר אקדמי. <em>עבודה שונה לגמרי.</em></h2>
        <p class="lead">
          המקצוע לא נעלם — <strong>הוא <em>בלע</em> את הטכנולוגיה</strong>. כל 5-7 שנים הכלים מתחלפים.
          <span class="flow-chain"><span>Lean</span><span class="fa">→</span><span>ERP</span><span class="fa">→</span><span>Data</span><span class="fa">→</span><span>AI</span></span>
          <strong>אבל הליבה — אופטימיזציה של מערכות אנוש-מכונה — לא משתנה.</strong>
          מי שלמד ב-2010 עדיין רלוונטי ב-2026 — אם רכש את הכלים החדשים.
        </p>
      </div>
      <div class="timeline-evolution anim-fade" style="animation-delay:0.3s">
        ${cells}
      </div>
      <div class="evolution-source anim-fade" style="animation-delay:0.5s">
        <span class="source-tag">SOURCES</span>
        <a href="https://aiiem.org/how-industrial-engineering-is-changing-the-world-in-2025/" target="_blank">AIIEM 2025</a> ·
        <a href="https://www.mdpi.com/2227-7080/14/2/81" target="_blank">MDPI 2026</a> ·
        <a href="https://research.com/careers/industrial-engineering-careers" target="_blank">Research.com 2026</a> ·
        <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">WEF 2025</a>
      </div>
    </div>
  `;
}
