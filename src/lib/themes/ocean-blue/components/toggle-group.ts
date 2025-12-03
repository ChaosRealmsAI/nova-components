// ADR-008: 纯数据配置，无组件依赖
export const toggleGroupConfig = {
  slots: {
    root: '',
    item: [
      'rounded-lg',
      'hover:bg-primary/10 hover:text-primary',
      'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
      'transition-colors duration-150',
    ],
  },
  variants: {
    variant: {
      default: {},
      outline: {
        root: 'border-primary/20 rounded-xl',
        item: '',
      },
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
};
