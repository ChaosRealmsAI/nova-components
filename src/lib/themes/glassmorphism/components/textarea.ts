/**
 * Textarea 组件样式 - Glassmorphism
 *
 * Design Concept: "Glass Text Area"
 */
export const textareaConfig = {
  slots: {
    base: [
      // Size
      'min-h-[100px] w-full',
      'px-4 py-3',

      // Glass background
      'bg-white/[0.06] backdrop-blur-sm',

      // Glass border
      'border border-white/[0.15]',

      // Shape
      'rounded-xl',

      // Typography
      'text-[length:var(--text-sm)] text-foreground',
      'placeholder:text-muted-foreground/60',

      // Shadow
      'shadow-[0_2px_8px_rgba(0,0,0,0.1)]',

      // Transition
      'transition-all duration-300',

      // Focus
      'focus-visible:outline-none',
      'focus-visible:border-primary/50',
      'focus-visible:ring-2 focus-visible:ring-primary/20',
      'focus-visible:shadow-[0_0_16px_rgba(139,92,246,0.2)]',

      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-40',

      // Resize handle
      'resize-y',
    ].join(' '),
  },
  variants: {
    variant: {
      default: {
        base: 'bg-white/[0.06] backdrop-blur-sm',
      },
      filled: {
        base: 'bg-white/[0.1] border-transparent focus-visible:bg-white/[0.08]',
      },
    },
    textareaSize: {
      default: {
        base: 'min-h-[100px]',
      },
      sm: {
        base: 'min-h-[80px] text-[length:var(--text-xs)] rounded-lg px-3 py-2',
      },
      lg: {
        base: 'min-h-[150px] text-[length:var(--text-base)] rounded-2xl px-5 py-4',
      },
    },
  },
} as const;
