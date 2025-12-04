export const comboboxConfig = {
  slots: {
    trigger: [
      'flex h-10 w-full items-center justify-between rounded-md border-2 border-black bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
      'active:shadow-none active:translate-x-[4px] active:translate-y-[4px]',
    ],
    content: 'w-[200px] p-0 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    command: 'rounded-none border-none',
    inputWrapper: 'border-b border-black px-3',
    input: 'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden',
    empty: 'py-6 text-center text-sm',
    group: 'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
    item: 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    searchIcon: 'mr-2 h-4 w-4 shrink-0 opacity-50',
    icon: 'ml-auto h-4 w-4',
  },
};
