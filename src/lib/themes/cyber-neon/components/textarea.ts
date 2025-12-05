/**
 * Textarea Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Text Area"
 * - Shape: 4px small radius
 * - Border: 1px muted border → focus 时霓虹发光
 * - Background: bg-surface-1
 * - Focus: Strong neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const textareaConfig = {
  slots: {
    /**
     * base: 文本域基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 与 Input 类似的样式，但支持多行
     */
    base: [
      'flex min-h-[80px] w-full',
      'rounded-[4px]',
      'bg-surface-1',
      'border border-border',
      'px-3 py-2',
      'text-sm text-foreground',
      'transition-all duration-150 ease-out',
      'placeholder:text-muted-foreground',
      'focus-visible:outline-none',
      'focus-visible:border-primary',
      'focus-visible:shadow-[0_0_0_1px_var(--primary),0_0_8px_var(--primary),0_0_16px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
      'disabled:cursor-not-allowed disabled:opacity-40',
      'disabled:border-border-muted',
      'resize-none',
      'hover:border-border-vivid',
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
       * filled: 填充样式
       */
      filled: {
        base: [
          'bg-surface-2',
          'border-border-vivid',
        ],
      },
    },
    textareaSize: {
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
          'min-h-[60px] text-xs px-2 py-1',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'min-h-[120px] text-base px-4 py-3',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    textareaSize: 'default',
  },
};
