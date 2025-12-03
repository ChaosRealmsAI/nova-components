// ADR-008: 纯数据配置，无组件依赖

export const comboboxConfig = {
  slots: {
    trigger: [
      'rounded-xl text-foreground border-border',
      'hover:border-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 hover:text-primary',
    ],
    content: 'rounded-xl bg-surface-1 border-border shadow-xl text-foreground',
    command: 'rounded-xl',
    inputWrapper: 'border-b-0',
    input: 'text-foreground placeholder:text-muted-foreground',
    list: 'text-foreground',
    empty: 'text-muted-foreground',
    group: 'text-foreground',
    item: [
      'rounded-lg text-foreground',
      'data-[selected=true]:bg-gradient-to-r data-[selected=true]:from-primary/10 data-[selected=true]:to-secondary/10 data-[selected=true]:text-primary',
    ],
    searchIcon: 'text-muted-foreground',
    icon: 'text-muted-foreground',
  },
};
