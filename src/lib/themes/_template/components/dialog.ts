/**
 * Dialog Component Theme Config
 *
 * Modal dialog window.
 *
 * Slots:
 * - overlay: Backdrop
 * - content: Dialog container
 * - header, title, description, footer: Content sections
 * - close: Close button
 */
export const dialogConfig = {
  slots: {
    overlay: '',
    content: [
      // TODO: 'rounded-lg', 'border', 'bg-background', 'shadow-lg'
    ],
    header: '',
    title: '',
    description: '',
    footer: '',
    close: '',
  },
};
