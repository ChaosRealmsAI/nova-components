// ADR-008: 纯数据配置，无组件依赖
export const toggleGroupConfig = {
  slots: {
    root: '',
    item: [
      'rounded-xl',
      'hover:bg-primary/10 hover:text-primary',
      'data-[state=on]:bg-gradient-to-r data-[state=on]:from-primary data-[state=on]:to-primary/80',
      'data-[state=on]:text-primary-foreground',
      'data-[state=on]:shadow-md data-[state=on]:shadow-primary/20',
      'transition-all duration-200',
    ],
  },
  variants: {
    variant: {
      default: {},
      outline: {
        root: 'border-primary/20 rounded-2xl',
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
