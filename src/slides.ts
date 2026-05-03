import { PHOTO_B64, ALTMAN_B64, HASSABIS_B64, MATIAS_B64, FAMILY_APP_B64, LEMONADE_APP_B64 } from './assets/images';

export function topbar(num: number, label: string): string {
  return `
    <div class="topbar">
      <div class="brand">
        <div class="bgu-logo">B</div>
        <span>מיטאפ פורום 20–80 · בר גיורא · 5 במאי 2026</span>
      </div>
      <div>פורום 20–80 · בן־גוריון · ${label} · ${String(num).padStart(2,'0')} / 20</div>
    </div>
  `;
}

/* SLIDE 1: HERO */
export function slide1() {
  return `
    ${topbar(1, 'INTRO')}
    <div class="frame s1">
      <div></div>
      <div class="grid">
        <div class="photo-wrap anim-scale">
          <img src="data:image/jpeg;base64,${PHOTO_B64}" alt="Liran Shaked" />
        </div>
        <div>
          <span class="name-tag anim-fade">לירן שקד · בוגר תעשייה וניהול 2012</span>
          <h1 class="anim-up">
            למה <em>תעשייה וניהול</em><br/>
            <span class="accent-grad">ומה עושים עם זה היום.</span>
          </h1>
          <p class="subtitle anim-up" style="animation-delay:0.2s">
            הסיפור שלי — מהפקולטה להנדסה, דרך ייעוץ, סטארטאפ, היי-טק — ועד תפקיד 
            <span class="lat">L&D Lead Tech Dev</span> ב-<span class="lat">Lemonade</span> בעידן ה-<span class="lat">AI</span>. 
            ומה אני מציע לכם לעשות אחרת ממני.
          </p>
        </div>
      </div>
      <div class="meta-row anim-fade" style="animation-delay:0.4s">
        <span class="item">בר גיורא</span>
        <span class="item-dot"></span>
        <span class="item">יום ג' · <span class="lat">5/5</span> · 19:30</span>
        <span class="item-dot"></span>
        <span class="item">סטודנטים שנה א'</span>
      </div>
    </div>
  `;
}

/* SLIDE 2: AGENDA - what's coming in this hour */
export function slide2() {
  return `
    ${topbar(2, 'AGENDA')}
    <div class="frame agenda">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>00 · המסע של השעה הזאת</span>
        <h2 style="margin-top:10px">שעה אחת. <span class="accent">שלוש מערכות.</span> סיפור אחד.</h2>
        <p class="lead">
          בשעה הקרובה אקח אתכם דרך הסיפור של המקצוע — מאיפה הוא בא, מה קורה לו עכשיו, ומה אתם 
          יכולים לעשות עם זה <strong>ממחר בבוקר</strong>. אין כאן הצגה — יש שיחה.
        </p>
      </div>
      <div class="agenda-grid anim-fade" style="animation-delay:0.3s">
        <div class="act-card act1">
          <div class="act-num">ACT I</div>
          <div class="act-time">~15 דק'</div>
          <div class="act-title">מאיפה באנו</div>
          <div class="act-desc">הסיפור האישי שלי, מה זה בכלל תעשייה וניהול, ולמה הוא עדיין רלוונטי <em>במיוחד עכשיו</em>.</div>
          <ul>
            <li>14 שנה, 6 תחנות</li>
            <li>הצנרת מאחורי הקלעים</li>
            <li>למה התחום עדיין חי</li>
          </ul>
          <div class="act-stat">3 סטטיסטיקות שיפתיעו אתכם</div>
        </div>
        <div class="act-card act2">
          <div class="act-num">ACT II</div>
          <div class="act-time">~25 דק'</div>
          <div class="act-title">מה משתנה עכשיו</div>
          <div class="act-desc">המקצוע משתנה לעיניכם. משרות חדשות, ציטוטים, ו<strong>ההרצאה</strong> של מנכ"ל <span class="lat">Lemonade</span>.</div>
          <ul>
            <li>תעשייה וניהול 2010 מול 2026</li>
            <li>8 משרות אמיתיות החודש</li>
            <li>החייזרים נחתו</li>
          </ul>
          <div class="act-stat">39% מהמיומנויות שלכם ישתנו עד 2030</div>
        </div>
        <div class="act-card act3">
          <div class="act-num">ACT III</div>
          <div class="act-time">~20 דק'</div>
          <div class="act-title">מה אתם תעשו</div>
          <div class="act-desc">הסיפור שלי עם <span class="lat">AI</span>, מפת דרכים ל-90 יום, ומה הייתי עושה אחרת.</div>
          <ul>
            <li>3 פרויקטים אמיתיים שלי</li>
            <li>9 מיומנויות לעידן הזה</li>
            <li>שאלות פתוחות</li>
          </ul>
          <div class="act-stat">המצגת הזו נבנתה בלי שורת קוד</div>
        </div>
      </div>
      <div class="agenda-footer">
        <span class="af-item"><strong>20</strong> שקפים</span>
        <span class="af-sep">·</span>
        <span class="af-item"><strong>2026</strong> מקורות עדכניים</span>
        <span class="af-sep">·</span>
        <span class="af-item">בנויה ב-<strong>Claude</strong></span>
        <span class="af-sep">·</span>
        <span class="af-item">דברו איתי <strong>בכל זמן</strong></span>
      </div>
    </div>
  `;
}

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

