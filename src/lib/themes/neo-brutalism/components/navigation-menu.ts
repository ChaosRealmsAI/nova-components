export const navigationMenuConfig = {
  slots: {
    root: 'relative z-10 flex max-w-max flex-1 items-center justify-center',
    list: 'group flex flex-1 list-none items-center justify-center space-x-1',
    item: '',
    trigger: [
      'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-bold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
      'border-2 border-transparent hover:border-black',
    ],
    content: [
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
      'rounded-md border-2 border-black bg-background shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    ],
    viewportWrapper: 'absolute left-0 top-full flex justify-center',
    viewport: [
      'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
      'border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    ],
    indicator: [
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      '[&>div]:bg-black [&>div]:border-2 [&>div]:border-black',
    ],
    link: 'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
    contentList: 'grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]',
    listItem: 'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
    listItemTitle: 'text-sm font-medium leading-none',
    listItemDescription: 'line-clamp-2 text-sm leading-snug text-muted-foreground',
    indicatorArrow: 'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md',
    chevron: 'relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180',
  },
};
