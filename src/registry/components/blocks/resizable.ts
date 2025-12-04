/**
 * Resizable Component Entry
 */

import { ResizableDemo, resizableAtoms } from '@/components/nova-ui/blocks/resizable';
import type { ComponentRegistryEntry } from '../types';

export const resizableEntry: ComponentRegistryEntry = {
  type: 'resizable',
  label: 'Resizable',
  labelKey: 'componentTypeResizable',
  category: 'blocks',
  component: ResizableDemo,
  baseConfig: null,
  atoms: resizableAtoms,
  props: [
    {
      name: 'direction',
      type: 'select',
      label: 'Direction',
      labelKey: 'propDirection',
      options: [
        { value: 'horizontal', label: 'Horizontal', labelKey: 'valHorizontal' },
        { value: 'vertical', label: 'Vertical', labelKey: 'valVertical' },
      ],
      defaultValue: 'horizontal',
    },
  ],
  defaultProps: {
    direction: 'horizontal',
  },
  availableEffects: [],
};
