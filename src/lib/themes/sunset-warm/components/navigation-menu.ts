// ADR-008: 纯数据配置，无组件依赖

export const navigationMenuConfig = {
  slots: {
    root: 'text-foreground',
    list: '',
    item: '',
    trigger: [
      'rounded-xl bg-surface-1 text-foreground',
      'hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary',
      'focus:bg-gradient-to-r focus:from-primary/10 focus:to-secondary/10 focus:text-primary',
      'data-[state=open]:bg-gradient-to-r data-[state=open]:from-primary/15 data-[state=open]:to-secondary/15 data-[state=open]:text-primary',
    ],
    content: 'rounded-xl bg-surface-1 shadow-xl border-border text-foreground',
    viewport: 'rounded-xl bg-surface-1 shadow-xl border-border text-foreground',
    link: [
      'rounded-lg text-foreground',
      'hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary',
      'focus:bg-gradient-to-r focus:from-primary/10 focus:to-secondary/10 focus:text-primary',
    ],
    contentList: 'p-2 gap-1',
    listItem: [
      'rounded-xl px-3 py-2 text-foreground',
      'hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary',
      'focus:bg-gradient-to-r focus:from-primary/10 focus:to-secondary/10 focus:text-primary',
      'transition-all',
    ],
    listItemTitle: 'text-sm font-medium text-foreground',
    listItemDescription: 'text-xs text-muted-foreground line-clamp-1',
    indicator: '',
    indicatorArrow: 'bg-border',
    chevron: 'text-muted-foreground',
  },
};
