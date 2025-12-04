/**
 * Tabs 组件样式 - Cyberpunk (System Navigation)
 * 
 * Design Concept: "Module Selector"
 * - List: Connected bar with separators.
 * - Trigger: Underline or background fill, monospace font.
 * - Content: Bordered panel.
 */
export const tabsConfig = {
  slots: {
    root: [],
    
    list: [
      'inline-flex h-10 items-center justify-center rounded-none bg-muted p-1 text-muted-foreground',
      'border border-border', // Box the list
      'w-full justify-start overflow-x-auto', // Align left typically
    ],
    
    trigger: [
      'inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      'rounded-none',
      'font-mono uppercase tracking-wider',
      
      // Inactive: Dim
      'data-[state=inactive]:hover:text-foreground',
      
      // Active: High contrast, Neon
      'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
      'data-[state=active]:shadow-[0_0_10px_rgba(0,229,255,0.3)]',
      
      // Clip path for active tab - slight angle
      'data-[state=active]:[clip-path:polygon(10px_0,100%_0,100%_100%,0_100%,0_10px)]',
    ],
    
    content: [
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'border border-border p-4 bg-black/50',
      'relative',
      // Corner markers
      'before:absolute before:top-0 before:left-0 before:w-2 before:h-2 before:border-t-2 before:border-l-2 before:border-primary',
      'after:absolute after:bottom-0 after:right-0 after:w-2 after:h-2 after:border-b-2 before:border-r-2 after:border-primary',
    ],
  },
};