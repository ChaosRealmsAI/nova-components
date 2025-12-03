import { type ResizableSlots } from '@/components/nova-ui/blocks/resizable';

export const resizableConfig: {
  slots: Partial<Record<ResizableSlots, string | string[]>>;
} = {
  slots: {
    panelGroup: 'text-foreground',
    handle: 'bg-orange-200 hover:bg-orange-400 transition-colors',
    handleIcon: 'border-orange-200 bg-orange-50 text-orange-500',
  },
};
