/**
 * Tooltip Component Entry
 */

import { TooltipDemo } from '@/components/nova-ui/atmos/tooltip';
import type { ComponentRegistryEntry } from '../types';

export const tooltipEntry: ComponentRegistryEntry = {
  type: 'tooltip',
  label: 'Tooltip',
  labelKey: 'componentTypeTooltip',
  category: 'atoms',
  component: TooltipDemo,
  baseConfig: null,
  props: [
    {
      name: 'content',
      type: 'text',
      label: 'Content',
      labelKey: 'propContent',
      defaultValue: 'Tooltip content',
      defaultValueKey: 'tooltipContentDefault',
    },
  ],
  defaultProps: {
    content: 'Tooltip content',
  },
  availableEffects: [],
};
