/**
 * Toggle Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Toggle"
 * - Shape: 4px small radius
 * - Border: 1px border
 * - Active: Neon glow when on
 * - Hover: Glow intensify
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const toggleConfig = {
  slots: {
    /**
     * base: 切换按钮基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 激活时发光
     */
    base: [
      'inline-flex items-center justify-center',
      'rounded-[4px]',
      'border border-border',
      'bg-transparent',
      'text-sm font-medium',
      'text-foreground',
      'transition-all duration-150 ease-out',
      'hover:bg-surface-1',
      'hover:border-border-vivid',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-40',
      'data-[state=on]:bg-primary/20',
      'data-[state=on]:border-primary',
      'data-[state=on]:text-primary',
      'data-[state=on]:shadow-[0_0_6px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
      'hover:data-[state=on]:shadow-[0_0_8px_var(--primary),0_0_12px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
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
      },

      /**
       * outline: 轮廓样式
       */
      outline: {
        base: [
          'bg-transparent',
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: ['h-9 px-3'],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: ['h-8 px-2 text-xs'],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: ['h-10 px-4 text-base'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
