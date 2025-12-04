export const sliderConfig = {
  slots: {
    base: 'relative flex w-full touch-none select-none items-center',
    track: 'relative h-4 w-full grow overflow-hidden rounded-full bg-secondary/50 border-2 border-black',
    range: 'absolute h-full bg-primary',
    thumb: 'block h-6 w-6 rounded-full border-2 border-black bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
  },
};
