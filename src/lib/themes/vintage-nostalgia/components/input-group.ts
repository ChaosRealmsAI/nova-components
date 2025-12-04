/**
 * InputGroup 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const inputGroupConfig = {
  slots: {
    root: 'relative flex w-full items-center',
    input: '',
    button: '',
    addon: [
      'flex items-center px-3',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-surface-1',
      'font-serif text-sm text-muted-foreground',
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.1)]',
    ],
  },
  variants: {
    variant: {
      default: {},
      attached: {
        addon: [
          'border-r-0 first:rounded-r-none last:rounded-l-none',
        ],
      },
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
};
