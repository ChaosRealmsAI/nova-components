/**
 * Switch Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Pressable Toggle with Inset Track"
 * - Shape: Full rounded (pill)
 * - Border: No border (neumorphic relies on shadows)
 * - Shadow: Track is inset, thumb is raised
 * - Checked: Thumb moves, track changes color
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const switchConfig = {
  slots: {
    /**
     * base: 开关轨道基础样式
     * 轨道始终内凹，模拟凹槽
     */
    base: [
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center',
      // Shape - 全圆角（pill）
      'rounded-full',
      // Border - 无边框
      'border-0',
      // Color - 未选中与背景同色
      'bg-surface-1',
      // Shadow - 轨道内凹（核心特征）
      'shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Focus
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50',
      // Checked - 轨道变为 primary 色，仍保持内凹
      'data-[state=checked]:bg-primary',
      'data-[state=checked]:shadow-[inset_3px_3px_6px_rgba(0,0,0,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.3)]',
    ],

    /**
     * thumb: 开关滑块
     * 滑块凸起，可被按下
     */
    thumb: [
      'pointer-events-none block h-5 w-5',
      // Shape - 全圆角
      'rounded-full',
      // Color - 白色
      'bg-white',
      // Shadow - 凸起阴影
      'shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
      // Position - 默认位置
      'translate-x-0.5',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Active - 按压效果（阴影减弱）
      'active:shadow-[1px_1px_2px_var(--shadow-dark),-1px_-1px_2px_var(--shadow-light)]',
      // Checked - 移动到右侧
      'data-[state=checked]:translate-x-5',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        base: [],
        thumb: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
        thumb: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'h-5 w-9',
          'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
          'data-[state=checked]:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15),inset_-2px_-2px_4px_rgba(255,255,255,0.3)]',
        ],
        thumb: [
          'h-4 w-4',
          'shadow-[1.5px_1.5px_3px_var(--shadow-dark),-1.5px_-1.5px_3px_var(--shadow-light)]',
          'data-[state=checked]:translate-x-4',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'h-7 w-14',
          'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
          'data-[state=checked]:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),inset_-4px_-4px_8px_rgba(255,255,255,0.3)]',
        ],
        thumb: [
          'h-6 w-6',
          'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
          'data-[state=checked]:translate-x-7',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
