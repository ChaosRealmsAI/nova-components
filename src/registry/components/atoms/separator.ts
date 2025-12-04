/**
 * Separator Component Entry
 */

import { Separator } from '@/components/nova-ui/atmos/separator';
import type { ComponentRegistryEntry } from '../types';

export const separatorEntry: ComponentRegistryEntry = {
  type: 'separator',
  label: 'Separator',
  labelKey: 'componentTypeSeparator',
  category: 'atoms',
  component: Separator,
  baseConfig: null,
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
      name: 'decorative',
      type: 'boolean',
      label: 'Decorative',
      labelKey: 'propDecorative',
      defaultValue: true,
    },
  ],
  defaultProps: {
    orientation: 'horizontal',
    decorative: true,
  },
  availableEffects: [],
};
