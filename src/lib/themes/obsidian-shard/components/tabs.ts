/**
 * Obsidian Shard Tabs
 */
export const tabsConfig = {
  slots: {
    root: "",
    list: [
      "inline-flex h-10 items-center justify-center rounded-none bg-muted p-1 text-muted-foreground",
      "border border-border",
    ],
    trigger: [
      "inline-flex items-center justify-center whitespace-nowrap rounded-none px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      "uppercase tracking-wider",
      "data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary", // Underline active style
    ],
    content: "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  },
};