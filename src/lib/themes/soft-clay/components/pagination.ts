/**
 * Pagination Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neumorphic Pages"
 * - Shape: 16px rounded
 * - Shadow: Raised buttons, active凸起强化
 * - Typography: Normal case, medium weight
 * - Interaction: Hover = shadow intensify, Active = raised effect
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const paginationConfig = {
  slots: {
    /**
     * root: 分页根容器
     */
    root: [
      'mx-auto flex w-full justify-center',
    ],

    /**
     * content: 分页内容
     */
    content: [
      'flex flex-row items-center gap-2',
    ],

    /**
     * item: 分页项
     */
    item: [
      'cursor-pointer',
    ],

    /**
     * link: 分页链接
     * ─────────────────────────────────────────────────────────────────────
     * 16px圆角、凸起阴影、激活时强凸起
     */
    link: [
      // Layout
      'inline-flex items-center justify-center',
      'gap-1 whitespace-nowrap',

      // Typography - 柔和字重
      'text-sm font-medium',

      // Shape - 16px圆角
      'rounded-[16px]',

      // Size
      'h-9 min-w-9 px-3',

      // Color
      'text-foreground',
      'bg-surface-1',

      // Border - 无边框
      'border-0',

      // Shadow - 凸起双阴影
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',

      // Transition
      'transition-all duration-200 ease-in-out',

      // Hover - 阴影加深 + 上移
      'hover:shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
      'hover:-translate-y-0.5',
      'hover:text-primary',

      // Active state - 强凸起
      'aria-current-page:bg-primary',
      'aria-current-page:text-primary-foreground',
      'aria-current-page:shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
      'aria-current-page:-translate-y-1',

      // Focus
      'focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-primary',
      'focus-visible:ring-offset-2',

      // Disabled
      'disabled:pointer-events-none disabled:opacity-50',
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
       * outline: 轮廓分页 - 内凹效果
       */
      outline: {
        root: [],
        content: [],
        item: [],
        link: [
          'bg-surface-1',
          'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
          'hover:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
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
          'h-9 min-w-9 px-3',
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        link: [
          'h-8 min-w-8 px-2 text-xs',
          'rounded-[12px]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        link: [
          'h-11 min-w-11 px-4 text-base',
          'rounded-[20px]',
        ],
      },

      /**
       * icon: 图标尺寸
       */
      icon: {
        link: [
          'h-9 w-9 p-0',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
