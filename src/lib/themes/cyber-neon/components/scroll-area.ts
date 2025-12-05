/**
 * Scroll Area Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Scroll Area"
 * - Custom scrollbar with neon styling
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const scrollAreaConfig = {
  slots: {
    /**
     * base: 滚动区域基础样式
     * ⚠️ 必须包含高度，否则滚动条不会显示
     */
    base: [
      'relative overflow-hidden',
      // 尺寸 - 必需
      'h-64 w-full',
      // 形状 - 赛博朋克小圆角
      'rounded',
      // 边框 - 霓虹发光
      'border border-primary/50',
      // 背景
      'bg-surface-1',
      // 阴影 - 霓虹发光效果
      'shadow-[0_0_10px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
    ],

    /**
     * viewport: 视口
     */
    viewport: [
      'h-full w-full rounded-[inherit]',
    ],

    /**
     * content: 内容区
     */
    content: [
      'p-4 space-y-1',
    ],

    /**
     * header: 头部
     */
    header: [
      'mb-2 pb-2 text-sm font-medium text-primary uppercase tracking-wider',
      'border-b border-primary/30',
    ],

    /**
     * item: 内容项
     */
    item: [
      'flex items-center gap-3',
      'py-2 px-3',
      'text-sm text-foreground',
      'border-l-2 border-transparent',
      'transition-all duration-150',
      'hover:border-l-primary hover:bg-primary/10 hover:text-primary',
    ],

    /**
     * itemIndex: 项索引
     */
    itemIndex: [
      'text-xs text-primary/60 font-mono',
    ],

    /**
     * itemText: 项文字
     */
    itemText: [
      'text-foreground',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认滚动区域
       */
      default: {
        base: [
          // 继承 slots.base 的所有样式
        ],
        viewport: [
          // 继承 slots.viewport 的所有样式
        ],
        content: [
          // 继承 slots.content 的所有样式
        ],
        header: [
          // 继承 slots.header 的所有样式
        ],
        item: [
          // 继承 slots.item 的所有样式
        ],
        itemIndex: [
          // 继承 slots.itemIndex 的所有样式
        ],
        itemText: [
          // 继承 slots.itemText 的所有样式
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};

export const scrollBarConfig = {
  slots: {
    /**
     * base: 滚动条基础样式
     */
    base: [
      'flex touch-none select-none transition-colors',
      'hover:bg-surface-2',
      // 垂直方向
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5',
      // 水平方向
      'data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col',
    ],

    /**
     * thumb: 滚动条滑块
     * ─────────────────────────────────────────────────────────────────────
     * 霓虹发光滑块
     */
    thumb: [
      'relative flex-1 rounded-full',
      'bg-primary/60',
      'border border-primary',
      'shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
      'hover:bg-primary/80',
      'hover:shadow-[0_0_6px_var(--primary)]',
      'transition-all duration-150',
      'before:absolute before:left-1/2 before:top-1/2',
      'before:h-full before:min-h-[44px] before:w-full before:min-w-[44px]',
      'before:-translate-x-1/2 before:-translate-y-1/2',
      'before:content-[""]',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认滚动条
       */
      default: {
        base: [
          // 继承 slots.base 的所有样式
        ],
        thumb: [
          // 继承 slots.thumb 的所有样式
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
