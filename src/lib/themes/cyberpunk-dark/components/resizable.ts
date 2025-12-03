import { type ResizableSlots } from '@/components/nova-ui/blocks/resizable';

export const resizableConfig: {
  slots: Partial<Record<ResizableSlots, string | string[]>>;
} = {
  slots: {
    panelGroup: 'text-foreground',
    handle: 'bg-primary/50 hover:bg-primary transition-colors data-[panel-group-direction=vertical]:after:bg-primary/50 after:bg-primary/50',
    handleIcon: 'border-primary/50 bg-background text-primary',
  },
};
