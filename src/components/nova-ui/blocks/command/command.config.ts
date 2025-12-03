/**
 * Command Base Config
 * Block 级别配置，依赖 Atoms: input
 */
export const commandBaseConfig = {
  slots: {
    root: 'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
    inputWrapper: 'flex h-9 items-center gap-2 border-b px-3',
    input: 'flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
    list: 'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto',
    empty: 'py-6 text-center text-sm',
    group: 'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
    separator: '-mx-1 h-px bg-border',
    item: 'relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4 [&_svg:not([class*="text-"])]:text-muted-foreground',
    shortcut: 'ml-auto text-xs tracking-widest text-muted-foreground',
  },
  variants: {
    variant: {
      default: {},
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
} as const;
