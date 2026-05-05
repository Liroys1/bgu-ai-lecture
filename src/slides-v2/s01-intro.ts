import { PHOTO_B64 } from '../assets/images';
import { tb } from './helpers';

export function v2s01() {
  return `
    ${tb(1, 'INTRO')}
    <div class="v2-frame v2-intro-frame">
      <div class="v2-intro-photo">
        <img src="data:image/jpeg;base64,${PHOTO_B64}" alt="Liran Shaked" />
      </div>
      <div class="v2-intro-text">
        <div class="v2-intro-kicker">BGU · פורום 80–20 · מאי 2026</div>
        <h1 class="v2-intro-name">לירן שקד</h1>
        <p class="v2-intro-role"><span class="v2-lat">L&D Lead Tech Dev · Lemonade</span></p>
        <p class="v2-intro-tagline">בוגר תעשייה וניהול, BGU 2012</p>
      </div>
    </div>`;
}

export function v2s02() {
  return `
    ${tb(2, 'INTRO')}
    <div class="v2-frame v2-statement-center">
      <div class="v2-eyebrow">הסיפור שלי</div>
      <h1 class="v2-headline">למה <em>תעשייה וניהול</em><br/>ומה עושים עם זה<br/><span class="v2-accent">היום.</span></h1>
    </div>`;
}
