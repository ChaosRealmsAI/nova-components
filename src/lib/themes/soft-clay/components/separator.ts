/**
 * Separator Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Inset Groove Line"
 * - Neumorphic inset effect (carved into surface)
 * - Gradient from dark to light simulates depth
 * - No solid border, only shadow
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const separatorConfig = {
  slots: {
    /**
     * base: 分隔线基础样式
     * ─────────────────────────────────────────────────────────────────────
     * - Inset shadow effect (carved groove)
     * - Background transparent
     * - 2px height for better groove effect
     */
    base: [
      'shrink-0 bg-transparent',
      'shadow-[inset_0_1px_1px_var(--shadow-dark),inset_0_-1px_1px_var(--shadow-light)]',
    ],
  },
  variants: {
    orientation: {
      /**
       * horizontal: 水平分隔线
       */
      horizontal: {
        base: [
          'h-[2px] w-full',
        ],
      },

      /**
       * vertical: 垂直分隔线
       */
      vertical: {
        base: [
          'h-full w-[2px]',
        ],
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
};
