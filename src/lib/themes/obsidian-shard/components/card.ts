/**
 * Obsidian Shard Card
 */
export const cardConfig = {
  slots: {
    base: [
      "rounded-[2px] border border-border bg-surface-1 text-foreground shadow-sm",
    ],
    header: [
      "flex flex-col space-y-1.5 p-6",
      "border-b border-border/50", // Subtle separation
    ],
    title: [
      "font-semibold leading-none tracking-tight uppercase",
    ],
    description: [
      "text-sm text-muted-foreground",
    ],
    content: [
      "p-6 pt-6",
    ],
    footer: [
      "flex items-center p-6 pt-0",
    ],
  },

  variants: {
    variant: {
      default: {},
      outline: {
        base: [
          "bg-transparent border-border",
        ],
      },
      ghost: {
        base: [
          "bg-transparent border-none shadow-none",
        ],
      },
      elevated: {
        base: [
          "shadow-lg border-t border-t-white/10", // Top highlight for depth
        ],
      },
    },
  },
};