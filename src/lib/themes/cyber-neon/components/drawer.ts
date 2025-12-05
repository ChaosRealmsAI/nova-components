/**
 * Drawer Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Drawer"
 * - Similar to Sheet but mobile-first
 * - Shape: Chamfer on inner edge
 * - Border: 1px neon glow border
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const drawerConfig = {
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
     * content: 抽屉内容
     * ─────────────────────────────────────────────────────────────────────
     * 切角、霓虹边框
     */
    content: [
      'fixed z-50 gap-4 bg-surface-1 p-4',
      'border border-primary',
      'shadow-[0_0_12px_var(--primary),0_0_24px_color-mix(in_srgb,var(--primary)_50%,transparent)]',
      'transition-all duration-150 ease-out',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:duration-300 data-[state=open]:duration-500',
    ],

    /**
     * header: 头部区域
     */
    header: [
      'grid gap-1.5 text-center sm:text-left',
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

    /**
     * footer: 底部区域
     */
    footer: [
      'mt-auto flex flex-col gap-2',
    ],

    /**
     * handle: 拖拽手柄
     */
    handle: [
      'mx-auto mt-4 h-2 w-[100px]',
      'rounded-full bg-border',
    ],
  },
  variants: {
    /**
     * direction: 抽屉方向
     */
    direction: {
      /**
       * bottom: 从底部滑出
       */
      bottom: {
        content: [
          'inset-x-0 bottom-0 border-t',
          '[clip-path:polygon(0_0,100%_0,100%_calc(100%-16px),calc(100%-16px)_100%,16px_100%,0_calc(100%-16px))]',
          'h-auto max-h-[96vh]',
          'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        ],
      },

      /**
       * top: 从顶部滑出
       */
      top: {
        content: [
          'inset-x-0 top-0 border-b',
          '[clip-path:polygon(0_16px,100%_16px,100%_100%,0_100%)]',
          'h-auto max-h-[96vh]',
          'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        ],
      },

      /**
       * left: 从左侧滑出
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
       * right: 从右侧滑出
       */
      right: {
        content: [
          'inset-y-0 right-0 h-full w-3/4 border-l',
          '[clip-path:polygon(0_0,100%_0,100%_100%,0_100%,0_16px)]',
          'sm:max-w-sm',
          'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
        ],
      },
    },
  },
  defaultVariants: {
    direction: 'bottom',
  },
};
