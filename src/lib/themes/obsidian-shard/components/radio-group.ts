/**
 * Obsidian Shard Radio Group
 */
export const radioGroupConfig = {
  slots: {
    base: "grid gap-2",
  },
};

export const radioGroupItemConfig = {
  slots: {
    base: [
      "aspect-square h-4 w-4 rounded-none border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      "shadow-[0_0_5px_rgba(0,240,255,0.2)]",
    ],
    indicator: "flex items-center justify-center",
    icon: "h-2.5 w-2.5 fill-current text-current",
  },
};