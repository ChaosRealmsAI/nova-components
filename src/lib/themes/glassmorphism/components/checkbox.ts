/**
 * Checkbox 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Toggle"
 * - Rounded glass container
 * - Glowing checked state
 */
export const checkboxConfig = {
  slots: {
    base: [
      // Size
      'h-5 w-5',
      'shrink-0',

      // Shape - rounded for glass feel
      'rounded-md',

      // Glass border
      'border border-white/20',

      // Default background
      'bg-white/[0.06] backdrop-blur-sm',

      // Focus
      'ring-offset-background',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2',

      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-40',

      // Transition
      'transition-all duration-200',

      // Checked state
      'data-[state=checked]:bg-primary/90',
      'data-[state=checked]:border-primary/50',
      'data-[state=checked]:shadow-[0_0_12px_rgba(139,92,246,0.4)]',
    ],

    indicator: [
      'flex items-center justify-center',
      'text-primary-foreground',
    ].join(' '),
  },
};
