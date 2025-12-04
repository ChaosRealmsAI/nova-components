/**
 * Badge Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Sticker / Tag"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Typography: Uppercase, Bold.
 * - Shadow: Small hard shadow (2px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const badgeConfig = {
  slots: {
    base: [
      'inline-flex items-center',
      'rounded-none',
      'border-2 border-black', // Always black border
      'px-2.5 py-0.5',
      'text-xs font-bold uppercase tracking-wide',
      'transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          'bg-primary text-primary-foreground',
          'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
          'hover:bg-primary/80',
        ],
      },

      secondary: {
        base: [
          'bg-secondary text-secondary-foreground',
          'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
          'hover:bg-secondary/80',
        ],
      },

      destructive: {
        base: [
          'bg-destructive text-destructive-foreground',
          'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
          'hover:bg-destructive/80',
        ],
      },

      outline: {
        base: [
          'text-foreground',
          // Border is already in base.
          // No shadow for outline usually, or maybe small one? 
          // Let's keep it flat.
          'shadow-none', 
        ],
      },
    },
  },
};