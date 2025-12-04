/**
 * Switch Component Theme Config
 *
 * Toggle switch for on/off states.
 *
 * Slots:
 * - base: Track/background element
 * - thumb: Sliding thumb element
 */
export const switchConfig = {
  slots: {
    /**
     * base: Switch track (background)
     *
     * Common styles:
     * - Border radius (rounded-full)
     * - Background (bg-surface-2)
     * - Checked state: data-[state=checked]:bg-primary
     * - Shadow (shadow-inner)
     */
    base: [
      // TODO: Add your switch track styles
      // Example: 'rounded-full', 'shadow-inner'
      // Example: 'data-[state=checked]:bg-primary'
    ],

    /**
     * thumb: Sliding circle/button
     *
     * Common styles:
     * - Shadow (shadow-md)
     * - Background (bg-background, bg-white)
     */
    thumb: [
      // TODO: Add your thumb styles
      // Example: 'shadow-md'
    ],
  },
};
