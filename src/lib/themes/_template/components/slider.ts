/**
 * Slider Component Theme Config
 *
 * Range input for selecting numeric values.
 *
 * Slots:
 * - base: Root container
 * - track: Background track
 * - range: Filled portion of track
 * - thumb: Draggable handle
 */
export const sliderConfig = {
  slots: {
    /**
     * base: Root slider container
     *
     * Usually empty or minimal styles
     */
    base: '',

    /**
     * track: Background track line
     *
     * Common styles:
     * - Border radius (rounded-full)
     * - Background (bg-surface-2, bg-muted)
     * - Height handled by base component
     */
    track: [
      // TODO: 'rounded-full', 'bg-surface-2'
    ],

    /**
     * range: Filled portion (left of thumb)
     *
     * Common styles:
     * - Background (bg-primary)
     * - Gradient for special themes
     */
    range: [
      // TODO: 'bg-primary'
    ],

    /**
     * thumb: Draggable handle
     *
     * Common styles:
     * - Border radius (rounded-full)
     * - Background (bg-background, bg-primary)
     * - Border (border-2 border-primary)
     * - Shadow (shadow-md)
     * - Hover effects (hover:scale-110)
     */
    thumb: [
      // TODO: 'rounded-full', 'shadow-md'
      // TODO: 'border-2 border-primary', 'bg-background'
    ],
  },
};
