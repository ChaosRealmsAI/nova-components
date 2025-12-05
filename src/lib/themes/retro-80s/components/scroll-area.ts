/**
 * ScrollArea Component Style - Retro 80s
 *
 * Core Concept: "Neon Terminal Scroll"
 * - Shape: Small radius (2px)
 * - Border: Neon glow
 * - Typography: Monospace
 */
export const scrollAreaConfig = {
  slots: {
    base: [
      'h-64 w-full',
      'rounded-[2px]',
      'border-2 border-primary/50',
      'bg-surface-1',
      'shadow-[0_0_10px_var(--primary)]',
    ],
    viewport: 'rounded-[inherit]',
    content: 'p-4 space-y-1',
    header: [
      'sticky top-0 z-10',
      'bg-surface-1/95 backdrop-blur-sm',
      'border-b border-primary/30',
      'px-3 py-2',
      'font-mono text-xs uppercase tracking-[0.2em]',
      'text-primary',
    ],
    item: [
      'flex items-center gap-3',
      'px-3 py-2',
      'font-mono text-sm',
      'text-foreground/80',
      'border-l-2 border-transparent',
      'hover:border-l-primary hover:bg-primary/10 hover:text-primary',
      'transition-all duration-150',
    ],
    itemIndex: [
      'font-mono text-xs',
      'text-primary/70',
    ],
    itemText: [
      'font-mono',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [],
        viewport: [],
        content: [],
        header: [],
        item: [],
        itemIndex: [],
        itemText: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};

export const scrollBarConfig = {
  slots: {
    base: [
      'flex touch-none select-none transition-colors',
      'bg-black/30',
      // 垂直方向
      'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5',
      // 水平方向
      'data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col',
    ],
    thumb: [
      'relative flex-1 rounded-[2px]',
      'bg-primary/60',
      'hover:bg-primary',
      'shadow-[0_0_6px_var(--primary)]',
      'transition-all duration-200',
    ],
  },
  variants: {
    variant: {
      default: {
        base: [],
        thumb: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
