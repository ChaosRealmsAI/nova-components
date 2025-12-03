// ADR-008: 纯数据配置，无组件依赖
export const alertConfig = {
  slots: {
    base: [
      'rounded-none',
      'border-2 border-primary/50',
      'bg-surface-1',
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
    ],
    icon: '',
    title: 'font-mono uppercase tracking-wider',
    description: 'font-mono',
  },
  variants: {
    variant: {
      default: {
        base: 'shadow-[0_0_10px_var(--primary)]',
      },
      destructive: {
        base: [
          'border-destructive/50',
          'shadow-[0_0_10px_var(--destructive)]',
        ],
      },
    },
  },
};
