/**
 * Input OTP Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon OTP Input"
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * - Focus: Strong neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const inputOtpConfig = {
  slots: {
    /**
     * root: OTP 输入根容器
     */
    root: [],

    /**
     * container: 输入容器
     */
    container: [
      'flex items-center gap-2',
    ],

    /**
     * group: 输入组
     */
    group: [
      'flex items-center',
    ],

    /**
     * slot: 单个输入槽
     * ─────────────────────────────────────────────────────────────────────
     * focus 时发光
     */
    slot: [
      'relative flex h-10 w-10 items-center justify-center',
      'border-y border-r border-border',
      'border-l border-l-border first:border-l',
      'first:rounded-l-[4px] last:rounded-r-[4px]',
      'bg-surface-1 text-center text-sm',
      'transition-all duration-150',
      'shadow-[0_0_2px_color-mix(in_srgb,var(--border)_10%,transparent)]',
      'focus-within:z-10',
      'focus-within:border-primary',
      'focus-within:shadow-[0_0_0_1px_var(--primary),0_0_8px_var(--primary),0_0_16px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
    ],

    /**
     * separator: 分隔符
     */
    separator: [
      'mx-2 text-muted-foreground',
    ],

    /**
     * caret: 光标
     */
    caret: [
      'absolute inset-0 flex items-center justify-center',
    ],

    /**
     * caretLine: 光标线
     */
    caretLine: [
      'h-4 w-px animate-caret-blink',
      'bg-primary',
      'shadow-[0_0_4px_var(--primary)]',
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
