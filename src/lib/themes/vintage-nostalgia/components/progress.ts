/**
 * Progress 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式加载进度条
 * 类似打字机墨带进度
 */
export const progressConfig = {
  slots: {
    base: [
      // 尺寸
      'relative h-4 w-full overflow-hidden',
      // 锐利边角
      'rounded-[2px]',
      // 背景
      'bg-surface-2',
      // 粗边框
      'border-2 border-border',
      // 内凹效果
      'shadow-[inset_0_1px_3px_rgba(44,24,16,0.15)]',
    ],

    indicator: [
      // 填充
      'h-full w-full flex-1',
      // 主色
      'bg-primary',
      // 过渡
      'transition-all duration-300',
    ],
  },
};
