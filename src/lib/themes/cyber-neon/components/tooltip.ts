/**
 * Tooltip Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Tooltip"
 * - Shape: 4px small radius
 * - Border: 1px neon border
 * - Shadow: Medium neon glow
 * - Animation: 150ms fast cyber transition
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const tooltipConfig = {
  slots: {
    /**
     * content: 提示内容
     * ─────────────────────────────────────────────────────────────────────
     * - 4px rounded corners
     * - 1px neon border with medium glow
     * - bg-surface-2 for floating layer
     * - Fast 150ms animation
     */
    content: [
      'z-50 overflow-hidden rounded-[4px]',
      'bg-surface-2 px-3 py-1.5',
      'text-xs text-foreground',
      'border border-primary',
      'shadow-[inset_0_0_8px_color-mix(in_srgb,var(--primary)_8%,transparent),0_0_6px_color-mix(in_srgb,var(--primary)_30%,transparent),0_0_12px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
      'animate-in fade-in-0 zoom-in-95 duration-150',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:duration-150',
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
