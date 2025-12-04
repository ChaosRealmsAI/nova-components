/**
 * Obsidian Shard Table
 */
export const tableConfig = {
  slots: {
    container: "relative w-full overflow-auto rounded-none border border-border",
    table: "w-full caption-bottom text-sm",
    header: "[&_tr]:border-b",
    body: "[&_tr:last-child]:border-0",
    footer: "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
    row: [
      "border-b border-border transition-colors data-[state=selected]:bg-muted",
      "hover:bg-surface-2",
    ],
    head: "h-12 px-4 text-left align-middle font-medium text-muted-foreground uppercase tracking-wider [&:has([role=checkbox])]:pr-0",
    cell: "p-4 align-middle [&:has([role=checkbox])]:pr-0 font-mono",
    caption: "mt-4 text-sm text-muted-foreground",
  },
  variants: {
    variant: {
      default: {},
    },
  },
};