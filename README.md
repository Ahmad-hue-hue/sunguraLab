# SunguraLabs — Website

SunguraLabs: AI-integrated software development studio (Dar es Salaam, Tanzania).
Next.js App Router project with TypeScript, Tailwind and CSS Modules, built on
the Origin Kit "Outstand" template.

All business content lives in `data/site.ts` — prices, services, stats, process,
tools, target clients and the two-person team. Brand colours (emerald, gold,
ink-black) come from `styles/tokens.css`.

## Quick start

```bash
bun install
bun run dev
```

Open http://localhost:3100.

| Command | What it does |
| --- | --- |
| `bun run dev` | Development server on port 3100 |
| `bun run build` | Production build |
| `bun run start` | Serve the production build |
| `bun run lint` | ESLint |
| `bun run typecheck` | TypeScript, no emit |

## Deployment

The whole site prerenders to static HTML — every route is `○ (Static)`. It will
run anywhere that hosts a Next.js app:

- **Vercel** — import the repo, no configuration needed.
- **Netlify / Cloudflare** — use their Next.js adapter.
- **Self-hosted** — `bun run build && bun run start` behind a reverse proxy.