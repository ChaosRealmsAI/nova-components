/**
 * Carousel Component Entry
 */

import { CarouselDemo, carouselAtoms } from '@/components/nova-ui/blocks/carousel';
import type { ComponentRegistryEntry } from '../types';

export const carouselEntry: ComponentRegistryEntry = {
  type: 'carousel',
  label: 'Carousel',
  labelKey: 'componentTypeCarousel',
  category: 'blocks',
  component: CarouselDemo,
  baseConfig: null,
  atoms: carouselAtoms,
  props: [
    {
      name: 'orientation',
      type: 'select',
      label: 'Orientation',
      labelKey: 'propOrientation',
      options: [
        { value: 'horizontal', label: 'Horizontal', labelKey: 'valHorizontal' },
        { value: 'vertical', label: 'Vertical', labelKey: 'valVertical' },
      ],
      defaultValue: 'horizontal',
    },
    {
      name: 'loop',
      type: 'boolean',
      label: 'Loop',
      labelKey: 'propLoop',
      defaultValue: false,
    },
  ],
  defaultProps: {
    orientation: 'horizontal',
    loop: false,
  },
  availableEffects: [],
};
