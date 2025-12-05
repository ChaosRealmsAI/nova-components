/**
 * Aspect Ratio Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Clay Aspect Ratio"
 * - Basic container with neumorphic styling
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const aspectRatioConfig = {
  slots: {
    /**
     * base: 容器基础样式
     */
    base: [
      'relative w-full overflow-hidden',
      'rounded-[24px]',
      'bg-surface-1',
    ],
  },
  variants: {
    ratio: {
      /**
       * 1/1: 正方形
       */
      '1/1': {
        base: [],
      },

      /**
       * 16/9: 宽屏
       */
      '16/9': {
        base: [],
      },

      /**
       * 4/3: 传统屏幕
       */
      '4/3': {
        base: [],
      },

      /**
       * 21/9: 超宽屏
       */
      '21/9': {
        base: [],
      },
    },
  },
  defaultVariants: {
    ratio: '16/9',
  },
};
