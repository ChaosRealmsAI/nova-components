// ADR-008: 纯数据配置，无组件依赖

export const cardConfig = {
  slots: {
    base: [
      'rounded-2xl',
      'border',
      'border-primary/20',
      'bg-gradient-to-br',
      'from-background',
      'to-primary/5',
      'shadow-lg',
      'shadow-primary/10',
    ],
    header: [],
    title: ['text-foreground'],
    description: ['text-muted-foreground'],
    content: [],
    footer: [],
  },
  variants: {
    variant: {
      default: {},
      outline: {
        base: ['bg-transparent', 'border-2', 'border-primary/40'],
      },
      ghost: {
        base: ['border-transparent', 'bg-primary/5', 'shadow-none'],
      },
      elevated: {
        base: ['shadow-xl', 'shadow-primary/20', 'border-primary/30'],
      },
    },
  },
};
