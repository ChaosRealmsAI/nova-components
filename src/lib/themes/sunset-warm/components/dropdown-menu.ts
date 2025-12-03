// ADR-008: 纯数据配置，无组件依赖

export const dropdownMenuConfig = {
  slots: {
    content: 'bg-surface-1 rounded-xl shadow-xl border-border',
    item: 'rounded-lg focus:bg-gradient-to-r focus:from-primary/10 focus:to-secondary/10 focus:text-primary',
    label: 'text-primary font-medium',
    separator: 'bg-border',
    shortcut: 'text-muted-foreground',
  },
};
