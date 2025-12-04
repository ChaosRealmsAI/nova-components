/**
 * Progress Component Entry
 */

import { Progress } from '@/components/nova-ui/atmos/progress';
import type { ComponentRegistryEntry } from '../types';

export const progressEntry: ComponentRegistryEntry = {
  type: 'progress',
  label: 'Progress',
  labelKey: 'componentTypeProgress',
  category: 'atoms',
  component: Progress,
  baseConfig: null,
  props: [
    {
      name: 'value',
      type: 'number',
      label: 'Value',
      labelKey: 'propValue',
      defaultValue: 50,
    },
    {
      name: 'max',
      type: 'number',
      label: 'Max',
      labelKey: 'propMax',
      defaultValue: 100,
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
    value: 50,
    max: 100,
    variant: 'default',
  },
  availableEffects: ['glow', 'ripple'],
};
