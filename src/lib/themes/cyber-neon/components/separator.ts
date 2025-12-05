/**
 * Separator Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Divider"
 * - 1px glowing line
 * - Subtle neon glow effect
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const separatorConfig = {
  slots: {
    /**
     * base: 分隔线基础样式
     * ─────────────────────────────────────────────────────────────────────
     * - 1px line with bg-border
     * - Subtle neon glow shadow
     */
    base: [
      'shrink-0 bg-border',
      'shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_15%,transparent)]',
    ],
  },
  variants: {
    orientation: {
      /**
       * horizontal: 水平分隔线
       */
      horizontal: {
        base: [
          'h-px w-full',
        ],
      },

      /**
       * vertical: 垂直分隔线
       */
      vertical: {
        base: [
          'h-full w-px',
        ],
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
};
