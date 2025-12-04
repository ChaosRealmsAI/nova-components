/**
 * Skeleton 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Loading Placeholder"
 * - Subtle shimmer animation
 * - Glass-like appearance
 */
export const skeletonConfig = {
  slots: {
    base: [
      // Glass background
      'bg-white/[0.08]',

      // Shape
      'rounded-lg',

      // Shimmer animation
      'animate-pulse',

      // Overflow
      'overflow-hidden',
    ],
  },

  variants: {
    variant: {
      default: {
        base: 'rounded-lg',
      },

      circular: {
        base: 'rounded-full',
      },

      text: {
        base: 'h-4 rounded-md',
      },
    },
  },
};
