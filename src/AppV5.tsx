import { useEffect, useRef, useState } from 'react';
import { SLIDES_V2, SLIDE_META_V2 } from './slides-v2';
import './styles.css';
import './styles-v2.css';
import './styles-v5.css';

export function AppV5() {
  const [current, setCurrent] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const [gridOpen, setGridOpen] = useState(false);
  const total = SLIDES_V2.length;

  const go = (i: number) => setCurrent(Math.max(0, Math.min(total - 1, i)));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'g' || e.key === 'G') { e.preventDefault(); setGridOpen(o => !o); return; }
      if (e.key === 'Escape') { setGridOpen(false); return; }
      if (gridOpen) return;
      if (['ArrowLeft','ArrowDown',' '].includes(e.key)) { e.preventDefault(); go(current + 1); }
      if (['ArrowRight','ArrowUp'].includes(e.key)) { e.preventDefault(); go(current - 1); }
      if (e.key === 'Home') go(0);
      if (e.key === 'End') go(total - 1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [current, total, gridOpen]);

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
  }, [current]);

  /* Particle field overlay */
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:1;opacity:0.6;';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d')!;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);

    type Particle = { x: number; y: number; vx: number; vy: number; a: number };
    const pts: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -(Math.random() * 0.4 + 0.1),
      a: Math.random() * 0.7 + 0.1,
    }));

    let raf: number;
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width; }
        if (p.x < -4 || p.x > canvas.width + 4) p.vx *= -1;
        ctx.globalAlpha = p.a * 0.5;
        ctx.fillStyle = '#00FF9C';
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
      <div id="stage" ref={stageRef} data-act={SLIDE_META_V2[current]?.act} className="v5-stage">
        {SLIDES_V2.map((sl, i) => (
          <div key={i}
            className={`slide s${i+1}${i === current ? ' active' : ''} act-${SLIDE_META_V2[i]?.act?.toLowerCase()}`}
            id={`slide-${i}`}
            dangerouslySetInnerHTML={{ __html: sl() }}
          />
        ))}
      </div>

      <div className="nav">
        <button aria-label="prev" disabled={current === 0} onClick={() => go(current - 1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        <div className="nav-center">
          <div className="slide-counter">
            <span className="counter-current">{String(current + 1).padStart(2,'0')}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">{String(total).padStart(2,'0')}</span>
          </div>
          <div className="dots">
            {SLIDES_V2.map((_, i) => (
              <button key={i} className={dotClass(i)} onClick={() => go(i)} aria-label={`Slide ${i+1}`} />
            ))}
          </div>
        </div>
        <button aria-label="next" disabled={current === total - 1} onClick={() => go(current + 1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="nav-grid-toggle" aria-label="Grid (G)" onClick={() => setGridOpen(o => !o)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
        </button>
      </div>

      {gridOpen && (
        <div className="grid-overlay" onClick={() => setGridOpen(false)}>
          <div className="grid-overlay-head">
            <div>
              <div className="grid-overlay-title">סקירת שקפים — V5 Sci-Fi</div>
              <div className="grid-overlay-hint">לחץ שקף · <kbd>Esc</kbd> לסגור</div>
            </div>
            <button className="grid-close" onClick={(e) => { e.stopPropagation(); setGridOpen(false); }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
          <div className="thumb-grid" onClick={(e) => e.stopPropagation()}>
            {SLIDE_META_V2.map((meta, i) => (
              <button key={i} className={`thumb act-${meta.act.toLowerCase()}${i === current ? ' current' : ''}`}
                onClick={() => { go(i); setGridOpen(false); }}>
                <div className="thumb-num">{String(i+1).padStart(2,'0')}</div>
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
