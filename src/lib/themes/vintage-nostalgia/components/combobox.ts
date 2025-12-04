/**
 * Combobox 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const comboboxConfig = {
  slots: {
    trigger: [
      'flex h-10 w-full items-center justify-between',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-background px-3 py-2',
      'font-serif text-sm',
      'shadow-[inset_0_2px_4px_rgba(44,24,16,0.12)]',
      'transition-all duration-200',
      'focus:border-primary focus:shadow-[inset_0_2px_4px_rgba(44,24,16,0.15),0_0_0_2px_rgba(139,69,19,0.15)] focus:outline-none',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    content: [
      'relative z-50 min-w-[8rem] overflow-hidden',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-surface-1',
      'text-foreground',
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.1),4px_4px_0_0_rgba(44,24,16,0.2)]',
    ],
    command: '',
    inputWrapper: '',
    input: [
      'flex h-11 w-full',
      'bg-transparent px-3 py-3',
      'font-mono text-sm',
      'outline-none',
      'placeholder:text-muted-foreground',
      'disabled:cursor-not-allowed disabled:opacity-50',
    ],
    list: 'max-h-[300px] overflow-y-auto overflow-x-hidden p-1',
    empty: 'py-6 text-center font-serif text-sm text-muted-foreground',
    group: '',
    item: [
      'relative flex cursor-pointer select-none items-center',
      'rounded-[1px] px-2 py-1.5',
      'font-serif text-sm',
      'outline-none',
      'transition-colors duration-150',
      'aria-selected:bg-surface-2 aria-selected:text-foreground',
      'data-[selected=true]:bg-surface-2',
    ],
    searchIcon: '',
    icon: '',
  },
};
