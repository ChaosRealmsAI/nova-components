/**
 * Select Component Entry
 */

import { SelectDemo, selectBaseConfig, selectAtoms } from '@/components/nova-ui/blocks/select';
import type { ComponentRegistryEntry } from '../types';

export const selectEntry: ComponentRegistryEntry = {
  type: 'select',
  label: 'Select',
  labelKey: 'componentTypeSelect',
  category: 'blocks',
  component: SelectDemo,
  baseConfig: selectBaseConfig,
  atoms: selectAtoms,
  props: [
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
      name: 'size',
      type: 'select',
      label: 'Size',
      labelKey: 'propSize',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'sm', label: 'Small', labelKey: 'valSmall' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'placeholder',
      type: 'text',
      label: 'Placeholder',
      labelKey: 'propPlaceholder',
      defaultValue: 'Select an option',
      defaultValueKey: 'selectPlaceholder',
    },
    {
      name: 'options',
      type: 'json',
      label: 'Options',
      labelKey: 'propOptions',
      defaultValue: [
        { value: 'apple', label: 'Apple', labelKey: 'selectOptionApple' },
        { value: 'banana', label: 'Banana', labelKey: 'selectOptionBanana' },
        { value: 'orange', label: 'Orange', labelKey: 'selectOptionOrange' },
        { value: 'grape', label: 'Grape', labelKey: 'selectOptionGrape', disabled: true },
      ],
    },
  ],
  defaultProps: {
    variant: 'default',
    size: 'default',
    placeholder: 'Select an option',
    options: [
      { value: 'apple', label: 'Apple', labelKey: 'selectOptionApple' },
      { value: 'banana', label: 'Banana', labelKey: 'selectOptionBanana' },
      { value: 'orange', label: 'Orange', labelKey: 'selectOptionOrange' },
      { value: 'grape', label: 'Grape', labelKey: 'selectOptionGrape', disabled: true },
    ],
  },
  availableEffects: [],
};
