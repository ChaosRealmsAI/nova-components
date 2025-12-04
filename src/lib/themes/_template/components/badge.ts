/**
 * Badge Component Theme Config
 *
 * Small status indicator or label.
 *
 * Slots:
 * - base: Root <span> element styles
 *
 * Variants:
 * - variant: Visual style (default, secondary, destructive, outline)
 */
export const badgeConfig = {
  slots: {
    /**
     * base: Root badge element
     *
     * Common styles:
     * - Border radius (rounded-full for pill, rounded-md for rectangular)
     * - Font size/weight (text-xs, font-medium)
     * - Padding (px-2 py-0.5)
     */
    base: [
      // TODO: Add your base badge styles
      // Example: 'rounded-full', 'font-medium', 'text-xs'
    ],
  },

  variants: {
    variant: {
      /**
       * default: Primary badge
       * - Uses primary color
       */
      default: {
        base: [
          // TODO: 'bg-primary text-primary-foreground'
        ],
      },

      /**
       * secondary: Muted/secondary badge
       */
      secondary: {
        base: [
          // TODO: 'bg-secondary text-secondary-foreground'
        ],
      },

      /**
       * destructive: Error/warning badge
       */
      destructive: {
        base: [
          // TODO: 'bg-destructive text-destructive-foreground'
        ],
      },

      /**
       * outline: Border-only badge
       */
      outline: {
        base: [
          // TODO: 'border border-border bg-transparent'
        ],
      },
    },
  },
};
