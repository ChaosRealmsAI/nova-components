/**
 * Obsidian Shard Menubar
 */
export const menubarConfig = {
  slots: {
    root: [
      "flex h-10 items-center space-x-1 rounded-none border border-border bg-background p-1",
    ],
    trigger: [
      "flex cursor-default select-none items-center rounded-none px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
      "uppercase tracking-wider",
    ],
    content: [
      "z-50 min-w-[12rem] overflow-hidden rounded-none border border-border bg-surface-2 p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
    item: [
      "relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none focus:bg-primary/20 focus:text-primary data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
    label: "px-2 py-1.5 text-sm font-semibold text-muted-foreground uppercase tracking-wider",
    separator: "-mx-1 my-1 h-px bg-border",
    shortcut: "ml-auto text-xs tracking-widest opacity-60",
    checkboxItem: "relative flex cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    radioItem: "relative flex cursor-default select-none items-center rounded-none py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    indicator: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    subTrigger: "flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
    subContent: [
      "z-50 min-w-[8rem] overflow-hidden rounded-none border border-border bg-surface-2 p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    ],
  },
};