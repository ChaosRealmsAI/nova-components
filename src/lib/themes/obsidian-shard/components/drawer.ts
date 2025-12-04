/**
 * Obsidian Shard Drawer
 */
export const drawerConfig = {
  slots: {
    overlay: "fixed inset-0 z-50 bg-black/80",
    content: [
      "fixed z-50 flex h-auto flex-col rounded-none border border-border bg-surface-1 shadow-lg",
    ],
    header: "grid gap-1.5 p-4 text-center sm:text-left",
    title: "text-lg font-semibold leading-none tracking-tight uppercase",
    description: "text-sm text-muted-foreground",
    footer: "mt-auto flex flex-col gap-2 p-4",
    handle: "mx-auto mt-4 h-2 w-[100px] rounded-none bg-muted",
  },
  variants: {
    direction: {
      bottom: {
        content: "inset-x-0 bottom-0 mt-24 border-t data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom",
      },
      top: {
        content: "inset-x-0 top-0 mb-24 border-b data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top data-[state=open]:animate-in data-[state=open]:slide-in-from-top",
      },
      left: {
        content: "inset-y-0 left-0 w-3/4 border-r data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:animate-in data-[state=open]:slide-in-from-left sm:max-w-sm",
      },
      right: {
        content: "inset-y-0 right-0 w-3/4 border-l data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
  },
};