/**
 * ToggleGroup 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const toggleGroupConfig = {
  slots: {
    root: 'inline-flex items-center justify-center rounded-[2px]',
    item: [
      'inline-flex items-center justify-center',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-transparent px-3',
      'font-serif text-sm font-medium',
      'shadow-[2px_2px_0_0_rgba(44,24,16,0.15)]',
      'transition-all duration-150',
      'hover:bg-surface-1',
      'active:translate-y-[1px]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[state=on]:bg-primary data-[state=on]:text-primary-foreground data-[state=on]:border-[#5C4033]',
    ],
  },
  variants: {
    variant: {
      default: {},
      outline: {},
    },
    size: {
      default: {
        item: 'h-10 px-3',
      },
      sm: {
        item: 'h-9 px-2.5',
      },
      lg: {
        item: 'h-11 px-5',
      },
    },
  },
};
