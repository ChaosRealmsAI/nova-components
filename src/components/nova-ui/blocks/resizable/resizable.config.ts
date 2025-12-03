import { type VariantProps, tv } from 'tailwind-variants';

export const resizableBaseConfig = {
  slots: {
    panelGroup: 'flex h-full w-full data-[panel-group-direction=vertical]:flex-col text-foreground',
    panel: '',
    handle: 'relative flex w-px items-center justify-center bg-border focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full [&[data-panel-group-direction=vertical]>div]:rotate-90 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 after:content-[""] data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2',
    handleIcon: 'z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border',
  },
  variants: {
    variant: {
      default: {},
    },
  },
  defaultVariants: {
    variant: 'default',
  },
} as const;

export type ResizableSlots = keyof typeof resizableBaseConfig.slots;
