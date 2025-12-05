/**
 * Carousel Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Carousel"
 * - Simple carousel with neon navigation buttons
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const carouselConfig = {
  slots: {
    /**
     * root: 轮播根容器
     */
    root: [
      'relative w-full',
    ],

    /**
     * content: 轮播内容区
     */
    content: [
      'overflow-hidden',
    ],

    /**
     * item: 轮播项
     */
    item: [
      '-ml-4',
    ],

    /**
     * previous: 上一个按钮
     * ─────────────────────────────────────────────────────────────────────
     * 霓虹发光按钮
     */
    previous: [
      'absolute left-4 top-1/2 z-10 -translate-y-1/2',
      'h-8 w-8 rounded-[4px]',
      'border border-primary',
      'bg-surface-1',
      'text-foreground',
      'shadow-[0_0_6px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
      'transition-all duration-150',
      'hover:bg-surface-2',
      'hover:shadow-[0_0_8px_var(--primary),0_0_12px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-40',
    ],

    /**
     * next: 下一个按钮
     */
    next: [
      'absolute right-4 top-1/2 z-10 -translate-y-1/2',
      'h-8 w-8 rounded-[4px]',
      'border border-primary',
      'bg-surface-1',
      'text-foreground',
      'shadow-[0_0_6px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
      'transition-all duration-150',
      'hover:bg-surface-2',
      'hover:shadow-[0_0_8px_var(--primary),0_0_12px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-40',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认轮播
       */
      default: {
        root: [],
        content: [],
        item: [],
        previous: [],
        next: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
