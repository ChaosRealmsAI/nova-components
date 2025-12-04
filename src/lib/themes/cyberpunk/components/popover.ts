/**
 * Popover 组件样式 - Cyberpunk (Overlay)
 */
export const popoverConfig = {
  slots: {
    content: [
      'z-50 w-72 rounded-none border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      'bg-black/95 border-primary/50',
      'shadow-[0_0_20px_rgba(0,229,255,0.2)]',
      // Square shape, no radius
    ],
  },
};