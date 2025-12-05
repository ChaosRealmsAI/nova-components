/**
 * Sidebar Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Clay Sidebar"
 * - Neumorphic raised sidebar container
 * - Menu items with subtle raised effect on hover/active
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const sidebarConfig = {
  slots: {
    /**
     * root: 侧边栏根容器
     */
    root: [
      'group peer',
      'fixed inset-y-0 z-50',
      'hidden w-sidebar',
      'bg-surface-1',
      'shadow-[6px_0_12px_var(--shadow-dark),-6px_0_12px_var(--shadow-light)]',
      'transition-all duration-300',
      'data-[state=collapsed]:w-sidebar-collapsed',
      'lg:flex',
    ],

    /**
     * header: 侧边栏头部
     */
    header: [
      'flex h-sidebar-header shrink-0 items-center gap-2',
      'px-6 py-4',
    ],

    /**
     * content: 侧边栏内容
     */
    content: [
      'flex flex-1 flex-col gap-4',
      'overflow-y-auto overflow-x-hidden',
      'px-3 py-4',
    ],

    /**
     * footer: 侧边栏底部
     */
    footer: [
      'flex shrink-0 items-center gap-2',
      'px-6 py-4',
    ],

    /**
     * group: 菜单组
     */
    group: [
      'space-y-1',
    ],

    /**
     * groupLabel: 分组标签
     */
    groupLabel: [
      'px-3 py-2 text-xs font-semibold',
      'text-muted-foreground',
    ],

    /**
     * menu: 菜单
     */
    menu: [
      'space-y-1',
    ],

    /**
     * menuItem: 菜单项
     */
    menuItem: [],

    /**
     * menuButton: 菜单按钮
     */
    menuButton: [
      'flex w-full items-center gap-2',
      'rounded-[16px] px-3 py-2',
      'text-sm font-medium',
      'text-foreground',
      'transition-all duration-200',
      'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'hover:-translate-y-0.5',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'data-[active=true]:bg-primary',
      'data-[active=true]:text-primary-foreground',
      'data-[active=true]:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
    ],

    /**
     * menuBadge: 菜单徽章
     */
    menuBadge: [],

    /**
     * separator: 分隔线
     */
    separator: [
      'my-2 h-px',
      'bg-gradient-to-r from-[var(--shadow-dark)] to-[var(--shadow-light)]',
    ],

    /**
     * trigger: 触发按钮
     */
    trigger: [
      'absolute -right-12 top-[calc(var(--sidebar-header-height)_+_0.5rem)]',
      'z-50 flex h-8 w-8 items-center justify-center',
      'rounded-[12px]',
      'bg-surface-1 text-foreground',
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'transition-all duration-200',
      'hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
      'hover:-translate-y-0.5',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    ],

    /**
     * overlay: 遮罩层
     */
    overlay: [
      'fixed inset-0 z-40',
      'bg-black/60 backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],

    /**
     * mobileContainer: 移动端容器
     */
    mobileContainer: [
      'fixed inset-0 z-50',
      'hidden',
      'data-[state=open]:block',
      'lg:data-[state=open]:hidden',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        root: [],
        header: [],
        content: [],
        footer: [],
        menuButton: [],
      },

      /**
       * inset: 内嵌样式
       */
      inset: {
        root: [],
        header: [],
        content: [],
        footer: [],
        menuButton: [],
      },
    },
    collapsible: {
      /**
       * none: 不可折叠
       */
      none: {
        root: [],
      },

      /**
       * icon: 图标折叠
       */
      icon: {
        root: [],
      },

      /**
       * offcanvas: 侧边栏折叠
       */
      offcanvas: {
        root: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    collapsible: 'none',
  },
};
