/**
 * Sheet Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Side Panel"
 * - Shape: Chamfer on inner edge
 * - Border: 1px neon glow border
 * - Shadow: Strong neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const sheetConfig = {
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
     * content: 内容
     * ─────────────────────────────────────────────────────────────────────
     * 切角、霓虹边框、强发光
     */
    content: [
      'fixed z-50 gap-4 bg-surface-1 p-6',
      'border border-primary',
      'shadow-[0_0_12px_var(--primary),0_0_24px_color-mix(in_srgb,var(--primary)_50%,transparent)]',
      'transition-all duration-150 ease-out',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:duration-300 data-[state=open]:duration-500',
    ],

    /**
     * close: 关闭按钮
     */
    close: [
      'absolute right-4 top-4',
      'rounded-[4px] opacity-70',
      'ring-offset-background transition-all duration-150',
      'hover:opacity-100 hover:bg-surface-2',
      'hover:border-primary hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:pointer-events-none',
      'text-foreground',
    ],

    /**
     * header: 头部区域
     */
    header: [
      'flex flex-col space-y-2 text-center sm:text-left',
    ],

    /**
     * footer: 底部区域
     */
    footer: [
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    ],

    /**
     * title: 标题
     */
    title: [
      'text-lg font-semibold text-foreground',
    ],

    /**
     * description: 描述
     */
    description: [
      'text-sm text-muted-foreground',
    ],
  },
  variants: {
    side: {
      /**
       * right: 右侧
       */
      right: {
        content: [
          'inset-y-0 right-0 h-full w-3/4 border-l',
          '[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,0_16px)]',
          'sm:max-w-sm',
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
        ],
      },

      /**
       * left: 左侧
       */
      left: {
        content: [
          'inset-y-0 left-0 h-full w-3/4 border-r',
          '[clip-path:polygon(16px_0,100%_0,100%_100%,calc(100%-16px)_100%)]',
          'sm:max-w-sm',
          'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
        ],
      },

      /**
       * top: 顶部
       */
      top: {
        content: [
          'inset-x-0 top-0 border-b',
          '[clip-path:polygon(0_16px,100%_16px,100%_100%,0_100%)]',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        ],
      },

      /**
       * bottom: 底部
       */
      bottom: {
        content: [
          'inset-x-0 bottom-0 border-t',
          '[clip-path:polygon(0_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,16px_100%,0_calc(100%-16px))]',
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        ],
      },
    },
  },
  defaultVariants: {
    side: 'right',
  },
};
