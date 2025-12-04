/**
 * Aspect Ratio 组件样式
 *
 * ═══════════════════════════════════════════════════════════════════════════════
 * ⭐ 核心：Slot 级别的主题定制，不是简单换色
 * ═══════════════════════════════════════════════════════════════════════════════
 */
export const aspectRatioConfig = {
  slots: {
    /**
     * base: 容器基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 自由发挥：
     * - 圆角
     * - 边框
     * - 阴影
     * - 背景（作为图片加载前的占位）
     */
    base: [
      'relative overflow-hidden',
      // Glass background as placeholder
      'bg-white/[0.08]',
      // Glass border
      'border border-white/[0.15]',
      // Large rounded corners
      'rounded-xl',
      // Soft shadow
      'shadow-[0_8px_32px_rgba(0,0,0,0.2)]',
    ],
  },

  variants: {
    ratio: {
      '1/1': {
        base: ['aspect-square'],
      },
      '16/9': {
        base: ['aspect-video'],
      },
      '4/3': {
        base: ['aspect-[4/3]'],
      },
      '21/9': {
        base: ['aspect-[21/9]'],
      },
    },
  },
};
