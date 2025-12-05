/**
 * Popover Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Popover"
 * - Shape: 4px small radius
 * - Border: 1px neon glow border
 * - Shadow: Soft neon glow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const popoverConfig = {
  slots: {
    /**
     * content: 弹出内容
     * ─────────────────────────────────────────────────────────────────────
     * 4px 小圆角、霓虹边框、柔和发光
     */
    content: [
      'z-50 w-72 rounded-[4px]',
      'bg-surface-2 p-4',
      'text-foreground',
      'border border-primary',
      'shadow-[0_0_8px_color-mix(in_srgb,var(--primary)_30%,transparent),0_0_16px_color-mix(in_srgb,var(--primary)_20%,transparent)]',
      'transition-all duration-150 ease-out',
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
       * default: 默认弹出框
       */
      default: {
        content: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
