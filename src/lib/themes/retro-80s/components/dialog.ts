/**
 * Dialog Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Modal Window"
 * - Shape: Small radius (4px)
 * - Border: 3px solid neon (stronger than cards)
 * - Background: Dark surface (surface-3)
 * - Shadow: Strong neon glow
 * - Typography: Monospace, uppercase
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const dialogConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-black/80',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'fixed left-[50%] top-[50%] z-50 grid w-full',
      'translate-x-[-50%] translate-y-[-50%]',
      'gap-4 bg-surface-3 p-6',
      'rounded-[4px] border-[3px] border-primary',
      'shadow-[0_0_40px_var(--primary)]',
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
      'text-lg font-bold uppercase tracking-tight',
      'font-mono',
      'leading-none text-foreground',
    ],
    description: [
      'text-sm text-muted-foreground',
      'font-mono',
    ],
    footer: [
      'flex flex-col-reverse gap-2',
      'sm:flex-row sm:justify-end',
    ],
    close: [
      'absolute right-4 top-4',
      'rounded-[2px] opacity-70',
      'ring-offset-background transition-all duration-150',
      'hover:opacity-100 hover:bg-primary hover:text-primary-foreground',
      'hover:shadow-[0_0_20px_var(--primary)]',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
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
