import { useEffect, useRef, useState } from 'react';
import { LECTURE_SLIDES, LECTURE_META, LSlide } from './lecture-data';
import './styles.css';
import './styles-v4.css';

const total = LECTURE_SLIDES.length;

/* ── per-slide JSX renderer ── */
function SlideV4({ slide, idx }: { slide: LSlide; idx: number }) {
  const num = String(idx + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');
  const actLabel = slide.act === 'INTRO' || slide.act === 'OUTRO' ? slide.act : `ACT ${slide.act}`;

  const Header = () => (
    <div className="v4-header">
      <span className="v4-section">{actLabel} · {slide.label}</span>
      <div className="v4-header-center">
        <span className="v4-masthead">BGU · AI LECTURE · 2026</span>
      </div>
      <span className="v4-counter" dir="ltr">p.{num}/{totalStr}</span>
    </div>
  );

  switch (slide.type) {
    case 'hero':
      return (
        <div className="v4-slide-inner v4-hero">
          <Header />
          <div className="v4-content v4-hero-content">
            <div className="v4-rule" />
            <div className="v4-hero-grid">
              {slide.photo && (
                <div className="v4-hero-photo">
                  <img src={`data:image/jpeg;base64,${slide.photo}`} alt={slide.hl} />
                </div>
              )}
              <div className="v4-hero-text">
                <div className="v4-eyebrow">מרצה</div>
                <div className="v4-hl">{slide.hl}</div>
                <div className="v4-rule v4-rule-thin" />
                {slide.hl2 && <div className="v4-deck">{slide.hl2}</div>}
                {slide.sub && <div className="v4-byline">{slide.sub}</div>}
              </div>
            </div>
          </div>
        </div>
      );

    case 'outro':
      return (
        <div className="v4-slide-inner v4-outro">
          <Header />
          <div className="v4-content v4-hero-content">
            <div className="v4-rule" />
            <div className="v4-hero-grid">
              {slide.photo && (
                <div className="v4-hero-photo">
                  <img src={`data:image/jpeg;base64,${slide.photo}`} alt={slide.hl} />
                </div>
              )}
              <div className="v4-hero-text">
                <div className="v4-hl">{slide.hl}</div>
                <div className="v4-rule v4-rule-thin" />
                {slide.hl2 && <div className="v4-hl v4-accent">{slide.hl2}</div>}
                {slide.sub && <div className="v4-byline">{slide.sub}</div>}
              </div>
            </div>
          </div>
        </div>
      );

    case 'statement':
      return (
        <div className="v4-slide-inner">
          <Header />
          <div className="v4-content">
            <div className="v4-rule" />
            <div className="v4-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v4-hl v4-accent">{slide.hl2}</div>}
            {slide.sub && (
              <>
                <div className="v4-rule v4-rule-thin" />
                <div className="v4-deck">{slide.sub}</div>
              </>
            )}
          </div>
        </div>
      );

    case 'act':
      return (
        <div className="v4-slide-inner v4-act-slide">
          <Header />
          <div className="v4-content v4-act-content">
            <div className="v4-act-label">— {actLabel} —</div>
            <div className="v4-rule" />
            <div className="v4-hl v4-act-title">{slide.actTitle}</div>
            {slide.actSub && <div className="v4-deck">{slide.actSub}</div>}
            <div className="v4-rule v4-rule-thin" />
          </div>
        </div>
      );

    case 'bignum':
      return (
        <div className="v4-slide-inner">
          <Header />
          <div className="v4-content">
            <div className="v4-rule" />
            <div className="v4-bignum-layout">
              <div className="v4-bignum-left">
                <div className="v4-num" dir="ltr">
                  {slide.num}<span className="v4-unit">{slide.unit}</span>
                </div>
              </div>
              <div className="v4-bignum-right">
                {slide.numDesc && <div className="v4-num-desc">{slide.numDesc}</div>}
                {slide.source && <div className="v4-source">{slide.source}</div>}
              </div>
            </div>
          </div>
        </div>
      );

    case 'quote':
      return (
        <div className="v4-slide-inner">
          <Header />
          <div className="v4-content">
            <div className="v4-rule" />
            <div className="v4-quote-wrap">
              <div className="v4-quote-text">
                <span className="v4-quote-mark">"</span>{slide.quote}<span className="v4-quote-mark">"</span>
              </div>
              <div className="v4-rule v4-rule-thin" />
              <div className="v4-author">
                <span className="v4-accent">{slide.author}</span>
                {slide.authorRole && <span className="v4-author-role"> · {slide.authorRole}</span>}
              </div>
            </div>
          </div>
        </div>
      );

    case 'joblist':
      return (
        <div className="v4-slide-inner">
          <Header />
          <div className="v4-content">
            <div className="v4-rule" />
            <div className="v4-hl">{slide.hl}</div>
            {slide.sub && <div className="v4-kicker">{slide.sub}</div>}
            <div className="v4-jobs">
              {slide.jobs?.map((j, i) => (
                <div className="v4-job" key={i}>
                  <div className="v4-job-header">
                    <span className="v4-job-tag">{j.tag}</span>
                    <span className="v4-job-title" dir="ltr">{j.title}</span>
                    <span className="v4-job-salary v4-accent" dir="ltr">{j.salary}</span>
                  </div>
                  <div className="v4-job-footer">
                    <span className="v4-job-co" dir="ltr">{j.co}</span>
                    <span className="v4-job-desc">{j.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'split':
      return (
        <div className="v4-slide-inner">
          <Header />
          <div className="v4-content">
            <div className="v4-rule" />
            <div className="v4-split-grid">
              {[slide.splitL, slide.splitR].map((side, si) => side && (
                <div className={`v4-split-side ${si === 0 ? 'v4-split-human' : 'v4-split-ai'}`} key={si}>
                  <div className="v4-split-icon">{side.icon}</div>
                  <div className="v4-split-tag">{side.tag}</div>
                  <div className="v4-hl v4-split-label">{side.label}</div>
                  <div className="v4-rule v4-rule-thin" />
                  <ul className="v4-split-list">
                    {side.items.map((it, ii) => <li key={ii}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'skills':
      return (
        <div className="v4-slide-inner">
          <Header />
          <div className="v4-content">
            <div className="v4-rule" />
            <div className="v4-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v4-hl v4-accent">{slide.hl2}</div>}
            <div className="v4-skills-table">
              {slide.skills?.map((cat, ci) => (
                <div className="v4-skill-row" key={ci}>
                  <div className="v4-skill-cat">{cat.cat}</div>
                  <div className="v4-skill-items">
                    {cat.items.map((it, ii) => (
                      <span className="v4-skill-tag" key={ii}>{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'roadmap':
      return (
        <div className="v4-slide-inner">
          <Header />
          <div className="v4-content">
            <div className="v4-rule" />
            <div className="v4-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v4-hl v4-accent">{slide.hl2}</div>}
            <div className="v4-steps">
              {slide.steps?.map((st, si) => (
                <div className="v4-step" key={si}>
                  <div className="v4-step-days" dir="ltr">{st.days}<span>d</span></div>
                  <div className="v4-step-vr" />
                  <div className="v4-step-body">
                    <div className="v4-step-title">{st.title}</div>
                    <div className="v4-step-desc">{st.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'lessons':
      return (
        <div className="v4-slide-inner">
          <Header />
          <div className="v4-content">
            <div className="v4-rule" />
            <div className="v4-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v4-hl v4-accent">{slide.hl2}</div>}
            <div className="v4-lessons">
              {slide.lessons?.map((ls, li) => (
                <div className="v4-lesson" key={li}>
                  <div className="v4-lesson-num v4-accent">{ls.num}</div>
                  <div className="v4-lesson-body">
                    <div className="v4-lesson-title">{ls.title}</div>
                    <div className="v4-lesson-desc">{ls.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'qalist':
      return (
        <div className="v4-slide-inner">
          <Header />
          <div className="v4-content">
            <div className="v4-rule" />
            <div className="v4-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v4-hl v4-accent">{slide.hl2}</div>}
            <ol className="v4-qalist">
              {slide.questions?.map((q, qi) => (
                <li key={qi}>{q}</li>
              ))}
            </ol>
          </div>
        </div>
      );

    case 'qa':
      return (
        <div className="v4-slide-inner">
          <Header />
          <div className="v4-content">
            <div className="v4-rule" />
            <div className="v4-hl">{slide.hl}</div>
            {slide.hl2 && <div className="v4-hl v4-accent">{slide.hl2}</div>}
          </div>
        </div>
      );

    default:
      return (
        <div className="v4-slide-inner">
          <Header />
          <div className="v4-content">
            <div className="v4-rule" />
            <div className="v4-hl">{slide.hl}</div>
          </div>
        </div>
      );
  }
}

/* ── main component ── */
export function AppV4() {
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

  /* animate on slide change */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const active = stage.querySelector('.v4-slide.active .v4-content') as HTMLElement | null;
    if (!active) return;
    active.style.opacity = '0';
    active.style.transform = 'translateY(18px)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        active.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        active.style.opacity = '1';
        active.style.transform = 'translateY(0)';
      });
    });
  }, [current]);

  const dotClass = (i: number) => `dot${i === current ? ' active' : i < current ? ' past' : ' future'}`;

  return (
    <>
      <div id="stage" ref={stageRef} data-act={LECTURE_META[current]?.act} className="v4-stage">
        {LECTURE_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`v4-slide${i === current ? ' active' : ''} act-${LECTURE_META[i]?.act?.toLowerCase()}`}
            id={`v4-slide-${i}`}
          >
            <SlideV4 slide={slide} idx={i} />
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
              <div className="grid-overlay-title">סקירת שקפים — V4 Editorial</div>
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
