/**
 * Sonner Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Toast"
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * - Shadow: Soft neon glow
 * - Success/Error/Warning/Info: Different neon colors
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const sonnerConfig = {
  slots: {
    /**
     * root: Toast 根容器
     */
    root: [
      'group pointer-events-auto relative flex w-full items-center justify-between',
      'space-x-4 overflow-hidden rounded-[4px]',
      'border border-primary',
      'bg-surface-2 p-4 pr-8',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
      'transition-all',
      'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]',
      'data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[swipe=end]:animate-out data-[state=closed]:fade-out-80',
      'data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full',
      'data-[state=open]:sm:slide-in-from-bottom-full',
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
      'text-muted-foreground',
    ],

    /**
     * actionButton: 操作按钮
     */
    actionButton: [
      'inline-flex h-8 shrink-0 items-center justify-center',
      'rounded-[4px] border border-primary',
      'bg-transparent px-3 text-xs font-medium',
      'ring-offset-background transition-colors duration-150',
      'hover:bg-surface-1 hover:text-foreground',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_30%,transparent)]',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-40',
    ],

    /**
     * cancelButton: 取消按钮
     */
    cancelButton: [
      'inline-flex h-8 shrink-0 items-center justify-center',
      'rounded-[4px] border border-border',
      'bg-transparent px-3 text-xs font-medium',
      'ring-offset-background transition-colors duration-150',
      'hover:bg-surface-1 hover:text-foreground',
      'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
      'disabled:pointer-events-none disabled:opacity-40',
    ],

    /**
     * closeButton: 关闭按钮
     */
    closeButton: [
      'absolute right-2 top-2 rounded-[4px] p-1',
      'text-foreground/50 opacity-0 transition-opacity',
      'hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2',
      'group-hover:opacity-100',
      'group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50',
      'group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
    ],

    /**
     * success: 成功状态
     */
    success: [
      'border-success',
      'bg-surface-2',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--success)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--success)_20%,transparent)]',
    ],

    /**
     * error: 错误状态
     */
    error: [
      'border-destructive',
      'bg-surface-2',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--destructive)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--destructive)_20%,transparent)]',
    ],

    /**
     * warning: 警告状态
     */
    warning: [
      'border-warning',
      'bg-surface-2',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--warning)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--warning)_20%,transparent)]',
    ],

    /**
     * info: 信息状态
     */
    info: [
      'border-info',
      'bg-surface-2',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--info)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--info)_20%,transparent)]',
    ],

    /**
     * icon: 图标
     */
    icon: [
      'h-4 w-4',
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
