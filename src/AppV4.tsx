import { useEffect, useRef, useState } from 'react';
import { V4_SLIDES, V4_META, LSlide } from './lecture-data';
import './styles.css';
import './styles-v4.css';

const total = V4_SLIDES.length;

/* ── per-slide JSX renderer ── */
function SlideV4({ slide, idx }: { slide: LSlide; idx: number }) {
  const num = String(idx + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');
  const actLabel = slide.act === 'INTRO' || slide.act === 'OUTRO' ? slide.act : `ACT ${slide.act}`;

  /* Header: hidden on chapter slides (they handle their own top area) */
  const Header = () => (
    <div className="v4-header">
      <span className="v4-section">{actLabel} · {slide.label}</span>
      <span className="v4-masthead">BGU · AI LECTURE · 2026</span>
      <span className="v4-counter" dir="ltr">p.{num}/{totalStr}</span>
    </div>
  );

  /* ── CHAPTER: full-dark memoir chapter opener ── */
  if (slide.type === 'chapter') {
    return (
      <div className="v4-slide-inner v4-chapter-inner">
        <div className="v4-chapter-num" data-anim>{slide.chNum}</div>
        <div className="v4-chapter-title" data-anim>{slide.chTitle}</div>
        <div className="v4-chapter-rule" data-anim />
        <div className="v4-chapter-sub" data-anim>{slide.chSub}</div>
        <div className="v4-chapter-footer">p.{num}/{totalStr}</div>
      </div>
    );
  }

  /* ── HERO: portrait introduction card ── */
  if (slide.type === 'hero') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content v4-hero-content" data-anim>
          <div className="v4-hero-portrait">
            {slide.photo && (
              <div className="v4-hero-photo">
                <img src={`data:image/jpeg;base64,${slide.photo}`} alt={slide.hl ?? 'photo'} />
              </div>
            )}
            <div className="v4-hero-amber-rule" />
            <div className="v4-hero-name">{slide.hl}</div>
            {slide.hl2 && <div className="v4-hero-role">{slide.hl2}</div>}
            {slide.sub && <div className="v4-hero-byline">{slide.sub}</div>}
          </div>
        </div>
      </div>
    );
  }

  /* ── OUTRO: closing personal card ── */
  if (slide.type === 'outro') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content v4-hero-content" data-anim>
          <div className="v4-hero-portrait">
            {slide.photo && (
              <div className="v4-hero-photo">
                <img src={`data:image/jpeg;base64,${slide.photo}`} alt={slide.hl ?? 'photo'} />
              </div>
            )}
            <div className="v4-hero-amber-rule" />
            <div className="v4-hero-name">{slide.hl}</div>
            {slide.hl2 && <div className="v4-outro-hl2">{slide.hl2}</div>}
            {slide.sub && <div className="v4-hero-byline">{slide.sub}</div>}
          </div>
        </div>
      </div>
    );
  }

  /* ── STATEMENT: underlined personal statement ── */
  if (slide.type === 'statement') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content" data-anim>
          <div className="v4-stmt-hl">{slide.hl}</div>
          {slide.hl2 && (
            <div className="v4-stmt-hl2">
              <span className="v4-stmt-dash">—</span> {slide.hl2}
            </div>
          )}
          {slide.sub && (
            <>
              <div className="v4-amber-rule-thin" />
              <div className="v4-stmt-sub">{slide.sub}</div>
            </>
          )}
        </div>
      </div>
    );
  }

  /* ── ERA-VISUAL: horizontal timeline as personal journey ── */
  if (slide.type === 'era-visual') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content" data-anim>
          <div className="v4-era-intro">{slide.hl}</div>
          <div className="v4-eras">
            {slide.eras?.map((era, ei) => (
              <div className={`v4-era${era.active ? ' v4-era-active' : ''}`} key={ei}>
                <div className="v4-era-year">{era.year}</div>
                <div className="v4-era-title">{era.title}</div>
                <div className="v4-era-tools">{era.tools}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── BIGNUM: newspaper pullquote stat ── */
  if (slide.type === 'bignum') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content" data-anim>
          <div className="v4-pullquote">
            <div className="v4-pullnum" dir="ltr">
              {slide.num}<span className="v4-pullunit">{slide.unit}</span>
            </div>
            {slide.numDesc && <div className="v4-pulldesc">{slide.numDesc}</div>}
            {slide.source && <div className="v4-pullsource">{slide.source}</div>}
          </div>
        </div>
      </div>
    );
  }

  /* ── QUOTE: personal letter / conversation ── */
  if (slide.type === 'quote') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content" data-anim>
          <div className="v4-letter-card">
            <div className="v4-letter-quote">{slide.quote}</div>
            <div className="v4-letter-author">
              <span className="v4-letter-name">{slide.author}</span>
              {slide.authorRole && (
                <span className="v4-letter-role"> · {slide.authorRole}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── JOBLIST: opportunities that await ── */
  if (slide.type === 'joblist') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content" data-anim>
          {slide.hl && <div className="v4-jl-hl">{slide.hl}</div>}
          {slide.sub && <div className="v4-jl-sub">{slide.sub}</div>}
          <div className="v4-jl-cards">
            {slide.jobs?.map((j, i) => (
              <div className="v4-jl-card" key={i}>
                <div className="v4-jl-card-top">
                  <span className="v4-jl-tag">{j.tag}</span>
                  <span className="v4-jl-title" dir="ltr">{j.title}</span>
                  <span className="v4-jl-salary" dir="ltr">{j.salary}</span>
                </div>
                <div className="v4-jl-card-bot">
                  <span className="v4-jl-co" dir="ltr">{j.co}</span>
                  <span className="v4-jl-desc">{j.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── SPLIT: what you have / what completes it ── */
  if (slide.type === 'split') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content" data-anim>
          <div className="v4-split-wrap">
            {slide.splitL && (
              <div className="v4-split-panel v4-split-left">
                <div className="v4-split-icon">{slide.splitL.icon}</div>
                <div className="v4-split-cat">{slide.splitL.tag}</div>
                <div className="v4-split-label">{slide.splitL.label}</div>
                <ul className="v4-split-list">
                  {slide.splitL.items.map((it, ii) => <li key={ii}>{it}</li>)}
                </ul>
              </div>
            )}
            {slide.splitR && (
              <div className="v4-split-panel v4-split-right">
                <div className="v4-split-icon">{slide.splitR.icon}</div>
                <div className="v4-split-cat">{slide.splitR.tag}</div>
                <div className="v4-split-label">{slide.splitR.label}</div>
                <ul className="v4-split-list">
                  {slide.splitR.items.map((it, ii) => <li key={ii}>{it}</li>)}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  /* ── SKILLS: study list ── */
  if (slide.type === 'skills') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content" data-anim>
          {slide.hl && <div className="v4-sk-hl">{slide.hl}</div>}
          {slide.hl2 && <div className="v4-sk-hl2">{slide.hl2}</div>}
          <div className="v4-sk-table">
            {slide.skills?.map((cat, ci) => (
              <div className="v4-sk-row" key={ci}>
                <div className="v4-sk-cat">{cat.cat}</div>
                <div className="v4-sk-pills">
                  {cat.items.map((it, ii) => (
                    <span className="v4-sk-pill" key={ii}>{it}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── ROADMAP: 90-day journal chapters ── */
  if (slide.type === 'roadmap') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content" data-anim>
          {slide.hl && <div className="v4-rm-hl">{slide.hl}</div>}
          {slide.hl2 && <div className="v4-rm-hl2">{slide.hl2}</div>}
          <div className="v4-rm-steps">
            {slide.steps?.map((st, si) => (
              <div className="v4-rm-step" key={si}>
                <div className="v4-rm-days" dir="ltr">{st.days}</div>
                <div className="v4-rm-vr" />
                <div className="v4-rm-body">
                  <div className="v4-rm-title">{st.title}</div>
                  <div className="v4-rm-desc">{st.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── LESSONS: letters to self / diary entries ── */
  if (slide.type === 'lessons') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content" data-anim>
          {slide.hl && <div className="v4-ls-hl">{slide.hl}</div>}
          {slide.hl2 && <div className="v4-ls-hl2">{slide.hl2}</div>}
          <div className="v4-ls-entries">
            {slide.lessons?.map((ls, li) => (
              <div className="v4-ls-entry" key={li}>
                <div className="v4-ls-num">{ls.num}</div>
                <div className="v4-ls-body">
                  <div className="v4-ls-title">{ls.title}</div>
                  <div className="v4-ls-desc">{ls.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* ── QALIST: intimate questions ── */
  if (slide.type === 'qalist') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content" data-anim>
          {slide.hl && <div className="v4-qa-hl">{slide.hl}</div>}
          {slide.hl2 && <div className="v4-qa-hl2">{slide.hl2}</div>}
          <ol className="v4-qalist">
            {slide.questions?.map((q, qi) => (
              <li key={qi}>
                <span className="v4-qalist-num">{String(qi + 1).padStart(2, '0')}</span>
                <span className="v4-qalist-q">{q}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  /* ── QA: open Q&A ── */
  if (slide.type === 'qa') {
    return (
      <div className="v4-slide-inner">
        <Header />
        <div className="v4-content" data-anim>
          {slide.hl && <div className="v4-stmt-hl">{slide.hl}</div>}
          {slide.hl2 && <div className="v4-stmt-hl2"><span className="v4-stmt-dash">—</span> {slide.hl2}</div>}
        </div>
      </div>
    );
  }

  /* ── FALLBACK ── */
  return (
    <div className="v4-slide-inner">
      <Header />
      <div className="v4-content" data-anim>
        {slide.hl && <div className="v4-stmt-hl">{slide.hl}</div>}
      </div>
    </div>
  );
}

/* ── main component ── */
export function AppV4() {
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

  /* animate [data-anim] elements on slide change */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const activeSlide = stage.querySelector('.v4-slide.active') as HTMLElement | null;
    if (!activeSlide) return;
    const targets = activeSlide.querySelectorAll('[data-anim]') as NodeListOf<HTMLElement>;
    targets.forEach((el, i) => {
      el.style.transition = 'none';
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transition = `opacity 0.5s ease-out ${i * 0.08}s, transform 0.5s ease-out ${i * 0.08}s`;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        });
      });
    });
  }, [current]);

  const dotClass = (i: number) =>
    `dot${i === current ? ' active' : i < current ? ' past' : ' future'}`;

  const isChapter = (i: number) => V4_SLIDES[i]?.type === 'chapter';

  return (
    <>
      <div
        id="stage"
        ref={stageRef}
        data-act={V4_META[current]?.act}
        className="v4-stage"
      >
        {V4_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`v4-slide${i === current ? ' active' : ''} act-${V4_META[i]?.act?.toLowerCase()}${isChapter(i) ? ' v4-chapter-slide' : ''}`}
            id={`v4-slide-${i}`}
          >
            <SlideV4 slide={slide} idx={i} />
          </div>
        ))}
      </div>

      {/* shared nav from styles.css */}
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
            {V4_SLIDES.map((_, i) => (
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

      {/* grid overlay */}
      {gridOpen && (
        <div className="grid-overlay" onClick={() => setGridOpen(false)}>
          <div className="grid-overlay-head">
            <div>
              <div className="grid-overlay-title">סקירת שקפים — V4 Memoir</div>
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
            {V4_META.map((meta, i) => (
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
