/**
 * Obsidian Shard Breadcrumb
 */
export const breadcrumbConfig = {
  slots: {
    root: "",
    list: "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
    item: "inline-flex items-center gap-1.5",
    link: "transition-colors hover:text-primary", // Primary hover
    page: "font-normal text-foreground",
    separator: "[&>svg]:size-3.5 text-muted-foreground",
    ellipsis: "flex h-9 w-9 items-center justify-center",
  },
  variants: {
    variant: {
      default: {},
    },
  },
};