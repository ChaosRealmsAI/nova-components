/**
 * Collapsible Component Entry
 */

import { CollapsibleDemo } from '@/components/nova-ui/atmos/collapsible';
import type { ComponentRegistryEntry } from '../types';

export const collapsibleEntry: ComponentRegistryEntry = {
  type: 'collapsible',
  label: 'Collapsible',
  labelKey: 'componentTypeCollapsible',
  category: 'atoms',
  component: CollapsibleDemo,
  baseConfig: null,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'bordered', label: 'Bordered', labelKey: 'valBordered' },
        { value: 'ghost', label: 'Ghost', labelKey: 'valGhost' },
      ],
      defaultValue: 'default',
    },
  ],
  defaultProps: {
    variant: 'default',
  },
  availableEffects: [],
};
