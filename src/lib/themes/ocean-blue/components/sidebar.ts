// ADR-008: 纯数据配置，无组件依赖
export const sidebarConfig = {
  slots: {
    root: 'bg-card border-border/50',
    header: 'border-b border-border/50',
    content: '',
    footer: 'border-t border-border/50',
    group: '',
    groupLabel: 'text-muted-foreground',
    menu: '',
    menuItem: '',
    menuButton: [
      'hover:bg-accent hover:text-accent-foreground',
      'data-[active=true]:bg-primary/10 data-[active=true]:text-primary',
    ].join(' '),
    menuBadge: 'text-primary',
    separator: 'bg-border/50',
    trigger: 'border-border',
    overlay: '',
  },
};
