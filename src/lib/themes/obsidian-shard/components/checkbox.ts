/**
 * Obsidian Shard Checkbox
 */
export const checkboxConfig = {
  slots: {
    base: [
      "peer h-4 w-4 shrink-0 border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      "rounded-none", // Square
      "shadow-[0_0_5px_rgba(0,240,255,0.2)]",
    ],
    indicator: "flex items-center justify-center text-current",
  },
};