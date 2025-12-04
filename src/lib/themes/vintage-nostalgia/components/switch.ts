/**
 * Switch 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式拨动开关
 * 类似打字机上的机械开关
 */
export const switchConfig = {
  slots: {
    base: [
      // 尺寸
      'inline-flex h-6 w-11 shrink-0 cursor-pointer items-center',
      // 锐利边角（稍微圆润一点）
      'rounded-[3px]',
      // 粗边框
      'border-2 border-border',
      // 内凹效果
      'shadow-[inset_0_2px_4px_rgba(44,24,16,0.15)]',
      // 过渡
      'transition-all duration-200',
      // 焦点状态
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      // 禁用状态
      'disabled:cursor-not-allowed disabled:opacity-50',
      // 关闭状态背景
      'data-[state=unchecked]:bg-surface-2',
      // 打开状态
      'data-[state=checked]:bg-primary',
      'data-[state=checked]:border-[#5C4033]',
    ],

    thumb: [
      // 尺寸
      'pointer-events-none block h-5 w-5',
      // 锐利边角
      'rounded-[2px]',
      // 背景
      'bg-background',
      // 粗边框
      'border border-border',
      // 阴影效果
      'shadow-[1px_1px_0_0_rgba(44,24,16,0.2)]',
      // 过渡
      'transition-transform duration-200',
      // 位置
      'data-[state=unchecked]:translate-x-0',
      'data-[state=checked]:translate-x-5',
    ],
  },
};
