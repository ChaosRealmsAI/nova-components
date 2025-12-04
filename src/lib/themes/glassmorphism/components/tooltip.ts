/**
 * Tooltip 组件样式 - Glassmorphism
 *
 * Design Concept: "Floating Glass Hint"
 * - Small glass panel
 * - Subtle shadow
 */
export const tooltipConfig = {
  slots: {
    content: [
      // Glass background
      'bg-white/[0.15] backdrop-blur-xl',

      // Glass border
      'border border-white/[0.2]',

      // Shape
      'rounded-lg',

      // Spacing
      'px-3 py-1.5',

      // Typography
      'text-[length:var(--text-xs)] text-foreground',

      // Shadow
      'shadow-[0_4px_16px_rgba(0,0,0,0.2)]',

      // Animation
      'animate-in fade-in-0 zoom-in-95',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    ].join(' '),
    arrow: 'fill-white/[0.15]',
  },
};
