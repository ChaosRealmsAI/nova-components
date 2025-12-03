// ADR-008: 纯数据配置，无组件依赖

export const popoverConfig = {
  slots: {
    content: [
      'bg-surface-1 border-2 border-primary rounded-none',
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
      'shadow-[0_0_20px_var(--primary)]',
      'font-mono',
    ],
  },
};
