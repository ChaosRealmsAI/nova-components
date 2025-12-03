/**
 * ButtonGroup Component Entry
 */

import { ButtonGroupDemo, buttonGroupBaseConfig, buttonGroupAtoms } from '@/components/nova-ui/blocks/button-group';
import type { ComponentRegistryEntry } from '../types';

export const buttonGroupEntry: ComponentRegistryEntry = {
  type: 'button-group',
  label: 'Button Group',
  labelKey: 'componentTypeButtonGroup',
  category: 'blocks',
  component: ButtonGroupDemo,
  baseConfig: buttonGroupBaseConfig,
  atoms: buttonGroupAtoms,
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
      name: 'attached',
      type: 'boolean',
      label: 'Attached',
      labelKey: 'propAttached',
      defaultValue: true,
    },
  ],
  defaultProps: {
    variant: 'default',
    size: 'default',
    attached: true,
  },
  availableEffects: [],
};
