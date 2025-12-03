/**
 * Kbd Component Entry
 */

import { Kbd, kbdBaseConfig } from '@/components/nova-ui/atmos/kbd';
import type { ComponentRegistryEntry } from '../types';

export const kbdEntry: ComponentRegistryEntry = {
  type: 'kbd',
  label: 'Kbd',
  labelKey: 'componentTypeKbd',
  category: 'atoms',
  component: Kbd,
  baseConfig: kbdBaseConfig,
  props: [
    {
      name: 'children',
      type: 'text',
      label: 'Key',
      labelKey: 'propKey',
      defaultValue: '⌘',
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
        { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
      ],
      defaultValue: 'default',
    },
  ],
  defaultProps: {
    children: '⌘',
    size: 'default',
    variant: 'default',
  },
  availableEffects: [],
};
