/**
 * Input OTP Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Clay OTP Input"
 * - Inherits Input inset neumorphic styling
 * - Individual slots with inset effect
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const inputOtpConfig = {
  slots: {
    /**
     * root: OTP 输入根容器
     */
    root: [
      'flex items-center gap-2',
    ],

    /**
     * container: 输入容器
     */
    container: [
      'flex items-center',
    ],

    /**
     * group: 输入组
     */
    group: [
      'flex items-center gap-2',
    ],

    /**
     * slot: 单个输入槽
     */
    slot: [
      'relative flex h-10 w-10 items-center justify-center',
      'rounded-[12px]',
      'bg-surface-1',
      'text-sm font-medium text-foreground',
      'shadow-[inset_4px_4px_8px_var(--shadow-dark),inset_-4px_-4px_8px_var(--shadow-light)]',
      'transition-all duration-200',
      'focus-within:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
      'focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2',
      'data-[active=true]:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
      'data-[active=true]:ring-2 data-[active=true]:ring-primary',
    ],

    /**
     * separator: 分隔符
     */
    separator: [
      'text-muted-foreground',
    ],

    /**
     * caret: 光标
     */
    caret: [
      'pointer-events-none inline-block',
    ],

    /**
     * caretLine: 光标线
     */
    caretLine: [
      'h-4 w-px bg-foreground',
      'animate-pulse',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认 OTP 输入
       */
      default: {
        root: [],
        container: [],
        group: [],
        slot: [],
        separator: [],
        caret: [],
        caretLine: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
