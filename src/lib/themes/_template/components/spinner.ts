/**
 * Spinner Component Theme Config
 *
 * Loading spinner indicator.
 *
 * Slots:
 * - base: Spinner element
 *
 * Variants:
 * - variant: Color (default, secondary, muted)
 */
export const spinnerConfig = {
  slots: {
    /**
     * base: Spinner element
     *
     * Common styles:
     * - Color (text-primary)
     * - Animation handled by base component
     */
    base: [
      // TODO: 'text-primary'
    ],
  },

  variants: {
    variant: {
      /** default: Primary color spinner */
      default: { base: 'text-primary' },

      /** secondary: Secondary color spinner */
      secondary: { base: 'text-secondary' },

      /** muted: Subtle/muted spinner */
      muted: { base: 'text-muted-foreground' },
    },
  },
};
