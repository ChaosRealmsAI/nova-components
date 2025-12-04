/**
 * Badge 组件样式 - Cyberpunk (Upgraded)
 */
export const badgeConfig = {
  slots: {
    base: [
      'inline-flex items-center rounded-none border px-2 py-0.5 text-xs font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'uppercase tracking-widest font-mono',
      // Tech corners
      '[clip-path:polygon(4px_0,100%_0,100%_calc(100%_-_4px),calc(100%_-_4px)_100%,0_100%,0_4px)]',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          'border-transparent bg-primary/10 text-primary border border-primary', // Hollow look
          'shadow-[0_0_10px_rgba(0,229,255,0.3)]',
          'hover:bg-primary hover:text-primary-foreground',
        ],
      },

      secondary: {
        base: [
          'border-transparent bg-secondary/10 text-secondary border border-secondary',
          'hover:bg-secondary hover:text-secondary-foreground',
        ],
      },

      destructive: {
        base: [
          'border-transparent bg-destructive/10 text-destructive border border-destructive',
          'hover:bg-destructive hover:text-destructive-foreground',
          'animate-pulse', // Warning pulse
        ],
      },

      outline: {
        base: [
          'text-foreground border-border',
          'hover:border-primary hover:text-primary',
        ],
      },
    },
  },
};
