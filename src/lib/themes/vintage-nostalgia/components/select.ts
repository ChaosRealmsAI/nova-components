/**
 * Select 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const selectConfig = {
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
    viewport: 'p-1',
    item: [
      'relative flex w-full cursor-pointer select-none items-center',
      'rounded-[1px] py-1.5 pl-8 pr-2',
      'font-serif text-sm',
      'outline-none',
      'transition-colors duration-150',
      'focus:bg-surface-2 focus:text-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    label: 'py-1.5 pl-8 pr-2 font-serif text-sm font-bold text-foreground',
    separator: '-mx-1 my-1 h-[2px] bg-border',
    indicator: '',
    scrollButton: '',
    icon: '',
  },
  variants: {
    variant: {
      default: {},
    },
    size: {
      default: {},
      sm: {},
    },
  },
};
