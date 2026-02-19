# Next.js Migration Strategy: Canaan International "Stability" Branch

This document outlines the professional workflow for migrating the **Canaan Hotel UI Prototype** into the existing Next.js repository (`Stability` branch). 

## 1. Environment & Setup
The Next.js project likely uses the **App Router**. Follow this mapping to place the files:

| Prototype File | Next.js Destination | Role |
| :--- | :--- | :--- |
| `types.ts` | `src/types/index.ts` | Shared type definitions. |
| `theme/DesignTokens.ts` | `tailwind.config.ts` (sync) | Ensure Tailwind colors match. |
| `components/CommonUI.tsx` | `src/components/ui/` | Atomic design components. |
| `components/Layout.tsx` | `src/app/layout.tsx` | Global wrapper (needs 'use client'). |
| `pages/Home.tsx` | `src/app/page.tsx` | Landing experience. |
| `pages/Suites.tsx` | `src/app/suites/page.tsx` | Catalog view. |
| `pages/Culture.tsx` | `src/app/culture/page.tsx` | Heritage content. |
| `pages/Investment.tsx` | `src/app/invest/page.tsx` | Business portal. |

## 2. Handling the Brand Identity (Logo & Assets)
The prototype uses a generic `CactusLogo`. To sync with the repo's exact identity:
1. **Logo Placement**: Place the production logo SVG/PNG in `public/brand/logo-gold.svg`.
2. **Component Update**: In `src/components/ui/CactusLogo.tsx`, replace the internal SVG with a Next.js `<Image />` component:
   ```tsx
   import Image from 'next/image';
   export const MainLogo = () => (
     <Image src="/brand/logo-gold.svg" alt="Canaan Hotel" width={40} height={40} />
   );
   ```
3. **Remote Images**: The prototype uses Unsplash. For production, replace these URLs with your CMS-hosted images (e.g., Sanity, Contentful, or local `/public` assets).

## 3. Tech Stack Bridging
- **Lucide Icons**: Both projects use `lucide-react`. Ensure the version in `package.json` is `^0.400.0` or higher.
- **Tailwind Config**: Add the `forest`, `cactus`, and `sandstone` tokens to `tailwind.config.ts` under `theme.extend.colors`.
- **Framer Motion**: If you want to enhance the prototype's `animate-in` classes with physical physics, install `framer-motion` and wrap sections in `<motion.section>`.

## 4. Stability Branch Integration
The `Stability` branch focuses on structural integrity. When migrating:
- **Server Components**: Keep `Culture` and `Investment` as Server Components for high SEO performance.
- **Client Components**: Mark `BookingWidget` and `Layout` with `'use client'`.
- **API Integration**: Use the Gemini API (via `@google/genai`) in a Server Action (`src/app/actions/concierge.ts`) to handle guest queries without exposing the `API_KEY`.

## 5. Next Steps for Bootstrap
1. **Sync CSS Variables**: Ensure `index.html` styles (font-family imports) are moved to the Next.js `layout.tsx`.
2. **SEO Metadata**: Use the Next.js `Metadata` API in each page to set unique titles like "Suites | Canaan Adigrat".
3. **Performance**: Replace all `<img>` with `<Image />` and use the `priority` prop for the Hero banners.

---
*Created for the JohnnBebe101/canaan-hotel-web development team.*