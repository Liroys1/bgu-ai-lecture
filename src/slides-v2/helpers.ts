/* V2 TED-style slide helpers */

export const tb = (n: number, t: string) =>
  `<div class="v2-topbar"><span class="v2-tb-num">${String(n).padStart(2,'0')}</span><span class="v2-tb-title">${t}</span></div>`;

export const statement = (n: number, lbl: string, hl: string, sub = '') => `
  ${tb(n, lbl)}
  <div class="v2-frame">
    <div class="v2-eyebrow">${lbl}</div>
    <h1 class="v2-headline">${hl}</h1>
    ${sub ? `<p class="v2-sub">${sub}</p>` : ''}
  </div>`;

export const act = (n: number, roman: string, title: string, sub: string) => `
  ${tb(n, `ACT ${roman}`)}
  <div class="v2-frame v2-act-frame">
    <div class="v2-act-roman">${roman}</div>
    <h1 class="v2-act-title">${title}</h1>
    <p class="v2-act-sub">${sub}</p>
  </div>`;

export const bigNum = (n: number, lbl: string, num: string, unit: string, desc: string, source = '') => `
  ${tb(n, lbl)}
  <div class="v2-frame v2-stat-frame">
    <div class="v2-eyebrow">${lbl}</div>
    <div class="v2-stat-row">
      <span class="v2-stat-num stat-num">${num}</span><span class="v2-stat-unit">${unit}</span>
    </div>
    <p class="v2-sub">${desc}</p>
    ${source ? `<div class="v2-source">${source}</div>` : ''}
  </div>`;

export const pullQuote = (n: number, lbl: string, quote: string, author: string, role: string) => `
  ${tb(n, lbl)}
  <div class="v2-frame v2-quote-frame">
    <div class="v2-eyebrow">${lbl}</div>
    <blockquote class="v2-blockquote">"${quote}"</blockquote>
    <div class="v2-qauthor">${author}</div>
    <div class="v2-qrole">${role}</div>
  </div>`;
