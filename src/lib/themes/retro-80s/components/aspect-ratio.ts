/**
 * AspectRatio Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Aspect Ratio Container"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon
 * - Shadow: Subtle neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const aspectRatioConfig = {
  slots: {
    base: [
      'relative w-full',
      'rounded-[2px]',
      'border-2 border-primary',
      'bg-surface-1',
      'shadow-[0_0_10px_var(--primary)]',
      'overflow-hidden',
    ],
  },

  variants: {
    ratio: {
      '1/1': {
        base: [],
      },
      '16/9': {
        base: [],
      },
      '4/3': {
        base: [],
      },
      '21/9': {
        base: [],
      },
    },
  },
};
