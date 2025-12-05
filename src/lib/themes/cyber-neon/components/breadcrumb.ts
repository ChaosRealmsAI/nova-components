/**
 * Breadcrumb Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Breadcrumb"
 * - Links: Secondary color (neon cyan) with glow on hover
 * - Typography: Uppercase + tracking for cyber feel
 * - Transition: Fast 150ms
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
     * - Uppercase + tracking for cyber aesthetic
     */
    list: [
      'flex flex-wrap items-center gap-1.5',
      'text-sm text-muted-foreground uppercase tracking-wide',
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
     * - Secondary color (neon cyan)
     * - Glow on hover
     * - 150ms fast transition
     */
    link: [
      'text-secondary',
      'transition-all duration-150',
      'hover:text-secondary',
      'hover:[text-shadow:0_0_8px_var(--secondary)]',
      'hover:brightness-125',
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
