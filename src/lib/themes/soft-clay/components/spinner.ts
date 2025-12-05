/**
 * Spinner Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Rotating Spinner" (柔和旋转加载器)
 * - Shape: Circular (border-based spinner)
 * - Color: Primary color
 * - Animation: Soft rotation (not too fast)
 * - Transition: Smooth 200ms
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const spinnerConfig = {
  slots: {
    /**
     * base: 加载指示器基础样式 - 柔和旋转
     */
    base: [
      // Shape - 圆形
      'rounded-[9999px]',
      // Border - 使用 border 创建圆环
      'border-4 border-solid',
      // Animation - 柔和旋转
      'animate-spin',
      // 减慢动画速度，更柔和
      '[animation-duration:800ms]',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认加载器 - primary 色
       */
      default: {
        base: [
          'border-surface-2',
          'border-t-primary',
        ],
      },

      /**
       * secondary: 次要加载器 - secondary 色
       */
      secondary: {
        base: [
          'border-surface-2',
          'border-t-secondary',
        ],
      },

      /**
       * muted: 柔和加载器 - muted 色
       */
      muted: {
        base: [
          'border-surface-2',
          'border-t-muted-foreground',
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [
          'h-8 w-8',
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'h-4 w-4',
          'border-2',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'h-12 w-12',
          'border-4',
        ],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        base: [
          'h-16 w-16',
          'border-4',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
