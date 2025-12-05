/**
 * Date Picker Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Date Picker"
 * - Combines Input trigger with Calendar popover
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const datePickerConfig = {
  slots: {
    /**
     * trigger: 触发按钮
     */
    trigger: [
      'flex h-10 w-full items-center justify-between',
      'rounded-[4px]',
      'bg-surface-1 border border-border',
      'px-3 py-2 text-sm',
      'ring-offset-background',
      'placeholder:text-muted-foreground',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-40',
      'transition-all duration-150',
      'hover:border-border-vivid',
      'data-[state=open]:border-primary',
      'data-[state=open]:shadow-[0_0_0_1px_var(--primary),0_0_8px_var(--primary)]',
    ],

    /**
     * content: 弹出内容
     */
    content: [
      'w-auto p-0',
      'rounded-[4px] border border-primary',
      'bg-surface-1',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],

    /**
     * icon: 日历图标
     */
    icon: [
      'ml-auto h-4 w-4 opacity-50',
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
