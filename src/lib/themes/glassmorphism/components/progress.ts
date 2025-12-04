/**
 * Progress 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Progress Bar"
 * - Glass track with glow indicator
 */
export const progressConfig = {
  slots: {
    base: [
      // Shape
      'rounded-full',

      // Glass track background
      'bg-white/[0.1]',

      // Subtle border
      'border border-white/[0.1]',

      // Inner shadow for depth
      'shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]',

      // Overflow hidden for indicator
      'overflow-hidden',
    ],

    indicator: [
      // Primary gradient fill
      'bg-gradient-to-r from-primary to-primary-vivid',

      // Rounded to match track
      'rounded-full',

      // Glow effect
      'shadow-[0_0_12px_rgba(139,92,246,0.5)]',

      // Transition for smooth animation
      'transition-all duration-300',
    ],
  },
  variants: {
    variant: {
      default: {
        base: 'bg-white/[0.1]',
        indicator: 'bg-gradient-to-r from-primary to-primary-vivid',
      },
    },
    size: {
      default: {
        base: ['h-2'],
      },
      sm: {
        base: ['h-1'],
      },
      lg: {
        base: ['h-3'],
      },
      xl: {
        base: ['h-4'],
      },
    },
  },
};
