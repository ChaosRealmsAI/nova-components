export const inputConfig = {
  slots: {
    base: 'h-9 rounded-md border border-border bg-transparent px-3 py-1 text-[length:var(--text-sm)] text-foreground shadow-sm transition-colors file:text-[length:var(--text-sm)] file:font-medium placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring',
  },
  variants: {
    variant: {
      default: { base: '' },
      filled: { base: 'bg-surface-1 border-transparent' },
    },
    inputSize: {
      default: { base: 'h-9' },
      sm: { base: 'h-8 text-[length:var(--text-xs)]' },
      lg: { base: 'h-10' },
    },
  },
  defaultVariants: {
    variant: 'default',
    inputSize: 'default',
  },
};
