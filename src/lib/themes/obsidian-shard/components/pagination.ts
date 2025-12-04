/**
 * Obsidian Shard Pagination
 */
export const paginationConfig = {
  slots: {
    root: "mx-auto flex w-full justify-center",
    content: "flex flex-row items-center gap-1",
    item: "",
    link: [
      "flex h-9 w-9 items-center justify-center rounded-none border border-transparent text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      "data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:shadow-[0_0_8px_rgba(0,240,255,0.4)]", // Active glow
    ],
    ellipsis: "flex h-9 w-9 items-center justify-center",
  },
  variants: {
    variant: {
      default: {},
      outline: {
        link: "border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
    },
    size: {
      default: {},
      sm: {},
      lg: {},
      icon: {},
    },
  },
};