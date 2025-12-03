import { type CarouselSlots } from '@/components/nova-ui/blocks/carousel';

export const carouselConfig: {
  slots: Partial<Record<CarouselSlots, string | string[]>>;
} = {
  slots: {
    root: '',
    content: '',
    item: '',
    previous: 'bg-white/80 border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 shadow-sm',
    next: 'bg-white/80 border-blue-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700 shadow-sm',
  },
};
