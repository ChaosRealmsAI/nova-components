/**
 * Obsidian Shard Carousel
 */
export const carouselConfig = {
  slots: {
    root: "relative w-full",
    content: "-ml-4",
    item: "pl-4",
    previous: "absolute h-8 w-8 rounded-none bg-background/50 border border-border hover:bg-accent hover:text-accent-foreground -left-12 top-1/2 -translate-y-1/2 disabled:opacity-50",
    next: "absolute h-8 w-8 rounded-none bg-background/50 border border-border hover:bg-accent hover:text-accent-foreground -right-12 top-1/2 -translate-y-1/2 disabled:opacity-50",
  },
};