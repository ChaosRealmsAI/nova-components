/**
 * Obsidian Shard Select
 */
export const selectConfig = {
  slots: {
    trigger: [
      "flex h-10 w-full items-center justify-between rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      "hover:border-primary/50", // Hover effect
    ],
    content: [
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-none border border-border bg-surface-2 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "border-r-2 border-r-primary/30", // Side accent
    ],
    viewport: "p-1",
    item: [
      "relative flex w-full cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-primary/20 focus:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "hover:pl-9 transition-[padding]",
    ],
    label: "py-1.5 pl-8 pr-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground",
    separator: "-mx-1 my-1 h-px bg-border",
    indicator: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    scrollButton: "flex cursor-default items-center justify-center py-1",
    icon: "h-4 w-4 opacity-50",
  },
  variants: {
    variant: {
      default: {},
    },
    size: {
      default: {},
      sm: {},
    },
  },
};