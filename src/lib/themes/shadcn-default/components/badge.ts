/**
 * Badge - Shadcn Default Theme
 *
 * Clean, minimal badge style with standard border radius.
 */
export const badgeConfig = {
  slots: {
    base: [
      // 形状
      'rounded-md',
      'border',
      // 内边距
      'px-2.5',
      'py-0.5',
      // 字体
      'text-xs',
      'font-semibold',
      // 动效
      'transition-colors',
      // 焦点状态
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-ring',
      'focus:ring-offset-2',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          'border-transparent',
          'bg-primary',
          'text-primary-foreground',
          'shadow',
          'hover:bg-primary/80',
        ],
      },
      secondary: {
        base: [
          'border-transparent',
          'bg-secondary',
          'text-secondary-foreground',
          'hover:bg-secondary/80',
        ],
      },
      destructive: {
        base: [
          'border-transparent',
          'bg-destructive',
          'text-destructive-foreground',
          'shadow',
          'hover:bg-destructive/80',
        ],
      },
      outline: {
        base: [
          'text-foreground',
          'border-border',
        ],
      },
    },
  },
};
