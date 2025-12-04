/**
 * Switch Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Toggle"
 * - Shape: Small radius (rounded-full for track, rounded for thumb)
 * - Border: 2px solid neon
 * - Shadow: Neon glow when checked
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const switchConfig = {
  slots: {
    base: [
      'rounded-full border-2 border-primary',
      'bg-surface-1',
      'outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=checked]:bg-primary',
      'data-[state=checked]:border-primary',
      'data-[state=checked]:shadow-[0_0_20px_var(--primary)]',
      'data-[state=unchecked]:bg-surface-2',
      'transition-all duration-150',
    ],

    thumb: [
      'rounded-[2px] ring-0 bg-white border-2 border-primary',
      'shadow-[0_0_10px_var(--primary)]',
      'data-[state=unchecked]:translate-x-0',
      'data-[state=checked]:shadow-[0_0_15px_var(--primary)]',
      'transition-all duration-150',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [],
      },
    },
    size: {
      default: {
        base: 'h-6 w-11',
        thumb: 'size-5 data-[state=checked]:translate-x-[calc(100%-2px)]',
      },
      sm: {
        base: 'h-5 w-9',
        thumb: 'size-4 data-[state=checked]:translate-x-[calc(100%-2px)]',
      },
      lg: {
        base: 'h-7 w-14',
        thumb: 'size-6 data-[state=checked]:translate-x-[calc(100%-2px)]',
      },
    },
  },
};
