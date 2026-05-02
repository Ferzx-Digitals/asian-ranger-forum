<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Skills — When to Use Which

## Decision Tree

**Starting visual/UI work?**
→ Run `ui-ux-pro-max` first (`--design-system` flag) to get colors, typography, style.
→ Then use `magic` MCP to find pre-built component code from 21st.dev.
→ Then implement using `vercel-react-best-practices`.

**Writing or reviewing any React/Next.js code?**
→ `vercel-react-best-practices` always. Covers waterfalls, bundle size, rerenders, server perf, caching.

**Designing a component's API (props, context, state shape)?**
→ `vercel-composition-patterns` after best-practices. Covers boolean props, compound components, React 19 APIs.

**Adding animations or page transitions?**
→ `vercel-react-view-transitions` only. Do not use other skills for animation.

**Auditing existing UI for accessibility or UX compliance?**
→ `web-design-guidelines` only. Fetches live rules, outputs `file:line` findings.

## Skill Reference

| Skill | Use When | Never Use For |
|-------|----------|---------------|
| `vercel-react-best-practices` | Writing/reviewing React or Next.js code | Visual design decisions |
| `vercel-composition-patterns` | Shaping component API, props, context | Performance or animation |
| `vercel-react-view-transitions` | Any animation or transition work | Non-animation code |
| `web-design-guidelines` | UI audit, a11y review | Building new UI |
| `ui-ux-pro-max` | Design system, colors, typography, style | React perf rules (use vercel-react-best-practices instead) |

## Overlap Warnings

- `ui-ux-pro-max` has a `react`/`nextjs` domain — **ignore it**, use `vercel-react-best-practices` for code.
- `vercel-react-best-practices` and `vercel-composition-patterns` both cover React — best-practices = perf, composition-patterns = API shape. Apply both when building components.
- `magic` MCP + `ui-ux-pro-max` are complementary, not duplicates: ui-ux-pro-max decides design intent, magic fetches actual component code.

---

# Project Architecture

No skill covers folder structure. These rules are the authority.

## About This Project

**2nd Asian Ranger Congress 2026** — marketing/landing page for a conservation summit in Thimphu, Bhutan (2–4 December 2026). This is a public-facing, largely static site. Features: parallax hero with mountain imagery, stats bar, expression of interest form.

## Folder Structure

```
asian-ranger-forum/
├── app/                          # Routing only — no business logic here
│   ├── (marketing)/              # Route group, no URL impact
│   ├── layout.tsx                # Root layout — imports from src/brand/
│   ├── globals.css               # Tailwind @import + CSS custom props only
│   ├── favicon.ico
│   └── not-found.tsx
│
├── src/
│   ├── brand/                    # ← SINGLE SOURCE OF TRUTH for visual identity
│   │   ├── fonts.ts              # next/font instances (Cormorant Garamond, Inter)
│   │   ├── colors.ts             # Color tokens as typed constants
│   │   ├── typography.ts         # Font size scale, line heights, tracking
│   │   ├── metadata.ts           # Default SEO Metadata object for layout.tsx
│   │   ├── theme.ts              # CSS custom property definitions
│   │   └── index.ts              # Re-exports everything — import from here always
│   │
│   ├── components/               # Shared, controlled UI components
│   │   ├── ui/                   # Primitives: Button, Input, Card, Badge… (shadcn)
│   │   │   └── [name].tsx        # All have 'use client' — browser-only
│   │   └── layout/               # Shell components: Header, Footer, Nav
│   │
│   ├── features/                 # Self-contained feature modules
│   │   └── [feature]/
│   │       ├── components/       # Feature-local components
│   │       ├── hooks/            # Feature-local hooks
│   │       ├── actions/          # Server Actions for this feature
│   │       ├── types.ts          # Feature-local types
│   │       └── index.ts          # Public API — only import features through this
│   │
│   ├── hooks/                    # App-wide custom hooks
│   ├── lib/                      # Pure utilities and helpers (no React)
│   └── types/                    # Global TypeScript types and interfaces
│
└── public/                       # Static assets only
```

## Rules Agents Must Follow

### brand/ — non-negotiable
- All font definitions live in `src/brand/fonts.ts`. Never define fonts anywhere else.
- All color tokens live in `src/brand/colors.ts`. Never hardcode hex/hsl values outside this file.
- `app/layout.tsx` imports fonts and metadata **only** from `src/brand/index.ts`.
- `globals.css` references CSS custom properties defined in `src/brand/theme.ts`. Never define tokens in CSS directly.
- To change a color, font, or spacing token: edit `src/brand/` only. Nothing else should need changing.

### Controlled components
- UI components in `src/components/ui/` accept `value` + `onChange` props — no internal state for the controlled value.
- State lives in the feature or page that owns the data, not in primitives.
- Use `vercel-composition-patterns` rules when designing any component API.

### Server vs Client boundary
- `app/` files default Server Components. Add `'use client'` only when the component needs browser APIs, event handlers, or React state.
- All `src/components/ui/` components have `'use client'` — they're Radix UI primitives.
- Server Actions go in `src/features/[feature]/actions/`. Never inline them in page files.
- Data fetching happens in Server Components or Server Actions — not in `useEffect`.
- Follow `vercel-react-best-practices` `server-` and `async-` rules for all data work.

### Module boundaries
- Features are self-contained. Cross-feature imports are forbidden — lift shared code to `src/components/` or `src/lib/` instead.
- Always import a feature through its `index.ts` barrel, never from internal paths.
- `src/components/ui/` components have zero feature knowledge — pure presentational.

### Adding a new route
1. Create folder in `app/` (use route groups `(name)` to avoid URL pollution).
2. Add `page.tsx` — Server Component by default.
3. Feature logic goes in `src/features/[feature]/`, not in the route file.
4. Route file only: imports feature components, passes server-fetched data as props.
