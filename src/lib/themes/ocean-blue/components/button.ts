// ADR-008: 纯数据配置，无组件依赖
export const buttonConfig = {
  slots: {
    base: [
      'rounded-lg',
      'font-medium',
      'transition-all duration-200',
      'shadow-sm hover:shadow-md',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [
          'bg-primary text-primary-foreground',
          'hover:bg-primary/90',
          'hover:-translate-y-0.5',
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
          'hover:bg-primary hover:text-primary-foreground',
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
        ],
      },
      link: {
        base: 'shadow-none',
      },
    },
  },
};
