/**
 * Obsidian Shard Skeleton
 */
export const skeletonConfig = {
  slots: {
    base: [
      "animate-pulse rounded-none bg-muted",
    ],
  },
  variants: {
    variant: {
      default: {},
      circular: {
        base: "rounded-full", // Keep circular for avatars even in shard theme
      },
      text: {
        base: "h-4 w-full",
      },
    },
  },
};