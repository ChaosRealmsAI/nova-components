// ADR-008: 纯数据配置，无组件依赖

export const comboboxConfig = {
  slots: {
    trigger: [
      'rounded-lg text-foreground border-border',
      'hover:border-primary hover:bg-primary/10 hover:text-primary',
    ],
    content: 'rounded-lg bg-surface-1 border-border shadow-lg text-foreground',
    command: 'rounded-lg',
    inputWrapper: 'border-b-0',
    input: 'text-foreground placeholder:text-muted-foreground',
    list: 'text-foreground',
    empty: 'text-muted-foreground',
    group: 'text-foreground',
    item: [
      'rounded-md text-foreground',
      'data-[selected=true]:bg-primary/10 data-[selected=true]:text-primary',
    ],
    searchIcon: 'text-muted-foreground',
    icon: 'text-muted-foreground',
  },
};
