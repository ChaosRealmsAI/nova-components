/**
 * Drawer 组件样式 - Cyberpunk (Bottom Tray)
 */
export const drawerConfig = {
  slots: {
    content: [
      'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[0px] border bg-background',
      'bg-[#080808] border-primary/30',
      
      // Cut top corners
      '[clip-path:polygon(0_0,20px_0,20px_20px,calc(100%_-_20px)_20px,calc(100%_-_20px)_0,100%_0,100%_100%,0_100%)]',
      'pt-8', // Make room for the clip path
    ],
    
    overlay: [
      'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm',
    ],

    handle: [
        'mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted',
        'bg-primary/50 rounded-none',
    ],
    
    header: [
      'grid gap-1.5 p-4 text-center sm:text-left',
    ],
    
    footer: [
      'mt-auto flex flex-col gap-2 p-4',
    ],
    
    title: [
      'text-lg font-semibold leading-none tracking-tight',
      'font-mono text-primary uppercase',
    ],
    
    description: [
      'text-sm text-muted-foreground font-mono',
    ],
  },
};
