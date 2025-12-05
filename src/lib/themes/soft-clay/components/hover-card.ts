/**
 * Hover Card Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Floating Card with Soft Shadow"
 * - Shape: Large rounded corners (16px)
 * - Border: No border
 * - Shadow: Raised shadow (elevated card)
 * - Animation: Soft fade in/scale
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
     * 悬浮卡片，凸起阴影
     */
    content: [
      // Layout
      'z-50 w-64',
      // Shape - 大圆角
      'rounded-[16px]',
      // Border - 无边框
      'border-0',
      // Color - 使用 surface-2（悬浮层）
      'bg-surface-2 p-4',
      'text-foreground',
      // Shadow - 凸起阴影（浮起效果）
      'shadow-[8px_8px_16px_var(--shadow-dark),-8px_-8px_16px_var(--shadow-light)]',
      // Outline
      'outline-none',
      // Animation - 柔和出现
      'data-[state=open]:animate-in',
      'data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0',
      'data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95',
      'data-[state=open]:zoom-in-95',
      // Side animations
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
