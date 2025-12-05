/**
 * Radio Group Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Pressable Radio Circle"
 * - Shape: Full rounded (circle)
 * - Border: No border (neumorphic relies on shadows)
 * - Shadow: Inset shadow when unchecked
 * - Checked: Inner raised dot
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const radioGroupConfig = {
  slots: {
    /**
     * base: 单选组容器基础样式
     */
    base: [
      'grid gap-2',
    ],
  },
};

export const radioGroupItemConfig = {
  slots: {
    /**
     * base: 单选项基础样式
     * 未选中：内凹阴影
     * 选中：内部圆点凸起
     */
    base: [
      'aspect-square h-5 w-5',
      // Shape - 全圆角
      'rounded-full',
      // Border - 无边框
      'border-0',
      // Color - 与背景同色
      'bg-surface-1',
      // Shadow - 内凹（始终内凹，靠内部圆点表示选中）
      'shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Focus
      'ring-offset-background',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50',
      // Text color
      'text-primary',
    ],

    /**
     * indicator: 选中指示器（内部圆点）
     */
    indicator: [
      'flex items-center justify-center',
    ],

    /**
     * icon: 选中图标（圆点）
     */
    icon: [
      'h-2.5 w-2.5 fill-current',
      // 圆点凸起效果
      'rounded-full bg-primary',
      'shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
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
        icon: [],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
        icon: ['h-2.5 w-2.5'],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'h-4 w-4',
          'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
        ],
        icon: [
          'h-2 w-2',
          'shadow-[1px_1px_2px_var(--shadow-dark),-1px_-1px_2px_var(--shadow-light)]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'h-6 w-6',
          'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
        ],
        icon: [
          'h-3 w-3',
          'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
