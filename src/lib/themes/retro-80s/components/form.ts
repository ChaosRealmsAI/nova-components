/**
 * Form Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Form"
 * - Typography: Monospace, uppercase labels
 * - Error messages: Destructive color with glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const formConfig = {
  slots: {
    root: [
      'space-y-4',
    ],

    item: [
      'space-y-2',
    ],

    label: [
      'text-foreground',
      'font-mono font-bold uppercase tracking-tight',
      'text-sm',
    ],

    control: [
      '',
    ],

    description: [
      'text-muted-foreground',
      'text-sm font-mono',
    ],

    message: [
      'text-destructive',
      'font-mono font-bold uppercase tracking-tight',
      'text-sm',
      'drop-shadow-[0_0_5px_var(--destructive)]',
    ],
  },

  variants: {
    variant: {
      default: {
        root: '',
        item: '',
        label: '',
        control: '',
        description: '',
        message: '',
      },

      inline: {
        root: '',
        item: '',
        label: 'min-w-[100px]',
        control: 'flex-1',
        description: '',
        message: '',
      },
    },

    size: {
      default: {
        root: '',
        item: '',
        label: 'text-[length:var(--text-sm)]',
        control: '',
        description: 'text-[length:var(--text-sm)]',
        message: 'text-[length:var(--text-sm)]',
      },

      sm: {
        root: '',
        item: '',
        label: 'text-[length:var(--text-xs)]',
        control: '',
        description: 'text-[length:var(--text-xs)]',
        message: 'text-[length:var(--text-xs)]',
      },

      lg: {
        root: '',
        item: '',
        label: 'text-[length:var(--text-base)]',
        control: '',
        description: 'text-[length:var(--text-base)]',
        message: 'text-[length:var(--text-base)]',
      },
    },
  },
};
