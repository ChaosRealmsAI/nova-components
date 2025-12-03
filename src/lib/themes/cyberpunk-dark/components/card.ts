// ADR-008: 纯数据配置，无组件依赖

export const cardConfig = {
  slots: {
    base: [
      'rounded-none',
      'border-2',
      'border-primary',
      'bg-background/80',
      'backdrop-blur-sm',
      'shadow-[0_0_20px_var(--primary)]',
    ],
    header: ['border-b', 'border-primary/30', 'pb-4'],
    title: ['font-mono', 'uppercase', 'tracking-widest', 'text-primary'],
    description: ['font-mono', 'text-muted-foreground'],
    content: [],
    footer: ['border-t', 'border-primary/30', 'pt-4'],
  },
  variants: {
    variant: {
      default: {},
      outline: {
        base: ['bg-transparent', 'shadow-[0_0_30px_var(--primary)]'],
      },
      ghost: {
        base: ['border-primary/50', 'bg-transparent', 'shadow-none'],
      },
      elevated: {
        base: ['shadow-[0_0_40px_var(--primary)]', 'border-primary'],
      },
    },
  },
};
