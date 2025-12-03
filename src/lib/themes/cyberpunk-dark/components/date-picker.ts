import { type DatePickerSlots } from '@/components/nova-ui/blocks/date-picker';

export const datePickerConfig: {
  slots: Partial<Record<DatePickerSlots, string | string[]>>;
} = {
  slots: {
    trigger: 'border-primary/50 hover:border-primary hover:bg-primary/10 hover:text-primary-foreground text-foreground',
    content: 'border-primary/50 bg-background/95 backdrop-blur-xl text-foreground',
    icon: 'text-primary/70',
  },
};
