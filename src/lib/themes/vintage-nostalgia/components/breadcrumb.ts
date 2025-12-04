/**
 * Breadcrumb 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式书籍章节导航
 * 古籍目录效果
 */
export const breadcrumbConfig = {
  slots: {
    root: '',

    list: 'flex flex-wrap items-center gap-1.5 break-words font-serif text-sm text-muted-foreground sm:gap-2.5',

    item: 'inline-flex items-center gap-1.5',

    link: [
      'transition-colors duration-200',
      'hover:text-foreground',
      'hover:underline hover:underline-offset-4',
    ],

    page: 'font-semibold text-foreground',

    separator: 'text-border',

    ellipsis: 'flex h-9 w-9 items-center justify-center',
  },

  variants: {
    variant: {
      default: {},
    },
  },
};
