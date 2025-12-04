/**
 * Textarea Component Entry
 */

import { Textarea } from '@/components/nova-ui/atmos/textarea';
import type { ComponentRegistryEntry } from '../types';

export const textareaEntry: ComponentRegistryEntry = {
  type: 'textarea',
  label: 'Textarea',
  labelKey: 'componentTypeTextarea',
  category: 'atoms',
  component: Textarea,
  baseConfig: null,
  props: [
    {
      name: 'placeholder',
      type: 'text',
      label: 'Placeholder',
      labelKey: 'propPlaceholder',
      defaultValue: 'Enter your message...',
      defaultValueKey: 'textareaPlaceholder',
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
      name: 'textareaSize',
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
  ],
  defaultProps: {
    placeholder: 'Enter your message...',
    variant: 'default',
    textareaSize: 'default',
    disabled: false,
  },
  availableEffects: ['glow'],
};
