export const carouselConfig = {
  slots: {
    root: 'relative',
    content: 'flex',
    item: 'min-w-0 shrink-0 grow-0 basis-full',
    previous: 'absolute h-8 w-8 rounded-full border-2 border-black bg-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]',
    next: 'absolute h-8 w-8 rounded-full border-2 border-black bg-background shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]',
  },
};