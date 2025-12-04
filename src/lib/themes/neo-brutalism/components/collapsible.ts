/**
 * Collapsible Component Styles
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * ⭐ Core: Slot-level theme customization
 * ═══════════════════════════════════════════════════════════════════════════════
 */

/**
 * Collapsible Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Collapsible Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (2px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const collapsibleConfig = {
  slots: {
    base: [
      'w-full',
    ],

    trigger: [
      'flex w-full items-center justify-between',
      'rounded-none',
      'px-4 py-3',
      'font-bold uppercase tracking-wide',
      'text-sm text-foreground',
      'transition-all duration-75',
      'hover:bg-accent hover:text-accent-foreground',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
    ],

    content: [
      'overflow-hidden',
      'text-sm text-foreground',
      'transition-all duration-75',
      'data-[state=closed]:animate-collapsible-up',
      'data-[state=open]:animate-collapsible-down',
    ],
  },

  variants: {
    variant: {
      default: {},

      bordered: {
        base: [
          'border-2 border-black',
          'rounded-none',
          'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
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
          'hover:bg-accent',
          'rounded-none',
          'px-2',
          'py-1',
        ],
      },
    },
  },
};
