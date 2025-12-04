/**
 * NavigationMenu Component - Shadcn Default Theme
 *
 * Classic navigation menu styling
 */
export const navigationMenuConfig = {
  slots: {
    root: 'text-foreground',
    list: 'gap-1',
    item: '',
    trigger: [
      'h-9 w-max px-4 py-2 rounded-md',
      'bg-background text-sm font-medium text-foreground',
      'hover:bg-accent hover:text-accent-foreground',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[state=open]:bg-accent/50 data-[state=open]:text-accent-foreground',
      'focus-visible:ring-ring/50 focus-visible:ring-[3px] focus-visible:outline-1',
      'transition-[color,box-shadow]',
    ],
    content: [
      'p-2',
      'group-data-[viewport=false]/navigation-menu:bg-popover',
      'group-data-[viewport=false]/navigation-menu:text-popover-foreground',
      'group-data-[viewport=false]/navigation-menu:top-full',
      'group-data-[viewport=false]/navigation-menu:mt-1.5',
      'group-data-[viewport=false]/navigation-menu:overflow-hidden',
      'group-data-[viewport=false]/navigation-menu:rounded-md',
      'group-data-[viewport=false]/navigation-menu:border',
      'group-data-[viewport=false]/navigation-menu:shadow',
    ],
    viewport: [
      'mt-1.5',
      'bg-popover text-popover-foreground',
      'rounded-md border shadow',
    ],
    viewportWrapper: '',
    link: [
      'gap-0.5 p-2 text-sm text-foreground',
      'hover:bg-accent hover:text-accent-foreground',
      'focus:bg-accent focus:text-accent-foreground',
      'data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground',
      'focus-visible:ring-ring/50 focus-visible:ring-[3px]',
    ],
    contentList: 'gap-3 p-4 w-[220px]',
    listItem: [
      'px-3 py-2 text-foreground',
      'hover:bg-accent hover:text-accent-foreground',
      'focus:bg-accent focus:text-accent-foreground',
    ],
    listItemTitle: 'text-sm font-medium text-foreground',
    listItemDescription: 'text-xs text-muted-foreground mt-0.5',
    indicator: 'h-1.5',
    indicatorArrow: 'bg-border h-2 w-2 rounded-tl-sm shadow-md',
    chevron: 'ml-1 size-3 text-muted-foreground',
  },
  variants: {
    variant: {
      default: {},
    },
  },
};
