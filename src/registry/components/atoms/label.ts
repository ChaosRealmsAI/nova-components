/**
 * Label Component Entry
 */

import { Label } from '@/components/nova-ui/atmos/label';
import type { ComponentRegistryEntry } from '../types';

export const labelEntry: ComponentRegistryEntry = {
  type: 'label',
  label: 'Label',
  labelKey: 'componentTypeLabel',
  category: 'atoms',
  component: Label,
  baseConfig: null,
  props: [
    {
      name: 'children',
      type: 'text',
      label: 'Text',
      labelKey: 'propText',
      defaultValue: 'Label',
      defaultValueKey: 'labelContentDefault',
    },
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'muted', label: 'Muted', labelKey: 'valMuted' },
        { value: 'error', label: 'Error', labelKey: 'valError' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'size',
      type: 'select',
      label: 'Size',
      labelKey: 'propSize',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'sm', label: 'Small', labelKey: 'valSmall' },
        { value: 'lg', label: 'Large', labelKey: 'valLarge' },
      ],
      defaultValue: 'default',
    },
  ],
  defaultProps: {
    children: 'Label',
    variant: 'default',
    size: 'default',
  },
  availableEffects: ['tilt', 'glow'],
};
