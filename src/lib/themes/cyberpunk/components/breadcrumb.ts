/**
 * Breadcrumb 组件样式 - Cyberpunk (Path Finder)
 * 
 * Design Concept: "Directory Path"
 * - Separator: Slashes or Arrows.
 * - Text: Monospace path style.
 */
export const breadcrumbConfig = {
  slots: {
    root: [
      'font-mono text-xs tracking-wide uppercase', // Terminal path style
    ],
    
    list: [
      'flex flex-wrap items-center gap-1.5 break-words sm:gap-2.5 text-muted-foreground',
    ],
    
    item: [
      'inline-flex items-center gap-1.5',
    ],
    
    link: [
      'transition-colors hover:text-primary hover:underline decoration-primary underline-offset-4',
    ],
    
    page: [
      'font-bold text-foreground text-primary', // Current page highlight
    ],
    
    separator: [
      '[&>svg]:size-3.5 text-muted-foreground/50',
    ],
    
    ellipsis: [
      'flex h-9 w-9 items-center justify-center',
    ],
  },
};