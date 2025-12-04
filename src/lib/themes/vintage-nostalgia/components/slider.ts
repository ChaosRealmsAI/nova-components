/**
 * Slider 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式音量旋钮/打字机滚轮风格
 * 机械质感、粗线条
 */
export const sliderConfig = {
  slots: {
    base: 'relative flex w-full touch-none select-none items-center',

    track: [
      // 尺寸
      'relative h-2 w-full grow overflow-hidden',
      // 锐利边角
      'rounded-[1px]',
      // 背景
      'bg-surface-2',
      // 粗边框
      'border-2 border-border',
      // 内凹效果
      'shadow-[inset_0_1px_3px_rgba(44,24,16,0.2)]',
    ],

    range: [
      // 填充高度
      'absolute h-full',
      // 主色填充
      'bg-primary',
    ],

    thumb: [
      // 尺寸
      'block h-5 w-5',
      // 锐利边角
      'rounded-[2px]',
      // 背景
      'bg-background',
      // 粗边框
      'border-2 border-primary',
      // 阴影效果
      'shadow-[2px_2px_0_0_rgba(44,24,16,0.25)]',
      // 过渡
      'transition-all duration-150',
      // 焦点状态
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      // 禁用状态
      'disabled:pointer-events-none disabled:opacity-50',
      // Hover
      'hover:border-primary-vivid',
      'hover:shadow-[2px_2px_0_0_rgba(44,24,16,0.35)]',
    ],
  },
};
