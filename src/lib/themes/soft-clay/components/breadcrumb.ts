/**
 * Breadcrumb Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Navigation"
 * - Links: Primary color with subtle hover darkening
 * - Typography: Normal case for readability
 * - Transition: Gentle 200ms
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const breadcrumbConfig = {
  slots: {
    /**
     * root: 面包屑根容器
     */
    root: [],

    /**
     * list: 面包屑列表
     * ─────────────────────────────────────────────────────────────────────
     * - Normal case for comfortable reading
     */
    list: [
      'flex flex-wrap items-center gap-1.5',
      'text-sm text-muted-foreground',
    ],

    /**
     * item: 面包屑项
     */
    item: [
      'inline-flex items-center gap-1.5',
    ],

    /**
     * link: 面包屑链接
     * ─────────────────────────────────────────────────────────────────────
     * - Primary color
     * - Hover: Slightly darker (brightness-90)
     * - 200ms gentle transition
     */
    link: [
      'text-primary',
      'transition-all duration-200',
      'hover:text-primary',
      'hover:brightness-90',
    ],

    /**
     * page: 当前页面
     * ─────────────────────────────────────────────────────────────────────
     * Current page in foreground color
     */
    page: [
      'font-medium text-foreground',
    ],

    /**
     * separator: 分隔符
     * ─────────────────────────────────────────────────────────────────────
     * Muted separator
     */
    separator: [
      'text-muted-foreground',
    ],

    /**
     * ellipsis: 省略号
     */
    ellipsis: [
      'flex h-9 w-9 items-center justify-center',
      'text-muted-foreground',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认面包屑
       */
      default: {
        root: [],
        list: [],
        item: [],
        link: [],
        page: [],
        separator: [],
        ellipsis: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
