// ADR-008: 纯数据配置，无组件依赖
export const sidebarConfig = {
  slots: {
    root: 'bg-card border-border/50 rounded-xl',
    header: 'border-b border-border/50',
    content: '',
    footer: 'border-t border-border/50',
    group: '',
    groupLabel: 'text-muted-foreground',
    menu: '',
    menuItem: '',
    menuButton: [
      'rounded-lg',
      'hover:bg-primary/10 hover:text-primary',
      'data-[active=true]:bg-primary/20 data-[active=true]:text-primary',
    ].join(' '),
    menuBadge: 'text-primary',
    separator: 'bg-border/50',
    trigger: 'border-border rounded-lg',
    overlay: '',
  },
};
