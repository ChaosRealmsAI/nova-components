/**
 * ScrollArea 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Scroll Container"
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
      // 形状 - 玻璃质感圆角
      'rounded-xl',
      // 背景 - 毛玻璃效果
      'bg-white/[0.08] backdrop-blur-xl',
      // 边框 - 微弱发光
      'border border-white/[0.15]',
      // 阴影
      'shadow-lg',
    ],
    viewport: 'h-full w-full rounded-[inherit]',
    content: 'p-4 space-y-1',
    header: [
      'sticky top-0 z-10',
      'bg-white/[0.08] backdrop-blur-md',
      'border-b border-white/[0.1]',
      'px-4 py-2 mb-2',
      'text-sm font-medium text-foreground',
    ],
    item: [
      'flex items-center gap-3',
      'px-4 py-2',
      'rounded-lg',
      'border-b border-white/[0.05]',
      'transition-colors duration-150',
      'hover:bg-white/[0.08]',
    ],
    itemIndex: 'text-muted-foreground font-mono text-xs',
    itemText: 'text-foreground',
  },
  variants: {
    variant: {
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
    base: [
      'flex touch-none select-none transition-colors',
      'p-0.5',
      // 垂直方向
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5',
      // 水平方向
      'data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col',
    ],
    thumb: [
      'relative flex-1 rounded-full',
      'bg-white/[0.2]',
      'transition-colors duration-150',
      'hover:bg-white/[0.3]',
    ],
  },
  variants: {
    variant: {
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
