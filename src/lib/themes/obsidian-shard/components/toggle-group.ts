/**
 * Obsidian Shard ToggleGroup
 */
export const toggleGroupConfig = {
  slots: {
    root: "flex items-center justify-center gap-1",
    item: [
      "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
      "border border-transparent hover:border-border",
    ],
  },
  variants: {
    variant: {
      default: {},
      outline: {
        root: "border border-border p-1",
        item: "",
      },
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
};