/**
 * Obsidian Shard NavigationMenu
 */
export const navigationMenuConfig = {
  slots: {
    root: "relative z-10 flex max-w-max flex-1 items-center justify-center",
    list: "group flex flex-1 list-none items-center justify-center space-x-1",
    item: "",
    trigger: [
      "group inline-flex h-10 w-max items-center justify-center rounded-none border border-transparent bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
      "hover:border-b-primary", // Underline effect
      "uppercase tracking-wide",
    ],
    content: [
      "left-0 top-0 w-full bg-surface-2 p-4 md:absolute md:w-auto",
      "border border-border shadow-[0_0_15px_rgba(0,0,0,0.5)]",
    ],
    viewport: [
      "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-none border border-border bg-surface-2 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
    ],
    link: "group inline-flex h-10 w-max items-center justify-center rounded-none bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 uppercase tracking-wide",
    contentList: "grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",
    listItem: [
      "block select-none space-y-1 rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
    ],
    listItemTitle: "text-sm font-medium leading-none text-primary", // Accent color for titles
    listItemDescription: "line-clamp-2 text-sm leading-snug text-muted-foreground",
    indicator: "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
    indicatorArrow: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md",
    chevron: "relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180",
  },
};