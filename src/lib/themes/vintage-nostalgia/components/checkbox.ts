/**
 * Checkbox 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式表单复选框
 * 方形、粗边框、打字机勾选标记
 */
export const checkboxConfig = {
  slots: {
    base: [
      // 尺寸
      'h-5 w-5',
      // 锐利边角
      'rounded-[1px]',
      // 粗边框
      'border-2 border-border',
      // 内凹效果
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.15)]',
      // 过渡
      'transition-all duration-150',
      // 背景
      'bg-background',
      // 焦点状态
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      // 禁用状态
      'disabled:cursor-not-allowed disabled:opacity-50',
      // 选中状态
      'data-[state=checked]:bg-primary',
      'data-[state=checked]:border-[#5C4033]',
      'data-[state=checked]:shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]',
    ],

    indicator: [
      'flex items-center justify-center text-primary-foreground',
      'font-bold',
    ],
  },
};
