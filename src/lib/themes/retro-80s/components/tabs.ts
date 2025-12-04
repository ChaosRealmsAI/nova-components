/**
 * Tabs Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Tab Interface"
 * - Shape: Small radius (4px)
 * - Border: 2px solid neon
 * - Active tab: Neon glow effect
 * - Typography: Monospace, uppercase
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const tabsConfig = {
  slots: {
    root: [
      'flex flex-col gap-2',
    ],
    list: [
      'inline-flex h-9 w-fit items-center justify-center',
      'rounded-[4px] bg-surface-1 border-2 border-primary',
      'p-1 gap-1',
      'shadow-[0_0_20px_var(--primary)]',
    ],
    trigger: [
      'inline-flex items-center justify-center',
      'whitespace-nowrap',
      'rounded-[2px] px-3 py-1',
      'text-sm font-mono font-bold uppercase tracking-tight',
      'ring-offset-background',
      'transition-all duration-150',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
      'data-[state=active]:border-2 data-[state=active]:border-primary',
      'data-[state=active]:shadow-[0_0_20px_var(--primary)]',
      'data-[state=inactive]:text-muted-foreground',
    ],
    content: [
      'mt-2',
      'ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
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
          'rounded-none bg-transparent p-0 border-b-2 border-primary h-auto',
          'shadow-none',
        ],
        trigger: [
          'rounded-none border-b-2 border-transparent',
          'px-4 py-2 bg-transparent shadow-none',
          'data-[state=active]:bg-transparent',
          'data-[state=active]:shadow-[0_0_10px_var(--primary)]',
          'data-[state=active]:border-primary',
          'data-[state=active]:border-b-[3px]',
          'transition-all duration-150',
        ],
        content: '',
      },
    },
  },
};
