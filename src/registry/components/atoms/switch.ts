/**
 * Switch Component Entry
 */

import { Switch } from '@/components/nova-ui/atmos/switch';
import type { ComponentRegistryEntry } from '../types';

export const switchEntry: ComponentRegistryEntry = {
  type: 'switch',
  label: 'Switch',
  labelKey: 'componentTypeSwitch',
  category: 'atoms',
  component: Switch,
  baseConfig: null,
  props: [
    {
      name: 'checked',
      type: 'boolean',
      label: 'Checked',
      labelKey: 'propChecked',
      defaultValue: false,
    },
    {
      name: 'disabled',
      type: 'boolean',
      label: 'Disabled',
      labelKey: 'propDisabled',
      defaultValue: false,
    },
    {
      name: 'size',
      type: 'select',
      label: 'Size',
      labelKey: 'propSize',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
      ],
      defaultValue: 'default',
    },
  ],
  defaultProps: {
    checked: false,
    disabled: false,
    size: 'default',
    variant: 'default',
  },
  availableEffects: ['glow', 'ripple'],
};
