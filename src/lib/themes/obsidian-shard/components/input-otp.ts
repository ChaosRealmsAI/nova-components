/**
 * Obsidian Shard InputOtp
 */
export const inputOtpConfig = {
  slots: {
    root: "flex w-full items-center justify-center gap-2",
    container: "flex items-center gap-2",
    group: "flex items-center",
    slot: [
      "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-none first:border-l last:rounded-r-none",
      "focus:border-primary focus:bg-accent/10",
    ],
    separator: "mx-1 h-px w-2 bg-border",
    caret: "pointer-events-none absolute inset-0 flex items-center justify-center",
    caretLine: "h-4 w-px animate-caret-blink bg-foreground duration-1000",
  },
  variants: {
    variant: {
      default: {
        slot: "rounded-none",
      },
    },
  },
};