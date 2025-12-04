export const resizableConfig = {
  slots: {
    panelGroup: 'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
    panel: 'flex',
    handle: [
      'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1',
      'w-2 bg-black border-none', 
      '[&[data-orientation=vertical]]:h-2 [&[data-orientation=vertical]]:w-full',
    ],
    handleIcon: 'h-4 w-4',
  },
};
