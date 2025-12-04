/**
 * DropdownMenu 组件样式 - Cyberpunk (Holographic Menu)
 * 
 * Design Concept: "Contextual HUD"
 * - Border: Neon outline.
 * - Background: Dark glass.
 * - Item: Hover glow.
 */
export const dropdownMenuConfig = {
  slots: {
    content: [
      'z-50 min-w-[8rem] overflow-hidden rounded-none border bg-popover p-1 text-popover-foreground shadow-md',
      'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      
      'bg-black/90 border-primary/30 backdrop-blur-md', // Glassy black
      'shadow-[0_0_20px_rgba(0,229,255,0.15)]', // Ambient glow
      
      // Cut corner bottom-right
      '[clip-path:polygon(0_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%)]',
    ],
    
    item: [
      'relative flex cursor-pointer select-none items-center px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'rounded-none',
      'font-mono text-xs tracking-wide', // Technical look
      
      // Hover/Focus state
      'focus:bg-primary/20 focus:text-primary focus:shadow-[inset_2px_0_0_0_var(--primary)]',
    ],
    
    separator: [
      '-mx-1 my-1 h-px bg-muted',
      'bg-primary/20', // Neon separator
    ],
    
    label: [
      'px-2 py-1.5 text-sm font-semibold',
      'text-muted-foreground font-mono text-[10px] uppercase tracking-widest',
    ],
    
    shortcut: [
      'ml-auto text-xs tracking-widest opacity-60',
      'font-mono text-primary',
    ],
    
    subTrigger: [
      'flex cursor-default select-none items-center px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
      'rounded-none font-mono text-xs',
    ],
    
    subContent: [
      'z-50 min-w-[8rem] overflow-hidden rounded-none border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      'bg-black/95 border-primary/30',
      'shadow-[0_0_20px_rgba(0,229,255,0.2)]',
    ],

    checkboxItem: [
      'relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'font-mono text-xs',
    ],
    
    radioItem: [
      'relative flex cursor-default select-none items-center py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'font-mono text-xs',
    ],
  },
};