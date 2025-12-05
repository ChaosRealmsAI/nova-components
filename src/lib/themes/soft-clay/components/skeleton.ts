/**
 * Skeleton Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Pulsing Placeholder" (柔和脉冲占位符)
 * - Shape: Rounded corners (16px)
 * - Background: surface-2 (略浅背景)
 * - Animation: Soft pulse with breathing effect (呼吸感)
 * - No harsh shimmer, gentle fade in/out
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const skeletonConfig = {
  slots: {
    /**
     * base: 骨架屏基础样式 - 柔和脉冲动画
     */
    base: [
      // Shape - 圆角
      'rounded-[16px]',
      // Background - 使用 surface-2
      'bg-surface-2',
      // Animation - 柔和脉冲（呼吸感）
      'animate-pulse',
      // Slight shadow for neumorphic feel
      'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认骨架 - 矩形
       */
      default: {
        base: [],
      },

      /**
       * circular: 圆形骨架 - 用于头像
       */
      circular: {
        base: [
          'rounded-[9999px]',
        ],
      },

      /**
       * text: 文本骨架 - 更细长
       */
      text: {
        base: [
          'h-4',
          'w-full',
          'rounded-[8px]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
