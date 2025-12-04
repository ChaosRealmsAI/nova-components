/**
 * Accordion 组件样式 - Cyberpunk (Data Bank)
 */
export const accordionConfig = {
  slots: {
    root: [],
    
    item: [
      'border-b border-border/50',
      // Tech accent on the left
      'relative pl-2', 
      'after:absolute after:left-0 after:top-[10%] after:bottom-[10%] after:w-[2px] after:bg-border after:transition-colors',
      'data-[state=open]:after:bg-primary',
      'data-[state=open]:after:shadow-[0_0_8px_rgba(0,229,255,0.6)]',
    ],

    header: [ // Added missing slot
        'flex',
    ],
    
    trigger: [
      'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-primary',
      'font-mono uppercase tracking-wider text-sm', // Monospace header
      '[&[data-state=open]>svg]:rotate-180',
      'group',
      
      // Hover glow
      'hover:text-primary hover:shadow-[0_4px_10px_-5px_rgba(0,229,255,0.3)]',
    ],

    chevron: [ // Added missing slot
        'h-4 w-4 shrink-0 transition-transform duration-200',
    ],
    
    content: [
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      'text-muted-foreground font-sans',
      'pb-4 pt-0',
    ],

    contentInner: [ // Added missing slot
        'pb-4 pt-0',
    ]
  },
};
