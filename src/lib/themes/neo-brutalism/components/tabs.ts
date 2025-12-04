/**
 * Tabs Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Tab Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black for active tab.
 * - Shadow: Hard black shadow for active tab.
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const tabsConfig = {
  slots: {
    root: [
      'flex flex-col gap-2',
    ],
    list: [
      'inline-flex h-9 w-fit items-center justify-center',
      'rounded-none bg-white border-2 border-black',
      'p-1 gap-1',
      'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
    ],
    trigger: [
      'inline-flex items-center justify-center',
      'whitespace-nowrap',
      'rounded-none px-3 py-1',
      'text-sm font-bold uppercase tracking-wide',
      'ring-offset-background',
      'transition-all duration-75',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
      'data-[state=active]:border-2 data-[state=active]:border-black',
      'data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      'data-[state=inactive]:text-muted-foreground',
    ],
    content: [
      'mt-2',
      'ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2',
    ],
  },
  variants: {
    variant: {
      default: {
        root: '',
        list: '',
        trigger: '',
        content: '',
      },
      underline: {
        root: '',
        list: [
          'w-full justify-start',
          'rounded-none bg-transparent p-0 border-b-2 border-black h-auto',
          'shadow-none',
        ],
        trigger: [
          'rounded-none border-b-2 border-transparent',
          'px-4 py-2 bg-transparent shadow-none',
          'data-[state=active]:bg-transparent',
          'data-[state=active]:shadow-none',
          'data-[state=active]:border-black',
          'data-[state=active]:border-b-[4px]',
          'transition-none',
        ],
        content: '',
      },
    },
  },
};