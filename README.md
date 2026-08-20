# Ankitha — 3D AI/ML Engineer Portfolio

A production-oriented React + Vite portfolio using React Three Fiber, Drei, Framer Motion, Lenis and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Optional live previews

Copy `.env.example` to `.env` and add deployed project URLs. The project modal automatically shows a live iframe preview when a URL is present.

## Deploy to Vercel

Import the repository into Vercel. The included `vercel.json` uses the normal Vite build (`npm run build`) and `dist` output.

## Included assets

- `public/assets/hero.png` — supplied hero artwork
- `public/assets/Resume.pdf` — supplied resume
- `public/assets/certificates/` — supplied certificates
- `public/assets/leafguard-cover.png` — supplied project cover
- `public/assets/attendai-cover.png` — supplied project cover


### Important
This version intentionally does not import `@react-three/drei`; the 3D scene uses native React Three Fiber/Three.js primitives to avoid Vite optimized-dependency issues.
