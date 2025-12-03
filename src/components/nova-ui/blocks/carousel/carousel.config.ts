/**
 * Carousel Base Config
 * Block 级别配置
 * 依赖 Atoms: button
 */
export const carouselBaseConfig = {
  slots: {
    root: 'relative',
    content: 'flex',
    item: 'min-w-0 shrink-0 grow-0 basis-full',
    previous: 'absolute h-8 w-8 rounded-full',
    next: 'absolute h-8 w-8 rounded-full',
  },
  variants: {
    orientation: {
      horizontal: {
        content: '-ml-4',
        item: 'pl-4',
        previous: '-left-12 top-1/2 -translate-y-1/2',
        next: '-right-12 top-1/2 -translate-y-1/2',
      },
      vertical: {
        content: '-mt-4 flex-col',
        item: 'pt-4',
        previous: '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        next: '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      },
    },
  },
  defaultVariants: {
    orientation: 'horizontal' as const,
  },
} as const;
