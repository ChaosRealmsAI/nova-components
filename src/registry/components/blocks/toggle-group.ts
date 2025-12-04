/**
 * ToggleGroup Component Entry
 */

import { ToggleGroupDemo, toggleGroupAtoms } from '@/components/nova-ui/blocks/toggle-group';
import type { ComponentRegistryEntry } from '../types';

export const toggleGroupEntry: ComponentRegistryEntry = {
  type: 'toggle-group',
  label: 'Toggle Group',
  labelKey: 'componentTypeToggleGroup',
  category: 'blocks',
  component: ToggleGroupDemo,
  baseConfig: null,
  atoms: toggleGroupAtoms,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
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
    {
      name: 'type',
      type: 'select',
      label: 'Type',
      labelKey: 'propType',
      options: [
        { value: 'single', label: 'Single', labelKey: 'valSingle' },
        { value: 'multiple', label: 'Multiple', labelKey: 'valMultiple' },
      ],
      defaultValue: 'multiple',
    },
  ],
  defaultProps: {
    variant: 'default',
    size: 'default',
    type: 'multiple',
  },
  availableEffects: [],
};
