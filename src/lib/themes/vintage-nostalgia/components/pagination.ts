/**
 * Pagination 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const paginationConfig = {
  slots: {
    root: 'mx-auto flex w-full justify-center',
    content: 'flex flex-row items-center gap-1',
    item: '',
    link: [
      'inline-flex h-9 min-w-[2.25rem] items-center justify-center',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-surface-1 px-3',
      'font-serif text-sm font-medium',
      'shadow-[2px_2px_0_0_rgba(44,24,16,0.15)]',
      'transition-all duration-150',
      'hover:bg-surface-2',
      'active:translate-y-[1px]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
      'aria-[current=page]:bg-primary aria-[current=page]:text-primary-foreground aria-[current=page]:border-[#5C4033]',
    ],
    prev: '',
    next: '',
    ellipsis: 'flex h-9 w-9 items-center justify-center',
  },
};
