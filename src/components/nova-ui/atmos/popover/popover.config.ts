/**
 * Popover Base Configuration (tv)
 *
 * Slots:
 * - content: 弹出内容容器
 */

export const popoverBaseConfig = {
  slots: {
    content: [
      'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden text-[length:var(--text-sm)]',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],
  },
  variants: {
    variant: {
      default: {
        content: '',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
} as const;
