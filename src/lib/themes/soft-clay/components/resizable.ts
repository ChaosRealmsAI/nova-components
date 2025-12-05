/**
 * Resizable Component Style - Soft Clay
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Soft Clay Resizable"
 * - Handle: Inset separator line (neumorphic groove)
 * - Panels: Clean layout
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const resizableConfig = {
  slots: {
    /**
     * panelGroup: 面板组
     */
    panelGroup: [
      'flex h-full w-full',
      'data-[panel-group-direction=vertical]:flex-col',
    ],

    /**
     * panel: 面板
     */
    panel: [
      'relative flex',
    ],

    /**
     * handle: 调整手柄
     */
    handle: [
      'relative flex items-center justify-center',
      'bg-transparent',
      'w-2 h-full',
      'after:absolute after:inset-y-0 after:left-1/2 after:-translate-x-1/2',
      'after:w-1',
      'after:rounded-full',
      'after:bg-gradient-to-b after:from-[var(--shadow-dark)] after:to-[var(--shadow-light)]',
      'hover:after:bg-primary/20',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
      'data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:h-2',
      'data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full',
      'data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:top-1/2',
      'data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2',
      'data-[panel-group-direction=vertical]:after:bg-gradient-to-r',
      'transition-all duration-200 ease-in-out',
    ],

    /**
     * handleIcon: 手柄图标
     */
    handleIcon: [
      'h-4 w-4',
      'text-muted-foreground',
    ],
  },
  variants: {
    variant: {
      /**
       * default: 默认样式
       */
      default: {
        panelGroup: [],
        panel: [],
        handle: [],
        handleIcon: [],
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
};
