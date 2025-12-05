/**
 * Input 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Input Field"
 * - Semi-transparent background
 * - Subtle border that glows on focus
 * - Smooth transitions
 */
export const inputConfig = {
  slots: {
    base: [
      // Size
      'h-10',
      'w-full',
      'px-4 py-2',

      // Glass background
      'bg-white/[0.06] backdrop-blur-sm',

      // Border - subtle glass edge
      'border border-white/[0.15]',

      // Shape
      'rounded-xl',

      // Typography
      'text-[length:var(--text-sm)] text-foreground',
      'placeholder:text-muted-foreground/60',

      // File input
      'file:text-[length:var(--text-sm)] file:font-medium',
      'file:border-0 file:bg-transparent file:text-foreground',

      // Transition
      'transition-all duration-300',

      // Shadow
      'shadow-[0_2px_8px_rgba(0,0,0,0.1)]',

      // Focus - glow effect
      'focus-visible:outline-none',
      'focus-visible:border-primary/50',
      'focus-visible:ring-2 focus-visible:ring-primary/20',
      'focus-visible:shadow-[0_0_16px_rgba(139,92,246,0.2)]',

      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-40',
    ].join(' '),
  },
  variants: {
    variant: {
      default: { base: 'bg-white/[0.06]' },
      filled: {
        base: [
          'bg-white/[0.1]',
          'border-transparent',
          'focus-visible:bg-white/[0.08]',
        ].join(' '),
      },
    },
    inputSize: {
      default: { base: 'h-10' },
      sm: { base: 'h-9 text-[length:var(--text-xs)] rounded-lg px-3' },
      lg: { base: 'h-12 text-[length:var(--text-base)] rounded-2xl px-5' },
    },
  },
  defaultVariants: {
    variant: 'default',
    inputSize: 'default',
  },
};
