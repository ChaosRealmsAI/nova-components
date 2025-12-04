/**
 * Obsidian Shard Progress
 */
export const progressConfig = {
  slots: {
    base: [
      "relative h-2 w-full overflow-hidden rounded-none bg-secondary/20",
    ],
    indicator: [
      "h-full w-full flex-1 bg-primary transition-all",
      "shadow-[0_0_8px_rgba(0,240,255,0.5)]",
      "bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:20px_20px]", // Scanline effect
    ],
  },
};