/**
 * Alert 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Notification Panel"
 * - Frosted glass background
 * - Subtle glow for different variants
 */
export const alertConfig = {
  slots: {
    base: [
      // Glass background
      'bg-white/[0.08] backdrop-blur-xl',

      // Glass border
      'border border-white/[0.15]',

      // Shape
      'rounded-xl',

      // Spacing
      'px-4 py-3',

      // Typography
      'text-[length:var(--text-sm)]',

      // Icon
      '[&>svg]:size-4 [&>svg]:text-current',
    ],

    icon: '[&>svg]:size-4 [&>svg]:text-current shrink-0',

    title: 'line-clamp-1 font-medium tracking-tight text-foreground',

    description: 'text-muted-foreground text-[length:var(--text-sm)]',
  },

  variants: {
    variant: {
      default: {
        base: [
          'text-foreground',
          'shadow-[0_4px_16px_rgba(0,0,0,0.15)]',
        ],
      },

      destructive: {
        base: [
          // Red-tinted glass
          'bg-destructive/[0.15] backdrop-blur-xl',
          'border-destructive/30',
          'text-destructive',
          '[&>svg]:text-destructive',
          'shadow-[0_4px_16px_rgba(239,68,68,0.15)]',
        ],
      },

      success: {
        base: [
          'bg-success/[0.15] backdrop-blur-xl',
          'border-success/30',
          'text-success',
          '[&>svg]:text-success',
          'shadow-[0_4px_16px_rgba(16,185,129,0.15)]',
        ],
      },

      warning: {
        base: [
          'bg-warning/[0.15] backdrop-blur-xl',
          'border-warning/30',
          'text-warning',
          '[&>svg]:text-warning',
          'shadow-[0_4px_16px_rgba(245,158,11,0.15)]',
        ],
      },

      info: {
        base: [
          'bg-info/[0.15] backdrop-blur-xl',
          'border-info/30',
          'text-info',
          '[&>svg]:text-info',
          'shadow-[0_4px_16px_rgba(59,130,246,0.15)]',
        ],
      },
    },
  },
};
