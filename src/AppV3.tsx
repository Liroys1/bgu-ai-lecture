import { useEffect, useRef, useState } from 'react';
import { LECTURE_SLIDES, LECTURE_META, LSlide } from './lecture-data';
import './styles.css';
import './styles-v3.css';

const total = LECTURE_SLIDES.length;

/* ── per-slide JSX renderer ── */
function SlideV3({ slide, idx }: { slide: LSlide; idx: number }) {
  const num = String(idx + 1).padStart(2, '0');

  switch (slide.type) {
    case 'hero':
      return (
        <div className="v3-slide-inner v3-hero">
          {slide.photo && (
            <div className="v3-hero-photo" data-anim>
              <img src={`data:image/jpeg;base64,${slide.photo}`} alt={slide.hl} />
            </div>
          )}
          <div className="v3-center" data-anim>
            <div className="v3-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v3-sub v3-accent-text">{slide.hl2}</div>}
            {slide.sub && <div className="v3-meta">{slide.sub}</div>}
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'outro':
      return (
        <div className="v3-slide-inner v3-hero">
          {slide.photo && (
            <div className="v3-hero-photo" data-anim>
              <img src={`data:image/jpeg;base64,${slide.photo}`} alt={slide.hl} />
            </div>
          )}
          <div className="v3-center" data-anim>
            <div className="v3-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v3-hl v3-hl-accent">{slide.hl2}</div>}
            {slide.sub && <div className="v3-meta">{slide.sub}</div>}
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'statement':
      return (
        <div className="v3-slide-inner">
          <div className="v3-center" data-anim>
            <div className="v3-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v3-hl v3-hl-accent">{slide.hl2}</div>}
            {slide.sub && <div className="v3-sub" data-anim>{slide.sub}</div>}
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'act':
      return (
        <div className="v3-slide-inner v3-act-slide">
          <div className="v3-act-roman" data-anim>{slide.roman}</div>
          <div className="v3-center v3-act-content" data-anim>
            <div className="v3-act-label">ACT {slide.roman}</div>
            <div className="v3-hl">{slide.actTitle}</div>
            {slide.actSub && <div className="v3-sub">{slide.actSub}</div>}
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'bignum':
      return (
        <div className="v3-slide-inner">
          <div className="v3-center" data-anim>
            <div className="v3-bignum-row">
              <span className="v3-num">{slide.num}</span>
              {slide.unit && <span className="v3-unit">{slide.unit}</span>}
            </div>
            {slide.numDesc && <div className="v3-num-desc" data-anim>{slide.numDesc}</div>}
            {slide.source && <div className="v3-source">{slide.source}</div>}
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'quote':
      return (
        <div className="v3-slide-inner">
          <div className="v3-center v3-quote-wrap" data-anim>
            <div className="v3-quote-mark">"</div>
            <div className="v3-quote-text">{slide.quote}</div>
            <div className="v3-quote-author">
              <span className="v3-hl-accent">{slide.author}</span>
              {slide.authorRole && <span className="v3-author-role"> · {slide.authorRole}</span>}
            </div>
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'joblist':
      return (
        <div className="v3-slide-inner">
          <div className="v3-center v3-wide" data-anim>
            <div className="v3-hl">{slide.hl}</div>
            {slide.sub && <div className="v3-sub">{slide.sub}</div>}
            <div className="v3-jobs">
              {slide.jobs?.map((j, i) => (
                <div className="v3-job" key={i} data-anim style={{ '--delay': `${i * 0.08}s` } as React.CSSProperties}>
                  <span className="v3-job-tag">{j.tag}</span>
                  <span className="v3-job-title">{j.title}</span>
                  <span className="v3-job-co">{j.co}</span>
                  <span className="v3-job-salary v3-hl-accent">{j.salary}</span>
                  <span className="v3-job-desc">{j.desc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'split':
      return (
        <div className="v3-slide-inner">
          <div className="v3-split-wrap" data-anim>
            {[slide.splitL, slide.splitR].map((side, si) => side && (
              <div className={`v3-split-side ${si === 0 ? 'v3-split-left' : 'v3-split-right'}`} key={si} data-anim>
                <div className="v3-split-icon">{side.icon}</div>
                <div className="v3-split-tag">{side.tag}</div>
                <div className="v3-split-label">{side.label}</div>
                <ul className="v3-split-list">
                  {side.items.map((it, ii) => <li key={ii}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'skills':
      return (
        <div className="v3-slide-inner">
          <div className="v3-center" data-anim>
            <div className="v3-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v3-hl v3-hl-accent">{slide.hl2}</div>}
            <div className="v3-skills-grid" data-anim>
              {slide.skills?.map((cat, ci) => (
                <div className="v3-skill-cat" key={ci}>
                  <div className="v3-skill-cat-label">{cat.cat}</div>
                  <div className="v3-skill-items">
                    {cat.items.map((it, ii) => <span className="v3-skill-pill" key={ii}>{it}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'roadmap':
      return (
        <div className="v3-slide-inner">
          <div className="v3-center" data-anim>
            <div className="v3-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v3-hl v3-hl-accent">{slide.hl2}</div>}
            <div className="v3-steps">
              {slide.steps?.map((st, si) => (
                <div className="v3-step" key={si} data-anim style={{ '--delay': `${si * 0.1}s` } as React.CSSProperties}>
                  <div className="v3-step-num">{st.days}<span className="v3-step-unit">d</span></div>
                  <div className="v3-step-body">
                    <div className="v3-step-title">{st.title}</div>
                    <div className="v3-step-desc">{st.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'lessons':
      return (
        <div className="v3-slide-inner">
          <div className="v3-center" data-anim>
            <div className="v3-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v3-hl v3-hl-accent">{slide.hl2}</div>}
            <div className="v3-lessons">
              {slide.lessons?.map((ls, li) => (
                <div className="v3-lesson" key={li} data-anim style={{ '--delay': `${li * 0.09}s` } as React.CSSProperties}>
                  <div className="v3-lesson-num">{ls.num}</div>
                  <div className="v3-lesson-body">
                    <div className="v3-lesson-title">{ls.title}</div>
                    <div className="v3-lesson-desc">{ls.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'qalist':
      return (
        <div className="v3-slide-inner">
          <div className="v3-center" data-anim>
            <div className="v3-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v3-hl v3-hl-accent">{slide.hl2}</div>}
            <ol className="v3-qalist">
              {slide.questions?.map((q, qi) => (
                <li key={qi} data-anim style={{ '--delay': `${qi * 0.07}s` } as React.CSSProperties}>{q}</li>
              ))}
            </ol>
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    case 'qa':
      return (
        <div className="v3-slide-inner">
          <div className="v3-center" data-anim>
            <div className="v3-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v3-hl v3-hl-accent">{slide.hl2}</div>}
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );

    default:
      return (
        <div className="v3-slide-inner">
          <div className="v3-center" data-anim>
            <div className="v3-hl">{slide.hl}</div>
          </div>
          <div className="v3-counter">{num}/{String(total).padStart(2,'0')}</div>
        </div>
      );
  }
}

/* ── main component ── */
export function AppV3() {
  const [current, setCurrent] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const [gridOpen, setGridOpen] = useState(false);

  const go = (i: number) => setCurrent(Math.max(0, Math.min(total - 1, i)));

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

  /* GSAP stagger animation on slide change */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const gsap = (window as any).gsap;
    if (!gsap) return;
    const activeSlide = stage.querySelector('.v3-slide.active');
    if (!activeSlide) return;
    const anims = activeSlide.querySelectorAll('[data-anim]');
    if (anims.length === 0) return;
    gsap.fromTo(
      anims,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out', stagger: 0.1, clearProps: 'transform' }
    );
  }, [current]);

  const dotClass = (i: number) => `dot${i === current ? ' active' : i < current ? ' past' : ' future'}`;

  return (
    <>
      <div id="stage" ref={stageRef} data-act={LECTURE_META[current]?.act} className="v3-stage">
        {LECTURE_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`v3-slide${i === current ? ' active' : ''} act-${LECTURE_META[i]?.act?.toLowerCase()}`}
            id={`v3-slide-${i}`}
          >
            <SlideV3 slide={slide} idx={i} />
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
              <div className="grid-overlay-title">סקירת שקפים — V3 Keynote</div>
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
