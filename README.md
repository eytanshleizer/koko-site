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

## Content workflow

> **For the full authoring convention, see [POST-AUTHORING.md](./POST-AUTHORING.md).**
> Folder structure, frontmatter, available components, multi-file posts, and
> a copy-pasteable AI-agent system prompt.

The **iCloud Blog folder is the source of truth** for posts. The Astro
content collection in `src/content/notebook/` is a derived mirror — what
gets deployed.

```
~/Library/Mobile Documents/com~apple~CloudDocs/Blog/posts/   ← write here
                       │
                       │  npm run sync-blog
                       ▼
src/content/notebook/                                        ← derived
                       │
                       │  git push origin main
                       ▼
                 GitHub Pages                                ← live site
```

### Authoring

Write posts in `~/Library/.../CloudDocs/Blog/posts/`. **Each post is its
own folder** with an `index.md` (or `index.mdx` for component embeds).
The folder name becomes the URL slug:

```
posts/some-slug/
  index.md          ← or index.mdx for component embeds
  diagram.svg       ← optional — referenced from the post
  …
```

`posts/some-slug/index.md` → `/notebook/some-slug`

Frontmatter (see `src/content/config.ts`):

```yaml
---
title: "Post title"           # required
date: 2026-01-01              # required
excerpt: "One-line summary."  # optional — used in listings
draft: false                  # optional
---
```

### Syncing

Before committing, run:

```bash
npm run sync-blog
```

This copies everything from `~/.../Blog/posts/` to `src/content/notebook/`
(wiping the destination first, so removed posts disappear). Then commit
the resulting changes and push:

```bash
git add src/content/notebook
git commit -m "post: …"
git push
```

The GitHub Actions workflow picks up the push and deploys.

### Embeds

Markdown posts (`.md`) get standard prose styling plus support for ` ```mermaid `
fenced code blocks (rendered client-side). MDX posts (`.mdx`) can also
import and use components — see `src/components/post/` for Callout, Stat,
Aside, Figure.

### Overriding the blog source

If your blog folder is somewhere else, set `BLOG_SOURCE_DIR`:

```bash
BLOG_SOURCE_DIR=/path/to/posts npm run sync-blog
```

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
