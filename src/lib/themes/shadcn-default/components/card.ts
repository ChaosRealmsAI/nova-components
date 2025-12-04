/**
 * Card 组件样式 - Shadcn Default
 *
 * 经典 shadcn 风格：干净、简约、专业
 */
export const cardConfig = {
  slots: {
    base: [
      'bg-card',
      'text-card-foreground',
      'rounded-lg',
      'border',
      'shadow-sm',
      'gap-6',
      'py-6',
    ],
    header: [
      'px-6',
      'gap-2',
    ],
    title: [
      'leading-none',
      'font-semibold',
      'tracking-tight',
    ],
    description: [
      'text-muted-foreground',
      'text-sm',
    ],
    action: [],
    content: [
      'px-6',
    ],
    footer: [
      'px-6',
    ],
  },

  variants: {
    variant: {
      default: {},
      outline: {
        base: [
          'border-2',
          'shadow-none',
        ],
      },
      ghost: {
        base: [
          'border-transparent',
          'shadow-none',
          'bg-transparent',
        ],
      },
      elevated: {
        base: [
          'shadow-md',
          'border-0',
        ],
      },
    },

    size: {
      sm: {
        base: ['py-4', 'gap-4'],
        header: ['px-4', 'gap-1'],
        title: ['text-sm'],
        description: ['text-xs'],
        content: ['px-4'],
        footer: ['px-4'],
      },
      default: {},
      lg: {
        base: ['py-8', 'gap-8'],
        header: ['px-8', 'gap-3'],
        title: ['text-xl'],
        content: ['px-8'],
        footer: ['px-8'],
      },
    },
  },
};
