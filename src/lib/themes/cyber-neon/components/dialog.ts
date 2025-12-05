/**
 * Dialog Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Modal"
 * - Shape: Chamfer (large) - 16px diagonal cut
 * - Border: 1px neon glow border
 * - Shadow: Strong neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const dialogConfig = {
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
  },
  variants: {
    size: {
      /**
       * sm: 小尺寸
       */
      sm: {
        content: ['max-w-sm'],
      },

      /**
       * default: 默认尺寸
       */
      default: {
        content: ['max-w-lg'],
      },

      /**
       * lg: 大尺寸
       */
      lg: {
        content: ['max-w-2xl'],
      },

      /**
       * xl: 超大尺寸
       */
      xl: {
        content: ['max-w-4xl'],
      },

      /**
       * full: 全屏尺寸
       */
      full: {
        content: ['max-w-[calc(100%-2rem)]'],
      },
    },
  },
  defaultVariants: {
    size: 'default',
  },
};
