export const drawerConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-black/50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'group/drawer-content bg-background fixed z-50 flex h-auto flex-col border',
      'text-sm',
    ],
    header: [
      'flex flex-col gap-0.5 p-4',
      'group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center',
      'group-data-[vaul-drawer-direction=top]/drawer-content:text-center',
      'md:gap-1.5 md:text-left',
    ],
    title: 'text-foreground font-semibold text-lg',
    description: 'text-muted-foreground text-sm',
    footer: 'mt-auto flex flex-col gap-2 p-4',
    handle: 'bg-muted mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full',
  },
  variants: {
    direction: {
      bottom: {
        content: 'inset-x-0 bottom-0 mt-24 max-h-[80vh] rounded-t-lg border-t',
        handle: 'block',
      },
      top: {
        content: 'inset-x-0 top-0 mb-24 max-h-[80vh] rounded-b-lg border-b',
        handle: 'hidden',
      },
      left: {
        content: 'inset-y-0 left-0 w-3/4 border-r sm:max-w-sm',
        handle: 'hidden',
      },
      right: {
        content: 'inset-y-0 right-0 w-3/4 border-l sm:max-w-sm',
        handle: 'hidden',
      },
    },
  },
};
