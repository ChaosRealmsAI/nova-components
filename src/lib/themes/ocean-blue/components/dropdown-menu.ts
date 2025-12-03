// ADR-008: 纯数据配置，无组件依赖

export const dropdownMenuConfig = {
  slots: {
    content: 'bg-surface-1 rounded-lg shadow-lg border-border',
    item: 'rounded-md focus:bg-primary/10 focus:text-primary',
    label: 'text-primary font-medium',
    separator: 'bg-border',
    shortcut: 'text-muted-foreground',
  },
};
