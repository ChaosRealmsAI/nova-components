/**
 * Slider 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Slider Control"
 * - Glass track with glowing thumb
 */
export const sliderConfig = {
  slots: {
    base: 'relative flex w-full touch-none select-none items-center',

    track: [
      // Shape
      'relative h-2 w-full grow overflow-hidden rounded-full',

      // Glass background
      'bg-white/[0.1]',

      // Inner shadow
      'shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]',
    ],

    range: [
      // Gradient fill
      'absolute h-full bg-gradient-to-r from-primary to-primary-vivid',

      // Glow
      'shadow-[0_0_8px_rgba(139,92,246,0.4)]',
    ],

    thumb: [
      // Shape
      'block rounded-full',

      // Background
      'bg-white',

      // Border for glass effect
      'border-2 border-primary',

      // Shadow
      'shadow-[0_2px_8px_rgba(0,0,0,0.2),0_0_12px_rgba(139,92,246,0.3)]',

      // Ring
      'ring-offset-background',

      // Focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-50',

      // Transition
      'transition-all duration-150',

      // Hover
      'hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,0,0,0.25),0_0_16px_rgba(139,92,246,0.5)]',
    ],
  },

  variants: {
    size: {
      default: {
        track: 'h-2',
        thumb: 'h-5 w-5',
      },
      sm: {
        track: 'h-1',
        thumb: 'h-4 w-4',
      },
      lg: {
        track: 'h-3',
        thumb: 'h-6 w-6',
      },
    },
  },
};
