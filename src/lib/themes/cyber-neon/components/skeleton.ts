/**
 * Skeleton Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Skeleton with Scanline"
 * - Shape: 4px small radius
 * - Background: bg-surface-2
 * - Animation: Scanline effect (neon gradient sweeping left to right)
 * - Glow: Neon color gradient scan
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const skeletonConfig = {
  slots: {
    /**
     * base: 骨架屏基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 扫描线动画 (从左到右的霓虹光线扫过)
     */
    base: [
      // Shape
      'rounded-[4px]',

      // Background
      'bg-surface-2',

      // Position for pseudo-element
      'relative overflow-hidden',

      // Pseudo-element for scanline effect
      'before:absolute before:inset-0',
      'before:bg-gradient-to-r',
      'before:from-transparent',
      'before:via-primary/30',
      'before:to-transparent',
      'before:translate-x-[-100%]',
      'before:animate-[scanline_2s_ease-in-out_infinite]',

      // Subtle pulse for additional effect
      'animate-pulse',
    ],
  },

  variants: {
    variant: {
      /**
       * default: 默认骨架
       */
      default: {
        base: [],
      },

      /**
       * circular: 圆形骨架
       */
      circular: {
        base: [
          'rounded-full',
        ],
      },

      /**
       * text: 文本骨架 - 文本行高度
       */
      text: {
        base: [
          'h-4 w-full',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
