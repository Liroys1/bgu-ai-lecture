import { PHOTO_B64 } from '../assets/images';
import { topbar } from './topbar';

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


