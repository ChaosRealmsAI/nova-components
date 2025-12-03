// ADR-008: 纯数据配置，无组件依赖

export const dropdownMenuConfig = {
  slots: {
    content: [
      'bg-surface-1 border-2 border-primary rounded-none font-mono',
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
      'shadow-[0_0_20px_var(--primary)]',
    ],
    item: [
      'rounded-none font-mono uppercase tracking-wider text-xs',
      'focus:bg-primary/20 focus:text-primary',
    ],
    label: 'font-mono uppercase tracking-widest text-primary text-xs',
    separator: 'bg-primary/50',
    shortcut: 'font-mono text-primary/60',
  },
};
