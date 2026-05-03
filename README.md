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

- `src/styles.css` — all CSS, including the mobile responsive overrides at the bottom.
- `src/assets/images.ts` — base64 image constants.
- `src/slides/` — one file per slide.
  - `slide1.ts`–`slide19.ts` + `slideArticle.ts` — each exports a function returning HTML.
  - `topbar.ts` — shared topbar helper.
  - `index.ts` — exports the ordered `SLIDES` array.
- `src/components/ThreeScene.tsx` — Three.js system view (slide 13), via CDN `THREE` global.
- `src/App.tsx` — slide navigation, keyboard/touch input, hour timer, stagger animations.
- `src/main.tsx` — React entry.
- `render.yaml` — Render static-site build config (`npm install && npm run build`, publishes `dist/`).
- `legacy.html` — original single-file version (kept for reference).

## Editing a slide

Each slide is its own file. Open `src/slides/slideN.ts` and edit the template literal — the layout/content is plain HTML. Vite hot-reloads on save.
