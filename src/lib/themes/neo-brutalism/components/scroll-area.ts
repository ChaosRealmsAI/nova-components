export const scrollAreaConfig = {
  slots: {
    base: 'relative overflow-hidden border-2 border-black rounded-md h-72',
    viewport: 'h-full w-full rounded-[inherit]',
    content: 'p-4',
    header: 'text-sm font-bold text-black mb-4 border-b-2 border-black pb-2 uppercase tracking-wide',
    item: 'flex items-center justify-between py-2 px-2 border-b-2 border-black last:border-0 hover:bg-secondary hover:text-secondary-foreground transition-none cursor-default',
    itemIndex: 'hidden', // Hide index for cleaner look
    itemText: 'text-sm font-bold',
  },
};

export const scrollBarConfig = {
  slots: {
    base: 'flex touch-none select-none transition-colors p-px bg-muted border-l-2 border-black',
    thumb: 'relative flex-1 rounded-none bg-black hover:bg-primary',
  },
  variants: {
    orientation: {
      vertical: 'h-full w-4',
      horizontal: 'h-4 flex-col border-t-2 border-black border-l-0',
    },
  },
};