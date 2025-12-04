/**
 * AlertDialog Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Alert Modal"
 * - Same as Dialog but with alert styling
 * - Stronger neon glow for destructive variant
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const alertDialogConfig = {
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
  },

  variants: {
    variant: {
      default: {},

      destructive: {
        content: [
          'border-destructive',
          'shadow-[0_0_40px_var(--destructive)]',
        ],
        title: [
          'text-destructive',
        ],
      },
    },
  },
};
