/**
 * Skeleton Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Skeleton"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon
 * - Background: Dark surface
 * - Subtle glow effect
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const skeletonConfig = {
  slots: {
    base: [
      'rounded-[2px]',
      'border-2 border-primary',
      'bg-surface-1',
      'shadow-[0_0_10px_var(--primary)]',
      'animate-pulse',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [],
      },

      circular: {
        base: [
          'rounded-full',
        ],
      },

      text: {
        base: [
          'h-4',
        ],
      },
    },
  },
};
