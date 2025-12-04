/**
 * Obsidian Shard Button
 */
export const buttonConfig = {
  slots: {
    base: [
      "inline-flex items-center justify-center whitespace-nowrap",
      "text-sm font-medium uppercase tracking-wider", // Typography
      "rounded-none", // Shape
      "transition-all duration-150 ease-out", // Motion
      "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
      "disabled:pointer-events-none disabled:opacity-50",
      // "relative overflow-hidden" // For possible shine effects
    ],
  },

  variants: {
    variant: {
      default: {
        base: [
          "bg-primary text-primary-foreground",
          "shadow-[0_0_10px_rgba(0,240,255,0.3)]", // Glow
          "hover:bg-primary-vivid hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] hover:-translate-y-[1px]",
          "active:translate-y-[1px] active:scale-[0.98]",
        ],
      },
      destructive: {
        base: [
          "bg-destructive text-destructive-foreground",
          "shadow-[0_0_10px_rgba(255,0,60,0.3)]",
          "hover:bg-destructive/90 hover:shadow-[0_0_15px_rgba(255,0,60,0.6)]",
        ],
      },
      outline: {
        base: [
          "border border-input bg-background",
          "hover:bg-accent hover:text-accent-foreground hover:border-accent",
          "hover:shadow-[0_0_10px_rgba(255,0,60,0.2)]", // Subtle red glow on hover
        ],
      },
      secondary: {
        base: [
          "bg-secondary text-secondary-foreground",
          "hover:bg-secondary/80",
        ],
      },
      ghost: {
        base: [
          "hover:bg-accent hover:text-accent-foreground",
        ],
      },
      link: {
        base: [
          "text-primary underline-offset-4 hover:underline",
        ],
      },
    },
  },
};