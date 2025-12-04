/**
 * Separator Component Style - Neo Brutalism
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Divider Block"
 * - Shape: Sharp line (no rounded).
 * - Color: Pure black.
 * - Thickness: 2px for boldness.
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const separatorConfig = {
  slots: {
    base: [
      'bg-black',
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