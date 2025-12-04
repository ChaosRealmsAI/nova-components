/**
 * Tabs 组件样式 - Shadcn Default Theme
 */
export const tabsConfig = {
  slots: {
    root: 'flex flex-col gap-2',
    list: 'inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground',
    trigger:
      'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
    content:
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  },
  variants: {
    variant: {
      default: {
        root: '',
        list: '',
        trigger: '',
        content: '',
      },
      underline: {
        root: '',
        list: 'w-full justify-start rounded-none bg-transparent p-0 border-b h-auto',
        trigger:
          'rounded-none border-b-2 border-transparent px-4 py-2 bg-transparent shadow-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-primary transition-none',
        content: '',
      },
    },
  },
};
