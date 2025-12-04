/**
 * Obsidian Shard Slider
 */
export const sliderConfig = {
  slots: {
    base: "relative flex w-full touch-none select-none items-center",
    track: [
      "relative h-1.5 w-full grow overflow-hidden rounded-none bg-secondary/20",
    ],
    range: [
      "absolute h-full bg-primary",
      "shadow-[0_0_8px_rgba(0,240,255,0.5)]", // Glow
    ],
    thumb: [
      "block h-4 w-4 rounded-none border border-primary bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      "rotate-45 hover:scale-110 active:scale-95", // Diamond shape
    ],
  },
};