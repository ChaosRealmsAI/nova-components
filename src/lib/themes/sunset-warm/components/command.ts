// ADR-008: 纯数据配置，无组件依赖
export const commandConfig = {
  slots: {
    root: [
      'rounded-3xl',
      'border-primary/20',
      'bg-gradient-to-br from-background to-primary/5',
      'shadow-xl shadow-primary/10',
    ],
    inputWrapper: 'border-primary/10',
    input: 'placeholder:text-muted-foreground/50',
    list: '',
    empty: 'text-muted-foreground/60',
    group: '',
    separator: 'bg-primary/10',
    item: [
      'rounded-xl',
      'data-[selected=true]:bg-primary/15',
      'data-[selected=true]:text-primary',
      'transition-all duration-200',
    ],
    shortcut: 'text-primary/40',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
