/**
 * Sheet Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Sheet Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (4px).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const sheetConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-black/50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'fixed z-50',
      'bg-white p-6',
      'border-2 border-black',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'duration-200',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    close: [
      'absolute right-4 top-4',
      'rounded-none opacity-70',
      'ring-offset-background transition-opacity duration-75',
      'hover:opacity-100 hover:bg-accent',
      'focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2',
      'disabled:pointer-events-none',
      'text-foreground',
    ],
    header: [
      'space-y-2',
      'text-center sm:text-left',
    ],
    footer: [
      'flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    ],
    title: [
      'text-lg font-bold uppercase tracking-wide',
      'text-foreground',
    ],
    description: [
      'text-sm text-muted-foreground',
    ],
  },
  variants: {
    side: {
      right: {
        content: [
          'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
        ],
      },
      left: {
        content: [
          'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
        ],
      },
      top: {
        content: [
          'inset-x-0 top-0 border-b',
        ],
      },
      bottom: {
        content: [
          'inset-x-0 bottom-0 border-t',
        ],
      },
    },
  },
};