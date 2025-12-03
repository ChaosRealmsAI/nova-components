/**
 * Drawer Base Config
 *
 * Block 级别配置，定义布局和方向变体
 * 使用 vaul 库实现的抽屉组件
 *
 * Slots:
 * - overlay: 背景遮罩层
 * - content: 抽屉主体容器
 * - header: 头部区域
 * - title: 标题
 * - description: 描述文本
 * - footer: 底部区域
 * - handle: 拖拽手柄（仅 bottom 方向显示）
 *
 * 依赖的 Atoms: button, dialog
 */
export const drawerBaseConfig = {
  slots: {
    overlay: [
      'fixed inset-0 z-50 bg-black/50',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    ],
    content: [
      'group/drawer-content bg-background fixed z-50 flex h-auto flex-col border',
      'text-[length:var(--text-sm)]',
    ],
    header: [
      'flex flex-col gap-0.5 p-4',
      'group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center',
      'group-data-[vaul-drawer-direction=top]/drawer-content:text-center',
      'md:gap-1.5 md:text-left',
    ],
    title: 'text-foreground font-semibold text-[length:var(--text-lg)]',
    description: 'text-muted-foreground text-[length:var(--text-sm)]',
    footer: 'mt-auto flex flex-col gap-2 p-4',
    handle: 'bg-muted mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full',
  },
  variants: {
    direction: {
      bottom: {
        content: [
          'inset-x-0 bottom-0 mt-24 max-h-[80vh] rounded-t-lg border-t',
        ],
        handle: 'block',
      },
      top: {
        content: [
          'inset-x-0 top-0 mb-24 max-h-[80vh] rounded-b-lg border-b',
        ],
        handle: 'hidden',
      },
      left: {
        content: [
          'inset-y-0 left-0 w-3/4 border-r sm:max-w-sm',
        ],
        handle: 'hidden',
      },
      right: {
        content: [
          'inset-y-0 right-0 w-3/4 border-l sm:max-w-sm',
        ],
        handle: 'hidden',
      },
    },
  },
  defaultVariants: {
    direction: 'bottom',
  },
} as const;
