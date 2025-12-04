/**
 * Tooltip Component Theme Config
 *
 * Small floating hint on hover.
 *
 * Slots:
 * - content: Tooltip content
 * - arrow: Pointer arrow
 */
export const tooltipConfig = {
  slots: {
    /**
     * content: Tooltip panel
     *
     * Common styles:
     * - Background (bg-foreground for inverted, bg-surface-1)
     * - Text color (text-background for inverted)
     * - Border radius (rounded-md, rounded-lg)
     * - Shadow (shadow-md)
     * - Padding (px-3 py-1.5)
     */
    content: [
      // TODO: 'bg-foreground text-background', 'rounded-md'
    ],

    /**
     * arrow: Tooltip arrow pointing to trigger
     *
     * Common styles:
     * - Background matching content (bg-foreground)
     * - Fill (fill-foreground)
     */
    arrow: '',
  },
};
