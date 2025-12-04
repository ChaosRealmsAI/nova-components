/**
 * Slider 组件样式 - Cyberpunk (Energy Level)
 */
export const sliderConfig = {
  slots: {
    base: [ // Changed from root to base
      'relative flex w-full touch-none select-none items-center',
      'h-6', // Taller touch area
    ],
    
    track: [
      'relative h-2 w-full grow overflow-hidden rounded-none bg-secondary/20',
      'border border-border', // Framed track
    ],
    
    range: [
      'absolute h-full bg-primary',
      'shadow-[0_0_10px_rgba(0,229,255,0.5)]', // Glowing fill
    ],
    
    thumb: [
      'block h-5 w-5 rounded-none border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      'rotate-45', // Diamond shape thumb
      'scale-75', // Adjust visual size
      'shadow-[0_0_10px_rgba(0,229,255,0.8)]', // Strong glow
      
      // Hover effect
      'hover:bg-primary hover:scale-90',
    ],
  },
};
