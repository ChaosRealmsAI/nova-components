/**
 * ScrollArea 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计特点：
 * - 羊皮纸背景质感
 * - 锐利边角 (2px)
 * - 粗边框
 * - 打字机风格字体
 * - Letterpress 内凹效果
 */
export const scrollAreaConfig = {
  slots: {
    // 容器：羊皮纸效果
    // 纯视觉层（功能层由组件提供）
    base: [
      'h-64 w-full',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-surface-1',
      'shadow-[inset_0_2px_4px_rgba(44,24,16,0.1),2px_2px_0_0_rgba(44,24,16,0.2)]',
    ],

    viewport: '',  // 功能层由组件提供

    // 内容区
    content: [
      'p-4 space-y-1',
    ],

    // 头部：打字机风格
    header: [
      'sticky top-0 z-10',
      'bg-surface-1',
      'border-b-2 border-border',
      'px-4 py-3',
      'font-serif text-sm font-bold uppercase tracking-wide',
      'text-foreground',
      'shadow-[inset_0_-1px_0_rgba(44,24,16,0.1)]',
    ],

    // 列表项：索引卡片风格
    item: [
      'flex items-center gap-3',
      'px-4 py-2',
      'font-serif',
      'text-foreground/90',
      'border-b border-border-muted border-dashed',
      'hover:bg-surface-2',
      'transition-colors duration-150',
    ],

    // 索引：打字机编号
    itemIndex: [
      'font-mono text-sm font-bold',
      'text-primary',
      'min-w-[2rem]',
    ],

    // 文本：衬线字体
    itemText: [
      'font-serif text-sm',
      'text-foreground/80',
    ],
  },
};

export const scrollBarConfig = {
  slots: {
    // 滚动条轨道：内凹效果
    base: [
      'bg-surface-2',
      'border-l border-border-muted',
      'data-[orientation=vertical]:w-3',
      'data-[orientation=horizontal]:h-3',
    ],

    // 滑块：机械感
    thumb: [
      'rounded-[1px]',
      'bg-border',
      'border border-border-muted',
      'hover:bg-primary',
      'shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]',
      'transition-colors duration-200',
    ],
  },

  variants: {
    orientation: {
      vertical: { base: 'h-full w-3' },
      horizontal: { base: 'h-3 flex-col' },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
};
