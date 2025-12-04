/**
 * Dialog Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Modal Block"
 * - Shape: Sharp corners (0px).
 * - Border: 2px solid black.
 * - Shadow: Hard black shadow (8px for elevated feel).
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const dialogConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-black/50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'fixed left-[50%] top-[50%] z-50 grid w-full',
      'translate-x-[-50%] translate-y-[-50%]',
      'gap-4 bg-white p-6',
      'rounded-none border-2 border-black',
      'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
      'duration-200',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ],
    header: [
      'flex flex-col gap-1.5',
      'text-center sm:text-left',
    ],
    title: [
      'text-lg font-bold uppercase tracking-wide',
      'leading-none text-foreground',
    ],
    description: [
      'text-sm text-muted-foreground',
    ],
    footer: [
      'flex flex-col-reverse gap-2',
      'sm:flex-row sm:justify-end',
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
  },
  variants: {
    size: {
      sm: { content: 'max-w-sm' },
      default: { content: 'max-w-lg' },
      lg: { content: 'max-w-2xl' },
      xl: { content: 'max-w-4xl' },
      full: { content: 'max-w-[calc(100%-2rem)]' },
    },
  },
};