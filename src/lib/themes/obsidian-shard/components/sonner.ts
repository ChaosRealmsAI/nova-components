/**
 * Obsidian Shard Sonner
 */
export const sonnerConfig = {
  slots: {
    root: [
      "group !rounded-none !border !border-border !bg-surface-1 !text-foreground !shadow-lg",
      "!border-l-4 !border-l-primary", // Default Accent
    ],
    title: "!font-bold !uppercase !tracking-wide",
    description: "!text-muted-foreground",
    actionButton: "!rounded-none !bg-primary !text-primary-foreground",
    cancelButton: "!rounded-none !bg-muted !text-muted-foreground",
    closeButton: "!rounded-none !bg-transparent !text-muted-foreground hover:!text-foreground",
    success: "!border-l-success !text-success-foreground",
    error: "!border-l-destructive !text-destructive-foreground",
    warning: "!border-l-warning !text-warning-foreground",
    info: "!border-l-info !text-info-foreground",
    icon: "!mr-2",
  },
};