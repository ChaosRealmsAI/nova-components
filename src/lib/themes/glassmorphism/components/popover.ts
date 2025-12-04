/**
 * Popover 组件样式 - Glassmorphism
 *
 * Design Concept: "Floating Glass Panel"
 */
export const popoverConfig = {
  slots: {
    content: [
      // Glass background
      'bg-white/[0.12] backdrop-blur-2xl',

      // Glass border
      'border border-white/[0.15]',

      // Shape
      'rounded-xl',

      // Spacing
      'p-4',

      // Typography
      'text-popover-foreground text-[length:var(--text-sm)]',

      // Shadow
      'shadow-[0_8px_32px_rgba(0,0,0,0.25)]',

      // Animation
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2',
      'data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2',
      'data-[side=top]:slide-in-from-bottom-2',
    ].join(' '),
  },
};
