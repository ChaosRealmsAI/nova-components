// ADR-008: 纯数据配置，无组件依赖

export const navigationMenuConfig = {
  slots: {
    root: 'text-foreground',
    list: '',
    item: '',
    trigger: [
      'rounded-lg bg-surface-1 text-foreground',
      'hover:bg-primary/10 hover:text-primary',
      'focus:bg-primary/10 focus:text-primary',
      'data-[state=open]:bg-primary/15 data-[state=open]:text-primary',
    ],
    content: 'rounded-lg bg-surface-1 shadow-lg border-border text-foreground',
    viewport: 'rounded-lg bg-surface-1 shadow-lg border-border text-foreground',
    link: [
      'rounded-md text-foreground',
      'hover:bg-primary/10 hover:text-primary',
      'focus:bg-primary/10 focus:text-primary',
    ],
    contentList: 'p-2 gap-1',
    listItem: [
      'rounded-lg px-3 py-2 text-foreground',
      'hover:bg-primary/10 hover:text-primary',
      'focus:bg-primary/10 focus:text-primary',
      'transition-colors',
    ],
    listItemTitle: 'text-sm font-medium text-foreground',
    listItemDescription: 'text-xs text-muted-foreground line-clamp-1',
    indicator: '',
    indicatorArrow: 'bg-border',
    chevron: 'text-muted-foreground',
  },
};
