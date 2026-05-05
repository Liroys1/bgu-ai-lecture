import { useEffect, useRef, useState, useCallback } from 'react';
import { LECTURE_SLIDES, LECTURE_META, LSlide } from './lecture-data';
import './styles.css';
import './styles-v5.css';

const total = LECTURE_SLIDES.length;

/* ── derive terminal text from slide data ── */
function getSlideText(slide: LSlide): string[] {
  const lines: string[] = [];
  switch (slide.type) {
    case 'hero':
    case 'outro':
      if (slide.hl) lines.push(`>> ${slide.hl}`);
      if (slide.hl2) lines.push(`   ${slide.hl2}`);
      if (slide.sub) lines.push(`   ${slide.sub}`);
      break;
    case 'statement':
      if (slide.hl) lines.push(`>> ${slide.hl}`);
      if (slide.hl2) lines.push(`   ${slide.hl2}`);
      if (slide.sub) lines.push(``, `   // ${slide.sub}`);
      break;
    case 'act':
      lines.push(`============================================`);
      lines.push(`  ACT ${slide.roman}: ${slide.actTitle}`);
      lines.push(`============================================`);
      if (slide.actSub) lines.push(``, `  ${slide.actSub}`);
      break;
    case 'bignum':
      lines.push(`>> STAT_LOAD: ${slide.label}`);
      lines.push(``);
      lines.push(`   ${slide.num}${slide.unit}`);
      if (slide.numDesc) lines.push(``, `   ${slide.numDesc}`);
      if (slide.source) lines.push(``, `   // src: ${slide.source}`);
      break;
    case 'quote':
      lines.push(`>> QUOTE:`);
      lines.push(``);
      if (slide.quote) {
        // wrap long quote
        const words = slide.quote.split(' ');
        let line = '   "';
        words.forEach((w, i) => {
          if (line.length + w.length > 58) { lines.push(line); line = '    '; }
          line += (i === 0 ? '' : ' ') + w;
        });
        lines.push(line + '"');
      }
      lines.push(``);
      if (slide.author) lines.push(`   -- ${slide.author}`);
      if (slide.authorRole) lines.push(`      ${slide.authorRole}`);
      break;
    case 'joblist':
      if (slide.hl) lines.push(`>> ${slide.hl}`);
      if (slide.sub) lines.push(`   ${slide.sub}`);
      lines.push(``);
      slide.jobs?.forEach(j => {
        lines.push(`   [${j.tag}] ${j.title}`);
        lines.push(`         ${j.co} · ${j.salary}`);
        lines.push(`         ${j.desc}`);
        lines.push(``);
      });
      break;
    case 'split':
      lines.push(`>> SYSTEM_DIVISION:`);
      lines.push(``);
      lines.push(`   [${slide.splitL?.tag}] ${slide.splitL?.label}`);
      slide.splitL?.items.forEach(i => lines.push(`     + ${i}`));
      lines.push(``);
      lines.push(`   [${slide.splitR?.tag}] ${slide.splitR?.label}`);
      slide.splitR?.items.forEach(i => lines.push(`     + ${i}`));
      break;
    case 'skills':
      if (slide.hl) lines.push(`>> ${slide.hl}`);
      if (slide.hl2) lines.push(`   ${slide.hl2}`);
      lines.push(``);
      slide.skills?.forEach(cat => {
        lines.push(`   [${cat.cat}]`);
        cat.items.forEach(it => lines.push(`     • ${it}`));
      });
      break;
    case 'roadmap':
      if (slide.hl) lines.push(`>> ${slide.hl}`);
      if (slide.hl2) lines.push(`   ${slide.hl2}`);
      lines.push(``);
      slide.steps?.forEach(st => {
        lines.push(`   DAY_${st.days}: ${st.title}`);
        lines.push(`     ${st.desc}`);
        lines.push(``);
      });
      break;
    case 'lessons':
      if (slide.hl) lines.push(`>> ${slide.hl}`);
      if (slide.hl2) lines.push(`   ${slide.hl2}`);
      lines.push(``);
      slide.lessons?.forEach(ls => {
        lines.push(`   [${ls.num}] ${ls.title}`);
        lines.push(`        ${ls.desc}`);
        lines.push(``);
      });
      break;
    case 'qalist':
      lines.push(`>> QUESTIONS:`);
      lines.push(``);
      slide.questions?.forEach((q, i) => {
        lines.push(`   ${String(i+1).padStart(2,'0')}. ${q}`);
      });
      break;
    case 'qa':
      lines.push(`>> ${slide.hl}`);
      if (slide.hl2) lines.push(`   ${slide.hl2}`);
      lines.push(``);
      lines.push(`   // standing by...`);
      break;
    default:
      if (slide.hl) lines.push(`>> ${slide.hl}`);
  }
  return lines;
}

/* ── typewriter hook ── */
function useTypewriter(text: string, speed = 18) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

