/**
 * RadioGroup Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Radio"
 * - Shape: Full radius (circle)
 * - Border: 1px border
 * - Checked: Neon glow when selected
 * - Hover: Border brighten
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
     * ─────────────────────────────────────────────────────────────────────
     * 圆形、选中时发光
     */
    base: [
      'aspect-square h-4 w-4 rounded-full',
      'border border-border',
      'ring-offset-background',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-40',
      'transition-all duration-150 ease-out',
      'data-[state=checked]:border-primary',
      'data-[state=checked]:shadow-[0_0_6px_var(--primary),0_0_12px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'data-[state=unchecked]:bg-transparent',
      'hover:border-border-vivid',
      'hover:data-[state=checked]:shadow-[0_0_8px_var(--primary),0_0_16px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
    ],

    /**
     * indicator: 选中指示器
     */
    indicator: [
      'flex items-center justify-center',
      'text-primary',
    ],

    /**
     * icon: 选中图标
     */
    icon: [
      'h-2.5 w-2.5 fill-current',
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
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: ['h-4 w-4'],
        icon: ['h-2.5 w-2.5'],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: ['h-3 w-3'],
        icon: ['h-2 w-2'],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: ['h-5 w-5'],
        icon: ['h-3 w-3'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
