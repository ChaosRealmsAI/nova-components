/**
 * Obsidian Shard Tooltip
 */
export const tooltipConfig = {
  slots: {
    content: [
      "z-50 overflow-hidden rounded-none border border-primary/50 bg-surface-2 px-3 py-1.5 text-xs text-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      "uppercase tracking-wider font-mono", // Tech feel
      "shadow-[0_0_10px_rgba(0,240,255,0.2)]",
    ],
    arrow: "fill-primary/50",
  },
};