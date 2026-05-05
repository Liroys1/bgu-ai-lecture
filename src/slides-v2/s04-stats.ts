import { bigNum, statement } from './helpers';

export function v2s10() {
  return `
    <div class="v2-topbar"><span class="v2-tb-num">10</span><span class="v2-tb-title">THE SHIFT</span></div>
    <div class="v2-frame v2-stat-frame">
      <div class="v2-eyebrow">ChatGPT · 2022</div>
      <div class="v2-stat-row">
        <span class="v2-stat-num stat-num">0</span>
        <span class="v2-stat-unit"> → </span>
        <span class="v2-stat-num" style="color:#FF6B35">100M</span>
      </div>
      <p class="v2-sub">משתמשים. ב-60 יום.<br/>אף מוצר בהיסטוריה לא צמח כך.</p>
    </div>`;
}

export const v2s11 = () => bigNum(
  11, 'DATA', '800', 'M',
  'משתמשים שבועיים ב-ChatGPT בלבד. לא כולל Gemini, Claude, Grok.',
  'OpenAI · 2025'
);

export const v2s12 = () => bigNum(
  12, 'DATA', '+78', 'M',
  'משרות נטו ייווצרו עד 2030. 170M חדשות פחות 92M שייעלמו.',
  'WEF Future of Jobs 2025'
);

export const v2s13 = () => bigNum(
  13, 'DATA', '86', '%',
  'מהמעסיקים בעולם: AI ישנה את העסק שלהם באופן מהותי עד 2030.',
  'WEF Future of Jobs 2025'
);
