import { statement } from './helpers';

export const v2s06 = () => statement(6, 'THE SHIFT', 'שלושה עידנים.<br/><span class="v2-accent">אנחנו בשלישי.</span>');

export function v2s07() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">07</span><span class="v2-tb-title">TRANSFORMATION</span></div>
    <div class="v2-frame v2-era-frame">
      <div class="v2-era-year">1900 – 1990</div>
      <h1 class="v2-headline v2-hl-md">עידן המפעל</h1>
      <p class="v2-sub">מי שידע לעבוד עם מכונות — ניצח.<br/>המפעל שינה את כל מה שהיה לפניו.</p>
      <div class="v2-era-dot v2-era-dot1"></div>
    </div>`;
}

export function v2s08() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">08</span><span class="v2-tb-title">TRANSFORMATION</span></div>
    <div class="v2-frame v2-era-frame">
      <div class="v2-era-year">1990 – 2020</div>
      <h1 class="v2-headline v2-hl-md">עידן המחשב</h1>
      <p class="v2-sub">מי שידע Excel, ERP, מערכות מידע — ניצח.<br/>המחשב שינה את כל מה שהיה לפניו.</p>
      <div class="v2-era-dot v2-era-dot2"></div>
    </div>`;
}

export function v2s09() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">09</span><span class="v2-tb-title">TRANSFORMATION</span></div>
    <div class="v2-frame v2-era-frame">
      <div class="v2-era-year v2-era-now">2020 →</div>
      <h1 class="v2-headline v2-hl-md"><span class="v2-accent">עידן ה-AI</span></h1>
      <p class="v2-sub">מי שיידע לנהל סוכני AI ולהפעיל כלים — <strong>ינצח.</strong><br/>AI משנה את כל מה שהיה לפניו.</p>
      <div class="v2-era-dot v2-era-dot3"></div>
    </div>`;
}
