/**
 * Label 组件样式 - Glassmorphism
 *
 * Design Concept: "Clean Glass Label"
 */
export const labelConfig = {
  slots: {
    base: [
      // Typography
      'font-medium',
      'text-[length:var(--text-sm)]',

      // Spacing
      'gap-2',

      // Peer disabled styling
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
    ].join(' '),
  },
  variants: {
    variant: {
      default: {
        base: 'text-foreground',
      },
      muted: {
        base: 'text-muted-foreground',
      },
      error: {
        base: 'text-destructive',
      },
    },
    size: {
      default: {
        base: 'text-[length:var(--text-sm)]',
      },
      sm: {
        base: 'text-[length:var(--text-xs)]',
      },
      lg: {
        base: 'text-[length:var(--text-base)]',
      },
    },
  },
};
