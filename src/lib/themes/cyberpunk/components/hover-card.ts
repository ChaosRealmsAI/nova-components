/**
 * HoverCard 组件样式 - Cyberpunk (Quick Info)
 */
export const hoverCardConfig = {
  slots: {
    root: [], // Added missing slot
    trigger: [], // Added missing slot

    content: [
      'z-50 w-64 rounded-none border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      'bg-black/90 border-primary',
      'shadow-[0_0_15px_rgba(0,229,255,0.3)]',
      // Tech corner
      '[clip-path:polygon(0_0,100%_0,100%_calc(100%_-_10px),calc(100%_-_10px)_100%,0_100%)]',
    ],
  },
};
