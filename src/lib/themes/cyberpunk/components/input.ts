/**
 * Input 组件样式 - Cyberpunk (Upgraded)
 * 
 * Design Concept: "Terminal Entry"
 * - High contrast black background.
 * - Strong bottom border.
 * - Glowing focus state.
 */
export const inputConfig = {
  slots: {
    base: [
      // Layout
      'flex h-11 w-full',
      
      // Visuals
      'bg-black/80 border-b-2 border-input border-t-0 border-x-0', // Bottom border only initially
      'rounded-none', 
      
      // Text
      'px-4 py-2',
      'text-sm font-mono text-primary', // Input text matches primary color
      'placeholder:text-muted-foreground/50 placeholder:font-sans', // Distinct placeholder
      'caret-primary', // Colored cursor
      
      // Transitions
      'transition-all duration-200',
      
      // Focus State
      'focus-visible:outline-none',
      'focus-visible:border-primary',
      'focus-visible:bg-surface-1', // Light up bg on focus
      'focus-visible:shadow-[0_10px_20px_-10px_rgba(0,229,255,0.3)]', // Glow downwards
      
      // Hover
      'hover:border-primary/50',
      
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
    ],
  },
};
