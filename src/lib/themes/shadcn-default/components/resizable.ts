/**
 * Resizable 组件样式 - Shadcn Default Theme
 */
export const resizableConfig = {
  slots: {
    panelGroup: 'text-foreground',
    panel: '',
    handle: 'bg-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1',
    handleIcon: 'border bg-border',
  },
  variants: {
    variant: {
      default: {
        panelGroup: '',
        panel: '',
        handle: '',
        handleIcon: '',
      },
    },
  },
};
