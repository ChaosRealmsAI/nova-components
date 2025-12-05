/**
 * Progress Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Inset Track + Raised Indicator" (凹槽轨道 + 凸起进度条)
 * - Shape: Full rounded (pill)
 * - Track: Inset shadow (凹入)
 * - Indicator: Raised shadow + primary color
 * - Transition: Smooth 200ms
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const progressConfig = {
  slots: {
    /**
     * base: 进度条轨道基础样式 - 内凹阴影
     */
    base: [
      'relative',
      'w-full',
      'overflow-hidden',
      // Shape - 全圆角 (pill)
      'rounded-[9999px]',
      // Background
      'bg-surface-1',
      // Shadow - 内凹阴影（轨道凹入）
      'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
    ],

    /**
     * indicator: 进度指示器 - 凸起效果
     */
    indicator: [
      'h-full',
      'flex items-center justify-center',
      // Shape - 全圆角
      'rounded-[9999px]',
      // Background
      'bg-primary',
      // Shadow - 凸起阴影
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      // Transition - 柔和过渡
      'transition-all duration-200 ease-in-out',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
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
        base: [
          'h-2',
          // 小尺寸用更轻的阴影
          'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
        ],
        indicator: [
          'shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'h-6',
          // 大尺寸用更强的阴影
          'shadow-[inset_5px_5px_10px_var(--shadow-dark),inset_-5px_-5px_10px_var(--shadow-light)]',
        ],
        indicator: [
          'shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
        ],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        base: [
          'h-8',
          'shadow-[inset_6px_6px_12px_var(--shadow-dark),inset_-6px_-6px_12px_var(--shadow-light)]',
        ],
        indicator: [
          'shadow-[5px_5px_10px_var(--shadow-dark),-5px_-5px_10px_var(--shadow-light)]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
