/**
 * Command 组件样式 - Cyberpunk (Command Palette)
 */
export const commandConfig = {
  slots: {
    root: [
      'flex h-full w-full flex-col overflow-hidden rounded-none bg-popover text-popover-foreground',
      'bg-black border border-primary/30',
      'shadow-[0_0_30px_rgba(0,229,255,0.15)]',
    ],
    
    inputWrapper: [
      'flex items-center border-b px-3',
      'border-primary/20',
    ],
    
    input: [
      'flex h-11 w-full rounded-none bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
      'font-mono text-primary caret-primary',
    ],
    
    list: [
      'max-h-[300px] overflow-y-auto overflow-x-hidden',
    ],
    
    empty: [
      'py-6 text-center text-sm',
      'font-mono text-muted-foreground',
    ],
    
    group: [
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      '[&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-primary/70',
    ],
    
    separator: [
      '-mx-1 h-px bg-border',
      'bg-primary/20',
    ],
    
    item: [
      'relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'font-mono text-xs',
      'aria-selected:bg-primary/20 aria-selected:text-primary aria-selected:shadow-[inset_2px_0_0_0_var(--primary)]',
    ],
    
    shortcut: [
      'ml-auto text-xs tracking-widest text-muted-foreground',
      'font-mono text-primary/50',
    ],
  },
};
