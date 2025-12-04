/**
 * Obsidian Shard Avatar
 */
export const avatarConfig = {
  slots: {
    base: [
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border border-border bg-background", // Keep rounded for avatars, but with border
      "shadow-[0_0_5px_rgba(255,255,255,0.1)]",
    ],
  },
};

export const avatarFallbackConfig = {
  slots: {
    base: [
      "flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground",
    ],
  },
};