/* SLIDE 4: WHY IE - 3 stats */
export function slide4() {
  return `
    ${topbar(4, 'WHY IE')}
    <div class="frame why-ie">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>02 · למה התחום הזה</span>
        <h2 style="margin-top:10px">המקצוע שתמיד <span class="accent">מתאים את עצמו.</span></h2>
        <p class="lead">
          בכל פעם שהעולם משתנה — תעשייה וניהול נשאר רלוונטי. כי לא לימדו אותך טכנולוגיה אחת. 
          לימדו אותך <strong>איך לחשוב על מערכות</strong>. <em>זו המיומנות שלא ניתן לאוטמט</em> — ולכן ה-<span class="lat">AI</span> משלים אותה, לא מחליף.
        </p>
      </div>
      <div class="why-rankings anim-fade" style="animation-delay:0.2s">
        <div class="rank-pill highlight">
          <span class="rank-num">#1</span>
          <span class="rank-text"><span class="lat">Best Engineering Job</span> · <span class="rank-source-inline lat">US News 2026</span></span>
        </div>
        <div class="rank-pill">
          <span class="rank-num">#1</span>
          <span class="rank-text"><span class="lat">IE Grad Program</span> · <span class="lat">Georgia Tech</span> · <span>36 שנה ברצף</span></span>
        </div>
        <div class="rank-pill">
          <span class="rank-num"><span class="lat">+12%</span></span>
          <span class="rank-text">צמיחה צפויה · <span class="rank-source-inline lat">BLS 2024–2034</span></span>
        </div>
      </div>
      <div class="grid anim-fade" style="animation-delay:0.35s">
        <div class="why-card">
          <div class="num">+11%</div>
          <div class="t">צמיחת המקצוע ב-<span class="lat">USA</span> · 2024–2034</div>
          <div class="d">המקצוע צומח <strong>מהר יותר מהממוצע במשק</strong>. כ-<strong>25,200 משרות חדשות בשנה</strong>. הצמיחה מואצת ע"י דרישה לאופטימיזציה של תהליכים בעידן <span class="lat">AI</span>.</div>
          <div class="source">
            <span class="source-tag">BLS · 2026</span>
            <a href="https://www.bls.gov/ooh/architecture-and-engineering/industrial-engineers.htm" target="_blank">U.S. Bureau of Labor Statistics</a>
          </div>
        </div>
        <div class="why-card">
          <div class="num">$107K</div>
          <div class="t">שכר חציוני שנתי בארה"ב</div>
          <div class="d">השכר הממוצע <strong>גבוה ב-25% מהממוצע למקצועות אקדמיים</strong>. בישראל — סטארטר ~₪25-35K, בכירים ₪50-85K (לפי <span class="lat">LinkedIn / Glassdoor IL</span>, אפריל 2026).</div>
          <div class="source">
            <span class="source-tag">U.S. NEWS · 2026</span>
            <a href="https://money.usnews.com/careers/best-jobs/industrial-engineer" target="_blank">Industrial Engineer Salary</a>
          </div>
        </div>
        <div class="why-card">
          <div class="num">~60%</div>
          <div class="t">מהבוגרים — מחוץ לייצור</div>
          <div class="d">רוב הבוגרים פונים ל-<strong>ניהול, ייעוץ, מוצר, דאטה ותחום הטק</strong>. תעשייה וניהול היא הדלת הרחבה ביותר בהנדסה לעולם הביזנס.</div>
          <div class="source">
            <span class="source-tag">RESEARCH · 2026</span>
            <a href="https://research.com/advice/ai-automation-and-the-future-of-industrial-engineering-degree-careers" target="_blank">research.com</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
/* SLIDE 5: OLD vs NEW IE - The job description has changed */
export function slide5() {
  const eras = [
    {
      year: '2010',
      tag: 'PRE-DATA',
      industry: 'Industry 3.0',
      title: 'מהנדס/ת קווי ייצור',
      kw: 'פיזי · ידני · רצפת ייצור',
      skills: ['TAKT time studies', 'AutoCAD · planning', 'Lean · 5S · Kaizen', 'FMEA · MRP', 'Six Sigma', 'Work measurement']
    },
    {
      year: '2015',
      tag: 'EARLY DIGITAL',
      industry: 'Industry 4.0',
      title: 'מהנדס/ת תהליכים',
      kw: 'דיגיטציה · ERP · תהליכים',
      skills: ['SAP · Oracle ERP', 'BPMN · process mapping', 'Excel מתקדם · pivot', 'KPI dashboards', 'project management', 'process automation']
    },
    {
      year: '2020',
      tag: 'DATA-FIRST',
      industry: 'Industry 4.0+',
      title: 'מהנדס/ת דאטה ותפעול',
      kw: 'דאטה · ענן · אנליטיקה',
      skills: ['SQL · Python בסיסי', 'Power BI · Tableau', 'Salesforce · HubSpot', 'Agile · Scrum', 'A/B testing', 'cloud platforms']
    },
    {
      year: '2026',
      tag: 'AI-NATIVE',
      industry: 'Industry 5.0',
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
      <div class="era-industry"><span class="lat">${e.industry}</span></div>
      <div class="era-year">${e.year}</div>
      <div class="era-tag">${e.tag}</div>
      <div class="era-title">${e.title}</div>
      <div class="era-kw">${e.kw}</div>
      <ul class="era-skills">
        ${e.skills.map(s => `<li><span class="lat">${s}</span></li>`).join('')}
      </ul>
    </div>`;
  }).join('');
  return `
    ${topbar(5, 'TRANSFORMATION')}
    <div class="frame vs-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>03 · המקצוע משתנה</span>
        <h2 style="margin-top:8px">אותו תואר אקדמי. <em>עבודה שונה לגמרי.</em></h2>
        <p class="lead">
          המקצוע לא נעלם — <strong>הוא <em>בלע</em> את הטכנולוגיה</strong>. כל 5-7 שנים הכלים מתחלפים:
          מדידת זמנים ידנית → <span class="lat">ERP</span> → ניתוח דאטה → <span class="lat">AI</span> ואוטומציה.
          <strong>אבל הליבה — אופטימיזציה של מערכות אנוש-מכונה — לא משתנה.</strong> 
          זו הסיבה שמי שלמד תעשייה וניהול ב-2010 עדיין רלוונטי ב-2026 — אם רכש את הכלים החדשים.
        </p>
      </div>
      <div class="timeline-evolution anim-fade" style="animation-delay:0.3s">
        ${cells}
      </div>
      <div class="evolution-source anim-fade" style="animation-delay:0.5s">
        <span class="source-tag">SOURCES · VERIFIED 04/2026</span>
        <a href="https://aiiem.org/how-industrial-engineering-is-changing-the-world-in-2025/" target="_blank">AIIEM · 2025</a> ·
        <a href="https://www.mdpi.com/2227-7080/14/2/81" target="_blank">MDPI · Mechatronics Evolution 01/2026</a> ·
        <a href="https://research.com/careers/industrial-engineering-careers" target="_blank">Research.com IE Careers 2026</a> ·
        <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">WEF Future of Jobs 2025</a>
      </div>
    </div>
  `;
}
/* SLIDE 6: THE 39% CHART */
export function slide6() {
  return `
    ${topbar(6, 'DATA · 1/3')}
    <div class="frame chart-slide">
      <div class="grid">
        <div class="left">
          <span class="label anim-fade"><span class="ldot"></span>04 · הנתון</span>
          <h2 class="anim-up">
            <span class="accent">39%</span> מהמיומנויות שלכם<br/>
            ישתנו עד <span class="lat">2030</span>.
          </h2>
          <p class="lead anim-up" style="animation-delay:0.2s">
            זה לא ניחוש. זה ממצא של פורום הכלכלה העולמי, מסקר של <strong>1,043 מעסיקים גלובליים</strong> 
            המעסיקים יחד <strong>14 מיליון עובדים</strong>.
          </p>
          <p class="anim-up" style="animation-delay:0.3s; margin-top:10px; font-size:clamp(0.85rem, 1.05vw, 0.95rem); color:#A0A0AE; line-height:1.5">
            הנתון ירד מ-57% ב-2020 ל-44% ב-2023 ל-39% ב-2025. 
            <strong style="color:#FFB627">לא כי השינוי נעצר — אלא כי כבר התחלנו להסתגל.</strong>
          </p>
          <div class="anim-up chart-insights" style="animation-delay:0.4s;">
            <div class="ci-title">איזה מיומנויות בעצם משתנות?</div>
            <div class="ci-row">
              <div class="ci-tag tag-grow">↑ עולות</div>
              <div class="ci-text"><span class="lat">AI · big data · cybersecurity · creative thinking · analytical thinking · resilience</span></div>
            </div>
            <div class="ci-row">
              <div class="ci-tag tag-fall">↓ דועכות</div>
              <div class="ci-text">manual dexterity · endurance · precision · קריאה/כתיבה בסיסית · עבודה ידנית טכנית</div>
            </div>
            <div class="ci-row">
              <div class="ci-tag tag-watch">⚠ הפואנטה</div>
              <div class="ci-text"><strong>"התחלנו להסתגל"</strong> = 50% מהעובדים בעולם <em>כבר עברו הכשרה מחדש</em>. מי שעוד לא — נופל מאחור.</div>
            </div>
          </div>
        </div>
        <div class="data-card anim-scale" style="animation-delay:0.4s">
          <div>
            <div class="chart-title">שינוי במיומנויות נדרשות לעובדים</div>
            <div class="chart-subtitle">% מהמיומנויות שיעברו טרנספורמציה — לפי <span class="lat">WEF Future of Jobs</span></div>
          </div>
          <svg viewBox="0 0 480 240" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#FF6B35" stop-opacity="0.4"/>
                <stop offset="100%" stop-color="#FF6B35" stop-opacity="0"/>
              </linearGradient>
            </defs>
            <line x1="50" y1="20" x2="50" y2="200" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <line x1="50" y1="200" x2="450" y2="200" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
            <text x="40" y="40" fill="#6B6B7B" font-size="10" text-anchor="end" font-family="Inter">60%</text>
            <text x="40" y="100" fill="#6B6B7B" font-size="10" text-anchor="end" font-family="Inter">40%</text>
            <text x="40" y="160" fill="#6B6B7B" font-size="10" text-anchor="end" font-family="Inter">20%</text>
            <text x="40" y="200" fill="#6B6B7B" font-size="10" text-anchor="end" font-family="Inter">0%</text>
            <text x="100" y="220" fill="#A0A0AE" font-size="11" text-anchor="middle" font-family="Inter">2020</text>
            <text x="240" y="220" fill="#A0A0AE" font-size="11" text-anchor="middle" font-family="Inter">2023</text>
            <text x="380" y="220" fill="#A0A0AE" font-size="11" text-anchor="middle" font-family="Inter">2025</text>
            <path d="M 100 80 L 240 119 L 380 134 L 380 200 L 100 200 Z" fill="url(#lineGrad)"/>
            <path d="M 100 80 L 240 119 L 380 134" fill="none" stroke="#FF6B35" stroke-width="3" stroke-linecap="round"/>
            <circle cx="100" cy="80" r="6" fill="#FF6B35"/>
            <circle cx="240" cy="119" r="6" fill="#FF6B35"/>
            <circle cx="380" cy="134" r="8" fill="#FFB627" stroke="#FF6B35" stroke-width="2"/>
            <text x="100" y="68" fill="#FFFFFF" font-size="13" text-anchor="middle" font-family="Inter" font-weight="700">57%</text>
            <text x="240" y="107" fill="#FFFFFF" font-size="13" text-anchor="middle" font-family="Inter" font-weight="700">44%</text>
            <text x="380" y="120" fill="#FFB627" font-size="14" text-anchor="middle" font-family="Inter" font-weight="800">39%</text>
          </svg>
          <div class="legend">
            <div class="item">
              <span class="swatch" style="background:#FF6B35"></span>
              <span>% מיומנויות שיעברו טרנספורמציה</span>
            </div>
          </div>
          <div class="source">
            <span class="source-tag">WEF 2025</span>
            <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report 2025</a>
            · עמוד 5 · ינואר 2025
          </div>
        </div>
      </div>
    </div>
  `;
}

