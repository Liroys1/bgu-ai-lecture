import { useEffect, useRef, useState } from 'react';
import { V5_SLIDES, V5_META, LSlide } from './lecture-data';
import './styles.css';
import './styles-v5.css';

const total = V5_SLIDES.length;

/* ── slide renderer ── */
function SlideV5({ slide, idx, animKey }: { slide: LSlide; idx: number; animKey: number }) {
  const num = String(idx + 1).padStart(2, '0');
  const totalStr = String(total).padStart(2, '0');
  const actLabel = slide.act === 'INTRO' || slide.act === 'OUTRO' ? slide.act : `ACT ${slide.act}`;

  const isAlarm = slide.type === 'alarm';

  const Header = () => (
    <div className="v5-header" dir="ltr">
      <span className="v5-header-mission">MISSION BRIEF</span>
      <span className="v5-header-sep">|</span>
      <span className="v5-header-act">{actLabel}</span>
      <span className="v5-header-sep">|</span>
      <span className="v5-header-label">{slide.label}</span>
      <span className="v5-header-spacer" />
      <span className="v5-header-counter">[{num}/{totalStr}]</span>
    </div>
  );

  /* ─ num color logic for bignum ─ */
  function numColor(slide: LSlide): string {
    if (!slide.num) return '#FFD60A';
    if (slide.num.startsWith('+')) return '#FFD60A';
    const lbl = slide.label || '';
    if (lbl.includes('EXPIRY') || lbl.includes('SKILL') || lbl.includes('EMPLOYER')) return '#EF233C';
    return '#FFD60A';
  }

  const renderContent = () => {
    switch (slide.type) {

      /* ── ALARM ── */
      case 'alarm':
        return (
          <div className="v5-alarm-slide" key={animKey}>
            <div className="v5-alarm-scan" />
            {slide.alarmLines?.map((line, li) => (
              <div
                key={li}
                className={`v5-alarm-line v5-alarm-line-${li}`}
                style={{ animationDelay: `${li * 0.4}s` }}
              >
                {line}
              </div>
            ))}
            {slide.sub && <div className="v5-alarm-sub">{slide.sub}</div>}
          </div>
        );

      /* ── HERO ── */
      case 'hero':
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                <div className="v5-hero-wrap">
                  {slide.photo && (
                    <div className="v5-hero-photo-ring">
                      <img
                        src={`data:image/jpeg;base64,${slide.photo}`}
                        alt={slide.hl}
                        className="v5-hero-photo"
                      />
                    </div>
                  )}
                  <div className="v5-hero-text">
                    <div className="v5-hero-eyebrow">BRIEFING OFFICER</div>
                    <div className="v5-hero-name">{slide.hl}</div>
                    {slide.hl2 && <div className="v5-hero-role">{slide.hl2}</div>}
                    {slide.sub && <div className="v5-hero-sub">{slide.sub}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      /* ── OUTRO ── */
      case 'outro':
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                <div className="v5-hero-wrap">
                  {slide.photo && (
                    <div className="v5-hero-photo-ring v5-hero-photo-ring--red">
                      <img
                        src={`data:image/jpeg;base64,${slide.photo}`}
                        alt={slide.hl}
                        className="v5-hero-photo"
                      />
                    </div>
                  )}
                  <div className="v5-hero-text">
                    <div className="v5-hero-name">{slide.hl}</div>
                    {slide.hl2 && <div className="v5-hero-role v5-red">{slide.hl2}</div>}
                    {slide.sub && <div className="v5-hero-sub">{slide.sub}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      /* ── BIGNUM ── */
      case 'bignum': {
        const col = numColor(slide);
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                <div className="v5-bignum-wrap">
                  <div className="v5-bignum-rule" style={{ background: col }} />
                  <div className="v5-bignum-number" style={{ color: col }} dir="ltr">
                    {slide.num}
                    {slide.unit && <span className="v5-bignum-unit" style={{ color: col }}>{slide.unit}</span>}
                  </div>
                  {slide.numDesc && <div className="v5-bignum-desc">{slide.numDesc}</div>}
                  {slide.context && <div className="v5-bignum-context">{slide.context}</div>}
                  {slide.source && <div className="v5-bignum-source" dir="ltr">{slide.source}</div>}
                </div>
              </div>
            </div>
          </div>
        );
      }

      /* ── QUOTE ── */
      case 'quote':
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                <div className="v5-quote-card">
                  <div className="v5-quote-intel-label" dir="ltr">INTEL:</div>
                  <div className="v5-quote-text">{slide.quote}</div>
                  <div className="v5-quote-footer">
                    <span className="v5-quote-author">{slide.author}</span>
                    {slide.authorRole && <span className="v5-quote-role">{slide.authorRole}</span>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      /* ── JOBLIST ── */
      case 'joblist':
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                <div className="v5-joblist-label" dir="ltr">TARGETS:</div>
                {slide.hl && <div className="v5-joblist-hl">{slide.hl}</div>}
                {slide.sub && <div className="v5-joblist-sub">{slide.sub}</div>}
                <div className="v5-jobs">
                  {slide.jobs?.map((j, ji) => (
                    <div className="v5-job" key={ji}>
                      <div className="v5-job-top">
                        <span className="v5-job-tag" dir="ltr">{j.tag}</span>
                        <span className="v5-job-title" dir="ltr">{j.title}</span>
                        <span className="v5-job-salary" dir="ltr">{j.salary}</span>
                      </div>
                      <div className="v5-job-bot">
                        <span className="v5-job-co" dir="ltr">{j.co}</span>
                        <span className="v5-job-desc">{j.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      /* ── SPLIT ── */
      case 'split':
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                <div className="v5-split-grid">
                  {slide.splitL && (
                    <div className="v5-split-panel v5-split-panel--yellow">
                      <div className="v5-split-panel-label" dir="ltr">EXISTING ASSETS</div>
                      <div className="v5-split-icon">{slide.splitL.icon}</div>
                      <div className="v5-split-title">{slide.splitL.label}</div>
                      <div className="v5-split-tag" dir="ltr">{slide.splitL.tag}</div>
                      <ul className="v5-split-list">
                        {slide.splitL.items.map((it, ii) => <li key={ii}>{it}</li>)}
                      </ul>
                    </div>
                  )}
                  <div className="v5-split-divider" />
                  {slide.splitR && (
                    <div className="v5-split-panel v5-split-panel--red">
                      <div className="v5-split-panel-label" dir="ltr">ACQUIRE</div>
                      <div className="v5-split-icon">{slide.splitR.icon}</div>
                      <div className="v5-split-title">{slide.splitR.label}</div>
                      <div className="v5-split-tag" dir="ltr">{slide.splitR.tag}</div>
                      <ul className="v5-split-list">
                        {slide.splitR.items.map((it, ii) => <li key={ii}>{it}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );

      /* ── SKILLS ── */
      case 'skills':
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                {slide.hl && <div className="v5-skills-hl">{slide.hl}</div>}
                {slide.hl2 && <div className="v5-skills-hl2">{slide.hl2}</div>}
                <div className="v5-skills-table">
                  {slide.skills?.map((cat, ci) => (
                    <div className="v5-skill-row" key={ci}>
                      <div className="v5-skill-cat" dir="ltr">{cat.cat}</div>
                      <div className="v5-skill-pills">
                        {cat.items.map((it, ii) => (
                          <span className="v5-skill-pill" key={ii}>{it}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      /* ── ROADMAP ── */
      case 'roadmap':
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                {slide.hl && <div className="v5-roadmap-hl">{slide.hl}</div>}
                {slide.hl2 && <div className="v5-roadmap-hl2">{slide.hl2}</div>}
                <div className="v5-steps">
                  {slide.steps?.map((st, si) => (
                    <div className="v5-step" key={si}>
                      <div className="v5-step-left">
                        <div className="v5-step-phase" dir="ltr">DAY_{st.days}</div>
                        <div className="v5-step-days" dir="ltr">{st.days}</div>
                        {si < (slide.steps?.length ?? 0) - 1 && (
                          <div className="v5-step-connector" />
                        )}
                      </div>
                      <div className="v5-step-body">
                        <div className="v5-step-title">{st.title}</div>
                        <div className="v5-step-desc">{st.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      /* ── LESSONS ── */
      case 'lessons':
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                {slide.hl && <div className="v5-lessons-hl">{slide.hl}</div>}
                {slide.hl2 && <div className="v5-lessons-hl2">{slide.hl2}</div>}
                <div className="v5-lessons">
                  {slide.lessons?.map((ls, li) => (
                    <div className="v5-lesson" key={li}>
                      <div className="v5-lesson-num">{ls.num}</div>
                      <div className="v5-lesson-body">
                        <div className="v5-lesson-title">
                          <span className="v5-lesson-dash">—</span> {ls.title}
                        </div>
                        <div className="v5-lesson-desc">{ls.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      /* ── QALIST ── */
      case 'qalist':
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                <div className="v5-debrief-label" dir="ltr">DEBRIEF:</div>
                <div className="v5-qa-questions">
                  {slide.questions?.map((q, qi) => (
                    <div className="v5-qa-item" key={qi}>
                      <span className="v5-qa-counter" dir="ltr">{String(qi + 1).padStart(2, '0')}</span>
                      <span className="v5-qa-text">{q}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      /* ── QA ── */
      case 'qa':
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                <div className="v5-qa-centered">
                  {slide.hl && <div className="v5-qa-hl">{slide.hl}</div>}
                  {slide.hl2 && <div className="v5-qa-hl2">{slide.hl2}</div>}
                </div>
              </div>
            </div>
          </div>
        );

      /* ── STATEMENT ── */
      case 'statement':
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                {slide.hl && <div className="v5-statement-hl">{slide.hl}</div>}
                {slide.hl2 && <div className="v5-statement-hl2">{slide.hl2}</div>}
                {slide.sub && <div className="v5-statement-sub">{slide.sub}</div>}
              </div>
            </div>
          </div>
        );

      /* ── DEFAULT ── */
      default:
        return (
          <div className="v5-slide-inner" key={animKey}>
            <Header />
            <div className="v5-content">
              <div className="v5-content-inner" key={animKey}>
                {slide.hl && <div className="v5-statement-hl">{slide.hl}</div>}
                {slide.hl2 && <div className="v5-statement-hl2">{slide.hl2}</div>}
              </div>
            </div>
          </div>
        );
    }
  };

  if (isAlarm) {
    return (
      <>{renderContent()}</>
    );
  }

  return <>{renderContent()}</>;
}

/* ── main component ── */
export function AppV5() {
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
  }, [current, gridOpen]);

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

  const dotClass = (i: number) =>
    `dot${i === current ? ' active' : i < current ? ' past' : ' future'}`;

  return (
    <>
      <div id="stage" ref={stageRef} data-act={V5_META[current]?.act} className="v5-stage">
        {V5_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`v5-slide${i === current ? ' active' : ''} act-${V5_META[i]?.act?.toLowerCase()}`}
            id={`v5-slide-${i}`}
          >
            <SlideV5 slide={slide} idx={i} animKey={i === current ? current : -1} />
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
            {V5_SLIDES.map((_, i) => (
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
              <div className="grid-overlay-title">סקירת שקפים — V5 Mission Brief</div>
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
            {V5_META.map((meta, i) => (
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
