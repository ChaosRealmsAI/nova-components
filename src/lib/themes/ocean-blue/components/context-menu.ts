// ADR-008: 纯数据配置，无组件依赖
export const contextMenuConfig = {
  slots: {
    content: [
      'rounded-xl',
      'border-primary/20',
      'bg-background/95 backdrop-blur-md',
      'shadow-lg shadow-primary/10',
    ],
    item: [
      'rounded-lg',
      'focus:bg-primary/10 focus:text-primary',
      'transition-colors duration-150',
    ],
    label: 'text-primary/70 font-medium',
    separator: 'bg-primary/10',
    shortcut: 'text-primary/50',
    checkboxItem: 'rounded-lg focus:bg-primary/10 focus:text-primary',
    radioItem: 'rounded-lg focus:bg-primary/10 focus:text-primary',
    indicator: '',
    subTrigger: 'rounded-lg focus:bg-primary/10 focus:text-primary',
    subContent: [
      'rounded-xl',
      'border-primary/20',
      'bg-background/95 backdrop-blur-md',
      'shadow-lg shadow-primary/10',
    ],
    trigger: 'rounded-lg border-primary/20 hover:border-primary/40 transition-colors duration-200',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
