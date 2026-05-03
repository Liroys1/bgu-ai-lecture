import { PHOTO_B64 } from '../assets/images';
import { topbar } from './topbar';

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

