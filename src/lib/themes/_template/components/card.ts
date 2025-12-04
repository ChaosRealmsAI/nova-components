/**
 * Card Component Theme Config
 *
 * Container for grouped content.
 *
 * Slots:
 * - base: Card container
 * - header: Card header area
 * - title: Card title text
 * - description: Card description text
 * - content: Main content area
 * - footer: Card footer area
 *
 * Variants:
 * - variant: Style (default, outline, ghost, elevated)
 */
export const cardConfig = {
  slots: {
    /**
     * base: Card container
     *
     * Common styles:
     * - Border radius (rounded-lg, rounded-xl)
     * - Border (border, border-border)
     * - Background (bg-background, bg-surface-1)
     * - Shadow (shadow-md, shadow-lg)
     */
    base: [
      // TODO: 'rounded-xl', 'border', 'bg-background'
    ],

    /**
     * header: Top section containing title/description
     *
     * Usually empty or padding adjustments
     */
    header: [],

    /**
     * title: Card title text
     *
     * Common styles:
     * - Font weight (font-semibold)
     * - Text size (text-lg)
     */
    title: [],

    /**
     * description: Subtitle/description text
     *
     * Common styles:
     * - Text color (text-muted-foreground)
     * - Text size (text-sm)
     */
    description: [],

    /**
     * content: Main content area
     *
     * Usually empty (uses padding from base)
     */
    content: [],

    /**
     * footer: Bottom section for actions
     *
     * Usually empty or border-top
     */
    footer: [],
  },

  variants: {
    variant: {
      /** default: Standard card with background */
      default: {},

      /** outline: Border emphasis, transparent bg */
      outline: {
        base: [
          // TODO: 'bg-transparent', 'border-2'
        ],
      },

      /** ghost: Minimal, no border/shadow */
      ghost: {
        base: [
          // TODO: 'border-transparent', 'shadow-none'
        ],
      },

      /** elevated: Strong shadow, raised effect */
      elevated: {
        base: [
          // TODO: 'shadow-xl'
        ],
      },
    },
  },
};
