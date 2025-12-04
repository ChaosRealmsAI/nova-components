/**
 * Badge 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Pill Tag"
 * - Pill shape with glass effect
 * - Subtle glow for variants
 */
export const badgeConfig = {
  slots: {
    base: [
      // Shape - pill/capsule
      'rounded-full',

      // Glass border
      'border border-white/20',

      // Padding
      'px-3',
      'py-0.5',

      // Typography
      'text-xs',
      'font-medium',

      // Transition
      'transition-all duration-200',

      // Focus
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-primary/30',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          // Glass primary background
          'bg-primary/80 backdrop-blur-sm',
          'text-primary-foreground',
          'border-primary/30',

          // Subtle glow
          'shadow-[0_2px_8px_rgba(139,92,246,0.3)]',

          'hover:bg-primary/90',
          'hover:shadow-[0_4px_12px_rgba(139,92,246,0.4)]',
        ],
      },

      secondary: {
        base: [
          'bg-secondary/80 backdrop-blur-sm',
          'text-secondary-foreground',
          'border-secondary/30',
          'shadow-[0_2px_8px_rgba(6,182,212,0.3)]',
          'hover:bg-secondary/90',
        ],
      },

      destructive: {
        base: [
          'bg-destructive/80 backdrop-blur-sm',
          'text-destructive-foreground',
          'border-destructive/30',
          'shadow-[0_2px_8px_rgba(239,68,68,0.3)]',
          'hover:bg-destructive/90',
        ],
      },

      outline: {
        base: [
          // Glass outline
          'bg-white/5 backdrop-blur-sm',
          'text-foreground',
          'border-white/20',
          'hover:bg-white/10',
        ],
      },
    },
  },
};
