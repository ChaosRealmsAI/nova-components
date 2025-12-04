/**
 * Obsidian Shard Input
 */
export const inputConfig = {
  slots: {
    base: [
      "flex h-9 w-full rounded-none border border-input bg-surface-1 px-3 py-1",
      "text-sm font-mono shadow-sm transition-colors",
      "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
      "placeholder:text-muted-foreground",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary",
      "focus-visible:bg-background", // Slight color shift on focus
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
  },
};