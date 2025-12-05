/**
 * Sonner (Toast) Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Clay Toast"
 * - Neumorphic raised shadow for toast notifications
 * - Semantic colors for different states
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const sonnerConfig = {
  slots: {
    /**
     * root: Toast 根容器
     */
    root: [
      'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden',
      'rounded-[16px]',
      'bg-surface-1',
      'p-4',
      'pr-8',
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      'transition-all',
      'data-[swipe=cancel]:translate-x-0',
      'data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]',
      'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
      'data-[swipe=move]:transition-none',
      'data-[state=open]:animate-in',
      'data-[state=closed]:animate-out',
      'data-[swipe=end]:animate-out',
      'data-[state=closed]:fade-out-80',
      'data-[state=closed]:slide-out-to-right-full',
      'data-[state=open]:slide-in-from-top-full',
    ],

    /**
     * title: 标题
     */
    title: [
      'text-sm font-semibold',
      'text-foreground',
    ],

    /**
     * description: 描述
     */
    description: [
      'text-sm opacity-90',
      'text-foreground',
    ],

    /**
     * actionButton: 操作按钮
     */
    actionButton: [
      'inline-flex h-8 shrink-0 items-center justify-center',
      'rounded-[12px]',
      'bg-primary text-primary-foreground',
      'px-3',
      'text-sm font-medium',
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'transition-all duration-200',
      'hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
      'hover:-translate-y-0.5',
      'focus:outline-none focus:ring-2 focus:ring-primary',
    ],

    /**
     * cancelButton: 取消按钮
     */
    cancelButton: [
      'inline-flex h-8 shrink-0 items-center justify-center',
      'rounded-[12px]',
      'bg-surface-2 text-foreground',
      'px-3',
      'text-sm font-medium',
      'shadow-[3px_3px_6px_var(--shadow-dark),-3px_-3px_6px_var(--shadow-light)]',
      'transition-all duration-200',
      'hover:shadow-[4px_4px_8px_var(--shadow-dark),-4px_-4px_8px_var(--shadow-light)]',
      'hover:-translate-y-0.5',
    ],

    /**
     * closeButton: 关闭按钮
     */
    closeButton: [
      'absolute right-2 top-2',
      'rounded-[8px]',
      'p-1',
      'text-foreground/50',
      'opacity-0 transition-opacity',
      'hover:text-foreground',
      'focus:opacity-100 focus:outline-none focus:ring-2',
      'group-hover:opacity-100',
    ],

    /**
     * success: 成功状态
     */
    success: [
      'border-l-4 border-l-success',
    ],

    /**
     * error: 错误状态
     */
    error: [
      'border-l-4 border-l-destructive',
    ],

    /**
     * warning: 警告状态
     */
    warning: [
      'border-l-4 border-l-warning',
    ],

    /**
     * info: 信息状态
     */
    info: [
      'border-l-4 border-l-primary',
    ],

    /**
     * icon: 图标
     */
    icon: [
      'h-5 w-5',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认 Toast
       */
      default: {
        root: [],
        title: [],
        description: [],
        actionButton: [],
        cancelButton: [],
        closeButton: [],
        success: [],
        error: [],
        warning: [],
        info: [],
        icon: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
