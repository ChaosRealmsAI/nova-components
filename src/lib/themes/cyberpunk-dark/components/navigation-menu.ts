// ADR-008: 纯数据配置，无组件依赖

export const navigationMenuConfig = {
  slots: {
    root: 'font-mono text-foreground',
    list: '',
    item: '',
    trigger: [
      'rounded-none bg-surface-1 border border-primary/50 font-mono uppercase tracking-wider text-xs text-foreground',
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
      'hover:bg-primary/20 hover:text-primary hover:border-primary hover:shadow-[0_0_10px_var(--primary)]',
      'focus:bg-primary/20 focus:text-primary focus:border-primary',
      'data-[state=open]:bg-primary/30 data-[state=open]:text-primary data-[state=open]:border-primary',
    ],
    content: [
      'rounded-none bg-surface-1 border border-primary/50 font-mono text-foreground',
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
      'shadow-[0_0_20px_var(--primary)]',
    ],
    viewport: [
      'rounded-none bg-surface-1 border border-primary text-foreground',
      '[clip-path:polygon(8px_0,100%_0,100%_calc(100%-8px),calc(100%-8px)_100%,0_100%,0_8px)]',
      'shadow-[0_0_20px_var(--primary)]',
    ],
    link: [
      'rounded-none font-mono uppercase tracking-wider text-xs text-foreground',
      'hover:bg-primary/20 hover:text-primary',
      'focus:bg-primary/20 focus:text-primary',
    ],
    contentList: 'p-2 gap-1',
    listItem: [
      'rounded-none border border-transparent px-3 py-2 text-foreground',
      'hover:bg-primary/20 hover:text-primary hover:border-primary/50',
      'focus:bg-primary/20 focus:text-primary focus:border-primary/50',
      'transition-all',
    ],
    listItemTitle: 'font-mono uppercase tracking-wider text-xs text-foreground',
    listItemDescription: 'font-mono text-[10px] text-muted-foreground normal-case tracking-normal line-clamp-1',
    indicator: '',
    indicatorArrow: 'bg-primary',
    chevron: 'text-primary',
  },
};
