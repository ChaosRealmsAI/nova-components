/**
 * Toggle Component Entry
 */

import { Toggle, toggleBaseConfig } from '@/components/nova-ui/atmos/toggle';
import type { ComponentRegistryEntry } from '../types';

export const toggleEntry: ComponentRegistryEntry = {
  type: 'toggle',
  label: 'Toggle',
  labelKey: 'componentTypeToggle',
  category: 'atoms',
  component: Toggle,
  baseConfig: toggleBaseConfig,
  props: [
    {
      name: 'pressed',
      type: 'boolean',
      label: 'Pressed',
      labelKey: 'propPressed',
      defaultValue: false,
    },
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
        { value: 'sm', label: 'Small', labelKey: 'valSmall' },
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'lg', label: 'Large', labelKey: 'valLarge' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'disabled',
      type: 'boolean',
      label: 'Disabled',
      labelKey: 'propDisabled',
      defaultValue: false,
    },
    {
      name: 'children',
      type: 'text',
      label: 'Text',
      labelKey: 'propText',
      defaultValue: 'B',
    },
  ],
  defaultProps: {
    pressed: false,
    variant: 'default',
    size: 'default',
    disabled: false,
    children: 'B',
  },
  availableEffects: ['glow'],
};
