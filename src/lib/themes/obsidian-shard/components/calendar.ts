/**
 * Obsidian Shard Calendar
 */
export const calendarConfig = {
  slots: {
    root: "p-3 border border-border bg-surface-1 rounded-none shadow-md",
    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
    month: "space-y-4",
    caption: "flex justify-center pt-1 relative items-center",
    captionLabel: "text-sm font-medium uppercase tracking-wider",
    nav: "space-x-1 flex items-center",
    navButton: [
      "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 rounded-none border border-transparent hover:border-border hover:bg-accent hover:text-accent-foreground",
    ],
    navButtonPrevious: "absolute left-1",
    navButtonNext: "absolute right-1",
    table: "w-full border-collapse space-y-1",
    headRow: "flex",
    headCell: "text-muted-foreground rounded-none w-9 font-normal text-[0.8rem] uppercase tracking-widest",
    row: "flex w-full mt-2",
    cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
    day: [
      "h-9 w-9 p-0 font-normal aria-selected:opacity-100 rounded-none border border-transparent hover:border-primary/50 hover:bg-surface-2",
    ],
    daySelected: [
      "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
      "shadow-[0_0_8px_rgba(0,240,255,0.5)]",
    ],
    dayToday: "bg-accent text-accent-foreground",
    dayOutside: "text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
    dayDisabled: "text-muted-foreground opacity-50",
    dayHidden: "invisible",
  },
};