/**
 * Collapsible Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Collapsible"
 * - Shape: Small radius (2px)
 * - Border: 2px solid neon (when bordered)
 * - Shadow: Neon glow
 * - Typography: Monospace, uppercase
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const collapsibleConfig = {
  slots: {
    base: [
      'w-full',
    ],

    trigger: [
      'flex w-full items-center justify-between',
      'rounded-[2px]',
      'px-4 py-3',
      'font-mono font-bold uppercase tracking-tight',
      'text-sm text-foreground',
      'transition-all duration-150',
      'hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_10px_var(--primary)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    ],

    content: [
      'overflow-hidden',
      'text-sm text-foreground font-mono',
      'transition-all duration-150',
      'data-[state=closed]:animate-collapsible-up',
      'data-[state=open]:animate-collapsible-down',
    ],
  },

  variants: {
    variant: {
      default: {},

      bordered: {
        base: [
          'border-2 border-primary',
          'rounded-[2px]',
          'shadow-[0_0_10px_var(--primary)]',
        ],
        trigger: [
          'px-4',
          'py-3',
        ],
        content: [
          'px-4',
          'pb-4',
        ],
      },

      ghost: {
        trigger: [
          'hover:bg-surface-1',
          'rounded-[2px]',
          'px-2',
          'py-1',
        ],
      },
    },
  },
};
