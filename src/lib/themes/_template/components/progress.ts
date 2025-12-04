/**
 * Progress Component Theme Config
 *
 * Progress bar showing completion percentage.
 *
 * Slots:
 * - base: Track/background
 * - indicator: Filled portion
 */
export const progressConfig = {
  slots: {
    /**
     * base: Progress track (background)
     *
     * Common styles:
     * - Border radius (rounded-full)
     * - Background (bg-surface-2, bg-muted)
     * - Shadow (shadow-inner)
     */
    base: [
      // TODO: 'rounded-full', 'bg-surface-2'
    ],

    /**
     * indicator: Filled progress bar
     *
     * Common styles:
     * - Background (bg-primary)
     * - Gradient (bg-gradient-to-r from-primary to-secondary)
     * - Shadow (shadow-sm)
     */
    indicator: [
      // TODO: 'bg-primary'
    ],
  },
};
