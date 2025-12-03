/**
 * Select Base Config
 *
 * Block 级别配置，定义选择器的布局和样式
 * 依赖的 Atoms: popover, button
 */
export const selectBaseConfig = {
  slots: {
    trigger:
      'flex w-fit items-center justify-between gap-2 rounded-md border border-input bg-transparent px-3 py-2 text-[length:var(--text-sm)] whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8',
    content:
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    viewport: 'p-1',
    item:
      'relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-[length:var(--text-sm)] outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4 [&_svg:not([class*="text-"])]:text-muted-foreground',
    label: 'px-2 py-1.5 text-[length:var(--text-xs)] text-muted-foreground',
    separator: 'bg-border -mx-1 my-1 h-px pointer-events-none',
    indicator: 'absolute right-2 flex size-3.5 items-center justify-center',
    scrollButton: 'flex cursor-default items-center justify-center py-1',
    icon: 'size-4 opacity-50',
  },
  variants: {
    variant: {
      default: {
        trigger: '',
        content: '',
        item: '',
      },
    },
    size: {
      default: {
        trigger: 'h-9',
      },
      sm: {
        trigger: 'h-8 text-[length:var(--text-xs)]',
      },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
    size: 'default' as const,
  },
} as const;
