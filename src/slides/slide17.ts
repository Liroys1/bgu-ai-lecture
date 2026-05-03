import { topbar } from './topbar';

/* SLIDE 17: WHAT I'D DO DIFFERENTLY */
export function slide17() {
  const lessons = [
    { num: '01', t: 'הייתי בונה <em>פומבי</em> מהיום הראשון', d: 'לקח לי 14 שנה להבין את זה. <strong>GitHub. LinkedIn. בלוג.</strong> לא משנה הרמה — להראות שאתה בונה. זה הקו"ח האמיתי שלך.' },
    { num: '02', t: 'הייתי בוחר <em>פחות תאוריה, יותר מעשה</em>', d: 'הקורסים החזקים ביותר היו אלה שבנינו בהם משהו אמיתי. הסמינריון הסטטיסטי שעשיתי? שכחתי מזמן. הפרויקט עם החברה? עדיין משפיע.' },
    { num: '03', t: 'הייתי לומד <em>תקשורת לפני אקסל</em>', d: 'אקסל לומדים בשבועיים. <strong>איך מציגים מסקנה ב-3 דקות</strong> לוקח 10 שנים. תתחילו עכשיו, בכיתה.', highlight: true },
    { num: '04', t: 'הייתי <em>עוזב</em> מהר יותר', d: 'נשארתי בכל תפקיד יותר מדי. החברות שלמדתי בהן הכי הרבה — לא אלו שעבדתי בהן, אלו שעזבתי אליהן. <strong>תזוזה היא הכלי הכי חזק לפיתוח קריירה</strong>.' }
  ];
  const cards = lessons.map(l => `
    <div class="lesson-card ${l.highlight ? 'highlight' : ''}">
      <div class="lesson-num">${l.num}</div>
      <div class="lesson-t">${l.t}</div>
      <div class="lesson-d">${l.d}</div>
    </div>
  `).join('');
  return `
    ${topbar(18, 'IF I COULD DO OVER')}
    <div class="frame different-slide">
      <div class="anim-up">
        <span class="label"><span class="ldot"></span>15 · אישי</span>
        <h2 style="margin-top:14px">מה הייתי עושה <em>אחרת</em></h2>
        <p class="lead">
          ארבעה דברים שלא הבנתי בשנה א'. אם הייתם נכנסים לכיתה הזו לפני 14 שנה ומספרים לי אותם, 
          הקריירה שלי הייתה נראית אחרת. <strong>תיקחו את זה אתכם.</strong>
        </p>
      </div>
      <div class="lessons-grid anim-fade" style="animation-delay:0.3s">${cards}</div>
    </div>
  `;
}

