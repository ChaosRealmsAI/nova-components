/**
 * NavigationMenu Base Config
 *
 * Block 级别配置，定义导航菜单的布局和样式
 * 依赖的 Atoms: popover, button
 */
export const navigationMenuBaseConfig = {
  slots: {
    // 结构 slots
    root: 'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center text-foreground',
    list: 'group flex flex-1 list-none items-center justify-center gap-1',
    item: 'relative',
    // 触发器
    trigger:
      'group inline-flex h-9 w-max items-center justify-center px-4 py-2 rounded-md bg-background text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50 data-[state=open]:text-accent-foreground focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1',
    // 内容区
    content:
      'top-0 left-0 w-full p-2 md:absolute md:w-auto data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow',
    // 视口
    viewport:
      'origin-top-center relative mt-1.5 w-full overflow-hidden md:w-[var(--radix-navigation-menu-viewport-width)] h-[var(--radix-navigation-menu-viewport-height)] bg-popover text-popover-foreground rounded-md border shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
    viewportWrapper: 'absolute top-full left-0 isolate z-50 flex justify-start',
    // 链接
    link: 'flex flex-col gap-0.5 rounded-md p-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground focus-visible:ring-ring/50 outline-none transition-all focus-visible:ring-[3px]',
    // 列表容器
    contentList: 'grid gap-1 p-2',
    // 列表项 - 用于 Demo 展示
    listItem:
      'block select-none rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors text-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
    listItemTitle: 'text-sm font-medium leading-none text-foreground',
    listItemDescription: 'line-clamp-1 text-xs leading-snug text-muted-foreground mt-0.5',
    // 指示器
    indicator:
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
    indicatorArrow: 'bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md',
    chevron:
      'relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180 text-muted-foreground',
  },
  variants: {
    variant: {
      default: {},
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
};
