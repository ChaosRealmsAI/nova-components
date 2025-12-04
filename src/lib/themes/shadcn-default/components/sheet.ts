export const sheetConfig = {
  slots: {
    overlay: 'fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    content: 'bg-background fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
    close: 'ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary',
    header: 'flex flex-col gap-1.5 p-4',
    footer: 'mt-auto flex flex-col gap-2 p-4',
    title: 'text-foreground font-semibold text-lg',
    description: 'text-muted-foreground text-sm',
  },
  variants: {
    side: {
      right: {
        content: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
      },
      left: {
        content: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
      },
      top: {
        content: 'inset-x-0 top-0 h-auto border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
      },
      bottom: {
        content: 'inset-x-0 bottom-0 h-auto border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
      },
    },
  },
};
