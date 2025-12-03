// ADR-008: 纯数据配置，无组件依赖
export const commandConfig = {
  slots: {
    root: [
      'rounded-xl',
      'border-primary/20',
      'bg-background/95 backdrop-blur-md',
      'shadow-lg shadow-primary/10',
    ],
    inputWrapper: 'border-primary/10',
    input: 'placeholder:text-muted-foreground/60',
    list: '',
    empty: 'text-muted-foreground/70',
    group: '',
    separator: 'bg-primary/10',
    item: [
      'rounded-lg',
      'data-[selected=true]:bg-primary/10',
      'data-[selected=true]:text-primary',
      'transition-colors duration-150',
    ],
    shortcut: 'text-primary/50',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
