/**
 * Menubar 组件样式 - Cyberpunk (App Toolbar)
 */
export const menubarConfig = {
  slots: {
    root: [
      'flex h-10 items-center space-x-1 rounded-none border bg-background p-1',
      'border-b border-border bg-black/50 backdrop-blur', // Toolbar look
    ],
    
    trigger: [
      'flex cursor-pointer select-none items-center px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      'rounded-none font-mono uppercase text-xs tracking-wider',
      
      // Hover effect
      'focus:bg-primary/10 focus:text-primary',
      'data-[state=open]:bg-primary/20 data-[state=open]:text-primary',
    ],
    
    content: [
      'z-50 min-w-[12rem] overflow-hidden rounded-none border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      
      'bg-black/95 border-primary/30',
      'shadow-[0_0_20px_rgba(0,229,255,0.15)]',
    ],
    
    item: [
      'relative flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'rounded-none font-mono text-xs',
      'focus:bg-primary/20 focus:text-primary',
    ],
    
    separator: [
      '-mx-1 my-1 h-px bg-muted',
      'bg-primary/20',
    ],
    
    shortcut: [
      'ml-auto text-xs tracking-widest text-muted-foreground',
      'text-primary font-mono',
    ],

    label: [ // Added missing slot
        'px-2 py-1.5 text-sm font-semibold',
        'text-muted-foreground font-mono text-[10px] uppercase tracking-widest',
    ],

    checkboxItem: [ // Added missing slot
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        'font-mono text-xs focus:text-primary focus:bg-primary/10',
    ],

    radioItem: [ // Added missing slot
        'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        'font-mono text-xs focus:text-primary focus:bg-primary/10',
    ],

    indicator: [ // Added missing slot
        'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        'text-primary',
    ],

    subTrigger: [ // Added missing slot
        'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        'font-mono text-xs focus:text-primary focus:bg-primary/10',
    ],

    subContent: [ // Added missing slot
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        'bg-black/95 border-primary/30 backdrop-blur-md rounded-none',
        'shadow-[0_0_20px_rgba(0,229,255,0.15)]',
    ],
  },
};
