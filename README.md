# bgu-ai-lecture

Vite + React + TypeScript app for the lecture deck.

## Dev

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
npm run preview  # serve dist/
```

## Structure

- `src/styles.css` — all CSS (extracted as-is from the original).
- `src/assets/images.ts` — base64 image constants.
- `src/slides.ts` — 20 slide functions returning HTML strings (+ `topbar` helper).
- `src/components/ThreeScene.tsx` — Three.js system view (used on slide 13), via CDN `THREE` global.
- `src/App.tsx` — slide navigation, keyboard/touch input, hour timer, stagger animations.
- `src/main.tsx` — React entry.
- `legacy.html` — original single-file version (kept for reference).
