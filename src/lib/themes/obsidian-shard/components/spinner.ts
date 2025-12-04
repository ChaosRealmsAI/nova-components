/**
 * Obsidian Shard Spinner
 */
export const spinnerConfig = {
  slots: {
    base: [
      "animate-spin",
    ],
  },
  variants: {
    variant: {
      default: {
        base: "text-primary drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]",
      },
      secondary: {
        base: "text-secondary",
      },
      muted: {
        base: "text-muted-foreground",
      },
    },
  },
};