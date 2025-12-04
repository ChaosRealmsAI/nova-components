/**
 * Obsidian Shard ScrollArea
 */
export const scrollAreaConfig = {
  slots: {
    // 纯视觉层（功能层由组件提供）
    base: "h-64 w-full border border-border bg-surface-1",
    viewport: "rounded-[inherit]",  // 功能层由组件提供
    content: "p-4",
    header: "bg-muted/50 p-2 text-xs font-bold uppercase tracking-wider text-muted-foreground",
    item: "mb-2 rounded-none border border-transparent p-2 hover:border-primary/50 hover:bg-surface-2",
    itemIndex: "mr-2 text-xs font-mono text-muted-foreground",
    itemText: "text-sm text-foreground",
  },
};

export const scrollBarConfig = {
  slots: {
    // 纯视觉层（功能层由组件提供）
    base: "bg-transparent p-[1px]",
    thumb: "rounded-none bg-border hover:bg-primary/50",
  },
  variants: {
    orientation: {
      vertical: {
        base: "h-full w-2.5 border-l border-l-transparent",
      },
      horizontal: {
        base: "h-2.5 flex-col border-t border-t-transparent",
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
};
