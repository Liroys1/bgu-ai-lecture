import { act, pullQuote, statement } from './helpers';

export const v2s14 = () => act(14, 'II', 'מה זה אומר עליכם', 'השוק דיבר. המנהיגים דיברו. השאלה היא מה תעשו עם זה.');

export function v2s15() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">15</span><span class="v2-tb-title">VOICES</span></div>
    <div class="v2-frame">
      <div class="v2-eyebrow">3 בוני ה-AI המובילים בעולם</div>
      <h1 class="v2-headline v2-hl-md">שלושה אנשים.<br/><span class="v2-accent">אותו מסר.</span></h1>
      <p class="v2-sub">Altman. Matias. Hassabis. OpenAI, Google, DeepMind.<br/>כולם אומרים: AI הוא <strong>מגבר</strong> — לא תחליף.</p>
    </div>`;
}

export const v2s16 = () => pullQuote(
  16, 'SAM ALTMAN · OpenAI',
  'היכולת של אדם אחד להשיג ב-2030 הרבה יותר ממה שיכול היה ב-2020 תהיה שינוי מרשים.',
  'Sam Altman',
  'CEO · OpenAI'
);

export const v2s17 = () => pullQuote(
  17, 'YOSSI MATIAS · Google',
  'AI הוא מגבר של גאוניות אנושית — שמעצים מדענים, עובדי בריאות, מורים, אנשי עסקים.',
  'Yossi Matias · יוסי מטיאס',
  'VP Engineering & Research · Google Israel'
);

export const v2s18 = () => pullQuote(
  18, 'DEMIS HASSABIS · DeepMind',
  'AlphaFold פתר שאלה שהיתה פתוחה 50 שנה — לא ביטל חוקרים, פתח עידן שלם של גילויים שלא היו אפשריים בלעדיו.',
  'Demis Hassabis',
  'נובל לכימיה 2024 · CEO · Google DeepMind'
);
