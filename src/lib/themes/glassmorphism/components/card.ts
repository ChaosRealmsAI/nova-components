/**
 * Card 组件样式 - Glassmorphism
 *
 * Design Concept: "Frosted Glass Panel"
 * - Glass effect with backdrop blur
 * - Subtle white border for depth
 * - Soft shadow for floating effect
 */

export const cardConfig = {
  slots: {
    base: [
      // Glass background
      'bg-white/[0.08] backdrop-blur-xl',
      'text-card-foreground',

      // Glass border
      'border border-white/[0.15]',

      // Large rounded corners
      'rounded-2xl',

      // Soft shadow
      'shadow-[0_8px_32px_rgba(0,0,0,0.2)]',

      // Spacing
      'gap-6',
      'py-6',

      // Hover effect
      'transition-all duration-300',
    ],

    header: [
      'px-6',
      'gap-2',
    ],

    title: [
      'leading-none',
      'font-semibold',
      'text-foreground',
    ],

    description: [
      'text-muted-foreground',
      'text-sm',
    ],

    action: 'flex items-center gap-2',

    content: [
      'px-6',
    ],

    footer: [
      'px-6',
    ],
  },

  variants: {
    variant: {
      default: {
        base: 'bg-white/[0.08] backdrop-blur-xl',
        header: 'px-6',
        title: 'text-foreground',
        description: 'text-muted-foreground',
        action: 'flex items-center',
        content: 'px-6',
        footer: 'px-6',
      },

      outline: {
        base: [
          'bg-transparent backdrop-blur-none',
          'border-2 border-white/20',
          'shadow-none',
        ],
      },

      ghost: {
        base: [
          'border-transparent',
          'shadow-none',
          'bg-transparent backdrop-blur-none',
        ],
      },

      elevated: {
        base: [
          // Stronger glass effect
          'bg-white/[0.12] backdrop-blur-2xl',
          'shadow-[0_16px_48px_rgba(0,0,0,0.25)]',
          'border-0',

          // Subtle glow on hover
          'hover:shadow-[0_16px_48px_rgba(139,92,246,0.15)]',
        ],
      },
    },

    size: {
      sm: {
        base: ['py-4', 'gap-4', 'rounded-xl'],
        header: ['px-4', 'gap-1'],
        title: ['text-sm'],
        description: ['text-xs'],
        content: ['px-4'],
        footer: ['px-4'],
      },

      default: {
        base: 'py-6 gap-6 rounded-2xl',
        header: 'px-6 gap-2',
        title: 'text-base',
        description: 'text-sm',
        action: 'flex items-center',
        content: 'px-6',
        footer: 'px-6',
      },

      lg: {
        base: ['py-8', 'gap-8', 'rounded-3xl'],
        header: ['px-8', 'gap-3'],
        title: ['text-xl'],
        content: ['px-8'],
        footer: ['px-8'],
      },
    },
  },
};
