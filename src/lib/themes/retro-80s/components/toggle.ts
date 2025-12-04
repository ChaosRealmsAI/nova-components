/**
 * Toggle Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Toggle Button"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon
 * - Shadow: Neon glow when active
 * - Typography: Monospace, uppercase
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const toggleConfig = {
  slots: {
    base: [
      'inline-flex items-center justify-center',
      'rounded-[2px]',
      'border-2 border-primary',
      'bg-surface-1',
      'text-sm font-mono font-bold uppercase tracking-tight',
      'text-foreground',
      'shadow-[0_0_10px_var(--primary)]',
      'transition-all duration-150',
      'hover:bg-surface-2 hover:shadow-[0_0_15px_var(--primary)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
      'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground',
      'data-[state=on]:shadow-[0_0_20px_var(--primary)]',
      'active:scale-95',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [],
      },
      outline: {
        base: [
          'bg-transparent',
          'shadow-none',
          'data-[state=on]:shadow-[0_0_20px_var(--primary)]',
        ],
      },
    },
    size: {
      default: {
        base: ['h-9 px-3'],
      },
      sm: {
        base: ['h-8 px-2 text-xs'],
      },
      lg: {
        base: ['h-10 px-4 text-base'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
