/**
 * Sidebar 组件样式 - Cyberpunk (Nav Panel)
 *
 * Design Concept: "System Navigation Panel"
 * - Dark background with neon accents
 * - Technical monospace typography
 */
export const sidebarConfig = {
  slots: {
    root: [
      'flex h-full w-[250px] flex-col border-r bg-background',
      'bg-black border-border/50',
    ],

    header: [
      'flex h-14 items-center border-b px-4',
      'border-border/50',
    ],

    content: [
      'flex-1 overflow-auto py-4',
    ],

    footer: [
      'border-t p-4',
      'border-border/50',
    ],

    group: [
      'pb-4',
    ],

    groupLabel: [
      'px-4 py-2 text-xs font-semibold text-muted-foreground',
      'uppercase tracking-widest text-[10px]',
    ],

    menu: [
      'space-y-1',
    ],

    menuItem: [
      'relative',
    ],

    menuButton: [
      'flex w-full items-center rounded-none px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
      'font-mono text-xs uppercase tracking-wide',
      'hover:bg-primary/10 hover:text-primary',
      'data-[active=true]:bg-primary/20 data-[active=true]:text-primary data-[active=true]:border-r-2 data-[active=true]:border-primary',
    ],

    menuBadge: [
      'ml-auto text-xs',
      'text-primary',
    ],

    separator: [
      'mx-4 my-2 h-px bg-border',
      'bg-primary/20',
    ],

    trigger: [
      'inline-flex items-center justify-center rounded-none p-2',
      'hover:bg-primary/10',
    ],

    overlay: [
      'fixed inset-0 z-40 bg-black/80',
    ],

    mobileContainer: [
      'fixed inset-y-0 left-0 z-50 w-[280px] bg-background',
      'bg-black border-r border-primary/30',
    ],
  },
  variants: {
    variant: {
      default: {
        root: [],
        header: [],
        content: [],
        footer: [],
        menuButton: [],
      },
      inset: {
        root: ['bg-transparent'],
        header: [],
        content: [],
        footer: [],
        menuButton: [],
      },
    },
    collapsible: {
      none: {
        root: [],
      },
      icon: {
        root: ['w-[60px]'],
      },
      offcanvas: {
        root: ['w-0 overflow-hidden'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    collapsible: 'none',
  },
};
