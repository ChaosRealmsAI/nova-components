/**
 * Checkbox Component Entry
 */

import { Checkbox, checkboxBaseConfig } from '@/components/nova-ui/atmos/checkbox';
import type { ComponentRegistryEntry } from '../types';

export const checkboxEntry: ComponentRegistryEntry = {
  type: 'checkbox',
  label: 'Checkbox',
  labelKey: 'componentTypeCheckbox',
  category: 'atoms',
  component: Checkbox,
  baseConfig: checkboxBaseConfig,
  props: [
    {
      name: 'checked',
      type: 'boolean',
      label: 'Checked',
      labelKey: 'propChecked',
      defaultValue: false,
    },
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'destructive', label: 'Destructive', labelKey: 'valDestructive' },
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
      name: 'disabled',
      type: 'boolean',
      label: 'Disabled',
      labelKey: 'propDisabled',
      defaultValue: false,
    },
  ],
  defaultProps: {
    checked: false,
    variant: 'default',
    size: 'default',
    disabled: false,
  },
  availableEffects: ['glow', 'ripple'],
};
