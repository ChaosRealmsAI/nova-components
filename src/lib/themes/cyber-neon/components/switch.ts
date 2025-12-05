/**
 * Switch Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Toggle"
 * - Shape: Full radius (pill)
 * - Border: 1px border
 * - Active: Neon glow when activated
 * - Hover: Glow intensify
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const switchConfig = {
  slots: {
    /**
     * base: 开关轨道基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 全圆角、激活时发光
     */
    base: [
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center',
      'rounded-full border border-border',
      'transition-all duration-150 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:cursor-not-allowed disabled:opacity-40',
      'data-[state=checked]:bg-primary',
      'data-[state=checked]:border-primary',
      'data-[state=checked]:shadow-[0_0_8px_var(--primary),0_0_16px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
      'data-[state=unchecked]:bg-surface-2',
      'hover:data-[state=checked]:shadow-[0_0_12px_var(--primary),0_0_24px_color-mix(in_srgb,var(--primary)_50%,transparent)]',
    ],

    /**
     * thumb: 开关滑块
     */
    thumb: [
      'pointer-events-none block h-5 w-5 rounded-full',
      'bg-background shadow-[0_2px_4px_rgba(0,0,0,0.2)]',
      'ring-0 transition-all duration-150 ease-out',
      'data-[state=checked]:translate-x-5',
      'data-[state=unchecked]:translate-x-0',
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
        thumb: [
          // 继承 slots.thumb 的所有样式
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: ['h-6 w-11'],
        thumb: ['h-5 w-5', 'data-[state=checked]:translate-x-5'],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: ['h-5 w-9'],
        thumb: ['h-4 w-4', 'data-[state=checked]:translate-x-4'],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: ['h-7 w-14'],
        thumb: ['h-6 w-6', 'data-[state=checked]:translate-x-7'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
