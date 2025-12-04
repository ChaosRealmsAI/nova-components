/**
 * AlertDialog Component Theme Config
 *
 * Modal dialog for confirmations.
 *
 * Slots:
 * - overlay: Backdrop
 * - content: Dialog container
 * - header, title, description, footer: Content sections
 */
export const alertDialogConfig = {
  slots: {
    overlay: '',
    content: [
      // TODO: 'rounded-xl', 'border', 'bg-background', 'shadow-lg'
    ],
    header: '',
    title: '',
    description: '',
    footer: '',
  },
  variants: {
    variant: {
      default: {},
      destructive: { content: '' },
    },
  },
};
