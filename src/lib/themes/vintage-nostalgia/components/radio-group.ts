/**
 * RadioGroup 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式表单单选按钮
 * 圆形但带有复古边框
 */
export const radioGroupConfig = {
  slots: {
    base: 'grid gap-2',
  },
};

export const radioGroupItemConfig = {
  slots: {
    base: [
      // 尺寸
      'aspect-square h-5 w-5',
      // 圆形
      'rounded-full',
      // 粗边框
      'border-2 border-border',
      // 内凹效果
      'shadow-[inset_0_1px_2px_rgba(44,24,16,0.15)]',
      // 背景
      'bg-background',
      // 过渡
      'transition-all duration-150',
      // 焦点状态
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      // 禁用状态
      'disabled:cursor-not-allowed disabled:opacity-50',
      // 选中状态
      'data-[state=checked]:border-primary',
    ],

    indicator: 'flex items-center justify-center',

    icon: [
      // 选中点
      'h-2.5 w-2.5 fill-primary',
    ],
  },
};
