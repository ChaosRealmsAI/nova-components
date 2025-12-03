// ADR-008: 纯数据配置，无组件依赖
export const selectConfig = {
  slots: {
    trigger: [
      'rounded-lg',
      'border-primary/20',
      'bg-background/80',
      'focus-visible:border-primary focus-visible:ring-primary/20',
      'transition-colors duration-200',
    ],
    content: [
      'rounded-xl',
      'border-primary/20',
      'bg-background/95 backdrop-blur-md',
      'shadow-lg shadow-primary/10',
    ],
    viewport: '',
    item: [
      'rounded-lg',
      'focus:bg-primary/10 focus:text-primary',
      'transition-colors duration-150',
    ],
    label: 'text-primary/70 font-medium',
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
