/**
 * Sheet 组件样式 - Cyberpunk (Side Panel)
 * 
 * Design Concept: "Info Drawer"
 * - Animation: Slide in.
 * - Border: Tech border on the open side.
 * - Backdrop: Scanlines.
 */
export const sheetConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      
      // Scanline overlay
      'after:fixed after:inset-0 after:pointer-events-none',
      'after:bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.4)_50%)] after:bg-[length:100%_4px]',
    ],
    
    content: [
      'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
      'bg-[#050505] border-primary/50',
      'shadow-[0_0_30px_rgba(0,229,255,0.2)]',
      
      // Tech border accents via pseudo elements
      'before:absolute before:top-0 before:bottom-0 before:w-[2px] before:bg-primary',
    ],
    
    header: [
      'flex flex-col space-y-2 text-center sm:text-left',
      'border-b border-border/50 pb-4',
    ],
    
    footer: [
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      'pt-4 border-t border-border/50',
    ],
    
    title: [
      'text-lg font-bold text-foreground',
      'font-mono uppercase tracking-widest text-primary',
    ],
    
    description: [
      'text-sm text-muted-foreground',
      'font-mono',
    ],
    
    close: [
      'absolute right-4 top-4 rounded-none opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
      'hover:text-primary hover:bg-primary/10',
    ],
  },

  variants: {
    side: {
      top: {
        content: ['inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top', 'before:left-0 before:right-0 before:top-auto before:bottom-0 before:h-[2px] before:w-full'],
      },
      bottom: {
        content: ['inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom', 'before:left-0 before:right-0 before:bottom-auto before:top-0 before:h-[2px] before:w-full'],
      },
      left: {
        content: ['inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm', 'before:left-auto before:right-0 before:h-full'],
      },
      right: {
        content: ['inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm', 'before:right-auto before:left-0 before:h-full'],
      },
    },
  },
};