/**
 * Button 组件样式 - Glassmorphism
 *
 * Design Concept: "Frosted Glass Interface"
 * - Shape: Large rounded corners (pill-like)
 * - Visuals: Semi-transparent backgrounds with blur effect
 * - Animation: Smooth glow transitions on hover
 */
export const buttonConfig = {
  slots: {
    base: [
      // Layout
      'inline-flex items-center justify-center',
      'whitespace-nowrap',

      // Typography - clean, modern
      'text-sm font-medium',

      // Shape - large rounded corners (Glassmorphism signature)
      'rounded-xl',

      // Transition - smooth and elegant
      'transition-all duration-300 ease-out',

      // Focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-40',
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          // Glass background with blur
          'bg-primary/90 backdrop-blur-sm',
          'text-primary-foreground',

          // Subtle glass border
          'border border-white/20',

          // Soft shadow + glow
          'shadow-[0_4px_16px_rgba(139,92,246,0.3)]',

          // Hover: brighter glow
          'hover:bg-primary hover:shadow-[0_8px_24px_rgba(139,92,246,0.5)]',
          'hover:-translate-y-0.5',

          // Active
          'active:translate-y-0 active:shadow-[0_2px_8px_rgba(139,92,246,0.3)]',
        ],
      },

      destructive: {
        base: [
          'bg-destructive/90 backdrop-blur-sm',
          'text-destructive-foreground',
          'border border-white/20',
          'shadow-[0_4px_16px_rgba(239,68,68,0.3)]',
          'hover:bg-destructive hover:shadow-[0_8px_24px_rgba(239,68,68,0.5)]',
          'hover:-translate-y-0.5',
          'active:translate-y-0',
        ],
      },

      outline: {
        base: [
          // Glass effect with transparent background
          'bg-white/5 backdrop-blur-md',
          'text-foreground',

          // Prominent glass border
          'border border-white/20',

          // Subtle shadow
          'shadow-[0_2px_8px_rgba(0,0,0,0.1)]',

          // Hover: fill with glass
          'hover:bg-white/10 hover:border-white/30',
          'hover:shadow-[0_4px_16px_rgba(139,92,246,0.2)]',
        ],
      },

      secondary: {
        base: [
          'bg-secondary/80 backdrop-blur-sm',
          'text-secondary-foreground',
          'border border-white/20',
          'shadow-[0_4px_16px_rgba(6,182,212,0.3)]',
          'hover:bg-secondary/90 hover:shadow-[0_8px_24px_rgba(6,182,212,0.4)]',
          'hover:-translate-y-0.5',
          'active:translate-y-0',
        ],
      },

      ghost: {
        base: [
          'bg-transparent',
          'text-foreground',
          'border border-transparent',

          // Hover: glass effect appears
          'hover:bg-white/10 hover:backdrop-blur-sm',
          'hover:border-white/10',
        ],
      },

      link: {
        base: [
          'bg-transparent',
          'text-primary',
          'underline-offset-4',
          'hover:underline hover:text-primary-vivid',
          'border-none shadow-none',
        ],
      },
    },

    size: {
      default: { base: ['h-10 px-5 py-2'] },
      sm: { base: ['h-9 px-4 text-xs rounded-lg'] },
      lg: { base: ['h-12 px-8 text-base rounded-2xl'] },
      icon: { base: ['h-10 w-10 rounded-xl'] },
    },
  },
};
