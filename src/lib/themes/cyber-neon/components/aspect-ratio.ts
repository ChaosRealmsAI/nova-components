/**
 * Aspect Ratio Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Aspect Ratio"
 * - Simple container with aspect ratio
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const aspectRatioConfig = {
  slots: {
    /**
     * base: 容器基础样式
     */
    base: [
      'relative w-full overflow-hidden',
    ],
  },
  variants: {
    ratio: {
      /**
       * 1/1: 正方形
       */
      '1/1': {
        base: [
          'aspect-square',
        ],
      },

      /**
       * 16/9: 宽屏
       */
      '16/9': {
        base: [
          'aspect-video',
        ],
      },

      /**
       * 4/3: 传统屏幕
       */
      '4/3': {
        base: [
          'aspect-[4/3]',
        ],
      },

      /**
       * 21/9: 超宽屏
       */
      '21/9': {
        base: [
          'aspect-[21/9]',
        ],
      },
    },
  },
  defaultVariants: {
    ratio: '16/9',
  },
};
