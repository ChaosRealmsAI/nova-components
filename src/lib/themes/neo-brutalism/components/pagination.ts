export const paginationConfig = {
  slots: {
    root: 'mx-auto flex w-full justify-center',
    content: 'flex flex-row items-center gap-1',
    item: '',
    link: [
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
      'h-10 w-10 border-2 border-transparent hover:bg-accent hover:text-accent-foreground hover:border-black aria-selected:bg-accent aria-selected:text-accent-foreground aria-selected:border-black',
    ],
    ellipsis: 'flex h-9 w-9 items-center justify-center',
    list: 'flex flex-row items-center gap-1',
  },
};
