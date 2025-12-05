/**
 * Input Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Data Entry"
 * - Shape: 4px small radius (not chamfer, for readability)
 * - Border: 1px muted border → focus 时霓虹发光
 * - Background: bg-surface-1 (not primary!)
 * - Focus: Strong neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const inputConfig = {
  slots: {
    /**
     * base: 输入框基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 小圆角、surface 背景、霓虹边框、focus 发光
     */
    base: [
      // Layout
      'flex w-full',
      
      // Shape - 4px 小圆角（不是切角，保证可读性）
      'rounded-[4px]',
      
      // Background - 使用 surface-1，不是 primary！
      'bg-surface-1',
      
      // Border - 默认低调边框
      'border border-border',
      
      // Typography
      'text-sm text-foreground',
      'px-3 py-2',
      
      // Transition
      'transition-all duration-150 ease-out',
      
      // Placeholder
      'placeholder:text-muted-foreground',
      
      // File input
      'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
      
      // Focus - 霓虹发光边框
      'focus-visible:outline-none',
      'focus-visible:border-primary',
      'focus-visible:shadow-[0_0_0_1px_var(--primary),0_0_8px_var(--primary),0_0_16px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
      
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-40',
      'disabled:border-border-muted',
      
      // Hover - 边框变亮
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
       * filled: 填充样式 - 更深的背景
       */
      filled: {
        base: [
          'bg-surface-2',
          'border-border-vivid',
        ],
      },
    },
    inputSize: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: ['h-10'],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: ['h-8 text-xs px-2 py-1'],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: ['h-12 text-base px-4 py-3'],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    inputSize: 'default',
  },
};
