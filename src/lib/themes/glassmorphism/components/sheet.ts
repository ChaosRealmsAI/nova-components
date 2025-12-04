/**
 * Sheet 组件样式
 */
export const sheetConfig = {
  slots: {
    overlay: 'bg-black/60 backdrop-blur-sm',
    content: [
      'p-6',
      // Glass background
      'bg-white/[0.1] backdrop-blur-2xl',
      // Glass border
      'border border-white/[0.15]',
      // Soft shadow
      'shadow-[0_16px_48px_rgba(0,0,0,0.3)]',
    ],
    close: [
      'opacity-70 ring-offset-background transition-all duration-200 hover:opacity-100',
      'rounded-lg p-1',
      'hover:bg-white/[0.1]',
      'focus:outline-none focus:ring-2 focus:ring-primary/30',
      'disabled:pointer-events-none',
    ],
    header: 'space-y-2 text-center sm:text-left',
    footer: 'flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
    title: 'text-[length:var(--text-lg)] font-semibold text-foreground',
    description: 'text-[length:var(--text-sm)] text-muted-foreground',
  },
  variants: {
    side: {
      right: {
        content: 'border-l',
      },
      left: {
        content: 'border-r',
      },
      top: {
        content: 'border-b',
      },
      bottom: {
        content: 'border-t',
      },
    },
  },
};