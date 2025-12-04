/**
 * Obsidian Shard InputGroup
 */
export const inputGroupConfig = {
  slots: {
    root: "flex w-full items-center space-x-2",
    input: "flex-1",
    button: "shrink-0",
    addon: [
      "flex items-center justify-center border border-input bg-muted px-3 py-2 text-sm ring-offset-background",
      "rounded-none",
    ],
  },
  variants: {
    variant: {
      default: {},
      attached: {
        addon: "first:border-r-0 last:border-l-0",
      },
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
};