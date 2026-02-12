
/**
 * Grand Tower Design Tokens
 * 
 * Colors:
 * - Forest (#0B221A): Primary dark, used for backgrounds and depth.
 * - Cactus (#4B6344): Secondary accent, used for branding and interaction.
 * - Sandstone (#F5F2E9): Primary light, used for backgrounds and text contrast.
 * - Bronze (#8E735B): Tertiary accent, used for highlights.
 * 
 * Typography:
 * - Serif: 'Playfair Display' (Headings, brand elements)
 * - Sans: 'Inter' (UI, labels, body text)
 */

export const THEME = {
  colors: {
    forest: '#0B221A',
    cactus: '#4B6344',
    sandstone: '#F5F2E9',
    bronze: '#8E735B',
    white: '#FFFFFF',
    overlay: 'rgba(11, 34, 26, 0.8)',
  },
  typography: {
    fontSerif: '"Playfair Display", serif',
    fontSans: '"Inter", sans-serif',
    letterSpacing: {
      brand: '0.4em',
      ui: '0.2em',
      tight: '-0.02em',
    }
  },
  spacing: {
    containerMax: '1280px',
    sectionPadding: 'py-16 md:py-32',
  },
  animation: {
    transition: 'transition-all duration-500 ease-in-out',
    fadeIn: 'animate-in fade-in duration-1000',
  }
};
