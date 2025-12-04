export const tabsConfig = {
  slots: {
    root: '',
    list: [
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      'border-2 border-black bg-background p-0 h-auto gap-0 rounded-md overflow-hidden',
    ],
    trigger: [
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none',
      'rounded-none border-r-2 border-black last:border-r-0 h-9',
      'hover:bg-accent hover:text-accent-foreground',
    ],
    content: [
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'rounded-md border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    ],
  },
};