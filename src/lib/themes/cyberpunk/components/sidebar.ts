/**
 * Sidebar 组件样式 - Cyberpunk (Nav Panel)
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

    trigger: [], // Added missing slot
    overlay: [], // Added missing slot

    group: [], // Added missing slot
    groupLabel: [ // Added missing slot
      'px-4 py-2 text-xs font-semibold text-muted-foreground',
      'uppercase tracking-widest text-[10px]',
    ],

    menu: [], // Added missing slot
    
    item: [], // Replaced by menuItem usually but keeping it if template has it?
    // Error log said `menuItem` missing. It didn't say `item` missing (implied item was present or not checked).
    // But template usually uses specific structure.
    // Let's add `menuItem`, `menuButton`, `menuBadge`.
    
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
    ],
    
    label: [
      // Used to be here, replaced by groupLabel likely
    ],

    separator: [
        'mx-4 my-2 h-px bg-border',
    ]
  },
};
