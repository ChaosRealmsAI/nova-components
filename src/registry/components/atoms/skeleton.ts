/**
 * Skeleton Component Entry
 */

import { Skeleton } from '@/components/nova-ui/atmos/skeleton';
import type { ComponentRegistryEntry } from '../types';

export const skeletonEntry: ComponentRegistryEntry = {
  type: 'skeleton',
  label: 'Skeleton',
  labelKey: 'componentTypeSkeleton',
  category: 'atoms',
  component: Skeleton,
  baseConfig: null,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'circular', label: 'Circular', labelKey: 'valCircular' },
        { value: 'text', label: 'Text', labelKey: 'valText' },
      ],
      defaultValue: 'default',
    },
  ],
  defaultProps: {
    variant: 'default',
  },
  availableEffects: [],
};