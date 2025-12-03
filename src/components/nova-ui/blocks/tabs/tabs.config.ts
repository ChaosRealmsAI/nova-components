/**
 * Tabs Base Config
 *
 * Block 级别配置，定义标签页组件的布局和样式
 * 依赖的 Atoms: button（TabsTrigger 在样式上类似 Button）
 */
export const tabsBaseConfig = {
  slots: {
    root: 'flex flex-col gap-2',
    list: 'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
    trigger:
      'data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm',
    content: 'flex-1 outline-none',
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
        list: 'bg-transparent rounded-none border-b p-0 h-auto',
        trigger:
          'rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none',
        content: '',
      },
    },
  },
  defaultVariants: {
    variant: 'default' as const,
  },
} as const;
