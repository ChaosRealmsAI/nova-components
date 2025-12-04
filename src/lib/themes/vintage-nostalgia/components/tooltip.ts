/**
 * Tooltip 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 旧书页边注释效果
 * 墨水标注质感
 */
export const tooltipConfig = {
  slots: {
    content: [
      'z-50 overflow-hidden',
      // 锐利边角
      'rounded-[2px]',
      // 粗边框
      'border-2 border-border',
      // 背景：深色墨水效果
      'bg-foreground px-3 py-1.5',
      'text-background',
      // 字体
      'text-xs font-serif',
      // 阴影
      'shadow-[2px_2px_0_0_rgba(44,24,16,0.3)]',
      // 动画
      'animate-in fade-in-0 zoom-in-95',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],

    arrow: 'fill-foreground',
  },
};
