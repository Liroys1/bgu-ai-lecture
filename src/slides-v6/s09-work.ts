import { tb } from '../slides-v2/helpers';
import { FAMILY_APP_B64, PHOTO_B64 } from '../assets/images';

const LEMONADE_CHART_SVG = `
<svg viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg" class="v6-lem-chart">
  <line x1="32" y1="8" x2="32" y2="118" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <line x1="32" y1="118" x2="248" y2="118" stroke="rgba(255,255,255,0.12)" stroke-width="1"/>
  <text x="28" y="30" text-anchor="end" fill="rgba(255,255,255,0.3)" font-size="8" font-family="monospace">100%</text>
  <text x="28" y="68" text-anchor="end" fill="rgba(255,255,255,0.3)" font-size="8" font-family="monospace">50%</text>
  <line x1="32" y1="26" x2="248" y2="26" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="32" y1="72" x2="248" y2="72" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="3,3"/>
  <polygon points="60,108 140,60 248,14 248,118 60,118" fill="rgba(255,107,53,0.12)"/>
  <polyline points="60,108 140,60 248,14" fill="none" stroke="#FF6B35" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <polygon points="60,104 140,98 248,96 248,118 60,118" fill="rgba(0,217,192,0.08)"/>
  <polyline points="60,104 140,98 248,96" fill="none" stroke="#00D9C0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="60" cy="108" r="4" fill="#FF6B35"/>
  <circle cx="140" cy="60" r="4" fill="#FF6B35"/>
  <circle cx="248" cy="14" r="4" fill="#FF6B35"/>
  <text x="60" y="130" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="7.5" font-family="monospace">2022</text>
  <text x="140" y="130" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="7.5" font-family="monospace">2023</text>
  <text x="248" y="130" text-anchor="middle" fill="rgba(255,255,255,0.3)" font-size="7.5" font-family="monospace">2024</text>
  <text x="252" y="18" fill="#FF6B35" font-size="8" font-weight="700" font-family="monospace">Gross Profit +100%</text>
  <text x="252" y="98" fill="#00D9C0" font-size="8" font-family="monospace">Costs +3%</text>
</svg>`;

/* MY AI WORK — 3-card grid with images */
export function v6s24() {
  return `
    ${tb(24, 'MY AI WORK')}
    <div class="v2-frame v6-work-frame">
      <div class="v2-eyebrow">מה בניתי</div>
      <h1 class="v2-headline v2-hl-md">בניתי <span class="v2-accent">3 אפליקציות.</span><br/>לא כתבתי שורת קוד.</h1>
      <div class="v6-work-cards">
        <div class="v6-work-card">
          <div class="v6-wc-img-wrap">
            <img src="data:image/jpeg;base64,${FAMILY_APP_B64}" alt="Family App" class="v6-wc-img" onerror="this.style.display='none'"/>
            <div class="v6-wc-img-fallback">📱</div>
          </div>
          <div class="v6-wc-body">
            <div class="v6-wc-tag v6-tag-orange">Lovable · Base44</div>
            <div class="v6-wc-title">ניהול משפחה</div>
            <div class="v6-wc-desc">אפליקציה לניהול משימות, לוח שנה ותקציב משפחתי — בלי שורת קוד</div>
          </div>
        </div>
        <div class="v6-work-card">
          <div class="v6-wc-img-wrap v6-wc-chart-wrap">
            ${LEMONADE_CHART_SVG}
          </div>
          <div class="v6-wc-body">
            <div class="v6-wc-tag v6-tag-teal">Base44 · Render</div>
            <div class="v6-wc-title">Lemonade — זה הביא אותי לתפקיד</div>
            <div class="v6-wc-desc">רווח גולמי ×2, עלויות +3% בלבד — כי AI עושה את העבודה</div>
          </div>
        </div>
        <div class="v6-work-card v6-work-card-here">
          <div class="v6-wc-img-wrap v6-wc-here-wrap">
            <div class="v6-you-are-here">YOU<br/>ARE<br/>HERE</div>
          </div>
          <div class="v6-wc-body">
            <div class="v6-wc-tag v6-tag-dim">Claude · HTML/CSS</div>
            <div class="v6-wc-title">המצגת הזו</div>
            <div class="v6-wc-desc">37 שקפים, SVG אנימציות, אינטראקטיביות — יצרתי עם AI בלבד</div>
          </div>
        </div>
      </div>
      <p class="v2-sub" style="margin-top:clamp(0.6rem,1.5vh,1rem)">זו היכולת החדשה שאתם חייבים לעצמכם.</p>
    </div>`;
}

