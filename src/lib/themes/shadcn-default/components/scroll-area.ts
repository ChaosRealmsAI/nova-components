/**
 * ScrollArea - Shadcn Default 主题
 */
export const scrollAreaConfig = {
  slots: {
    base: 'h-64 w-full rounded-md border border-border',
    viewport: 'rounded-[inherit]',
    content: 'p-4 space-y-2',
    header: 'text-xs text-muted-foreground mb-4 border-b border-border pb-2',
    item: 'flex items-center gap-3 py-2 px-3 rounded bg-muted/50 transition-all',
    itemIndex: 'text-xs text-muted-foreground/50',
    itemText: 'text-sm text-muted-foreground',
  },
  variants: {
    variant: {
      default: {
        base: [],
        viewport: [],
        content: [],
        header: [],
        item: [],
        itemIndex: [],
        itemText: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};

export const scrollBarConfig = {
  slots: {
    base: 'flex touch-none select-none transition-colors p-px',
    thumb: 'relative flex-1 rounded-full bg-border',
  },
  variants: {
    orientation: {
      vertical: {
        base: 'h-full w-2.5 border-l border-l-transparent',
      },
      horizontal: {
        base: 'h-2.5 flex-col border-t border-t-transparent',
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
};
