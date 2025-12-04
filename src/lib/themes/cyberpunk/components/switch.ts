/**
 * Switch 组件样式 - Cyberpunk (Mechanical Toggle)
 */
export const switchConfig = {
  slots: {
    base: [ // Changed from root to base
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-none border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
      
      // Track Styling
      'border-muted bg-muted', // Default OFF
      'data-[state=checked]:bg-primary data-[state=checked]:border-primary', // ON state
      
      // Glow effect when ON
      'data-[state=checked]:shadow-[0_0_10px_rgba(0,229,255,0.5)]',
    ],
    
    thumb: [
      'pointer-events-none block h-4 w-4 rounded-none bg-background shadow-lg ring-0 transition-transform',
      'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
      
      // Thumb shape details - "Grip" lines
      'relative',
      'after:absolute after:left-[25%] after:top-[20%] after:bottom-[20%] after:w-[2px] after:bg-muted-foreground/50',
      'before:absolute before:right-[25%] before:top-[20%] before:bottom-[20%] before:w-[2px] before:bg-muted-foreground/50',
    ],
  },
};
