/**
 * Slider Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Inset Track with Raised Thumb"
 * - Track: Inset shadow (sunken groove)
 * - Range: Raised shadow (filled portion appears elevated)
 * - Thumb: Raised, pressable handle
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const sliderConfig = {
  slots: {
    /**
     * base: 滑块容器基础样式
     */
    base: [
      'relative flex w-full touch-none select-none items-center',
    ],

    /**
     * track: 滑块轨道
     * 轨道内凹，模拟凹槽
     */
    track: [
      'relative h-2 w-full grow overflow-hidden',
      // Shape - 全圆角
      'rounded-full',
      // Color - 与背景同色
      'bg-surface-1',
      // Shadow - 内凹阴影（核心特征）
      'shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
    ],

    /**
     * range: 已选择范围
     * 已填充部分凸起，形成对比
     */
    range: [
      'absolute h-full',
      // Color - primary
      'bg-primary',
      // Shadow - 凸起阴影
      'shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
    ],

    /**
     * thumb: 滑块手柄
     * 凸起，可被按压
     */
    thumb: [
      'block h-5 w-5',
      // Shape - 全圆角
      'rounded-full',
      // Color - 白色
      'bg-white',
      // Border
      'border-0',
      // Shadow - 凸起阴影
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Hover - 阴影增强
      'hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
      // Focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      // Active - 按压效果
      'active:shadow-[1px_1px_2px_var(--shadow-dark),-1px_-1px_2px_var(--shadow-light)]',
      // Disabled
      'disabled:pointer-events-none disabled:opacity-50',
    ],
  },
  variants: {
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
        track: [],
        range: [],
        thumb: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [],
        track: [
          'h-1.5',
          'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
        ],
        range: [
          'shadow-[1.5px_1.5px_3px_var(--shadow-dark),-1.5px_-1.5px_3px_var(--shadow-light)]',
        ],
        thumb: [
          'h-4 w-4',
          'shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
          'hover:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [],
        track: [
          'h-3',
          'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
        ],
        range: [
          'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
        ],
        thumb: [
          'h-6 w-6',
          'shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
          'hover:shadow-[5px_5px_10px_var(--shadow-dark),-5px_-5px_10px_var(--shadow-light)]',
        ],
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
};
