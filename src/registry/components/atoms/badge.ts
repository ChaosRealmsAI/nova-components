/**
 * Badge Component Entry
 */

import { Badge } from '@/components/nova-ui/atmos/badge';
import type { ComponentRegistryEntry } from '../types';

export const badgeEntry: ComponentRegistryEntry = {
  type: 'badge',
  label: 'Badge',
  labelKey: 'componentTypeBadge',
  category: 'atoms',
  component: Badge,
  baseConfig: null, // 纯槽位模式，无 baseConfig
  props: [
    {
      name: 'variant',
      type: 'select',
      label: 'Variant',
      labelKey: 'propVariant',
      options: [
        { value: 'default', label: 'Default', labelKey: 'valDefault' },
        { value: 'secondary', label: 'Secondary', labelKey: 'valSecondary' },
        { value: 'destructive', label: 'Destructive', labelKey: 'valDestructive' },
        { value: 'outline', label: 'Outline', labelKey: 'valOutline' },
      ],
      defaultValue: 'default',
    },
    {
      name: 'children',
      type: 'text',
      label: 'Text',
      labelKey: 'propText',
      defaultValue: 'Badge',
      defaultValueKey: 'badgeLabelDefault',
    },
  ],
  defaultProps: {
    variant: 'default',
    children: 'Badge',
  },
  availableEffects: ['tilt', 'glow'],
};
