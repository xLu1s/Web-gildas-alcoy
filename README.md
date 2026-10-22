# Web-gildas-alcoy

Web demo de **Gildas | Alcoy** (bar de gildas, tapas y vermú · Carrer Sant Maure, 32 · Alcoi). Sitio estático en [Astro](https://astro.build) 7.4.2 pensado para GitHub Pages.

**https://xlu1s.github.io/Web-gildas-alcoy/** (`site: 'https://xlu1s.github.io'`, `base: '/Web-gildas-alcoy'`, con W mayúscula).

## Desarrollo
Node.js >= 22.23.4 (Astro 7).
```bash
npm ci && npm run dev     # desarrollo
npm run build             # dist/
npm run preview           # sirve dist/ respetando el base
```

## Contenido
- Datos del negocio, horario y JSON-LD de horario: `src/data/site.ts` (horario de Instagram).
- Carta completa (transcrita de los PDF de `docs/`): `src/data/menu.ts`. Se muestra en la portada (#carta) y en `/carta/` (para el QR de mesa).
- Reseñas: `src/data/reviews.ts` (solo reseñas literales de 5★; rejilla 2×2 en escritorio y carrusel deslizable en móvil).
- Galería: `src/data/gallery.ts` + `src/assets/photos/`. Fuentes de cada imagen y del vídeo: `docs/FUENTES-imagenes.md`.
- Logo: `src/assets/gildas-logo.svg` (vectorizado del logo público de 526 px) y `gilda-icon.svg`. Sustituir por el vectorial oficial cuando lo pase el cliente.
- Hero: `src/components/Hero.astro`. Vídeo en `public/video/hero.{webm,mp4}` + `poster.jpg` (fragmento del reel https://www.instagram.com/reel/Dey_IVRzZ5g/). Para cambiarlo, sustituir esos archivos o pasar las props `webm`, `mp4` y `poster`.
- SEO: `src/layouts/Base.astro` (title/description, canonical, Open Graph, JSON-LD `BarOrPub` sin aggregateRating), `src/pages/sitemap.xml.ts`, `src/pages/robots.txt.ts`, `public/og-image.jpg` (1200×630).
- Capturas: `scripts/shots.py` (Playwright) con el `dist/` servido en `http://localhost:4321/Web-gildas-alcoy/`.

## Publicación en GitHub Pages
`.github/workflows/deploy.yml` (Node 22.23.4, `npm ci`, `npm run build`, publica `dist/`). En el repo: **Settings → Pages → Source = GitHub Actions** y push a `main`.
