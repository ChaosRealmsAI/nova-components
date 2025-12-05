/**
 * Label Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Label"
 * - Typography: Uppercase + wide tracking for cyber feel
 * - Transition: 150ms for color changes
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const labelConfig = {
  slots: {
    /**
     * base: 标签基础样式
     * ─────────────────────────────────────────────────────────────────────
     * - Uppercase + tracking-wide for cyber/tech feel
     * - 150ms transition
     */
    base: [
      'text-sm font-medium uppercase tracking-wide',
      'leading-none',
      'transition-colors duration-150',
      'peer-disabled:cursor-not-allowed',
      'peer-disabled:opacity-40',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        base: [
          'text-foreground',
        ],
      },

      /**
       * muted: 静音样式
       */
      muted: {
        base: [
          'text-muted-foreground',
        ],
      },

      /**
       * error: 错误样式
       */
      error: {
        base: [
          'text-destructive',
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [
          // 继承 slots.base 的所有样式
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'text-xs',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'text-base',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
