# burhanuddin.dev — Personal Portfolio

A production-grade personal portfolio built to reflect the same standards I hold my client work to: clean architecture, deliberate design, and zero shortcuts.

Projects pull live from the GitHub API. No manual card updates, no stale data.

---

## Tech Stack

- **React 18** + **TypeScript** — component-driven UI with full type safety
- **Vite** — instant dev server, optimised production builds
- **Tailwind CSS** + **shadcn/ui** — utility-first styling with accessible, composable primitives
- **Radix UI** — unstyled, accessible component foundations
- **React Router v6** — client-side routing across five pages
- **TanStack Query** — async state management for live GitHub data
- **Three.js** (lazy-loaded) — 3D hero scene with zero impact on initial paint

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, about narrative, stack, principles, process & services |
| `/projects` | Live GitHub repos — sorted by stars, paginated, with language breakdown |
| `/experience` | Skills and technical experience |
| `/education` | Academic background |
| `/contact` | Contact form |

---

## Features

- **Live GitHub integration** — public repos, stars, forks, top language, and language distribution bar all fetched at runtime from the GitHub API
- **3D hero scene** — Three.js canvas lazy-loaded so the page paints instantly
- **Scroll-reveal animations** — staggered fade-up on every section using an Intersection Observer hook
- **Parallax layers** — subtle depth effect on the manifesto section
- **Smooth scroll** — native scroll behaviour enhanced with a custom hook
- **Scroll progress bar** — thin accent bar at the top of the viewport
- **Fully responsive** — mobile-first grid, collapsing nav, readable type at every breakpoint
- **Dark minimal aesthetic** — muted backgrounds, accent blue highlights, monospace details

---

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev

# Production build
npm run build

# Preview the production build locally
npm run preview