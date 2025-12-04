export const kbdConfig = {
  slots: {
    base: 'pointer-events-none inline-flex items-center justify-center gap-1 rounded-sm px-1.5 font-mono text-[length:var(--text-xs)] font-medium select-none bg-muted text-muted-foreground border border-border shadow-sm',
  },
  variants: {
    variant: {
      default: { base: '' },
      outline: { base: 'bg-transparent border-2' },
    },
    size: {
      default: { base: 'h-5 min-w-5' },
      sm: { base: 'h-4 min-w-4 text-[10px] px-1' },
      lg: { base: 'h-6 min-w-6 text-[length:var(--text-sm)] px-2' },
    },
  },
};
