export const breadcrumbConfig = {
  slots: {
    root: 'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
    list: 'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
    item: 'inline-flex items-center gap-1.5',
    link: 'transition-colors hover:text-foreground font-bold text-black hover:underline decoration-2 underline-offset-4',
    separator: '[&>svg]:size-3.5 font-bold text-black',
    page: 'font-normal text-foreground text-black',
    ellipsis: 'flex h-9 w-9 items-center justify-center',
  },
};
