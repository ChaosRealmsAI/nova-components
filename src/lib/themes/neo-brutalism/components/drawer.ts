export const drawerConfig = {
  slots: {
    content: [
      'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border-2 border-black bg-background shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)]',
    ],
    header: 'grid gap-1.5 p-4 text-center sm:text-left',
    footer: 'mt-auto flex flex-col gap-2 p-4',
    title: 'text-lg font-semibold leading-none tracking-tight',
    description: 'text-sm text-muted-foreground',
    overlay: 'fixed inset-0 z-50 bg-black/80',
    handle: 'mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted',
  },
};
