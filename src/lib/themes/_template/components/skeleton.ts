/**
 * Skeleton Component Theme Config
 *
 * Loading placeholder that mimics content shape.
 *
 * Slots:
 * - base: Skeleton element
 *
 * Variants:
 * - variant: Shape (default, circular, text)
 */
export const skeletonConfig = {
  slots: {
    /**
     * base: Skeleton placeholder
     *
     * Common styles:
     * - Border radius (rounded-md, rounded-lg)
     * - Background (bg-surface-2, bg-muted)
     * - Animation (animate-pulse) - handled by base
     */
    base: [
      // TODO: 'rounded-lg', 'bg-surface-2'
    ],
  },

  variants: {
    variant: {
      /** default: Rectangular skeleton */
      default: { base: '' },

      /** circular: Round skeleton (for avatars) */
      circular: { base: 'rounded-full' },

      /** text: Thin line skeleton (for text) */
      text: { base: 'h-4 rounded' },
    },
  },
};
