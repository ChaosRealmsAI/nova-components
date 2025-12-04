/**
 * Pagination 组件样式 - Cyberpunk (Data Paging)
 * 
 * Design Concept: "Sequence Navigator"
 * - Numbers: Monospace, bracketed active state.
 * - Arrows: Sharp chevrons.
 */
export const paginationConfig = {
  slots: {
    root: [
      'mx-auto flex w-full justify-center',
    ],
    
    content: [
      'flex flex-row items-center gap-1',
    ],
    
    item: [],
    
    link: [
      'group inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      'h-9 w-9 rounded-none',
      'font-mono',
      
      // Active state: [ 1 ] style
      'data-[is-active=true]:bg-transparent data-[is-active=true]:text-primary data-[is-active=true]:font-bold',
      'data-[is-active=true]:before:content-["["] data-[is-active=true]:after:content-["]"]',
      
      // Hover
      'hover:bg-primary/10 hover:text-primary',
    ],
    
    previous: [
      'group inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      'h-9 px-4 py-2 gap-1 pl-2.5',
      'font-mono uppercase text-xs',
      'hover:text-primary',
    ],
    
    next: [
      'group inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      'h-9 px-4 py-2 gap-1 pr-2.5',
      'font-mono uppercase text-xs',
      'hover:text-primary',
    ],
    
    ellipsis: [
      'flex h-9 w-9 items-center justify-center',
      'text-primary', // Colored dots
    ],
  },
};