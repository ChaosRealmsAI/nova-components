/**
 * Obsidian Shard Form
 */
export const formConfig = {
  slots: {
    root: "space-y-6",
    item: "space-y-2",
    label: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 uppercase tracking-wide",
    control: "",
    description: "text-sm text-muted-foreground",
    message: "text-sm font-medium text-destructive",
  },
  variants: {
    variant: {
      default: {},
      inline: {},
    },
    size: {
      default: {},
      sm: {},
      lg: {},
    },
  },
};