/* SLIDE 7: 4 STAT CARDS */
export function slide7() {
  return `
    ${topbar(7, 'DATA · 2/3')}
    <div class="frame stats">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>05 · עוד 4 מספרים</span>
        <h2 style="margin-top:8px">השוק בתנועה. <span class="accent">סיפור של אופטימיות זהירה.</span></h2>
        <p class="lead" style="margin-top:6px">
          <strong>הסיפור:</strong> צמיחה נטו, אבל פערי מיומנויות עצומים. 
          <strong>הסכנה לכם:</strong> אם תישארו עם הכלים של היום, תהיו מאחור עוד שנתיים. 
          <strong>ההזדמנות:</strong> הפרמיה של 25-43% למי שזריז יותר.
        </p>
      </div>
      <div class="grid anim-fade" style="animation-delay:0.3s">
        <div class="stat-card">
          <div class="stat-num">+78<span class="unit">M</span></div>
          <div class="stat-label">משרות נטו <span class="lat">2025–2030</span></div>
          <div class="stat-desc">170 מיליון משרות חדשות, 92 מיליון נעלמות. <strong>נטו: גידול של 78 מיליון משרות בעולם.</strong></div>
          <div class="source">
            <span class="source-tag">WEF 2025</span>
            <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report</a>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-num">86<span class="unit">%</span></div>
          <div class="stat-label">מהמעסיקים: <span class="lat">AI</span> ישנה את העסק</div>
          <div class="stat-desc"><strong>86% מהמעסיקים</strong> צופים שבינה מלאכותית ועיבוד מידע ישנו את הארגון שלהם עד 2030.</div>
          <div class="source">
            <span class="source-tag">WEF 2025</span>
            <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report</a>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-num">25<span class="unit">%</span></div>
          <div class="stat-label">פרמיית שכר על שליטה ב-<span class="lat">AI</span></div>
          <div class="stat-desc">עובדים עם מיומנויות <span class="lat">AI</span> מרוויחים <strong>בממוצע 25% יותר</strong>. בתפקידי הטק זה מגיע ל-43%.</div>
          <div class="source">
            <span class="source-tag">PwC</span>
            <a href="https://www.pwc.com/gx/en/issues/artificial-intelligence/ai-jobs-barometer.html" target="_blank">PwC 2025 AI Jobs Barometer</a>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-num">63<span class="unit">%</span></div>
          <div class="stat-label">מהמעסיקים: מחסור במיומנויות</div>
          <div class="stat-desc">נתון חדש מדו"ח <span class="lat">2026</span>. <strong>זו לא חוסר במשרות — זה חוסר באנשים מתאימים.</strong></div>
          <div class="source">
            <span class="source-tag">WEF 2026</span>
            <a href="https://www.weforum.org/publications/the-future-of-jobs-report-2025/" target="_blank">Future of Jobs Report 2026</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

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

/* SLIDE 9: SENIOR JOBS - real senior listings */
export function slide9() {
  const jobs = [
    {
      tag: 'AI PM',
      title: 'AI Product Manager / Tech Lead',
      co: 'monday.com', loc: 'תל אביב',
      coDesc: 'פלטפורמת work-management · 175K לקוחות',
      logo: 'm', logoColor: '#FF3D57', logoSlug: 'mondaydotcom',
      salary: '~₪45-65K/חודש',
      role: 'מה תעשו: מובילים פיתוח AI agents, אוטונומיים וגנרטיביים.',
      req: 'דורש: 5+ שנות ניסיון במוצר/AI.'
    },
    {
      tag: 'AI LEAD',
      title: 'Enterprise AI CoE Manager',
      co: 'Payoneer', loc: 'פתח תקווה',
      coDesc: 'תשלומים גלובליים · ~2,500 עובדים',
      logo: 'P', logoColor: '#FF4800', logoSlug: 'payoneer',
      salary: '~₪50-70K/חודש',
      role: 'מה תעשו: מובילים את ה-Center of Excellence ל-AI ברמת הארגון.',
      req: 'דורש: ניהול תוכניות חוצות-ארגון.'
    },
    {
      tag: 'SENIOR',
      title: 'Lead AI Transformation',
      co: 'Plus500', loc: 'רעננה',
      coDesc: 'מסחר אונליין · חברה ציבורית בלונדון',
      logo: 'P', logoColor: '#1A4D8C',
      salary: '~₪55-75K/חודש',
      role: 'מה תעשו: מובילים את חזית ה-ML וההטמעה בפינטק.',
      req: 'דורש: רקע ב-ML production.'
    },
    {
      tag: 'STAFF',
      title: 'Staff AI Researcher / ML Engineer',
      co: 'NVIDIA Israel', loc: 'יקנעם',
      coDesc: 'יצרנית שבבי AI · ~3,000 עובדים בישראל',
      logo: 'N', logoColor: '#76B900', logoSlug: 'nvidia',
      salary: '~₪65-85K+/חודש',
      role: 'מה תעשו: מחקר ופיתוח ML ברמה הגבוהה ביותר.',
      req: '400 משרות פתוחות. דורש: PhD/ניסיון מחקרי.'
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
        <span class="source-tag">SOURCES</span>
        <a href="https://builtin.com/jobs/mena/israel/dev-engineering/search/artificial-intelligence" target="_blank">builtin.com/israel</a> ·
        <a href="https://startup.jobs/locations/israel" target="_blank">startup.jobs</a> ·
        <a href="https://www.glassdoor.com/Job/israel-artificial-intelligence-jobs-SRCH_IL.0,6_IN119_KO7,30.htm" target="_blank">glassdoor IL · 296 AI jobs</a>
      </div>
    </div>
  `;
}
/* SLIDE 10: 3 QUOTES from global AI leaders */
export function slide10() {
  return `
    ${topbar(10, 'VOICES')}
    <div class="frame quotes-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>08 · מה אומרים מי שבונים את זה</span>
        <h2 style="margin-top:14px">שלושה אנשים. <span class="accent">אותו מסר.</span></h2>
        <p class="lead">
          המנהיגים שמובילים את ה-<span class="lat">AI</span> בעולם לא חושבים שהמקצועות נעלמים. הם חושבים 
          ש<strong>הצורה משתנה</strong>. שזה מגביר אנושיות. שצריך עוד אנשים, לא פחות.
        </p>
      </div>
      <div class="quotes-grid anim-fade" style="animation-delay:0.3s">
        <div class="quote-card">
          <img class="quote-photo" src="data:image/jpeg;base64,${ALTMAN_B64}" alt="Sam Altman" />
          <div class="qmark">"</div>
          <div class="qtext">
            <em>"The shape of jobs will change."</em><br/>
            צורת העבודה תשתנה — אנשים יוכלו להגיע ל<em>גבהים גדולים יותר</em> בעזרת הכלים האלה.
          </div>
          <div class="qauthor">Sam Altman</div>
          <div class="qrole"><span class="lat">CEO</span>, OpenAI · נאום ב-Harvard, 2024</div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#10A37F"><img src="https://cdn.simpleicons.org/openai/ffffff" alt="OpenAI" /></span>
            <span class="qco-name">OpenAI</span>
            <span class="qco-desc">יוצרי ChatGPT · 800M משתמשים שבועיים</span>
          </div>
          <div class="qsource">
            <a href="https://www.hbs.edu/bigs/sam-altman-harvard-business-school" target="_blank">hbs.edu/bigs/sam-altman</a>
          </div>
        </div>
        <div class="quote-card">
          <img class="quote-photo" src="data:image/jpeg;base64,${HASSABIS_B64}" alt="Demis Hassabis" />
          <div class="qmark">"</div>
          <div class="qtext">
            <em>"AI as an amplifier of human ingenuity."</em><br/>
            ה-<span class="lat">AI</span> הוא <em>מגבר של גאוניות אנושית</em>. נצטרך הרבה יותר חוקרים בכל התחומים, לא פחות.
          </div>
          <div class="qauthor">Demis Hassabis</div>
          <div class="qrole">Nobel Chemistry 2024 · <span class="lat">CEO</span>, Google DeepMind · ראיון ב-TIME 2025</div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#4285F4"><img src="https://cdn.simpleicons.org/googledeepmind/ffffff" alt="Google DeepMind" /></span>
            <span class="qco-name">Google DeepMind</span>
            <span class="qco-desc">המעבדה שיצרה את AlphaFold ו-Gemini</span>
          </div>
          <div class="qsource">
            <a href="https://time.com/7280740/demis-hassabis-interview/" target="_blank">time.com/demis-hassabis</a>
          </div>
        </div>
        <div class="quote-card">
          <img class="quote-photo" src="data:image/jpeg;base64,${MATIAS_B64}" alt="Yossi Matias" />
          <div class="qmark">"</div>
          <div class="qtext">
            <em>"We're going to need many more researchers in all disciplines."</em><br/>
            עם <span class="lat">AlphaFold</span>, <em>יש לנו יותר חוקרי חלבונים, לא פחות.</em> הם עכשיו עובדים על שאלות גדולות יותר.
          </div>
          <div class="qauthor">Yossi Matias · יוסי מטיאס</div>
          <div class="qrole"><span class="lat">VP</span> Engineering & Research, Google · בוגר ת״א</div>
          <div class="qcompany">
            <span class="qco-logo" style="background:#EA4335"><img src="https://cdn.simpleicons.org/google/ffffff" alt="Google" /></span>
            <span class="qco-name">Google Israel</span>
            <span class="qco-desc">מרכז המחקר הגדול של גוגל מחוץ לארה״ב · ת״א</span>
          </div>
          <div class="qsource">
            <a href="https://www.bigtechnology.com/p/google-research-head-yossi-matias" target="_blank">bigtechnology.com/yossi-matias</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* SLIDE 11: DANIEL SCHREIBER - the personal connection to Lemonade */
export function slide11() {
  return `
    ${topbar(11, 'CLOSE TO HOME')}
    <div class="frame schreiber-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>09 · הציטוט שגרם לי לקבל את ההחלטה</span>
        <h2 style="margin-top:14px"><em>"החייזרים נחתו —</em><br/>והם מוכנים לעבוד <em>בחינם."</em></h2>
      </div>
      <div class="grid anim-fade" style="animation-delay:0.3s">
        <div class="schreiber-quote">
          <div class="lbl">JANUARY 2025 · TEL AVIV</div>
          <div class="qtext">
            "לא הוספנו אף עובד אחד בשלוש השנים מאז שפגשנו את <span class="lat">ChatGPT</span>. 
            ה<em>רווח הגולמי שלנו גדל ב-100% בשנה</em>, אבל מבנה העלויות עלה רק ב-3%. 
            <em>החייזרים</em> כבר פה."
          </div>
          <div class="meta">
            <strong>דניאל שרייבר</strong> — מייסד ומנכ"ל <span class="lat">Lemonade</span>, יו"ר מכון <span class="lat">MOSAIC</span> למדיניות <span class="lat">AI</span>. 
            דיבר באירוע "ישראל 2.0" של כלכליסט ובהרצאתו המפורסמת בינואר 2025.
          </div>
          <div class="personal">
            <strong>הדבר הכי מטריף בכל הסיפור הזה:</strong> בעוד 5 ימים, ב-10/5, אני מתחיל לעבוד <span class="lat">L&D Lead Tech Dev</span> ב-<span class="lat">Lemonade</span> — 
            בדיוק החברה הזו. <strong>תפקידי: ללמד את צוות ה-Product וה-R&D לעבוד עם החייזרים.</strong>
          </div>
          <div class="source">
            <span class="source-tag">SOURCES</span>
            <a href="https://www.youtube.com/watch?v=5gqtckj0Ohc" target="_blank">YouTube · ההרצאה המלאה</a> ·
            <a href="https://www.calcalistech.com/ctechnews/article/inu71yqd6" target="_blank">CTech · ישראל 2.0</a>
          </div>
        </div>
        <div class="video-container">
          <iframe class="schreiber-iframe" src="https://www.youtube.com/embed/5gqtckj0Ohc?rel=0" title="Daniel Schreiber - The Aliens Have Landed" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
        </div>
        <!-- old fallback link removed -->
        <div style="display:none">
          <a href="https://www.youtube.com/watch?v=5gqtckj0Ohc" target="_blank" rel="noopener" class="video-wrap" style="display:block; text-decoration:none; cursor:pointer; position:relative;">
            <img src="https://img.youtube.com/vi/5gqtckj0Ohc/maxresdefault.jpg" alt="Daniel Schreiber - The Aliens Have Landed" style="width:100%; height:100%; object-fit:cover; display:block;" onerror="this.src='https://img.youtube.com/vi/5gqtckj0Ohc/hqdefault.jpg'" />
            <div style="position:absolute; inset:0; background:linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.5)); display:flex; align-items:center; justify-content:center;">
              <div class="play-btn-pulse" style="width:72px; height:72px; border-radius:50%; background:rgba(255,107,53,0.95); display:flex; align-items:center; justify-content:center; box-shadow:0 8px 32px rgba(255,107,53,0.5);">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style="margin-right:-3px"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div style="position:absolute; bottom:12px; right:12px; left:12px; color:white; font-size:0.85rem; font-weight:600; text-shadow:0 2px 8px rgba(0,0,0,0.8); line-height:1.3;">
              "החייזרים נחתו" · ההרצאה המלאה ב-<span class="lat">YouTube</span>
            </div>
          </a>
          <div class="video-caption">
            <a href="https://www.youtube.com/watch?v=5gqtckj0Ohc" target="_blank" rel="noopener">youtube.com/watch?v=5gqtckj0Ohc</a> · 
            דניאל שרייבר · ינואר 2025 · 14 דקות
          </div>
        </div>
      </div>
    </div>
  `;
}

/* SLIDE ARTICLE - Calcalist 1.5.26 - The juniors are coming back */
export function slideArticle() {
  return `
    ${topbar(12, 'CALCALIST · 01.05.26')}
    <div class="frame article-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>10 · הכתבה שפורסמה לפני 4 ימים</span>
        <h2 style="margin-top:14px">"<em>הג'וניורים חוזרים?</em>"<br/>זה לא ספוילר — זה <span class="accent">החדשות.</span></h2>
      </div>
      <div class="grid anim-fade" style="animation-delay:0.3s">
        <div class="article-clip">
          <div class="ctech-brand">
            <span class="ctech-logo">כלכליסט</span>
            <span class="ctech-section">Tech@Work</span>
            <span class="ctech-date">01.05.26 · 07:30</span>
          </div>
          <div class="head1">הג'וניורים חוזרים? לצד פיטורי הענק, בהייטק <em>בונים על צעירי דור ה-AI</em></div>
          <div class="head2">
            מ-<span class="lat">IBM</span>, דרך סיילספורס ועד לסטארט-אפים ישראלים, בחלק מחברות ההייטק עוברים לגייס
            <strong>לפי כישורים, לא לפי ותק וניסיון</strong>, וכך, סטודנטים ואקדמאים טריים עם גישה ל-<span class="lat">AI</span>
            מצליחים לעקוף את המסלול המסורתי — היישר לתפקידי המפתח.
          </div>
          <div class="article-highlights">
            <div class="ah-row">
              <span class="ah-icon">▸</span>
              <span><strong>גיוס לפי כישורים</strong> — לא לפי ותק. מי ששולט ב-<span class="lat">AI</span> מקבל את התפקיד.</span>
            </div>
            <div class="ah-row">
              <span class="ah-icon">▸</span>
              <span>בוגרים טריים <strong>עוקפים את המסלול הקלאסי</strong> — היישר לתפקידי המפתח.</span>
            </div>
            <div class="ah-row">
              <span class="ah-icon">▸</span>
              <span>החברות מחפשות <strong>גישה לכלים החדשים</strong>, לא 5 שנות ניסיון.</span>
            </div>
          </div>
          <div class="author">
            <strong>מעין מנלה</strong> · כתבת קריירה · כלכליסט
          </div>
        </div>
        <div class="article-side">
          <div class="article-stat-grid">
            <div class="art-stat">
              <div class="as-num">1,000</div>
              <div class="as-lbl">בוגרים שמגייסת <span class="lat">Salesforce</span> השנה</div>
            </div>
            <div class="art-stat">
              <div class="as-num">↓</div>
              <div class="as-lbl">סניורים מסורתיים נדחקים החוצה</div>
            </div>
            <div class="art-stat highlight">
              <div class="as-num">↑</div>
              <div class="as-lbl"><strong>אתם</strong> נכנסים ישר לתפקידי המפתח</div>
            </div>
          </div>
          <div class="article-pull">
            <div class="pull-text">
              "אנחנו מגייסים כרגע <em>1,000 בוגרי אוניברסיטאות ומתמחים חדשים</em> כדי לרכוב על העקומה האקספוננציאלית של ה-<span class="lat">AI</span>. הבוגרים הטריים האלה הם אלה <em>שבונים אותו</em>."
            </div>
            <div class="pull-source">
              <strong>Marc Benioff</strong> · <span class="lat">CEO</span> Salesforce · <span class="lat">X</span>, 04/2026
            </div>
          </div>
          <div class="article-takeaway">
            <strong>הקליק</strong> — הסיפור הזה הוא <strong>בדיוק עליכם</strong>. 
            בוגרים טריים, ללא תפיסות קדומות, עם גישה ל-<span class="lat">AI</span> — <em>עוקפים</em> את המסלול הקלאסי, היישר לתפקידי המפתח. 
            <strong>אתם בעמדה הכי חזקה שיש.</strong>
          </div>
          <div class="article-link">
            <span class="source-tag">SOURCE</span>
            <a href="https://www.calcalist.co.il/calcalistech/article/bjphxyxc11g" target="_blank" rel="noopener">calcalist.co.il</a> · פורסם 1.5.26
          </div>
        </div>
      </div>
    </div>
  `;
}

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

/* SLIDE 13: 3D system view */
export function slide13() {
  return `
    ${topbar(14, 'SYSTEMS VIEW')}
    <div class="frame three-slide">
      <div class="three-top">
        <div class="three-intro">
          <span class="label anim-fade"><span class="ldot"></span>11 · המבט מלמעלה</span>
          <h2 class="anim-up">
            התפקיד שלכם:<br/>
            לראות את <em>המערכת השלמה.</em>
          </h2>
          <p class="anim-up" style="animation-delay:0.2s">
            <span class="lat">AI</span> רואה צמתים. אתם רואים את <strong>הקשרים ביניהם</strong>.
            איפה הזרימה נתקעת, איפה יש כפילות, איפה לא נצרך. <em>זה מה שלימדו אתכם בפקולטה</em> — ואין לזה תחליף.
          </p>
        </div>
        <div class="three-host" id="threeHost">
          <div class="three-tag">SYSTEM VIEW · IE 2026</div>
          <div class="three-foot">live · interactive</div>
          <div class="three-legend">
            <div class="item"><span class="swatch" style="background:#FF6B35"></span><span>YOU</span></div>
            <div class="item"><span class="swatch" style="background:#FFB627"></span><span>HUMANS</span></div>
            <div class="item"><span class="swatch" style="background:#00D9C0"></span><span>AI AGENTS</span></div>
          </div>
        </div>
      </div>
      <div class="systems-examples anim-fade" style="animation-delay:0.35s">
        <div class="sys-ex">
          <div class="sys-ex-num">01</div>
          <div class="sys-ex-t">שינוי בקופה → גלים בכל הארגון</div>
          <div class="sys-ex-d">משנים מסך תשלום → עומס בשירות לקוחות, שינוי במחסן, עיכוב במשלוח. <strong>אתם רואים את כל ההשפעות.</strong></div>
        </div>
        <div class="sys-ex">
          <div class="sys-ex-num">02</div>
          <div class="sys-ex-t"><span class="lat">Bottleneck</span> בייצור = פקק בכל ה-<span class="lat">supply chain</span></div>
          <div class="sys-ex-d">תחנה אחת איטית עוצרת את כל הקו. <strong>אתם מזהים את החוליה החלשה</strong> לפני שהיא הופכת למשבר.</div>
        </div>
        <div class="sys-ex">
          <div class="sys-ex-num">03</div>
          <div class="sys-ex-t">דאטה רעה בקלט = החלטות רעות בכל הארגון</div>
          <div class="sys-ex-d"><span class="lat">Garbage in, garbage out</span>. <strong>אתם בודקים את המקור</strong> — לא רק את הפלט של ה-<span class="lat">AI</span>.</div>
        </div>
      </div>
      <div class="systems-closing anim-up" style="animation-delay:0.55s">
        <span class="lat">AI</span> יכול לעבד דאטה. <em>רק אתם</em> רואים את <strong>הקשרים בין הצמתים.</strong>
      </div>
    </div>
  `;
}

/* SLIDE 14: MY AI STORY */
export function slide14() {
  const projs = [
    { tag: 'FOR HOME', t: 'אפליקציית ניהול משפחה', d: 'אפליקציה אישית — לוח משמורת, משימות לילדים, רשימות ומטלות בית. <strong>פתרה לי בעיה אמיתית בחיים</strong>, עם דאטה מסודרת והתראות.', tools: ['Base44', 'Lovable'], img: FAMILY_APP_B64, imgType: 'png', live: false },
    { tag: 'FOR WORK', t: 'אפליקציית משימת בית · Lemonade', d: 'בניתי בעצמי, לפני שהתחלתי בלמונייד, אפליקציה שפותרת בעיה אמיתית בארגון. <strong>זה המוצר שהביא אותי לתפקיד.</strong> רץ עכשיו: <span class="lat">amj-lemonade.onrender.com</span>', tools: ['Base44', 'Render'], img: LEMONADE_APP_B64, imgType: 'png', live: true },
    { tag: 'FOR TONIGHT', t: 'המצגת הזו · You\'re looking at it', d: 'מה שאתם רואים עכשיו. נבנתה ב-Claude — מהמחקר, דרך העיצוב, עד הקוד. <strong>אפס שורות שכתבתי בעצמי.</strong> כל אנימציה, כל גרף, כל שקף — שיחה.', tools: ['Claude', 'HTML/CSS', 'Three.js'], img: null, live: false }
  ];
  const cards = projs.map(p => `
    <div class="proj-card">
      ${p.img ? `<div class="proj-image-wrap">
        ${p.live ? '<span class="live-badge">● LIVE</span>' : ''}
        <img src="data:image/${p.imgType};base64,${p.img}" alt="${p.t}" />
      </div>` : `<div class="proj-image-wrap" style="background:linear-gradient(135deg,#0A0A0F,#1a1a24);display:flex;align-items:center;justify-content:center;">
        <div style="text-align:center;color:#FF6B35;font-family:'Inter',monospace;">
          <div style="font-size:0.65rem;letter-spacing:0.1em;">YOU ARE HERE</div>
          <div style="font-size:1.6rem;font-weight:900;margin-top:4px;">→ THIS ←</div>
        </div>
      </div>`}
      <div class="proj-content">
        <span class="pj-tag">${p.tag}</span>
        <div class="pj-title">${p.t}</div>
        <div class="pj-desc">${p.d}</div>
        <div class="ptools" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:auto;">${p.tools.map(t => `<span class="tool">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
  return `
    ${topbar(15, 'MY AI WORK')}
    <div class="frame ai-story">
      <span class="label anim-fade"><span class="ldot"></span>12 · מה אני עושה <em>בסופי שבוע</em></span>
      <h2 class="anim-up" style="margin:6px 0 0;">
        אני <span class="accent">בונה</span>. ואתם יכולים <em>גם.</em>
      </h2>
      <p class="lead anim-up" style="animation-delay:0.2s; max-width:1200px;">
        לא כתבתי שורת קוד מאז התואר. ובכל זאת בניתי 3 אפליקציות שעובדות עם <span class="lat">Base44</span>, <span class="lat">Claude</span>, וכלי <span class="lat">no-code</span>. <strong>זו היכולת החדשה שאתם חייבים לעצמכם.</strong>
      </p>
      <div class="grid" style="grid-template-columns:repeat(3,1fr); gap:clamp(10px,1.4vw,16px); flex:1; min-height:0; align-items:stretch;">
        ${cards}
      </div>
    </div>
  `;
}
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

