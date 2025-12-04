/**
 * Spinner 组件样式 - Glassmorphism
 *
 * Design Concept: "Glowing Spinner"
 * - Primary color with glow effect
 */
export const spinnerConfig = {
  slots: {
    base: [
      'text-primary',
      // Subtle glow
      'drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]',
    ],
  },

  variants: {
    variant: {
      default: {
        base: 'text-primary drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]',
      },

      secondary: {
        base: 'text-secondary drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]',
      },

      muted: {
        base: 'text-muted-foreground drop-shadow-none',
      },
    },
    size: {
      default: { base: 'size-6' },
      sm: { base: 'size-4' },
      lg: { base: 'size-8' },
      xl: { base: 'size-12' },
    },
  },
};
