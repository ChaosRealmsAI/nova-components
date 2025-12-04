/**
 * Button 组件样式 - Cyberpunk (Upgraded)
 * 
 * Design Concept: "Cyberdeck Interface"
 * - Shape: Asymmetric chamfered corners (Top-Left + Bottom-Right).
 * - Visuals: Tech lines, augmented reality feel.
 * - Animation: Glitchy text shift on hover.
 */
export const buttonConfig = {
  slots: {
    base: [
      // Layout
      'inline-flex items-center justify-center',
      'whitespace-nowrap',
      
      // Typography
      'text-sm font-bold uppercase tracking-[0.15em] font-mono',
      
      // Base Shape & Transition
      'relative overflow-hidden',
      'transition-all duration-150 ease-out',
      
      // Focus
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2',
      
      // Disabled
      'disabled:pointer-events-none disabled:opacity-50 disabled:grayscale',
      
      // Tech Decoration (Pseudo-element for scanline/shine)
      'after:absolute after:inset-0 after:w-full after:h-full after:opacity-0 after:transition-opacity after:duration-300',
      'after:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)]',
      'after:translate-x-[-100%] hover:after:translate-x-[100%] hover:after:transition-transform hover:after:duration-1000',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          'bg-primary text-primary-foreground',
          'border-0', // Remove default border, rely on clip-path shape
          
          // Shape: Complex Clip Path (Angled cuts)
          '[clip-path:polygon(10px_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%,0_10px)]',
          
          // Hover Effects
          'hover:brightness-110',
          'hover:shadow-[0_0_20px_rgba(0,229,255,0.6)]', // Strong glow
          'hover:translate-y-[-1px]',
          
          // Active
          'active:translate-y-[1px] active:scale-[0.98]',
          
          // "Glitch" border simulation via box-shadow inside clip-path doesn't work well, 
          // so we rely on the outer glow.
        ],
      },

      destructive: {
        base: [
          'bg-destructive text-destructive-foreground',
          '[clip-path:polygon(10px_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%,0_10px)]',
          'hover:shadow-[0_0_20px_rgba(255,42,42,0.6)]',
          'hover:brightness-110',
        ],
      },

      outline: {
        base: [
          'bg-transparent text-primary',
          'border border-primary', // Visible border for outline
          
          // Double border effect using shadow
          'shadow-[inset_0_0_0_1px_rgba(0,0,0,0.8)]',
          
          // Shape matching
          '[clip-path:polygon(10px_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%,0_10px)]',
          
          'hover:bg-primary/10 hover:text-primary',
          'hover:shadow-[0_0_15px_rgba(0,229,255,0.4),inset_0_0_10px_rgba(0,229,255,0.2)]',
        ],
      },

      secondary: {
        base: [
          'bg-secondary text-secondary-foreground',
          '[clip-path:polygon(0_0,100%_0,100%_100%,10px_100%,0_calc(100%_-_10px))]', // Different cut (bottom-left)
          'hover:brightness-110 hover:shadow-[0_0_15px_rgba(214,0,255,0.5)]',
        ],
      },

      ghost: {
        base: [
          'text-foreground hover:text-primary',
          'hover:bg-primary/5',
          'border border-transparent hover:border-primary/30',
          // Simple cut corners for ghost
          '[clip-path:polygon(5px_0,100%_0,100%_calc(100%_-_5px),calc(100%_-_5px)_100%,0_100%,0_5px)]',
        ],
      },

      link: {
        base: [
          'text-primary underline-offset-4 hover:underline',
          'tracking-normal normal-case',
          'bg-transparent shadow-none border-none',
          '[clip-path:none]', // Reset clip path
          'after:hidden', // Remove shine
        ],
      },
    },
  },
};
