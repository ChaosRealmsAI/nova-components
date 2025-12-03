/**
 * Input Component Entry
 */

import { Input, inputBaseConfig } from '@/components/nova-ui/atmos/input';
import type { ComponentRegistryEntry } from '../types';

export const inputEntry: ComponentRegistryEntry = {
  type: 'input',
  label: 'Input',
  labelKey: 'componentTypeInput',
  category: 'atoms',
  component: Input,
  baseConfig: inputBaseConfig,
  props: [
    {
      name: 'placeholder',
      type: 'text',
      label: 'Placeholder',
      labelKey: 'propPlaceholder',
      defaultValue: 'Enter text...',
      defaultValueKey: 'inputPlaceholder',
    },
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'filled', label: 'Filled', labelKey: 'valFilled' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'inputSize',
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
        { value: 'text', label: 'Text', labelKey: 'valText' },
        { value: 'password', label: 'Password', labelKey: 'valPassword' },
        { value: 'email', label: 'Email', labelKey: 'valEmail' },
        { value: 'number', label: 'Number', labelKey: 'valNumber' },
      ],
      defaultValue: 'text',
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
    placeholder: 'Enter text...',
    variant: 'default',
    inputSize: 'default',
    type: 'text',
    disabled: false,
  },
  availableEffects: ['tilt', 'glow'],
};
