# CLAUDE.md - RecuStep HP Codebase Guide

## Project Overview

This is the corporate website for 株式会社リクステップ (RecuStep Co., Ltd.), a web development company based in Osaka, Japan. The site provides information about their services including:
- HP/LP制作 (Homepage/Landing Page creation)
- アプリ開発 (App development)
- 採用支援 (Recruitment support)
- システム開発 (System development)
- アート事業 (Art subscription service - ArtBloom)
- 飲食店支援 (Restaurant matching app - 食ラボ)

**Site URL**: https://recustep.com

## Technology Stack

### Core Framework
- **Next.js 15.5.4** (App Router)
- **React 19.1.1**
- **TypeScript 5.2.2**
- **Node.js** (requires increased memory: `--max_old_space_size=8192`)

### Styling & UI
- **Tailwind CSS 3.4.17** with `tailwindcss-animate`
- **Radix UI** (comprehensive component library)
- **shadcn/ui** component system
- **Framer Motion** for animations
- **Lucide React** for icons
- **next-themes** for theme management

### Additional Libraries
- **Supabase** (@supabase/supabase-js) - Backend/Database
- **React Hook Form** with Zod validation
- **date-fns** for date formatting
- **Embla Carousel** for carousels
- **Recharts** for charts/graphs
- **Sonner** for toast notifications
- **class-variance-authority** & **clsx** for conditional styling

### Build & Deployment
- **Static Export** (`output: 'export'` in next.config.js)
- **next-sitemap** for sitemap generation
- **ESLint** with Next.js config
- Images are unoptimized for static export compatibility

## Codebase Structure

```
/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout with metadata, analytics, JSON-LD
│   ├── page.tsx                 # Homepage
│   ├── globals.css              # Global styles and CSS variables
│   ├── metadata.ts              # Homepage metadata
│   ├── sitemap.ts               # Dynamic sitemap generation
│   ├── robots.ts                # Robots.txt route (for static export)
│   ├── blog/                    # Blog section
│   ├── columns/                 # Article/column pages
│   │   ├── homepage-osaka-*/    # Individual column pages
│   │   ├── webagency-osaka-*/   # Web agency related columns
│   │   ├── page.tsx             # Columns listing page
│   │   ├── page.client.tsx      # Client component for columns
│   │   ├── metadata.ts          # Columns page metadata
│   │   └── layout.tsx           # Columns layout
│   ├── company/                 # Company information
│   ├── contact/                 # Contact page
│   ├── lp/                      # Landing pages
│   │   ├── page.tsx             # LP homepage
│   │   ├── services/            # LP services page
│   │   ├── works/               # LP works page
│   │   └── layout.tsx           # LP specific layout
│   ├── privacy/                 # Privacy policy
│   ├── services/                # Service pages
│   │   ├── page.tsx             # Services listing (wrapper)
│   │   ├── page.client.tsx      # Services listing (client component)
│   │   ├── metadata.ts          # Services metadata
│   │   ├── hp-lp/               # HP/LP service detail
│   │   ├── app-development/     # App development service detail
│   │   ├── recruitment/         # Recruitment service detail
│   │   ├── system/              # System development service detail
│   │   ├── artbloom/            # ArtBloom service detail
│   │   └── syokulab/            # Syokulab service detail
│   └── terms/                   # Terms of service
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Navbar.tsx           # Main navigation
│   │   ├── NavbarLP.tsx         # LP specific navigation
│   │   └── FixedBottomFooter.tsx # Footer component
│   ├── sections/                # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Works.tsx
│   │   ├── Columns.tsx
│   │   └── Contact.tsx
│   ├── lp/                      # LP specific components
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Problems.tsx
│   │   ├── Solution.tsx
│   │   ├── Flow.tsx
│   │   ├── Plans.tsx
│   │   ├── Review.tsx
│   │   ├── FAQ.tsx
│   │   ├── CTA.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   ├── ui/                      # shadcn/ui components (50+ components)
│   │   ├── accordion.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── form.tsx
│   │   └── ... (many more)
│   └── theme-provider.tsx       # Theme context provider
│
├── lib/
│   └── utils.ts                 # Utility functions (cn for className merging)
│
├── hooks/
│   └── use-toast.ts             # Toast notification hook
│
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   │   └── hero/                # Hero images for services
│   ├── favicon/                 # Favicon files
│   └── og/                      # Open Graph images
│
├── supabase/
│   └── migrations/              # Database migrations
│
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── components.json              # shadcn/ui configuration
├── next-sitemap.config.js       # Sitemap configuration
└── package.json                 # Dependencies and scripts
```

## Critical Code Patterns

### 1. Page Structure Pattern (Server/Client Split)

Most pages follow this pattern to support static export with client-side features:

**page.tsx** (Server Component):
```typescript
import PageClient from "./page.client";

export { metadata } from "./metadata";

export default function PageRoute() {
  return <PageClient />;
}
```

