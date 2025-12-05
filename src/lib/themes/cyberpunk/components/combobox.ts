/**
 * Combobox 组件样式 - Cyberpunk (Searchable Select)
 *
 * Design Concept: "Data Query Interface"
 * - Sharp corners, neon glow
 * - Monospace technical typography
 */
export const comboboxConfig = {
  slots: {
    trigger: [
      'flex h-10 w-full items-center justify-between rounded-none border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'bg-black text-primary font-mono',
      'border-primary/30',
      'hover:border-primary hover:shadow-[0_0_10px_rgba(0,229,255,0.2)]',
    ],

    content: [
      'relative z-50 min-w-[8rem] overflow-hidden rounded-none border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95',
      'bg-black/95 border-primary/50',
      'shadow-[0_0_20px_rgba(0,229,255,0.2)]',
    ],

    command: [
      'flex h-full w-full flex-col overflow-hidden rounded-none bg-popover text-popover-foreground',
    ],

    inputWrapper: [
      'flex items-center border-b px-3',
      'border-primary/30',
    ],

    input: [
      'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
      'font-mono',
    ],

    list: [
      'max-h-[300px] overflow-y-auto overflow-x-hidden',
    ],

    empty: [
      'py-6 text-center text-sm',
      'text-muted-foreground font-mono',
    ],

    group: [
      'overflow-hidden p-1 text-foreground',
    ],

    item: [
      'relative flex cursor-default select-none items-center rounded-none px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      'font-mono text-xs',
      'aria-selected:bg-primary/20 aria-selected:text-primary',
      'data-[highlighted]:bg-primary/20 data-[highlighted]:text-primary',
    ],

    searchIcon: [
      'mr-2 h-4 w-4 shrink-0 opacity-50',
      'text-primary',
    ],

    icon: [
      'ml-auto h-4 w-4 shrink-0 opacity-50',
      'text-primary',
    ],

    separator: [
      '-mx-1 my-1 h-px bg-border',
      'bg-primary/20',
    ],
  },
  variants: {
    variant: {
      default: {
        trigger: [],
        content: [],
        command: [],
        inputWrapper: [],
        input: [],
        list: [],
        empty: [],
        group: [],
        item: [],
        searchIcon: [],
        icon: [],
        separator: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
