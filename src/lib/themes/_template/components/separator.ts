/**
 * Separator Component Theme Config
 *
 * Visual divider between sections.
 *
 * Slots:
 * - base: Separator line
 *
 * Variants:
 * - orientation: Direction (horizontal, vertical)
 */
export const separatorConfig = {
  slots: {
    /**
     * base: Separator line
     *
     * Common styles:
     * - Background (bg-border)
     * - Border radius (rounded-full for pill effect)
     */
    base: [
      // TODO: 'bg-border'
    ],
  },

  variants: {
    orientation: {
      /** horizontal: Full width, thin height */
      horizontal: { base: 'h-[1px] w-full' },

      /** vertical: Full height, thin width */
      vertical: { base: 'w-[1px] self-stretch' },
    },
  },
};
