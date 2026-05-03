import { topbar } from './topbar';

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

