/**
 * Progress Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Progress Bar"
 * - Shape: Full radius (pill)
 * - Track: bg-surface-2
 * - Indicator: bg-primary + Neon glow with pulse animation
 * - Animation: Glow pulse effect
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const progressConfig = {
  slots: {
    /**
     * base: 进度条轨道基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 全圆角 (pill)、bg-surface-2
     */
    base: [
      'relative w-full overflow-hidden',
      'rounded-full',
      'bg-surface-2',
    ],

    /**
     * indicator: 进度指示器
     * ─────────────────────────────────────────────────────────────────────
     * bg-primary + 霓虹发光 + 脉冲动画
     */
    indicator: [
      'h-full w-full flex-1',
      'bg-primary',
      'rounded-full',
      'transition-all duration-300 ease-out',
      // 霓虹发光效果
      'shadow-[0_0_8px_var(--primary),0_0_16px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
      // 脉冲动画 (可选)
      'animate-pulse',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式 - primary color
       */
      default: {
        base: [],
        indicator: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: ['h-4'],
        indicator: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: ['h-2'],
        indicator: [
          // 小尺寸发光稍弱
          'shadow-[0_0_4px_var(--primary),0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: ['h-6'],
        indicator: [
          // 大尺寸发光增强
          'shadow-[0_0_10px_var(--primary),0_0_20px_color-mix(in_srgb,var(--primary)_50%,transparent)]',
        ],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        base: ['h-8'],
        indicator: [
          // 超大尺寸发光最强
          'shadow-[0_0_12px_var(--primary),0_0_24px_color-mix(in_srgb,var(--primary)_60%,transparent)]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
