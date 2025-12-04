/**
 * Obsidian Shard Accordion
 */
export const accordionConfig = {
  slots: {
    root: "",
    item: "border-b border-border",
    header: "flex",
    trigger: [
      "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:text-primary hover:underline [&[data-state=open]>svg]:rotate-180",
      "uppercase tracking-wider", // Style
    ],
    chevron: "h-4 w-4 shrink-0 transition-transform duration-200",
    content: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    contentInner: "pb-4 pt-0",
  },
};