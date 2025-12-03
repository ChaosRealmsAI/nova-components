// ADR-008: 纯数据配置，无组件依赖

export const cardConfig = {
  slots: {
    base: [
      'rounded-3xl',
      'border',
      'border-primary/15',
      'bg-gradient-to-br',
      'from-background',
      'via-background',
      'to-primary/10',
      'shadow-md',
    ],
    header: [],
    title: ['text-foreground', 'font-medium'],
    description: ['text-muted-foreground'],
    content: [],
    footer: [],
  },
  variants: {
    variant: {
      default: {},
      outline: {
        base: ['bg-transparent', 'border-2', 'border-primary/30'],
      },
      ghost: {
        base: ['border-transparent', 'bg-primary/5', 'shadow-none'],
      },
      elevated: {
        base: ['shadow-lg', 'shadow-primary/15'],
      },
    },
  },
};
