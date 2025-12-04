/**
 * Popover 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式便签纸弹出效果
 * 泛黄纸片质感
 */
export const popoverConfig = {
  slots: {
    content: [
      'z-50 w-72',
      // 锐利边角
      'rounded-[2px]',
      // 粗边框
      'border-2 border-border',
      // 背景
      'bg-surface-1 p-4',
      'text-foreground',
      // 阴影效果
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.1),4px_4px_0_0_rgba(44,24,16,0.2)]',
      'outline-none',
      // 动画
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],
  },
};
