/**
 * Card Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Container Box"
 * - Shape: Sharp corners (0px).
 * - Border: 2px black.
 * - Shadow: Hard black offset (4px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const cardConfig = {
  slots: {
    base: [
      'bg-card text-card-foreground',
      'rounded-none',
      'border-2 border-black',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'gap-6 py-6',
    ],
    header: ['px-6 gap-2 flex flex-col space-y-1.5'], // Ensure flex column for title/desc
    title: ['font-bold text-xl leading-none tracking-tight uppercase'],
    description: ['text-sm text-muted-foreground font-mono'],
    action: [],
    content: ['px-6 pt-0'],
    footer: ['px-6 pt-0 flex items-center'],
  },

  variants: {
    variant: {
      default: {
        base: [], // Uses base styles
      },

      outline: {
        base: [
          'bg-transparent', // Transparent
          // Keep border and shadow or remove shadow?
          // Usually outline still has the brutalist border, maybe no shadow.
          'shadow-none', 
        ],
      },

      ghost: {
        base: [
          'bg-transparent',
          'border-transparent',
          'shadow-none',
        ],
      },

      elevated: {
        base: [
          'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]', // Deeper shadow
        ],
      },
    },

    size: {
      sm: {
        base: ['py-4 gap-4'],
        header: ['px-4'],
        content: ['px-4'],
        footer: ['px-4'],
      },
      default: {},
      lg: {
        base: ['py-8 gap-8'],
        header: ['px-8'],
        content: ['px-8'],
        footer: ['px-8'],
      },
    },
  },
};