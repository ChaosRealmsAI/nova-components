/**
 * InputGroup Component Entry
 */

import { InputGroupDemo } from '@/components/nova-ui/blocks/input-group';
import type { ComponentRegistryEntry } from '../types';

export const inputGroupEntry: ComponentRegistryEntry = {
  type: 'input-group',
  label: 'Input Group',
  labelKey: 'componentTypeInputGroup',
  category: 'blocks',
  component: InputGroupDemo,
  baseConfig: null,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'attached', label: 'Attached', labelKey: 'valAttached' },
      ],
      defaultValue: 'attached',
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
      name: 'placeholder',
      type: 'text',
      label: 'Placeholder',
      labelKey: 'propPlaceholder',
      defaultValue: 'Enter text...',
      defaultValueKey: 'inputGroupPlaceholder',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      label: 'Button Label',
      labelKey: 'propButtonLabel',
      defaultValue: 'Search',
      defaultValueKey: 'inputGroupButtonLabel',
    },
  ],
  defaultProps: {
    variant: 'attached',
    size: 'default',
    placeholder: 'Enter text...',
    buttonLabel: 'Search',
  },
  availableEffects: [],
};
