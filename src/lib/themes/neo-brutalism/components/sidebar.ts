// ADR-008: 纯数据配置，无组件依赖
export const sidebarConfig = {
  slots: {
    root: [
      'bg-surface-1 border-primary/30',
      'font-mono',
    ].join(' '),
    header: 'border-b border-primary/30',
    content: '',
    footer: 'border-t border-primary/30',
    group: '',
    groupLabel: 'uppercase tracking-wider text-primary/70',
    menu: '',
    menuItem: '',
    menuButton: [
      'hover:bg-primary/20 hover:text-primary',
      'data-[active=true]:bg-primary/30 data-[active=true]:text-primary',
    ].join(' '),
    menuBadge: 'text-primary',
    separator: 'bg-primary/30',
    trigger: 'border-primary/50',
    overlay: '',
  },
};
