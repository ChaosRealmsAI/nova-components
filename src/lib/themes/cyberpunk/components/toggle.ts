/**
 * Toggle 组件样式 - Cyberpunk (State Switch)
 */
export const toggleConfig = {
  slots: {
    base: [ // Changed from root to base
      'inline-flex items-center justify-center rounded-none text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      'border border-primary/30 bg-black text-primary',
      'font-mono uppercase text-xs',
      
      // Hover
      'hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_10px_rgba(0,229,255,0.3)]',
      
      // On State
      'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
      'data-[state=on]:shadow-[0_0_15px_rgba(0,229,255,0.5)]',
    ],
  },

  variants: {
    variant: {
      default: {
        base: ['bg-transparent'], // changed root to base here too if variant uses it. Wait, variants usually override the base slot if structured that way. 
        // Actually variants in this system often target specific slots. 
        // Let's assume standard shadcn variants structure:
        // variant: { default: { base: [...] } }
      },
      outline: {
        base: ['border border-input hover:bg-accent hover:text-accent-foreground'],
      },
    },
    size: {
      default: {
        base: ['h-10 px-3'],
      },
      sm: {
        base: ['h-9 px-2.5'],
      },
      lg: {
        base: ['h-11 px-5'],
      },
    },
  },
};
