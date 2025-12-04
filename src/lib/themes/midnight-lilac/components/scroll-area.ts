/**
 * ScrollArea 组件 - Midnight Lilac 午夜紫丁香风格
 *
 * 设计特点：
 * - 紫色调渐变
 * - 柔和阴影
 * - 中等圆角
 * - 优雅的紫色高亮
 */
export const scrollAreaConfig = {
  slots: {
    // 容器：紫色渐变边框
    // 纯视觉层（功能层由组件提供）
    base: [
      'h-64 w-full',
      'rounded-lg',
      'border border-primary/20',
      'bg-surface-1',
      'shadow-[0_4px_20px_rgba(139,92,246,0.1)]',
    ],

    viewport: '',  // 功能层由组件提供

    // 内容区
    content: [
      'p-4 space-y-2',
    ],

    // 头部：渐变底边
    header: [
      'sticky top-0 z-10',
      'bg-surface-1/95 backdrop-blur-sm',
      'border-b border-primary/10',
      'px-4 py-3',
      'text-sm font-medium',
      'text-primary',
      'bg-gradient-to-r from-primary/5 to-transparent',
    ],

    // 列表项：紫色高亮
    item: [
      'flex items-center gap-3',
      'px-4 py-2.5',
      'rounded-md',
      'text-foreground/80',
      'hover:bg-primary/10',
      'hover:text-foreground',
      'transition-all duration-200',
      'border-l-2 border-transparent',
      'hover:border-l-2 hover:border-primary',
    ],

    // 索引：紫色徽章
    itemIndex: [
      'text-xs font-semibold',
      'text-primary',
      'bg-primary/15',
      'px-2 py-0.5',
      'rounded',
    ],

    // 文本
    itemText: [
      'text-sm',
      'text-muted-foreground',
    ],
  },
};

export const scrollBarConfig = {
  slots: {
    // 滚动条轨道
    base: [
      'bg-primary/5',
      'rounded-full',
      'data-[orientation=vertical]:w-2',
      'data-[orientation=horizontal]:h-2',
    ],

    // 滑块：紫色渐变
    thumb: [
      'rounded-full',
      'bg-gradient-to-b from-primary/40 to-primary/60',
      'hover:from-primary/60 hover:to-primary/80',
      'transition-all duration-200',
      'shadow-[0_0_8px_rgba(139,92,246,0.3)]',
    ],
  },

  variants: {
    orientation: {
      vertical: { base: 'h-full w-2' },
      horizontal: { base: 'h-2 flex-col' },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
};
