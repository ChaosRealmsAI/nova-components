/**
 * Obsidian Shard Badge
 */
export const badgeConfig = {
  slots: {
    base: [
      "inline-flex items-center rounded-none border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
      "uppercase tracking-wider", // Style
    ],
  },
  variants: {
    variant: {
      default: {
        base: [
          "border-transparent bg-primary text-primary-foreground",
          "shadow-[0_0_5px_rgba(0,240,255,0.4)]",
          "hover:bg-primary-vivid",
        ],
      },
      secondary: {
        base: [
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ],
      },
      destructive: {
        base: [
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
          "shadow-[0_0_5px_rgba(255,0,60,0.4)]",
        ],
      },
      outline: {
        base: [
          "text-foreground border-border hover:bg-accent hover:text-accent-foreground",
        ],
      },
    },
  },
};