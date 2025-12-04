/**
 * Kbd 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Key Cap"
 */
export const kbdConfig = {
  slots: {
    base: [
      // Shape
      'rounded-lg',

      // Glass background
      'bg-white/[0.1] backdrop-blur-sm',

      // Glass border
      'border border-white/[0.2]',

      // Typography
      'font-mono font-medium',
      'text-foreground',

      // Spacing
      'px-2 gap-1',

      // Shadow - subtle depth
      'shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.1)]',
    ],
  },
  variants: {
    variant: {
      default: {
        base: 'bg-white/[0.1]',
      },
      outline: {
        base: 'bg-transparent border-2 border-white/[0.2]',
      },
    },
    size: {
      default: {
        base: 'h-6 min-w-6 text-[length:var(--text-xs)]',
      },
      sm: {
        base: 'h-5 min-w-5 text-[10px] px-1.5',
      },
      lg: {
        base: 'h-7 min-w-7 text-[length:var(--text-sm)] px-2.5',
      },
    },
  },
};
