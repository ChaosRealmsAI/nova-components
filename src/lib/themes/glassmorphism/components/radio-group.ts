/**
 * RadioGroup 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Radio Selection"
 */
export const radioGroupConfig = {
  slots: {
    base: 'grid gap-3',
  },
};

export const radioGroupItemConfig = {
  slots: {
    base: [
      // Size
      'h-5 w-5',
      'aspect-square',

      // Shape - circular
      'rounded-full',

      // Glass border
      'border border-white/20',

      // Glass background
      'bg-white/[0.06] backdrop-blur-sm',

      // Focus
      'ring-offset-background',
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2',

      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-40',

      // Transition
      'transition-all duration-200',

      // Checked state
      'data-[state=checked]:border-primary/50',
      'data-[state=checked]:shadow-[0_0_12px_rgba(139,92,246,0.4)]',
    ],

    indicator: 'flex items-center justify-center',

    icon: [
      'h-2.5 w-2.5',
      'rounded-full',
      'bg-primary',
      'shadow-[0_0_8px_rgba(139,92,246,0.5)]',
    ].join(' '),
  },
};
