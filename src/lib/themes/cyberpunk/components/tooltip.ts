/**
 * Tooltip 组件样式 - Cyberpunk (Info Tag)
 */
export const tooltipConfig = {
  slots: {
    content: [
      'z-50 overflow-hidden rounded-none border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      
      'bg-black/90 border-primary/50',
      'text-primary font-mono text-xs',
      
      // Corner cuts
      '[clip-path:polygon(5px_0,100%_0,100%_calc(100%_-_5px),calc(100%_-_5px)_100%,0_100%,0_5px)]',
      
      'shadow-[0_0_10px_rgba(0,229,255,0.2)]',
    ],
    
    arrow: [
      'fill-primary',
    ],
  },
};
