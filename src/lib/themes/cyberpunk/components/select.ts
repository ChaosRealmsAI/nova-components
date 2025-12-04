/**
 * Select 组件样式 - Cyberpunk (Dropdown Choice)
 */
export const selectConfig = {
  slots: {
    trigger: [
      'flex h-10 w-full items-center justify-between rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      'bg-black text-primary font-mono border-primary/30',
      'hover:border-primary hover:shadow-[0_0_10px_rgba(0,229,255,0.2)]',
      'data-[state=open]:border-primary data-[state=open]:shadow-[0_0_10px_rgba(0,229,255,0.4)]',
    ],
    
    scrollButton: [
      'flex cursor-default items-center justify-center py-1',
      'text-primary',
    ],
    
    content: [
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-none border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      'bg-black/95 border-primary/50 backdrop-blur-md',
      'shadow-[0_0_30px_rgba(0,229,255,0.15)]',
    ],
    
    item: [
      'relative flex w-full cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'font-mono text-xs',
      'focus:bg-primary/20 focus:text-primary',
    ],
    
    label: [
      'py-1.5 pl-8 pr-2 text-sm font-semibold',
      'text-primary/70 uppercase tracking-widest text-[10px]',
    ],
    
    separator: [
      '-mx-1 my-1 h-px bg-muted',
      'bg-primary/20',
    ],

    viewport: [ // Added missing slot
        'p-1',
    ],

    indicator: [ // Added missing slot
        'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
        'text-primary',
    ],

    icon: [ // Added missing slot
        'h-4 w-4 opacity-50',
    ]
  },
};
