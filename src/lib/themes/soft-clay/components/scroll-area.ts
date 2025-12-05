/**
 * Scroll Area Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Inset Scrollbar Track with Raised Thumb"
 * - Track: Inset shadow (sunken groove)
 * - Thumb: Raised shadow (elevated handle)
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const scrollAreaConfig = {
  slots: {
    /**
     * base: 滚动区域基础样式
     * ⚠️ 必须包含高度和宽度，否则滚动条不会显示
     */
    base: [
      'relative overflow-hidden',
      // 尺寸 - 必需！没有高度限制就不会触发滚动
      'h-64 w-full',
      // 形状 - 新拟物主义大圆角
      'rounded-2xl',
      // 背景 - 与页面同色，靠阴影区分
      'bg-surface-1',
      // 阴影 - 新拟物主义凸起效果
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
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
      'text-sm font-medium text-foreground',
      'mb-2 pb-2',
      // 底部分隔 - 使用柔和阴影而非边框
      'border-b border-transparent',
      'shadow-[0_1px_0_var(--shadow-dark)]',
    ],

    /**
     * item: 内容项
     */
    item: [
      'flex items-center gap-3',
      'py-2 px-3',
      'text-sm text-foreground',
      // 圆角
      'rounded-xl',
      // Hover - 轻微凸起
      'transition-all duration-200',
      'hover:bg-surface-2',
      'hover:shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
    ],

    /**
     * itemIndex: 项索引
     */
    itemIndex: [
      'text-xs text-muted-foreground',
      'min-w-[1.5rem]',
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
        base: [],
        viewport: [],
        content: [],
        header: [],
        item: [],
        itemIndex: [],
        itemText: [],
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
     * 轨道内凹，模拟凹槽
     */
    base: [
      'flex touch-none select-none',
      // Transition
      'transition-colors duration-200 ease-in-out',
      // Orientation - vertical
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5 data-[orientation=vertical]:border-l data-[orientation=vertical]:border-l-transparent data-[orientation=vertical]:p-[1px]',
      // Orientation - horizontal
      'data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:p-[1px]',
    ],

    /**
     * thumb: 滚动条滑块
     * 凸起，与轨道形成对比
     */
    thumb: [
      'relative flex-1',
      // Shape - 圆角
      'rounded-full',
      // Color
      'bg-primary/60',
      // Shadow - 凸起阴影（区别于内凹轨道）
      'shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Hover - 更明显
      'hover:bg-primary/80',
      'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认滚动条
       */
      default: {
        base: [],
        thumb: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
