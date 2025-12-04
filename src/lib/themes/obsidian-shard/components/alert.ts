/**
 * Obsidian Shard Alert
 */
export const alertConfig = {
  slots: {
    base: [
      "relative w-full rounded-none border p-4",
      "border-l-4", // Accent on left
    ],
    icon: "absolute left-4 top-4 h-4 w-4",
    title: "mb-1 font-medium leading-none tracking-tight uppercase",
    description: "text-sm [&_p]:leading-relaxed",
  },

  variants: {
    variant: {
      default: {
        base: "bg-surface-1 border-border border-l-primary text-foreground",
      },
      destructive: {
        base: [
          "border-destructive/50 text-destructive dark:border-destructive border-l-destructive",
          "bg-destructive/10",
        ],
      },
    },
  },
};