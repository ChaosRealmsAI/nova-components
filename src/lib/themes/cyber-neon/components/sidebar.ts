/**
 * Sidebar Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Sidebar"
 * - Side navigation with neon accents
 * - Active item: Neon glow
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
      'border-r border-border',
      'bg-surface-1',
      'transition-all duration-300',
      'data-[state=collapsed]:w-sidebar-collapsed',
      'lg:flex',
    ],

    /**
     * header: 侧边栏头部
     */
    header: [
      'flex h-sidebar-header shrink-0 items-center gap-2',
      'border-b border-border px-6',
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
      'border-t border-border px-6 py-4',
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
      'px-2 py-1.5 text-xs font-semibold',
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
     * ─────────────────────────────────────────────────────────────────────
     * hover 时发光，激活时强发光
     */
    menuButton: [
      'flex w-full items-center gap-2',
      'rounded-[4px] px-3 py-2',
      'text-sm font-medium',
      'text-foreground',
      'transition-all duration-150',
      'hover:bg-surface-2',
      'hover:text-foreground',
      'hover:border hover:border-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'data-[active=true]:bg-primary/20',
      'data-[active=true]:text-primary',
      'data-[active=true]:border-primary',
      'data-[active=true]:shadow-[0_0_6px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
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
      'bg-border',
    ],

    /**
     * trigger: 触发按钮
     */
    trigger: [
      'absolute -right-12 top-[calc(var(--sidebar-header-height)_+_0.5rem)]',
      'z-50 flex h-7 w-7 items-center justify-center',
      'rounded-[4px] border border-border',
      'bg-surface-1',
      'text-foreground',
      'shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
      'transition-all duration-150',
      'hover:bg-surface-2',
      'hover:border-primary',
      'hover:shadow-[0_0_6px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
    ],

    /**
     * overlay: 遮罩层
     */
    overlay: [
      'fixed inset-0 z-40',
      'bg-black/80',
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
        root: [
          'bg-surface-1',
        ],
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
