/**
 * Breadcrumb Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Breadcrumb"
 * - Typography: Monospace, uppercase
 * - Separator: Neon color
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const breadcrumbConfig = {
  slots: {
    root: [
      '',
    ],

    list: [
      'flex flex-wrap items-center gap-1.5',
      'text-sm break-words sm:gap-2.5',
      'text-muted-foreground',
      'font-mono font-bold uppercase tracking-tight',
    ],

    item: [
      'inline-flex items-center gap-1.5',
    ],

    link: [
      'hover:text-foreground hover:shadow-[0_0_5px_var(--primary)]',
      'transition-all duration-150',
      'font-mono font-bold uppercase',
    ],

    page: [
      'text-foreground',
      'font-mono font-bold uppercase tracking-tight',
    ],

    separator: [
      '[&>svg]:size-3.5',
      'text-primary',
    ],

    ellipsis: [
      'flex size-9 items-center justify-center',
      'rounded-[2px] border-2 border-primary',
      'bg-surface-1',
      'shadow-[0_0_10px_var(--primary)]',
    ],
  },

  variants: {
    variant: {
      default: {
        root: '',
        list: '',
        item: '',
        link: '',
      },
    },
  },
};
