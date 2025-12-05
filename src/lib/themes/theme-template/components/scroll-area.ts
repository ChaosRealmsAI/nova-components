export const scrollAreaConfig = {
  slots: {
    /**
     * base: 滚动区域基础样式
     * ⚠️ 必须包含高度和宽度，否则滚动条不会显示！
     *    示例: 'h-64 w-full rounded-md border border-border'
     */
    base: [
      'h-64 w-full',
      'rounded-md',
      'border border-border',
    ],

    /**
     * viewport: 视口
     */
    viewport: [
      'rounded-[inherit]',
    ],

    /**
     * content: 内容区
     */
    content: [
      'p-4 space-y-2',
    ],

    /**
     * header: 头部
     */
    header: [
      'text-xs text-muted-foreground mb-4 border-b border-border pb-2',
    ],

    /**
     * item: 内容项
     */
    item: [
      'flex items-center gap-3 py-2 px-3 rounded bg-muted/50 transition-all',
    ],

    /**
     * itemIndex: 项索引
     */
    itemIndex: [
      'text-xs text-muted-foreground/50',
    ],

    /**
     * itemText: 项文字
     */
    itemText: [
      'text-sm text-muted-foreground',
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
     * ⚠️ 必须包含方向尺寸样式，使用 data-[orientation=xxx] 选择器
     */
    base: [
      'flex touch-none select-none transition-colors p-px',
      // 垂直方向
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5',
      'data-[orientation=vertical]:border-l data-[orientation=vertical]:border-l-transparent',
      // 水平方向
      'data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col',
      'data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent',
    ],

    /**
     * thumb: 滚动条滑块
     * ⚠️ 必须包含可见的背景色或阴影
     */
    thumb: [
      'relative flex-1 rounded-full bg-border',
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