/* SLIDE 16: 90-DAY ROADMAP */
export function slide16() {
  return `
    ${topbar(17, 'ROADMAP')}
    <div class="frame roadmap">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>14 · מה לעשות מחר בבוקר</span>
        <h2 style="margin-top:14px">תוכנית <span class="accent">90 יום.</span></h2>
        <p class="lead">
          לא צריך לחכות לסיום התואר. תתחילו <strong>השבוע</strong>. אלה שלושים-שלושים-שלושים יום של בנייה הדרגתית.
        </p>
      </div>
      <div class="roadmap-flow anim-fade" style="animation-delay:0.3s">
        <div class="phase-card">
          <div class="phase-head">
            <div class="phase-num">30</div>
            <span class="phase-tag">DAYS · ABSORB</span>
          </div>
          <ol>
            <li><span class="num">01</span><div>תרשמו ל-<span class="lat">Claude Pro / ChatGPT Plus</span>. 20$ לחודש. השקעה הכי טובה שתעשו.</div></li>
            <li><span class="num">02</span><div>תעבדו עם <span class="lat">AI</span> כל יום. שיעורי בית, סיכומים, ניתוחים. <em>תיקחו את היד</em>.</div></li>
            <li><span class="num">03</span><div>תעקבו אחרי 5 חשבונות <span class="lat">AI</span> ב-<span class="lat">LinkedIn / X</span>. התמונה תתבהר.</div></li>
          </ol>
        </div>
        <div class="arrow">→</div>
        <div class="phase-card">
          <div class="phase-head">
            <div class="phase-num">60</div>
            <span class="phase-tag">DAYS · BUILD</span>
          </div>
          <ol>
            <li><span class="num">04</span><div>תבנו <em>פרויקט אישי אחד</em> מסיים. אפליקציה, בוט, אוטומציה — כל דבר.</div></li>
            <li><span class="num">05</span><div>תלמדו <span class="lat">SQL</span> בסיסי. <span class="lat">Khan Academy</span> ב-10 שעות.</div></li>
            <li><span class="num">06</span><div>תרשמו פוסט אחד ב-<span class="lat">LinkedIn</span> על מה שבניתם. <em>פומבי או שלא היה</em>.</div></li>
          </ol>
        </div>
        <div class="arrow">→</div>
        <div class="phase-card last">
          <div class="phase-head">
            <div class="phase-num">90</div>
            <span class="phase-tag">DAYS · LAND</span>
          </div>
          <ol>
            <li><span class="num">07</span><div>תגישו ל-<em>3 משרות סטאז'</em> או חצי-משרה. עם תיק עבודות אמיתי.</div></li>
            <li><span class="num">08</span><div>תהיו ב-<em>אירוע אחד</em> פיזי של <span class="lat">AI / IE</span>. אנשים מגייסים לאנשים.</div></li>
            <li><span class="num">09</span><div>תקבעו את היעד הבא. <em>איפה אתם רוצים להיות בעוד שנה?</em></div></li>
          </ol>
        </div>
      </div>
    </div>
  `;
}

