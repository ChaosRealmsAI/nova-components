/**
 * Resizable 组件 - Vintage Nostalgia 复古怀旧风格
 */
export const resizableConfig = {
  slots: {
    panelGroup: 'flex h-full w-full',
    panel: '',
    handle: [
      'relative flex w-px items-center justify-center',
      'bg-border',
      'transition-colors duration-150',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
      'data-[resize-handle-state=hover]:bg-primary',
      'data-[resize-handle-state=drag]:bg-primary',
    ],
    handleIcon: 'h-4 w-4 rotate-90 text-border',
  },
  variants: {
    direction: {
      horizontal: {
        handle: 'h-full w-px',
      },
      vertical: {
        handle: 'w-full h-px',
        handleIcon: 'rotate-0',
      },
    },
  },
};
