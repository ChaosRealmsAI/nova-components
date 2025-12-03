// ADR-008: 纯数据配置，无组件依赖
export const toggleGroupConfig = {
  slots: {
    root: '',
    item: [
      'rounded-none font-mono',
      'border border-primary/30',
      'hover:border-primary hover:shadow-[0_0_8px_var(--primary)]',
      'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
      'data-[state=on]:shadow-[0_0_10px_var(--primary)]',
    ],
  },
  variants: {
    variant: {
      default: {},
      outline: {
        root: 'border-primary/50 rounded-none',
        item: 'border-0',
      },
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
};
