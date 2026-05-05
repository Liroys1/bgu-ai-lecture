import { act, statement } from './helpers';

export const v2s21 = () => act(21, 'III', 'מה לעשות עם זה', 'לא לפחד, לא להתעלם — להבין את התפקיד החדש.');

export function v2s22() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">22</span><span class="v2-tb-title">DIVISION</span></div>
    <div class="v2-frame v2-split-frame">
      <div class="v2-eyebrow">חלוקת העבודה החדשה</div>
      <div class="v2-split-row">
        <div class="v2-split-side v2-split-human">
          <div class="v2-split-icon">🧠</div>
          <div class="v2-split-label">אנשים</div>
          <div class="v2-split-tag">JUDGMENT</div>
          <ul class="v2-split-list">
            <li>הגדרת בעיה</li>
            <li>שיקול דעת</li>
            <li>אחריות ואמון</li>
          </ul>
        </div>
        <div class="v2-split-vs">VS</div>
        <div class="v2-split-side v2-split-ai">
          <div class="v2-split-icon">🤖</div>
          <div class="v2-split-label">AI</div>
          <div class="v2-split-tag">AUTOMATION</div>
          <ul class="v2-split-list">
            <li>עיבוד נתונים</li>
            <li>משימות חוזרות</li>
            <li>סקיילינג מהיר</li>
          </ul>
        </div>
      </div>
    </div>`;
}

export function v2s23() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">23</span><span class="v2-tb-title">YOUR POSITION</span></div>
    <div class="v2-frame">
      <div class="v2-eyebrow">התפקיד החדש שלנו</div>
      <h1 class="v2-headline v2-hl-md">לא לבצע.<br/><span class="v2-accent">לנהל את המערכת<br/>שמבצעת.</span></h1>
      <p class="v2-sub">אנחנו לא נעלמים מהמשוואה — אנחנו עולים שכבה.<br/>מבצעים → מנהלי מערכת.</p>
    </div>`;
}
