/**
 * Switch 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Toggle Switch"
 * - Pill-shaped glass track
 * - Glowing active state
 */
export const switchConfig = {
  slots: {
    base: [
      // Shape
      'rounded-full',

      // Glass border
      'border border-white/15',

      // Shadow
      'shadow-[inset_0_1px_3px_rgba(0,0,0,0.2)]',

      // Focus
      'outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background',

      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-40',

      // Transition
      'transition-all duration-300',

      // Unchecked state - glass background
      'data-[state=unchecked]:bg-white/[0.1]',

      // Checked state - primary with glow
      'data-[state=checked]:bg-primary/90',
      'data-[state=checked]:border-primary/50',
      'data-[state=checked]:shadow-[0_0_16px_rgba(139,92,246,0.4),inset_0_1px_3px_rgba(0,0,0,0.1)]',
    ],

    thumb: [
      // Shape
      'rounded-full',

      // Background - bright for contrast
      'bg-white',

      // Shadow for depth
      'shadow-[0_2px_4px_rgba(0,0,0,0.2)]',

      // Transition
      'transition-transform duration-300',

      // Position
      'data-[state=unchecked]:translate-x-0.5',
    ],
  },
  variants: {
    variant: {
      default: {
        base: 'bg-white/[0.1]',
        thumb: 'bg-white',
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
