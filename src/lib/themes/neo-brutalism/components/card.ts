export const cardConfig = {
  slots: {
    base: [
      'rounded-lg',
      'border-2 border-black',
      'bg-card text-card-foreground',
      'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]',
      'flex flex-col gap-6 py-6',
    ],
    header: 'grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6',
    title: 'leading-none font-bold text-2xl',
    description: 'text-sm text-muted-foreground font-medium',
    action: 'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
    content: 'px-6',
    footer: 'flex items-center px-6',
  },
};