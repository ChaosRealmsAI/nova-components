/**
 * Alert Component Theme Config
 *
 * Displays important messages to users.
 *
 * Slots:
 * - base: Alert container
 * - icon: Alert icon
 * - title: Alert title
 * - description: Alert message
 */
export const alertConfig = {
  slots: {
    base: [
      // TODO: 'rounded-lg', 'border', 'bg-background'
    ],
    icon: '',
    title: '',
    description: '',
  },
  variants: {
    variant: {
      default: { base: '' },
      destructive: { base: '' },
    },
  },
};