/* SKILLS — 9 pills + color legend */
export function v6s25() {
  return `
    ${tb(25, 'SKILLS')}
    <div class="v2-frame">
      <div class="v2-eyebrow">9 מיומנויות · עכשיו</div>
      <h1 class="v2-headline v2-hl-md">לא הכל טכני.<br/>לא הכל רך.<br/><span class="v2-accent">הכל ביחד.</span></h1>
      <div class="v6-skill-legend">
        <span class="v6-leg-item"><span class="v6-leg-dot" style="background:rgba(255,107,53,0.8)"></span>ליבה</span>
        <span class="v6-leg-item"><span class="v6-leg-dot" style="background:rgba(126,211,33,0.8)"></span>AI</span>
        <span class="v6-leg-item"><span class="v6-leg-dot" style="background:rgba(74,144,217,0.8)"></span>טכנולוגיה</span>
        <span class="v6-leg-item"><span class="v6-leg-dot" style="background:rgba(180,90,240,0.8)"></span>רכות</span>
        <span class="v6-leg-item"><span class="v6-leg-dot" style="background:rgba(255,255,255,0.4)"></span>מטא</span>
      </div>
      <div class="v2-skill-cats">
        <span class="v2-skill-pill v2-core">חשיבת מערכות</span>
        <span class="v2-skill-pill v2-core">ניתוח דאטה</span>
        <span class="v2-skill-pill v2-ai">Prompt Engineering</span>
        <span class="v2-skill-pill v2-ai">Building with AI</span>
        <span class="v2-skill-pill v2-tech">אוטומציה</span>
        <span class="v2-skill-pill v2-tech">Python בסיסי</span>
        <span class="v2-skill-pill v2-soft">תקשורת</span>
        <span class="v2-skill-pill v2-soft">מסגור בעיות</span>
        <span class="v2-skill-pill v2-meta">למידה עצמית</span>
      </div>
    </div>`;
}

/* ROADMAP — updated 30/60/90 day text */
export function v6s26() {
  return `
    ${tb(26, 'ROADMAP')}
    <div class="v2-frame">
      <div class="v2-eyebrow">תוכנית 90 יום</div>
      <h1 class="v2-headline v2-hl-md">3 צעדים.<br/><span class="v2-accent">היום.</span></h1>
      <div class="v2-road-steps">
        <div class="v2-road-step">
          <div class="v2-road-num">30</div>
          <div class="v2-road-text"><strong>עקוב ותרגל</strong> — Claude Pro / ChatGPT. כל יום. עקבו אחרי 5 חשבונות AI בלינקדאין ו-X. שיעורי בית, סיכומים, ניתוחים — תיקחו את היד.</div>
        </div>
        <div class="v2-road-step">
          <div class="v2-road-num">60</div>
          <div class="v2-road-text"><strong>דאטה, Udemy, בנה</strong> — חזרו ללמוד דאטה בסיסי: SQL ב-Khan Academy (10 שעות). קורס Udemy על n8n או Python בסיסי. בנו פרויקט אמיתי אחד — אפליקציה ב-Base44 שפותרת בעיה שלכם.</div>
        </div>
        <div class="v2-road-step">
          <div class="v2-road-num">90</div>
          <div class="v2-road-text"><strong>הצג</strong> — LinkedIn, GitHub, Portfolio. הגישו ל-3 משרות סטאז'. היו באירוע AI פיזי אחד. הפכו את הידע לנראות.</div>
        </div>
      </div>
    </div>`;
}

