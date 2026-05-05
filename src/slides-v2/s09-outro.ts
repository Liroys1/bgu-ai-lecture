import { PHOTO_B64 } from '../assets/images';

export function v2s27() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">27</span><span class="v2-tb-title">Q&A</span></div>
    <div class="v2-frame v2-statement-center">
      <div class="v2-eyebrow">Q &amp; A</div>
      <h1 class="v2-headline">שאלות?</h1>
      <p class="v2-sub">אני כאן.</p>
    </div>`;
}

export function v2s28() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">28</span><span class="v2-tb-title">THANKS</span></div>
    <div class="v2-frame v2-thanks-frame">
      <img class="v2-thanks-photo" src="data:image/jpeg;base64,${PHOTO_B64}" alt="Liran Shaked"/>
      <h1 class="v2-thanks-hl">תודה.<br/><span class="v2-accent">בהצלחה בדרך.</span></h1>
      <p class="v2-thanks-sub">אנחנו לא נעלמים. אנחנו עולים שכבה.</p>
      <div class="v2-contact-row">
        <span class="v2-contact-item">LinkedIn · liranshaked</span>
        <span class="v2-contact-sep">·</span>
        <span class="v2-contact-item">liroys1@gmail.com</span>
      </div>
    </div>`;
}
