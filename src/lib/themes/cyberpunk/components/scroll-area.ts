/**
 * ScrollArea 组件 - Cyberpunk 赛博朋克风格
 *
 * 设计特点：
 * - 霓虹边框发光效果
 * - 无圆角，锐利边缘
 * - 扫描线背景纹理
 * - 终端风格的列表项
 */
export const scrollAreaConfig = {
  slots: {
    // 容器：霓虹边框 + 深色背景
    // 纯视觉层（功能层由组件提供）
    base: [
      'h-64 w-full',
      'rounded-none',
      'border border-primary/50',
      'bg-surface-1',
      'shadow-[0_0_10px_rgba(0,255,255,0.3),inset_0_0_20px_rgba(0,0,0,0.5)]',
    ],

    viewport: '',  // 功能层由组件提供

    // 内容区：扫描线效果
    content: [
      'p-4 space-y-1',
      'bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,255,0.03)_2px,rgba(0,255,255,0.03)_4px)]',
    ],

    // 头部：霓虹发光标题
    header: [
      'sticky top-0 z-10',
      'bg-surface-1/95 backdrop-blur-sm',
      'border-b border-primary/30',
      'px-3 py-2',
      'font-mono text-xs uppercase tracking-[0.2em]',
      'text-primary',
      'shadow-[0_0_10px_rgba(0,255,255,0.2)]',
    ],

    // 列表项：终端风格
    item: [
      'flex items-center gap-3',
      'px-3 py-2',
      'font-mono text-sm',
      'text-foreground/80',
      'border-l-2 border-transparent',
      'hover:border-l-2 hover:border-primary',
      'hover:bg-primary/10',
      'hover:text-primary',
      'transition-all duration-150',
    ],

    // 索引：霓虹绿色
    itemIndex: [
      'font-mono text-xs',
      'text-[#00ff00]',
      'opacity-70',
    ],

    // 文本
    itemText: [
      'font-mono',
    ],
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
    // 滚动条轨道：半透明
    base: [
      'bg-black/30',
      'data-[orientation=vertical]:w-2',
      'data-[orientation=horizontal]:h-2',
    ],

    // 滑块：霓虹发光
    thumb: [
      'rounded-none',
      'bg-primary/60',
      'hover:bg-primary',
      'shadow-[0_0_6px_rgba(0,255,255,0.5)]',
      'transition-all duration-200',
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