/* SLIDE 17: WHAT I'D DO DIFFERENTLY */
export function slide17() {
  const lessons = [
    { num: '01', t: 'הייתי בונה <em>פומבי</em> מהיום הראשון', d: 'לקח לי 14 שנה להבין את זה. <strong>GitHub. LinkedIn. בלוג.</strong> לא משנה הרמה — להראות שאתה בונה. זה הקו"ח האמיתי שלך.' },
    { num: '02', t: 'הייתי בוחר <em>פחות תאוריה, יותר מעשה</em>', d: 'הקורסים החזקים ביותר היו אלה שבנינו בהם משהו אמיתי. הסמינריון הסטטיסטי שעשיתי? שכחתי מזמן. הפרויקט עם החברה? עדיין משפיע.' },
    { num: '03', t: 'הייתי לומד <em>תקשורת לפני אקסל</em>', d: 'אקסל לומדים בשבועיים. <strong>איך מציגים מסקנה ב-3 דקות</strong> לוקח 10 שנים. תתחילו עכשיו, בכיתה.', highlight: true },
    { num: '04', t: 'הייתי <em>עוזב</em> מהר יותר', d: 'נשארתי בכל תפקיד יותר מדי. החברות שלמדתי בהן הכי הרבה — לא אלו שעבדתי בהן, אלו שעזבתי אליהן. <strong>תזוזה היא הכלי הכי חזק לפיתוח קריירה</strong>.' }
  ];
  const cards = lessons.map(l => `
    <div class="lesson-card ${l.highlight ? 'highlight' : ''}">
      <div class="lesson-num">${l.num}</div>
      <div class="lesson-t">${l.t}</div>
      <div class="lesson-d">${l.d}</div>
    </div>
  `).join('');
  return `
    ${topbar(18, 'IF I COULD DO OVER')}
    <div class="frame different-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>15 · אישי</span>
        <h2 style="margin-top:14px">מה הייתי עושה <em>אחרת</em></h2>
        <p class="lead">
          ארבעה דברים שלא הבנתי בשנה א'. אם הייתם נכנסים לכיתה הזו לפני 14 שנה ומספרים לי אותם, 
          הקריירה שלי הייתה נראית אחרת. <strong>תיקחו את זה אתכם.</strong>
        </p>
      </div>
      <div class="lessons-grid anim-fade" style="animation-delay:0.3s">${cards}</div>
    </div>
  `;
}

