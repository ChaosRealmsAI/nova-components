/**
 * Accordion Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Collapsible Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (2px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const accordionConfig = {
  slots: {
    root: [
      'w-full',
    ],
    item: [
      'border-b-2 border-black',
    ],
    header: [
      'flex',
    ],
    trigger: [
      'flex flex-1 items-center justify-between',
      'py-4 px-4',
      'rounded-none',
      'font-bold uppercase tracking-wide',
      'text-sm text-foreground',
      'transition-all duration-75',
      'hover:bg-accent hover:text-accent-foreground',
      '[&[data-state=open]>svg]:rotate-180',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
    ],
    chevron: [
      'h-4 w-4 shrink-0',
      'text-foreground',
      'transition-transform duration-75',
    ],
    content: [
      'overflow-hidden',
      'text-sm text-foreground',
      'transition-all duration-75',
      'data-[state=closed]:animate-accordion-up',
      'data-[state=open]:animate-accordion-down',
    ],
    contentInner: [
      'pb-4 pt-0 px-4',
    ],
  },
  variants: {
    variant: {
      default: {
        root: '',
        item: '',
        trigger: '',
        content: '',
      },
      bordered: {
        root: [
          'border-2 border-black rounded-none',
          'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
        ],
        item: [
          'border-b-2 border-black last:border-b-0 px-4',
        ],
        trigger: '',
        content: '',
      },
    },
  },
};