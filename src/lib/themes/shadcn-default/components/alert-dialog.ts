export const alertDialogConfig = {
  slots: {
    overlay: 'fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    content: 'fixed top-[50%] left-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background text-foreground p-6 shadow-lg duration-200 rounded-lg text-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    header: 'flex flex-col gap-2 text-center sm:text-left',
    title: 'text-lg leading-none font-semibold text-foreground',
    description: 'text-muted-foreground text-sm',
    footer: 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
  },
  variants: {
    variant: {
      default: { content: '' },
      destructive: {
        content: 'border-destructive',
        title: 'text-destructive',
      },
    },
  },
};
