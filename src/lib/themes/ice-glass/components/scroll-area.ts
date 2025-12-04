/**
 * ScrollArea 组件 - Ice Glass 冰玻璃风格
 *
 * 设计特点：
 * - 毛玻璃效果（backdrop-blur）
 * - 半透明背景
 * - 圆润边角
 * - 微妙的白色/蓝色边框
 * - 冰晶质感
 */
export const scrollAreaConfig = {
  slots: {
    // 容器：毛玻璃效果
    // 纯视觉层（功能层由组件提供）
    base: [
      'h-64 w-full',
      'rounded-xl',
      'border border-white/20',
      'bg-white/10 backdrop-blur-md',
      'shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.2)]',
    ],

    viewport: '',  // 功能层由组件提供

    // 内容区
    content: [
      'p-4 space-y-2',
    ],

    // 头部：冰霜效果
    header: [
      'sticky top-0 z-10',
      'bg-white/20 backdrop-blur-lg',
      'border-b border-white/10',
      'px-4 py-3',
      'text-xs font-medium uppercase tracking-wider',
      'text-foreground/70',
    ],

    // 列表项：悬浮卡片效果
    item: [
      'flex items-center gap-3',
      'px-4 py-3',
      'rounded-lg',
      'bg-white/5',
      'hover:bg-white/15',
      'border border-transparent',
      'hover:border-white/20',
      'transition-all duration-200',
      'hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]',
    ],

    // 索引：冰蓝色
    itemIndex: [
      'text-xs font-medium',
      'text-primary/60',
      'bg-primary/10',
      'px-2 py-0.5',
      'rounded-full',
    ],

    // 文本
    itemText: [
      'text-sm',
      'text-foreground/80',
    ],
  },
};

export const scrollBarConfig = {
  slots: {
    // 滚动条轨道：透明
    base: [
      'bg-transparent',
      'data-[orientation=vertical]:w-2',
      'data-[orientation=horizontal]:h-2',
      'p-0.5',
    ],

    // 滑块：冰晶效果
    thumb: [
      'rounded-full',
      'bg-white/30',
      'hover:bg-white/50',
      'backdrop-blur-sm',
      'border border-white/20',
      'transition-all duration-200',
    ],
  },

  variants: {
    orientation: {
      vertical: { base: 'h-full w-2.5' },
      horizontal: { base: 'h-2.5 flex-col' },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
};
