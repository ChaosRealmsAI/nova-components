/**
 * Obsidian Shard Collapsible
 */
export const collapsibleConfig = {
  slots: {
    base: [],
    trigger: [
      "flex w-full items-center justify-between py-2 text-sm font-medium transition-all hover:text-primary",
    ],
    content: [
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
    ],
  },
  variants: {
    variant: {
      default: {},
      bordered: {
        base: "rounded-none border border-border px-4",
        trigger: "border-b border-transparent data-[state=open]:border-border",
      },
      ghost: {
        trigger: "hover:bg-muted",
      },
    },
  },
};