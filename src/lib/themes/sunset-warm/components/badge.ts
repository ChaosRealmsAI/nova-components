// ADR-008: 纯数据配置，无组件依赖

export const badgeConfig = {
  slots: {
    base: [
      'rounded-lg font-medium',
      'shadow-sm',
      'transition-colors duration-200',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [
          'bg-primary text-primary-foreground',
          'hover:bg-primary/90',
        ],
      },
      secondary: {
        base: 'bg-secondary text-secondary-foreground hover:bg-secondary/90',
      },
      destructive: {
        base: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      },
      outline: {
        base: [
          'bg-transparent text-foreground',
          'border border-border',
          'hover:bg-surface-1',
        ],
      },
    },
  },
};
