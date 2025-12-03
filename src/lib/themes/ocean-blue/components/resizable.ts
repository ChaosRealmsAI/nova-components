import { type ResizableSlots } from '@/components/nova-ui/blocks/resizable';

export const resizableConfig: {
  slots: Partial<Record<ResizableSlots, string | string[]>>;
} = {
  slots: {
    panelGroup: 'text-foreground',
    handle: 'bg-blue-200 hover:bg-blue-400 transition-colors',
    handleIcon: 'border-blue-200 bg-blue-50 text-blue-500',
  },
};
