import { tb } from '../slides-v2/helpers';

export function v6s02() {
  return `
    ${tb(2, 'OPENING')}
    <div class="v2-frame v6-shock-frame">
      <div class="v6-shock-pct">78%</div>
      <p class="v6-shock-body">מהמהנדסים שנכנסו לשוק ב-2020 עושים עבודה<br/>שבינה מלאכותית תבצע טוב יותר ב-2026.</p>
      <div class="v6-shock-divider"></div>
      <p class="v6-shock-q">השאלה היחידה שחשובה היום:</p>
      <div class="v6-shock-a">האם אתם ה-<span class="v6-shock-22">22%</span> האחרים?</div>
      <p class="v6-shock-coda">זה לא גורל. <em>זו בחירה.</em></p>
    </div>`;
}

/* tension slide — 22% big */
export function v6s02b() {
  return `
    ${tb(3, 'OPENING')}
    <div class="v2-frame v6-tension-frame">
      <div class="v6-tension-q">האם אתם</div>
      <div class="v6-tension-pct">ה-<span>22%</span></div>
      <div class="v6-tension-q">האחרים?</div>
      <div class="v6-tension-divider"></div>
      <div class="v6-tension-coda">זה לא גורל. <strong>זו בחירה.</strong></div>
    </div>`;
}
