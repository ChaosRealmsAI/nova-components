/**
 * Pagination Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Pagination"
 * - Simple pagination with neon accents
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const paginationConfig = {
  slots: {
    /**
     * root: 分页根容器
     */
    root: [],

    /**
     * content: 分页内容
     */
    content: [
      'flex flex-row items-center gap-1',
    ],

    /**
     * item: 分页项
     */
    item: [],

    /**
     * link: 分页链接
     * ─────────────────────────────────────────────────────────────────────
     * 4px圆角、霓虹边框、激活时发光
     */
    link: [
      // Layout
      'inline-flex items-center justify-center',
      'gap-1 whitespace-nowrap',

      // Typography - 赛博朋克风格：大写+加宽字距
      'text-sm font-medium uppercase tracking-[0.05em]',

      // Shape - 4px圆角
      'rounded',

      // Size
      'h-9 min-w-9 px-3',

      // Color
      'text-foreground',
      'bg-transparent',

      // Border - 霓虹边框
      'border border-border',

      // Transition
      'transition-all duration-150 ease-out',

      // Hover - 发光边框
      'hover:border-primary',
      'hover:text-primary',
      'hover:shadow-[inset_0_0_8px_color-mix(in_srgb,var(--primary)_10%,transparent),0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',

      // Active state - 激活时强发光
      'aria-current-page:bg-primary',
      'aria-current-page:text-primary-foreground',
      'aria-current-page:border-primary',
      'aria-current-page:shadow-[inset_0_0_10px_color-mix(in_srgb,var(--primary)_20%,transparent),0_0_8px_var(--primary),0_0_16px_color-mix(in_srgb,var(--primary)_50%,transparent)]',

      // Focus
      'focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2 focus-visible:ring-offset-background',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-40',
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
       * default: 默认分页
       */
      default: {
        root: [],
        content: [],
        item: [],
        link: [],
        ellipsis: [],
      },

      /**
       * outline: 轮廓分页
       */
      outline: {
        root: [],
        content: [],
        item: [],
        link: [
          'bg-transparent',
        ],
        ellipsis: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        link: [
          'h-9 w-9',
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        link: [
          'h-8 w-8 text-xs',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        link: [
          'h-10 w-10 text-base',
        ],
      },

      /**
       * icon: 图标尺寸
       */
      icon: {
        link: [
          'h-9 w-9',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
