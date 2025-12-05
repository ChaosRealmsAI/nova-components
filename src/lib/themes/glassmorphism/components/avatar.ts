/**
 * Avatar 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Profile Ring"
 * - Glass border ring effect
 */
export const avatarConfig = {
  slots: {
    base: [
      // Shape
      'rounded-full',

      // Glass ring
      'ring-2 ring-white/20',

      // Subtle shadow
      'shadow-[0_2px_8px_rgba(0,0,0,0.2)]',
    ].join(' '),
  },
  variants: {
    size: {
      default: { base: 'size-10' },
      sm: { base: 'size-8' },
      lg: { base: 'size-14' },
      xl: { base: 'size-20' },
    },
  },
};

export const avatarFallbackConfig = {
  slots: {
    base: [
      // Shape
      'rounded-full',

      // Glass background
      'bg-white/[0.1] backdrop-blur-sm',

      // Text
      'text-foreground',
    ].join(' '),
  },
  variants: {
    size: {
      default: { base: 'text-[length:var(--text-sm)]' },
      sm: { base: 'text-[length:var(--text-xs)]' },
      lg: { base: 'text-[length:var(--text-lg)]' },
      xl: { base: 'text-[length:var(--text-xl)]' },
    },
  },
};
