// ADR-008: 纯数据配置，无组件依赖
export const badgeConfig = {
  slots: {
    base: [
      'rounded-none font-mono uppercase tracking-wider text-[10px]',
      '[clip-path:polygon(4px_0,100%_0,100%_calc(100%-4px),calc(100%-4px)_100%,0_100%,0_4px)]',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [
          'bg-primary text-primary-foreground',
          'shadow-[0_0_8px_var(--primary)]',
        ],
      },
      secondary: {
        base: 'bg-secondary text-secondary-foreground shadow-[0_0_6px_var(--secondary)]',
      },
      destructive: {
        base: [
          'bg-destructive text-destructive-foreground',
          'shadow-[0_0_8px_var(--destructive)]',
        ],
      },
      outline: {
        base: [
          'bg-transparent text-primary',
          'shadow-[inset_0_0_0_1px_var(--primary),0_0_6px_var(--primary)]',
        ],
      },
    },
  },
};
