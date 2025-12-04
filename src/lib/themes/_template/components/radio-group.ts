/**
 * RadioGroup Component Theme Config
 *
 * Group of mutually exclusive options.
 *
 * Two configs:
 * - radioGroupConfig: Container for radio items
 * - radioGroupItemConfig: Individual radio button
 */

export const radioGroupConfig = {
  slots: {
    /**
     * base: Root container for radio items
     *
     * Common styles:
     * - Gap between items (gap-2, gap-3)
     * - Flex direction (flex-col, flex-row)
     */
    base: '',
  },
};

export const radioGroupItemConfig = {
  slots: {
    /**
     * base: Individual radio button circle
     *
     * Common styles:
     * - Border radius (rounded-full)
     * - Border (border, border-primary)
     * - Background (bg-surface-1)
     * - Selected state handled by component
     */
    base: [
      // TODO: 'rounded-full', 'border border-primary/50'
    ],

    /**
     * indicator: Container for the dot inside
     *
     * Common styles:
     * - Text/fill color (text-primary)
     */
    indicator: '',

    /**
     * icon: The actual dot/circle inside
     *
     * Common styles:
     * - Size (w-2.5 h-2.5)
     * - Fill (fill-current)
     */
    icon: '',
  },
};
