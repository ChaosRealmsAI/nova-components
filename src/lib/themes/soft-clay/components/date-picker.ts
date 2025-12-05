/**
 * Date Picker Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Clay Date Picker"
 * - Trigger: Neumorphic raised button
 * - Content: Inherits calendar neumorphic styling
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const datePickerConfig = {
  slots: {
    /**
     * trigger: 触发按钮
     */
    trigger: [
      'flex items-center justify-between',
      'w-full',
      'rounded-[16px]',
      'bg-surface-1',
      'px-4 py-2',
      'text-sm text-foreground',
      'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
      'hover:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:opacity-50',
      'transition-all duration-200 ease-in-out',
    ],

    /**
     * content: 弹出内容
     */
    content: [
      'rounded-[24px]',
      'bg-surface-2',
      'p-0',
      'shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
    ],

    /**
     * icon: 日历图标
     */
    icon: [
      'h-4 w-4',
      'opacity-50',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认日期选择器
       */
      default: {
        trigger: [],
        content: [],
        icon: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
