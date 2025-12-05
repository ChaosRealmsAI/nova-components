/**
 * Hover Card Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Hover Card"
 * - Similar to Popover but triggered by hover
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const hoverCardConfig = {
  slots: {
    /**
     * root: 悬停卡片根容器
     */
    root: [],

    /**
     * trigger: 触发区域
     */
    trigger: [],

    /**
     * content: 卡片内容
     */
    content: [
      'z-50 w-64 rounded-[4px]',
      'bg-surface-2 p-4',
      'text-foreground',
      'border border-primary',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
      'text-sm',
      'outline-none',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认悬停卡片
       */
      default: {
        root: [],
        trigger: [],
        content: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
