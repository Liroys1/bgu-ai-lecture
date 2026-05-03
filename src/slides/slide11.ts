import { topbar } from './topbar';

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

