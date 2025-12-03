// ADR-008: 纯数据配置，无组件依赖

export const tooltipConfig = {
  slots: {
    content: [
      'bg-surface-1 text-foreground border border-primary rounded-none font-mono',
      'shadow-[0_0_10px_var(--primary)]',
      '[clip-path:polygon(4px_0,100%_0,100%_calc(100%-4px),calc(100%-4px)_100%,0_100%,0_4px)]',
    ],
    arrow: 'bg-primary fill-primary',
  },
};
