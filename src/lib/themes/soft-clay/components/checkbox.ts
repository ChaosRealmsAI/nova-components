/**
 * Checkbox Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Pressable Check Box"
 * - Shape: Small rounded corners (8px)
 * - Border: No border (neumorphic relies on shadows)
 * - Shadow: Inset shadow when unchecked, raised when checked
 * - Checked: bg-primary with raised effect
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const checkboxConfig = {
  slots: {
    /**
     * base: 复选框基础样式
     * 未选中：内凹阴影
     * 选中：凸起阴影 + primary 背景
     */
    base: [
      'peer h-5 w-5 shrink-0',
      // Shape - 小圆角
      'rounded-[8px]',
      // Border - 无边框
      'border-0',
      // Color - 与背景同色
      'bg-surface-1',
      // Shadow - 未选中时内凹
      'shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
      // Transition
      'transition-all duration-200 ease-in-out',
      // Focus
      'ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50',
      // Checked - 变为凸起 + primary
      'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      'data-[state=checked]:shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      // Active - 按压效果（内凹）
      'active:shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
    ],

    /**
     * indicator: 选中指示器
     */
    indicator: [
      'flex items-center justify-center text-current',
    ],

    /**
     * icon: 选中图标
     */
    icon: [
      'h-3.5 w-3.5',
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

      /**
       * destructive: 危险样式（使用 destructive 色）
       */
      destructive: {
        base: [
          'data-[state=checked]:bg-destructive',
          'data-[state=checked]:text-destructive-foreground',
        ],
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
        icon: ['h-3.5 w-3.5'],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'h-4 w-4',
          'rounded-[6px]',
          'shadow-[inset_2px_2px_4px_var(--shadow-dark),inset_-2px_-2px_4px_var(--shadow-light)]',
          'data-[state=checked]:shadow-[2px_2px_4px_var(--shadow-dark),-2px_-2px_4px_var(--shadow-light)]',
        ],
        icon: ['h-3 w-3'],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'h-6 w-6',
          'rounded-[10px]',
          'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
          'data-[state=checked]:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
        ],
        icon: ['h-4 w-4'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
