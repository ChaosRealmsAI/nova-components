/**
 * Checkbox Component Theme Config
 *
 * Boolean selection control.
 *
 * Slots:
 * - base: Root checkbox container
 * - indicator: Check icon container
 */
export const checkboxConfig = {
  slots: {
    /**
     * base: Root checkbox element
     *
     * Common styles:
     * - Border radius (rounded-sm, rounded-md, rounded-full)
     * - Border (border, border-primary)
     * - Checked state: data-[state=checked]:bg-primary
     * - Shadow (shadow-sm)
     */
    base: [
      // TODO: Add your checkbox styles
      // Example: 'rounded-md', 'border-primary/50'
      // Example: 'data-[state=checked]:bg-primary'
    ],

    /**
     * indicator: Check icon inside checkbox
     *
     * Common styles:
     * - Text/icon color (text-primary-foreground)
     */
    indicator: '',
  },
};