/* SLIDE 18: Q&A - questions to spark discussion */
export function slide18() {
  const questions = [
    { n: '01', t: 'איך אדע שלימוד <span class="lat">Python</span> עכשיו לא יהיה מיותר?', h: 'תתחילו מ-<span class="lat">pandas</span> לניתוח דאטה, לא מ-<span class="lat">syntax</span> בסיסי. 5 שעות עם <span class="lat">Claude</span> לידכם = אתם רצים. <strong>רלוונטי עוד 10 שנים בטוח.</strong>' },
    { n: '02', t: 'תארים שניים — <span class="lat">MBA</span> / <span class="lat">M.Sc.</span> / כלום?', h: '<span class="lat">MBA</span> רק אם רוצים ניהול בכיר/<span class="lat">VC</span> (₪200K+שנתיים). <span class="lat">M.Sc.</span> רק ל-<span class="lat">ML Research</span>. <strong>ברוב המקרים — ללמוד תוך כדי עבודה.</strong>' },
    { n: '03', t: 'איך מתחילים לבנות פרויקט בלי רעיון?', h: 'תיקחו דבר שמעצבן אתכם כל יום — טופס, חישוב, מעקב — ותבנו לזה אפליקציה ב-<span class="lat">Base44</span>. <strong>דוגמה: אפליקציית סדר יום לסטודנט בתעשייה וניהול.</strong>' },
    { n: '04', t: 'סטאז\' או משרה ראשונה — מה עדיף?', h: 'סטאז\' (~₪10K) = למידה בלי לחץ. משרה (~₪25K) = הוכחה. <strong>השאלה האמיתית: מי המנטור שלכם?</strong> זה שווה יותר משכר.' },
    { n: '05', t: 'איך מתבלטים ב-<span class="lat">CV</span> בלי ניסיון?', h: 'שלושה דברים: (1) <span class="lat">LinkedIn</span> חי עם פרויקטים אמיתיים. (2) קישור ישיר לאפליקציה שבניתם. (3) <strong>שורה אחת על ה-<span class="lat">AI workflow</span> היומיומי שלכם</strong> — ספציפית.' },
    { n: '06', t: 'משהו שלא הייתי עושה אם הייתי חוזר אחורה?', h: '3 שנים בייעוץ זה הרבה — שנה אחת מספיקה. <span class="lat">MBA</span> אונליין — בזבוז כסף. ולא הייתי מחכה 14 שנה לבנות בפומבי. <strong>תתחילו מחר.</strong>' }
  ];
  const cells = questions.map(q => `
    <div class="q-card">
      <span class="q-num">${q.n}</span>
      <div class="q-title">${q.t}</div>
      <div class="q-hint">${q.h}</div>
    </div>
  `).join('');
  return `
    ${topbar(19, 'Q&A')}
    <div class="frame qs-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>16 · שאלות פתוחות</span>
        <h1 style="margin-top:18px">עכשיו <span class="accent">תורכם.</span></h1>
        <p class="lead">
          הנה כמה שאלות שכדאי שתחשבו עליהן — או פשוט תשאלו מה שמטריד אתכם. 
          אין שאלה טיפשית. הכי טיפשי זה לא לשאול ולצאת בלי תשובה.
        </p>
      </div>
      <div class="qs-grid anim-fade" style="animation-delay:0.3s">${cells}</div>
    </div>
  `;
}

