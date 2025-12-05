/**
 * Textarea Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Inset Text Area" (凹槽文本区)
 * - Shape: Large rounded corners (16px)
 * - Border: No border (neumorphic relies on shadows)
 * - Shadow: Inset shadow (simulates sunken surface)
 * - Focus: Enhanced inset shadow + ring
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const textareaConfig = {
  slots: {
    /**
     * base: 文本域基础样式
     */
    base: [
      // Layout
      'flex min-h-[80px] w-full',
      // Shape - 大圆角
      'rounded-[16px]',
      // Border - 新拟物无边框
      'border-0',
      // Color - 使用 surface-1
      'bg-surface-1 px-4 py-3',
      'text-sm text-foreground',
      // Shadow - 内凹阴影（核心特征）
      'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
      // Transition - 略慢，柔和
      'transition-all duration-200 ease-in-out',
      // Placeholder
      'placeholder:text-subtle-foreground',
      // Focus - 内阴影加深 + ring
      'focus-visible:outline-none',
      'focus-visible:shadow-[inset_6px_6px_12px_var(--shadow-dark),inset_-6px_-6px_12px_var(--shadow-light)]',
      'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0',
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:text-disabled-foreground',
      // Resize
      'resize-y',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认内凹样式
       */
      default: {
        base: [],
      },

      /**
       * filled: 填充样式（略浅背景）
       */
      filled: {
        base: [
          'bg-surface-2',
        ],
      },
    },
    textareaSize: {
      /**
       * default: 默认尺寸
       */
      default: {
        base: [],
      },

      /**
       * sm: 小尺寸
       */
      sm: {
        base: [
          'min-h-[60px]',
          'text-xs',
          'px-3 py-2',
          'rounded-[12px]',
          'shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
          'focus-visible:shadow-[inset_5px_5px_10px_var(--shadow-dark),inset_-5px_-5px_10px_var(--shadow-light)]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'min-h-[120px]',
          'text-base',
          'px-5 py-4',
          'rounded-[20px]',
          'shadow-[inset_5px_5px_10px_var(--shadow-dark),inset_-5px_-5px_10px_var(--shadow-light)]',
          'focus-visible:shadow-[inset_7px_7px_14px_var(--shadow-dark),inset_-7px_-7px_14px_var(--shadow-light)]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    textareaSize: 'default',
  },
};
