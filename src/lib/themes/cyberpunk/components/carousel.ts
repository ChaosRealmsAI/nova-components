/**
 * Carousel 组件样式 - Cyberpunk (Image Slider)
 */
export const carouselConfig = {
  slots: {
    root: [
      'relative',
    ],
    
    content: [
      'flex',
      '-ml-4',
    ],
    
    item: [
      'min-w-0 shrink-0 grow-0 basis-full pl-4',
    ],
    
    previous: [
      'absolute left-2 top-1/2 -translate-y-1/2',
      'rounded-none border-primary text-primary bg-black/50 hover:bg-primary hover:text-black',
    ],
    
    next: [
      'absolute right-2 top-1/2 -translate-y-1/2',
      'rounded-none border-primary text-primary bg-black/50 hover:bg-primary hover:text-black',
    ],
  },
};