/* SLIDE 19: THANKS + CONTACT */
export function slide19() {
  return `
    ${topbar(20, 'THANKS')}
    <div class="frame thanks-slide">
      <div class="thanks-stack">
        <div class="thanks-hero">
          <div class="photo-wrap-sm anim-scale">
            <img src="data:image/jpeg;base64,${PHOTO_B64}" alt="Liran Shaked" />
          </div>
          <div class="thanks-headings">
            <h1 class="anim-up" style="animation-delay:0.2s">
              תודה.<br/>
              <span class="accent">בהצלחה בדרך.</span>
            </h1>
            <p class="lead anim-up" style="animation-delay:0.4s">
              אני זמין להמשך שיחה — ייעוץ, חיבורים או סתם להגיד שלום.
            </p>
          </div>
        </div>
        <div class="contact-cards-row anim-fade" style="animation-delay:0.55s">
          <a href="https://www.linkedin.com/in/liranshaked-people-operations" target="_blank" rel="noopener" class="contact-card">
            <svg class="ic" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <div class="info"><div class="lbl">LINKEDIN</div><div class="val">liranshaked</div></div>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=liroys1@gmail.com" target="_blank" rel="noopener" class="contact-card">
            <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            <div class="info"><div class="lbl">EMAIL</div><div class="val">liroys1@gmail.com</div></div>
          </a>
          <a href="tel:+972523701120" class="contact-card">
            <svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            <div class="info"><div class="lbl">PHONE</div><div class="val">+972-52-3701120</div></div>
          </a>
        </div>
        <div class="thanks-cta anim-up" style="animation-delay:0.7s">
          <strong>ועוד דבר אחד</strong> — תזכרו: <em>הכלים השתנו, המקצוע לא.</em>
          המקצוע שלכם הוא לראות את <span class="accent">המערכת השלמה</span>. זה לא ייעלם.
        </div>
      </div>
    </div>
  `;
}


export const SLIDES = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slideArticle, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19];
