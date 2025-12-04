/**
 * Combobox 组件样式 - Cyberpunk (Searchable Select)
 */
export const comboboxConfig = {
  slots: {
    root: [],
    
    trigger: [
      'flex h-10 w-full items-center justify-between rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'bg-black text-primary font-mono',
      'border-primary/30',
      
      // Hover
      'hover:border-primary hover:shadow-[0_0_10px_rgba(0,229,255,0.2)]',
    ],
    
    content: [
      'relative z-50 min-w-[8rem] overflow-hidden rounded-none border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95',
      'bg-black/95 border-primary/50',
      'shadow-[0_0_20px_rgba(0,229,255,0.2)]',
    ],
    
    item: [
      'relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'font-mono text-xs',
      'aria-selected:bg-primary/20 aria-selected:text-primary',
      'data-[highlighted]:bg-primary/20 data-[highlighted]:text-primary',
    ],

    command: [], // Added missing slot
    inputWrapper: [ // Added missing slot
        'flex items-center border-b px-3',
    ],
    input: [ // Added missing slot
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
    ],
    list: [ // Added missing slot
        'max-h-[300px] overflow-y-auto overflow-x-hidden',
    ],
    empty: [ // Added missing slot
        'py-6 text-center text-sm',
    ],
    group: [ // Added missing slot
        'overflow-hidden p-1 text-foreground',
    ],
    searchIcon: [ // Added missing slot
        'mr-2 h-4 w-4 shrink-0 opacity-50',
    ],
    icon: [ // Added missing slot
        'ml-auto h-4 w-4 shrink-0 opacity-50',
    ],
  },
};
