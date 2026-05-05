import { useEffect, useRef, useState } from 'react';
import { V3_SLIDES, V3_META, LSlide } from './lecture-data';
import './styles.css';
import './styles-v3.css';

const total = V3_SLIDES.length;

/* ── per-slide JSX renderer ── */
function SlideV3({ slide, idx }: { slide: LSlide; idx: number }) {
  const num = String(idx + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');
  const actLabel = slide.act === 'INTRO' || slide.act === 'OUTRO' ? slide.act : `ACT ${slide.act}`;

  const Header = () => (
    <div className="v3-header">
      <span className="v3-header-left">{num}<span className="v3-header-sep">/</span>{totalStr}</span>
      <span className="v3-header-masthead">THE NUMBERS DON'T LIE · BGU 2026</span>
      <span className="v3-header-right">{actLabel} · {slide.label}</span>
    </div>
  );

  switch (slide.type) {

    /* ──────────────────────────────────────────────
       STAT-GROUP — horizontal bar chart
    ────────────────────────────────────────────── */
    case 'stat-group':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content">
            <div data-anim>
              <div className="v3-hl">{slide.hl}</div>
              {slide.hl2 && <div className="v3-hl2">{slide.hl2}</div>}
            </div>
            <div className="v3-stat-bars" data-anim>
              {slide.stats?.map((stat, i) => (
                <div className="v3-stat-row" key={i} data-anim>
                  <div className="v3-stat-num" dir="ltr">
                    {stat.num}<span className="v3-stat-unit">{stat.unit}</span>
                  </div>
                  <div className="v3-stat-bar-wrap">
                    <div className="v3-stat-bar" style={{ width: `${stat.pct}%` }} />
                  </div>
                  <div className="v3-stat-meta">
                    <span className="v3-stat-label">{stat.label}</span>
                    <span className="v3-stat-source">{stat.source}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       ERA-VISUAL — horizontal timeline columns
    ────────────────────────────────────────────── */
    case 'era-visual':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content">
            <div data-anim>
              <div className="v3-hl">{slide.hl}</div>
            </div>
            <div className="v3-eras" data-anim>
              {slide.eras?.map((era, i) => (
                <div
                  className={`v3-era-col${era.active ? ' v3-era-active' : ''}`}
                  key={i}
                  data-anim
                >
                  <div className="v3-era-year">{era.year}</div>
                  <div className="v3-era-title">{era.title}</div>
                  <div className="v3-era-tools">{era.tools}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       HERO — photo left, text right
    ────────────────────────────────────────────── */
    case 'hero':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content v3-hero-content">
            <div className="v3-hero-grid">
              {slide.photo && (
                <div className="v3-hero-photo" data-anim>
                  <img src={`data:image/jpeg;base64,${slide.photo}`} alt={slide.hl} />
                </div>
              )}
              <div className="v3-hero-text" data-anim>
                <div className="v3-hero-eyebrow">DATA JOURNALISM · BGU 2026</div>
                <div className="v3-hl">{slide.hl}</div>
                <div className="v3-hero-rule" />
                {slide.hl2 && <div className="v3-hl2">{slide.hl2}</div>}
                {slide.sub && <div className="v3-muted">{slide.sub}</div>}
              </div>
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       OUTRO — centered, full width
    ────────────────────────────────────────────── */
    case 'outro':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content v3-hero-content">
            <div className="v3-hero-grid">
              {slide.photo && (
                <div className="v3-hero-photo" data-anim>
                  <img src={`data:image/jpeg;base64,${slide.photo}`} alt={slide.hl} />
                </div>
              )}
              <div className="v3-hero-text" data-anim>
                <div className="v3-hl">{slide.hl}</div>
                <div className="v3-hero-rule" />
                {slide.hl2 && <div className="v3-hl v3-gold">{slide.hl2}</div>}
                {slide.sub && <div className="v3-muted">{slide.sub}</div>}
              </div>
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       STATEMENT — bold centered
    ────────────────────────────────────────────── */
    case 'statement':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content v3-statement-content">
            <div data-anim>
              <div className="v3-hl">{slide.hl}</div>
              {slide.hl2 && <div className="v3-hl v3-blue">{slide.hl2}</div>}
            </div>
            {slide.sub && (
              <div data-anim>
                <div className="v3-thin-rule" />
                <div className="v3-muted v3-sub-text">{slide.sub}</div>
              </div>
            )}
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       BIGNUM — massive number left, desc right
    ────────────────────────────────────────────── */
    case 'bignum':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content v3-bignum-content">
            <div className="v3-bignum-grid">
              <div className="v3-bignum-left" data-anim>
                <div className="v3-bignum" dir="ltr">
                  {slide.num}<span className="v3-bignum-unit">{slide.unit}</span>
                </div>
              </div>
              <div className="v3-bignum-right" data-anim>
                {slide.numDesc && <div className="v3-bignum-desc">{slide.numDesc}</div>}
                {slide.context && (
                  <div className="v3-bignum-context">• {slide.context}</div>
                )}
                {slide.source && <div className="v3-source-mono">{slide.source}</div>}
              </div>
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       QUOTE — magazine citation style
    ────────────────────────────────────────────── */
    case 'quote':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content v3-quote-content">
            <div className="v3-quote-wrap" data-anim>
              <div className="v3-quote-text">"{slide.quote}"</div>
              <div className="v3-quote-meta">
                <span className="v3-blue">{slide.author}</span>
                {slide.authorRole && (
                  <span className="v3-muted"> · {slide.authorRole}</span>
                )}
              </div>
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       JOBLIST — data table
    ────────────────────────────────────────────── */
    case 'joblist':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content">
            <div data-anim>
              <div className="v3-hl">{slide.hl}</div>
              {slide.sub && <div className="v3-muted">{slide.sub}</div>}
            </div>
            <div className="v3-job-table" data-anim>
              {slide.jobs?.map((j, i) => (
                <div
                  className={`v3-job-row${i % 2 === 1 ? ' v3-job-row-alt' : ''}`}
                  key={i}
                  data-anim
                >
                  <div className="v3-job-row-main">
                    <span className="v3-job-tag-pill" dir="ltr">{j.tag}</span>
                    <span className="v3-job-title" dir="ltr">{j.title}</span>
                    <span className="v3-job-right">
                      <span className="v3-job-co" dir="ltr">{j.co}</span>
                      <span className="v3-job-salary v3-gold" dir="ltr">{j.salary}</span>
                    </span>
                  </div>
                  <div className="v3-job-desc">{j.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       SPLIT — two column comparison
    ────────────────────────────────────────────── */
    case 'split':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content v3-split-content">
            <div className="v3-split-grid">
              {[slide.splitL, slide.splitR].map((side, si) => side && (
                <div
                  className={`v3-split-side ${si === 0 ? 'v3-split-human' : 'v3-split-ai'}`}
                  key={si}
                  data-anim
                >
                  <div className="v3-split-icon">{side.icon}</div>
                  <div className={`v3-split-tag-label${si === 0 ? ' v3-blue' : ' v3-gold'}`}>
                    {side.tag}
                  </div>
                  <div className="v3-split-label">{side.label}</div>
                  <ul className="v3-split-list">
                    {side.items.map((it, ii) => <li key={ii}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       SKILLS — category rows with tag pills
    ────────────────────────────────────────────── */
    case 'skills':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content">
            <div data-anim>
              <div className="v3-hl">{slide.hl}</div>
              {slide.hl2 && <div className="v3-hl2">{slide.hl2}</div>}
            </div>
            <div className="v3-skills-table" data-anim>
              {slide.skills?.map((cat, ci) => (
                <div className="v3-skill-row" key={ci} data-anim>
                  <div className="v3-skill-cat-label">{cat.cat}</div>
                  <div className="v3-skill-pills">
                    {cat.items.map((it, ii) => (
                      <span className="v3-skill-pill" key={ii}>{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       ROADMAP — timeline steps
    ────────────────────────────────────────────── */
    case 'roadmap':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content">
            <div data-anim>
              <div className="v3-hl">{slide.hl}</div>
              {slide.hl2 && <div className="v3-hl2">{slide.hl2}</div>}
            </div>
            <div className="v3-roadmap">
              {slide.steps?.map((st, si) => (
                <div className="v3-step" key={si} data-anim>
                  <div className="v3-step-day">
                    <span>{st.days}</span>
                    <span className="v3-step-day-unit">d</span>
                  </div>
                  {si < (slide.steps?.length ?? 0) - 1 && <div className="v3-step-connector" />}
                  <div className="v3-step-body">
                    <div className="v3-step-title">{st.title}</div>
                    <div className="v3-step-desc">{st.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       LESSONS — numbered findings
    ────────────────────────────────────────────── */
    case 'lessons':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content">
            <div data-anim>
              <div className="v3-hl">{slide.hl}</div>
              {slide.hl2 && <div className="v3-hl2">{slide.hl2}</div>}
            </div>
            <div className="v3-lessons">
              {slide.lessons?.map((ls, li) => (
                <div key={li}>
                  {li > 0 && <div className="v3-thin-rule" />}
                  <div className="v3-lesson" data-anim>
                    <div className="v3-lesson-num">{ls.num}</div>
                    <div className="v3-lesson-body">
                      <div className="v3-lesson-title">{ls.title}</div>
                      <div className="v3-lesson-desc">{ls.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       QALIST — questions
    ────────────────────────────────────────────── */
    case 'qalist':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content">
            <div data-anim>
              <div className="v3-hl">{slide.hl}</div>
              {slide.hl2 && <div className="v3-hl2">{slide.hl2}</div>}
            </div>
            <div className="v3-qalist" data-anim>
              {slide.questions?.map((q, qi) => (
                <div className="v3-qa-item" key={qi} data-anim>
                  <span className="v3-qa-counter" dir="ltr">
                    {String(qi + 1).padStart(2, '0')}
                  </span>
                  <span className="v3-qa-text">{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       QA — open Q&A
    ────────────────────────────────────────────── */
    case 'qa':
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content v3-statement-content">
            <div data-anim>
              <div className="v3-hl">{slide.hl}</div>
              {slide.hl2 && <div className="v3-hl v3-blue">{slide.hl2}</div>}
            </div>
          </div>
        </div>
      );

    /* ──────────────────────────────────────────────
       DEFAULT fallback
    ────────────────────────────────────────────── */
    default:
      return (
        <div className="v3-slide-inner">
          <Header />
          <div className="v3-content v3-statement-content">
            <div data-anim>
              <div className="v3-hl">{slide.hl}</div>
              {slide.hl2 && <div className="v3-hl v3-blue">{slide.hl2}</div>}
            </div>
          </div>
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

  /* keyboard navigation */
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
  }, [current, gridOpen]);

  /* touch swipe */
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
    return () => {
      stage.removeEventListener('touchstart', onStart);
      stage.removeEventListener('touchend', onEnd);
    };
  }, [current]);

  /* GSAP stagger animation on slide change */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const gsap = (window as any).gsap;
    if (gsap) {
      const activeSlide = stage.querySelector('.v3-slide.active');
      if (!activeSlide) return;
      const anims = activeSlide.querySelectorAll('[data-anim]');
      if (anims.length === 0) return;
      gsap.fromTo(
        anims,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.5, ease: 'power2.out' }
      );
    } else {
      /* fallback CSS animation when GSAP not available */
      const activeSlide = stage.querySelector('.v3-slide.active');
      if (!activeSlide) return;
      const anims = activeSlide.querySelectorAll('[data-anim]') as NodeListOf<HTMLElement>;
      anims.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;
        requestAnimationFrame(() => requestAnimationFrame(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }));
      });
    }
  }, [current]);

  const dotClass = (i: number) =>
    `dot${i === current ? ' active' : i < current ? ' past' : ' future'}`;

  return (
    <>
      <div
        id="stage"
        ref={stageRef}
        data-act={V3_META[current]?.act}
        className="v3-stage"
      >
        {V3_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`v3-slide${i === current ? ' active' : ''} act-${V3_META[i]?.act?.toLowerCase()}`}
            id={`v3-slide-${i}`}
          >
            <SlideV3 slide={slide} idx={i} />
          </div>
        ))}
      </div>

      <div className="nav">
        <button aria-label="prev" disabled={current === 0} onClick={() => go(current - 1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <div className="nav-center">
          <div className="slide-counter">
            <span className="counter-current">{String(current + 1).padStart(2, '0')}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">{String(total).padStart(2, '0')}</span>
          </div>
          <div className="dots">
            {V3_SLIDES.map((_, i) => (
              <button
                key={i}
                className={dotClass(i)}
                onClick={() => go(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
        <button aria-label="next" disabled={current === total - 1} onClick={() => go(current + 1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="nav-grid-toggle" aria-label="Grid (G)" onClick={() => setGridOpen(o => !o)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </button>
      </div>

      {gridOpen && (
        <div className="grid-overlay" onClick={() => setGridOpen(false)}>
          <div className="grid-overlay-head">
            <div>
              <div className="grid-overlay-title">The Numbers Don't Lie · V3</div>
              <div className="grid-overlay-hint">לחץ שקף · <kbd>Esc</kbd> לסגור</div>
            </div>
            <button
              className="grid-close"
              onClick={(e) => { e.stopPropagation(); setGridOpen(false); }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="thumb-grid" onClick={(e) => e.stopPropagation()}>
            {V3_META.map((meta, i) => (
              <button
                key={i}
                className={`thumb act-${meta.act.toLowerCase()}${i === current ? ' current' : ''}`}
                onClick={() => { go(i); setGridOpen(false); }}
              >
                <div className="thumb-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="thumb-label">{meta.label}</div>
                <div className="thumb-act">
                  {meta.act === 'INTRO' || meta.act === 'OUTRO' ? meta.act : `ACT ${meta.act}`}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
