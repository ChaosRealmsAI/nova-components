export const breadcrumbConfig = {
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
};
