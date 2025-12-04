/**
 * AlertDialog 组件样式 - Cyberpunk (Critical Alert)
 */
export const alertDialogConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      
      // Red warning scanlines
      'after:fixed after:inset-0 after:pointer-events-none after:bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px)] after:bg-[length:100%_4px]',
    ],
    
    content: [
      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
      
      'bg-black border-destructive', // Critical Red Border
      'shadow-[0_0_50px_rgba(255,0,0,0.4)]', // Red Glow
      
      // Cut corners
      '[clip-path:polygon(20px_0,100%_0,100%_calc(100%_-_20px),calc(100%_-_20px)_100%,0_100%,0_20px)]',
    ],
    
    header: [
      'flex flex-col space-y-2 text-center sm:text-left',
    ],
    
    footer: [
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    ],
    
    title: [
      'text-lg font-semibold',
      'text-destructive font-mono uppercase tracking-widest animate-pulse',
      'before:content-["WARNING:_"]',
    ],
    
    description: [
      'text-sm text-muted-foreground font-mono',
    ],
    
    action: [], // Uses button styles
    cancel: [], // Uses button styles
  },
};