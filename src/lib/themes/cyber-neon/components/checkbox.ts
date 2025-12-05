/**
 * Checkbox Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Checkbox"
 * - Shape: 4px small radius
 * - Border: 1px border
 * - Checked: Neon glow when selected
 * - Hover: Border brighten
 * - Active: Inner glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const checkboxConfig = {
  slots: {
    /**
     * base: 复选框基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 4px 小圆角、选中时发光、hover 边框变亮、active 内发光
     */
    base: [
      'peer h-4 w-4 shrink-0 rounded-[4px]',
      'border border-border',
      'ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-40',
      'transition-all duration-150 ease-out',
      'data-[state=checked]:bg-primary',
      'data-[state=checked]:border-primary',
      'data-[state=checked]:text-primary-foreground',
      'data-[state=checked]:shadow-[0_0_6px_var(--primary),0_0_12px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'data-[state=unchecked]:bg-transparent',
      'hover:border-border-vivid',
      'hover:data-[state=checked]:shadow-[0_0_8px_var(--primary),0_0_16px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
      'active:shadow-[inset_0_0_8px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
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
      'h-4 w-4',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        base: [
          // 继承 slots.base 的所有样式
        ],
        indicator: [
          // 继承 slots.indicator 的所有样式
        ],
        icon: [
          // 继承 slots.icon 的所有样式
        ],
      },

      /**
       * destructive: 危险样式
       */
      destructive: {
        base: [
          'data-[state=checked]:bg-destructive',
          'data-[state=checked]:border-destructive',
          'data-[state=checked]:shadow-[0_0_6px_var(--destructive),0_0_12px_color-mix(in_srgb,var(--destructive)_30%,transparent)]',
          'hover:data-[state=checked]:shadow-[0_0_8px_var(--destructive),0_0_16px_color-mix(in_srgb,var(--destructive)_40%,transparent)]',
        ],
        indicator: [
          // 继承 slots.indicator 的所有样式
        ],
        icon: [
          // 继承 slots.icon 的所有样式
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: ['h-4 w-4'],
        icon: ['h-4 w-4'],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: ['h-3 w-3'],
        icon: ['h-3 w-3'],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: ['h-5 w-5'],
        icon: ['h-5 w-5'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
