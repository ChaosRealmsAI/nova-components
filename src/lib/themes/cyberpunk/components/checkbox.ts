/**
 * Checkbox 组件样式 - Cyberpunk (Digital Check)
 */
export const checkboxConfig = {
  slots: {
    base: [ // Changed from root to base
      'peer h-5 w-5 shrink-0 border-2 border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'rounded-none', // Sharp
      
      // Unchecked state: Hollow with primary border
      'bg-transparent',
      
      // Checked state
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'data-[state=checked]:shadow-[0_0_8px_rgba(0,229,255,0.5)]', // Glow
    ],
    
    indicator: [
      'flex items-center justify-center text-current',
    ],
  },
};
