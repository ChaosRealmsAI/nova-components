/**
 * Progress 组件样式 - Cyberpunk (Loading Bar)
 */
export const progressConfig = {
  slots: {
    base: [ // Changed from root to base
      'relative h-4 w-full overflow-hidden rounded-none bg-secondary/20',
      'border border-border',
    ],
    
    indicator: [
      'h-full w-full flex-1 bg-primary transition-all',
      // Striped pattern for the fill
      'bg-[linear-gradient(45deg,rgba(0,0,0,0.2)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2)_75%,transparent_75%,transparent)]',
      'bg-[length:1rem_1rem]',
      'shadow-[0_0_15px_rgba(0,229,255,0.4)]',
    ],
  },
};
