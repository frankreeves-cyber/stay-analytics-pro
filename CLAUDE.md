# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**GuestJourney** is a hotel analytics dashboard built with React, TypeScript, Vite, and shadcn/ui. It provides insights into guest behavior, conversion funnels, booking pipelines, and cancellation patterns for hotel properties.

This is a Lovable.dev-managed project. Changes can be made via Lovable or directly in this repository (both sync automatically).

## Development Commands

### Core Development
```bash
npm run dev          # Start dev server on http://localhost:8080
npm run build        # Production build
npm run build:dev    # Development build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Project Architecture

### Tech Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite with SWC plugin for fast compilation
- **UI Library**: shadcn/ui (Radix UI primitives with Tailwind CSS)
- **Routing**: React Router v6
- **Data Fetching**: TanStack Query (React Query)
- **Charts**: Recharts
- **Styling**: Tailwind CSS with CSS variables for theming
- **Forms**: React Hook Form with Zod validation

### Directory Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components (auto-generated, avoid manual edits)
│   ├── Layout.tsx    # Main app layout with sidebar navigation
│   └── KPICard.tsx   # Reusable KPI metric card
├── pages/            # Route components (one per page)
│   ├── Auth.tsx
│   ├── Overview.tsx
│   ├── JourneyExplorer.tsx
│   ├── Funnel.tsx
│   ├── Pipeline.tsx
│   ├── Personas.tsx
│   ├── Cancellations.tsx
│   └── Integration.tsx
├── hooks/
│   ├── use-mobile.tsx    # Responsive breakpoint detection
│   └── use-toast.ts      # Toast notification hook
├── lib/
│   └── utils.ts          # cn() utility for className merging
├── App.tsx               # Route definitions and auth logic
├── main.tsx              # App entry point
└── index.css             # Global styles and CSS variables
```

### Key Architectural Patterns

#### Authentication
- Simple localStorage-based auth (`guestjourney_auth` key)
- `ProtectedRoute` wrapper component in `App.tsx` handles route protection
- All pages except `/auth` require authentication
- Auth check: `localStorage.getItem("guestjourney_auth") === "true"`

#### Routing Structure
All routes use the `Layout` component wrapper which provides:
- Left sidebar navigation with 7 main sections
- Top bar with date range selector and action buttons
- Mobile-responsive menu with overlay

Main routes:
- `/` → Overview (dashboard)
- `/journey` → Journey Explorer (visitor paths)
- `/funnel` → Funnel & Conversion
- `/pipeline` → Pipeline Revenue
- `/personas` → Guest Personas
- `/cancellations` → Cancellations tracking
- `/integration` → Integration Health
- `/auth` → Login page (unprotected)

#### Styling System
- Uses HSL-based CSS variables for theming (defined in `src/index.css`)
- Custom color tokens: `sidebar-*`, `chart-*`, `success`, `warning`
- Path alias `@/` maps to `src/` directory
- Utility function `cn()` merges Tailwind classes using `clsx` and `tailwind-merge`

#### Component Patterns
- shadcn/ui components in `src/components/ui/` are auto-generated via CLI
- Custom components should go in `src/components/` (not in ui/ subdirectory)
- Pages use card-based layouts with `Card`, `CardHeader`, `CardContent` components
- Charts use Recharts with themed colors via `hsl(var(--chart-N))` pattern

### Data Flow
- Currently using mock/static data in page components
- TanStack Query is configured but not actively used yet
- Toast notifications via Sonner (`import { toast } from "sonner"`)

## Adding shadcn/ui Components

To add new shadcn/ui components:
```bash
npx shadcn@latest add [component-name]
```

The component will be auto-generated in `src/components/ui/` based on `components.json` configuration.

## Tailwind Configuration

Custom theme extensions in `tailwind.config.ts`:
- Extended color palette for sidebar, charts, success/warning states
- Custom shadow variables
- Custom animations for accordions
- All colors use CSS variables for easy theming

## Important Notes

- This project was initially scaffolded by Lovable.dev
- The `lovable-tagger` plugin is used in development mode for component tracking
- TypeScript strict mode is partially disabled (see `tsconfig.json`)
- Dev server runs on port 8080 (not the Vite default 5173)
- Mobile-first responsive design with breakpoints at `lg:` (1024px)
