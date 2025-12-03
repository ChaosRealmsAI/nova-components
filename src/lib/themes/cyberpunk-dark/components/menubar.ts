// ADR-008: 纯数据配置，无组件依赖
export const menubarConfig = {
  slots: {
    root: [
      'rounded-none',
      'border-2 border-primary/50',
      'bg-surface-1',
      '[clip-path:polygon(6px_0,100%_0,100%_calc(100%-6px),calc(100%-6px)_100%,0_100%,0_6px)]',
      'shadow-[0_0_10px_var(--primary)]',
    ],
    trigger: [
      'rounded-none font-mono text-xs uppercase tracking-wider',
      'focus:bg-primary/20 focus:text-primary',
      'data-[state=open]:bg-primary/20 data-[state=open]:text-primary',
    ],
    content: [
      'rounded-none',
      'border-2 border-primary/50',
      'bg-surface-1',
      'shadow-[0_0_15px_var(--primary)]',
    ],
    item: [
      'rounded-none font-mono text-xs',
      'focus:bg-primary/20 focus:text-primary',
    ],
    label: 'font-mono text-primary/70',
    separator: 'bg-primary/30',
    shortcut: 'font-mono text-primary/70',
    checkboxItem: 'rounded-none font-mono focus:bg-primary/20 focus:text-primary',
    radioItem: 'rounded-none font-mono focus:bg-primary/20 focus:text-primary',
    indicator: '',
    subTrigger: 'rounded-none font-mono focus:bg-primary/20 focus:text-primary',
    subContent: [
      'rounded-none',
      'border-2 border-primary/50',
      'bg-surface-1',
      'shadow-[0_0_15px_var(--primary)]',
    ],
  },
};
