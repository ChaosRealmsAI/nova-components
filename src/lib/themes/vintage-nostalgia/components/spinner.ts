/**
 * Spinner 组件 - Vintage Nostalgia 复古怀旧风格
 *
 * 设计理念：
 * 老式钟表齿轮转动效果
 * 机械质感的旋转指示器
 */
export const spinnerConfig = {
  slots: {
    base: [
      // 机械齿轮效果
      'animate-spin',
      // 暖色调
      'text-primary',
    ],
  },

  variants: {
    variant: {
      default: {
        base: 'text-primary',
      },

      secondary: {
        base: 'text-secondary',
      },

      muted: {
        base: 'text-muted-foreground',
      },
    },
  },
};
