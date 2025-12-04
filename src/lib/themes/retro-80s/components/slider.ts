/**
 * Slider Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Slider"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon
 * - Track: Dark surface
 * - Range: Neon primary color with glow
 * - Thumb: Neon glow effect
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const sliderConfig = {
  slots: {
    base: [
      'relative flex w-full touch-none select-none items-center',
    ],

    track: [
      'relative h-2 w-full grow overflow-hidden',
      'rounded-[2px]',
      'border-2 border-primary',
      'bg-surface-1',
      'shadow-[0_0_10px_var(--primary)]',
    ],

    range: [
      'absolute h-full',
      'bg-primary',
      'shadow-[0_0_10px_var(--primary)]',
    ],

    thumb: [
      'block h-5 w-5',
      'rounded-[2px]',
      'border-2 border-primary',
      'bg-white',
      'shadow-[0_0_15px_var(--primary)]',
      'ring-offset-background',
      'transition-all duration-150',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'hover:shadow-[0_0_20px_var(--primary)]',
    ],
  },

  variants: {
    size: {
      default: {
        track: ['h-2'],
        thumb: ['h-5 w-5'],
      },
      sm: {
        track: ['h-1'],
        thumb: ['h-4 w-4'],
      },
      lg: {
        track: ['h-3'],
        thumb: ['h-6 w-6'],
      },
    },
  },
};
