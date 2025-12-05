/**
 * Alert Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Notification"
 * - Shape: 4px small radius
 * - Border: Left 3px neon glow border as type indicator
 * - Background: bg-surface-1
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const alertConfig = {
  slots: {
    /**
     * base: 警告框基础样式
     * ─────────────────────────────────────────────────────────────────────
     * 左侧 3px 发光边框作为类型指示器
     */
    base: [
      'relative w-full',
      'rounded-[4px]',
      'bg-surface-1',
      'px-4 py-3',
      'text-sm',
      'border-l-[3px]',
      '[&>svg]:size-4 [&>svg]:text-current',
    ],

    /**
     * icon: 图标样式
     */
    icon: [
      '[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
    ],

    /**
     * title: 标题样式
     */
    title: [
      'font-semibold',
      'leading-none',
      '[&>svg~*]:pl-7',
    ],

    /**
     * description: 描述样式
     */
    description: [
      'text-sm text-muted-foreground',
      'mt-1',
      '[&_p]:leading-relaxed',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认警告 - 霓虹粉左侧边框
       */
      default: {
        base: [
          'border-l-primary',
          'text-foreground',
          'shadow-[inset_3px_0_0_var(--primary),0_0_4px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
          '[&>svg]:text-primary',
        ],
        icon: [],
        title: [],
        description: [],
      },

      /**
       * destructive: 危险警告 - 霓虹红左侧边框
       */
      destructive: {
        base: [
          'border-l-destructive',
          'text-foreground',
          'shadow-[inset_3px_0_0_var(--destructive),0_0_4px_color-mix(in_srgb,var(--destructive)_20%,transparent)]',
          '[&>svg]:text-destructive',
        ],
        icon: [],
        title: [],
        description: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
