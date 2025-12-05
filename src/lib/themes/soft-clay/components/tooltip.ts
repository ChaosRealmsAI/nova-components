/**
 * Tooltip Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Floating Tip"
 * - Shape: 12px rounded corners
 * - Shadow: Soft raised neumorphic shadow
 * - No border: Pure shadow-based floating
 * - Animation: 200ms gentle transition
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const tooltipConfig = {
  slots: {
    /**
     * content: 提示内容
     * ─────────────────────────────────────────────────────────────────────
     * - 12px rounded corners
     * - Soft raised shadow (floating feel)
     * - bg-surface-2 (floating layer)
     * - 200ms gentle animation
     */
    content: [
      'z-50 overflow-hidden rounded-xl',
      'bg-surface-2 px-3 py-1.5',
      'text-xs text-foreground',
      'shadow-[6px_6px_12px_var(--shadow-dark),-6px_-6px_12px_var(--shadow-light)]',
      'animate-in fade-in-0 zoom-in-95 duration-200',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-200',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],

    /**
     * arrow: 箭头
     * ─────────────────────────────────────────────────────────────────────
     * Match surface-2 background
     */
    arrow: [
      'fill-surface-2',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        content: [],
        arrow: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
