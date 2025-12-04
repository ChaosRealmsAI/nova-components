/**
 * Toggle 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式打字机按键风格
 * 按下时有明显的状态变化
 */
export const toggleConfig = {
  slots: {
    base: [
      // 基础样式
      'inline-flex items-center justify-center',
      // 锐利边角
      'rounded-[2px]',
      // 字体
      'text-sm font-medium font-serif',
      // 过渡
      'transition-all duration-150',
      // 焦点状态
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      // 禁用状态
      'disabled:pointer-events-none disabled:opacity-50',
      // 未激活状态
      'bg-transparent',
      'border-2 border-transparent',
      'text-foreground',
      'hover:bg-surface-1',
      'hover:border-border-muted',
      // 激活状态
      'data-[state=on]:bg-primary',
      'data-[state=on]:text-primary-foreground',
      'data-[state=on]:border-[#5C4033]',
      'data-[state=on]:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]',
    ],
  },
};
