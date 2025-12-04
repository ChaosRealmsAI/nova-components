/**
 * ScrollArea Component Theme Config
 *
 * Custom scrollable container with styled scrollbar.
 *
 * Two configs:
 * - scrollAreaConfig: Main scroll container
 * - scrollBarConfig: Scrollbar styling
 */

export const scrollAreaConfig = {
  slots: {
    /**
     * base: Scroll container
     *
     * Common styles:
     * - Border radius (rounded-lg)
     * - Border (border, border-border)
     * - Background (bg-surface-1)
     */
    base: [
      // TODO: 'rounded-lg', 'border border-border'
    ],

    /**
     * viewport: Inner scrollable viewport
     *
     * Usually matches base border-radius
     */
    viewport: '',

    /**
     * content: Content wrapper inside scroll area
     *
     * Common styles:
     * - Padding (p-4)
     * - Spacing (space-y-2)
     */
    content: '',

    /**
     * header: Optional header inside scroll area
     *
     * Common styles:
     * - Font size (text-xs)
     * - Border bottom (border-b)
     */
    header: [],

    /**
     * item: List item styling (if used as list)
     *
     * Common styles:
     * - Flex layout (flex items-center)
     * - Hover (hover:bg-surface-2)
     */
    item: [],

    /**
     * itemIndex: Index number for list items
     */
    itemIndex: '',

    /**
     * itemText: Text content for list items
     */
    itemText: '',
  },
};

export const scrollBarConfig = {
  slots: {
    /**
     * base: Scrollbar track
     *
     * Usually empty (uses default)
     */
    base: '',

    /**
     * thumb: Scrollbar thumb (draggable part)
     *
     * Common styles:
     * - Background (bg-border, bg-primary/50)
     * - Border radius (rounded-full)
     * - Hover (hover:bg-primary)
     */
    thumb: [
      // TODO: 'bg-border', 'rounded-full'
    ],
  },
};
