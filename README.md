# koko-site

Personal site of Eytan Shleizer — notebook, tools, about. Deployed at
[eytanshleizer.github.io/koko-site](https://eytanshleizer.github.io/koko-site).

Built with [Astro 5](https://astro.build/) + Tailwind. The hero scene
(animated star + Dyson rings + nebula) is a small Three.js composition; each
piece lives in its own module under `src/components/scene/`.

## Stack

- **Astro 5** — static site generator with content collections
- **MDX** — for posts that need to embed components or interactive bits
- **Mermaid** — diagrams render client-side from `\`\`\`mermaid` fenced blocks
- **Tailwind CSS** + `@tailwindcss/typography` for editorial prose
- **Three.js** — hero scene

## Local development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321/koko-site/`.

## Content

Notebook posts live in `src/content/notebook/` and follow this schema (see
`src/content/config.ts`):

```yaml
---
title: "Post title"
excerpt: "One-line summary."
date: 2026-01-01
fig: "FIG 1.X"   # optional
draft: false     # optional
---
```

Each post is one of:

- A flat markdown file: `src/content/notebook/some-slug.md`
- A folder with `index.md` and supporting files (images, components):
  `src/content/notebook/some-slug/index.md`

Posts are accessible at `/notebook/<slug>`. Mermaid diagrams use the
standard fenced-code syntax.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the
Astro site and publishes `dist/` to GitHub Pages.

## Layout

- `src/pages/` — routes
- `src/components/` — UI components (Nav, Footer, Hero pieces)
- `src/components/scene/` — Three.js modules (star, rings, etc.)
- `src/content/notebook/` — notebook posts
- `src/lib/` — small helpers (e.g. the remark-mermaid plugin)
- `src/layouts/Base.astro` — shared HTML shell
- `src/styles/global.css` — Tailwind layer + design tokens

## Archive

The original Quartz-based version of this site lives on the
[`archive/quartz`](https://github.com/eytanshleizer/koko-site/tree/archive/quartz)
branch.
