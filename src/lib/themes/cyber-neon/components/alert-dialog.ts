/**
 * Alert Dialog Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Alert Modal"
 * - Similar to Dialog but with alert styling
 * - Shape: Chamfer (large) - 16px diagonal cut
 * - Border: 1px neon glow border
 * - Shadow: Strong neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const alertDialogConfig = {
  slots: {
    /**
     * overlay: 遮罩层
     * ─────────────────────────────────────────────────────────────────────
     * 深色半透明遮罩 + 模糊效果
     */
    overlay: [
      'fixed inset-0 z-50 bg-black/60',
      '[backdrop-filter:blur(4px)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],

    /**
     * content: 对话框内容
     * ─────────────────────────────────────────────────────────────────────
     * 大切角、霓虹边框、强发光
     */
    content: [
      'fixed left-[50%] top-[50%] z-50 grid w-full',
      'translate-x-[-50%] translate-y-[-50%]',
      'gap-4 bg-surface-1 p-6',
      '[clip-path:polygon(16px_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,0_100%,0_16px)]',
      'border border-primary',
      'shadow-[0_0_12px_var(--primary),0_0_24px_color-mix(in_srgb,var(--primary)_50%,transparent),0_0_48px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'transition-all duration-150 ease-out',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ],

    /**
     * header: 头部区域
     */
    header: [
      'flex flex-col gap-1.5',
      'text-center sm:text-left',
    ],

    /**
     * title: 标题
     */
    title: [
      'text-lg font-semibold',
      'leading-none text-foreground',
    ],

    /**
     * description: 描述
     */
    description: [
      'text-sm text-muted-foreground',
    ],

    /**
     * footer: 底部区域
     */
    footer: [
      'flex flex-col-reverse gap-2',
      'sm:flex-row sm:justify-end',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认对话框
       */
      default: {
        overlay: [],
        content: [],
        header: [],
        title: [],
        description: [],
        footer: [],
      },

      /**
       * destructive: 危险对话框
       */
      destructive: {
        overlay: [],
        content: [
          'border-destructive',
          'shadow-[0_0_12px_var(--destructive),0_0_24px_color-mix(in_srgb,var(--destructive)_50%,transparent),0_0_48px_color-mix(in_srgb,var(--destructive)_30%,transparent)]',
        ],
        header: [],
        title: [
          'text-destructive',
        ],
        description: [],
        footer: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
