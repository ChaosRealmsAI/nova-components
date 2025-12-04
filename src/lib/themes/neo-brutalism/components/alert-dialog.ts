// ADR-008: 纯数据配置，无组件依赖
export const alertDialogConfig = {
  slots: {
    overlay: 'bg-black/70',
    content: [
      'rounded-none',
      'border-2 border-primary/50',
      'bg-surface-1',
      '[clip-path:polygon(12px_0,100%_0,100%_calc(100%-12px),calc(100%-12px)_100%,0_100%,0_12px)]',
      'shadow-[0_0_30px_var(--primary)]',
    ],
    header: '',
    title: 'font-mono uppercase tracking-wider',
    description: 'font-mono',
    footer: '',
  },
  variants: {
    variant: {
      default: {},
      destructive: {
        content: [
          'border-destructive/50',
          'shadow-[0_0_30px_var(--destructive)]',
        ],
      },
    },
  },
};
