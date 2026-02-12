
# Professional UI Architecture Guide: Grand Tower

This document serves as the authoritative guide for developing and extending the **Grand Tower UI System**. It is designed for professional Next.js/React engineers to maintain the "Biophilic Luxury" aesthetic while ensuring performance and accessibility.

---

## 1. Design Philosophy: The Biophilic Levant
The Grand Tower UI is built on two core pillars:
- **Biophilic Design**: Using the "Forest" palette and "Cactus" resilience to create a calming, organic atmosphere.
- **Canaanite Geometry**: Utilizing repeating friezes and symmetric patterns (`CanaanPattern`) to ground the modern architecture in ancient heritage.

---

## 2. Core Foundations (Design Tokens)

We use a centralized token system in `theme/DesignTokens.ts`. Never hardcode values; always refer to the theme.

### Color Palette
| Token | HEX | Role |
| :--- | :--- | :--- |
| `Forest` | `#0B221A` | Depth, primary dark backgrounds, stability. |
| `Cactus` | `#4B6344` | Action, life, resilience, primary brand accent. |
| `Sandstone` | `#F5F2E9` | Lightness, parchment feel, secondary background. |
| `Bronze` | `#8E735B` | Sophistication, high-end highlights. |

### Typography
- **Headings (Serif)**: `Playfair Display`. Use for brand statements and section titles.
- **Interface (Sans)**: `Inter`. Use for body text, data, and navigation.
- **Labels**: Small font size (`text-[10px]`), high tracking (`tracking-[0.4em]`), and uppercase.

---

## 3. Component Architecture

### Atomic Components (`components/CommonUI.tsx`)
We follow an atomic design approach to ensure the UI is "Scannable" by AI IDEs.

1. **SectionTitle**: Standardized heading block. Use the `dark` prop when placing on Forest backgrounds.
2. **Button**: Standardized interaction points. Supports `primary`, `outline`, and `ghost` variants.
3. **CanaanPattern**: Used as a thematic divider between major page sections to maintain rhythmic consistency.

### Compound Components
- **Sticky Header**: Uses a dual-state logic (Transparent at top, Blurred Forest on scroll). 
- **Sticky Booking Bar**: A conversion-focused element that appears only after the hero section to keep the primary call-to-action (CTA) ever-present.

---

## 4. Layout Strategy & Persistence

### The "Glassmorphism" Effect
On scroll, headers use `bg-forest/90` with `backdrop-blur-md`. This ensures that even when content passes under the header, the luxury "glassy" feel remains.

### Persistence Logic
The `Layout.tsx` component wraps all pages. It manages:
- Page transitions.
- Global booking modal state.
- Navigation visibility based on scroll depth.

---

## 5. Responsive Design (Mobile-First)

We utilize Tailwind's utility-first, mobile-first approach:
1. **Base Styles**: Optimized for 390px - 430px (Standard iPhone).
2. **Medium (`md:`)**: Layout shifts to flex/grid columns (Tablets).
3. **Large (`lg:`)**: Full desktop immersion with high-resolution imagery and wide spacing.

**Rule**: Spacing should never feel cramped. Use `py-24` as a minimum for section vertical padding to maintain a "High-End" breathable feel.

---

## 6. Interaction & Motion

### Key Animations
- **Fade-In**: Every page and major component uses `animate-in fade-in duration-1000`.
- **Micro-interactions**: Buttons feature `transition-all duration-500` with subtle scale shifts or color transitions.
- **Hero Pulse**: Background forest images utilize a slow `scale-110 animate-pulse` to simulate a "breathing" forest.

---

## 7. AI-Assisted Development Optimization

To make this project "AI-Native" for tools like Cursor, Windsurf, or Copilot:
- **Semantic HTML**: Use `<header>`, `<main>`, `<article>`, and `<footer>` strictly.
- **Descriptive Props**: Components like `SectionTitle` use clear prop names (`centered`, `dark`, `label`) that allow LLMs to infer the correct usage context.
- **Type Safety**: The `types.ts` file ensures that any new page or theme variant added is caught by the compiler and AI linting.

---

## 8. Next.js Migration Checklist

When moving this to a full Next.js structure:
1. **App Router**: Move `pages/*.tsx` to `app/[slug]/page.tsx`.
2. **Images**: Replace `<img>` tags with `next/image` for automatic WebP conversion and lazy loading.
3. **Fonts**: Use `next/font/google` to optimize loading of Playfair Display and Inter.
4. **Client/Server Components**: Mark `Layout.tsx` and `BookingWidget.tsx` as `'use client'` while keeping static sections as Server Components for SEO.

---

## 9. Professional Standards
- **Accessibility**: Every SVG (like `CactusLogo`) must have `aria-hidden="true"`. Forms must have associated `<label>` elements (even if visually hidden).
- **Performance**: Use CSS transitions over JavaScript animations where possible.
- **Clean Code**: Keep components under 200 lines. If a section gets too complex (like the Home Hero), extract it into a dedicated sub-component.

---
*Created for the Grand Tower Development Team. Inspired by Heritage, Driven by Innovation.*
