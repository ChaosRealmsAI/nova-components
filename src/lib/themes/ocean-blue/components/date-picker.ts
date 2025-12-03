import { type DatePickerSlots } from '@/components/nova-ui/blocks/date-picker';

export const datePickerConfig: {
  slots: Partial<Record<DatePickerSlots, string | string[]>>;
} = {
  slots: {
    trigger: 'border-blue-200 hover:border-blue-400 hover:bg-blue-50 text-foreground',
    content: 'border-blue-100 shadow-lg shadow-blue-900/5 text-foreground',
    icon: 'text-blue-400/70',
  },
};
