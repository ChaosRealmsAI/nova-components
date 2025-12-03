/**
 * Tooltip Base Configuration (tv)
 *
 * Slots:
 * - content: 提示内容容器
 * - arrow: 箭头
 */

export const tooltipBaseConfig = {
  slots: {
    content: [
      'z-50 w-fit rounded-md px-3 py-1.5 text-[length:var(--text-xs)] text-balance',
      'bg-foreground text-background',
      'animate-in fade-in-0 zoom-in-95',
      'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    ],
    arrow: 'bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]',
  },
  variants: {
    variant: {
      default: {
        content: '',
        arrow: '',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
} as const;
