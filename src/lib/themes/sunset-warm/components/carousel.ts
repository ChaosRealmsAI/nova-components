import { type CarouselSlots } from '@/components/nova-ui/blocks/carousel';

export const carouselConfig: {
  slots: Partial<Record<CarouselSlots, string | string[]>>;
} = {
  slots: {
    root: '',
    content: '',
    item: '',
    previous: 'bg-white/80 border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700 shadow-sm rounded-full',
    next: 'bg-white/80 border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-orange-700 shadow-sm rounded-full',
  },
};