/* ── single slide inner ── */
function SlideV5({ slide, idx, active }: { slide: LSlide; idx: number; active: boolean }) {
  const num = String(idx + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');
  const actLabel = slide.act === 'INTRO' || slide.act === 'OUTRO' ? slide.act : `ACT_${slide.act}`;

  const lines = active ? getSlideText(slide) : [];
  const fullText = lines.join('\n');
  const { displayed, done } = useTypewriter(active ? fullText : '', 16);

  const isBigNum = slide.type === 'bignum';
  const isBig = isBigNum || slide.type === 'hero' || slide.type === 'outro' || slide.type === 'act' || slide.type === 'qa';

  return (
    <div className="v5-slide-inner">
      {/* Header */}
      <div className="v5-header">
        <span className="v5-header-sys">BGU_AI_LECTURE.EXE</span>
        <span className="v5-header-sep">|</span>
        <span className="v5-header-slide">[{num}/{totalStr}]</span>
        <span className="v5-header-sep">|</span>
        <span className="v5-header-act">{actLabel}</span>
        <span className="v5-header-sep">|</span>
        <span className="v5-header-label">{slide.label}</span>
      </div>

      {/* Content */}
      <div className="v5-content">
        <div className="v5-prompt" dir="ltr">
          {`$ cat slide_${num}.txt`}
        </div>

        {isBigNum && active ? (
          /* big number: number typed out large, rest small */
          <div className="v5-output">
            <div className="v5-line v5-line-small">{'>> STAT_LOAD: ' + slide.label}</div>
            <div className="v5-line v5-line-small">{''}</div>
            <div className="v5-num-big" dir="ltr">
              {slide.num}{slide.unit}
              {done && <span className="v5-cursor" />}
            </div>
            {slide.numDesc && <div className="v5-line v5-line-medium">{slide.numDesc}</div>}
            {slide.source && <div className="v5-line v5-line-small v5-dim">{'// src: ' + slide.source}</div>}
          </div>
        ) : isBig && active ? (
          /* hero / act / qa: bigger font */
          <div className="v5-output">
            <pre className={`v5-pre v5-pre-big`}>{displayed}{!done && <span className="v5-cursor" />}</pre>
          </div>
        ) : active ? (
          /* normal: standard terminal text */
          <div className="v5-output">
            <pre className="v5-pre">{displayed}{!done && <span className="v5-cursor" />}</pre>
          </div>
        ) : null}

        {done && (
          <div className="v5-status" dir="ltr">
            {'> STATUS: '}
            <span className="v5-progress-bar">[██████████]</span>
            {' DONE'}
            <span className="v5-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ── main component ── */
export function AppV5() {
  const [current, setCurrent] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const [gridOpen, setGridOpen] = useState(false);

  const go = useCallback((i: number) => setCurrent(Math.max(0, Math.min(total - 1, i))), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'g' || e.key === 'G') { e.preventDefault(); setGridOpen(o => !o); return; }
      if (e.key === 'Escape') { setGridOpen(false); return; }
      if (gridOpen) return;
      if (['ArrowLeft', 'ArrowDown', ' '].includes(e.key)) { e.preventDefault(); go(current + 1); }
      if (['ArrowRight', 'ArrowUp'].includes(e.key)) { e.preventDefault(); go(current - 1); }
      if (e.key === 'Home') go(0);
      if (e.key === 'End') go(total - 1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [current, gridOpen, go]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let tx = 0;
    const onStart = (e: TouchEvent) => { tx = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - tx;
      if (Math.abs(dx) > 60) dx > 0 ? go(current + 1) : go(current - 1);
    };
    stage.addEventListener('touchstart', onStart, { passive: true });
    stage.addEventListener('touchend', onEnd, { passive: true });
    return () => { stage.removeEventListener('touchstart', onStart); stage.removeEventListener('touchend', onEnd); };
  }, [current, go]);

  /* Particle field */
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:1;opacity:0.5;';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d')!;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    type P = { x: number; y: number; vx: number; vy: number; a: number };
    const pts: P[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(Math.random() * 0.35 + 0.08),
      a: Math.random() * 0.6 + 0.1,
    }));
    let raf: number;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width; }
        if (p.x < -4 || p.x > canvas.width + 4) p.vx *= -1;
        ctx.globalAlpha = p.a * 0.45;
        ctx.fillStyle = '#00FF41';
        ctx.fillRect(p.x, p.y, 1.5, 1.5);
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      canvas.remove();
    };
  }, []);

  const dotClass = (i: number) => `dot${i === current ? ' active' : i < current ? ' past' : ' future'}`;

  return (
    <>
      <div id="stage" ref={stageRef} data-act={LECTURE_META[current]?.act} className="v5-stage">
        {LECTURE_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`v5-slide${i === current ? ' active' : ''} act-${LECTURE_META[i]?.act?.toLowerCase()}`}
            id={`v5-slide-${i}`}
          >
            <SlideV5 slide={slide} idx={i} active={i === current} />
          </div>
        ))}
      </div>

      <div className="nav">
        <button aria-label="prev" disabled={current === 0} onClick={() => go(current - 1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        <div className="nav-center">
          <div className="slide-counter">
            <span className="counter-current">{String(current + 1).padStart(2, '0')}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">{String(total).padStart(2, '0')}</span>
          </div>
          <div className="dots">
            {LECTURE_SLIDES.map((_, i) => (
              <button key={i} className={dotClass(i)} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>
        <button aria-label="next" disabled={current === total - 1} onClick={() => go(current + 1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="nav-grid-toggle" aria-label="Grid (G)" onClick={() => setGridOpen(o => !o)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </button>
      </div>

      {gridOpen && (
        <div className="grid-overlay" onClick={() => setGridOpen(false)}>
          <div className="grid-overlay-head">
            <div>
              <div className="grid-overlay-title">סקירת שקפים — V5 Terminal</div>
              <div className="grid-overlay-hint">לחץ שקף · <kbd>Esc</kbd> לסגור</div>
            </div>
            <button className="grid-close" onClick={(e) => { e.stopPropagation(); setGridOpen(false); }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="thumb-grid" onClick={(e) => e.stopPropagation()}>
            {LECTURE_META.map((meta, i) => (
              <button key={i} className={`thumb act-${meta.act.toLowerCase()}${i === current ? ' current' : ''}`}
                onClick={() => { go(i); setGridOpen(false); }}>
                <div className="thumb-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="thumb-label">{meta.label}</div>
                <div className="thumb-act">{meta.act === 'INTRO' || meta.act === 'OUTRO' ? meta.act : `ACT ${meta.act}`}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