/* Q&A INTERACTIVE — click-to-reveal answers */
export function v6s37_qa() {
  const pairs = [
    {
      q: 'איך אדע שלימוד Python לא יהיה מיותר?',
      a: 'תתחילו מ-pandas לניתוח דאטה, לא מ-syntax בסיסי. 5 שעות עם Claude לידכם = אתם רצים. רלוונטי עוד 10 שנים בטוח.'
    },
    {
      q: 'MBA / M.Sc. / כלום — מה עדיף?',
      a: 'MBA רק אם רוצים ניהול בכיר/VC. M.Sc. רק ל-ML Research. ברוב המקרים — ללמוד תוך כדי עבודה.'
    },
    {
      q: 'איך מתחילים לבנות פרויקט בלי רעיון?',
      a: 'תיקחו דבר שמעצבן אתכם כל יום — טופס, חישוב, מעקב — ותבנו לזה אפליקציה ב-Base44. דוגמה: אפליקציית סדר יום לסטודנט בתעשייה וניהול.'
    },
    {
      q: 'סטאז\' או משרה ראשונה — מה עדיף?',
      a: 'סטאז\' (~₪10K) = למידה בלי לחץ. משרה (~₪25K) = הוכחה. השאלה האמיתית: מי המנטור שלכם? זה שווה יותר משכר.'
    },
    {
      q: 'איך מתבלטים ב-CV בלי ניסיון?',
      a: 'שלושה דברים: (1) LinkedIn חי עם פרויקטים אמיתיים. (2) קישור ישיר לאפליקציה שבניתם. (3) שורה אחת על ה-AI workflow היומיומי שלכם — ספציפית.'
    },
    {
      q: 'משהו שלא הייתי עושה אם הייתי חוזר אחורה?',
      a: '3 שנים בייעוץ זה הרבה — שנה אחת מספיקה. MBA אונליין — בזבוז כסף. ולא הייתי מחכה 14 שנה לבנות בפומבי. תתחילו מחר.'
    },
  ];

  const cards = pairs.map((p, i) => `
    <div class="v6-qa-card" id="v6qa${i}" onclick="(function(el){el.classList.toggle('v6-qa-open')})(document.getElementById('v6qa${i}'))">
      <div class="v6-qa-q">
        <span class="v6-qa-num">${String(i+1).padStart(2,'0')}</span>
        <span class="v6-qa-qtext">${p.q}</span>
        <span class="v6-qa-arr">▾</span>
      </div>
      <div class="v6-qa-a">${p.a}</div>
    </div>`).join('');

  return `
    ${tb(37, 'Q&A')}
    <div class="v2-frame v6-qa-frame">
      <div class="v2-eyebrow">6 שאלות · לחצו לגלות את התשובה</div>
      <h1 class="v2-headline v2-hl-md">תורכם.<br/><span class="v2-accent">לשאול.</span></h1>
      <div class="v6-qa-list">${cards}</div>
    </div>`;
}

/* SUMMARY — "ועוד דבר אחד" before thanks */
export function v6s_summary() {
  return `
    ${tb(38, 'ONE MORE THING')}
    <div class="v2-frame v6-summary-frame">
      <div class="v2-eyebrow">ועוד דבר אחד</div>
      <h1 class="v2-headline v6-sum-hl"><em>"בגלל תזמון."</em></h1>
      <div class="v6-sum-body">
        <p class="v6-sum-para">אף דור לא התחיל את הקריירה עם כלים כאלה.</p>
        <p class="v6-sum-para">לראשונה, מי שמתחיל <strong>עכשיו</strong> יכול להשיג יותר ממי שהתחיל 10 שנים לפניו —</p>
        <p class="v6-sum-para">לא בגלל כישרון.</p>
        <div class="v6-sum-accent"><span class="v2-accent">בגלל תזמון.</span></div>
        <div class="v6-sum-closing">ההזדמנות כאן. <strong>מה שתעשו איתה תלוי רק בכם.</strong></div>
      </div>
    </div>`;
}

/* THANKS — V1 style: photo + contacts + closing */
export function v6s28() {
  return `
    ${tb(39, 'THANKS')}
    <div class="v2-frame v6-thanks-frame">
      <div class="v6-thanks-hero">
        <div class="v6-thanks-photo-wrap">
          <img src="data:image/jpeg;base64,${PHOTO_B64}" alt="Liran Shaked" class="v6-thanks-photo"/>
        </div>
        <div class="v6-thanks-headings">
          <h1 class="v6-thanks-hl">תודה.<br/><span class="v2-accent">בהצלחה בדרך.</span></h1>
          <p class="v6-thanks-sub">אני זמין להמשך שיחה — ייעוץ, חיבורים או סתם להגיד שלום.</p>
        </div>
      </div>
      <div class="v6-contact-cards">
        <a href="https://www.linkedin.com/in/liranshaked-people-operations" target="_blank" rel="noopener" class="v6-contact-card">
          <svg class="v6-cc-ic" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          <div class="v6-cc-body"><div class="v6-cc-lbl">LINKEDIN</div><div class="v6-cc-val">liranshaked</div></div>
        </a>
        <a href="mailto:liroys1@gmail.com" class="v6-contact-card">
          <svg class="v6-cc-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
          <div class="v6-cc-body"><div class="v6-cc-lbl">EMAIL</div><div class="v6-cc-val">liroys1@gmail.com</div></div>
        </a>
        <a href="tel:+972523701120" class="v6-contact-card">
          <svg class="v6-cc-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          <div class="v6-cc-body"><div class="v6-cc-lbl">PHONE</div><div class="v6-cc-val">+972-52-3701120</div></div>
        </a>
      </div>
      <div class="v6-thanks-cta">
        <strong>ועוד דבר אחד:</strong> אנחנו לא נעלמים. <span class="v2-accent">אנחנו עולים שכבה.</span>
      </div>
    </div>`;
}