**page.client.tsx** (Client Component):
```typescript
"use client";

import { useState } from "react";
// ... imports

export default function PageClient() {
  // Client-side logic here
  return (/* JSX */);
}
```

**metadata.ts** (Metadata):
```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title",
  description: "Page description",
  alternates: {
    canonical: "https://recustep.com/page",
  },
  // ... OG, Twitter, robots
};
```

**⚠️ IMPORTANT**: Always follow this three-file pattern for new pages that need client-side interactivity.

### 2. Import Path Aliases

The project uses absolute imports with the `@/` prefix:

```typescript
import Navbar from '@/components/layout/Navbar';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
```

**Available aliases** (from tsconfig.json):
- `@/*` → maps to project root
- Defined in components.json:
  - `@/components` → components directory
  - `@/lib/utils` → lib/utils.ts
  - `@/ui` → components/ui
  - `@/hooks` → hooks directory

### 3. Styling Conventions

- **Tailwind-first**: All styling uses Tailwind CSS classes
- **CSS Variables**: Theme colors are defined as CSS variables in globals.css
- **cn() utility**: Always use for conditional/merged classNames

```typescript
import { cn } from '@/lib/utils';

<div className={cn(
  "base-class",
  isActive && "active-class",
  className
)} />
```

### 4. Responsive Design Breakpoints

From tailwind.config.ts:
- `xs`: 375px
- `sm`: 640px (Tailwind default)
- `md`: 768px (Tailwind default)
- `lg`: 1024px (Tailwind default)
- `xl`: 1280px (Tailwind default)

Common responsive patterns:
```typescript
<div className="px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl sm:text-5xl font-extrabold">
<div className="grid md:grid-cols-2 gap-8">
```

## SEO & Metadata Management

### Metadata Structure

Each page should have comprehensive metadata including:

1. **Basic Meta**
   - title (with template)
   - description
   - keywords (optional but common in this project)

2. **Canonical URL**
   ```typescript
   alternates: {
     canonical: "https://recustep.com/path",
   }
   ```

3. **Open Graph**
   - title, description, url, siteName, locale, type
   - images (1200x630px recommended)

4. **Twitter Card**
   - card: "summary_large_image"
   - title, description, images

5. **Robots**
   ```typescript
   robots: {
     index: true,
     follow: true,
     googleBot: {
       index: true,
       follow: true,
       'max-video-preview': -1,
       'max-image-preview': 'large',
       'max-snippet': -1,
     },
   }
   ```

### Root Layout Features

app/layout.tsx includes:
- **JSON-LD structured data** (Organization + Service)
- **Google Analytics 4** (GA4) via gtag.js
- **Microsoft Clarity** analytics
- **Theme provider** (light theme only, system disabled)
- Comprehensive favicon setup

### Sitemap Configuration

- **File**: next-sitemap.config.js
- **Generator**: app/sitemap.ts
- **Priority scheme**:
  - `/` → 1.0
  - `/lp` → 0.9
  - `/services/*` → 0.9
  - `/lp/services` → 0.85
  - `/lp/works` → 0.8
  - Others → 0.7 or 0.5
