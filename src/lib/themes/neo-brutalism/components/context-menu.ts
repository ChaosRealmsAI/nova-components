export const contextMenuConfig = {
  slots: {
    trigger: '', // ContextMenuTrigger usually has no style
    content: [
      'z-50 min-w-[8rem] overflow-hidden rounded-md border-2 border-black bg-background p-1 text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],
    item: [
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    checkboxItem: 'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    radioItem: 'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    label: 'px-2 py-1.5 text-sm font-semibold text-foreground',
    indicator: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    separator: '-mx-1 my-1 h-[2px] bg-black',
    shortcut: 'ml-auto text-xs tracking-widest opacity-60',
    subTrigger: 'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
    subContent: 'z-50 min-w-[8rem] overflow-hidden rounded-md border-2 border-black bg-background p-1 text-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
  },
};
