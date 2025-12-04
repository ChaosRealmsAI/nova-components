/**
 * Obsidian Shard Command
 */
export const commandConfig = {
  slots: {
    root: [
      "flex h-full w-full flex-col overflow-hidden rounded-none border border-border bg-surface-2 text-popover-foreground shadow-2xl",
      "shadow-[0_0_20px_rgba(0,0,0,0.7)]",
    ],
    inputWrapper: "flex items-center border-b px-3",
    input: "flex h-11 w-full rounded-none bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
    list: "max-h-[300px] overflow-y-auto overflow-x-hidden",
    empty: "py-6 text-center text-sm",
    group: "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
    separator: "-mx-1 h-px bg-border",
    item: [
      "relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50",
      "hover:border-l-2 hover:border-l-primary hover:pl-[calc(0.5rem-2px)]", // Consistent hover indent
    ],
    shortcut: "ml-auto text-xs tracking-widest text-muted-foreground opacity-60 font-mono",
  },
  variants: {
    variant: {
      default: {},
    },
  },
};