/**
 * Dialog 组件样式
 */
export const dialogConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-black/50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%]',
      'gap-4 bg-background p-6 shadow-lg duration-200',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'border border-border rounded-lg',
    ],
    header: 'flex flex-col gap-1.5 text-center sm:text-left',
    title: 'text-[length:var(--text-lg)] font-semibold leading-none tracking-tight text-foreground',
    description: 'text-[length:var(--text-sm)] text-muted-foreground',
    footer: 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
    close: [
      'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity',
      'hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground text-foreground',
    ],
  },
  variants: {
    size: {
      sm: { content: 'max-w-sm' },
      default: { content: 'max-w-lg' },
      lg: { content: 'max-w-2xl' },
      xl: { content: 'max-w-4xl' },
      full: { content: 'max-w-[calc(100%-2rem)]' },
    },
  },
};
