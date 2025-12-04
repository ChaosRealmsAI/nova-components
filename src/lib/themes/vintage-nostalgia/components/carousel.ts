/**
 * Carousel 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const carouselConfig = {
  slots: {
    root: 'relative w-full',
    content: 'overflow-hidden rounded-[2px]',
    item: 'min-w-0 shrink-0 grow-0 basis-full',
    previous: [
      'absolute h-8 w-8 left-2 top-1/2 -translate-y-1/2',
      'inline-flex items-center justify-center',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-surface-1',
      'shadow-[2px_2px_0_0_rgba(44,24,16,0.2)]',
      'transition-all duration-150',
      'hover:bg-surface-2',
      'disabled:pointer-events-none disabled:opacity-50',
    ],
    next: [
      'absolute h-8 w-8 right-2 top-1/2 -translate-y-1/2',
      'inline-flex items-center justify-center',
      'rounded-[2px]',
      'border-2 border-border',
      'bg-surface-1',
      'shadow-[2px_2px_0_0_rgba(44,24,16,0.2)]',
      'transition-all duration-150',
      'hover:bg-surface-2',
      'disabled:pointer-events-none disabled:opacity-50',
    ],
  },
};
