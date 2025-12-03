/**
 * Card Component Entry
 */

import { CardDemo, cardBaseConfig } from '@/components/nova-ui/atmos/card';
import type { ComponentRegistryEntry } from '../types';

export const cardEntry: ComponentRegistryEntry = {
  type: 'card',
  label: 'Card',
  labelKey: 'componentTypeCard',
  category: 'atoms',
  component: CardDemo,
  baseConfig: cardBaseConfig,
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
        { value: 'ghost', label: 'Ghost', labelKey: 'valGhost' },
        { value: 'elevated', label: 'Elevated', labelKey: 'valElevated' },
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
