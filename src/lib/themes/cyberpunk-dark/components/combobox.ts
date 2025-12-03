// ADR-008: 纯数据配置，无组件依赖

export const comboboxConfig = {
  slots: {
    trigger: [
      'rounded-none font-mono text-foreground border-2 border-primary/50',
      '[clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]',
      'hover:border-primary hover:bg-primary/10 hover:text-primary',
    ],
    content: [
      'rounded-none border-2 border-primary/50 bg-surface-1 text-foreground',
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
      'shadow-[0_0_20px_var(--primary)]',
    ],
    command: 'rounded-none',
    inputWrapper: 'border-b-0',
    input: 'font-mono text-foreground placeholder:text-muted-foreground',
    list: 'text-foreground',
    empty: 'font-mono text-muted-foreground',
    group: 'font-mono text-foreground',
    item: [
      'rounded-none font-mono text-foreground',
      'data-[selected=true]:bg-primary/20 data-[selected=true]:text-primary',
    ],
    searchIcon: 'text-primary/50',
    icon: 'text-primary/50',
  },
};
