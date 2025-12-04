/**
 * Resizable 组件样式 - Cyberpunk (Split Pane)
 */
export const resizableConfig = {
  slots: {
    panelGroup: [ // Added missing slot
        'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
    ],

    handle: [
      'flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[vertical]:h-px data-[vertical]:w-full data-[vertical]:after:left-0 data-[vertical]:after:h-1 data-[vertical]:after:w-full data-[vertical]:after:-translate-y-1/2 data-[vertical]:after:translate-x-0 [&[data-vertical]>div]:rotate-90',
      'bg-primary/30 hover:bg-primary transition-colors',
    ],
    
    handleIcon: [
      'h-4 w-3 rounded-sm border bg-border',
      'bg-black border-primary text-primary rounded-none',
    ],
  },
};
