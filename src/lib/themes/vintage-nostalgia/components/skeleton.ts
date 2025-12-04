/**
 * Skeleton 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式纸张加载占位效果
 * 柔和的脉冲动画
 */
export const skeletonConfig = {
  slots: {
    base: [
      // 基础动画
      'animate-pulse',
      // 锐利边角
      'rounded-[2px]',
      // 背景
      'bg-surface-2',
      // 边框
      'border border-border-muted',
    ],
  },

  variants: {
    variant: {
      default: {
        base: '',
      },

      circular: {
        base: 'rounded-full',
      },

      text: {
        base: 'h-4',
      },
    },
  },
};
