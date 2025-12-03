// ADR-008: 纯数据配置，无组件依赖
export const buttonConfig = {
  slots: {
    base: [
      'rounded-xl',
      'font-medium',
      'transition-all duration-300 ease-out',
      'shadow-md hover:shadow-lg',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [
          'bg-gradient-to-r from-primary to-accent',
          'text-primary-foreground',
          'hover:from-primary/90 hover:to-accent/90',
          'hover:-translate-y-1 hover:scale-[1.02]',
        ],
      },
      destructive: {
        base: [
          'bg-error text-error-foreground',
          'hover:bg-error/90',
        ],
      },
      outline: {
        base: [
          'border-2 border-primary text-primary',
          'bg-transparent',
          'hover:bg-primary/10',
          'hover:shadow-[0_0_15px_var(--primary)]',
        ],
      },
      secondary: {
        base: [
          'bg-secondary text-secondary-foreground',
          'hover:bg-secondary/80',
        ],
      },
      ghost: {
        base: [
          'text-foreground',
          'hover:bg-surface-2',
          'hover:text-primary',
        ],
      },
      link: {
        base: 'shadow-none rounded-none',
      },
    },
  },
};
