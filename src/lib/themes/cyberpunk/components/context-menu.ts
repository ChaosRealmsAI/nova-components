/**
 * ContextMenu 组件样式 - Cyberpunk (Right Click)
 */
export const contextMenuConfig = {
  slots: {
    trigger: [], // Added missing slot

    content: [
      'z-50 min-w-[8rem] overflow-hidden rounded-none border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      'bg-black/95 border-primary/30 backdrop-blur-md',
      'shadow-[0_0_20px_rgba(0,229,255,0.15)]',
    ],
    
    item: [
      'relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'font-mono text-xs focus:text-primary focus:bg-primary/10',
    ],
    
    indicator: [ // Added missing slot
        'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    ],

    shortcut: [
      'ml-auto text-xs tracking-widest text-muted-foreground font-mono',
    ],
    
    separator: [
      '-mx-1 my-1 h-px bg-primary/20',
    ],
    
    label: [
      'px-2 py-1.5 text-sm font-semibold text-foreground font-mono text-[10px] uppercase',
    ],

    checkboxItem: [
       'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
       'font-mono text-xs focus:text-primary focus:bg-primary/10',
    ],

    radioItem: [
       'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
       'font-mono text-xs focus:text-primary focus:bg-primary/10',
    ],

    subTrigger: [
       'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
       'font-mono text-xs focus:text-primary focus:bg-primary/10',
    ],

    subContent: [
       'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
       'bg-black/95 border-primary/30 backdrop-blur-md rounded-none',
       'shadow-[0_0_20px_rgba(0,229,255,0.15)]',
    ],
  },
};
