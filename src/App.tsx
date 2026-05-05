import { useEffect, useRef, useState } from 'react';
import { SLIDES } from './slides';
import { useThreeScene } from './components/ThreeScene';
import './styles.css';
import { AppV2 } from './AppV2';
import { AppV3 } from './AppV3';
import { AppV4 } from './AppV4';
import { AppV5 } from './AppV5';
import { AppV6 } from './AppV6';

const _vParam = new URLSearchParams(window.location.search);
const VERSION = (_vParam.get('v') ?? _vParam.get('V') ?? '1');

const STAGGER_SELECTORS = [
  '.stop', '.why-card', '.stat-card', '.job-card', '.quote-card',
  '.act-card', '.skill-card', '.lesson-card', '.phase-card', '.q-card', '.proj-card'
];

const COUNTER_SELECTORS = '.stat-num, .why-card .num, .as-num';

const SLIDE_META = [
  { label: 'INTRO',                 act: 'INTRO' },
  { label: 'AGENDA',                act: 'INTRO' },
  { label: 'MY STORY',              act: 'I' },
  { label: 'WHY IE',                act: 'I' },
  { label: 'TRANSFORMATION',        act: 'I' },
  { label: 'THE SHIFT',             act: 'I' },
  { label: 'STATS',                 act: 'I' },
  { label: 'JOBS · JUNIOR',         act: 'II' },
  { label: 'JOBS · SENIOR',         act: 'II' },
  { label: 'QUOTES',                act: 'II' },
  { label: 'CLOSE TO HOME',         act: 'II' },
  { label: 'CALCALIST · 01.05.26',  act: 'II' },
  { label: 'DIVISION',              act: 'III' },
  { label: 'SYSTEMS VIEW',          act: 'III' },
  { label: 'MY AI · PROJECTS',      act: 'III' },
  { label: 'SKILLS',                act: 'III' },
  { label: 'ROADMAP',               act: 'III' },
  { label: 'IF I COULD DO OVER',    act: 'III' },
  { label: 'Q&A',                   act: 'III' },
  { label: 'THANKS',                act: 'OUTRO' }
];

