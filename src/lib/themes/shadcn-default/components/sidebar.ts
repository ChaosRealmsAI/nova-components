/**
 * Sidebar 组件样式 - Shadcn Default Theme
 */
export const sidebarConfig = {
  slots: {
    root: 'bg-background text-foreground border-r border-border',
    header: 'border-b border-border',
    content: '',
    footer: 'border-t border-border',
    group: '',
    groupLabel: 'text-muted-foreground',
    menu: '',
    menuItem: '',
    menuButton:
      'text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active=true]:bg-accent data-[active=true]:text-accent-foreground',
    menuBadge: 'text-muted-foreground',
    separator: 'bg-border',
    trigger: 'bg-background border border-border shadow-sm hover:bg-accent',
    overlay: 'bg-black/50',
    mobileContainer: '',
  },
  variants: {
    variant: {
      default: {
        root: '',
      },
      inset: {
        root: '',
      },
    },
    collapsible: {
      none: {},
      icon: {},
      offcanvas: {},
    },
  },
};
