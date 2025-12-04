/**
 * NavigationMenu 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const navigationMenuConfig = {
  slots: {
    root: 'relative z-10 flex max-w-max flex-1 items-center justify-center',
    list: 'group flex flex-1 list-none items-center justify-center space-x-1',
    item: '',
    trigger: [
      'group inline-flex h-10 w-max items-center justify-center',
      'rounded-[2px] px-4 py-2',
      'font-serif font-medium text-sm',
      'transition-colors duration-150',
      'hover:bg-surface-1 hover:text-foreground',
      'focus:bg-surface-1 focus:text-foreground focus:outline-none',
      'disabled:pointer-events-none disabled:opacity-50',
      'data-[active]:bg-surface-2 data-[state=open]:bg-surface-2',
    ],
    content: [
      'left-0 top-0 w-full',
      'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out',
      'data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out',
      'data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52',
      'data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
    ],
    viewport: [
      'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-surface-1',
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.1),4px_4px_0_0_rgba(44,24,16,0.2)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
    ],
    link: [
      'block select-none space-y-1',
      'rounded-[2px] p-3 leading-none no-underline',
      'outline-none',
      'transition-colors duration-150',
      'hover:bg-surface-1 hover:text-foreground',
      'focus:bg-surface-1 focus:text-foreground',
    ],
    contentList: '',
    listItem: [
      'block select-none space-y-1',
      'rounded-[2px] p-3 leading-none no-underline',
      'outline-none',
      'transition-colors duration-150',
      'hover:bg-surface-1 hover:text-foreground',
      'focus:bg-surface-1 focus:text-foreground',
    ],
    listItemTitle: 'font-serif text-sm font-bold leading-none',
    listItemDescription: 'font-serif text-sm leading-snug text-muted-foreground',
    indicator: [
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
      'data-[state=visible]:animate-in data-[state=hidden]:animate-out',
      'data-[state=hidden]:fade-out data-[state=visible]:fade-in',
    ],
    indicatorArrow: '',
    chevron: '',
  },
};