function animateCounters(root: Element) {
  const els = root.querySelectorAll<HTMLElement>(COUNTER_SELECTORS);
  els.forEach(el => {
    if (el.dataset.counted === '1') return;
    const text = el.textContent || '';
    const match = text.match(/(-?[\d,]+(?:\.\d+)?)/);
    if (!match) return;
    const raw = match[1];
    const target = parseFloat(raw.replace(/,/g, ''));
    if (isNaN(target) || target === 0) return;
    el.dataset.counted = '1';

    const prefix = text.substring(0, match.index!);
    const suffix = text.substring(match.index! + raw.length);
    const isInt = !raw.includes('.');
    const useCommas = raw.includes(',') || target >= 1000;

    const duration = 1400;
    const delay = 350;
    const startTime = performance.now() + delay;

    function step(now: number) {
      if (now < startTime) {
        el.textContent = prefix + '0' + suffix;
        requestAnimationFrame(step);
        return;
      }
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = target * eased;
      let formatted: string;
      if (isInt) {
        formatted = useCommas ? Math.round(v).toLocaleString('en-US') : Math.round(v).toString();
      } else {
        formatted = v.toFixed(1);
      }
      el.textContent = prefix + formatted + suffix;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 12}s`,
            animationDuration: `${12 + Math.random() * 10}s`,
            background: i % 3 === 0
              ? 'radial-gradient(circle, rgba(255,107,53,0.9), transparent)'
              : i % 3 === 1
              ? 'radial-gradient(circle, rgba(255,182,39,0.8), transparent)'
              : 'radial-gradient(circle, rgba(0,217,192,0.7), transparent)'
          }}
        />
      ))}
    </div>
  );
}

export function App() {
  if (VERSION === '6') return <AppV6 />;
  if (VERSION === '5') return <AppV5 />;
  if (VERSION === '4') return <AppV4 />;
  if (VERSION === '3') return <AppV3 />;
  if (VERSION === '2') return <AppV2 />;

  const [current, setCurrent] = useState(0);
  const [hourPct, setHourPct] = useState(0);
  const [lectureStart, setLectureStart] = useState<number | null>(null);
  const [gridOpen, setGridOpen] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const total = SLIDES.length;

  useThreeScene(current === 13 && !gridOpen);

  const go = (i: number) => {
    const next = Math.max(0, Math.min(total - 1, i));
    setCurrent(next);
    setLectureStart(prev => prev ?? Date.now());
  };

  // Hour timer (starts on first navigation)
  useEffect(() => {
    if (lectureStart === null) return;
    const tick = () => {
      const elapsedMin = (Date.now() - lectureStart) / 1000 / 60;
      setHourPct(Math.min((elapsedMin / 60) * 100, 100));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [lectureStart]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'g' || e.key === 'G') { e.preventDefault(); setGridOpen(o => !o); return; }
      if (e.key === 'Escape') { setGridOpen(false); return; }
      if (gridOpen) return;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); go(current + 1); }
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); go(current - 1); }
      if (e.key === 'Home') go(0);
      if (e.key === 'End') go(total - 1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [current, total, gridOpen]);

  // Touch swipe (RTL: swipe right = next)
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    let touchX = 0;
    const onStart = (e: TouchEvent) => { touchX = e.touches[0].clientX; };
    const onEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 60) {
        if (dx > 0) go(current + 1); else go(current - 1);
      }
    };
    stage.addEventListener('touchstart', onStart, { passive: true });
    stage.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      stage.removeEventListener('touchstart', onStart);
      stage.removeEventListener('touchend', onEnd);
    };
  }, [current]);

  // Skill card click toggle (slide 15, index 15)
  useEffect(() => {
    if (current !== 15) return;
    const cards = document.querySelectorAll<HTMLElement>('.skill-card');
    const handler = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      cards.forEach(x => x.classList.remove('active'));
      target.classList.add('active');
    };
    cards.forEach(c => c.addEventListener('click', handler));
    return () => cards.forEach(c => c.removeEventListener('click', handler));
  }, [current]);

  // Stagger animations + animated counters on the active slide
  useEffect(() => {
    const activeSlide = stageRef.current?.querySelector('.slide.active');
    if (!activeSlide) return;
    STAGGER_SELECTORS.forEach(sel => {
      const items = activeSlide.querySelectorAll<HTMLElement>(sel);
      items.forEach((item, i) => {
        const parent = item.parentElement;
        if (parent && parent.classList.contains('anim-fade')) {
          parent.classList.remove('anim-fade');
          parent.style.animation = 'none';
          parent.style.opacity = '1';
        }
        item.style.animationDelay = (0.25 + i * 0.10) + 's';
        item.classList.add('stagger-anim');
      });
    });
    animateCounters(activeSlide);
  }, [current]);

  const dotClass = (i: number) =>
    `dot${i === current ? ' active' : i < current ? ' past' : ' future'}`;

  return (
    <>
      <div className="hour-bar"><div className="fill" style={{ width: hourPct + '%' }} /></div>

      <div id="stage" ref={stageRef} data-act={SLIDE_META[current]?.act}>
        {(current === 0 || current === total - 1) && <Particles />}
        {SLIDES.map((sl, i) => (
          <div
            key={i}
            className={`slide s${i + 1}${i === current ? ' active' : ''} act-${SLIDE_META[i]?.act?.toLowerCase()}`}
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
            <span className="counter-current">{String(current + 1).padStart(2, '0')}</span>
            <span className="counter-sep">/</span>
            <span className="counter-total">{String(total).padStart(2, '0')}</span>
          </div>
          <div className="dots">
            {SLIDES.map((_, i) => (
              <button key={i} className={dotClass(i)} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>
        </div>
        <button aria-label="next" disabled={current === total - 1} onClick={() => go(current + 1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="nav-grid-toggle" aria-label="Slide overview (G)" onClick={() => setGridOpen(o => !o)}>
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
              <div className="grid-overlay-title">סקירת השקפים</div>
              <div className="grid-overlay-hint">לחץ שקף כדי לקפוץ אליו · <kbd>Esc</kbd> או <kbd>G</kbd> לסגור</div>
            </div>
            <button className="grid-close" onClick={(e) => { e.stopPropagation(); setGridOpen(false); }} aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div className="thumb-grid" onClick={(e) => e.stopPropagation()}>
            {SLIDE_META.map((meta, i) => (
              <button
                key={i}
                className={`thumb act-${meta.act.toLowerCase()}${i === current ? ' current' : ''}`}
                onClick={() => { go(i); setGridOpen(false); }}
              >
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
