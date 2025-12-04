/**
 * Command 组件样式 - Shadcn Default Theme
 */
export const commandConfig = {
  slots: {
    root: 'rounded-md bg-popover text-popover-foreground',
    inputWrapper: 'flex h-11 items-center border-b px-3',
    input: 'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
    empty: 'py-6 text-center text-sm',
    group: 'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
    separator: '-mx-1 h-px bg-border',
    item: 'relative flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    shortcut: 'ml-auto text-xs tracking-widest text-muted-foreground',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
