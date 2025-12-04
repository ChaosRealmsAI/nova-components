/**
 * Alert 组件样式 - Cyberpunk (System Notification)
 */
export const alertConfig = {
  slots: {
    base: [ // Changed from root to base
      'relative w-full rounded-none border p-4',
      '[clip-path:polygon(10px_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%,0_10px)]',
      
      // Icon positioning
      '[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground',
      '[&>svg~*]:pl-7',
    ],
    
    icon: [], // Added missing slot

    title: [
      'mb-1 font-bold leading-none tracking-tight uppercase font-mono',
    ],

    description: [
      'text-sm [&_p]:leading-relaxed font-mono opacity-90',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [ // Changed root to base
          'bg-background text-foreground',
          'border-primary/50',
          'shadow-[inset_0_0_20px_rgba(0,229,255,0.1)]',
          '[&>svg]:text-primary',
        ],
      },
      destructive: {
        base: [ // Changed root to base
          'border-destructive/50 text-destructive dark:border-destructive',
          'bg-destructive/10',
          'shadow-[inset_0_0_20px_rgba(255,42,42,0.2)]',
          '[&>svg]:text-destructive',
          // Glitch animation
          'animate-pulse',
        ],
      },
    },
  },
};
