/**
 * Toggle Group Base Config
 *
 * Block component - depends on Toggle atom
 * ADR-003: Blocks only depend on Atoms (flat dependency)
 */
export const toggleGroupBaseConfig = {
  slots: {
    root: 'flex items-center gap-1 rounded-md',
    item: 'inline-flex items-center justify-center rounded-md text-[length:var(--text-sm)] font-medium text-foreground transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
  },
  variants: {
    variant: {
      default: {
        root: '',
        item: 'bg-transparent',
      },
      outline: {
        root: 'border border-border rounded-md p-1',
        item: 'border-0 shadow-none hover:bg-accent hover:text-accent-foreground',
      },
    },
    size: {
      default: {
        root: '',
        item: 'h-9 px-3',
      },
      sm: {
        root: '',
        item: 'h-8 px-2',
      },
      lg: {
        root: '',
        item: 'h-10 px-4',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
} as const;
