/**
 * Resizable Component Style - Cyber Neon
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * Core Concept: "Neon Resizable"
 * - Simple resizable panels with neon handle
 * ═══════════════════════════════════════════════════════════════════════════
 */
export const resizableConfig = {
  slots: {
    /**
     * panelGroup: 面板组
     */
    panelGroup: [
      'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
    ],

    /**
     * panel: 面板
     */
    panel: [],

    /**
     * handle: 调整手柄
     * ─────────────────────────────────────────────────────────────────────
     * hover 时发光
     */
    handle: [
      'relative flex w-px items-center justify-center',
      'bg-border',
      'after:absolute after:inset-y-0 after:left-1/2',
      'after:w-1 after:-translate-x-1/2',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:ring-offset-1',
      'data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full',
      'data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0',
      'hover:bg-primary',
      'hover:shadow-[0_0_4px_color-mix(in_srgb,var(--primary)_40%,transparent)]',
    ],

    /**
     * handleIcon: 手柄图标
     */
    handleIcon: [
      'z-10 flex h-4 w-3 items-center justify-center',
      'rounded-[2px] border border-border',
      'bg-surface-1',
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
