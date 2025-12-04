/**
 * Spinner Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Spinner"
 * - Color: Neon primary color
 * - Animation: Spin with glow effect
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const spinnerConfig = {
  slots: {
    base: [
      'text-primary',
      'animate-spin',
      'drop-shadow-[0_0_8px_var(--primary)]',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          'text-primary',
        ],
      },

      secondary: {
        base: [
          'text-secondary',
          'drop-shadow-[0_0_8px_var(--secondary)]',
        ],
      },

      muted: {
        base: [
          'text-muted-foreground',
        ],
      },
    },
    size: {
      default: {
        base: ['size-6'],
      },
      sm: {
        base: ['size-4'],
      },
      lg: {
        base: ['size-8'],
      },
      xl: {
        base: ['size-12'],
      },
    },
  },
};
