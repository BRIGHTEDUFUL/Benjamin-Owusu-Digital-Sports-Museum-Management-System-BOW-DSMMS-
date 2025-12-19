GFA Digital Museum (React + Vite)
=================================

Live site: https://brighteduful.github.io/Benjamin-Owusu-Digital-Sports-Museum-Management-System-BOW-DSMMS-

Overview
--------
Interactive digital museum for Ghana Football Association history. Built with Vite, React, TypeScript, Tailwind, and shadcn/ui. Deployed to GitHub Pages with a repo-specific base path so routing works under a subdirectory.

Key features
------------
- Hero slideshow with image error fallbacks and progress indicators
- Archives with cards, filters, and lightbox (scroll lock fixes and backdrop close)
- Exhibits and visitor CTAs with responsive layouts and animated buttons
- Responsive header/footer with logo fallbacks (SVG + PNG)
- Client-side routing with BrowserRouter basename for GitHub Pages

Tech stack
----------
- Vite 5 (React + SWC), TypeScript
- Tailwind CSS, shadcn/ui, Radix primitives
- React Router v6, lucide-react icons

Getting started
---------------
Prerequisites: Node 18+ and npm.

```bash
git clone https://github.com/BRIGHTEDUFUL/Benjamin-Owusu-Digital-Sports-Museum-Management-System-BOW-DSMMS-.git
cd Benjamin-Owusu-Digital-Sports-Museum-Management-System-BOW-DSMMS-
npm install
npm run dev
```

Scripts
-------
- npm run dev — start Vite dev server
- npm run build — production build to dist/
- npm run preview — serve the production build locally
- npm run lint — eslint check

Deployment (GitHub Pages)
-------------------------
- The Vite base and BrowserRouter basename are set to `/Benjamin-Owusu-Digital-Sports-Museum-Management-System-BOW-DSMMS-/` for the current repo.
- Workflow: .github/workflows/deploy-pages.yml builds and deploys dist/ on pushes to main.
- Live URL pattern: `https://<username>.github.io/<repo>/`

If you fork/rename the repo, update both values:
1) vite.config.ts → base: "/<your-repo>/"
2) src/App.tsx → BrowserRouter basename="/<your-repo>/"

Assets and reliability
----------------------
- Hero images are imported from src/assets so they bundle with the build.
- Logo uses PNG with SVG fallback and an onError handler.
- Lightbox restores body scroll on close to avoid scroll lock.

Structure (high level)
----------------------
- src/pages/Index.tsx — hero, stats, featured archives, CTA, news
- src/pages/Archives.tsx — archive grid/list, filters, lightbox
- src/components/layout/Header.tsx and Footer.tsx — navigation and footer
- src/components/archive/Lightbox.tsx — image modal with keyboard support
- src/assets/ — bundled images

Troubleshooting
---------------
- 404s or broken routing after renaming repo: update Vite base and BrowserRouter basename as noted above, then npm run build and push to main.
- Broken hero images: ensure hero-1..4 stay in src/assets or adjust imports in Index.tsx.
- GH Pages not updating: check Actions tab for deploy-pages workflow logs.
