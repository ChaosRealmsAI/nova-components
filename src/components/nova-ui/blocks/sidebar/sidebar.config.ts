/**
 * Sidebar Base Config
 *
 * Block 级别配置，定义侧边栏布局和样式
 *
 * Slots:
 * - root: 侧边栏容器
 * - header: 头部区域
 * - content: 主内容区
 * - footer: 底部区域
 * - group: 分组容器
 * - groupLabel: 分组标签
 * - menu: 菜单容器
 * - menuItem: 菜单项
 * - menuButton: 菜单按钮
 * - menuBadge: 菜单徽章
 * - separator: 分隔线
 * - trigger: 触发器（用于移动端）
 *
 * 依赖的 Atoms: button, separator
 */
export const sidebarBaseConfig = {
  slots: {
    root: [
      'flex flex-col h-full bg-sidebar text-sidebar-foreground',
      'border-r border-sidebar-border',
      'w-[var(--sidebar-width,280px)]',
      'transition-[width,transform] duration-200 ease-in-out',
    ].join(' '),
    header: 'flex flex-col gap-2 px-4 py-4',
    content: 'flex-1 overflow-auto px-2 py-2',
    footer: 'flex flex-col gap-2 px-4 py-4 border-t border-sidebar-border',
    group: 'flex flex-col gap-1 py-2',
    groupLabel: 'px-2 py-1.5 text-xs font-medium text-sidebar-foreground/70 uppercase tracking-wider',
    menu: 'flex flex-col gap-0.5',
    menuItem: 'relative',
    menuButton: [
      'flex w-full items-center gap-2 px-2 py-1.5 rounded-md',
      'text-sm font-medium text-sidebar-foreground',
      'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
      'focus:bg-sidebar-accent focus:text-sidebar-accent-foreground',
      'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
      'outline-none transition-colors',
    ].join(' '),
    menuBadge: 'ml-auto text-xs text-sidebar-foreground/60',
    separator: 'my-2 h-px bg-sidebar-border',
    trigger: [
      'fixed top-4 left-4 z-50 inline-flex items-center justify-center',
      'w-10 h-10 rounded-md bg-background border shadow-sm',
      'lg:hidden',
    ].join(' '),
    overlay: [
      'fixed inset-0 z-40 bg-black/50',
      'lg:hidden',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ].join(' '),
    mobileContainer: [
      'fixed inset-y-0 left-0 z-50',
      'lg:relative lg:z-0',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
    ].join(' '),
  },
  variants: {
    variant: {
      default: {},
      inset: {
        root: 'rounded-lg m-2 border shadow-sm',
      },
    },
    collapsible: {
      none: {},
      icon: {
        root: 'data-[collapsed=true]:w-[var(--sidebar-width-icon,48px)]',
      },
      offcanvas: {
        root: 'data-[collapsed=true]:-translate-x-full lg:translate-x-0',
      },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
    collapsible: 'none' as const,
  },
};
