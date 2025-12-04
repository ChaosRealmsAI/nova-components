export const radioGroupConfig = {
  slots: {
    base: 'grid gap-2',
  },
};

export const radioGroupItemConfig = {
  slots: {
    base: [
      'aspect-square h-5 w-5 rounded-full border-2 border-black text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
      'data-[state=checked]:bg-black data-[state=checked]:text-white',
    ],
    indicator: 'flex items-center justify-center',
    icon: 'h-2.5 w-2.5 fill-current text-current',
  },
};
