import { type CarouselSlots } from '@/components/nova-ui/blocks/carousel';

export const carouselConfig: {
  slots: Partial<Record<CarouselSlots, string | string[]>>;
} = {
  slots: {
    root: '',
    content: '',
    item: '',
    previous: 'bg-background/50 border-primary/50 hover:bg-primary hover:text-primary-foreground',
    next: 'bg-background/50 border-primary/50 hover:bg-primary hover:text-primary-foreground',
  },
};
