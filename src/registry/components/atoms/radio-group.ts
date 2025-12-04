/**
 * RadioGroup Component Entry
 */

import { RadioGroup } from '@/components/nova-ui/atmos/radio-group';
import type { ComponentRegistryEntry } from '../types';

export const radioGroupEntry: ComponentRegistryEntry = {
  type: 'radio-group',
  label: 'Radio Group',
  labelKey: 'componentTypeRadioGroup',
  category: 'atoms',
  component: RadioGroup,
  baseConfig: null,
  props: [
    {
      name: 'defaultValue',
      type: 'text',
      label: 'Default Value',
      labelKey: 'propDefaultValue',
      defaultValue: 'option-1',
    },
    {
      name: 'options',
      type: 'json',
      label: 'Options',
      labelKey: 'propOptions',
      defaultValue: [
        { value: 'option-1', label: 'Default', labelKey: 'radioOption1' },
        { value: 'option-2', label: 'Comfortable', labelKey: 'radioOption2' },
        { value: 'option-3', label: 'Compact', labelKey: 'radioOption3' },
      ],
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
    {
      name: 'disabled',
      type: 'boolean',
      label: 'Disabled',
      labelKey: 'propDisabled',
      defaultValue: false,
    },
  ],
  defaultProps: {
    defaultValue: 'option-1',
    variant: 'default',
    disabled: false,
    options: [
      { value: 'option-1', label: 'Default', labelKey: 'radioOption1' },
      { value: 'option-2', label: 'Comfortable', labelKey: 'radioOption2' },
      { value: 'option-3', label: 'Compact', labelKey: 'radioOption3' },
    ],
  },
  availableEffects: ['glow'],
};
