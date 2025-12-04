/**
 * Menubar 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const menubarConfig = {
  slots: {
    root: [
      'flex h-10 items-center space-x-1',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-surface-1 p-1',
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.1)]',
    ],
    trigger: [
      'flex cursor-pointer select-none items-center',
      'rounded-[1px] px-3 py-1.5',
      'font-serif text-sm font-medium',
      'outline-none',
      'transition-colors duration-150',
      'focus:bg-surface-2 focus:text-foreground',
      'data-[state=open]:bg-surface-2',
    ],
    content: [
      'z-50 min-w-[12rem] overflow-hidden',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-surface-1 p-1',
      'text-foreground',
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.1),4px_4px_0_0_rgba(44,24,16,0.2)]',
    ],
    item: [
      'relative flex cursor-pointer select-none items-center',
      'rounded-[1px] px-2 py-1.5',
      'font-serif text-sm',
      'outline-none',
      'focus:bg-surface-2',
    ],
    separator: '-mx-1 my-1 h-[2px] bg-border',
    label: 'px-2 py-1.5 font-serif text-xs font-bold uppercase tracking-wider text-muted-foreground',
    shortcut: 'ml-auto font-mono text-xs text-muted-foreground',
    checkboxItem: '',
    radioItem: '',
    indicator: '',
    subTrigger: '',
    subContent: [
      'z-50 min-w-[8rem] overflow-hidden',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-surface-1 p-1',
      'text-foreground',
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.1),4px_4px_0_0_rgba(44,24,16,0.2)]',
    ],
  },
};
