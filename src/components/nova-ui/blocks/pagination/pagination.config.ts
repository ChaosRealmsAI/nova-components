/**
 * Pagination Base Config
 *
 * Block 级别配置，定义分页组件的布局和样式变体
 * 依赖的 Atoms: button
 */
export const paginationBaseConfig = {
  slots: {
    root: 'mx-auto flex w-full justify-center',
    content: 'flex flex-row items-center gap-1',
    item: '',
    link: 'inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    ellipsis: 'flex size-9 items-center justify-center',
  },
  variants: {
    variant: {
      default: {
        root: '',
        content: '',
        link: '',
      },
      outline: {
        root: '',
        content: '',
        link: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
    },
    size: {
      default: {
        link: 'h-9 px-3',
      },
      sm: {
        link: 'h-8 px-2 text-xs',
      },
      lg: {
        link: 'h-10 px-4',
      },
      icon: {
        link: 'size-9',
      },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
    size: 'icon' as const,
  },
} as const;
