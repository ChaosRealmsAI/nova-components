/**
 * Sidebar 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const sidebarConfig = {
  slots: {
    root: 'flex h-full w-full flex-col bg-surface-1 border-r-2 border-border',
    header: 'flex items-center border-b-2 border-border px-6 py-4',
    content: 'flex-1 overflow-auto px-4 py-4',
    footer: 'border-t-2 border-border px-6 py-4',
    group: '',
    groupLabel: 'px-3 py-2 font-serif text-xs font-bold uppercase tracking-wide text-muted-foreground',
    menu: 'grid items-start gap-1 font-serif text-sm',
    menuItem: '',
    menuButton: [
      'flex items-center gap-3 rounded-[2px] px-3 py-2',
      'font-serif font-medium text-foreground',
      'transition-colors duration-150',
      'hover:bg-surface-2',
      'data-[active=true]:bg-primary-muted data-[active=true]:text-primary',
    ],
    menuBadge: '',
    separator: '-mx-1 my-2 h-[2px] bg-border',
    trigger: '',
    overlay: '',
  },
};
