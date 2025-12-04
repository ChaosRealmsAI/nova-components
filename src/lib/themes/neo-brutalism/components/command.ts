export const commandConfig = {
  slots: {
    root: 'flex h-full w-full flex-col overflow-hidden rounded-md bg-background text-foreground border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    inputWrapper: 'flex items-center border-b-2 border-black px-3',
    input: 'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
    empty: 'py-6 text-center text-sm',
    group: 'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
    separator: '-mx-1 h-px bg-border',
    item: 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    shortcut: 'ml-auto text-xs tracking-widest text-muted-foreground',
  },
};
