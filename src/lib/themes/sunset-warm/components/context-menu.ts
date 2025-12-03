// ADR-008: 纯数据配置，无组件依赖
export const contextMenuConfig = {
  slots: {
    content: [
      'rounded-2xl',
      'border-primary/20',
      'bg-gradient-to-br from-background to-primary/5',
      'shadow-xl shadow-primary/10',
    ],
    item: [
      'rounded-xl',
      'focus:bg-primary/15 focus:text-primary',
      'transition-all duration-200',
    ],
    label: 'text-primary/60 font-semibold',
    separator: 'bg-primary/10',
    shortcut: 'text-primary/40',
    checkboxItem: 'rounded-xl focus:bg-primary/15 focus:text-primary',
    radioItem: 'rounded-xl focus:bg-primary/15 focus:text-primary',
    indicator: '',
    subTrigger: 'rounded-xl focus:bg-primary/15 focus:text-primary',
    subContent: [
      'rounded-2xl',
      'border-primary/20',
      'bg-gradient-to-br from-background to-primary/5',
      'shadow-xl shadow-primary/10',
    ],
    trigger: 'rounded-xl border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
