/**
 * Toggle 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Toggle Button"
 */
export const toggleConfig = {
  slots: {
    base: [
      // Shape
      'rounded-xl',

      // Typography
      'text-[length:var(--text-sm)] font-medium',

      // Transition
      'transition-all duration-200',

      // Default state
      'text-foreground',
      'bg-transparent',

      // Hover
      'hover:bg-white/[0.08] hover:text-foreground',

      // Focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-40',

      // Active/On state - glass highlight
      'data-[state=on]:bg-white/[0.12]',
      'data-[state=on]:text-primary',
      'data-[state=on]:border-white/[0.15]',
      'data-[state=on]:shadow-[0_0_12px_rgba(139,92,246,0.2)]',
    ],
  },
  variants: {
    variant: {
      default: { base: 'border border-transparent' },
      outline: {
        base: [
          'border border-white/[0.15]',
          'bg-white/[0.04] backdrop-blur-sm',
          'shadow-[0_2px_8px_rgba(0,0,0,0.1)]',
          'hover:bg-white/[0.08]',
          'data-[state=on]:bg-white/[0.12]',
          'data-[state=on]:border-primary/30',
        ].join(' '),
      },
    },
    size: {
      default: { base: 'h-10 px-4' },
      sm: { base: 'h-9 px-3 text-xs' },
      lg: { base: 'h-11 px-5' },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
