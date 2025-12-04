/**
 * Avatar Component Theme Config
 *
 * User profile image or fallback initials.
 *
 * Two configs:
 * - avatarConfig: Image container
 * - avatarFallbackConfig: Fallback when no image
 */

export const avatarConfig = {
  slots: {
    /**
     * base: Avatar container
     *
     * Common styles:
     * - Border radius (rounded-full)
     * - Ring/border (ring-2 ring-primary)
     * - Shadow (shadow-md)
     */
    base: [
      // TODO: 'rounded-full', 'ring-2 ring-primary/30'
    ],
  },
};

export const avatarFallbackConfig = {
  slots: {
    /**
     * base: Fallback container (shows initials)
     *
     * Common styles:
     * - Border radius (rounded-full)
     * - Background (bg-primary/20, gradient)
     * - Text (text-primary, font-medium)
     */
    base: [
      // TODO: 'rounded-full', 'bg-primary/20'
      // TODO: 'text-primary', 'font-medium'
    ],
  },
};
