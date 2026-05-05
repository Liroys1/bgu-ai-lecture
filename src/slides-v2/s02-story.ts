import { act, statement } from './helpers';

export const v2s03 = () => act(3, 'I', 'הסיפור שלי', '20 שנה. שני עידנים. שיעור אחד.');

export function v2s04() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">04</span><span class="v2-tb-title">MY STORY</span></div>
    <div class="v2-frame">
      <div class="v2-eyebrow">MY STORY · הקריירה שלי</div>
      <h1 class="v2-headline v2-hl-md">20 שנה. BGU. צבא.<br/>ייעוץ. סטארטאפ. היי-טק.<br/><span class="v2-accent">Lemonade.</span></h1>
      <p class="v2-sub">לא תכננתי להיות בתחום ה-AI. AI הגיע אליי — ושינה את כל מה שאני עושה.</p>
    </div>`;
}

export function v2s05() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">05</span><span class="v2-tb-title">WHY IE</span></div>
    <div class="v2-frame">
      <div class="v2-eyebrow">למה דווקא תעשייה וניהול?</div>
      <h1 class="v2-headline v2-hl-md"><span class="v2-accent">מערכות. נתונים. אנשים.</span><br/>הנוסחה המנצחת<br/>בעידן ה-AI.</h1>
      <p class="v2-sub">IE הוא הגשר בין הטכנולוגיה לבין הארגון שצריך להשתמש בה. בדיוק מה שנדרש עכשיו.</p>
    </div>`;
}
