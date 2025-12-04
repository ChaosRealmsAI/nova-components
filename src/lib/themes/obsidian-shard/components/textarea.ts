/**
 * Obsidian Shard Textarea
 */
export const textareaConfig = {
  slots: {
    base: [
      "flex min-h-[80px] w-full rounded-none border border-input bg-surface-1 px-3 py-2",
      "text-sm font-mono shadow-sm placeholder:text-muted-foreground",
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary",
      "focus-visible:bg-background", // Color shift
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
  },
};