# Next.js Migration & Quick Start Guide: Canaan International Hotel

This guide provides a professional roadmap for migrating the current static React architecture of the **Canaan International Hotel** (Adigrat, Tigray) to a production-ready **Next.js 15/16** application.

---

## 1. Project Overview & Identity
- **Brand:** Canaan International Hotel
- **Location:** Adigrat, Tigray, Ethiopia (Gateway to the Northern Heritage)
- **Design Philosophy:** Biophilic Luxury — integrating highland textures with ancient Axumite geometric patterns (The Mesob Style).
- **Core Pillars:** Spiritual Crossroads (Al Najashi, Debre Damo), Rugged Landscapes (Gheralta), and Contemporary Comfort.

---

## 2. Design System Configuration

### Tailwind Config (`tailwind.config.ts`)
Add these tokens to your Next.js project to ensure consistency with the "Forest & Cactus" brand identity.

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        'forest': '#0B221A',     // Primary Dark
        'cactus': '#4B6344',     // Action Accent
        'sandstone': '#F5F2E9',  // Secondary Background
        'bronze': '#8E735B',     // Tertiary Luxury
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
};
export default config;
```

---

## 3. Recommended App Structure (App Router)

To maintain a "scannable" architecture for both engineers and AI tools:

```text
src/
├── app/
│   ├── layout.tsx         # Root Layout (Migrate components/Layout.tsx)
│   ├── page.tsx           # Home Page (Migrate pages/Home.tsx)
│   ├── suites/
│   │   └── page.tsx       # Suites Listing (Migrate pages/Suites.tsx)
│   ├── culture/
│   │   └── page.tsx       # Heritage & Dining (Migrate pages/Culture.tsx)
│   └── investment/
│   │   └── page.tsx       # Partnership Portal (Migrate pages/Investment.tsx)
├── components/
│   ├── ui/                # Atomic: Button, SectionTitle, CanaanPattern
│   ├── booking/           # Compound: BookingWidget, BookingBar
│   └── navigation/        # Header, Footer, MobileMenu
├── types/                 # Migrate types.ts
└── lib/                   # Gemini API client, Supabase helpers
```

---

## 4. Migration Steps (Hands-On)

### Step 1: Layout Persistence
Move the logic from `components/Layout.tsx` to `app/layout.tsx`. Ensure the Navigation and Footer wrap the `{children}`. Use the `'use client'` directive for components handling scroll events or state.

### Step 2: Image Optimization
Replace all standard `<img>` tags with `next/image`.
*   **Static Assets:** Use `placeholder="blur"`.
*   **Landscape Images:** (e.g., Gheralta Mountains) Use `priority` for above-the-fold hero images to improve LCP.

### Step 3: Global Fonts
Use `next/font/google` in your root layout to avoid layout shift:
```typescript
import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

// In RootLayout:
<body className={`${playfair.variable} ${inter.variable} font-sans`}>
```

---

## 5. UI Implementation Priorities

### 1. The Biophilic Hero
The Hero section must use a slow-zoom animation (`scale-105 animate-pulse-slow`) on the background image of the Tigray highlands to simulate the "breathing" nature of a sanctuary.

### 2. The Conversion Bar
The `StickyBar` (from `Home.tsx`) should be moved to a standalone component. In Next.js, use `IntersectionObserver` or a scroll hook to trigger its visibility only after the user has scrolled past the primary Hero CTA.

### 3. Server vs. Client Components
- **Server Components (Default):** Use for `SectionTitle`, `CanaanPattern`, and static heritage content in `Culture.tsx`.
- **Client Components:** Use for `BookingWidget`, `Header` (scroll logic), and any forms in `Investment.tsx`.

---

## 6. Local Development & Integration

### To run at localhost:
1. Initialize a Next.js project: `npx create-next-app@latest`
2. Install dependencies: `npm install lucide-react clsx tailwind-merge`
3. Copy the `theme/DesignTokens.ts` values into your Tailwind config.
4. Set up the `process.env.API_KEY` if using the Gemini Concierge feature.

### AI Development Tips:
- Use **Semantic HTML**: The AI better understands the layout if you use `<article>` for room cards and `<aside>` for the booking sidebar.
- **Aria Labels**: All interactive buttons (like "Reserve Your Stay") must have descriptive `aria-label` props for accessibility compliance.

---
*Document Version: 1.2*  
*Project: Canaan International Hotel Adigrat*  
*Last Updated: 2024*