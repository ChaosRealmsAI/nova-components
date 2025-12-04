/**
 * Badge Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Tag"
 * - Shape: Small radius (2px)
 * - Border: 1px solid neon
 * - Shadow: Subtle neon glow
 * - Typography: Monospace, uppercase, tight tracking
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const badgeConfig = {
  slots: {
    base: [
      'inline-flex items-center',
      'rounded-[2px]',
      'border border-primary', // 1px border (thinner than buttons)
      'px-2.5 py-0.5',
      'text-xs font-mono font-bold uppercase tracking-tight',
      'transition-all duration-150',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          'bg-primary text-primary-foreground',
          'shadow-[0_0_10px_var(--primary)]', // Subtle glow
          'hover:shadow-[0_0_15px_var(--primary)]',
        ],
      },

      secondary: {
        base: [
          'bg-secondary text-secondary-foreground border-secondary',
          'shadow-[0_0_10px_var(--secondary)]',
          'hover:shadow-[0_0_15px_var(--secondary)]',
        ],
      },

      destructive: {
        base: [
          'bg-destructive text-destructive-foreground border-destructive',
          'shadow-[0_0_10px_var(--destructive)]',
          'hover:shadow-[0_0_15px_var(--destructive)]',
        ],
      },

      outline: {
        base: [
          'text-foreground bg-transparent',
          'shadow-none',
          'hover:bg-surface-1 hover:shadow-[0_0_10px_var(--primary)]',
        ],
      },
    },
  },
};
