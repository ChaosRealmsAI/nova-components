/**
 * Input Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Inset Input Area" (凹槽输入区)
 * - Shape: Large rounded corners (16px)
 * - Border: No border (neumorphic relies on shadows)
 * - Shadow: Inset shadow (simulates sunken surface)
 * - Focus: Enhanced inset shadow + ring
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const inputConfig = {
  slots: {
    base: [
      // Layout
      'flex w-full',
      // Shape - 大圆角
      'rounded-[16px]',
      // Border - 新拟物无边框
      'border-0',
      // Color - 使用 surface-1
      'bg-surface-1 px-4 py-2',
      'text-sm text-foreground',
      // Shadow - 内凹阴影（核心特征）
      'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
      // Transition - 略慢，柔和
      'transition-all duration-200 ease-in-out',
      // File input
      'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
      // Placeholder
      'placeholder:text-subtle-foreground',
      // Focus - 内阴影加深 + ring
      'focus-visible:outline-none',
      'focus-visible:shadow-[inset_6px_6px_12px_var(--shadow-dark),inset_-6px_-6px_12px_var(--shadow-light)]',
      'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0',
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-50 disabled:text-disabled-foreground',
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
        base: [
          'h-8',
          'text-xs',
          'px-3',
          'rounded-[12px]',
          'shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
        ],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        base: [
          'h-12',
          'text-base',
          'px-5',
          'rounded-[20px]',
          'shadow-[inset_5px_5px_10px_var(--shadow-dark),inset_-5px_-5px_10px_var(--shadow-light)]',
        ],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    inputSize: 'default',
  },
};
