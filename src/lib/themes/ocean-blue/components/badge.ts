// ADR-008: 纯数据配置，无组件依赖

export const badgeConfig = {
  slots: {
    base: [
      'rounded-full font-medium',
      'shadow-sm',
      'transition-all duration-200',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [
          'bg-gradient-to-r from-primary to-primary/80',
          'text-primary-foreground',
          'hover:shadow-md hover:scale-105',
        ],
      },
      secondary: {
        base: 'bg-secondary/80 text-secondary-foreground backdrop-blur-sm',
      },
      destructive: {
        base: 'bg-gradient-to-r from-destructive to-destructive/80 text-destructive-foreground',
      },
      outline: {
        base: [
          'bg-transparent text-primary',
          'border border-primary/50',
          'hover:bg-primary/10',
        ],
      },
    },
  },
};
