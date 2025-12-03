/**
 * ScrollArea Base Config - ADR-001 标准 Tailwind 类
 */
export const scrollAreaBaseConfig = {
  slots: {
    base: 'relative overflow-hidden h-64 w-full rounded-md border border-border',
    viewport: 'size-full rounded-[inherit]',
    // 默认内容 slots
    content: 'p-4 space-y-2',
    header: 'text-xs text-muted-foreground mb-4 border-b border-border pb-2',
    item: 'flex items-center gap-3 py-2 px-3 rounded bg-muted/50 transition-all',
    itemIndex: 'text-xs text-muted-foreground/50',
    itemText: 'text-sm text-muted-foreground',
  },
  variants: {},
  defaultVariants: {},
} as const;

export const scrollBarBaseConfig = {
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
} as const;
