/**
 * Dialog 组件样式 - Glassmorphism
 *
 * Design Concept: "Floating Glass Panel"
 * - Strong backdrop blur for modal overlay
 * - Glass panel with soft edges
 */
export const dialogConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50',
      // Glass overlay - darker with blur
      'bg-black/60 backdrop-blur-sm',
      // Animation
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%]',
      'gap-4 p-6',

      // Glass background
      'bg-white/[0.1] backdrop-blur-2xl',

      // Glass border
      'border border-white/[0.15]',

      // Large rounded corners
      'rounded-2xl',

      // Soft shadow with subtle glow
      'shadow-[0_16px_48px_rgba(0,0,0,0.3),0_0_24px_rgba(139,92,246,0.1)]',

      // Animation
      'duration-300',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
    ],
    header: 'flex flex-col gap-1.5 text-center sm:text-left',
    title: 'text-[length:var(--text-lg)] font-semibold leading-none tracking-tight text-foreground',
    description: 'text-[length:var(--text-sm)] text-muted-foreground',
    footer: 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
    close: [
      'absolute right-4 top-4',
      'rounded-lg',
      'p-1',
      'opacity-70',
      'ring-offset-background',
      'transition-all duration-200',
      'hover:opacity-100 hover:bg-white/10',
      'focus:outline-none focus:ring-2 focus:ring-primary/30',
      'disabled:pointer-events-none',
      'text-foreground',
    ],
  },
  variants: {
    size: {
      sm: { content: 'max-w-sm' },
      default: { content: 'max-w-lg' },
      lg: { content: 'max-w-2xl' },
      xl: { content: 'max-w-4xl' },
      full: { content: 'max-w-[calc(100%-2rem)]' },
    },
  },
};
