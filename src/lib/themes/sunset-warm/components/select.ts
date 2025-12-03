// ADR-008: 纯数据配置，无组件依赖
export const selectConfig = {
  slots: {
    trigger: [
      'rounded-xl',
      'border-primary/20',
      'bg-gradient-to-r from-background to-primary/5',
      'focus-visible:border-primary focus-visible:ring-primary/20',
      'transition-all duration-300',
    ],
    content: [
      'rounded-2xl',
      'border-primary/20',
      'bg-gradient-to-br from-background to-primary/5',
      'shadow-xl shadow-primary/10',
    ],
    viewport: '',
    item: [
      'rounded-xl',
      'focus:bg-primary/15 focus:text-primary',
      'transition-all duration-200',
    ],
    label: 'text-primary/60 font-semibold',
    separator: 'bg-primary/10',
    indicator: '',
    scrollButton: '',
    icon: '',
  },
  variants: {
    variant: {
      default: {},
    },
    size: {
      default: {},
      sm: {},
    },
  },
};
