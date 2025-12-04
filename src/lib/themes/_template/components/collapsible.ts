/**
 * Collapsible Component Theme Config
 *
 * Expandable/collapsible content section.
 *
 * Slots:
 * - base: Root container
 * - trigger: Toggle button
 * - content: Collapsible content area
 *
 * Variants:
 * - variant: Style (default, bordered, ghost)
 */
export const collapsibleConfig = {
  slots: {
    /**
     * base: Root collapsible container
     *
     * Usually minimal or empty
     */
    base: [],

    /**
     * trigger: Toggle button/header
     *
     * Common styles:
     * - Text color (text-foreground)
     * - Hover state (hover:text-primary)
     * - Cursor (cursor-pointer)
     */
    trigger: [
      // TODO: 'text-foreground', 'hover:text-primary'
    ],

    /**
     * content: Expandable content area
     *
     * Common styles:
     * - Border (border-l, border-primary)
     * - Padding (pl-4)
     */
    content: [
      // TODO: 'border-l border-primary/30', 'pl-4'
    ],
  },

  variants: {
    variant: {
      /** default: Minimal styling */
      default: {},

      /** bordered: Card-like with border */
      bordered: {
        base: [
          // TODO: 'border', 'rounded-xl'
        ],
      },

      /** ghost: Hover background effect */
      ghost: {
        trigger: [
          // TODO: 'hover:bg-surface-1', 'rounded-lg'
        ],
      },
    },
  },
};
