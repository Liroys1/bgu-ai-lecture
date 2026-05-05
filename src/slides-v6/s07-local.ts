import { tb } from '../slides-v2/helpers';

export function v6s_local() {
  return `
    ${tb(19, 'CLOSE TO HOME')}
    <div class="v2-frame v6-local-frame">
      <div class="v2-eyebrow">ינואר 2025 · תל אביב · כלכליסט "ישראל 2.0"</div>
      <h1 class="v2-headline v6-local-hl"><em>"החייזרים נחתו —</em> והם מוכנים לעבוד <span class="v2-accent">בחינם."</span></h1>
      <div class="v6-local-grid">
        <div class="v6-local-video" id="v6-vid-wrap">
          <div class="v6-vid-thumb" onclick="(function(){var w=document.getElementById('v6-vid-wrap');w.innerHTML='<iframe class=\\'v6-iframe\\' src=\\'https://www.youtube.com/embed/5gqtckj0Ohc?autoplay=1&rel=0\\' frameborder=\\'0\\' allow=\\'autoplay; encrypted-media; fullscreen\\' allowfullscreen></iframe>';})()">
            <img src="https://img.youtube.com/vi/5gqtckj0Ohc/hqdefault.jpg" alt="דניאל שרייבר" class="v6-vid-img" onerror="this.style.background='#1a1a24'"/>
            <div class="v6-play-btn">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
            </div>
            <div class="v6-vid-label">הרצאת דניאל שרייבר · ינואר 2025 · לחצו לצפייה</div>
          </div>
        </div>
        <div class="v6-local-content">
          <blockquote class="v6-local-quote">"לא הוספנו אף עובד אחד בשלוש השנים מאז שפגשנו את ChatGPT. הרווח הגולמי שלנו גדל ב-100% בשנה, אבל מבנה העלויות עלה רק ב-3%. <strong>החייזרים כבר פה.</strong>"</blockquote>
          <div class="v6-local-author"><strong>דניאל שרייבר</strong> — מייסד ומנכ"ל Lemonade, יו"ר מכון MOSAIC למדיניות AI</div>
          <div class="v6-local-article">
            <div class="v6-art-tag">כלכליסט · 01.05.26</div>
            <div class="v6-art-hl">"הגניורים חוזרים? זה לא ספוילר — זה החדשות."</div>
            <div class="v6-art-sub">בוגרים טריים עם גישת AI עוקפים מסלול מסורתי של 5 שנות ניסיון — תוך שנה.</div>
          </div>
          <div class="v6-local-personal">
            <strong>הסיפור הכי מטריף:</strong> בעוד 5 ימים, אני מתחיל לעבוד ב-Lemonade כ-L&D Lead Tech Dev — בדיוק החברה הזו. <strong>תפקידי: ללמד את צוות ה-Product וה-R&D לעבוד עם החייזרים.</strong> בוגרים סחירים, ללא תפיסות קדומות, עם גישה — כם בחוץ.
          </div>
        </div>
      </div>
    </div>`;
}
