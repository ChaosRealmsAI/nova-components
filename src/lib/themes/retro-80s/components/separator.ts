/**
 * Separator Component Style - Retro 80s
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Divider"
 * - Color: Neon primary color
 * - Thickness: 2px
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const separatorConfig = {
  slots: {
    base: [
      'bg-primary',
    ],
  },
  variants: {
    orientation: {
      horizontal: {
        base: [
          'h-[2px] w-full',
        ],
      },
      vertical: {
        base: [
          'h-full w-[2px]',
        ],
      },
    },
  },
};