- **Change frequency**: weekly
- **Excludes**: /404, /500, /api/*

### Robots.txt

- Generated via app/robots.ts (not public/robots.txt)
- Controlled by `INDEXABLE` environment variable
- Allows all by default

## Development Workflows

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
# Runs with increased memory: NODE_OPTIONS='--max_old_space_size=8192'
```

### Building

```bash
npm run build
# Creates static export in /out directory
# Also runs with increased memory
```

### Starting Production Server

```bash
npm start
# Note: For static export, you'd typically serve the /out directory
```

### Linting

```bash
npm run lint
# ESLint is configured to ignore during builds
```

### Cleaning

```bash
npm run clean
# Removes .next and node_modules
```

## Environment Variables

From .env.production and code references:

- `SITE_URL` - Site base URL (default: https://recustep.com)
- `INDEXABLE` - Controls robot indexing (false to disallow)
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` or `GOOGLE_SITE_VERIFICATION` - Google Search Console verification
- Supabase configuration (check for NEXT_PUBLIC_SUPABASE_* vars if needed)

## Common Development Tasks

### Adding a New Service Page

1. Create directory: `app/services/new-service/`
2. Create three files:
   ```
   page.tsx         (wrapper + metadata export)
   page.client.tsx  ("use client" component)
   metadata.ts      (Metadata object)
   ```
3. Add hero image: `public/images/hero/new-service.jpg`
4. Update `app/services/page.client.tsx` services array
5. Update sitemap if needed

### Adding a New Column/Article

1. Create directory: `app/columns/topic-name/`
2. Follow same three-file pattern
3. Update `app/columns/page.client.tsx` if it lists columns
4. Add images to `public/images/` as needed

### Adding a New UI Component

```bash
# If using shadcn/ui CLI:
npx shadcn-ui@latest add [component-name]

# Manual addition:
# Create component in components/ui/[name].tsx
```

### Adding a New Section Component

- Create in `components/sections/`
- Import and use in page.tsx
- Follow existing patterns (responsive, Tailwind-first)

### Updating Analytics

- **GA4**: Update tracking ID in app/layout.tsx (line 160)
- **Clarity**: Update project ID in app/layout.tsx (line 178)

## Static Export Configuration

This project uses Next.js static export (`output: 'export'`):

### Implications

1. **No server-side runtime** - All pages pre-rendered at build time
2. **Images unoptimized** - `unoptimized: true` in next.config.js
3. **No ISR/SSR** - Only static generation
4. **API routes not supported** - Use external APIs only
5. **Dynamic routes must use generateStaticParams**
6. **robots.txt via route** - app/robots.ts instead of public/robots.txt

### Build Output

- Build creates `/out` directory
- Deploy `/out` to static hosting (Netlify, Vercel, etc.)
- All routes pre-rendered as HTML files

## Next.js Configuration Deep Dive

```javascript
// next.config.js
{
  output: 'export',                    // Static export mode
  eslint: { ignoreDuringBuilds: true }, // Skip ESLint on build
  images: { unoptimized: true },       // Required for static export
  transpilePackages: ['lucide-react'], // Transpile lucide-react
}
```

**⚠️ Do NOT add**:
- `optimizeFonts`
- `experimental.esmExternals`

## TypeScript Configuration

- **Target**: ES5
- **Strict mode**: enabled
- **Module resolution**: bundler
- **JSX**: preserve (Next.js handles)
- **Incremental**: true (faster rebuilds)
- Path aliases configured via `paths` option

## Styling System

### Global Styles (app/globals.css)

Defines CSS variables for theming:
- Color system (HSL values)
- Border radius
- Theme-specific overrides

### Tailwind Configuration

- **Base color**: neutral
- **CSS variables**: enabled
- **Prefix**: none
- **Animations**: accordion-down, accordion-up
- **Plugins**: tailwindcss-animate

### Component Styling Patterns

```typescript
// Responsive spacing
className="px-4 sm:px-6 lg:px-8"

// Responsive typography
className="text-4xl sm:text-5xl font-extrabold"

// Conditional classes with cn()
className={cn(
  "base-classes",
  condition && "conditional-classes",
  props.className
)}

// Grid layouts
className="grid gap-8 md:grid-cols-2"

// Aspect ratios
className="relative w-full aspect-[16/9]"
```

## Image Handling

### Image Organization

```
public/images/
  ├── hero/          # Service hero images (16:9 aspect)
  │   ├── hp.jpg
  │   ├── app.jpg
  │   ├── human.jpg
  │   ├── system.jpg
  │   ├── artbloom.jpg
  │   └── shokulab.jpg
  ├── og/            # Open Graph images (1200x630)
  └── [other]/       # Other image assets
```

### Image Usage Pattern

```typescript
import Image from 'next/image';

<Image
  src="/images/hero/service.jpg"
  alt="Service name"
  fill
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 50vw"
  priority={isAboveFold}
/>
```

**Notes**:
- Images are unoptimized (static export requirement)
- Use `fill` with aspect ratio containers
- Always provide `sizes` for responsive images
- Use `priority` for above-the-fold images

## Japanese Language Considerations

This is a Japanese-language site (`lang="ja"`):

1. **Metadata**: All titles, descriptions in Japanese
2. **Locale**: ja_JP for OG tags
3. **Content**: Full-width characters, appropriate typography
4. **URLs**: Generally English slugs for better compatibility
5. **Encoding**: UTF-8 (ensure all files saved as UTF-8)

### Typical Metadata Template (Japanese)

```typescript
export const metadata: Metadata = {
  title: "サービス名",
  description: "詳細な説明文（100-150文字程度）",
  alternates: {
    canonical: "https://recustep.com/path",
  },
  openGraph: {
    title: "サービス名｜株式会社リクステップ",
    description: "詳細な説明文",
    // ...
  },
};
```

## Performance Considerations

### Memory Requirements

The build process requires increased memory allocation:
```bash
NODE_OPTIONS='--max_old_space_size=8192'
```

This is configured in package.json scripts for both dev and build.

### Build Performance

- **Incremental builds**: Enabled in tsconfig.json
- **ESLint skipped**: During builds to save time
- **Static export**: Builds all pages at once

### Runtime Performance

- **Static files**: Fast delivery from CDN
- **Client components**: Only where needed (interactivity)
- **Code splitting**: Automatic via Next.js
- **Suspense boundaries**: Used for loading states

## Git Workflow

### Branching Strategy

Based on git history:
- Feature branches for new features
- Descriptive commit messages in mixed Japanese/English
- Small, focused commits

### Common Commit Patterns

```
feat: [feature description]
fix: [bug description]
update: [update description]
chore: [maintenance task]
seo: [SEO improvement]
merge: [merge description]
```

### Recent Development Focus

From commit history:
- Sitemap optimization
- Robots.txt configuration for static export
- Column/article pages (homepage-osaka-*, webagency-osaka-*)
- LP section development
- Metadata and SEO improvements

## Testing Considerations

No test framework is currently configured. When adding tests:

1. Recommended: **Vitest** or **Jest** + **React Testing Library**
2. Add to package.json devDependencies
3. Create test files: `[component].test.tsx`
4. Add test script to package.json

## Deployment Checklist

Before deploying:

1. ✅ Run `npm run build` successfully
2. ✅ Verify `/out` directory created
3. ✅ Check all images load correctly
4. ✅ Verify sitemap generated
5. ✅ Test robots.txt route
6. ✅ Confirm all metadata correct
7. ✅ Validate JSON-LD structured data
8. ✅ Check GA4 and Clarity working
9. ✅ Test all navigation links
10. ✅ Mobile responsive check

## Important Notes for AI Assistants

### DO:
- ✅ Follow the three-file pattern (page.tsx, page.client.tsx, metadata.ts)
- ✅ Use absolute imports with `@/` prefix
- ✅ Always use `cn()` utility for className merging
- ✅ Include comprehensive metadata for all pages
- ✅ Use Tailwind CSS exclusively for styling
- ✅ Follow responsive design patterns
- ✅ Maintain static export compatibility
- ✅ Add canonical URLs to all pages
- ✅ Include Japanese metadata where appropriate
- ✅ Test with increased memory allocation

### DON'T:
- ❌ Don't use CSS Modules or styled-components
- ❌ Don't add server-side API routes (not supported in static export)
- ❌ Don't use next/image optimization features
- ❌ Don't modify next.config.js without understanding static export implications
- ❌ Don't add features requiring runtime server
- ❌ Don't use ISR or SSR
- ❌ Don't create pages without proper metadata
- ❌ Don't modify analytics IDs without confirmation
- ❌ Don't change theme provider settings (light theme only)
- ❌ Don't add dynamic routes without generateStaticParams

### When Making Changes:

1. **Read before writing**: Always read existing files before modifying
2. **Pattern consistency**: Match existing code patterns exactly
3. **Metadata completeness**: Include all metadata fields
4. **Responsive testing**: Consider all breakpoints
5. **Japanese content**: Ensure proper UTF-8 encoding
6. **Build verification**: Test build after significant changes
7. **Image optimization**: Consider file sizes (manual optimization needed)
8. **Link checking**: Verify all internal links work
9. **Accessibility**: Follow basic a11y practices
10. **SEO impact**: Consider SEO implications of changes

## Supabase Integration

While Supabase is included in dependencies:
- Check for usage in components before assuming implementation
- Migrations exist in `supabase/migrations/`
- Likely used for contact forms or data storage
- Configuration would be in environment variables

**Note**: If working with Supabase, check for existing patterns in codebase first.

## Component Library (shadcn/ui)

50+ UI components available in `components/ui/`:
- Pre-styled with Tailwind
- Built on Radix UI primitives
- Customizable via `components.json`
- Add new components via shadcn CLI

Common components:
- Button, Card, Dialog, Form
- Accordion, Tabs, Sheet, Drawer
- Input, Select, Checkbox, Radio
- Toast, Alert, Badge
- Many more...

## Framer Motion Usage

For animations, use framer-motion:
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

## Contact Information & Business Details

From root layout JSON-LD:
- **Company**: 株式会社リクステップ (RecuStep Co., Ltd.)
- **Founder**: 柴 悠介
- **Phone**: 080-6354-0254
- **Email**: info@recustep.com
- **Location**: 大阪市 (Osaka City), 大阪府 (Osaka Prefecture), Japan
- **Hours**: Mo-Fr 09:00-18:00
- **Service Areas**: 大阪府, 大阪市, 堺市, 和泉市, 松原市, 羽曳野市, 藤井寺市, 大阪狭山市, 富田林市, 河内長野市, 南大阪地域

## Version Information

Last updated: 2025-11-23
Next.js Version: 15.5.4
React Version: 19.1.1
Node.js: Use version compatible with React 19

---

## Quick Reference Commands

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm start

# Lint
npm run lint

# Clean
npm run clean

# Add shadcn component
npx shadcn-ui@latest add [component]
```

## Getting Help

For questions about:
- **Next.js**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **Radix UI**: https://www.radix-ui.com
- **Framer Motion**: https://www.framer.com/motion

---

**This document should be updated whenever significant architectural changes are made to the codebase.**
