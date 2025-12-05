/**
 * Carousel Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Clay Carousel"
 * - Navigation: Neumorphic raised buttons
 * - Items: Smooth transitions
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const carouselConfig = {
  slots: {
    /**
     * root: 轮播根容器
     */
    root: [
      'relative',
    ],

    /**
     * content: 轮播内容区
     */
    content: [
      'overflow-hidden',
      'rounded-[24px]',
    ],

    /**
     * item: 轮播项
     */
    item: [
      'min-w-0 shrink-0 grow-0 basis-full',
    ],

    /**
     * previous: 上一个按钮
     */
    previous: [
      'absolute left-4 top-1/2 -translate-y-1/2',
      'h-10 w-10',
      'inline-flex items-center justify-center',
      'rounded-[16px]',
      'bg-surface-1 text-foreground',
      'shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
      'hover:shadow-[5px_5px_10px_var(--shadow-dark),-5px_-5px_10px_var(--shadow-light)]',
      'hover:-translate-y-[calc(50%_+_2px)]',
      'active:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
      'disabled:opacity-40',
      'transition-all duration-200 ease-in-out',
    ],

    /**
     * next: 下一个按钮
     */
    next: [
      'absolute right-4 top-1/2 -translate-y-1/2',
      'h-10 w-10',
      'inline-flex items-center justify-center',
      'rounded-[16px]',
      'bg-surface-1 text-foreground',
      'shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
      'hover:shadow-[5px_5px_10px_var(--shadow-dark),-5px_-5px_10px_var(--shadow-light)]',
      'hover:-translate-y-[calc(50%_+_2px)]',
      'active:shadow-[inset_3px_3px_6px_var(--shadow-dark),inset_-3px_-3px_6px_var(--shadow-light)]',
      'disabled:opacity-40',
      'transition-all duration-200 ease-in-out',
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
