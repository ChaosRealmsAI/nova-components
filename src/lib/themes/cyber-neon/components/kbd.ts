/**
 * Kbd Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Keyboard Key"
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * - Shadow: Double neon glow (inset + outer)
 * - Typography: Monospace + uppercase for tech feel
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const kbdConfig = {
  slots: {
    /**
     * base: 键盘按键基础样式
     * ─────────────────────────────────────────────────────────────────────
     * - 4px rounded corners
     * - 1px neon border with glow
     * - Inset + outer glow for depth
     * - Monospace font + uppercase
     */
    base: [
      'pointer-events-none inline-flex h-5 select-none items-center gap-1',
      'rounded-[4px] border border-primary',
      'bg-surface-2 px-1.5',
      'font-mono text-[10px] font-medium uppercase tracking-wide',
      'text-foreground',
      'shadow-[inset_0_0_6px_color-mix(in_srgb,var(--primary)_10%,transparent),0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent),0_0_8px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
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
          'border-border',
          'shadow-[0_0_3px_color-mix(in_srgb,var(--border)_20%,transparent)]',
        ],
      },
    },
    size: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [
          // 继承 slots.base 的所有样式
        ],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'h-4 px-1 text-[9px]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'h-6 px-2 text-xs',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
};
