import { useEffect, useRef, useState } from 'react';
import { SLIDES } from './slides';
import { useThreeScene } from './components/ThreeScene';
import './styles.css';

const STAGGER_SELECTORS = [
  '.stop', '.why-card', '.stat-card', '.job-card', '.quote-card',
  '.act-card', '.skill-card', '.lesson-card', '.phase-card', '.q-card', '.proj-card'
];

export function App() {
  const [current, setCurrent] = useState(0);
  const [hourPct, setHourPct] = useState(0);
  const [lectureStart, setLectureStart] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const total = SLIDES.length;

  useThreeScene(current === 13);

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
      if (e.key === 'ArrowLeft' || e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); go(current + 1); }
      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); go(current - 1); }
      if (e.key === 'Home') go(0);
      if (e.key === 'End') go(total - 1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [current, total]);

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

  // Stagger animations on the active slide
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
  }, [current]);

  return (
    <>
      <div className="hour-bar"><div className="fill" style={{ width: hourPct + '%' }} /></div>
      <div id="stage" ref={stageRef}>
        {SLIDES.map((sl, i) => (
          <div
            key={i}
            className={`slide s${i + 1}${i === current ? ' active' : ''}`}
            id={`slide-${i}`}
            dangerouslySetInnerHTML={{ __html: sl() }}
          />
        ))}
      </div>
      <div className="nav">
        <button aria-label="prev" disabled={current === 0} onClick={() => go(current - 1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
        <div className="dots">
          {SLIDES.map((_, i) => (
            <button key={i} className={`dot${i === current ? ' active' : ''}`} onClick={() => go(i)} />
          ))}
        </div>
        <button aria-label="next" disabled={current === total - 1} onClick={() => go(current + 1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
      </div>
    </>
  );
}
