import { type DatePickerSlots } from '@/components/nova-ui/blocks/date-picker';

export const datePickerConfig: {
  slots: Partial<Record<DatePickerSlots, string | string[]>>;
} = {
  slots: {
    trigger: 'border-orange-200 hover:border-orange-400 hover:bg-orange-50 rounded-xl text-foreground',
    content: 'border-orange-100 shadow-xl shadow-orange-900/5 rounded-xl text-foreground',
    icon: 'text-orange-400/70',
  },
};
