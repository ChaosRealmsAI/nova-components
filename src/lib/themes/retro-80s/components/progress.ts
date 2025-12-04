/**
 * Progress Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Progress Bar"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon
 * - Background: Dark surface
 * - Indicator: Neon glow effect
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const progressConfig = {
  slots: {
    base: [
      'rounded-[2px] border-2 border-primary',
      'bg-surface-1',
      'shadow-[0_0_10px_var(--primary)]',
      'overflow-hidden',
    ],

    indicator: [
      'h-full bg-primary',
      'shadow-[0_0_15px_var(--primary)]',
      'transition-all duration-300',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [],
        indicator: [],
      },
    },
    size: {
      default: {
        base: ['h-4'],
      },
      sm: {
        base: ['h-2'],
      },
      lg: {
        base: ['h-6'],
      },
      xl: {
        base: ['h-8'],
      },
    },
  },
};
