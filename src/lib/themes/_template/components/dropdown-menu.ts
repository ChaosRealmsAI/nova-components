/**
 * DropdownMenu Component Theme Config
 *
 * Contextual menu triggered by button click.
 *
 * Slots:
 * - content: Menu container
 * - item: Menu item
 * - label: Group label
 * - separator: Divider between groups
 * - shortcut: Keyboard shortcut text
 */
export const dropdownMenuConfig = {
  slots: {
    /**
     * content: Menu container
     *
     * Common styles:
     * - Background (bg-surface-1, bg-background)
     * - Border (border, border-border)
     * - Border radius (rounded-lg)
     * - Shadow (shadow-lg)
     */
    content: '',

    /**
     * item: Menu item
     *
     * Common styles:
     * - Border radius (rounded-md)
     * - Focus state: focus:bg-primary/10
     * - Cursor (cursor-pointer)
     */
    item: '',

    /**
     * label: Group label
     *
     * Common styles:
     * - Text color (text-primary, text-muted-foreground)
     * - Font weight (font-medium)
     * - Font size (text-xs)
     */
    label: '',

    /**
     * separator: Divider line
     *
     * Common styles:
     * - Background (bg-border)
     * - Height (h-px)
     */
    separator: '',

    /**
     * shortcut: Keyboard shortcut text
     *
     * Common styles:
     * - Text color (text-muted-foreground)
     * - Font size (text-xs)
     * - Opacity (opacity-60)
     */
    shortcut: '',
  },
};
