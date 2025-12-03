/**
 * Breadcrumb Base Config
 *
 * Block 级别配置，定义面包屑导航的布局和样式变体
 * 依赖的 Atoms: separator
 */
export const breadcrumbBaseConfig = {
  slots: {
    root: '',
    list: 'flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5 text-muted-foreground',
    item: 'inline-flex items-center gap-1.5',
    link: 'hover:text-foreground transition-colors',
    page: 'text-foreground font-normal',
    separator: '[&>svg]:size-3.5',
    ellipsis: 'flex size-9 items-center justify-center',
  },
  variants: {
    variant: {
      default: {
        root: '',
        list: '',
        item: '',
        link: '',
      },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
} as const;
