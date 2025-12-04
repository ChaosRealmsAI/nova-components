/**
 * Spinner Component Entry
 */

import { Spinner } from '@/components/nova-ui/atmos/spinner';
import type { ComponentRegistryEntry } from '../types';

export const spinnerEntry: ComponentRegistryEntry = {
  type: 'spinner',
  label: 'Spinner',
  labelKey: 'componentTypeSpinner',
  category: 'atoms',
  component: Spinner,
  baseConfig: null,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'secondary', label: 'Secondary', labelKey: 'valSecondary' },
        { value: 'muted', label: 'Muted', labelKey: 'valMuted' },
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
        { value: 'xl', label: 'Extra Large', labelKey: 'valExtraLarge' },
      ],
      defaultValue: 'default',
    },
  ],
  defaultProps: {
    variant: 'default',
    size: 'default',
  },
  availableEffects: ['glow'],
};
