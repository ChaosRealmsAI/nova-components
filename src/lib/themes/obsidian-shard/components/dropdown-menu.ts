/**
 * Obsidian Shard DropdownMenu
 */
export const dropdownMenuConfig = {
  slots: {
    content: [
      "z-50 min-w-[8rem] overflow-hidden rounded-none border border-border bg-surface-2 p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "border-r-2 border-r-primary/30", // Subtle accent
    ],
    item: [
      "relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none transition-colors focus:bg-primary/20 focus:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "hover:border-l-2 hover:border-l-primary hover:pl-[calc(0.5rem-2px)]", // Indent effect on hover
    ],
    label: "px-2 py-1.5 text-sm font-semibold text-muted-foreground uppercase tracking-wider",
    separator: "-mx-1 my-1 h-px bg-border",
    shortcut: "ml-auto text-xs tracking-widest opacity-60",
  },
};