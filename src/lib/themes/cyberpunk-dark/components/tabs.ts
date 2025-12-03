// ADR-008: 纯数据配置，无组件依赖

export const tabsConfig = {
  slots: {
    root: '',
    list: [
      'bg-surface-1 rounded-none border border-primary',
      '[clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]',
      'shadow-[0_0_10px_var(--primary)]',
    ],
    trigger: [
      'rounded-none font-mono uppercase tracking-wider text-xs',
      'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
      'data-[state=active]:shadow-[0_0_8px_var(--primary)]',
      'hover:text-primary',
    ],
    content: 'font-mono',
  },
};
