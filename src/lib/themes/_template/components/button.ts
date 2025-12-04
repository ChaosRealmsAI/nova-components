/**
 * Button Component Theme Config
 *
 * The primary interactive element for user actions.
 *
 * Slots:
 * - base: Root <button> element styles
 *
 * Variants:
 * - variant: Visual style (default, destructive, outline, secondary, ghost, link)
 * - size: Dimensions (sm, md, lg, icon) - handled by base component
 */
export const buttonConfig = {
  slots: {
    /**
     * base: Root button element
     *
     * Common styles:
     * - Border radius (rounded-*)
     * - Font weight (font-medium, font-bold)
     * - Transitions (transition-all, duration-*)
     * - Shadows (shadow-sm, shadow-md)
     * - Special effects (clip-path for cyberpunk, etc.)
     */
    base: [
      // TODO: Add your base button styles
      // Example: 'rounded-lg', 'font-medium', 'transition-all'
    ],
  },

  variants: {
    variant: {
      /**
       * default: Primary action button
       * - Strongest visual weight
       * - Uses primary color
       */
      default: {
        base: [
          // TODO: 'bg-primary text-primary-foreground'
        ],
      },

      /**
       * destructive: Dangerous/delete actions
       * - Red/error color
       * - Warning visual cue
       */
      destructive: {
        base: [
          // TODO: 'bg-destructive text-destructive-foreground'
        ],
      },

      /**
       * outline: Secondary importance with border
       * - Transparent background
       * - Visible border
       */
      outline: {
        base: [
          // TODO: 'border border-primary bg-transparent'
        ],
      },

      /**
       * secondary: Alternative styling
       * - Uses secondary color
       */
      secondary: {
        base: [
          // TODO: 'bg-secondary text-secondary-foreground'
        ],
      },

      /**
       * ghost: Minimal/subtle button
       * - No background until hover
       * - Lowest visual weight
       */
      ghost: {
        base: [
          // TODO: 'hover:bg-surface-1'
        ],
      },

      /**
       * link: Text-only button that looks like a link
       * - No background, no shadow
       * - Underline on hover (optional)
       */
      link: {
        base: '',
      },
    },
  },
};
